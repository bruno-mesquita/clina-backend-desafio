import type { Dialect } from 'sequelize';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development' | 'test'

      PORT: number;

      DB_TYPE: Dialect;
      DB_PASS: string;
      DB_USER: string;
      DB_HOST: string;
      DB_PORT: number;
      DB_DATABASE: string;
    }
  }
}

export {}
