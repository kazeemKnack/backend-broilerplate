import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import IAuth from '@/resources/auth/auth.interface';
import { ROLES_ENUM } from '@/resources/auth/auth.constant';

const AuthSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
        },
        roles: {
            type: [String],
            enum: ROLES_ENUM,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

AuthSchema.pre<IAuth>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
});

AuthSchema.methods.isValidPassword = async function (
    password: string
): Promise<Error | boolean> {
    return await bcrypt.compare(password, this.password);
};

export default model<IAuth>('Auth', AuthSchema);
