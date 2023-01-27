import Auth from '@/resources/auth/auth.interface';

declare global {
    namespace Express {
        export interface Request {
            auth: Auth;
        }
    }
}
