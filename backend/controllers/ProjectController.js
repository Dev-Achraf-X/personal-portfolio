const asyncHandler = require("express-async-handler");
const path = require("path");
const fs = require("fs");
const {
  Project,
  validateUpdateProject,
  validateProject,
} = require("../models/ProjectModel");
const { cloudinaryUploadImages } = require("../utils/Cloudinary");

module.exports.createProjectCtr = asyncHandler(async (req, res) => {
  // validation for images
  console.log(req);
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "no images provided!" });
  }
  // validation for data
  const { error } = validateProject(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // upload photo
  const images = req.files.map((file) => ({ path: file.path }));
  const imagesPath = images.map((item) => item.path);

  // Upload images to cloundinary
  const uploadedImages = await cloudinaryUploadImages(imagesPath);
  if (!uploadedImages) {
    return res
      .status(500)
      .json({ message: "Failed to upload images to Cloudinary" });
  }

  const secureUrl = uploadedImages.map((item) => item.secure_url);
  const publicId = uploadedImages.map((item) => item.public_id);

  const stackArray = req.body.stack.map((item) => ({
    stackName: item,
  }));

  // create new project and save it to db
  const project = await Project.create({
    title: req.body.title,
    desc: req.body.desc,
    category: req.body.category,
    images: {
      url: secureUrl,
      publicId: publicId,
    },
    stack: stackArray,
    githubLink: req.body.githubLink,
    globalLink: req.body.globalLink,
  });

  // send response to client
  res.status(201).json(project);

  // remove images from the server
  imagesPath.map((pathItem) => {
    fs.unlinkSync(pathItem);
  });
});

module.exports.getAllProjectsCtr = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

module.exports.getProjectCtr = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found!" });
  }
  res.status(200).json(project);
});

module.exports.updateProjectCtr = asyncHandler(async (req, res) => {
  const { error } = validateUpdateProject(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        githubLink: req.body.githubLink,
        globalLink: req.body.globalLink,
        stack: req.body.stack,
      },
    },
    { new: true }
  );

  res.status(200).json(updatedProject);
});

module.exports.getProjectsCountCtr = asyncHandler(async (req, res) => {
  const count = await Project.countDocuments();
  res.status(200).json(count);
});

module.exports.projectImagesUpload = asyncHandler(async (req, res) => {
  // // validation
  // console.log(req.files);
  // if (!req.files) {
  //   return res.status(400).json({ message: "no images provided!" });
  // }
  // // Get images path
  // const imagesPath = path.join(
  //   __dirname,
  //   `../../images/${req.files.map((file) => file.filename)}`
  // );
  // let paths = imagesPath.split(",");
  // const commonRoot = "E:\\Programming\\Achraf Portfolio-1\\images\\";
  // paths = paths.map((path, idx) => {
  //   if (idx === 0) {
  //     return path;
  //   } else {
  //     const parts = path.split("\\");
  //     const index = parts.findIndex((part) => part !== "E:");
  //     return commonRoot + parts.slice(index).join("\\");
  //   }
  // });
  // // Upload images to cloundinary
  // const result = await cloudinaryUploadImages(paths);
  // res.status(200).json({ message: "images uploaded" });
  // // remove images from the server
  // paths.map((pathItem) => {
  //   fs.unlinkSync(pathItem);
  // });
});
