const db = require('../database');
const bcrypt = require('bcrypt');

// Function to create a new user (intern)
const createUser = (userData, callback) => {
  const sql = 'INSERT INTO users (name, candidate_serial, domain, email, password) VALUES (?, ?, ?, ?, ?)';
  const { name, candidateSerial, domain, email, password } = userData;

  db.query(sql, [name, candidateSerial, domain, email, password], callback);
};

// Function to find a user by candidate_serial (intern)
const findByCandidateSerial = (candidateSerial, callback) => {
  const sql = 'SELECT * FROM users WHERE candidate_serial = ?';
  db.query(sql, [candidateSerial], callback);
};

// Function to find an admin by admin_id
const findByAdminId = (adminId, callback) => {
  const sql = 'SELECT * FROM admins WHERE admin_id = ?';
  db.query(sql, [adminId], callback);
};

// Function to fetch all users
const getAllUsers = (callback) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, callback);
};

module.exports = {
  createUser,
  findByCandidateSerial,
  findByAdminId,
  getAllUsers,
};
