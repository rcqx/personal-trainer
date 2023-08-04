import express from "express";

import {
  getAllCompostions,
  addBodyComposition,
  updateBodyComposition,
  deleteBodyComposition
} from "../../controllers/bodyComposition.js";

const router = express.Router();

// GET body compositions
router.get("/", getAllCompostions);
// create body composition
router.post("/new", addBodyComposition);
router.put("/update", updateBodyComposition);
router.delete("/delete", deleteBodyComposition);

export default router;