const db = require('../database');

// Function to find an admin by admin_id
const findByAdminId = (adminId, callback) => {
  const sql = 'SELECT * FROM admins WHERE admin_id = ?';
  db.query(sql, [adminId], callback);
};

module.exports = {
  findByAdminId,
};
