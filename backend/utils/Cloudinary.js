const cloundinary = require("cloudinary");

cloundinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

// Cloudinary upload images
const cloudinaryUploadImages = async (filesToUpload) => {
  try {
    const uploadPromises = filesToUpload.map((file) => {
      return cloundinary.uploader.upload(file, {
        resource_type: "auto",
      });
    });
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    return error;
  }
};

// Cloudinary remove image
const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const result = await cloundinary.uploader.destroy(imagePublicId);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  cloudinaryUploadImages,
  cloudinaryRemoveImage,
};
