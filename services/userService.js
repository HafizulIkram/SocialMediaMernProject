const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const User = require('../models/User');
const keys = require('../config/keys');

exports.register = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw { email: 'Email already exists' };
    }

    const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        avatar,
        password: hashedPassword
    });

    const savedUser = await newUser.save();
    return savedUser;
};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw { email: 'User not found', status: 404 };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw { password: 'Password incorrect', status: 400 };
    }

    const payload = { id: user.id, name: user.name, avatar: user.avatar };
    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });

    return { success: true, token: 'Bearer ' + token };
};
