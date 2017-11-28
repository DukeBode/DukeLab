var empty=9;
var time=0;
var set_timer;
var pause=false;
var random_num=parseInt(Math.random()*10+10);
var direct=new Array(
    [0],
    [2,4],
    [1,3,5],
    [2,6],
    [1,5,7],
    [2,4,6,8],
    [3,5,9],
    [4,8],
    [5,7,9],
    [6,8]
);
var posXY=new Array(
    [0],
    [0,0],
    [150,0],
    [300,0],
    [0,150],
    [150,150],
    [300,150],
    [0,300],
    [150,300],
    [300,300]
);
var num=[0,2,3,2,3,4,3,2,3,2];
var d=[0,1,2,3,4,5,6,7,8,9];;
function layout() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if(h>w){
        mobile(w);
    }else{
        computer(h);
    }
}
function mobile(w){
    document.getElementsByTagName("body")[1].style.width=w+"px";
    document.getElementById("game").style.height=w+"px";
}
function computer(h){
    // alert(h);
    document.getElementById("container").style.width=h+"px";
    document.getElementById("game").style.height=h+"px";
    show(h)
    // document.getElementsByTagName("body")[0].style.width=0.6*h+"px";
}

function show(W){
    var x=600;
    var y=100;
    // document.getElementById("game").getElementsByTagName("div").style.width=W/3+"px";
    // document.getElementById("game").getElementsByTagName("div").style.height=W/3+"px";*W/450-y
    for(var id_i=1 ;id_i<9;id_i++){
        document.getElementById("d"+id_i).style.backgroundImage="url(img/1.jpg)";
        document.getElementById("d"+id_i).style.backgroundPositionX=-posXY[id_i][0]-x+"px";
        document.getElementById("d"+id_i).style.backgroundPositionY=-posXY[id_i][1]+"px";
        document.getElementById("d"+id_i).style.margin.left=posXY[id_i][0]+"px";
        document.getElementById("d"+id_i).style.margin.top=posXY[id_i][1]+"px";
    }
}
function move(key){
    for(var i=0;i<num[d[key]]&&pause;i++){
        if(direct[d[key]][i]==empty){
            document.getElementById("d"+key).style.left=posXY[empty][0]+"px";
            document.getElementById("d"+key).style.top=posXY[empty][1]+"px";
            [empty,d[key]]=[d[key],empty];
            if(d[key]==key)finish();
            break;
        }
    } 
}
function finish(){
    pause=false;
    for(var i=1; i<9; i++){
        if( d[i] != i){
            pause=true;
            return;
        }
    }
    alert("恭喜你，完成拼图");
    document.getElementById("start").innerHTML="下一关";
    random_num=parseInt(Math.random()*10+10);
    return;
}
function random_d(){
    var key=[0,1,2,3,4,5,6,7,8,9];
    for(i=random_num;i>0;i--){
        var to=parseInt(Math.random()*num[empty]);
        var KEY=direct[empty][to];
        [key[KEY],key[empty]]=[key[empty],key[KEY]];
        [d[key[empty]],d[key[KEY]]]=[empty,KEY];
        empty=KEY;
    }
    for(var id_i=1;id_i<9;id_i++){
        document.getElementById("d"+id_i).style.margin.left=posXY[d[id_i]][0]+"px";
        document.getElementById("d"+id_i).style.top=posXY[d[id_i]][1]+"px";
    }
    random_num=0;
}
function start(){
    if(pause){
        pause=false;
        document.getElementById("start").innerHTML="继续";
        clearInterval(set_timer)
    }else{
        if(random_num!=0)random_d();
        pause=true;
        document.getElementById("start").innerHTML="暂停";
        set_timer=setInterval(timer,1000);
    }
}
function quit(){
    location.reload();
}
function timer(){
    if(pause){
        time++;
        var min = parseInt(time/60);
        var sec = time%60;
        document.getElementById("timer").innerHTML=min+"分"+sec+"秒";
    }
}

window.onload = function () {
    layout();
    show();
}