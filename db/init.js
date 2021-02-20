const init = require('./connect')
const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority"
const databaseName = "authentication"

const connection = init(connectionString, databaseName);

module.exports = connection;