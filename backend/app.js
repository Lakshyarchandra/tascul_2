const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authroutes = require('./routes/authroutes');
const internroutes = require('./routes/internroutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is Active !');
});

app.use('/api/auth', authroutes);

app.use('/api/intern', internroutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
