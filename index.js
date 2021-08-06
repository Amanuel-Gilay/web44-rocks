require ('dotenv').config() // this allows to inject fake invironment variables 
const { PORT } = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require ('helmet')

const server = express()
server.use(express.json())// teaches express to parse req.body
server.use(cors())
server.use(helmet())

server.get('/', (req, res) =>{
    res.send(`<h1>web 44 Is Awesome!<h1>`)
})

server.use('*', (req, res) => {
    res.json({
        message: 'web44 is awsome indeed'
    })
})

server.listen(PORT, () => {// Heroku machine use different port
    console.log(`listening on ${PORT}`)
})