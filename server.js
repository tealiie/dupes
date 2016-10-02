var path = require('path')
var express = require('express')
var hbs = require ('express-handlebars')
var routes = ('./routes')
var bodyParser = require('body-parser')

var PORT = 3000
var app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('hbs', hbs())
app.set('views engine', 'hbs')
app.set('views', path.join(__dirname + 'views'))
app.use(express.static('public'))

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
