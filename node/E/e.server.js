import express from "express";
import { createHash } from "crypto";

var app = express();

app.get('/',function(req,res){
    var //获取服务器get请求参数
    token='d3a8a8bd0e444d23db5ef5d3e10eb9b2',
    signature = req.query.signature,
    timestamp = req.query.timestamp,
    nonce = req.query.nonce,
    echostr = req.query.echostr;

    var Array = [token,timestamp,nonce];
    Array.sort();
    var temArr = Array.join('');
    const hash = createHash('sha1');
    var value = hash.update(temArr,'utf8').digest('hex');
    if(value === signature){
        res.send(echostr);
    }else{
        res.send('');
    }
});
app.listen(80);