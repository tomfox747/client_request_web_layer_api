const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const authOrigin = require('./middleware/authoriseOrigin')

const healthcheck = require('./routes/healthcheck.js');
const data_router = require('./routes/data_router.js');

app.use(bodyParser.json());
app.use(cors());
console.log("completed middleware");
app.use('/healthcheck', healthcheck);
app.use('/web/data', authOrigin, data_router);

module.exports = app;