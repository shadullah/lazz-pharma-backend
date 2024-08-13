import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
  division: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export const Shipping = mongoose.model("Shipping", shippingSchema);
