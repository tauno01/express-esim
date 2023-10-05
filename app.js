/* const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/eka', (request, response) => {
    console.log('Kutsuit endpointtia eka');
    response.send('endpoint eka');
});

app.get('/toka/:fname', (request, response) => {
    response.send('Terve ' + request.params.fname);
});

app.use((request, response, next) => {
    console.log('Middleware funktio1');
    next();
});

app.get('/kolmas/:fname?', (request, response) => {
    if(request.params.fname) response.send('Terve ' + request.params.fname);
    else response.send("Terve tuntematon");
});

app.use((request, response, next) => {
    console.log('Middleware funktio2');
    next();
});

app.post('/addStudent', (request, response) => {
    response.send(request.body);
});

app.listen(port, () => {
    console.log('Kuuntelen porttia 3000');
});

module.exports = app;