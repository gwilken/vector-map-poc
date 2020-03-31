
const setGzipHeader = (req, res, next) => {
  if (req.url.includes('tiles')) {
    // res.set('Content-Type', 'application/x-protobuf');
    res.set('Content-Encoding', 'gzip');
    next();
  } else {
    next();
  }
}

module.exports = { setGzipHeader }
