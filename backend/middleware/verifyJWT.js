const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {   
        console.log("Incoming Authorization Header:", req.headers.authorization);

        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' }); 
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.error("JWT Verification Error:", e.message);
        res.status(401).json({ message: 'Token is not valid' });
    }
}