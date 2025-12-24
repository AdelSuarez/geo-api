# Usamos una imagen ligera de servidor web
FROM nginx:alpine

# Copiamos nuestros archivos estáticos a la carpeta pública de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 (el puerto por defecto de Nginx)
EXPOSE 80

# Nginx se inicia automáticamente, no hace falta CMD