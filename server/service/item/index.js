const services = require('feathers-knex');

const db = require('../../database/db_connection');

module.exports = (app) => {
  //  create the route and set services to the this route
  app.use('/items', services({ name: 'items', Model: db }));
};
