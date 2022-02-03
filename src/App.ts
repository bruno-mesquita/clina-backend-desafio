import 'dotenv/config';

import type { Express } from 'express';

import express, { json } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

class App {
  express: Express;

  constructor () {
    this.express = express();

    this.middlewares();
    this.config();
  }

  private middlewares() {
    this.express.use(json());
    this.express.use(compression());
    this.express.use(helmet());
    this.express.use(cors());
  }

  private config() {
    this.express.disabled('x-powered-by');
  }
}

export default new App().express;
