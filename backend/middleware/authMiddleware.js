import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //   The line below extracts the token from the headers into
      //   "Bearer" $ "token" which is stores in index 1 of the array
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);

      next();
    } catch (error) {}
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
