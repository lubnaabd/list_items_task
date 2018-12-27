const app = require('./app');

// listen port 4000
const port = app.get('port');
app.listen(port, () => console.log(`the server started on port ${port}`));
