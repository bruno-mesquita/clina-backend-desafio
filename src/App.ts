import 'dotenv/config';
import 'reflect-metadata';

import type { Express } from 'express';

import express, { json } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import routerRoot from './routes';

class App {
  express: Express;

  constructor () {
    this.express = express();

    this.middlewares();
    this.config();
    this.routes();
  }

  private middlewares() {
    this.express.use(json());
    this.express.use(compression());
    this.express.use(helmet());
    this.express.use(cors());
  }

  private routes() {
    this.express.get('/', (_, res) => res.json({}))
    this.express.use('/api', routerRoot);
  }

  private config() {
    this.express.disabled('x-powered-by');
  }
}

export default new App().express;
