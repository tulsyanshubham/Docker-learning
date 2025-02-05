FROM node:alpine

WORKDIR /var/app

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]

# Since database is here so we need two containers one for database and one for our app so the Dockerfile will not work here