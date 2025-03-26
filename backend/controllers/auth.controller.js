const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    // Check for predefined users
    if (username === 'admin' && password === 'adminpassword123!') {
      const token = jwt.sign({ username, role: 'admin' }, process.env.JWT_SECRET);
      return res.json({ token, user: { username, role: 'admin' } });
    }
    
    for (let i = 1; i <= 3; i++) {
      if (username === `user${i}` && password === 'Userpassword123!') {
        const token = jwt.sign({ username, role: 'user' }, process.env.JWT_SECRET);
        return res.json({ token, user: { username, role: 'user' } });
      }
    }
    
    // Check database for other users
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ username, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, user: { username, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    
    const newUser = new User({ username, password });
    await newUser.save();
    
    const token = jwt.sign({ username, role: newUser.role }, process.env.JWT_SECRET);
    res.status(201).json({ token, user: { username, role: newUser.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};