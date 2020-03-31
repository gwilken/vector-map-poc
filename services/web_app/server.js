// eventlog/api/server.js

const express = require('express')
const cors = require('cors');

const log = require('./utils/log')

const PORT = process.env.API_PORT || 8888

const app = express()

app.use(cors());
app.use(express.static('./build'))

app.listen(PORT, function() {
  log('[ WEB_SERVER ] - Service Started:', PORT)
})
