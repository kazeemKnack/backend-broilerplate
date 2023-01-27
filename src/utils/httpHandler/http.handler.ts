import { Response } from 'express';
import IHttpResponse from '@/utils/interfaces/response.interface';

class HttpHandler {
    private httpResponse: IHttpResponse;

    constructor(res: Response, httpResponse: IHttpResponse) {
        this.httpResponse = httpResponse;
        this.sendResponse(res);
    }

    private sendResponse(res: Response) {
        const httpResponse = { ...this.httpResponse };
        delete httpResponse.status;

        return res.status(this.httpResponse.status || 200).json(httpResponse);
    }
}

export default HttpHandler;
