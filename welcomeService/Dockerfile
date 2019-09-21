FROM node:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 1111
CMD [ "node", "server.js" ]
