import { ROUTE_PATHS } from '@/utils/interfaces/route.constant';
import Route from '@/utils/interfaces/route.interface';
import { Router } from 'express';
import authenticated from '@/middleware/authenticated.middleware';
import UserController from './user.controller';

class UserRoute implements Route {
    public path = ROUTE_PATHS.NULL;
    public router = Router();
    private userController = new UserController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes(): void {
        this.router.post(`/:id`, authenticated, this.userController.updateUser);
    }
}

export default UserRoute;
