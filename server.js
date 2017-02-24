'use strict'

const express = require('express');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 5000;
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';

app.get('/', (request, response) => response.sendFile('index.html', {root: '.'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: '.'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: '.'}));
app.get('/contact', (request, response) => response.sendFile('index.html', {root: '.'}));


app.use(express.static('./'));
app.get('*', function(request, response) {
  console.log('index.html');
  response.sendFile('./index.html', {root: '.'});
});

app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.listen(PORT, function() {
  console.log(`server is serving app on localhost:${PORT}`);
});
