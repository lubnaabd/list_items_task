const knex = require('knex');
require('env2')('./config.env');

// get database variables from env file
const {
  DB_USER,
  DB_HOST,
  DB_DATABASE,
} = process.env;

// connection mysql
const db = knex({
  client: 'mysql',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: '',
    database: DB_DATABASE,
  },
  pool: { min: 0, max: 7 },

});

module.exports = db;
