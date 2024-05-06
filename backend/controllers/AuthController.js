const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {
  validateUserRegister,
  User,
  validateUserLogin,
} = require("../models/UserModel");

module.exports.registerUserCtr = asyncHandler(async (req, res) => {
  const { error } = validateUserRegister(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "this email already exists!" });
  }
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  await newUser.save();

  res.status(201).json({ message: "You're signed in successfully" });
});

module.exports.loginUserCtr = asyncHandler(async (req, res) => {
  const { error } = validateUserLogin(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "Email or Password is required!" });
  }
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Email or Password is required!" });
  }
  const token = user.generateAuthToken();
  res.status(200).json({
    _id: user._id,
    isAdmin: user.isAdmin,
    token,
  });
});
