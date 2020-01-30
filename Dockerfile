FROM node:10.15.3
WORKDIR /td2
COPY /td2/package.json /td2
RUN npm install
COPY . /td2
CMD npm start
EXPOSE 3011