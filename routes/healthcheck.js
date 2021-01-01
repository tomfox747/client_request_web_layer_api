const express = require('express');
const router = express.Router();
const healthCheck_service = require('../services/healthcheck_service')


router.get('/', async (req,res) =>{
    let response = await healthCheck_service();
    res.send(response);
})

module.exports = router;