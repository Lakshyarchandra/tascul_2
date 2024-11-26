const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Admin = require('../models/admin');

const JWT_SECRET = process.env.JWT_SECRET || 'tascul123'; // Use environment variable in production

// User registration (Interns)
exports.register = (req, res) => {
  const { name, candidateSerial, domain, email, password } = req.body;

  if (!name || !candidateSerial || !domain || !email || !password) {
    return res.status(400).send('All fields are required.');
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send('Error hashing password.');

    const userData = { name, candidateSerial, domain, email, password: hashedPassword };
    User.createUser(userData, (error) => {
      if (error) return res.status(500).send('Error registering user.');
      res.send({ message: 'User registered successfully!' });
    });
  });
};

// User login (Interns and Admins)
exports.login = (req, res) => {
  const { id, password, role } = req.body;

  if (!id || !password || !role) {
    return res.status(400).send('ID, password, and role are required.');
  }

  // Validate role
  if (role !== 'admin' && role !== 'intern') {
    return res.status(400).send('Invalid role provided.');
  }

  const fetchUser =
    role === 'admin' ? Admin.findByAdminId : User.findByCandidateSerial;

  fetchUser(id, (error, results) => {
    if (error || results.length === 0) {
      return res.status(401).send('Invalid credentials.');
    }

    const user = results[0];

    if (role === 'admin') {
      // Admin login: Password is not hashed for admins
      if (password !== user.password) return res.status(401).send('Invalid credentials.');

      const token = jwt.sign({ id: user.id, role }, JWT_SECRET, { expiresIn: '1h' });
      return res.send({ token, name: user.name || 'Admin' });
    } else {
      // Intern login: Compare hashed password for interns
      bcrypt.compare(password, user.password, (err, match) => {
        if (!match) return res.status(401).send('Invalid credentials.');

        // Interns get a token with `candidate_serial` in the payload (consistent with the user model)
        const token = jwt.sign({ candidate_serial: user.candidate_serial, role }, JWT_SECRET, { expiresIn: '1h' });
        return res.send({ token, name: user.name || 'Intern' });
      });
    }
  });
};
