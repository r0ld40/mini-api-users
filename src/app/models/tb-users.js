import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id_user: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        email: {
          type: Sequelize.STRING,
          unique: true,
        },
        date_birth: Sequelize.DATE,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      {
        sequelize,
        freezeTableName: true,
        tableName: 'users',
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  // Caso houvesse uma tabela associativa para se conectar com a User
  // static associate(models) {
  //   this.belongsTo(models.Address, { foreignKey: 'id_user', as: 'addresses' });
  // }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
