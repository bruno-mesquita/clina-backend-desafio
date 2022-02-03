import { Sequelize } from 'sequelize';

import sequelizeConfig from '../config/database';


class Database {
  private sequelize: Sequelize;

  async init(): Promise<void> {
    try {
      this.sequelize = new Sequelize(sequelizeConfig);

      await this.sequelize.authenticate();
    } catch (err) {
      console.log('Erro ao se conectar ao database');
    }
  }

  public async disconnect() {
    await this.sequelize.close();
  }
}

export default Database;
