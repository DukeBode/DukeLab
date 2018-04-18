//HTTP服务器模块

var http = require("http");
var url = require("url")

function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received."); 
        route(handle,pathname);
        //终端打印信息
        console.log("Request received."); 
        // 发送 HTTP 头部 
        // HTTP 状态值：200：OK 
        // 内容类型:text/plain
        response.writeHead(200, {'Content-Type':'text/plain'});
        //发送响应数据“Hello World”
        response.write('Hello World');
        //完成响应
        response.end();
    }
    http.createServer(onRequest).listen(80);
    //终端打印信息
    console.log("Server has started."); 
}

exports.start=start;