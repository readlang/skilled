const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false) // still not sure what true or false does...
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB;