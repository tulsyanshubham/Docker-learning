# Step 1: Use an existing docker image as a base
FROM alpine

# Step 2: Download and install a software
# RUN apk add binutils
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils

# Step 2.5: Configure that software
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

# Step 3: Set Default commands
CMD [ "mongod" ]

# // Build the image
# docker build .
# docker build -t tulsyanshubham/test:latest .
