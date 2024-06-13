import renderView from '@/utilities/views';
import { Request, Response } from 'express';
import axios from 'axios';

const KYOANNA_API_LIST_URL = 'http://api.kyoanna.insomnia247.nl/api-list';

const dashboard = async (req: Request, res: Response) => {

    type APIInfo = {
        name: string,
        description: string,
        exampleLink: string,
        isOnline: boolean,
        addedAt: number
    };

    let apiList: APIInfo[];
    try {
        const response = await axios.get(KYOANNA_API_LIST_URL);
        apiList = response.data.data ?? [];
    } catch (error) {
        apiList = [];
    }

    renderView(res, 'index_dashboard', {
        title: 'Dasbor Utama',
        subTitle: 'Overview',
        page: 'dashboard',
        apiList
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