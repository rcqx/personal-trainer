import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  id: {
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

// Add a pre-save middleware to hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next(); // Skip hashing if password isn't modified
  }

  try {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// Hash the password using your preferred hashing library (e.g., bcrypt)
async function hashPassword(password) {
  const saltRounds = 10; // Number of salt rounds for bcrypt
  return await bcrypt.hash(password, saltRounds);
}

const User = mongoose.model("User", userSchema);
export default User;