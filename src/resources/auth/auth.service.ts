import UserModel from '@/resources/user/user.model';
import AuthModel from '@/resources/auth/auth.model';
import TRANSLATION_KEYS from '@/utils/translations.keys';
import IAuth from './auth.interface';

class AuthService {
    private auth = AuthModel;
    private user = UserModel;

    /**
     * Fetches the authenticated user
     */
    public async getAuthenticatedUser(authReq: IAuth): Promise<IAuth | Error> {
        try {
            const auth = await this.auth
                .findOne({ _id: authReq._id })
                .select('-password')
                .populate({ path: 'user' })
                .exec();

            if (!auth) {
                throw new Error(TRANSLATION_KEYS.NOT_AUTHORIZED);
            }

            return auth;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default AuthService;
