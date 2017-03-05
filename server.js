var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var app = express();
import Html from './html';

app.use(express.static('public'))

app.get('/', function(err, res) {
  var markup = ReactDOMServer.renderToString(<Html />);
  res.end(markup);
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
