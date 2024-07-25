const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const earningsRoutes = require('./routes/earnings');
const expensesRoutes = require('./routes/expenses');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mongoURI = 'mongodb+srv://bastolasuraj:hH6lPYSHDg31wzcD@cluster0.o5irnyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

app.use('/api/earnings', earningsRoutes);
app.use('/api/expenses', expensesRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
