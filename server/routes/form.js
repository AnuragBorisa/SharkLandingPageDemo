import express from "express"
import postFormData from "../controllers/form.js";
const router = express.Router();

router.post("/form",postFormData);
export default router;
