const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get("/",(req,res) =>{
    console.log("Response sent");
    res.send("Hii")
    
})

app.listen(5000, () => {
  console.log(`Server running on port {PORT}`);
});