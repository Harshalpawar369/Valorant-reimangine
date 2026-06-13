Tech Stack Frontend

Framework: Next.js

Animations: GSAP (gsap, @gsap/react)

Routing: React Router DOM

Utilities: UglifyJS

Backend

Runtime & Framework: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication & Security: JSON Web Tokens (JWT), bcrypt, CORS, cookie-parser

File Uploads: Multer, ImageKit

AI Integration: Langchain (OpenAI)

Utilities: dotenv, uuid, nodemon

1. Clone the Repository First, clone the project to your local machine: git clone https://github.com/Harshalpawar369/Valorant-reimangine.git cd Valorant-reimangine

Frontend Setup

cd ./frontend

If generating a new Next.js app (choose 'No' for the recommended app router/src directory if prompted)
npm create next-app .

Install required frontend packages
npm install gsap @gsap/react react-router-dom uglify-js

Backend Setup cd ./backend

Install dependencies
npm i node npm i express dotenv cookie-parser jsonwebtoken bcrypt mongoose cors multer uuid imagekit langchain @langchain/openai

Install nodemon for development (optional but recommended)
npm install nodemon --save-dev

4. Environment Variables Create a .env file in your backend directory and add your secret keys for MongoDB, JWT, ImageKit, and OpenAI.

5. Run the Application Start both the frontend and backend servers to run the application locally.

Frontend: npm run dev

Backend: npm start (or nodemon index.js)
