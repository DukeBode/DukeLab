// 读取文件

function initiate(){
    databox=document.getElementById('databox');
    var button=document.getElementById('fbutton');
    button.addEventListener('click',create,false);
    window.webkitRequestFileSystem(window.PERSISTENT,50*1024*1024,)
}
// function initiate(){
//     databox=document.getElementById('databox');
//     var myfiles=document.getElementById('myfiles');
//     myfiles.addEventListener('change', process, false);
// }

// function process(e){
//     let files=e.target.files;
//     databox.innerHTML='';
//     let file= files[0];
//     let reader=new FileReader();
//     reader.onload=show;
//     reader.readAsText(file);
// }

// function show(e){
//     let result = e.target.result;
//     databox.innerHTML=result;
// }

// window.addEventListener('load', initiate,false)