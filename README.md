# Stream stats

[![My Skills](https://skillicons.dev/icons?i=react,tailwind,typescript,docker,vite,yarn)](https://skillicons.dev)

## Stream stats is a web application that can show you information and statistics on various streaming services such as: _Twitch_, _Trovo_, _Kick_, _Youtube_.

# Run application

### Create a dirrectory, and copy this repository in your dir, then, create a docker-compose.yml file and replace this code to him

`docker-compose.yml`

```yml
services:
  stream_stats_storage:
    image: postgres:alpine
    container_name: pg-storage
    ports:
      - 5432:5432
    volumes:
      - postgres_storage:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}

  stream_stats_frontend:
    build:
      context: ./stream-stats-frontend
      dockerfile: DockerFile
    container_name: react-app
    ports:
      - 3000:3000
    volumes:
      - ./stream-stats-frontend:/stream-stats-frontend
      - node_modules:/stream-stats-frontend/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=${CHOKIDAR_USEPOLLING}
      - VITE_HMR_PORT=${VITE_HMR_PORT}
      - VITE_HMR_HOST=${VITE_HMR_HOST}
    depends_on:
      - stream_stats_backend
    command: yarn dev

  stream_stats_backend:
    build:
      context: ./stream-stats-api
      dockerfile: Dockerfile
    restart: unless-stopped
    container_name: nestJS-api
    ports:
      - 5174:5174
    volumes:
      - ./stream-stats-api:/stream-stats-api
      - /stream-stats-api/node_modules
    depends_on:
      - stream_stats_storage
    environment:
      - CHOKIDAR_USEPOLLING=${CHOKIDAR_USEPOLLING}
      - POSTGRES_HOST=pg-storage
      - POSTGRES_USERNAME=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DATABASE=${POSTGRES_DB}
      - POSTGRES_PORT=${POSTGRES_PORT}
    env_file:
      - .env
    tty: true
    stdin_open: true

volumes:
  postgres_storage:
  node_modules:
  api:
```

# Nest step

### If you already created a `docker-compose.yml` file, you must create another one file, named `.env` in the **_`root dir`_**

`.env`

```env
POSTGRES_USER=... #your database username
POSTGRES_PASSWORD=... #your database password
POSTGRES_DB=... your database name (recommended value is "stream_stats_storage")
POSTGRES_HOST=... # your database host (default is 'localhost')
POSTGRES_PORT=... # your database port

CHOKIDAR_USEPOLLING=true # for hmr

VITE_HMR_PORT=3000
VITE_HMR_HOST=localhost
```

# Next step

### go to stream stats api repository, and check the installation and configuration guide

[look for API!](https://github.com/yougotnothing/stream-stats-api)
