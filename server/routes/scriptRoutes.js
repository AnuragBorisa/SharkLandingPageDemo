// scriptRoutes.js
import express from 'express';
import accessSpreadsheet from '../controllers/scriptController.js';

const router = express.Router();

router.post('/spreadsheet', accessSpreadsheet);

export default router;
