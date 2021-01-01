const http = require('./httpRequest_service.js');
const get = http.get;
const post = http.post;

const getHealthCheck = async () =>{
    const output = await get('http://localhost:8081/healthcheck')
    return output;
}

module.exports = getHealthCheck