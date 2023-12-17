Voxel Busters Interactive Startup Dashboard
Overview
This web application, built with React, Material-UI, Tailwind CSS, and custom styling, serves as a comprehensive startup dashboard. It empowers users with dynamic filtering options, a main dashboard for data visualization, and additional features for managing startup information.

Components

Filter Components
1. CityLocation
Empower users to filter startup data based on specific city locations.
A user-friendly dropdown presents a list of cities for users to select multiple options effortlessly.
2. IndustryVertical
Streamline startup data filtering based on industry verticals.
Users have the flexibility to choose multiple industry types from the available options for more targeted results.
3. InvestmentType
Elevate the filtering capabilities with precision by enabling users to refine startup data based on investment types.
Features intuitive checkbox selection, search functionality for quick identification, and real-time updates for a seamless user experience.

Other Components
4. card.jsx
Renders individual startup cards with essential information. Integrates a popup/modal feature for detailed startup viewing.

5. Drawert.js
The TemporaryDrawer component is a responsive sidebar drawer designed for small displays or mobile devices. It includes a "Filter" button that, when clicked, reveals the drawer containing filter options. The component is implemented using Material-UI components, providing a clean and user-friendly interface.

6. insertStartup.js
The InsertStartup component provides a form for users to input information about a startup. Utilizes Material-UI components and features client-side validation. Submitted data is sent to a specified endpoint using the Fetch API.

7. Main.js
The DataComponent serves as the main dashboard component, fetching and filtering startup data dynamically. It offers a paginated layout for improved user experience.

##Key Features
Data Fetching: Retrieves startup data from the server using the Fetch API.
Filtering: Allows users to dynamically filter startup data based on City Location, Investment Type, and Industry Vertical.
Pagination: Presents filtered data in a paginated format for improved user experience.
Responsive Design: Utilizes a responsive design, including a collapsible sidebar for smaller screens.
Add New Startup: Users can easily navigate to the "Add New Startup" page using the provided link.
8. Pagination.js
The Pagination component is a versatile and responsive element designed to handle paginated display of startup data. Integrated with Material-UI's TablePagination, it efficiently manages the number of rows shown per page.

#Key Features
Data Display: Dynamically renders startup data in a paginated format based on user-defined rows per page.
Responsive Design: Provides a responsive layout that adapts to various screen sizes.
Rows Per Page Options: Users can choose from preset options (20, 50, 100) or display all available rows on a single page.
Page Navigation: Allows users to navigate through pages using the pagination controls.
Page Indicator: Displays the current page number for user reference.
9. Popup.js
The Popup component enhances user interaction by providing a modal display for detailed information about a startup. It features a clean and intuitive layout, allowing users to access essential details without leaving the main view.

Key Features
Modal Display: Renders a modal popup for an in-depth view of startup information.
Dynamic Content: Adapts to various data inputs, ensuring flexibility in displaying startup details.
User-friendly Interface: Simple and intuitive design, offering a seamless experience.
Close Functionality: Users can easily close the modal by clicking the close icon or outside the modal area.
10. sidebar.js
The Sidebar component is an integral part of the startup dashboard, offering dynamic filters for a more personalized user experience.

Features
Dynamic Filters: Investment Type, Industry Vertical, and City Location.
User-Friendly: Intuitive interface for easy interaction.
Real-time Updates: Dashboard content updates instantly.
Files and Structure
The src folder contains:

A components folder with various component files.
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



Technologies Used
React
Material-UI
Tailwind CSS
Custom CSS


###Getting Started
To get a copy of the project up and running on your local machine, follow these steps:

Clone the repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run npm start to start the development server.