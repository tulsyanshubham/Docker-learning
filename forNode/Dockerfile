FROM node:alpine

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]

# docker run -p 8000:8000 --name test-node-app  tulsyanshubham/nodeapp