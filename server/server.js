// Import express
import express from 'express';

// Create an express application
const app = express();

// Specify a port
const PORT = process.env.PORT || 3000;

// Use express.json middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the Express server!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
