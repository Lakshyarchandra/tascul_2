const db = require('../database');


const findByAdminId = (adminId, callback) => {
  const sql = 'SELECT * FROM admins WHERE admin_id = ?';
  db.query(sql, [adminId], callback);
};

module.exports = {
  findByAdminId,
};
