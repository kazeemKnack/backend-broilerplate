import TRANSLATION_KEYS from '@/utils/translations.keys';
import HttpHandler from '@/utils/httpHandler/http.handler';
import IHttpResponse from '@/utils/interfaces/response.interface';
import { Request, Response, NextFunction } from 'express';

function errorMiddleware(
    error: IHttpResponse,
    req: Request,
    res: Response,
    _next: NextFunction
): void {
    const status = error.status || 500;
    const message = error.message || TRANSLATION_KEYS.SERVER_ERROR;
    new HttpHandler(res, {
        status,
        message,
    });
}

export default errorMiddleware;
