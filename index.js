require ('dotenv').config() // this allows to inject fake invironment variables 

const express = require('express')
const cors = require('cors')
const helmet = require ('helmet')

const server = express()
server.use(express.json())// teaches express to parse req.body
server.use(cors())
server.use(helmet())

server.use('*', (req, res) => {
    res.json({
        message: 'web44 is awsome indeed'
    })
})

server.listen(5000, () => {
    console.log(`listening on ${5000}`)
})