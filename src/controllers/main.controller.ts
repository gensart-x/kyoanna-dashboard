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

    type APIStatistics = {
        totalHit: number,
    };

    let statistics: APIStatistics;
    let totalApi: number = 0;
    try {
        const response = await axios.get(KYOANNA_API_LIST_URL);
        statistics = response.data.statistics ?? {
            totalHit: 0
        };
        totalApi = response.data.data?.length ?? 0;
    } catch (error) {
        statistics = {
            totalHit: 0
        };
    }

    renderView(res, 'index_statistic', {
        title: 'Statistik API',
        subTitle: 'API Statistic',
        page: 'statistic',
        statistics,
        totalApi
    })
}

export {
    dashboard, statistic
}