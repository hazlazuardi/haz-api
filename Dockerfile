
# pick image with git and bash
# ARG BASE=mcr.microsoft.com/vscode/devcontainers/javascript-node:0-16-bullseye
ARG BASE=node:16-bullseye

# no ENV vars required buildtime

#---------------------

FROM ${BASE} AS dependencies
RUN mkdir -p /app
WORKDIR /app
ENV NODE_ENV development

COPY package*.json ./
COPY prisma ./prisma

RUN npm install
RUN npx prisma generate
RUN rm -rf prisma

# COPY . .

# don't copy source, mount it via volume

# volumes folders must be created and chowned before docker-compose creates them as root
# create them during docker build
RUN mkdir -p .next
RUN chown node:node . node_modules .next
RUN chown -R node:node node_modules/.prisma

USER node

# debug
# RUN ls -la node_modules/.prisma/client

EXPOSE 8080
ENV PORT 8080

CMD [ "npm", "run", "cmd:start:dev" ]