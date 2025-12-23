# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.12.0
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# 1. Quitamos "ENV NODE_ENV production" por ahora para poder instalar TypeScript
# (Lo pasaremos al arrancar si es necesario)

# 2. Copiamos los archivos de dependencias
COPY package.json package-lock.json ./

# 3. Instalamos TODAS las dependencias (incluyendo TypeScript)
# Cambiamos "npm ci --omit=dev" por "npm install" normal
RUN npm install

# 4. Copiamos el resto del código fuente
COPY . .

# para ver qué archivos llegaron al contenedor
RUN ls -R
# 5. Ejecutamos el build (Aquí se crea la carpeta /dist)
RUN npm run build 

# 6. Exponemos el puerto
EXPOSE 3000

# 7. Ejecutamos la aplicación
CMD ["npm", "start"]