import { eachDayOfInterval } from "date-fns";
import connectDB from "./mongodb";
import Cabin from "../models/cabinModel.js";
import User from "../models/userModel.js";
import Booking from "../models/bookingModel.js";
import { isValidObjectId } from "mongoose";

/////////////
// GET

export const getCabins = async function (capacity) {
  try {
    await connectDB();
    const filters = {
      all: {},
      small: { maxCapacity: { $gte: 2, $lte: 3 } },
      medium: { maxCapacity: { $gte: 4, $lte: 7 } },
      large: { maxCapacity: { $gte: 8, $lte: 12 } },
    };

    const cabins = await Cabin.find(filters[capacity] ?? {}).lean();
    return cabins;
  } catch (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Could not load cabins");
  }
};

export const getCabin = async function (id) {
  try {
    await connectDB();

    console.log(id);

    // Validate the id before querying
    if (!isValidObjectId(id)) {
      return null; // Let Next.js handle the 404
    }

    const cabin = await Cabin.findById(id).lean();

    return JSON.parse(JSON.stringify(cabin));
  } catch (error) {
    console.error("Error fetching cabin:", error);
    throw new Error("Could not find the cabin");
  }
};

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

// Users are uniquely identified by their email address
export async function getUser(email) {
  await connectDB();

  // 1. Try to find the user by their Google ID first (Most secure)
  // 2. Fallback to Email (For existing users or first-timers)
  const user = await User.findOne({ email }).lean();

  // No error here! We handle the possibility of no guest in the sign in callback
  return JSON.parse(JSON.stringify(user));
}

export async function getBooking(id) {
  await connectDB();

  const booking = await Booking.findById(id);

  return booking;
}

export async function getBookingByIdAndUser(bookingId, userId) {
  await connectDB();
  return await Booking.findOne({ _id: bookingId, user: userId }).lean();
}

export async function getBookings(userId) {
  await connectDB();

  const bookings = await Booking.find({ user: userId });

  return JSON.parse(JSON.stringify(bookings));
}

export async function getBookedDatesByCabinId(cabinId) {
  await connectDB();

  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const bookings = await Booking.find({
    cabinId,
    $or: [{ startDate: { $gte: today } }, { status: "checked-in" }],
  }).lean();

  const bookedDates = bookings
    .map((booking) =>
      eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      }),
    )
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

/////////////
// CREATE

export async function createUser(newUser) {
  await connectDB();

  const user = await User.create(newUser);

  return user;
}

export async function createBookingData(newBooking) {
  await connectDB();

  const data = await Booking.create(newBooking);

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateUserData(email, updatedFields) {
  await connectDB();

  await User.findOneAndUpdate({ email }, { $set: updatedFields });
}

export async function updateBookingData(id, updatedFields) {
  await connectDB();
  await Booking.findByIdAndUpdate(id, updatedFields);
}

/////////////
// DELETE

export async function deleteBookingData(id) {
  await connectDB();
  await Booking.findByIdAndDelete(id);
}
