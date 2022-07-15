require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

// Express API instance.
const app = express();
// Parse JSON info from incoming requests.
app.use(bodyParser.json());
// Request handler.
app.use(authRoutes);

const mongoUri = "mongodb+srv://admin:passwordpassword@cluster0.qe0pr8c.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB instance');
})
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});

