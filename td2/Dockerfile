FROM node:10.15.3

# Create app directory
<<<<<<< HEAD
=======
RUN git clone https://github.com/picatsu/Node_Express_Docker_Mongo.git
RUN cd Node_Express_Docker_Mongo/td2
>>>>>>> origin
COPY . /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
WORKDIR /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

<<<<<<< HEAD
EXPOSE 3011
CMD npm run start
=======
EXPOSE 3000:3000
CMD ["npm", "start" ] --loglevel=warn
>>>>>>> origin
