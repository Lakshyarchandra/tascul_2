const db = require('../database');

// Fetch admin stats or details
exports.getAdminStats = (req, res) => {
  const sql = `
    SELECT 
      (SELECT COUNT(*) FROM users) AS totalInterns, 
      (SELECT COUNT(*) FROM admins) AS totalAdmins
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send('Error fetching admin stats.');
    res.send(results[0]);
  });
};
