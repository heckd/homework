# COMMISSIONER HOMEWORK README

A small project consisting of an Angular frontend and Spring Boot backend connected to a mongodb for displaying and editing agencies

## How to start
Clone this repository and go to the included docker directory.

Run:


```docker build -t homework:latest .```


```docker run -d -p 4200:4200 -p 8080:8080 -p 27017-27019:27017-27019 --name homework homework```


```docker exec -it homework bash```


Then inside the docker container, go to directory /var/homework and run:

```http-server dist/commissioner```


```java -jar jar/demo-0.0.1-SNAPSHOT.jar```


## How to use
Open your browser of choice and navigate to http://localhost:4200


The list of agencies is initially empty, so you can start by entering some data into the form and clicking the 'Save' button.


Clicking an entry in the list will let you modify the attributes in the beforementioned form.


'Save' updates your modified entry.


'Delete' will remove the highlighted entry from the database, 'Reset' will clear the form and deselect any selected entry.
