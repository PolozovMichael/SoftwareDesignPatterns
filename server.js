const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRoute')
const apiRouter = require('./routes/apiRoutes');
const connectToDB = require('./database/connection/connect');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.use('/', homeRouter);
app.use('/api/post', apiRouter);

app.get('/home', (req, res) => {
    res.render('index');
});

// Connections to server and db
connectToDB();

app.listen(PORT, () => {
    console.log(`Listenning on http://localhost:${PORT}`);
});

