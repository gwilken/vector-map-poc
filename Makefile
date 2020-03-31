build:
	docker-compose build --no-cache;

up:
	# docker-compose up --force-recreate -d;
	docker-compose up;

down:
	docker-compose down;

dev:
	cd services/tile_server; node server.js &
	cd services/web_app; npm start;
