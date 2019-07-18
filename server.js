// DEPENDENCIES
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// EXPRESS
const app = express();

// SERVE STATIC FILES
app.use('/public', express.static(path.join(__dirname, 'public')));

// // BODY PARSER
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// DISPLAY PAGE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});
app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/privacy.html'));
});
app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/pages/terms.html'));
});

// LISTEN
app.listen(process.env.PORT || 5000, () => console.log('Server started...'));