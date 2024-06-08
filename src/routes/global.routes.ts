import express from "express";
import * as mainController from '@controller/main.controller';

const routes = express.Router();

routes.get('/', mainController.dashboard);
routes.get('/statistik-api', mainController.statistic);

export default routes