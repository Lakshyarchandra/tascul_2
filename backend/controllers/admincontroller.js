const db = require('../database');


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


exports.getProjects = (req, res) => {
  const sql = 'SELECT * FROM projects ORDER BY id DESC';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send('Error fetching projects.');
    res.send(results);
  });
};


exports.addProject = (req, res) => {
  const { title, thumbnail, description, liveLink, githubLink } = req.body;
  const sql = 'INSERT INTO projects (title, thumbnail, description, live_link, github_link) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [title, thumbnail, description, liveLink, githubLink], (err) => {
    if (err) return res.status(500).send('Error adding project.');
    res.send('Project added successfully.');
  });
};


exports.getReviews = (req, res) => {
  const sql = 'SELECT * FROM reviews WHERE status = "pending"';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send('Error fetching reviews.');
    res.send(results);
  });
};

exports.acceptReview = (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE reviews SET status = "accepted" WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).send('Error accepting review.');
    res.send('Review accepted.');
  });
};


exports.rejectReview = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM reviews WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).send('Error rejecting review.');
    res.send('Review rejected.');
  });
};
