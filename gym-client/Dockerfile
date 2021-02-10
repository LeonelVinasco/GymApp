FROM node:14.15.5-alpine3.10
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
expose 5000
CMD ["ng","serve","--host","0.0.0.0","--port", "5000", "--disable-host-check"]
