function start() {
    console.log("Request handler 'start' was called."); 
} 
 
function upload() {
    console.log("Request handler 'upload' was called."); 
} 
//模块导出
exports.start = start; 
exports.upload = upload; 