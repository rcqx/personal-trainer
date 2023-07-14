import express from "express";

import {
  getAllCompostions,
  addBodyComposition,
} from "../../controllers/bodyComposition.js";

const router = express.Router();

// GET body compositions
router.get("/", getAllCompostions);
// create body composition
router.post("/", addBodyComposition);

export default router;