FROM node:10.15.3

# Create app directory
RUN git clone https://github.com/picatsu/Node_Express_Docker_Mongo.git
RUN cd Node_Express_Docker_Mongo/td3/server
COPY . /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
WORKDIR /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 4000:4000
CMD ["npm", "start" ] --loglevel=warn
