### Show containers and status
```sh
docker ps
```

### Build image
```sh
docker build -t docker-hotreload-ts .
```

### Run container with `docker run`
```sh
docker run --name docker-hotreload-ts -p 3000:3000 docker-hotreload-ts
```

### Run container with `docker-compose` and hot reload
```sh
docker-compose up
```

[More docker commands](https://gist.github.com/jfollmann/f409defd29e2de689963a2edae5172e8)

[Reference sample](https://www.youtube.com/watch?v=3Z7riTP0M14&t=1392s&ab_channel=LuisFilipePedroso)