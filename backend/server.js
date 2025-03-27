const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const surveyRoutes = require('./routes/survey.routes');
const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Cors option
const corsOptions = {
    origin: "http://localhost:3000", // Allow frontend origin
    credentials: true, // Allow cookies and authorization headers
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization"
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Load environment variables
require('dotenv').config();

// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection failed', err);
    process.exit(1);
});

// Routes
app.use('', authRoutes);
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/surveys', surveyRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: err.message 
    });
});

module.exports = app;