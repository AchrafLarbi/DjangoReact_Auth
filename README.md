Django React Authentication Project

This project demonstrates a full-fledged authentication system using Django Rest Framework for the backend and React for the frontend. The authentication system includes email verification, account activation, and password reset features.
Technologies Used

    Backend:
        Django
        Django Rest Framework

    Frontend:
        React
        Axios for API requests

Features

    User Registration:
        Users can register with their email addresses.

    Email Verification:
        An email is sent to the user with a unique activation link upon registration.
        Users need to click on the activation link to verify their email addresses.

    Login and Logout:
        Registered users can log in using their credentials.
        Users can log out securely.

    Password Reset:
        Users can request a password reset link.
        An email is sent to the user with a link to reset their password.

    Token-Based Authentication:
        Token-based authentication is implemented for secure API access.

Project Structure

    Backend:
        Django project and app structure.
        RESTful API endpoints for user authentication.

    Frontend:
        React components for user interface.
        Integration with Django Rest Framework API endpoints.

Setup Instructions

    Clone the Repository:

    bash

git clone https://github.com/your-username/django-react-authentication.git
cd django-react-authentication

Backend Setup:

bash

cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Frontend Setup:

bash

    cd frontend
    npm install
    npm start

    Access the Application:
        Open your browser and visit http://localhost:3000 to access the React frontend.
        The Django Rest Framework API is available at http://localhost:8000/api/.

Additional Configuration

    Update Django settings in backend/authentication_project/settings.py:
        Set email backend settings for sending activation and password reset emails.
        Configure database settings.

    Update React API endpoint in frontend/src/utils/api.js:
        Set the base URL for API requests.
