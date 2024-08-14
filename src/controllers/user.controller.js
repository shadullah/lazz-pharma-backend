import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;
  console.log("email : ", email);
  console.log(req.body);

  if ([fullname, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "all fields are required");
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  console.log(req.files);

  const photoLocalPath = req.files?.photo[0]?.path;

  if (!photoLocalPath) {
    throw new ApiError(400, "Photo file is required");
  }

  const photo = await uploadOnCloudinary(photoLocalPath);

  if (!photo) {
    throw new ApiError(400, "photo file is required");
  }

  const user = await User.create({
    fullname,
    email,
    password,
    photo: photo?.url,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something wrong registering the User");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created successfully!!"));
});

export { registerUser };
