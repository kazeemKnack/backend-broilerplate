import { ROUTE_PATHS } from '@/utils/interfaces/route.constant';
import Route from '@/utils/interfaces/route.interface';
import { Router } from 'express';

class AuthRoute implements Route {
    public path = ROUTE_PATHS.NULL;
    public router = Router();

    initializeRoutes(): void {}
}

export default AuthRoute;
