FROM mongo:latest
MAINTAINER Daniel Heck (dheck85@gmail.com)

ADD docker_mongo_sampledata.js /var/homework/mongo/docker_mongo_sampledata.js
ADD dist /var/homework/dist
ADD jar /var/homework/jar

RUN apt-get update \
&& apt-get install -y nodejs npm openjdk-11-jre \
&& npm install http-server -g

