# ProfileList - User Management Dashboard

This is a mini web application that showcases a simple dashboard for a fictional AlumUnite user management system. The application allows users to view, manage, and add users efficiently. It is built using **React.js** (with **Next.js**) and is fully responsive.

## Features

- **Home Page**: Displays all users with an option to filter by their active status.
- **Add User Page**: Allows adding new users via a form.
- **Manage Users Page**: Users can be activated and deactivated here.

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

Start by cloning the repository from GitHub:

```bash
git clone https://github.com/JayHansea/profilelist.git
```

### 2. Install Dependencies

Navigate into the project directory and install the necessary dependencies by running:

```bash
cd profilelist
npm install
```

### 3. Run the Application

After installing the dependencies, start the development server:

```bash
npm run dev
```

Once the server is running, open your browser and go to:
`http://localhost:3000/`
You should see the user management dashboard running.

## Folder Structure

Here’s a breakdown of the main files and directories:

- `pages/`: Contains the main pages of the app, including Home, Add User, and Manage Users.
- `components/`: Contains reusable components like table and navbar.
- `constants/`: Contains the static data file, used to store the initial data.
- `app`: For displaying the pages using the next file based routing system.

## Tech Stack

- `React.js` - Frontend framework
- `Next.js` - React framework with SSR (Server-Side Rendering) and routing
- `Tailwind CSS` - Utility-first CSS framework for styling
- `TypeScript` - Typed JavaScript for better development experience

## Contributing

Feel free to fork this repository, contribute improvements, or open issues with any problems you encounter.

1. Fork the repository
2. Clone your fork locally
3. Create a new branch
4. Make your changes
5. Submit a pull request with a description of your changes
