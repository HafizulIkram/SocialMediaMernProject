const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/ServiceAPI/users');
const profile = require('./routes/ServiceAPI/profile');
const posts = require('./routes/ServiceAPI/posts');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongodDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));

// Use Routes

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port 5000'));

