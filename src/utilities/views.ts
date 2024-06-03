import { Response } from "express";
import path from "path";

interface ViewData {
    [key: string]: any
}

const renderView = (res: Response, viewName: string, data: ViewData) => {
    res.render('templates/base', {
        view: path.join('../', viewName),
        viewData: data
    })
}

export default renderView;