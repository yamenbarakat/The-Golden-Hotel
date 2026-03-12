import mongoose from "mongoose";

const CabinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A cabin must have a name"],
    unique: true,
  },
  maxCapacity: {
    type: Number,
    required: [true, "A cabin must have a maximum capacity"],
  },
  regularPrice: {
    type: Number,
    required: [true, "A cabin must have a regular price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: [true, "A cabin must have an image"],
  },
  description: {
    type: String,
  },
  breakfatsPrice: {
    type: Number,
  },
});

const Cabin = mongoose.models.Cabin || mongoose.model("Cabin", CabinSchema);

export default Cabin;
