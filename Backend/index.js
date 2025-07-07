const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();


const app = express();
const PORT =   5000;

// Connect to MongoDB
connectDB();
app.use(cors());
app.use(cors({
  origin: ['https://metahire.vercel.app', 'http://localhost:3000'], // Add your frontend URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


app.get("/",(req,res) =>{
    console.log("Response sent");
    res.send("Hii")
    
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
