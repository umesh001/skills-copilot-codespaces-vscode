// Create Web Server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments');
const PORT = 3000;

app.use(bodyParser.json());

// GET request to /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST request to /comments
app.post('/comments', (req, res) => {
  const { body } = req;
  if (!body) {
    res.status(400).json({ error: 'No body found in request' });
  } else {
    comments.push(body);
    res.json(body);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});