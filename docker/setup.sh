npm install http-server -g \
&& mkdir -p /var/homework \
&& java -jar /var/homework/jar/demo-0.0.1-SNAPSHOT.jar \
&& cd /var/homework/dist \
&& http-server commissioner