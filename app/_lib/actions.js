"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { AuthError } from "next-auth";
import {
  createBookingData,
  deleteBookingData,
  getBookingByIdAndUser,
  updateBookingData,
  updateUserData,
} from "./data-service";
import { redirect } from "next/navigation";

// Custom helper that works in all versions
function isRedirect(error) {
  return (
    error?.message?.includes("NEXT_REDIRECT") ||
    error?.digest?.includes("NEXT_REDIRECT")
  );
}

export async function signInAction() {
  try {
    await signIn("google", { redirectTo: "/account" });
  } catch (error) {
    if (isRedirect(error)) {
      throw error;
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case "OAuthSignInError":
          return { error: "Google sign-in failed" };
        case "OAuthAccountNotLinked":
          return { error: "Email already used with different provider" };
        default:
          return { error: "Authentication error" };
      }
    }

    return { error: "Failed to sign in" };
  }
}

export async function signOutAction() {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    if (isRedirect(error)) {
      throw error;
    }
    return { error: "Failed to sign out" };
  }
}

export async function updateUser(prevState, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const name = formData.get("name");
  if (!name) return { error: "You must set a name" };

  const nationalID = formData.get("nationalID");
  const nationalityRaw = formData.get("nationality");
  if (!nationalityRaw) return { error: "Please select a country" };

  const [nationality, countryFlag] = nationalityRaw.split("%");

  if (nationalID !== "" && !/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    return { error: "Please provide a valid national ID" };

  const updateData = { name, nationality, countryFlag, nationalID };

  try {
    await updateUserData(session.user.email, updateData);
  } catch (err) {
    return { error: "Failed to update profile. Please try again." };
  }

  revalidatePath("/account/profile");
  return { success: true };
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const booking = await getBookingByIdAndUser(bookingId, session.user.userId);
  if (!booking) throw new Error("You are not allowed to delete this booking");

  await deleteBookingData(bookingId);
  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const bookingId = formData.get("bookingId");

  //  Verify ownership before updating
  const booking = await getBookingByIdAndUser(bookingId, session.user.userId);
  if (!booking) throw new Error("You are not allowed to edit this booking");

  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations").slice(0, 1000); // ✅ limit length

  await updateBookingData(bookingId, { numGuests, observations });

  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // validate dates
  if (!bookingData.startDate || !bookingData.endDate)
    throw new Error("Please select a date range");

  if (bookingData.numNights < 1)
    throw new Error("Please select a valid date range");

  const newBooking = {
    ...bookingData,
    user: session.user.userId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  await createBookingData(newBooking);

  revalidatePath(`/rooms/${bookingData.cabinId}`);

  redirect("/rooms/thankyou");
}
