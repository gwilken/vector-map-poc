// eventlog/api/server.js

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { setGzipHeader } = require('./middleware');

const log = require('./utils/log');

const PORT = process.env.API_PORT || 7777;

const app = express();

app.use(cors());
app.use(setGzipHeader);

app.use(express.static('./public'));

app.use('/', routes)

app.listen(PORT, function() {
  log('[ TILE_SERVER ] - Service Started:', PORT);
})
