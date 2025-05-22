const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dBConnect = require('./middlewares/dB');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();
app.use(express.json());
dBConnect();

app.use('/api', contactRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});