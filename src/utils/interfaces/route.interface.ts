import { ROUTE_PATHS_TYPES } from '@/utils/interfaces/route.constant';
import { Router } from 'express';

interface IRoute {
    router: Router;
    path: ROUTE_PATHS_TYPES;
    initializeRoutes: () => void;
}

export default IRoute;
