const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
