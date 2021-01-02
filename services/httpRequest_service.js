const http = require('http');
const {getError} = require('../utilities/errorHandler');
const fileName = 'httpRequest_service';

const getRequest = (url, params, body) =>{
    try{
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
    }catch(e){
        return getError(e,e.code,fileName,'getRequest');
    }
}

const postRequest = (url, params, body) =>{
    try{
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
    }catch(e){
        return getError(e,e.code,fileName,'postRequest');
    }
}

module.exports = {
    get: getRequest,
    post: postRequest
} 