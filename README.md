CSV Upload App
Description

MyApp is a web application built using React (TypeScript) for the frontend and Laravel for the backend. The application allows users to register, log in, upload CSV files, and display the uploaded data in a formatted table.

Features

User Authentication (Registration, Login, and Session-based Account Activation)

Profile Management (Update profile picture & change password)

CSV Upload (Users can upload CSV files and store data in the database)

Data Display (Displays uploaded data in a formatted Bootstrap table with caching & loading management)

Styled using Bootstrap (CDN)

Requirements

1️⃣ Install Prerequisites

Ensure you have the following installed:

XAMPP (Apache, MySQL, PHP)

Node.js (Latest LTS Version) - Download Here

Composer (for Laravel dependencies) - Download Here

Setup Instructions

2️⃣ Clone the Repository

cd C:/wamp64/www
git clone https://github.com/yourusername/myapp.git
cd myapp

3️⃣ Backend (Laravel) Setup

cd backend  # Navigate to Laravel backend folder
composer install  # Install dependencies
cp .env.example .env  # Create environment file
php artisan key:generate  # Generate app key

Configure .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=myapp_db
DB_USERNAME=root
DB_PASSWORD=

Run migrations:

php artisan migrate
php artisan serve  # Start Laravel server

4️⃣ Frontend (React with TypeScript) Setup

cd frontend  # Navigate to React frontend folder
npm install  # Install dependencies

Start the frontend server:

npm run dev  # Runs Vite development server

Usage

Visit: http://localhost:5173/ (React Frontend)

API runs on: http://127.0.0.1:8000/api

Upload CSV: Navigate to the "Upload CSV" section and select a CSV file.

Technologies Used

Frontend: React (TypeScript) with Bootstrap (CDN)

Backend: Laravel (PHP, MySQL)

Database: MySQL

API Communication: Axios

Troubleshooting

If you encounter issues:

Restart WAMP & Servers

Delete node_modules & Reinstall Packages

rm -rf node_modules package-lock.json  # Linux/macOS
rd /s /q node_modules & del package-lock.json  # Windows (PowerShell)
npm install
npm run dev

Check .env file configuration

Ensure MySQL database is running

Author

Developed by Elisha Aywak