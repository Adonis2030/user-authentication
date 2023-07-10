# Home Assessment from SOULTRAIN

This project is a backend API hosted on `https://user-authentication-app.onrender.com`

It provides several API endpoints for user register and login.

## Project Structure

The project consist of the following components:

- **Configs**: This folder contains files for database connect configuration.
  The `database.js` file handles the configuration for connecting with MongoDB database.
  The `index.js` file exports the module for database connection.

- **Controllers**: This folder contains controller file for handling the routing logic.
  The `userController.js` file imports services to handle the actions for each API requests (register, login, getAllUsers).

- **Middlewares**: This folder contains additional middleware functions used in this project.
  It implemented followings:

  - **bodyParser**: This parses the request body for `application/x-www-form-urlencoded` and `application/json` content types.
  - **limitMiddleware**: This sets up a rate limiter middleware using the express-rate-limit package to restrict the number of requests a client can make within a defined time window, ensuring fair usage and protecting against abuse.

- **Models**: The model file defines a User schema using Mongoose, specifying the fields and their types for a user object. It also creates and exports a User model based on the defined schema, allowing interaction with the MongoDB database for user-related operations.

- **Routes**: The route sets up the routing for user-related endpoints in an Express.js application. It defines routes for retrieving all users, adding a new user, and retrieving a user by email and password. Each route is associated with a specific controller function and is validated using the provided validators. The code ensures that these endpoints are publicly accessible and handles the corresponding requests and responses.

- **Services**: The services file defines three functions for user-related operations: getAllUsers, logIn, and signUp.
  The logIn function verifies the provided email and password by comparing the password hash stored in the database using bcrypt.compare. If the credentials match, it returns a response object with the user data and a success status. Otherwise, it returns an error indicating either wrong password or non-existent user.

  The signUp function checks if a user with the provided email already exists in the database. If not, it hashes the password using bcrypt.hash, creates a new user object, saves it to the database, and returns a response object with the user data and a success status. If the user already exists, it returns an error status.

  The purpose of this code is to provide the logic for user-related operations such as retrieving users, authenticating users during login, and creating new user accounts while ensuring the passwords are securely hashed using bcrypt. It interacts with the User model from the ../models module and utilizes the bcrypt library for password hashing and comparison.

- **Utils**: Contains utility functions or helper modules that can be used throughout the project.
  This handles the response from a database query, returning an empty array if the result is falsy (null, undefined, etc.) or returning the rows if they exist.

- **Validators**: This provides validation middleware using the express-validator package for validating user input in an Express.js application.

The userSchemaValidator is an array of validation rules for validating the request body fields (username, email, password, etc.). It ensures that the fields are not empty and have the correct format. If there are validation errors, it returns a 400 response with the validation error messages; otherwise, it calls the next middleware.

The emailParamValidator is similar to userSchemaValidator, but it specifically validates the email field as a parameter. It checks for the correct email format and non-empty value. If there are validation errors, it returns a 400 response with the validation error messages; otherwise, it calls the next middleware.

## API Endpoints

- **GET api/soultrain/users**: Get all usernames for display users registered
  ![view](https://github.com/Adonis2030/user-authentication/assets/133148501/94a7b262-6e85-4fc0-944d-fd37af7f1c4a)

- **POST api/soultrain/signup**: Create a new user.

  ``` shell
  params:
  {
    "username": "John Doe",
    "email": "john.doe@gmail.com",
    "password": "password123"
  }
  ```

![signup](https://github.com/Adonis2030/user-authentication/assets/133148501/ca751d5c-9895-4164-9819-0a0dccfc5cd3)

- **POST api/soultrain/login**: Login with email and password.

  ``` shell
  {
    "email": "john.doe@gmail.com",
    "password": "password123"
  }
  ```
![login](https://github.com/Adonis2030/user-authentication/assets/133148501/2268efe7-ca53-45a9-9294-1b76742f7692)


## Instruction for installing App and running

To install and run the App, please follow these steps:

1. Clone the project from the git repository:

``` shell
git clone https://github.com/Adonis2030/user-authentication.git
```

2. Install dependencies:

``` shell
npm install
```

3. Run the server in development mode:

``` shell
npm start
```

## Usage

You can use provided APIs to interact with the server and perform user registration and login and view all users registered.
Here's an overview of the available endpoints:

-**GET api/soultrain/users**: Retrieve a list of all users by username. -**POST api/soultrain/signup**: Create a new user by providing the data (username, email, password). -**POST api/soultrain/login**: Login by email and password.

## Deployment

The server is currently deployed and hosted on `https://user-authentication-app.onrender.com`.
You can access the API endpoints by making HTTP requests to the appropriate URLs.
for example: `https://user-authentication-app.onrender.com/api/soultrain/users`
or `https://user-authentication-app.onrender.com/api/soultrain/signup`
or `https://user-authentication-app.onrender.com/api/soultrain/login`.

## Technologies

- Node.js
- Express.js
- MongoDB
