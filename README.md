# Inventory Management Application

![Logo](README_LOGO.png)

## Overview

The Inventory Management Application is a simple yet effective tool designed to help users manage their inventory efficiently. Built with Next.js and Material-UI, this application allows users to add, update, and remove items from their inventory with ease. The app is integrated with Firebase for real-time data storage and management.

## Features

- **Add Items**: Users can add new items to the inventory, specifying the item name and quantity.
- **Update Quantity**: Users can increase or decrease the quantity of items directly from the app.
- **Remove Items**: Items can be removed from the inventory when no longer needed.
- **Real-Time Sync**: Inventory data is stored in Firebase, allowing real-time updates across different devices.

## Technologies Used

- **Next.js**: A React framework for building server-side rendering and static web applications.
- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework with pre-built components and themes.
- **Firebase**: A platform by Google offering real-time database, authentication, and hosting services.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/) (v14.x or later)
- **npm or Yarn**: Comes with Node.js. [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/inventory-management-application.git
   cd inventory-management-application
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a new web app to your Firebase project and get the Firebase configuration details.
   - Create a `firebase_config.js` file in the `database` directory and add your Firebase configuration:

     ```javascript
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
       apiKey: "your-api-key",
       authDomain: "your-auth-domain",
       projectId: "your-project-id",
       storageBucket: "your-storage-bucket",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     };

     const app = initializeApp(firebaseConfig);

     export default app;
     ```

     Or Alternatively you can use the current firebase_config_sample.js file after exporting the keys in an external `.env` file, like:

     ```env

      NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

4. **Run the application**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   - Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Usage

1. **Add Items**:
   - Click on the "Add Item" button.
   - Enter the item name and adjust the quantity using the counter.
   - Click "Add Item" to save the item to your inventory.

2. **Update Quantity**:
   - Use the "+" and "-" buttons next to each item to increase or decrease the quantity.

3. **Remove Items**:
   - Click the "Remove" button next to an item to delete it from your inventory.

## Customization

### Changing the Theme

The application uses Material-UI with a custom theme located in `components/theme.ts`. You can modify the theme colors, typography, and component styles as needed.

### Customizing the Logo

Replace the `favicon.ico` in the `public` directory and update the logo image paths in the README and the application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.

## Acknowledgements

- **Material-UI**: For the beautiful components and easy-to-use theming system.
- **Firebase**: For providing a real-time database and other essential services.

---
