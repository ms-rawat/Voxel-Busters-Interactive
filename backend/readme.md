Voxel-Busters-Interactive: Backend API

This folder contains the backend API for the Voxel-Busters-Interactive MERN stack web application. It is built using Express.js and MongoDB.

Features:

Retrieves startup data: Provides an endpoint /data that retrieves all startup data from the Startups collection in the startupData database.
Adds new startups: Provides an endpoint /insert that allows users to add new startup entries to the Startups collection.
Technologies Used:

Express.js: A Node.js web framework used to build the API server.
MongoDB: A NoSQL database used to store startup data.
dotenv: A Node.js package for managing environment variables.
cors: A Node.js package for handling CORS (Cross-Origin Resource Sharing) requests.
How to Use:

Install the required dependencies: npm install express mongodb dotenv cors
Run the server: node app.js
Use the API endpoints:
Get all startups: POST http://localhost:8000/data
Add a new startup: POST http://localhost:8000/insert with a JSON body containing startup information.
Notes:

This is a basic API and can be further expanded with additional features and functionalities.
Make sure to update the environment variables in .env file with your MongoDB connection details.
Consider adding authentication and authorization mechanisms for secure access to the API.
Further Contribution:

This is a work in progress, and contributions are welcome! Feel free to fork the repository and improve the API or add new features.