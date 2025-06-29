import { v2 as cloudinary } from "cloudinary";
import config from "../config/index.js";


cloudinary.config({
  cloud_name: config.cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

export const sendImageToCloudinary = async (name, buffer, mimetype) => {
  try {
    const base64Image = `data:${mimetype};base64,${buffer.toString("base64")}`;
    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      public_id: name.split(".")[0],
      folder: "lostnet",
    });
    return uploadResult;
  } catch (error) {
    throw new Error("Image upload failed to Cloudinary: " + error.message);
  }
};
