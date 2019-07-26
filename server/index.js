require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

app.get('/api/inventory', ctrl.getProducts)

app.post('/api/product', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => 
    console.log(`Countdown has begun: ${SERVER_PORT} `)
    )
}).catch(err => console.log(err))

