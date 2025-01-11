const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const passport = require('passport');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', userController.test);

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', userController.register);

// @route   POST api/users/login
// @desc    Login user and return JWT token
// @access  Public
router.post('/login', userController.login);

// @route   GET api/users/current
// @desc    Return current user
// @access  Public (Required Token)
router.get(
    '/current',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.json({ msg: 'Success'});
    }
);

module.exports = router;
