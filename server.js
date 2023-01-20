const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const logger = require('./utils/logger')//missing something here?...
const user = require('./routes/user');
const bodyParser = require('body-parser');

dotenv.config({ path: `./config/config.env` })

connectDB();

app.use(bodyParser.json())

const app = express();

const PORT = process.env.PORT || 5001;

app.use(logger)
app.use('/user', user)

const server = app.listen(PORT, ()=> {
    console.log(`server is listening on PORT ${PORT}`)
})

process.on('unhandledRejection', (err)=>{
    console.log(`Error: ${err.message}`)
    server.close(()=> process.exit(1))
})