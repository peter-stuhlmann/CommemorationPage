const express = require('express');
const app = express();

app.use('/img', express.static(__dirname + '/public/img'));

app.listen(5001, () => console.log(`Listening on port 5001.`));