import request from 'request';
 
// var url='http://www.gsut.edu.cn/';
//通过GET请求来获取网站内容
// request(url,function(error,response,body){
//     if(!error && response.statusCode == 200){
//         //输出网页内容
//         console.log(body);
//     }
// })

//如需要指定请求头
request({
    //指定url，请求方法，请求头
    url:'http://www.yiban.cn/forum/article/listAjax',
    form:{
        'channel_id':55461, 
        'group_id':0, 
        'my':0, 
        'need_notice':0, 
        'orderby':'updateTime', 
        'page':1, 
        'puid':5189448,
        'Sections_id':-1, 
        'size':4
    },
    method:'POST'
    // headers:{
    //     //指定 Accept-Language、Cookie
    //     'Accept-Language':'zh-cn,zh;q=0.5',
    //     'Cookie':'__utma=4454.11221.455353.21.143;'
    // }
},function(error,response,body){
    if(!error && response.statusCode == 200){
        jsonOBJ = JSON.parse(body);
        console.log(jsonOBJ.data)
    }
})
