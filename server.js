require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

const filePath = path.resolve(__dirname, './build', 'index.html');

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (req, res) => {
  res.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));