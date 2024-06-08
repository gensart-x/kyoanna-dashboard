import renderView from '@/utilities/views';
import { Request, Response } from 'express';

const dashboard = async (req: Request, res: Response) => {
    renderView(res, 'index_dashboard', {
        title: 'Dasbor Utama',
        subTitle: 'Overview',
        page: 'dashboard'
    })
}

const statistic = async (req: Request, res: Response) => {
    renderView(res, 'index_statistic', {
        title: 'Statistik API',
        subTitle: 'API Statistic',
        page: 'statistic',
    })
}

export {
    dashboard, statistic
}