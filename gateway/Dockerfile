FROM mhart/alpine-node
WORKDIR ./usr/share/gateway/
COPY package.json package-lock.json ./usr/share/gateway/
RUN npm install
COPY . .
EXPOSE 3333
CMD [ "node", "gateway.js" ]
