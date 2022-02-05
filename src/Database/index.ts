import { createConnection } from 'typeorm';

class Database {
  async init(): Promise<void> {
    try {
      await createConnection();
    } catch (err) {
      console.log('Erro ao se conectar ao database');
    }
  }
}

export default Database;
