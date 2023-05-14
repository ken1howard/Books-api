const books = require('express').Router()

books.get('/', (req, res) => {
    res.send('GET/ books')
})

module.exports = books