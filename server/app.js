const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const projectRoutes = require('./routes/projectRoutes');
const limitRoutes = require('./routes/limitRoutes');
const trackRoutes = require('./routes/trackRoutes');
const usageRoutes = require('./routes/usageRoutes');
app.use('/api/projects', projectRoutes);
app.use('/api/limits', limitRoutes);
app.use('/api/ratelim', trackRoutes);
app.use('/api/usage', usageRoutes);

module.exports = app;
