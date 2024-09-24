const express = require("express")
const cors = require("cors");
const app = express()
const {db} = require('./db/db')
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT =process.env.PORT
// Here we have the middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/alxproject', require('./routes/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Testing the port:', PORT);
    })
}

server()