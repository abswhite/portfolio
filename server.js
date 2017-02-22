'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const conString = 'postgres://localhost:5432';

app.get('/', (request, response) => response.sendFile('index.html', {root: '.'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: '.'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: '.'}));


app.use(express.static('./'));
app.get('*', function(request, response) {
  console.log('index.html');
  response.sendFile('./index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log('server is serving app on localhost:5000');
});
