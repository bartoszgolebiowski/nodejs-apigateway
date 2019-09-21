FROM mhart/alpine-node
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD [ "node", "gateway.js" ]
