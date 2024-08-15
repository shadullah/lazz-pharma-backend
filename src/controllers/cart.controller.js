import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Product } from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Cart } from "../models/cart.model.js";
import { User } from "../models/user.model.js";

const addItemToOrder = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  console.log(productId);

  if (!(productId && quantity)) {
    throw new ApiError(400, "All fields are required");
  }

  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  //   const customer = await User.findById(customerId);
  //   if (!customer) {
  //     throw new ApiError(404, "Customer not found");
  //   }

  const itemOrdered = await Cart.create({
    // customer: customerId,
    productId: product,
    quantity,
  });

  if (!itemOrdered) {
    throw new ApiError(400, "Error in creating cart item");
  }

  res
    .status(200)
    .json(new ApiResponse(200, itemOrdered, "Cart item created successfully"));
});

const getCartItems = asyncHandler(async (req, res) => {
  const cart = await Cart.find({});

  if (!cart) {
    throw new ApiError(400, "Cart is empty");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, cart, "cart fetched successfully"));
});

const updateOneCart = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { quantity } = req.body;

  const cartId = await Cart.findById(id);

  if (!cartId) {
    throw new ApiError(404, "cart not found");
  }

  if (quantity) {
    cartId.quantity = quantity;
  }

  const updatedCart = await cartId.save();
  console.log(updatedCart);

  return res
    .status(200)
    .json(new ApiResponse(200, updatedCart, "Updated cart success"));
});

export { addItemToOrder, getCartItems, updateOneCart };
