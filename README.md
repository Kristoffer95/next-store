# RUNNING WITH DOCKER

> include **--env-file .env.local** to use local environment variables. Without using it, it will default to **.env** variables

- Running on first time(building):
  - docker-compose --env-file .env.local up --build
- Running(already built):
  - docker-compose --env-file .env.local up -d
- Stopping:
  - docker-compose --env-file .env.local down
