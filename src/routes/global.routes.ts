import express from "express";
import * as mainController from '@controller/main.controller';

const routes = express.Router();

routes.get('/', mainController.dashboard);
routes.get('/cookpad', mainController.cookpad)
routes.get('/pp-couple', _ => { })
routes.get('/manajemen-api-key', _ => { })
routes.get('/statistik-api-key', _ => { })
routes.get('/profil-saya', _ => { })
routes.get('/logout', _ => { })
routes.get('/login', _ => { })
routes.get('/daftar', _ => { })

export default routes