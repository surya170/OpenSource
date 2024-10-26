# Start from the latest Ubuntu image
FROM ubuntu:latest

# Install curl and other dependencies
RUN apt-get update && apt-get install -y curl

# Install Node.js 18.x
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Clear npm cache and perform an upgrade
RUN npm cache clean --force && apt-get upgrade -y

# Copy package.json and package-lock.json to ensure npm installs exact versions
COPY package.json package.json
COPY package-lock.json package-lock.json

# Install dependencies
RUN npm ci

# Copy remaining project files
COPY index.js index.js
COPY README.md README.md

# Set the entry point for the application
ENTRYPOINT ["node", "index.js"]
