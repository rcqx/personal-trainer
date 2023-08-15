import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true, // Ensure the ID is unique
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure the username is unique
  },
  profile_pic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure the email is unique
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "moderator", "user"], // Example roles, you can add more if needed
    default: "user", // Default role is user
  },
  registrationDate: {
    type: Date,
    default: Date.now, // Default registration date is the current date
  },
  lastLoginDate: {
    type: Date,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);
export default User;