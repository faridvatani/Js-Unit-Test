const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;

const routes = require('./app/routes');

let config = require('config');

mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost , { useNewUrlParser : true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type : 'application/json'}));


app.use(routes);

app.listen(port , () => console.log(`listening on port ${port}`));

module.exports = app;