import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Motorcycle from '../models/Motorcycle';

const models = [Motorcycle];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
