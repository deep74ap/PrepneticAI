const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();


const app = express();
const PORT =   5000;

// Connect to MongoDB
connectDB();

app.get("/",(req,res) =>{
    console.log("Response sent");
    res.send("Hii")
    
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
