const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const threatRoutes = require('./routes/threatRoutes');
const alertRoutes = require('./routes/alertRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
app.use(express.json());

// Database
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/threats', threatRoutes);
app.use('/api/alerts', alertRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));