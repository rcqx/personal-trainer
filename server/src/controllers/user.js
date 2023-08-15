import User from "../models/user.js";
import BaseError from "../utils/baseError.js";

class UserController {
  async createUser(req, res, next) {
    const {
      name,
      username,
      profile_pic,
      email,
      password,
      confirmPassword,
      dateOfBirth,
      address,
      phoneNumber,
    } = req.body;

    if (!username) {
      return next(new BaseError("Please enter username", 400));
    } else if (!password) {
      return next(new BaseError("Please enter password", 400));
    } else if (!email) {
      return next(new BaseError("Please enter first name", 400));
    }
    const data = new User({
      name,
      username,
      profile_pic,
      email,
      password,
      confirmPassword,
      dateOfBirth,
      address,
      phoneNumber,
    });

    if (password !== confirmPassword)
      next(new BaseError("Passwords don't match", 400));

    const newUser = await data.save();
    res.status(201).json(newUser);
  }
}

export default UserController;
