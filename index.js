const mongoose = require('mongoose');
const express = require('express');
const app = express();


require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
   () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
);

app.get('/', (req, res) => {
   res.send('Hello World')
});

const booksController = require('./controller/books_controller.js');
app.use('/books', booksController);


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})