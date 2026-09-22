FROM node:22-alpine

WORKDIR /app

# Instalar Angular CLI de forma global
RUN npm install -g @angular/cli

# Exponer el puerto estándar de desarrollo de Angular
EXPOSE 4200

# Iniciar el servidor vinculando a 0.0.0.0 para acceso desde Windows
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]