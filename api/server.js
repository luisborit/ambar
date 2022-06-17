const express = require('express')

const app = express()

app.use('/api/v1', require('./v1/index'))

app.use(express.json())
app.set('port', process.env.PORT || 3000)

module.exports = app
