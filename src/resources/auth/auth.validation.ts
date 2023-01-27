import Joi from 'joi';
import { ROLES_ENUM } from './auth.constant';

const register = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    middleName: Joi.optional(),
});

const login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const newRole = Joi.object({
    role: Joi.string().valid(...ROLES_ENUM),
});
export default { register, login, newRole };
