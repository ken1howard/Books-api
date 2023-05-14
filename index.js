require('dotenv').config()
const express = require('express')
const book = express()


book.use('/', (req, res) => {
    res.send('Hello World')
})

book.get('/', (req, res) => {
    res.send('GET/books')
})


book.listen(process.env.PORT)