import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: '"Name" must be at least 3 characters long',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: {
            msg: '"Email" must be valid',
          },
        },
        unique: {
          msg: '"Email" already registered',
        },
      },
      password_hash: Sequelize.STRING,
      password: {
        type: Sequelize.VIRTUAL,
        validate: {
          len: {
            args: [6, 50],
            msg: '"Password" must have 6 to 50 characters',
          },
        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
