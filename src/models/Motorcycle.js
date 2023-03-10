import Sequelize, { Model } from 'sequelize';

export default class Motorcycle extends Model {
  static init(sequelize) {
    super.init({
      brand: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: '"Brand" name must have at least 3 characters',
          },
        },
      },
      model: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: '"Model" name must have at least 3 characters',
          },
        },
      },
      year: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: '"Year" must be an integer',
          },
        },
      },
      displacement: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: '"Displacement" must be an integer',
          },
        },
      },
      cylinders: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: '"Weight" must be a float',
          },
        },
      },
      top_speed: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: '"Top speed" must be a float',
          },
        },
      },
      creator_id: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: '"Creator ID" must be an integer',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'creator_id' });
    this.hasMany(models.Photo, { foreignKey: 'motorcycle_id' });
  }
}
