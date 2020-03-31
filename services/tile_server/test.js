const tinyosmpbf = require('tiny-osmpbf');
const fs = require('fs')

let dataBuffer = fs.readFileSync('./public/tiles/0/0/0.pbf')

try {
  let osmData = tinyosmpbf(dataBuffer, (data) => {
    console.log(data)
  });
}

catch (err) {
  return
}
