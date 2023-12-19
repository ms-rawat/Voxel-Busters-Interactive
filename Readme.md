# Voxel-Busters-Interactive: MERN Stack Web Application

## Backend API

This folder contains the backend API for the Voxel-Busters-Interactive MERN stack web application. It is built using Express.js and MongoDB.

### Features:

- Retrieves startup data: Provides an endpoint `/data` that retrieves all startup data from the Startups collection in the startupData database.
- Adds new startups: Provides an endpoint `/insert` that allows users to add new startup entries to the Startups collection.

### Technologies Used:

- **Express.js:** A Node.js web framework used to build the API server.
- **MongoDB:** A NoSQL database used to store startup data.
- **dotenv:** A Node.js package for managing environment variables.
- **cors:** A Node.js package for handling CORS (Cross-Origin Resource Sharing) requests.

### How to Use:

1. Install the required dependencies: `npm install express mongodb dotenv cors`
2. Run the server: `node app.js`
3. Use the API endpoints:
   - Get all startups: POST `http://localhost:8000/data`
   - Add a new startup: POST `http://localhost:8000/insert` with a JSON body containing startup information.

### Notes:

- This is a basic API and can be further expanded with additional features and functionalities.
- Make sure to update the environment variables in the `.env` file with your MongoDB connection details.
- Consider adding authentication and authorization mechanisms for secure access to the API.

### Further Contribution:

This is a work in progress, and contributions are welcome! Feel free to fork the repository and improve the API or add new features.

## Voxel Busters Interactive Startup Dashboard

### Overview

This web application, built with React, Material-UI, Tailwind CSS, and custom styling, serves as a comprehensive startup dashboard. It empowers users with dynamic filtering options, a main dashboard for data visualization, and additional features for managing startup information.

### Components

#### Filter Components

1. **CityLocation:**
   - Empowers users to filter startup data based on specific city locations.
   - A user-friendly dropdown presents a list of cities for users to select multiple options effortlessly.

2. **IndustryVertical:**
   - Streamlines startup data filtering based on industry verticals.
   - Users have the flexibility to choose multiple industry types from the available options for more targeted results.

3. **InvestmentType:**
   - Elevates the filtering capabilities with precision by enabling users to refine startup data based on investment types.
   - Features intuitive checkbox selection, search functionality for quick identification, and real-time updates for a seamless user experience.

#### Other Components

4. **card.jsx:**
   - Renders individual startup cards with essential information.
   - Integrates a popup/modal feature for detailed startup viewing.

5. **Drawert.js:**
   - The TemporaryDrawer component is a responsive sidebar drawer designed for small displays or mobile devices.
   - Includes a "Filter" button that, when clicked, reveals the drawer containing filter options.
   - Implemented using Material-UI components, providing a clean and user-friendly interface.

6. **insertStartup.js:**
   - The InsertStartup component provides a form for users to input information about a startup.
   - Utilizes Material-UI components and features client-side validation.
   - Submitted data is sent to a specified endpoint using the Fetch API.

7. **Main.js:**
   - The DataComponent serves as the main dashboard component, fetching and filtering startup data dynamically.
   - Offers a paginated layout for improved user experience.

8. **Pagination.js:**
   - The Pagination component is a versatile and responsive element designed to handle paginated display of startup data.
   - Integrated with Material-UI's TablePagination, it efficiently manages the number of rows shown per page.

9. **Popup.js:**
   - The Popup component enhances user interaction by providing a modal display for detailed information about a startup.
   - Features a clean and intuitive layout, allowing users to access essential details without leaving the main view.

10. **sidebar.js:**
    - The Sidebar component is an integral part of the startup dashboard, offering dynamic filters for a more personalized user experience.

### Key Features

- **Data Fetching:**
  - Retrieves startup data from the server using the Fetch API.

- **Filtering:**
  - Allows users to dynamically filter startup data based on City Location, Investment Type, and Industry Vertical.

- **Pagination:**
  - Presents filtered data in a paginated format for improved user experience.

- **Responsive Design:**
  - Utilizes a responsive design, including a collapsible sidebar for smaller screens.

- **Add New Startup:**
  - Users can easily navigate to the "Add New Startup" page using the provided link.

### Files and Structure

The `src` folder contains:

src
|-- components
|   |-- filter
|   |   |-- CityLocation.js
|   |   |-- IndustryVertical.js
|   |   |-- InvestmentType.js
|   |-- card.jsx
|   |-- Drawert.js
|   |-- insertStartup.js
|   |-- Main.js
|   |-- Main.css
|   |-- Pagination.js
|   |-- Popup.js
|   |-- Searchbar.js
|   |-- sidebar.js
|-- App.js
|-- App.css
|-- GlobleStatement.js
|-- index.js
|-- postconfig.js



### Technologies Used

- **React**
- **Material-UI**
- **Tailwind CSS**
- **Custom CSS**

### Getting Started

To get a copy of the project up and running on your local machine, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
