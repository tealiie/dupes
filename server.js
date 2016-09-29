var path = require('path')
var express = require('express')
var hbs = require ('express-handlebars')
var bodyParser = require('body-parser')
var routes = ('./routes')

var app = express()

app.engine('hbs', hbs())
app.set('views engine', 'hbs')
app.set('views', path.join(__dirname + 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

var PORT = 3000

app.get('/', function (req, res) {
  res.send('cate')
})

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
