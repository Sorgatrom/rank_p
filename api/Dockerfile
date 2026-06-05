#Usamos la imagen oficial de PHP 8.2, que coincide con el composer.json
FROM php:8.2-cli

#Instalamos las herramientas del sistema y los drivers para PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_pgsql

#Traemos Composer directamente desde su imagen oficial
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

#Creamos una carpeta dentro del contenedor donde vivirá el código
WORKDIR /app

#Copiamos todos los archivos de tu carpeta 'api' local hacia el contenedor
COPY . .

#Instalamos las dependencias de Laravel usando tu composer.json
RUN composer install --no-interaction --optimize-autoloader

#Damos permisos de escritura a las carpetas que Laravel necesita modificar
RUN chmod -R 777 storage bootstrap/cache

#Abrimos el puerto 8000 para que la API pueda comunicarse
EXPOSE 8000

#Encendemos el servidor de Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]