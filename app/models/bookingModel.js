import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cabinId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cabin",
      required: true,
    },
    cabin: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    numNights: { type: Number, required: true },
    numGuests: { type: Number, required: true },
    cabinPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "unconfirmed", required: true },
    isPaid: { type: Boolean, default: false, required: true },
    observations: String,
  },
  {
    timestamps: true,
  },
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default Booking;
