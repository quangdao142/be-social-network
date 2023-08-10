const jwt = require('jsonwebtoken');
const Formatter = require("response-format");


const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return Formatter.unAuthorized("No token")
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    // Add user from payload to request object
    req.user = decoded.user;
    next();
  } catch (err) {
    return Formatter.unAuthorized("Token is not valid")
  }
}

module.exports = authMiddleware;