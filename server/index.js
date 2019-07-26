require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

//inspect this when massive comes into play
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err))

app.use(express.json())

app.listen(SERVER_PORT, () => 
console.log(`Countdown has begun: ${SERVER_PORT} `)
)