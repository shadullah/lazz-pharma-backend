import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shipping",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
