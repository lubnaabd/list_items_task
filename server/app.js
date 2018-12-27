// const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const { connection } = require('./database/model');
const service = require('./service');

// Create a feathers instance.
const app = express(feathers());

// Turn on JSON parser for REST services
app.use(express.json());

// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));

// Enable REST services
app.configure(express.rest());

// Enable connection
app.configure(connection);

// Enable service
app.configure(service);
app.use(express.errorHandler());

app.set('port', process.env.PORT || 5000);
module.exports = app;
