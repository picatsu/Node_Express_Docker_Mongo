FROM node:10.15.3
WORKDIR /SS-TD2
COPY package.json /SS-TD2
RUN npm install
COPY . /SS-TD2
CMD npm start
EXPOSE 3011