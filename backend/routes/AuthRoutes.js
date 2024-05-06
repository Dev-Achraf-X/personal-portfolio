const express = require("express");
const {
  registerUserCtr,
  loginUserCtr,
} = require("../controllers/AuthController");
const router = express.Router();

// User Auth register
router.post("/auth/admin-register", registerUserCtr);
// User Auth login
router.post("/auth/admin-login", loginUserCtr);

module.exports = router;
