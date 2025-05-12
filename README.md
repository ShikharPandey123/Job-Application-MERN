
---

## 🚀 Features

- ✅ User registration and login with JWT
- 🧑‍💼 Apply for jobs (users)
- 🗂 Resume upload functionality
- 🔐 Role-based access (User/Admin)
- 📋 Admin can view, accept, or reject applications
- 📁 RESTful API architecture
- 🌐 Deployed using Render

---

## 🧠 Roles and Permissions

| Role    | Feature                             |
|---------|--------------------------------------|
| User    | Register, Login, Apply with Resume   |
| Admin   | View all applicants, Accept/Reject   |

---

## 🔗 Available Routes

### 🧑‍💻 Public
- `POST /api/register` – Register a new user
- `POST /api/login` – Login and receive token

### 🔒 User (requires token)
- `GET /api/profile` – Get logged-in user's profile
- `POST /api/apply` – Apply for a job with resume

### 🔐 Admin (requires admin role)
- `GET /api/applicants` – View all applications
- `POST /api/applicants/:id/accept` – Accept application
- `POST /api/applicants/:id/reject` – Reject application

---

## 🧰 Tech Stack

### Frontend (`frontend-indeed`)
- React (Vite)
- React Router
- Axios
- React Toastify

### Backend (`backend-indeed`)
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Multer for file uploads
- Role-based middleware

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ShikharPandey123/Job-Application-MERN.git
cd job-application

Deployed URL : https://job-application-mern-1.onrender.com/
