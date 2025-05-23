# Car Dealership Web Application

A modern web application for a car dealership with customer inquiry form and admin dashboard.

## Project Structure

```
├── backend/
│   ├── api/
│   │   ├── auth.php          # Admin authentication endpoints
│   │   └── messages.php      # Customer message API
│   └── config/
│       ├── database.php      # Database connection
│       └── setup.sql         # Database setup script
└── src/
    ├── components/           # Reusable UI components
    ├── context/              # React context providers
    ├── pages/                # Application pages
    └── services/             # API services
```

## Technologies Used

- **Frontend:**
  - React.js
  - React Router for navigation
  - Tailwind CSS for styling
  - Axios for API requests
  - React Toastify for notifications
  - Lucide React for icons

- **Backend:**
  - PHP for API endpoints
  - MySQL database

## Setup Instructions

### 1. Database Setup

1. Create a new MySQL database named `car_dealership`
2. Import the database schema from `backend/config/setup.sql`

### 2. Backend Setup

1. Configure your local PHP environment (e.g., XAMPP, WAMP, MAMP)
2. Update database credentials in `backend/config/database.php` if needed
3. Start the PHP server: `npm run start:backend`

### 3. Frontend Setup

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`

## Default Admin Credentials

- **Username:** admin
- **Password:** admin123

## Features

- Modern, responsive design with Tailwind CSS
- Customer inquiry form
- Admin authentication system
- Admin dashboard to view and manage customer messages
- Message filtering and status management#   z o e - c a r - u p d a t e d  
 