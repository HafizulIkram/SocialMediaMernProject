const userService = require('../services/userService');
const passport = require('passport')

// Test Route
exports.test = (req, res) => {
    res.json({ msg: "Users route works" });
};

// Register User
exports.register = async (req, res) => {
    try {
        const result = await userService.register(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const result = await userService.login(req.body);
        res.json(result);
    } catch (error) {
        res.status(error.status || 500).json(error);
    }
};

exports.getCurrentUser = (req, res) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err) {
            return res.status(500).json({ success: false, msg: 'Server error' });
        }
        if (!user) {
            return res.status(401).json({ success: false, msg: 'Unauthorized: Invalid token' });
        }

        return res.json({ success: true, msg: 'Token is valid' });
    })(req, res);
};
