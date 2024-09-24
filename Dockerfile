# Usa la imagen base de Node.js (actualiza a 16 o 20)
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que la aplicación escucha (ajusta según tu aplicación)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
