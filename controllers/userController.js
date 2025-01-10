const userService = require('../services/userService');

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
