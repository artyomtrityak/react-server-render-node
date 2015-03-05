var express = require('express');
var app = express();
var fs = require('fs');
var ejs = require("ejs");
var index = fs.readFileSync('index.html', 'utf-8');

//React
require('node-jsx').install({extension: '.jsx'});
var React = require('react/addons');



//Get users from database etc
var UsersData = [
  {name: 'Artyom'},
  {name: 'Dimitry'}
];



app.get('/', function (req, res) {
  //Create React class from React factory
  var UsersFactory = React.createFactory(
    require('./jsx/users-react.jsx')
  );

  //Execute react and render result to string
  var usersHTML = React.renderToString(UsersFactory({
    users: UsersData
  }));

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(
    ejs.render(index, {serverBlock: usersHTML})
  );
});









app.use(express.static(__dirname));
var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('React app listening at http://%s:%s', host, port)
});