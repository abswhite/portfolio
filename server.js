'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('./'));
app.get('*', function(request, response) {
  console.log('index.html');
  response.sendFile('./index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log('server is serving app on localhost:5000');
});
