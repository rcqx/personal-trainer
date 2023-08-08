import express from "express";

import {
  getAllCompostions,
  addBodyComposition,
  updateBodyComposition,
  deleteBodyComposition,
  getBodyCompositionById
} from "../../controllers/bodyComposition.js";

const router = express.Router();

// GET body compositions
router.get("/", getAllCompostions);
router.get("/:_id", getBodyCompositionById);
// create body composition
router.post("/new", addBodyComposition);
router.put("/update", updateBodyComposition);
router.delete("/delete", deleteBodyComposition);

export default router;