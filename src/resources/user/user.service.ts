import UserModel from '@/resources/user/user.model';
import IUser from './user.interface';

class UserService {
    private user = UserModel;

    public async updateUser(body: IUser, _id: string) {
        try {
            const user = await this.user.findOneAndUpdate({ _id }, body, {
                new: true,
            });

            return user;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default UserService;
