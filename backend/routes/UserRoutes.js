const express = require("express");
const { getAllUsers } = require("../controllers/UserController");
const { verifyTokenAndAmin } = require("../middlewares/VerifyToken");
const router = express.Router();

router.get("/users", verifyTokenAndAmin, getAllUsers);

module.exports = router;
