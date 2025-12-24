# GeoAPI

> [!NOTE]
> Version de NodeJs V24.12.0 Latest LTS

> Arquitectura Monorepo con Docker Compose

### Herramientas utilizadas

- Express
- Swagger
- Docker

### Puertos utilizados

- 3000 para swagger
- 8080 para interfaz

### Ejecución del proyecto

1. Primero accedemos a la carpeta de backend e instalamos todo lo de npm.

```bash
cd backend
npm i
```

2. Regresar a la raíz del proyecto y ejecutar docker.

```bash
docker compose up --build
```
