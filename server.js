const bodyParser = require('body-parser')
require('dotenv').config()

const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useFindAndModify: false })

const db = mongoose.connection
db.on('error', (error) => console.error('There\'s an error: ' + error))
db.once('open', () => console.log('Connected to Database!'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3001, () => {
    console.log('API app has started!')
})