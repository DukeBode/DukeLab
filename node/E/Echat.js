'use strict'//设置为严格模式

const 
    crypto = require('crypto'),
    https = require('https'),
    util = require('util'),
    accessTokenJson = require('./access_token');

//构建 Echat 对象，js 中函数就是对象
var Echat = function(config){
    // 设置 Echat 对象属性 config
    this.config = config;
    // 设置 Echat 对象属性 token
    this.token = config.token;
    this.appID = config.appID;
    this.appScrect = config.appScrect;
    this.apiDomain = config.apiDomain;
    this.apiURL = config.apiURL;

    /**
     * 处理 https get 请求
     * @param {*} url 
     */
    this.requestGet = function(url){
        return new Promise(function(resolve,reject){
            https.get(url,function(res){
                let buffer = [],result = "";
                //监听 data
                res.on('data',function(data){
                    buffer.push(data);
                });
                res.on('end',function(){
                    result = Buffer.concat(buffer,buffer.length).toString('utf-8');
                    //返回结果
                    resolve(result);
                });
            }).on('error',function(err){
                reject(err);
            });
        });
    }

    /**
     * 处理 https Post 请求
     * @param {string} url 请求地址
     * @param {json} data 提交的数据
     */
    this.requestPost = function(url,data){
        return new Promise(function(resolve,reject){
        //解析 url
        let urlData = urltil.parse(url);
        //
        let options = {
            //目标主机
            hostname:urlData.hostname,
            //目标地址
            path:urlData.path,
            //请求方法
            method:'POST',
            //头部协议
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Content-Length':Buffer.byteLength(data,'utf-8')
            }
        };
        let req = https.request(options,function(res){
            let Buffer = [],result = '';
            res.on('data',function(data){
                buffer.push(data);
            });
            res.on('end',function(){
                result = Buffer.concat(buffer).toString('utf-8');
                resolve(result);
            })
        }).on('error',function(err){
            console.log(err);
            reject(err);
        });
        req.write(data);
        req.end();
        })
    }
}

/**
 * 易班接入验证
 * @param {Request} req Request 对象
 * @param {Response} res Response 对象
 */
Echat.prototype.auth = function(req,res){
    var //获取服务器get请求参数
    signature = req.query.signature,
    timestamp = req.query.timestamp,
    nonce = req.query.nonce,
    echostr = req.query.echostr;
    //2.字典排序
    var Array = [this.token,timestamp,nonce];
    Array.sort();
    //3.拼接加密
    var temArr = Array.join('');
    const hash = createHash('sha1');
    var value = hash.update(temArr,'utf8').digest('hex');
    //4.对比
    if(value === signature){
        res.send(echostr);
    }else{
        res.send('');
    }
}

/**
 * 获取易班 access_token
 */
Echat.prototype.getAccessToken = function(){
    var that = this;
    return new Promise(function(resolve,reject){
        //获取当前时间
        var currentTime = new Date().getTime();
        //格式化请求地址
        var url = util.format(that.apiURL.accessTokenApi,that.apiDomain,that.a
    })
}

//暴露接口供外部访问
module.exports = Echat;