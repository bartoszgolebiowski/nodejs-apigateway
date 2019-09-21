FROM node:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 2222
CMD [ "node", "server.js" ]
