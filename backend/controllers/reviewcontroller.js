const db = require('../database');


exports.getAcceptedReviews = (req, res) => {
  const sql = 'SELECT name, review FROM reviews WHERE status = "accepted"';
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching accepted reviews:", err);
      return res.status(500).send('Error fetching accepted reviews.');
    }
    res.json(results);
  });
};
