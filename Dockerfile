# Usa una imagen de PHP 8.3 con Apache
FROM php:8.3-apache

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip unzip git curl \
    # Instalar dependencias de Node.js (incluyendo npm)
    ca-certificates gnupg apt-transport-https lsb-release \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-install pdo pdo_mysql gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar los archivos del proyecto
COPY . .

#Instalar dependencias de Node.js (npm)
RUN npm install

# Asignar permisos necesarios
RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/www/html/ \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

COPY ./docker/laravel.conf /etc/apache2/conf-available/laravel.conf
RUN a2enconf laravel
RUN a2enmod rewrite

# Instalar dependencias de PHP con Composer
RUN composer install --no-dev --no-scripts --no-progress --no-interaction

# Copiar el archivo de configuración de Apache al contenedor
COPY ./docker/000-default.conf /etc/apache2/sites-available/000-default.conf

# Habilitar mod_rewrite para Laravel
RUN a2enmod rewrite

# Exponer el puerto 80
EXPOSE 80

# Iniciar apache al finalizar el script
CMD ["apache2-foreground"]
