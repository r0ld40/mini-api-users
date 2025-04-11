import { Sequelize } from 'sequelize';
import User from './tb-users.js';

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const models = {
  users: User.init(sequelize),
};

sequelize.sync({ alter: true }); // cria ou atualiza a tabela se não existir
sequelize
  .authenticate()
  .then(() => console.log('✅ Conectado ao banco com sucesso!'))
  .catch((err) => console.error('❌ Erro ao conectar ao banco:', err));

export default models;
export { sequelize };
