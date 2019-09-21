FROM node:latest
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD [ "node", "gateway.js" ]
