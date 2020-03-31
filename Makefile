build:
	docker-compose build --no-cache;

up:
	# docker-compose up --force-recreate -d;
	docker-compose up;

down:
	docker-compose down;

dev:
	cd services/tile_server; npm i; node server.js &
	cd services/web_app; npm i; npm start;
