import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js' 

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import documentRoutes from './routes/documentRoutes.js'

// initialize express app
const app = express()

// connect to MongoDB       
await connectDB() 

// middleware
app.use(cors({
  origin: 'http://localhost:5173', // or wherever your frontend runs
  credentials: true
}));
app.use(express.json())  

// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/documents', documentRoutes)
app.get('/', (req, res) => 
  res.send('Welcome to the backend server!'))

//port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})









{ /*// server.js
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./db.js";

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json()); // parse JSON bodies
app.use(cors()); // enable CORS for frontend
app.use(morgan("dev")); // request logging

// example root
app.get("/", (req, res) => res.send("InvoixPro API is running"));

// import routes (create these files next)
import userRoutes from "./routes/userRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/invoices", invoiceRoutes);

// error handler (simple)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
*/}