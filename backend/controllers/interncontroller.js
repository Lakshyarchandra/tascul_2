const db = require('../database');

// Function to fetch internship details
exports.getInternshipDetails = (req, res) => {
  const { candidate_serial } = req.user;

  if (!candidate_serial) {
    return res.status(400).send('Invalid request: Missing candidate_serial.');
  }

  const sql = `
    SELECT 
        users.name,
        users.email,
        users.domain,
        users.candidate_serial,
        internships.role,
        internships.duration,
        internships.assessments 
    FROM users
    LEFT JOIN internships ON users.candidate_serial = internships.candidate_serial 
    WHERE users.candidate_serial = ?
  `;

  db.query(sql, [candidate_serial], (err, results) => {
    if (err) {
      console.error('Error fetching internship details:', err);
      return res.status(500).send('Error fetching internship details.');
    }

    if (results.length === 0) {
      return res.status(404).send('No internship details found.');
    }

    res.send(results[0]);
  });
};

// Function to post a review
exports.postReview = (req, res) => {
  const { candidate_serial } = req.user;
  const { review } = req.body;

  if (!candidate_serial) {
    return res.status(400).send('Invalid request: Missing candidate_serial.');
  }

  if (!review) {
    return res.status(400).send('Review content is required.');
  }

  // Fetch the user's name from the `users` table
  const getUserNameSql = 'SELECT name FROM users WHERE candidate_serial = ?';
  db.query(getUserNameSql, [candidate_serial], (err, userResults) => {
    if (err) {
      console.error('Error fetching user name:', err);
      return res.status(500).send('Error fetching user information.');
    }

    if (userResults.length === 0) {
      return res.status(404).send('User not found.');
    }

    const name = userResults[0].name;

    // Insert the review into the `reviews` table
    const insertReviewSql = 'INSERT INTO reviews (candidate_serial, name, review) VALUES (?, ?, ?)';
    db.query(insertReviewSql, [candidate_serial, name, review], (err) => {
      if (err) {
        console.error('Error posting review:', err);
        return res.status(500).send('Error posting review.');
      }

      res.status(201).send({ message: 'Review posted successfully.' });
    });
  });
};
