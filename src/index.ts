import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import AuthRoute from '@/resources/auth/auth.route';

validateEnv();

const app = new App(
    [
        new AuthRoute(),
    ],
    Number(process.env.PORT)
);

app.listen();
