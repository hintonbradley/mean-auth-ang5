var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(cors());
app.use(bodyParser.json());

var User = require('./models/user.js');

app.get('/posts', (req, res) => {
    console.log('Server is listening (backend)');
    res.send([{message:'hello world'},{greeting:'Bonjour monde'}]);
});

app.get('/', (req, res) => {
    console.log('Server is listening (backend)');
    res.send('Welcome to your server! It is good.');
});

app.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);

    user.save((err, result) => {
        if(err) {
            console.log('There is an error saving new user');
        } else {
            res.sendStatus(200);
        }
    })
});

mongoose.connect('mongodb://meanstack-test-user:meanstack-test23@ds257640.mlab.com:57640/meanstack-test', err => {
    if(!err) {
        console.log('Connected to Database!');
    } else {
        console.log('Error is: ', err);
    }
});

app.listen(process.env.PORT || 3000), function () {
    console.log("SERVER RUNNING");
  };
