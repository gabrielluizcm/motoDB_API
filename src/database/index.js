import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Motorcycle from '../models/Motorcycle';
import User from '../models/User';

const models = [Motorcycle, User];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
