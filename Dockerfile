FROM node:10.15.3

RUN apt-get update -yq \
&& apt-get install curl gnupg -yq \
&& curl -sL https://deb.nodesource.com/setup_10.x | bash \
&& apt-get install nodejs -yq \
&& apt-get clean -y

ADD /td2/
WORKDIR /td2
RUN npm install

EXPOSE 3011
VOLUME /app/logs

CMD npm run start
