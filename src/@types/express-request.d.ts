import Client from '@core/client';

declare global {
  namespace Express {
    interface Request {
      userId: number;
    }
  }
}

export {};
