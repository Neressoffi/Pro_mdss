// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/search', (req, res) => {
  const query = req.query.query;
  const sql = 'SELECT * FROM matieres WHERE title LIKE ? OR description LIKE ? OR category LIKE ?';
  const search = `%${query}%`;

  connection.query(sql, [search, search, search], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
