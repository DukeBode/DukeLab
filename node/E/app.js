const express = require('express');
const echat = require('./Echat');
const config = require('./config');

let app = express();

let echatApp = new echat(config);

app.get('/',function(req,res){
    echatApp.auth(req.res);
});

app.get('/getAccessToken',function(req,res){
    echatApp.getAccessToken().then(function(data){
        res.send(data);
    });
});

app.listen(80);