const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config({path:'.env'})

//route
const indexRouter = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//route
app.use('/', indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running on port:${PORT}`))
