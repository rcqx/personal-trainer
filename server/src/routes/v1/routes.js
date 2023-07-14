import express from "express";
const router = express.Router();

// Import route files
import bodyCompositionRoutes from './bodyComposition.js';
// const postsRoutes = require('./posts');
// Add more route files as needed

router.get("/", (req, res, next) => {
  res.json({ message: "hi" });
});

// Register route files
router.use('/body-composition', bodyCompositionRoutes);
// router.use('/posts', postsRoutes);
// Add more route files as needed

export default router;
