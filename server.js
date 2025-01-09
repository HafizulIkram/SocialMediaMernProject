const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/Swagger/swaggerConfig');
const bodyParser = require('body-parser');

const users = require('./routes/ServiceAPI/users');
const profile = require('./routes/ServiceAPI/profile');
const posts = require('./routes/ServiceAPI/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongodDB Connected'))
    .catch(err => console.log(err));

// Serve Swagger Docs only in development
if (process.env.NODE_ENV === 'development') {
    // Redirect root to API docs
    app.get('/', (req, res) => {
        res.redirect('/api-docs');
    });

    // Serve Swagger API docs
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger documentation is available at /api-docs');
}

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
