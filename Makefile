build:
	docker-compose build --no-cache;

up:
	# docker-compose up --force-recreate -d;
	docker-compose up;

down:
	docker-compose down;
