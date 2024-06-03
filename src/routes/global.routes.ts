import express from "express";
import * as mainController from '@controller/main.controller';

const router = express.Router();

router.get('/', mainController.dashboard);

export default router