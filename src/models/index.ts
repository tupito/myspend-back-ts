import { Sequelize } from 'sequelize';
import EventFactory from './event-model';
// todo: import factories...

export const dbConfig = new Sequelize(
  (process.env.DB_NAME = 'myspend_dev'),
  (process.env.DB_USER = 'root'),
  (process.env.DB_PASSWORD = 'example'),
  {
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      useUTC: false, // for reading from database
      dateStrings: true,
      typeCast: true,
      timezone: 'Europe/Helsinki', // only to disable warning: "please use IANA standard timezone format ('Etc/GMT-3')"
    },
    define: {
      // https://sequelize.org/master/manual/model-basics.html#enforcing-the-table-name-to-be-equal-to-the-model-name
      freezeTableName: true, // Table name = model name
    },
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  },
);
// THIS ONES ARE THE ONES YOU NEED TO USE ON YOUR CONTROLLERS
export const Event = EventFactory(dbConfig);
