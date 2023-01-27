import { Request, Response } from 'express';
import UserService from '@/resources/user/user.service';
import HttpHandler from '@/utils/httpHandler/http.handler';

class UserController {
    private userService = new UserService();

    public updateUser = async (
        req: Request,
        res: Response
    ): Promise<Response | void> => {
        try {
            const user = await this.userService.updateUser(
                req.body,
                req.params.id
            );

            new HttpHandler(res, { status: 201, data: user });
        } catch (error: any) {
            new HttpHandler(res, { status: 409, message: error.message });
        }
    };
}

export default UserController;
