FROM node:8-alpine

ENV NODE_ENV production
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
RUN npm install pm2 -g

# Install app dependencies
COPY ./package.json /usr/src/app/

RUN npm install

# Install app
COPY README.md properties.json /usr/src/app/
COPY ./index.js /usr/src/app/

EXPOSE 3000

CMD ["pm2-docker", "./index.js", "-i", "1"]