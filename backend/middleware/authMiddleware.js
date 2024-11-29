const jwt = require('jsonwebtoken');
const JWT_SECRET = 'tascul123'; // Replace with a secure secret in production

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Access denied. No token provided.');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Error verifying token:', err);
      return res.status(403).send('Invalid or expired token.');
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
