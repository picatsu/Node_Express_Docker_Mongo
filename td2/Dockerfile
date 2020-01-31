FROM centos:latest
		MAINTAINER Name Here Achraf
		RUN rpm -Uvh https://github.com/picatsu/Node_Express_Docker_Mongo/tree/master/td2
		RUN yum install nodejs npm -y 
		COPY ./src /opt/src
		RUN cd /opt/src; npm install
		EXPOSE 8080
		CMD ["node", "/opt/src/index.js"]