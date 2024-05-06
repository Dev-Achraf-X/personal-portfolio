const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Generate Auth token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_SECRET_KEY
  );
};

// User model
const User = mongoose.model("User", userSchema);

// User register validation
function validateUserRegister(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  });
  return schema.validate(obj);
}

// User login validation
function validateUserLogin(obj) {
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().required(),
  });
  return schema.validate(obj);
}

module.exports = { User, validateUserRegister, validateUserLogin };
