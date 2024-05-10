const express = require("express");
const {
  getAllProjectsCtr,
  getProjectCtr,
  updateProjectCtr,
  getProjectsCountCtr,
  projectImagesUpload,
  createProjectCtr,
} = require("../controllers/ProjectController");
const { verifyTokenAndAmin } = require("../middlewares/VerifyToken");
const ValidateObjectId = require("../middlewares/ValidateObjectId");
const photoUpload = require("../middlewares/UploadPhoto");
const router = express.Router();

router.post(
  "/add-project",
  verifyTokenAndAmin,
  photoUpload.array("images", 12),
  createProjectCtr
);

router.get("/projects", getAllProjectsCtr);

router.get("/projects/:id", ValidateObjectId, getProjectCtr);

router.put(
  "/projects/:id",
  ValidateObjectId,
  verifyTokenAndAmin,
  updateProjectCtr
);

// router.post(
//   "/projects/project-images-upload",
//   verifyTokenAndAmin,
//   photoUpload.array("images"),
//   projectImagesUpload
// );

router.get("/count/projects", verifyTokenAndAmin, getProjectsCountCtr);

module.exports = router;
