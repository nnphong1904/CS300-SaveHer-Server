const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()

const userRoute = require('./routes/user')
const factsRoute = require('./routes/fact')
const binLocRoute = require('./routes/bin_location')
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb+srv://nnphong:BBC1941999@cluster0-n4npf.mongodb.net/Save-Her?retryWrites=true&w=majority',
  { useNewUrlParser: true }, { useUnifiedTopology: true })

// route url
app.use('/nearbybin', binLocRoute)
app.use('/user', userRoute)
app.use('/facts', factsRoute)
app.use('/', (req, res) => {
  res.send('HELLO THIS IS API SYSTEM')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
