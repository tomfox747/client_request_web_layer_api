const express = require('express');
const app = express();
const cors = require('cors')


const data_router = require('./routes/data_requests.js');
app.use(cors());
app.use('/web/data', data_router);

module.exports = app;