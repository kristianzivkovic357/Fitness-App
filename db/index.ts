/*import User from '../models/user';
import UserAuth from '../models/user_auth';
import { Attribute from '../models/attribute';
import Currency from '../models/currency';*/
import {Sequelize} from 'sequelize-typescript';
import {sequelizeOptions} from '../config/index.js';
import * as path from 'path';
import { snake2Pascal } from '../utils/string';
const {
  DB,
  DB_USER,
  DB_PASSWORD
} = process.env;


const db = new Sequelize({
  database: DB,
  dialect: 'mysql',
  username: DB_USER,
  password: DB_PASSWORD,
  ...sequelizeOptions,
  modelPaths: [path.join(__dirname + '/../repo/models')],
  modelMatch: (filename, member) => {
    // console.log(filename, member, snake2Pascal(filename) === member)
    return snake2Pascal(filename) === member;
  },
});


export default db;
/*export {
  User,
  UserAuth,
  Attribute,
  Currency
}*/