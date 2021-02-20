const mongoose = require('mongoose')
const db = require('./init')
const connection = db

const authSchema = mongoose.Schema({
    origin:String
},{collection:"clientexternalorigins"})

const authModel = connection.model('clientexternalorigins', authSchema)

module.exports = authModel