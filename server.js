var path = require('path')
var express = require('express')
var hbs = require ('express-handlebars')
var bodyParser = require('body-parser')

var index = require('./routes')

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', index.category)
app.get('/brands/:id', index.brands)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
