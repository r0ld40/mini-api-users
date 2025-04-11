import express from 'express';
import routes from './route';
import cors from 'cors';
import './database';

class Index {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({ origin: 'http://localhost:3001' }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new Index().app;
