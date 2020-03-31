# vector-map-poc
### A static vector tile server and frontend proof of concept

`make dev`

to develop locally outside of docker.  Web app can be found at http://localhost:3000
tested with NodeJS 10.16

`make build`

`make up`

to build web app and run in docker. Web app can be found at http://localhost:8888



### App Notes:
- this is a large-ish repo (> 100M) containing the pre rendered .pbf tiles
- 2 containers will be built:

  *tile_server* is just a static file server serving up the directory /public
    - **/tiles** are .pbf files in a {z}/{x}/{y} directory structure. The HTTP header `Content-Encoding: 'gzip'` is set on these files. This is required for .pbf files.
    - **/styles** The styles for each theme in .json.
    - **/fonts** The fonts used in the styles. We also serve them locally.
    - **/** at the root is tile.json. It contains default configs of the mapping client.

  *web_app* is a React app and Express server using the Mapbox GL library to render the vector tiles. No keys needed! Everything is served from tile_server.


  ### Notes/Resources on Building the .pbf Files

  - Generating OpenMapTiles: https://github.com/openmaptiles/openmaptiles/blob/master/QUICKSTART.md#req

  - Vector Files and AWS (important info on tile.json, http headers): https://github.com/addresscloud/serverless-tiles
    - .pdf from website can be found in this repo at: ./docs/vector-tiles-aws.pdf

  - Export an mbtiles file to .pbf: https://github.com/mapbox/mbutil

  - OpenStreetMap data extracts: http://download.geofabrik.de/
