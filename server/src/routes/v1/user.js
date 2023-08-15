import express from "express";
import UserController from '../../controllers/user.js'
import { catchAsyncErrors } from "../../middlewares/catchAsyncErrors.js";

const router = express.Router();
const userController = new UserController();


router.post("/new", catchAsyncErrors(userController.createUser.bind(userController)));
export default router;