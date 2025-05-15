# Base image
FROM node:20-buster

# Update and install dependencies
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y git bash inotify-tools tzdata locales && \
  sed -i '/pt_BR.UTF-8/s/^# //g' /etc/locale.gen && \
  locale-gen && \
  update-locale LC_ALL="pt_BR.UTF-8" \
  LANG="pt_BR.UTF-8" \
  LANGUAGE="pt_BR:pt:en" \
  LC_CTYPE="pt_BR.UTF-8" \
  LC_NUMERIC="pt_BR.UTF-8" \
  LC_TIME="pt_BR.UTF-8" \
  LC_COLLATE="pt_BR.UTF-8" \
  LC_MONETARY="pt_BR.UTF-8" \
  LC_MESSAGES="pt_BR.UTF-8" \
  LC_PAPER="pt_BR.UTF-8" \
  LC_NAME="pt_BR.UTF-8" \
  LC_ADDRESS="pt_BR.UTF-8" \
  LC_TELEPHONE="pt_BR.UTF-8" \
  LC_MEASUREMENT="pt_BR.UTF-8" \
  LC_IDENTIFICATION="pt_BR.UTF-8" \
  LC_ALL="pt_BR.UTF-8"

# Set environment variables for locale
ENV LANG=pt_BR.UTF-8 LC_ALL=pt_BR.UTF-8
ENV LC_ALL=C

# Set timezone
RUN ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
  echo "America/Sao_Paulo" > /etc/timezone

# Create destination directories
RUN mkdir -p /usr/src/gitgrade/supportplatform_service
RUN mkdir -p /usr/src/gitgrade/dtos-lib

# Set working directories
WORKDIR /usr/src/gitgrade/

# Copy dtos-lib files
COPY ./dtos-lib ./dtos-lib/

# Copy supportplatform_service files
COPY ./supportplatform-service/ ./supportplatform_service/

# Install dtos-lib dependencies
WORKDIR /usr/src/gitgrade/dtos-lib
RUN npm install

# Install supportplatform_service dependencies
WORKDIR /usr/src/gitgrade/supportplatform_service
RUN npm install

# To await for the database to be ready
RUN chmod +x ./wait-for-it.sh
