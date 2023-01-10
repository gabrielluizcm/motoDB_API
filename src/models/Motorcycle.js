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
      top_speed: Sequelize.FLOAT,
      creator_id: Sequelize.INTEGER,
    }, { sequelize });
    return this;
  }
}
