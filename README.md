### Roster Management

This is a Roster Management application built with React, Redux Toolkit, and Tailwind CSS. The application includes authentication for managers and staff, allowing different dashboards for each role. Managers can view, edit, and delete staff rosters, while staff can view their own shifts and attendance.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/roster-management.git](https://github.com/sourabh707/Roster-Management--Frontend.git)
   cd roster-management
Install the dependencies:
npm install

Start the development server:
npm start
Usage

Open your browser and navigate to http://localhost:3000.

Register a new user (either Manager or Staff).

Log in with the registered user credentials.

Depending on the role, you will be redirected to the respective dashboard:

Managers can view, edit, and delete the staff roster.
Staff can view their own shifts and attendance.

## File Structure

roster-management/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Dashboard/
│   │   │   ├── ManagerDashboard.js
│   │   │   ├── StaffDashboard.js
│   │   ├── common/
│   │   │   ├── Navbar.js
│   │   │   └── ProtectedRoute.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   └── rosterSlice.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   ├── tailwind.config.js
├── package.json
└── README.md


## Features

User Authentication (Register, Login, Logout)
Role-based Access Control (Manager and Staff)
Manager Dashboard:
View staff roster
Edit staff details
Delete staff members
Staff Dashboard:
View personal shift details and attendance

## Technologies Used

React
Redux Toolkit
React Router
Tailwind CSS
Axios
Node.js (for the backend)
Express (for the backend)
MongoDB (for the database)

##License

This project is licensed under the MIT License.
