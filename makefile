prod-start:
	npm run build && npm run start

# docker
up-build:
	docker-compose --env-file .env.local up -d --build

up:
	docker-compose --env-file .env.local up -d

down:
	docker-compose --env-file .env.local down

