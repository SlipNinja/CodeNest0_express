# CodeNest0_express

## Introduction

This project is used as a backend counterpart for the project CodeNest0.
It uses the express framework ( NodeJS ) and serves as a REST API. 💪

## Technologies and dependencies

- Express framework
- bcrypt
- cookie-parser
- cors
- dotenv
- joi
- mysql2
- jsonwebtoken

## Installation

To install dependencies:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
node src/app.js
```

## Folder structure

<pre>
CodeNest0_express/  
└─ src/    
    ├─ config/
    ├─ controllers/
    ├─ middlewares/
    ├─ models/
    ├─ routes/
    ├─ services/
    ├─ validators/
    └─ app.js
</pre>

## Endpoints

### /courses

- GET `/`
- GET `/:id`
- GET `/:id/dependencies`
- GET `/:id/steps`
- GET `/user/:id`
- GET `/user/:id/count`
- GET `/taken`
- PUT `/taken`

### /users

- GET `/`
- GET `/:id/xp`
- DELETE `/:id`
- PUT `/:id`
- PUT `/:id_user/last_course/:id_course`
- POST `/`
- POST `/login`

### /steps

- GET `/`

### /execute

- POST `/`

### /tags

- GET `/course/:id`
