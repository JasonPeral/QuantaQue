import express from 'express';

// Creating an express application
const app = express();
const PORT = process.env.PORT || 3000;

// Use express.json middleware to parse JSON requests
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the Express server!' });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
