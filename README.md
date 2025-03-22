# Library Management System - Backend

This is the backend service for the Library Management System. It provides APIs to manage books, users, and transactions in the library.

## Features

- Admin Features:
    - Manage books (CRUD).
    - Manage users (view, all).
    - View all borrowing history.
    - Approve book reviews.
    - View library reports and analytics.

- Member Features:
    - Borrow and return books.
    - View personal borrowing history.
    - Submit book reviews and ratings.
    - Manage own profile.
    - Update password.

## Technologies Used

- Node.js
- Express
- Bcrypt
- JWT
- MongoDB
- Joi Validation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShubikB/Library-Management-System-be.git
   cd Library-Management-Sysytem-be
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRESIN = 1d
   REFRESH_JWT_SECRET =your_refresh_jwt_secret
   REFRESH_JWT_EXPIRESIN = 15d
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Books

- `GET /api/v1/books` - Get all books.
- `POST /api/v1/books` - Add a new book.
- `PUT /api/v1/books/:id` - Update a book.
- `DELETE /api/v1/books/:id` - Delete a book.

### Users

- `POST /api/v1/users/register` - Register a new user.
- `POST /api/v1/users/login` - Login a user.
- `GET /api/v1/auth/logout` - Logout and invalidate JWT.
- `GET /api/v1/auth/renew-jwt` - Renew JWT Token.

### Borrowing

- `POST /api/v1/borrows` - Borrow a book.
- `PUT /api/v1/borrows/return` - Return a book.
- `GET /api/v1/borrows/history` - View borrow history

### Reviews

- `POST /api/v1/review` - Submit a review.
- `PATCH /api/v1/review/:id` - Admin only, approve the review.
- `GET /api/v1/books/:id/reviews` - View reviews and ratings.

### Admin

- `GET /api/v1/admin/reports` - View library reports and analytics.

### User and Admin

- `GET /api/v1/users` - Admin-only get all user.
- `GET /api/v1/users/profile` - Get logged in user profile details.
- `PUT /api/v1/users` - Update their profile details.
- `PATCH /api/v1/users/update-password` - Update password.
- `DELETE /api/v1/users` - Delete their own profile.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.