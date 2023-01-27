import { ROUTE_PATHS } from '@/utils/interfaces/route.constant';
import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import ErrorMiddleware from '@/middleware/error.middleware';
import helmet from 'helmet';
import Route from './utils/interfaces/route.interface';
import MessageListener from './resources/email/email.listener';
import mongoose from 'mongoose';

class App {
    public express: Application;
    public port: number;
    private listener = new MessageListener();

    constructor(routes: Route[], port: number) {
        this.express = express();
        this.port = port;

        this.initializeMiddleware();
        this.initializeRoutes(routes);
        this.initializeErrorHandling();
        this.initializeDatabaseConnection();
    }

    private initializeMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json({ limit: '100mb' }));
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private initializeRoutes(routes: Route[]): void {
        routes.forEach((route) => {
            if (route.path !== ROUTE_PATHS.NULL) {
                const endpoint = `${ROUTE_PATHS.BASE}${route.path}`.trim();
                this.express.use(endpoint, route.router);
                route.initializeRoutes();
            }
        });
    }

    private initializeErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }

    private async initializeDatabaseConnection() {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        await mongoose.connect(
            `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
        );
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
            this.listener.listen();
        });
    }
}

export default App;
