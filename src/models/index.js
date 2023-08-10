const mongoose = require('mongoose')
const env = require('../config/env');

async function connectDb() {
    try {
        await mongoose.connect( env.data.MongoDBUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected')
    } catch(error) {
        console.log('Database failue')
    }
}

module.exports = {connectDb}