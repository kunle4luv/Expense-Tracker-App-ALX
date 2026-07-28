const express = require("express")
const cors = require("cors");
const app = express()
const {db} = require('./db/db')
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT = process.env.PORT
// Here we have the middlewares
app.use(express.json())//I used json because I want our data to be in json format
app.use(cors())//I use cors because I don't want problem accessing the server

//routes
readdirSync('./routes').map((endpoint) => app.use('/api/alxproject', require('./routes/' + endpoint)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Testing the port:', PORT);
    })
}

server()