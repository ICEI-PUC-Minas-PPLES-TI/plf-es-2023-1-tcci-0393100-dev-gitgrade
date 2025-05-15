# Base image
FROM node:21-alpine3.17

# Update and install dependency
RUN apk update && \
    apk upgrade && \
    apk add --no-cache git bash inotify-tools tzdata

# Set timezone
RUN ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    echo "America/Sao_Paulo" > /etc/timezone

# create destination directories
RUN mkdir -p /usr/src/gitgrade/supportplatform_web
RUN mkdir -p /usr/src/gitgrade/dtos-lib

# Set working directories
WORKDIR /usr/src/gitgrade/

# Copy dtos-lib files
COPY ./dtos-lib ./dtos-lib/

# Copy supportplatform_web files
COPY ./supportplatform-web/ ./supportplatform_web/

# Install dtos-lib dependencies
WORKDIR /usr/src/gitgrade/dtos-lib
RUN npm install

# Install supportplatform_web dependencies
WORKDIR /usr/src/gitgrade/supportplatform_web
RUN npm install

# To await for the database to be ready
RUN chmod +x ./wait-for-it.sh
