const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
connectDB();
dotenv.config({path:'./config.config.env'});
app.use(express.json());
app.use(cors());
app.use('/api',require('./routes/places'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));