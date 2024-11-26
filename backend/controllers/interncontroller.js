const db = require('../database');

// Function to fetch internship details
exports.getInternshipDetails = (req, res) => {
  // Extract `candidate_serial` from the token payload
  const { candidate_serial } = req.user;

  // Check if `candidate_serial` exists in the payload
  if (!candidate_serial) {
    return res.status(400).send('Invalid request: Missing candidate_serial.');
  }

  console.log('Fetching details for candidate_serial:', candidate_serial);

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

  // Query the database to fetch user and internship details
  db.query(sql, [candidate_serial], (err, results) => {
    if (err) {
      console.error('Error fetching internship details:', err);
      return res.status(500).send('Error fetching internship details.');
    }

    if (results.length === 0) {
      return res.status(404).send('No internship details found.');
    }

    // Send the combined user and internship details
    res.send(results[0]);
  });
};
