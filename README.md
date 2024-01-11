# School System REST API

## Overview

This repository contains the back-end REST API for a School System, built with ExpressJS, MariaDB, and Node. It provides a robust foundation for managing various aspects of a school, including students and users, with appropriate token authentication.

## Features

- **Student Management**: Easily add, update, delete, and retrieve student information.
- **User Management**: Manage user accounts and access levels for enhanced security.
- **Photo Management**: Store and retrieve photos associated with students or other entities.
- **Authentication**: Secure your API using JSON Web Tokens (JWT) as a type of Bearer tokens for authorization.
- **Database Integration**: Utilize Sequelize for database migrations and seeders.
- **File Uploads**: Handle file uploads with Multer.


## Technologies Used

- **ExpressJS**: A fast, unopinionated, minimalist web framework for Node.js.
- **MariaDB**: A powerful open-source relational database system.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Google Cloud Platform Virtual Machine**: Deployed on GCP for scalability and reliability.
  - **Docker**: Containerization platform running an instance of the MariaDB database.
  - **PM2**: Node.js process manager for running continuously the API in the server.
  - **Nginx**: Web server and reverse proxy server.

## API Documentation

![API Image](https://github.com/remediios/school-rest-api/raw/main/readme_images/insomnia.png)

To test the API endpoints, you can use Insomnia, a popular API client. Import the provided Insomnia workspace file (insomnia.json) to get started quickly.

The Insomnia workspace file contains a collection of requests, including detailed information about the endpoints, request parameters, and example responses. You can use this collection to interact with and test your API.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/remediios/school-rest-api.git
cd school-system-api
```

2. Install dependencies:

```bash
npm install
```

3. Configure database:

- Create a MariaDB database for the project
- Run the Sequelize migrations and seeders:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

4. Run the application:

```bash
npm start
```

## Contact 

For any questions or feedback, feel free to reach out to miguelremedios.pt / miguelremediioss@gmail.com.


