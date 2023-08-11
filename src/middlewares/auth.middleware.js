const jwt = require('jsonwebtoken');
const Formatter = require("response-format");
const env = require('../config/env');


const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return Formatter.unAuthorized("No token")
  }

  try {
    // Verify token
    if (!token.startsWith("Bearer ")) {
      return Formatter.unAuthorized("Token is not valid")
    }
    const decoded = jwt.verify(token.replace("Bearer ", ""), env.data.JwtSecret);
    // Add user from payload to request object\
    req.userId = decoded.userId;
    req.username = decoded.username;
    req.fullname = decoded.fullname;
    next();
  } catch (err) {
    return Formatter.unAuthorized("Token is not valid")
  }
}

module.exports = authMiddleware;