import express from "express";
import * as mainController from '@controller/main.controller';

const routes = express.Router();

routes.get('/', mainController.dashboard);
routes.get('/cookpad', mainController.cookpad)
routes.get('/statistik', _ => { })

export default routes