const item = require('./item');

// export item
module.exports = (app) => {
  app.configure(item);
};
