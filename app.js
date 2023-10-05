const express = require('express');

const app = express();
const studentRouter = require('./controllers/student');
// const port = 3000;
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/student', studentRouter);

app.listen(port, () => {
    console.log('sovellus kuuntelee porttia ' + port);
});

app.get('/', (request, response) => {
    response.send('Express API esimerkki ilman tietokantaa');
});

module.exports = app;