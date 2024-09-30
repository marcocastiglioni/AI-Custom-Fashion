
# AI-Custom-Fashion Fullstack Project

This document provides the complete setup and configuration instructions for both the **backend** and **frontend** of the **AI-Custom-Fashion** project. The project allows users to customize fashion items using AI, with a React.js frontend and Node.js backend.

## **Project Structure**

```
/backend
  ├── /controllers
  │     └── customizationController.js
  ├── /routes
  │     └── customizationRoutes.js
  ├── /utils
  │     └── errorHandling.js
  ├── /database
  │     └── postgresql.js
  ├── app.js

/frontend
  ├── /src
  │     ├── /components
  │     ├── /hooks
  │     ├── /pages
  │     ├── /styles
  │     └── App.js
  ├── /public
  ├── package.json

/.env  (at the project root)
```

## **Technologies Used**

- **Node.js** (Backend)
- **Express.js** (API Framework)
- **PostgreSQL** (Relational database)
- **MongoDB** (NoSQL database)
- **React.js** (Frontend)
- **Axios** (HTTP client for frontend)
- **TailwindCSS** (CSS framework)
- **dotenv** (Environment variable management)
- **Cors** (Middleware for CORS handling)

## **Prerequisites**

Make sure the following are installed:

- **Node.js** (version 14 or higher)
- **PostgreSQL**
- **MongoDB**
- **npm** or **yarn**

## **Backend Setup**

### 1. Clone the repository

```bash
git clone <REPOSITORY_URL>
cd AI-Custom-Fashion/backend
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Configure the `.env` file

Create a `.env` file in the root of the project (outside the `backend` folder) with the following environment variables:

```bash
# PostgreSQL configuration
POSTGRESQL_URI=postgres://<USERNAME>:<PASSWORD>@localhost:5432/ai_custom_fashion_postgres
PGUSER=<USERNAME>
PGPASSWORD=<PASSWORD>
PGDATABASE=ai_custom_fashion_postgres
PGHOST=localhost
PGPORT=5432

# API Port
PORT=4000

# MongoDB configuration
MONGODB_URI=mongodb://localhost:27017/ai-custom-fashion
```

### 4. Initialize PostgreSQL Database

1. Connect to PostgreSQL:
   ```bash
   psql -U postgres
   ```

2. Create the database:
   ```sql
   CREATE DATABASE ai_custom_fashion_postgres;
   ```

3. Grant privileges:
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE ai_custom_fashion_postgres TO postgres;
   ```

### 5. Run the backend server

To start the backend server, run:

```bash
cd backend
nodemon app.js
```

The backend will run on `http://localhost:4000`.

## **Frontend Setup**

### 1. Navigate to the frontend directory

```bash
cd frontend
```

### 2. Install frontend dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Configure the frontend `.env` file

Create a `.env` file in the `frontend` directory with the following content:

```bash
REACT_APP_API_URL=http://localhost:4000/api
```

### 4. Run the frontend server

To start the React frontend development server, run:

```bash
npm start
```

or

```bash
yarn start
```

The frontend will run on `http://localhost:3000`.

### 5. Build the frontend for production

To build the frontend for production:

```bash
npm run build
```

or

```bash
yarn build
```

This will generate optimized files in the `build` folder.

## **Testing the API**

You can use **Postman** or **curl** to test the backend API. Here's an example for creating a customization:

```bash
POST http://localhost:4000/api/customizations
Content-Type: application/json

{
  "userId": "123",
  "shirtColor": "blue",
  "shirtStyle": "casual",
  "size": "M"
}
```

## **Error Handling**

- **404 Route Not Found**: If a route doesn't exist, the server will respond with a 404 error.
- **Global Error Handler**: Any unhandled errors are caught by a global error handler that returns a 500 status code.

## **Folder Structure Explained**

### **Backend**

- **app.js**: Main entry point that starts the Express server.
- **/controllers**: Business logic for handling requests.
- **/routes**: Defines the API routes.
- **/database/postgresql.js**: PostgreSQL connection and configuration.
- **/utils/errorHandling.js**: Middleware for handling errors and missing routes.

### **Frontend**

- **/src/components**: Reusable components for the UI.
- **/src/hooks**: Custom hooks for reusable logic.
- **/src/pages**: Main pages of the application.
- **/src/styles**: Styles using TailwindCSS.
- **App.js**: Main React component organizing the app.

## **Contributing**

1. Fork the project.
2. Create a new branch (`git checkout -b feature/my-new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Open a Pull Request.

## **License**

This project is licensed under the terms of the [MIT License](LICENSE).
