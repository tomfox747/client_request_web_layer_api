const authModel = require('../db/authModel')

const authOrigin = async (req,res,next) =>{
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
    
    const origins = await authModel.find({}).lean().exec();
    
    if(origins.filter(element => element.origin === ip).length > 0){
        console.log("request origin authorized")
        next();
    }else{
        console.log("request origin unauthorized")
        res.send("Client machine is not authorized to make requests")
    }
}

module.exports = authOrigin