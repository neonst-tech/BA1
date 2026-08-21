require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Add routes, middleware, database connection and application logic here.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
