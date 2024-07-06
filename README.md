# React-Shop

Welcome to the React-Shop repository! This project is a complete online store built using React and various modern web technologies. Below you'll find detailed information about the project structure, pages, and technologies used.

## Table of Contents

- [About the Project](#about-the-project)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## About the Project

React-Shop is a fully functional online store built to demonstrate the capabilities of React and its ecosystem. The project includes all essential pages for an e-commerce platform, from product listing to checkout. It leverages state management, routing, and backend integration to create a seamless shopping experience.

## Project Structure

The repository is organized into two main folders:

- **frontend**: Contains all the React code for the client-side of the application.
- **backend**: Contains the server-side code, including APIs for product management, user authentication, and order processing.

## Pages

The project includes the following pages:

- **About Us**: This page provides information about the store, its mission, and its values. It's designed to build trust and connect with customers by sharing the story behind the business.
  
- **Blog**: The blog page lists all blog posts related to products, industry news, and updates. It serves as a content hub to engage customers with informative and interesting articles.
  
- **Blog Details**: This page shows a detailed view of a specific blog post. It includes the full content of the blog along with comments and related posts to keep users engaged.
  
- **Cart**: The cart page displays all products added to the shopping cart. Users can review their selected items, adjust quantities, and proceed to checkout from this page.
  
- **Category**: This page shows products filtered by category. It helps users navigate through different types of products and find what they are looking for easily.
  
- **Checkout**: The checkout page handles the process of order completion. Users enter their shipping and payment information here to finalize their purchase.
  
- **Contact Us**: This page provides a form for users to get in touch with the store. It's essential for customer support, inquiries, and feedback.
  
- **Main Page**: The homepage of the store, featuring highlighted products, promotions, and links to other sections of the site. It's designed to grab attention and guide users through the store.
  
- **Product**: The product details page shows comprehensive information about a specific product, including images, descriptions, reviews, and related products.
  
- **Shop**: The main shopping page displaying all products. Users can browse through the entire product catalog, use filters, and sort options to find products.

## Technologies Used

This project leverages a variety of modern web technologies, including:

- **React**: A JavaScript library for building user interfaces. It allows for the creation of reusable UI components.
- **Redux**: State management library for managing the application state, ensuring a predictable state container.
- **React Router**: For handling routing within the application, enabling navigation between different components.
- **Axios**: For making HTTP requests to the backend, facilitating communication between the front end and back end.
- **Node.js**: Server-side JavaScript runtime that allows the use of JavaScript for backend development.
- **Express**: Web framework for Node.js, used for building the backend RESTful APIs.
- **MongoDB**: NoSQL database for storing product, user, and order data, providing a flexible, scalable data storage solution.
- **CSS Modules**: For styling components locally, ensuring styles are scoped to specific components.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: JavaScript runtime environment.
- **MongoDB**: NoSQL database server running locally or an account with MongoDB Atlas for cloud-based storage.

### Installation

1. **Clone the repository:** Change to the project directory where the project files are located.

   ```sh
   git clone https://github.com/reza-mohammadvand/React-Shop.git

2. **Navigate to the project directory::** Change to the project directory where the project files are located.

   ```sh
   cd React-Shop

3. **Install backend dependencies:** Navigate to the backend directory and install the necessary dependencies using npm.

   ```sh
   cd backend
   npm install

4. **Install frontend dependencies:** Navigate to the frontend directory and install the necessary dependencies using npm.

   ```sh
   cd ../frontend
   npm install

### Running the Application

1. **Start the backend server first:** This command starts the backend server, which handles API requests and database operations. Ensure your MongoDB server is running.

   ```sh
   cd backend
   npm start

2. **Then, start the frontend development server:** This command starts the frontend development server, which serves the React application. It should automatically open your browser to http://localhost:3000.

   ```sh
   cd ../frontend
   npm start

3. **Open your browser and navigate to http://localhost:3000:** If the browser doesn't open automatically, manually navigate to http://localhost:3000 to view the application.
