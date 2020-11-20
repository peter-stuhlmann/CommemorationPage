const express = require('express');
const app = express();

app.use('/pdf', express.static(__dirname + '/public/pdf'));

app.listen(5002, () => console.log(`Listening on port 5002.`));