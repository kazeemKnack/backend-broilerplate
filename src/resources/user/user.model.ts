import { Schema, model } from 'mongoose';
import IUser from '@/resources/user/user.interface';

const UserSchema = new Schema(
    {
        officialEmail: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        profilePhoto: {
            type: String,
        },
        basicInformationCompleted: {
            type: Boolean,
            default: false,
        },
        biography: {
            type: String,
        },
        title: {
            type: String,
        },
    },
    { timestamps: true }
);

export default model<IUser>('User', UserSchema);
