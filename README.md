# Valorant Reimagine

A modern Valorant-inspired web application featuring immersive animations, community interaction, AI-powered assistance, authentication, and media management.

## Tech Stack

### Frontend

* Next.js
* GSAP
* @gsap/react
* React Router DOM
* Lenis
* Axios
* UglifyJS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security

* JSON Web Token (JWT)
* bcrypt
* CORS
* cookie-parser

### File Upload & Media

* Multer
* ImageKit

### AI Integration

* LangChain
* OpenAI

### Utilities

* dotenv
* uuid
* nodemon

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Harshalpawar369/Valorant-reimangine.git
cd Valorant-reimangine
```

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

If dependencies are missing, install them manually:

```bash
npm install gsap @gsap/react react-router-dom uglify-js lenis axios
```

Start the frontend:

```bash
npm run dev
```

---

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Or install manually:

```bash
npm install express dotenv cookie-parser jsonwebtoken bcrypt mongoose cors multer uuid imagekit langchain @langchain/openai
```

Install Nodemon:

```bash
npm install nodemon --save-dev
```

Start the backend:

```bash
npm start
```

or

```bash
npx nodemon index.js
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

OPENAI_API_KEY=your_openai_api_key
```

---

## Features

* Secure user authentication
* JWT-based authorization
* Community page with smooth GSAP animations
* AI-powered Valorant assistant
* Image uploads with ImageKit
* MongoDB data persistence
* Responsive design
* Smooth scrolling with Lenis
* Interactive UI inspired by Valorant

---

## Author

Harshal Pawar

GitHub:
https://github.com/Harshalpawar369
