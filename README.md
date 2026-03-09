
A simple **Netflix-style Login Application** built using **React for the frontend** and **Node.js with Express for the backend**.
The application demonstrates a basic authentication flow with frontend validation and API communication.

---

## Features

* Netflix-style login UI
* React form handling
* Frontend validation for email and password
* API communication using Axios
* Backend authentication using mock credentials

---

## Technologies Used

* **React JS**
* **Node.js**
* **Express.js**
* **Axios**
* **CSS**

---

## Project Structure

```
project-folder
│
├── backend
│   └── server.js
│
└── frontend
    └── src
        ├── pages
        │   ├── Login.js
        │   └── Dashboard.js
        ├── App.js
        ├── App.css
        └── index.js

```

### Backend Setup

```
cd backend
npm install
node server.js
```

Backend will run on:

```
http://localhost:5000
```

### Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## Mock Login Credentials

```

## Login Flow

1. User enters email and password.
2. React validates the input fields.
3. Login data is sent to the backend using Axios.
4. Express server checks the credentials.

---

## Author

Saravanan Ps
