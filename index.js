const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
const router = require('./router');

dotenv.config();

const PORT = process.env.PORT || 3003;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the router
app.use('/', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
