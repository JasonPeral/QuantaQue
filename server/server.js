import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import User from './model/Users.js';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:5173' // Allows for only frontend origin
}));

app.use(express.json());

mongoose.connect("mongodb+srv://jasonperal:<Password>@quantaque.dvlmr5b.mongodb.net/?retryWrites=true&w=majority&appName=QuantaQue", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the Express server!' });
});

app.post('/api/register', async (req, res) => {
    try {
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Saved user to the database
        const savedUser = await user.save();

        // Response to the client
        res.status(201).send({ message: "User created successfully", userId: savedUser._id });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

