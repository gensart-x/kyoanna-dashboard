import renderView from '@/utilities/views';
import { Request, Response } from 'express';

const dashboard = async (req: Request, res: Response) => {
    renderView(res, 'index_dashboard', {
        title: 'Dasbor Utama',
        subTitle: 'Dasbor',
        page: 'dashboard'
    })
}

const cookpad = async (req: Request, res: Response) => {
    renderView(res, 'index_cookpad', {
        title: 'Cookpad',
        subTitle: 'Cookpad',
        page: 'cookpad',
    })
}

export {
    dashboard, cookpad
}