const express = require('express');
const app = express();
const cors = require('cors')

const healthcheck = require('./routes/healthcheck.js');
const data_router = require('./routes/data_router.js');

app.use(cors());
app.use('/healthcheck', healthcheck);
app.use('/web/data', data_router);

module.exports = app;