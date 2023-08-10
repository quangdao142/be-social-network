const mongoose = require('mongoose')
const env = require('../env')

async function connect() {
    try {
        await mongoose.connect(env.data.MongoDBUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected')
    } catch(error) {
        console.log('Database failue')
    }
}

module.exports = {connect}