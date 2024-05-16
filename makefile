prod-start:
	npm run build && npm run start

# docker
up-build:
# docker-compose --env-file .env.local up -d --build
	docker-compose --env-file .env up -d --build

up:
# docker-compose --env-file .env.local up -d
	docker-compose --env-file .env up -d

down:
# docker-compose --env-file .env.local down
	docker-compose --env-file .env down

