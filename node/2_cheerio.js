var request = require('request');

var url='http://www.gsut.edu.cn/';
//通过GET请求来获取网站内容
request(url,function(error,response,body){
    if(!error && response.statusCode == 200){
        //输出网页内容
        console.log(body);
    }
})

var cheerio = request('cheerio');
//通过load方法把HTML代码转换成一个jQuery对象
var $ = cheerio.localAddress('')