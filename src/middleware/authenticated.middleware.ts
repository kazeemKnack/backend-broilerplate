import IAuth from '@/resources/auth/auth.interface';
import HttpHandler from '@/utils/httpHandler/http.handler';
import TRANSLATION_KEYS from '@/utils/translations.keys';
import AuthModel from '@/resources/auth/auth.model';
import { Request, Response, NextFunction } from 'express';
import token from '@/utils/token';
import Token from '@/utils/interfaces/token.interface';
import jwt from 'jsonwebtoken';

async function authenticatedMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    const accessToken = req.headers['x-access-token'];

    try {
        if (!accessToken) {
            new HttpHandler(res, {
                message: TRANSLATION_KEYS.NOT_AUTHORIZED,
                status: 401,
            });
        } else {
            const payload: Token | jwt.JsonWebTokenError =
                await token.verifyToken(accessToken as string);

            if (payload instanceof jwt.JsonWebTokenError) {
                new HttpHandler(res, {
                    message: TRANSLATION_KEYS.NOT_AUTHORIZED,
                    status: 401,
                });
            } else {
                const auth = await AuthModel.findById(payload.id)
                    .select('-password')
                    .exec();
                if (!auth) {
                    new HttpHandler(res, {
                        message: TRANSLATION_KEYS.NOT_AUTHORIZED,
                        status: 401,
                    });
                }

                req.auth = auth as IAuth;
            }

            return next();
        }
    } catch (error) {
        new HttpHandler(res, {
            message: TRANSLATION_KEYS.NOT_AUTHORIZED,
            status: 401,
        });
    }
}

export default authenticatedMiddleware;
