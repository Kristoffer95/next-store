# dev
dev:
	npm run dev

dev-https:
	npm run dev:https

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

# storyblok
sb-generate-types:
	npm run storyblok:generate-types