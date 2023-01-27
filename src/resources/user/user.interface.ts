import { Document } from 'mongoose';

export default interface IUser extends Document {
    ORCID: string;
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    profilePhoto: string;
    basicInformationCompleted: boolean;
    biography: string;
    title: string;
    officialEmail: string;
}