### Show containers and status:
```sh
docker ps
```

### Build image:
```sh
docker build -t docker-hotreload-ts .
```

### Run container with `docker run`:
```sh
docker run --name docker-hotreload-ts -p 3000:3000 docker-hotreload-ts
```

### Run container with `docker-compose`:
```sh
docker-compose up
```