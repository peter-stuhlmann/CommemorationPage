require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const filePath = path.resolve(__dirname, './build', 'index.html');

async function fetchData(routeName) {
  const data = fs.readFileSync(filePath, 'utf8');
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/pages/${routeName}`
    );
    return data
      .replace(
        /\$_TITLE_/g,
        response.data.meta.title
          ? process.env.REACT_APP_TITLE
          : response.data.meta.title
      )
      .replace(
        /\$_DESCRIPTION_/g,
        response.data.meta.description
          ? 'David Shallon, 1950-2000, was an Israeli conductor. He was music director in Düsseldorf, Jerusalem and Luxemburg and has two sons, Yuval and Jonathan.'
          : response.data.meta.description
      );
  } catch (error) {
    return data
      .replace(/\$_TITLE_/g, 'Error | David Shallon')
      .replace(
        /\$_DESCRIPTION_/g,
        'David Shallon, 1950-2000, was an Israeli conductor. He was music director in Düsseldorf, Jerusalem and Luxemburg and has two sons, Yuval and Jonathan.'
      );
  }
}

app.get('/', async (req, res) => {
  try {
    const result = await fetchData('start');
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.get('/:pathname', async (req, res, next) => {
  try {
    if (req.headers['sec-fetch-dest'] === 'document') {
      const pathName = req.params.pathname;
      const result = await fetchData(pathName);
      res.send(result);
    }
  } catch (err) {
    console.log(err);
  }
  next();
});

app.get('/:firstLevel/:pathname', async (req, res, next) => {
  try {
    if (req.headers['sec-fetch-dest'] === 'document') {
      const pathName = req.params.pathname;
      const result = await fetchData(pathName);
      res.send(result);
    }
  } catch (err) {
    console.log(err);
  }
  next();
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (req, res) => {
  res.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
