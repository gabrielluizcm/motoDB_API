import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Motorcycle from '../models/Motorcycle';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Motorcycle, User, Photo];
const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
