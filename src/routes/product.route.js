import { Router } from "express";
import {
  AddProduct,
  Allproducts,
  getSingleProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/add").post(
  upload.fields([
    {
      name: "productImage",
      maxCount: 3,
    },
  ]),
  AddProduct
);

router.route("/list").get(Allproducts);
router.route("/list/:id").get(getSingleProduct);

export default router;
