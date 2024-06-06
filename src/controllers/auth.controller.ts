import { Request, Response } from 'express';
import renderView from '@utilities/views';

const indexLogin = async (req: Request, res: Response) => {
    renderView(res, 'auth/index_login', {
        title: 'Login Kyoanna REST API Dashboard',
        subTitle: 'Login Akun'
    })
}

const indexRegister = async (req: Request, res: Response) => {
    renderView(res, 'auth/index_register', {
        title: 'Daftar Akun Kyoanna REST API Dashboard',
        subTitle: 'Daftar Akun'
    })
}

export {
    indexLogin, indexRegister
}