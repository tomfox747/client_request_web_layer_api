const mongoose = require('mongoose');

const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority"
const databaseName = "authentication"

const authOrigin = async (req,res,next) =>{
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
    
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName });
    
    mongoose.connection.on("connected", function () {
        console.log(`Mongoose connection open to database`);
    });
    mongoose.connection.on("error", function (err) {
        console.error("Mongoose connection error", err);
        process.exit(0);
    });

    const schema = new mongoose.Schema({
        origin:String,
    }) 
    const OriginModel = mongoose.model('clientexternalorigins', schema);

    const response = await OriginModel.find({}).lean().exec();
    
    if(response.filter(element => element.origin === ip)){
        console.log("request origin authorized")
    }else{
        console.log("request origin unauthorized")
        res.send("Client machine is not authorized to make requests")
    }
    delete mongoose.connection.models['clientexternalorigins'];

    next();
}

module.exports = authOrigin