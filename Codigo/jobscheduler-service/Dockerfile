FROM node:21-alpine3.17

# create destination directory
RUN mkdir -p /usr/src/gitgrade/jobscheduler_service
WORKDIR /usr/src/gitgrade/jobscheduler_service

# Update and install dependency
RUN apk update && \
    apk upgrade && \
    apk add --no-cache git bash inotify-tools tzdata

# Set timezone
RUN ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    echo "America/Sao_Paulo" > /etc/timezone

# Install app dependencies
COPY ./package.json .
RUN npm install

# Bundle app source
COPY . .

# To await for the database to be ready
RUN chmod +x ./wait-for-it.sh
