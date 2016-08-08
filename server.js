var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')
var cors = require('cors')

var index = require('./routes/index')
var index1 = require('./routes/index1')

var PORT = process.env.PORT || 3000

var app = express()
app.use(cors())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())

app.get('/', index1.get)
app.get('/users/:id', index.jason)
app.delete('/users/:id', index.del)
app.put('/users', index.put)
app.post('/users', index.add)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
