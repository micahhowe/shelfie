require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getProducts)


app.use(express.json())

app.listen(SERVER_PORT, () => 
console.log(`Countdown has begun: ${SERVER_PORT} `)
)