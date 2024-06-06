import express from "express";
import * as mainController from '@controller/main.controller';
import * as authController from '@controller/auth.controller';

const routes = express.Router();

routes.get('/', mainController.dashboard);
routes.get('/cookpad', mainController.cookpad)
routes.get('/pp-couple', _ => { })
routes.get('/manajemen-api-key', _ => { })
routes.get('/statistik-api-key', _ => { })
routes.get('/profil-saya', _ => { })

routes.get('/login', authController.indexLogin)
routes.get('/daftar', authController.indexRegister)
routes.get('/logout', _ => { })

export default routes