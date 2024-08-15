import { Router } from "express";
import {
  addItemToOrder,
  getCartItems,
  updateOneCart,
} from "../controllers/cart.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(addItemToOrder);
router.route("/list").get(getCartItems);
router.route("/:id").patch(updateOneCart);

export default router;
