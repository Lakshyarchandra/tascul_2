const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authroutes = require('./routes/authroutes');
const internroutes = require('./routes/internroutes');
const adminroutes = require('./routes/adminroutes');
const reviewsroutes = require('./routes/reviewsroutes')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Server is Active !');
});

app.use('/api/auth', authroutes);
app.use('/api/intern', internroutes);
app.use('/api/admin', adminroutes);
app.use('/api/reviews', reviewsroutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
