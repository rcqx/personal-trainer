import express from "express";

import {
  getAllCompostions,
  addBodyComposition,
  updateBodyComposition
} from "../../controllers/bodyComposition.js";

const router = express.Router();

// GET body compositions
router.get("/", getAllCompostions);
// create body composition
router.post("/", addBodyComposition);
router.put("/update", updateBodyComposition);

export default router;