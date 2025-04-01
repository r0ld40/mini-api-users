import User from '@/app/models/tb-users';
import { Sequelize } from 'sequelize';
import dbconfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbconfig);

    models.map((model) => model.init(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
    // Caso houvesse associação com outras tabelas
  }
}

export default new Database();
