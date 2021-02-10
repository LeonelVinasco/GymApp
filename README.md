Postman collection:
https://www.getpostman.com/collections/d7c29e476ab294982e75

# Gym Web App

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The software used to develop the application is listed below.

```
NodeJS 14.15.0
Angular 11
Docker 19.03.12
Docker-compose 1.26.2
Git 2.28.0
```

You can click on the next links to install the software you need for running this app. On this URL's you can find a set of instructions to install Git, Docker and Docker Compose for your OS and distribution.


* [install NodeJS enviroment](https://nodejs.org/en/download/) - Asynchronous event-driven JavaScript runtime

* [install Docker Engine](https://docs.docker.com/engine/install/) - container technology

* [install Docker Compose](https://docs.docker.com/compose/install/) - Tool for defining and running multi-container Docker applications.

* [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Version control system.

### Download the project

Now lets continue with the steps to run the program Fuego de Quasar 


1) Clone the repo. Type on the terminal:

```
$ git clone https://github.com/LeonelVinasco/gymapp.git
```

2) Go to the main folder

```
$ cd gymapp
```

## Run API locally

Inside the folder

Build and run:

```
$ sudo docker-compose up --build

```
Now the 4 containers were builded and are running. api, client, mysql and test.

### Restart

If you stop the docker-compose service, be sure to run the above command to avoid problems with the database data creation:

```
$ sudo docker-compose down

```
after that you can run again:

```
$ sudo docker-compose up --build

```

# API Documentation

This API has 5 POST services and 2 GET services. All responses come in standard JSON. All requests must include a content-type setted as application/json and the body must be valid JSON.

```
http://localhost:3001/
```


## SignUp
```
http://localhost:3001/api/auth/signup
```
**You send:**  User data. Name and email must be unique.

**You get:** Success message

**Request:**
```json
POST /topsecret HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123",
  "email": "admin1@est.com",
  "gym": "1",
  "admin": true
}

```
### Response

```json
{
    "Message": "User created"
}
```

## SignIn
```
http://localhost:3001/api/auth/signin
```
**You send:**  Username and password

**You get:** Token, and user info.

**Request:**
```js
POST /topsecret HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"  
}

```
### Response

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdLCJpYXQiOjE2MTI5NDU1Mzd9.Vbl4Upc-neIsvXUwqfUsbVsz5iGbeYVoY5bIX9ZP_NA",
    "user": {
        "name": "admin",
        "roles": [
            "ROLE_ADMIN"
        ]
    }
}
```

## Insert City
```
http://localhost:3001/api/insert-city
```
**You send:**  City name

**You get:**  Success message

**Request:**
```js
POST /topsecret HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer token

{
    "city": "Neiva"
}

```
### Response

```json
{
    "Message": "City created"
}
```
## Insert Gym
```
http://localhost:3001/api/insert-gym
```
**You send:**  City id, and gym name.

**You get:**  Success message

**Request:**
```js
POST /topsecret HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer token

{
    "city": 1,
    "gym": "Bacatá"
}

```
### Response

```json
{
    "Message": "Gym created"
}
```

## List Users
```
http://localhost:3001/api/list-users
```
**You send:**  Gym id

**You get:**  users list data

**Request:**
```js
POST /topsecret HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: Bearer token

{
    "id":1
}

```
### Response

```json
[
    {
        "name": "admin",
        "email": "admin1@est.com"
    },
    {
        "name": "Andrea",
        "email": "andrea@est.com"
    }
]
```

## GET Cities
```
http://localhost:3001/api/cities
```

**You send:**  A Get Request

**You get:** The list of cities inserted

**Request:**
```js
GET /api/cities HTTP/1.1
Accept: application/json
Content-Type: application/json

```
### Response
Status: 200

```json
[
    {
        "id": 1,
        "name": "Neiva",
        "createdAt": "2021-02-10T09:02:48.000Z",
        "updatedAt": "2021-02-10T09:02:48.000Z"
    },
    {
        "id": 2,
        "name": "Bogotá",
        "createdAt": "2021-02-10T09:08:18.000Z",
        "updatedAt": "2021-02-10T09:08:18.000Z"
    }
]
```
## GET Gyms
```
http://localhost:3001/api/gyms
```

**You send:**  A Get Request

**You get:** The list of gyms inserted

**Request:**
```js
GET /api/gyms HTTP/1.1
Accept: application/json
Content-Type: application/json

```
### Response
Status: 200

```json
[
    {
        "id": 1,
        "name": "Bacatá",
        "city": 1,
        "createdAt": "2021-02-10T09:02:51.000Z",
        "updatedAt": "2021-02-10T09:02:51.000Z"
    },
    {
        "id": 2,
        "name": "Calima",
        "city": 2,
        "createdAt": "2021-02-10T09:10:38.000Z",
        "updatedAt": "2021-02-10T09:10:38.000Z"
    }
]
```

### Response Codes
```
200: Success
404: Not Found
422: Wrong data structure or wrong data type
500: Server error
```

## Running the unit tests

The test container runs the unit test automatically when you run the docker-compose command. If you want to add tests, add them to the files ./tests/*.test.js or add a new file *.test.js that the program will automatically run it.

Tests:

![diagram](testsjest.png)

Tests inside docker-compose environment
![diagram](testjest-docker.png)


# WEB APP

## Instructions: Follow strictly this order

### After waiting some minutes while the containers are builded correctly. Go to your web explorer and type the url http://localhost:5000

1) Sign in with the default user admin with password admin123. This users have administrator privileges.

![diagram](signin.png)
![diagram](2-signin1.png)


2) Create a new user with client privileges in SignUp

![diagram](signup.png)

3) Insert a new city

![diagram](3-newcity.png)

4) Insert a new gym

![diagram](4-newgym.png)

5) List users from a gym in the datatable

![diagram](5-list-users.png)



## Built With

* [NodeJS](https://nodejs.org/es/docs/) - Javascript server side development environment 
* [Angular](https://angular.io) -  Platform for building mobile and desktop web applications
* [Express](https://expressjs.com/) - Web application framework for Node. js


## Author

* **Vinasco**  - [GITHUB](https://github.com/leonelvinasco)


## Acknowledgments

* To the recruiting company.
* To the engineers that designed the challenge.

