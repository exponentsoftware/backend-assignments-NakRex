const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');
const PORT = process.env.PORT || 3000;
// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true }, (err) => { 
    console.log(err || 'Connected to database');
});
app.use(cors());
app.use(express.useNewUrlParser());
app.use(express.json());

// Middleware
app.listen(PORT, () => { 
console.log(`Server started on port ${PORT}`);
});