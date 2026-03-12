import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: String,
    nationality: String,
    countryFlag: String,
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  },
);

// ✅ Check if the model exists, otherwise create it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
