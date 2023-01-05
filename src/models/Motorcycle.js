import Sequelize, { Model } from 'sequelize';

export default class Motorcycle extends Model {
  static init(sequelize) {
    super.init({
      brand: Sequelize.STRING,
      model: Sequelize.STRING,
      year: Sequelize.INTEGER,
      displacement: Sequelize.INTEGER,
      cylinders: Sequelize.STRING,
      weight: Sequelize.FLOAT,
      topSpeed: Sequelize.FLOAT,
    }, { sequelize });
    return this;
  }
}
