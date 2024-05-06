const jwt = require("jsonwebtoken");

// verify token
function verifyToken(req, res, next) {
  const authToken = req.headers.authorization;
  if (authToken) {
    const token = authToken.split(" ")[1];
    try {
      const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decodedPayload;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token, access denied!" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "no token provided, access denied!" });
  }
}

// verify token & isAdmin
function verifyTokenAndAmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: "Not allowed!, Only admin" });
    }
  });
}

module.exports = {
  verifyToken,
  verifyTokenAndAmin,
};
