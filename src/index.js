const express = require('express'); // Require Express
const serverConfig = require('./config/serverConfig'); // Server Configuration
const connectDB = require('./config/dbConfig'); // Database Configuration

// Create an Express App
const App = express();

// Middleware to parse JSON bodies
App.use(express.json());// it read json format
App.use(express.text())// it read text format
App.use(express.urlencoded)// it read url data

// POST /ping route
App.post('/ping', (req, res) => {
    console.log(req.body); // Log the request body
    return res.json({ message: 'pong' }); // Respond with "pong"
});

// Start the Server
App.listen(serverConfig.port, async () => {
    try {
        await connectDB(); // Connect to the database
        console.log(`Server started at port ${serverConfig.port}`);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
});
