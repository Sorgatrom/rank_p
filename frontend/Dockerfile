#Usamos una versión ligera de Node.js
FROM node:20-alpine

#Establecemos la carpeta de trabajo dentro del contenedor
WORKDIR /app

#Copiamos el package.json y el package-lock.json (si existe) primero
COPY package*.json ./

# Instalamos las dependencias exactas
RUN npm install

#Copiamos el resto de los archivos del front (componentes, etc...)
COPY . .

#Exponemos el puerto 5173, que es el que usa Vite por defecto
EXPOSE 5173

#Arrancamos el servidor de Vite exponiendo la red a "0.0.0.0"
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]