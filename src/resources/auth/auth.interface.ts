import IUser from '@/resources/user/user.interface';
import { ROLES_TYPES } from '@/resources/auth/auth.constant';
import { Document } from 'mongoose';

export default interface IAuth extends Document {
    email: string;
    password: string;
    roles: ROLES_TYPES;
    user: IUser;
    accessToken?: string; // never saved
}
