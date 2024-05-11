const mongoose = require("mongoose");
const Joi = require("joi");

// Define the project schema
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    images: {
      url: [String],
      publicId: [String],
    },
    category: {
      type: String,
      required: true,
    },
    stack: [{ stackName: { type: String } }],
    githubLink: {
      type: String,
      default: "",
    },
    globalLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Create a model based on the schema
const Project = mongoose.model("Project", projectSchema);

// validate create project
function validateProject(obj) {
  const schema = Joi.object({
    title: Joi.string().trim().required(),
    desc: Joi.string().trim().required(),
    category: Joi.string().trim().required(),
    githubLink: Joi.string().trim(),
    globalLink: Joi.string().trim(),
    stack: Joi.array(),
  });
  return schema.validate(obj);
}

// validate update project
function validateUpdateProject(obj) {
  const schema = Joi.object({
    title: Joi.string().trim(),
    desc: Joi.string().trim(),
    category: Joi.string().trim(),
    githubLink: Joi.string().trim(),
    globalLink: Joi.string().trim(),
    stack: Joi.array(),
  });
  return schema.validate(obj);
}

module.exports = { Project, validateProject, validateUpdateProject };
