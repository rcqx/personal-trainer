import User from "../models/user.js";

class UserController {
  async createUser(req, res) {
    const userData = req.body;

    const data = new User({
      ...userData,
    });


    const newUser = await data.save();
    res.status(201).json(newUser);
  }
}

export default UserController;
