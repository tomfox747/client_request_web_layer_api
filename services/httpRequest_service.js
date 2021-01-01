const http = require('http');

const getRequest = (url, params, body) =>{
    return new Promise((resolve, reject) =>{
        http.get(url, (res) =>{
            res.setEncoding('utf8');
            res.on('data',(body) =>{
                resolve(body);
            })
            res.on('error',(err) =>{
                reject(err);
            })
        })
    })
}

const postRequest = (url, params, body) =>{
    return new Promise((resolve, reject) =>{
        http.post(url, (res) =>{
            res.setEncoding('utf8');
            res.on('data',(body) =>{
                resolve(body);
            })
            res.on('error',(err) =>{
                reject(err);
            })
        })
    })
}

module.exports = {
    get: getRequest,
    post: postRequest
} 