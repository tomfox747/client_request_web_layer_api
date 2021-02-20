const mongoose = require('mongoose');

const dbManager = (connectionString, databaseName) => {

    const connection = mongoose.createConnection(connectionString, {useUnifiedTopology:true, useNewUrlParser:true, dbName:databaseName})

    connection.on('connected',() =>{
        console.log("successfully connected to database")
    })
    connection.on('error',() =>{
        console.log("error connecting to the database")
        process.exit(0)
    })

    connection.on("SIGINT", () =>{
        connection.close(() =>{
            process.exit(0)
        })
    })

    return connection
}

module.exports = dbManager;