import { Router } from "express";
import {
  createCategory,
  deleteAcategory,
  getAllCategoy,
  updateAcategory,
} from "../controllers/category.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  createCategory
);

router.route("/all").get(getAllCategoy);
router.route("/all/:id").put(
  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  updateAcategory
);
router.route("/:id").delete(deleteAcategory);

export default router;
