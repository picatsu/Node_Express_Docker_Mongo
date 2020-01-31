FROM node:10.15.3

# Create app directory
COPY . /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
WORKDIR /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3011
CMD npm run start
