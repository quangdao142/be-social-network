const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://goldfever:goldfever123@localhost:27017/?authMechanism=DEFAULT',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected')
    } catch(error) {
        console.log('Database failue')
    }
}

module.exports = {connect}