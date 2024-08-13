import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      trim: true,
    },
    slug: {
      type: string,
      unique: true,
      index: true,
    },
    thumbnail: {
      type: string,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
