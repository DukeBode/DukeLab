/* jquery.nicescroll 3.0.0 InuYaksa*2012 MIT http://areaaperta.com/nicescroll */(function(d){var s=false,w=false,B=5E3,C=2E3,D=function(){var d=document.getElementsByTagName("script"),d=d[d.length-1].src.split("?")[0];return d.split("/").length>0?d.split("/").slice(0,-1).join("/")+"/":""}(),q=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||false,r=window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||
window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||false,x=false,E=function(){if(x)return x;var d=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isie="all"in document&&"attachEvent"in d&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in d.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in
document)||document.documentMode==7);c.isie8=c.isie&&"documentMode"in document&&document.documentMode==8;c.isie9=c.isie&&"performance"in window&&document.documentMode>=9;c.isie10=c.isie&&"performance"in window&&document.documentMode>=10;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);if(c.isie9mobile)c.isie9=false;c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in d.style;c.iswebkit="WebkitAppearance"in d.style;c.ischrome="chrome"in window;
c.ischrome22=c.ischrome&&c.haspointerlock;c.cantouch="ontouchstart"in document.documentElement;c.hasmstouch=window.navigator.msPointerEnabled||false;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=false;c.hastransform=false;c.hastranslate3d=false;c.transitionstyle=false;c.hastransition=false;c.transitionend=false;for(var h=["transform","msTransform",
"webkitTransform","MozTransform","OTransform"],i=0;i<h.length;i++)if(typeof d.style[h[i]]!="undefined"){c.trstyle=h[i];break}c.hastransform=c.trstyle!=false;if(c.hastransform)d.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(d.style[c.trstyle]);c.transitionstyle=false;c.prefixstyle="";c.transitionend=false;for(var h="transition,webkitTransition,MozTransition,OTransition,OTransition,msTransition,KhtmlTransition".split(","),b=",-webkit-,-moz-,-o-,-o,-ms-,-khtml-".split(","),
o="transitionend,webkitTransitionEnd,transitionend,otransitionend,oTransitionEnd,msTransitionEnd,KhtmlTransitionEnd".split(","),i=0;i<h.length;i++)if(h[i]in d.style){c.transitionstyle=h[i];c.prefixstyle=b[i];c.transitionend=o[i];break}c.hastransition=c.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)h=[];for(i=0;i<h.length;i++)if(b=h[i],d.style.cursor=b,d.style.cursor==b){h=b;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=
h;c.hasmousecapture="setCapture"in d;return x=c},F=function(j,c){function h(f,c,g){c=f.css(c);f=parseFloat(c);return isNaN(f)?(f=p[c]||0,g=f==3?g?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&f&&(f+=1),g?f:0):f}function i(f,c){var g=0,e=0;if("wheelDeltaY"in f)g=Math.floor(f.wheelDeltaX/2),e=Math.floor(f.wheelDeltaY/2);else{var d=f.detail?f.detail*-1:f.wheelDelta/40;d&&(c?g=Math.floor(d*b.opt.mousescrollstep):e=Math.floor(d*b.opt.mousescrollstep))}g&&(b.scrollmom&&
b.scrollmom.stop(),b.lastdeltax+=g,b.synched("mousewheelx",function(){var f=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(f)}));e&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltay+=e,b.synched("mousewheely",function(){var f=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(f)}))}var b=this;this.version="3.0.0";this.name="nicescroll";this.me=c;this.opt={doc:d("body"),win:false,zindex:9E3,cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",
cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:false,hwacceleration:true,usetransition:true,boxzoom:false,dblclickzoom:true,gesturezoom:true,grabcursorenabled:true,autohidemode:true,background:"",iframeautoresize:true,cursorminheight:32,preservenativescrolling:true,railoffset:false,bouncescroll:true,spacebarenabled:true,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:true,horizrailenabled:true,railalign:"right",railvalign:"bottom",enabletranslate3d:true,enablemousewheel:true,
enablekeyboard:true,smoothscroll:true,sensitiverail:true};this.opt.snapbackspeed=80;if(j)for(var o in b.opt)typeof j[o]!="undefined"&&(b.opt[o]=j[o]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=b.opt.win!==false;this.win=b.opt.win||(this.ispage?d(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?d(window):this.win;this.body=d("body");this.iframe=this.isfixed=false;
this.isiframe=this.doc[0].nodeName=="IFRAME"&&this.win[0].nodeName=="IFRAME";this.istextarea=this.win[0].nodeName=="TEXTAREA";this.forcescreen=false;this.canshowonmouseevent=b.opt.autohidemode!="scroll";this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=false;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=
0;this.observer=this.scrollmom=this.scrollrunning=false;do this.id="ascrail"+C++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.cursorfreezed=this.cursor=this.rail=false;this.visibility=true;this.hidden=this.locked=false;this.cursoractive=true;this.nativescrollingarea=false;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;var e=this.detected=E();this.ishwscroll=(this.canhwscroll=e.hastransform&&
b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=false;if(e.cantouch&&e.ischrome&&!e.isios&&!e.isandroid)this.istouchcapable=true,e.cantouch=false;if(e.cantouch&&e.ismozilla&&!e.isios)this.istouchcapable=true,e.cantouch=false;this.delayed=function(f,c,g,e){var d=b.delaylist[f],h=(new Date).getTime();if(!e&&d&&d.tt)return false;d&&d.tt&&clearTimeout(d.tt);if(d&&d.last+g>h&&!d.tt)b.delaylist[f]={last:h+g,tt:setTimeout(function(){b.delaylist[f].tt=0;c.call()},g)};else if(!d||!d.tt)b.delaylist[f]=
{last:h,tt:0},setTimeout(function(){c.call()},0)};this.synched=function(f,c){b.synclist[f]=c;(function(){if(!b.onsync)q(function(){b.onsync=false;for(f in b.synclist){var c=b.synclist[f];c&&c.call(b);b.synclist[f]=false}}),b.onsync=true})();return f};this.unsynched=function(f){b.synclist[f]&&(b.synclist[f]=false)};this.css=function(f,c){for(var g in c)b.saved.css.push([f,g,f.css(g)]),f.css(g,c[g])};this.scrollTop=function(f){return typeof f=="undefined"?b.getScrollTop():b.setScrollTop(f)};this.scrollLeft=
function(f){return typeof f=="undefined"?b.getScrollLeft():b.setScrollLeft(f)};BezierClass=function(b,c,g,e,d,h,i){this.st=b;this.ed=c;this.spd=g;this.p1=e||0;this.p2=d||1;this.p3=h||0;this.p4=i||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return b<0?
this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};e.hastranslate3d&&e.isios&&this.doc.css("-webkit-backface-visibility","hidden");var n=function(){var f=b.doc.css(e.trstyle);return f&&f.substr(0,6)=="matrix"?f.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):false};this.getScrollTop=function(f){if(!f){if(f=
n())return f.length==16?-f[13]:-f[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(f){if(!f){if(f=n())return f.length==16?-f[12]:-f[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");c.initUIEvent("scroll",false,true,window,1);b.dispatchEvent(c)}:document.fireEvent?function(b){var c=
document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=true}:function(){};e.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(f,c){b.doc.translate.y=f;b.doc.translate.ty=f*-1+"px";b.doc.css(e.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(f,c){b.doc.translate.x=f;b.doc.translate.tx=f*-1+"px";b.doc.css(e.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||
b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(f,c){b.doc.translate.y=f;b.doc.translate.ty=f*-1+"px";b.doc.css(e.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(f,c){b.doc.translate.x=f;b.doc.translate.tx=f*-1+"px";b.doc.css(e.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=function(){return b.docscroll.scrollTop()},this.setScrollTop=
function(f){return b.docscroll.scrollTop(f)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(f){return b.docscroll.scrollLeft(f)};this.getTarget=function(b){return!b?false:b.target?b.target:b.srcElement?b.srcElement:false};this.hasParent=function(b,c){if(!b)return false;for(var g=b.target||b.srcElement||b||false;g&&g.id!=c;)g=g.parentNode||false;return g!==false};var p={thin:1,medium:3,thick:5};this.updateScrollBar=function(f){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),
b.railh&&b.railh.css({width:b.win.innerWidth()});else{var c=b.isfixed?{top:parseFloat(b.win.css("top")),left:parseFloat(b.win.css("left"))}:b.win.offset(),g=c.top,e=c.left;g+=h(b.win,"border-top-width",true);b.win.outerWidth();b.win.innerWidth();e+=b.rail.align?b.win.outerWidth()-h(b.win,"border-right-width")-b.rail.width:h(b.win,"border-left-width");var d=b.opt.railoffset;d&&(d.top&&(g+=d.top),b.rail.align&&d.left&&(e+=d.left));b.locked||b.rail.css({top:g,left:e,height:f?f.h:b.win.innerHeight()});
b.zoom&&b.zoom.css({top:g+1,left:b.rail.align==1?e-20:e+b.rail.width+4});if(b.railh&&!b.locked)g=c.top,e=c.left,f=b.railh.align?g+h(b.win,"border-top-width",true)+b.win.innerHeight()-b.railh.height:g+h(b.win,"border-top-width",true),e+=h(b.win,"border-left-width"),b.railh.css({top:f,left:e,width:b.railh.width})}};this.doRailClick=function(f,c,g){var e;!(b.rail.drag&&b.rail.drag.pt!=1)&&!b.locked&&!b.rail.drag&&(b.cancelScroll(),b.cancelEvent(f),c?(c=g?b.doScrollLeft:b.doScrollTop,e=g?(f.pageX-b.railh.offset().left-
b.cursorwidth/2)*b.scrollratio.x:(f.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,c(e)):(c=g?b.doScrollLeftBy:b.doScrollBy,e=g?b.scroll.x:b.scroll.y,f=g?f.pageX-b.railh.offset().left:f.pageY-b.rail.offset().top,g=g?b.view.w:b.view.h,e>=f?c(g):c(-g)))};b.hasanimationframe=q;b.hascancelanimationframe=r;b.hasanimationframe?b.hascancelanimationframe||(r=function(){b.cancelAnimationFrame=true}):(q=function(b){return setTimeout(b,16)},r=clearInterval);this.init=function(){b.saved.css=[];if(e.isie7mobile)return true;
e.hasmstouch&&b.css(b.ispage?d("html"):b.win,{"-ms-touch-action":"none"});if(!b.ispage||!e.cantouch&&!e.isieold&&!e.isie9mobile){var f=b.docscroll;b.ispage&&(f=b.haswrapper?b.win:b.doc);e.isie9mobile||b.css(f,{"overflow-y":"hidden"});b.ispage&&e.isie7&&(b.doc[0].nodeName=="BODY"?b.css(d("html"),{"overflow-y":"hidden"}):b.doc[0].nodeName=="HTML"&&b.css(d("body"),{"overflow-y":"hidden"}));e.isios&&!b.ispage&&!b.haswrapper&&b.css(d("body"),{"-webkit-overflow-scrolling":"touch"});var c=d(document.createElement("div"));
c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var g=d(document.createElement("div"));g.attr("id",b.id);var h,i,j=["left","right"],y;for(y in j)i=j[y],(h=b.opt.railpadding[i])?
g.css("padding-"+i,h+"px"):b.opt.railpadding[i]=0;g.append(c);g.width=Math.max(parseFloat(b.opt.cursorwidth),c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;g.css({width:g.width+"px",zIndex:b.ispage?b.opt.zindex:b.opt.zindex+2,background:b.opt.background});g.visibility=true;g.scrollable=true;g.align=b.opt.railalign=="left"?0:1;b.rail=g;c=b.rail.drag=false;if(b.opt.boxzoom&&!b.ispage&&!e.isieold&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=d(c),b.zoom.css({cursor:"pointer",
"z-index":b.opt.zindex,backgroundImage:"url("+D+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&b.bind(b.win,"dblclick",b.doZoom),e.cantouch&&b.opt.gesturezoom))b.ongesturezoom=function(c){c.scale>1.5&&b.doZoomIn(c);c.scale<0.8&&b.doZoomOut(c);return b.cancelEvent(c)},b.bind(b.win,"gestureend",b.ongesturezoom);b.railh=false;if(b.opt.horizrailenabled){b.css(f,{"overflow-x":"hidden"});c=d(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,
width:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var k=d(document.createElement("div"));k.attr("id",b.id+"-hr");k.height=1+Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());k.css({height:k.height+"px",zIndex:b.ispage?b.opt.zindex:b.opt.zindex+
2,background:b.opt.background});k.append(c);k.visibility=true;k.scrollable=true;k.align=b.opt.railvalign=="top"?0:1;b.railh=k;b.railh.drag=false}b.ispage?(g.css({position:"fixed",top:"0px",height:"100%"}),g.align?g.css({right:"0px"}):g.css({left:"0px"}),b.body.append(g),b.railh&&(k.css({position:"fixed",left:"0px",width:"100%"}),k.align?k.css({bottom:"0px"}):k.css({top:"0px"}),b.body.append(k))):(b.ishwscroll?(b.win.css("position")=="static"&&b.css(b.win,{position:"relative"}),f=b.win[0].nodeName==
"HTML"?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":g.width+4}),f.append(b.zoom)),g.css({position:"absolute",top:0}),g.align?g.css({right:0}):g.css({left:0}),f.append(g),k&&(k.css({position:"absolute",left:0,bottom:0}),k.align?k.css({bottom:0}):k.css({top:0}),f.append(k))):(b.isfixed=b.win.css("position")=="fixed",f=b.isfixed?"fixed":"absolute",g.css({position:f}),b.zoom&&b.zoom.css({position:f}),b.updateScrollBar(),b.body.append(g),b.zoom&&b.body.append(b.zoom),
b.railh&&(k.css({position:f}),b.body.append(k))),e.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),e.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),e.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));if(b.opt.autohidemode===false)b.autohidedom=false;else if(b.opt.autohidemode===true){if(b.autohidedom=d().add(b.rail),b.railh)b.autohidedom=b.autohidedom.add(b.railh)}else if(b.opt.autohidemode=="scroll"){if(b.autohidedom=d().add(b.rail),
b.railh)b.autohidedom=b.autohidedom.add(b.railh)}else if(b.opt.autohidemode=="cursor"){if(b.autohidedom=d().add(b.cursor),b.railh)b.autohidedom=b.autohidedom.add(b.railh.cursor)}else if(b.opt.autohidemode=="hidden")b.autohidedom=false,b.hide(),b.locked=false;if(e.isie9mobile)b.scrollmom=new z(b),b.onmangotouch=function(){var c=b.getScrollTop(),f=b.getScrollLeft();if(c==b.scrollmom.lastscrolly&&f==b.scrollmom.lastscrollx)return true;var g=c-b.mangotouch.sy,e=f-b.mangotouch.sx;if(Math.round(Math.sqrt(Math.pow(e,
2)+Math.pow(g,2)))!=0){var l=g<0?-1:1,d=e<0?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);if(h-b.mangotouch.tm>80||b.mangotouch.dry!=l||b.mangotouch.drx!=d)b.scrollmom.stop(),b.scrollmom.reset(f,c),b.mangotouch.sy=c,b.mangotouch.ly=c,b.mangotouch.sx=f,b.mangotouch.lx=f,b.mangotouch.dry=l,b.mangotouch.drx=d,b.mangotouch.tm=h;else if(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-e,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-c),Math.abs(b.mangotouch.lx-
f)),b.mangotouch.ly=c,b.mangotouch.lx=f,g>2)b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=false;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)}},g=b.getScrollTop(),k=b.getScrollLeft(),b.mangotouch={sy:g,ly:g,dry:0,sx:k,lx:k,drx:0,lazy:false,tm:0},b.bind(b.docscroll,"scroll",b.onmangotouch);else{if(e.cantouch||b.istouchcapable||b.opt.touchbehavior||e.hasmstouch){b.scrollmom=new z(b);b.ontouchstart=function(c){if(c.pointerType&&c.pointerType!=2)return false;
if(!b.locked){if(e.hasmstouch)for(var f=c.target?c.target:false;f;){var g=d(f).getNiceScroll();if(g.length>0&&g[0].me==b.me)break;if(g.length>0)return false;if(f.nodeName=="DIV"&&f.id==b.id)break;f=f.parentNode?f.parentNode:false}b.cancelScroll();if((f=b.getTarget(c))&&/INPUT/i.test(f.nodeName)&&/range/i.test(f.type))return b.stopPropagation(c);if(b.forcescreen)g=c,c={original:c.original?c.original:c},c.clientX=g.screenX,c.clientY=g.screenY;b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,sy:b.scroll.y,
st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2};b.opt.touchbehavior&&b.isiframe&&e.isie&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=false;b.lastmouseup=false;b.scrollmom.reset(c.clientX,c.clientY);if(!e.cantouch&&!this.istouchcapable&&!e.hasmstouch){if(!f||!/INPUT|SELECT|TEXTAREA/i.test(f.nodeName))return!b.ispage&&e.hasmousecapture&&f.setCapture(),b.cancelEvent(c);if(/SUBMIT|CANCEL|BUTTON/i.test(d(f).attr("type")))pc={tg:f,click:false},b.preventclick=pc}}};b.ontouchend=
function(c){if(c.pointerType&&c.pointerType!=2)return false;if(b.rail.drag&&b.rail.drag.pt==2&&(b.scrollmom.doMomentum(),b.rail.drag=false,b.hasmoving&&(b.hasmoving=false,b.lastmouseup=true,b.hideCursor(),e.hasmousecapture&&document.releaseCapture(),!e.cantouch)))return b.cancelEvent(c)};var o=b.opt.touchbehavior&&b.isiframe&&!e.hasmousecapture;b.ontouchmove=function(c,f){if(c.pointerType&&c.pointerType!=2)return false;if(b.rail.drag&&b.rail.drag.pt==2){if(e.cantouch&&typeof c.original=="undefined")return true;
b.hasmoving=true;if(b.preventclick&&!b.preventclick.click)b.preventclick.click=b.preventclick.tg.onclick||false,b.preventclick.tg.onclick=b.onpreventclick;if(b.forcescreen){var g=c,c={original:c.original?c.original:c};c.clientX=g.screenX;c.clientY=g.screenY}g=ofy=0;if(o&&!f){var l=b.win.position(),g=-l.left;ofy=-l.top}var d=c.clientY+ofy,h=b.rail.drag.st-(d-b.rail.drag.y);if(b.ishwscroll&&b.opt.bouncescroll)h<0?h=Math.round(h/2):h>b.page.maxh&&(h=b.page.maxh+Math.round((h-b.page.maxh)/2));else if(h<
0&&(d=h=0),h>b.page.maxh)h=b.page.maxh,d=0;var i=c.clientX+g;if(b.railh&&b.railh.scrollable){var m=b.rail.drag.sl-(i-b.rail.drag.x);if(b.ishwscroll&&b.opt.bouncescroll)m<0?m=Math.round(m/2):m>b.page.maxw&&(m=b.page.maxw+Math.round((m-b.page.maxw)/2));else if(m<0&&(i=m=0),m>b.page.maxw)m=b.page.maxw,i=0}b.synched("touchmove",function(){b.rail.drag&&b.rail.drag.pt==2&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(h),b.scrollmom.update(i,d),b.railh&&b.railh.scrollable?
(b.setScrollLeft(m),b.showCursor(h,m)):b.showCursor(h),e.isie10&&document.selection.clear())});return b.cancelEvent(c)}}}e.cantouch||b.opt.touchbehavior?(b.onpreventclick=function(c){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=false,b.cancelEvent(c)},b.onmousedown=b.ontouchstart,b.onmouseup=b.ontouchend,b.onclick=e.isios?false:function(c){return b.lastmouseup?(b.lastmouseup=false,b.cancelEvent(c)):true},b.onmousemove=b.ontouchmove,e.cursorgrabvalue&&(b.css(b.ispage?
b.doc:b.win,{cursor:e.cursorgrabvalue}),b.css(b.rail,{cursor:e.cursorgrabvalue}))):(b.onmousedown=function(c,f){if(!(b.rail.drag&&b.rail.drag.pt!=1)){if(b.locked)return b.cancelEvent(c);b.cancelScroll();b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,sy:b.scroll.y,pt:1,hr:!!f};var g=b.getTarget(c);!b.ispage&&e.hasmousecapture&&g.setCapture();if(b.isiframe&&!e.hasmousecapture)b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"});return b.cancelEvent(c)}},b.onmouseup=
function(c){if(b.rail.drag&&(e.hasmousecapture&&document.releaseCapture(),b.isiframe&&!e.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),b.rail.drag.pt==1))return b.rail.drag=false,b.cancelEvent(c)},b.onmousemove=function(c){if(b.rail.drag){if(b.rail.drag.pt==1){if(e.ischrome&&c.which==0)return b.onmouseup(c);b.cursorfreezed=true;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(c.clientX-b.rail.drag.x);if(b.scroll.x<0)b.scroll.x=0;var f=b.scrollvaluemaxw;if(b.scroll.x>f)b.scroll.x=
f}else{b.scroll.y=b.rail.drag.sy+(c.clientY-b.rail.drag.y);if(b.scroll.y<0)b.scroll.y=0;f=b.scrollvaluemax;if(b.scroll.y>f)b.scroll.y=f}b.synched("mousemove",function(){b.rail.drag&&b.rail.drag.pt==1&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*b.scrollratio.x)):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y)))});return b.cancelEvent(c)}}else b.checkarea=true});(e.cantouch||b.opt.touchbehavior)&&b.bind(b.win,"mousedown",b.onmousedown);e.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),
b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);
b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(c){b.onmousedown(c,true)}),b.bind(b.cursorh,"mouseup",function(c){if(!(b.rail.drag&&b.rail.drag.pt==2))return b.rail.drag=false,b.hasmoving=false,b.hideCursor(),e.hasmousecapture&&document.releaseCapture(),b.cancelEvent(c)}));b.bind(document,"mouseup",b.onmouseup);e.hasmousecapture&&b.bind(b.win,"mouseup",b.onmouseup);b.bind(document,"mousemove",b.onmousemove);b.onclick&&b.bind(document,"click",b.onclick);!e.cantouch&&
!b.opt.touchbehavior&&(b.rail.mouseenter(function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=true}),b.rail.mouseleave(function(){b.rail.active=false;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.rail.click(function(c){b.doRailClick(c,false,false)}),b.rail.dblclick(function(c){b.doRailClick(c,true,false)}),b.cursor.click(function(c){b.cancelEvent(c)}),b.cursor.dblclick(function(c){b.cancelEvent(c)})),b.railh&&(b.railh.mouseenter(function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=
true}),b.railh.mouseleave(function(){b.rail.active=false;b.rail.drag||b.hideCursor()})),b.zoom&&(b.zoom.mouseenter(function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=true}),b.zoom.mouseleave(function(){b.rail.active=false;b.rail.drag||b.hideCursor()})));b.opt.enablemousewheel&&(b.isiframe||b.bind(e.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&!e.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName)&&
(b.win.attr("tabindex")||b.win.attr({tabindex:B++}),b.win.focus(function(c){s=b.getTarget(c).id||true;b.hasfocus=true;b.canshowonmouseevent&&b.noticeCursor()}),b.win.blur(function(){s=false;b.hasfocus=false}),b.win.mouseenter(function(c){w=b.getTarget(c).id||true;b.hasmousefocus=true;b.canshowonmouseevent&&b.noticeCursor()}),b.win.mouseleave(function(){w=false;b.hasmousefocus=false}))}b.onkeypress=function(c){if(b.locked&&b.page.maxh==0)return true;var c=c?c:window.e,f=b.getTarget(c);if(f&&/INPUT|TEXTAREA|SELECT|OPTION/.test(f.nodeName)&&
(!f.getAttribute("type")&&!f.type||!/submit|button|cancel/i.tp))return true;if(b.hasfocus||b.hasmousefocus&&!s||b.ispage&&!s&&!w){var f=c.keyCode,g=c.ctrlKey||false;if(b.locked&&f!=27)return b.cancelEvent(c);var e=false;switch(f){case 38:case 63233:b.doScrollBy(72);e=true;break;case 40:case 63235:b.doScrollBy(-72);e=true;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),e=true);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),e=true);
break;case 33:case 63276:b.doScrollBy(b.view.h);e=true;break;case 34:case 63277:b.doScrollBy(-b.view.h);e=true;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);e=true;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);e=true;break;case 32:b.opt.spacebarenabled&&(b.doScrollBy(-b.view.h),e=true);break;case 27:b.zoomactive&&(b.doZoom(),e=true)}if(e)return b.cancelEvent(c)}};b.opt.enablekeyboard&&b.bind(document,e.isopera&&!e.isopera12?
"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.resize);b.bind(window,"orientationchange",b.resize);b.bind(window,"load",b.resize);if(e.ischrome&&!b.ispage&&!b.haswrapper){var n=b.win.attr("style"),g=parseFloat(b.win.css("width"))+1;b.win.css("width",g);b.synched("chromefix",function(){b.win.attr("style",n)})}b.onAttributeChange=function(){b.lazyResize()};if(!b.ispage&&!b.haswrapper)"WebKitMutationObserver"in window?(b.observer=new WebKitMutationObserver(function(c){c.forEach(b.onAttributeChange)}),
b.observer.observe(b.win[0],{attributes:true,subtree:false})):(b.bind(b.win,e.isie&&!e.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),e.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.resize);b.resize()}if(this.doc[0].nodeName=="IFRAME"){var A=function(){b.iframexd=false;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(f){b.iframexd=
true,c=false}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),true;b.forcescreen=true;if(b.isiframe)b.iframe={doc:d(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=d(b.iframe.body);if(!e.isios&&b.opt.iframeautoresize&&!b.isiframe){b.win.scrollTop(0);
b.doc.height("");var g=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight);b.doc.height(g)}b.resize();e.isie7&&b.css(d(b.iframe.html),{"overflow-y":"hidden"});b.css(d(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,e.isopera?"keypress":"keydown",b.onkeypress);if(e.cantouch||b.opt.touchbehavior)b.bind(c,
"mousedown",b.onmousedown),b.bind(c,"mousemove",function(c){b.onmousemove(c,true)}),e.cursorgrabvalue&&b.css(d(c.body),{cursor:e.cursorgrabvalue});b.bind(c,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&this.doc[0].readyState=="complete"&&setTimeout(function(){A.call(b.doc[0],false)},500);b.bind(this.doc,"load",A)}};this.showCursor=function(c,e){if(b.cursortimeout)clearTimeout(b.cursortimeout),
b.cursortimeout=0;if(b.rail){if(b.autohidedom)b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),b.cursoractive=true;if(typeof c!="undefined"&&c!==false)b.scroll.y=Math.round(c*1/b.scrollratio.y);if(typeof e!="undefined")b.scroll.x=Math.round(e*1/b.scrollratio.x);b.cursor.css({height:b.cursorheight,top:b.scroll.y});if(b.cursorh)!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=
true;b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=function(c){if(!b.cursortimeout&&b.rail&&b.autohidedom)b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=false;b.cursortimeout=0},c||400)};this.noticeCursor=function(c,e,g){b.showCursor(e,g);b.rail.active||b.hideCursor(c)};this.getContentSize=b.ispage?
function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(c,e){if(!b.win)return false;
if(!b.haswrapper&&!b.ispage)if(b.win.css("display")=="none")return b.visibility&&b.hideRail().hideRailHr(),false;else!b.hidden&&!b.visibility&&b.showRail().showRailHr();var g=b.page.maxh,d=b.page.maxw,h=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=e?e:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==g&&b.page.maxw==d&&b.view.w==h)if(b.ispage)return b;
else{g=b.win.offset();if(b.lastposition&&(d=b.lastposition,d.top==g.top&&d.left==g.left))return b;b.lastposition=g}b.page.maxh==0?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=false):b.rail.scrollable=true;b.page.maxw==0?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=false):b.railh.scrollable=true;b.locked=b.page.maxh==0&&b.page.maxw==0;if(b.locked)return b.ispage||
b.updateScrollBar(b.view),false;!b.hidden&&!b.visibility?b.showRail().showRailHr():!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&b.win.css("resize")&&b.win.css("resize")!="none"&&(b.view.h-=20);b.ispage||b.updateScrollBar(b.view);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=Math.max(b.opt.cursorminheight,
b.cursorwidth);b.scrollvaluemax=b.view.h-b.cursorheight-b.cursor.hborder;if(b.railh)b.railh.width=b.page.maxh>0?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder;b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScroll(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&
b.getScrollTop()==0&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=function(){b.delayed("resize",b.onResize,30);return b};this.lazyResize=function(){b.delayed("resize",b.resize,250)};this._bind=function(c,e,g,d){b.events.push({e:c,n:e,f:g,b:d});c.addEventListener?c.addEventListener(e,g,d||false):c.attachEvent?c.attachEvent("on"+e,g):c["on"+e]=g};this.bind=function(c,d,g,h){var i="jquery"in c?c[0]:c;i.addEventListener?(e.cantouch&&/mouseup|mousedown|mousemove/.test(d)&&
b._bind(i,d=="mousedown"?"touchstart":d=="mouseup"?"touchend":"touchmove",function(b){if(b.touches){if(b.touches.length<2){var c=b.touches.length?b.touches[0]:b;c.original=b;g.call(this,c)}}else if(b.changedTouches)c=b.changedTouches[0],c.original=b,g.call(this,c)},h||false),b._bind(i,d,g,h||false),d=="mousewheel"&&b._bind(i,"DOMMouseScroll",g,h||false),e.cantouch&&d=="mouseup"&&b._bind(i,"touchcancel",g,h||false)):b._bind(i,d,function(c){if((c=c||window.event||false)&&c.srcElement)c.target=c.srcElement;
return g.call(i,c)===false||h===false?b.cancelEvent(c):true})};this._unbind=function(b,c,g,e){b.removeEventListener?b.removeEventListener(c,g,e):b.detachEvent?b.detachEvent("on"+c,g):b["on"+c]=false};this.unbindAll=function(){for(var c=0;c<b.events.length;c++){var e=b.events[c];b._unbind(e.e,e.n,e.f,e.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||false;if(!b)return false;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&
b.preventManipulation();b.cancelBubble=true;b.cancel=true;return b.returnValue=false};this.stopPropagation=function(b){b=b.original?b.original:b?b:window.event||false;if(!b)return false;if(b.stopPropagation)return b.stopPropagation();if(b.cancelBubble)b.cancelBubble=true;return false};this.showRail=function(){if(b.page.maxh!=0&&(b.ispage||b.win.css("display")!="none"))b.visibility=true,b.rail.visibility=true,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(b.page.maxw!=
0&&(b.ispage||b.win.css("display")!="none"))b.railh.visibility=true,b.railh.css("display","block");return b};this.hideRail=function(){b.visibility=false;b.rail.visibility=false;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=false;b.railh.css("display","none");return b};this.show=function(){b.hidden=false;b.locked=false;return b.showRail().showRailHr()};this.hide=function(){b.hidden=true;b.locked=true;return b.hideRail().hideRailHr()};this.remove=
function(){b.doZoomOut();b.unbindAll();b.observer!==false&&b.observer.disconnect();b.events=[];if(b.cursor)b.cursor.remove(),b.cursor=null;if(b.cursorh)b.cursorh.remove(),b.cursorh=null;if(b.rail)b.rail.remove(),b.rail=null;if(b.railh)b.railh.remove(),b.railh=null;if(b.zoom)b.zoom.remove(),b.zoom=null;for(var c=0;c<b.saved.css.length;c++){var e=b.saved.css[c];e[0].css(e[1],typeof e[2]=="undefined"?"":e[2])}b.saved=false;b.me.data("__nicescroll","");b.me=null;b.doc=null;b.docscroll=null;b.win=null;
return b};this.scrollstart=function(c){this.onscrollstart=c;return b};this.scrollend=function(c){this.onscrollend=c;return b};this.scrollcancel=function(c){this.onscrollcancel=c;return b};this.zoomin=function(c){this.onzoomin=c;return b};this.zoomout=function(c){this.onzoomout=c;return b};this.isScrollable=function(b){for(b=b.target?b.target:b;b&&b.nodeType==1&&!/BODY|HTML/.test(b.nodeName);){var c=d(b);if(/scroll|auto/.test(c.css("overflowY")||c.css("overflowX")||c.css("overflow")||""))return b.clientHeight!=
b.scrollHeight;b=b.parentNode?b.parentNode:false}return false};this.onmousewheel=function(c){if(b.locked)return true;if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(c):true;if(b.opt.preservenativescrolling&&b.checkarea)b.checkarea=false,b.nativescrollingarea=b.isScrollable(c);if(b.nativescrollingarea)return true;if(b.locked)return b.cancelEvent(c);if(b.rail.drag)return b.cancelEvent(c);i(c,false);return b.cancelEvent(c)};this.onmousewheelhr=function(c){if(b.locked||!b.railh.scrollable)return true;
if(b.opt.preservenativescrolling&&b.checkarea)b.checkarea=false,b.nativescrollingarea=b.isScrollable(c);if(b.nativescrollingarea)return true;if(b.locked)return b.cancelEvent(c);if(b.rail.drag)return b.cancelEvent(c);i(c,true);return b.cancelEvent(c)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=false;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var e=Math.round(b.opt.scrollspeed*
10),c=Math.min(e,Math.round(c/20*b.opt.scrollspeed));return c>20?c:0};b.opt.smoothscroll?b.ishwscroll&&e.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,d){var g=d?c>20?c:0:b.getTransitionSpeed(c),h=g?e.prefixstyle+"transform "+g+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(e.transitionstyle,h);return g},this.doScrollLeft=function(c,e){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,e)},this.doScrollTop=
function(c,e){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,e)},this.doScrollPos=function(c,d,g){var h=b.getScrollTop(),i=b.getScrollLeft();((b.newscrolly-h)*(d-h)<0||(b.newscrollx-i)*(c-i)<0)&&b.cancelScroll();b.newscrolly=d;b.newscrollx=c;b.newscrollspeed=g||false;if(b.timer)return false;b.timer=setTimeout(function(){var g=b.getScrollTop(),h=b.getScrollLeft(),i,j;i=c-h;j=d-g;i=Math.round(Math.sqrt(Math.pow(i,2)+Math.pow(j,2)));i=b.prepareTransition(b.newscrollspeed?b.newscrollspeed:
i);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);if(i>0){!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:g},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:i});if(e.transitionend){if(!b.scrollendtrapped)b.scrollendtrapped=true,b.bind(b.doc,e.transitionend,b.onScrollEnd,false)}else b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,i);b.timerscroll={bz:new BezierClass(g,b.newscrolly,
i,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,i,0,0,0.58,1)};if(!b.cursorfreezed)b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)}b.synched("doScroll-set",function(){b.timer=0;if(b.scrollendtrapped)b.scrollrunning=true;b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return true;var c=b.getScrollTop(),d=b.getScrollLeft();b.scrollrunning=false;
e.transitionend||clearTimeout(e.transitionend);b.scrollendtrapped=false;b._unbind(b.doc,e.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=false;b.cursorfreezed=false;b.showCursor(c,d);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,e.transitionend,b.onScrollEnd);b.scrollendtrapped=false;b.prepareTransition(0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);
b.timerscroll=false;var c=b.getScrollTop(),d=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.noticeCursor(false,c,d);b.cursorfreezed=false;if(c<0)c=0;else if(c>b.page.maxh)c=b.page.maxh;if(d<0)d=0;else if(d>b.page.maxw)d=b.page.maxw;if(c!=b.newscrolly||d!=b.newscrollx)return b.doScrollPos(d,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:d,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=false}):(this.doScrollLeft=
function(c){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e)},this.doScrollTop=function(c){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c)},this.doScrollPos=function(c,e){function g(){if(b.cancelAnimationFrame)return true;b.scrollrunning=true;if(o=1-o)return b.timer=q(g)||1;var c=0,f=sy=b.getScrollTop();if(b.dst.ay){var f=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,e=f-sy;if(e<0&&f<b.newscrolly||e>0&&f>b.newscrolly)f=b.newscrolly;b.setScrollTop(f);
f==b.newscrolly&&(c=1)}else c=1;var d=sx=b.getScrollLeft();if(b.dst.ax){d=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;e=d-sx;if(e<0&&d<b.newscrollx||e>0&&d>b.newscrollx)d=b.newscrollx;b.setScrollLeft(d);d==b.newscrollx&&(c+=1)}else c+=1;if(c==2){b.timer=0;b.cursorfreezed=false;b.bzscroll=false;b.scrollrunning=false;if(f<0)f=0;else if(f>b.page.maxh)f=b.page.maxh;if(d<0)d=0;else if(d>b.page.maxw)d=b.page.maxw;d!=b.newscrollx||f!=b.newscrolly?b.doScrollPos(d,f):b.onscrollend&&b.onscrollend.call(b,
{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})}else b.timer=q(g)||1}e=typeof e=="undefined"||e===false?b.getScrollTop(true):e;if(b.timer&&b.newscrolly==e&&b.newscrollx==c)return true;b.timer&&r(b.timer);b.timer=0;var d=b.getScrollTop(),h=b.getScrollLeft();((b.newscrolly-d)*(e-d)<0||(b.newscrollx-h)*(c-h)<0)&&b.cancelScroll();b.newscrolly=e;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)if(b.newscrolly<0)b.newscrolly=0;else if(b.newscrolly>b.page.maxh)b.newscrolly=
b.page.maxh;if(!b.bouncescroll||!b.railh.visibility)if(b.newscrollx<0)b.newscrollx=0;else if(b.newscrollx>b.page.maxw)b.newscrollx=b.page.maxw;b.dst={};b.dst.x=c-h;b.dst.y=e-d;b.dst.px=h;b.dst.py=d;var i=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/i;b.dst.ay=b.dst.y/i;var j=0,k=i;if(b.dst.x==0)j=d,k=e,b.dst.ay=1,b.dst.py=0;else if(b.dst.y==0)j=h,k=c,b.dst.ax=1,b.dst.px=0;i=b.getTransitionSpeed(i);b.bzscroll=i>0?b.bzscroll?b.bzscroll.update(k,i):new BezierClass(j,
k,i,0,1,0,1):false;if(!b.timer){(d==b.page.maxh&&e>=b.page.maxh||h==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var o=1;b.cancelAnimationFrame=false;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:d},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:i});g();(d==b.page.maxh&&e>=d||h==b.page.maxw&&c>=h)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&r(b.timer);b.timer=0;b.bzscroll=false;b.scrollrunning=
false;return b}):(this.doScrollLeft=function(c,e){var g=b.getScrollTop();b.doScrollPos(c,g,e)},this.doScrollTop=function(c,e){var g=b.getScrollLeft();b.doScrollPos(g,c,e)},this.doScrollPos=function(c,e){var g=c>b.page.maxw?b.page.maxw:c;g<0&&(g=0);var d=e>b.page.maxh?b.page.maxh:e;d<0&&(d=0);b.synched("scroll",function(){b.setScrollTop(d);b.setScrollLeft(g)})},this.cancelScroll=function(){});this.doScrollBy=function(c,e){var d=0,d=e?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:
b.getScrollTop(true))-c;if(b.bouncescroll){var h=Math.round(b.view.h/2);d<-h?d=-h:d>b.page.maxh+h&&(d=b.page.maxh+h)}b.cursorfreezed=false;py=b.getScrollTop(true);if(d<0&&py<=0)return b.noticeCursor();else if(d>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(d)};this.doScrollLeftBy=function(c,e){var d=0,d=e?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(true))-c;if(b.bouncescroll){var h=Math.round(b.view.w/2);d<-h?d=-h:d>b.page.maxw+
h&&(d=b.page.maxw+h)}b.cursorfreezed=false;px=b.getScrollLeft(true);if(d<0&&px<=0)return b.noticeCursor();else if(d>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(d)};this.doScrollTo=function(c,e){e&&Math.round(c*b.scrollratio.y);b.cursorfreezed=false;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(false,c)};b.onscroll=function(){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*
(1/b.scrollratio.y));if(b.railh)b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x));b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=true;b.zoomrestore={style:{}};var h="position,top,left,zIndex,backgroundColor,marginTop,marginBottom,marginLeft,marginRight".split(","),g=b.win[0].style,i;for(i in h){var j=h[i];b.zoomrestore.style[j]=typeof g[j]!="undefined"?g[j]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=
b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-b.win.height()};if(e.isios4)b.zoomrestore.scrollTop=d(window).scrollTop(),d(window).scrollTop(0);b.win.css({position:e.isios4?"absolute":"fixed",top:0,left:0,"z-index":b.opt.zindex+100,margin:"0px"});h=b.win.css("backgroundColor");(h==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":b.opt.zindex+110});b.zoom.css({"z-index":b.opt.zindex+
112});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=function(c){if(b.zoomactive)return b.zoomactive=false,b.win.css("margin",""),b.win.css(b.zoomrestore.style),e.isios4&&d(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.ispage?b.opt.zindex:b.opt.zindex+2}),b.zoom.css({"z-index":b.opt.zindex}),b.zoomrestore=false,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),
b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:d(window).width()-b.zoomrestore.padding.w+"px",height:d(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();d.nicescroll.push(this)},z=function(d){var c=this;this.nc=d;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=
false;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(d,i){c.stop();var b=c.time();c.steptime=0;c.lasttime=b;c.speedx=0;c.speedy=0;c.lastx=d;c.lasty=i;c.lastscrollx=-1;c.lastscrolly=-1};this.update=function(d,i){var b=c.time();c.steptime=b-c.lasttime;c.lasttime=b;var b=i-c.lasty,j=d-c.lastx,e=c.nc.getScrollTop(),n=c.nc.getScrollLeft();e+=b;n+=j;c.snapx=n<0||n>c.nc.page.maxw;c.snapy=e<0||e>c.nc.page.maxh;
c.speedx=j;c.speedy=b;c.lastx=d;c.lasty=i};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(d,i){var b=false;if(i<0)i=0,b=true;else if(i>c.nc.page.maxh)i=c.nc.page.maxh,b=true;if(d<0)d=0,b=true;else if(d>c.nc.page.maxw)d=c.nc.page.maxw,b=true;b&&c.nc.doScrollPos(d,i,c.nc.opt.snapbackspeed)};this.doMomentum=function(d){var i=c.time(),b=d?i+d:c.lasttime,d=c.nc.getScrollLeft(),j=c.nc.getScrollTop(),e=
c.nc.page.maxh,n=c.nc.page.maxw;c.speedx=n>0?Math.min(60,c.speedx):0;c.speedy=e>0?Math.min(60,c.speedy):0;b=b&&i-b<=50;if(j<0||j>e||d<0||d>n)b=false;d=c.speedx&&b?c.speedx:false;if(c.speedy&&b&&c.speedy||d){var p=Math.max(16,c.steptime);p>50&&(d=p/50,c.speedx*=d,c.speedy*=d,p=50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var f=c.lastscrollx,l=c.lastscrolly,g=function(){var b=c.time()-i>600?0.04:0.02;if(c.speedx&&(f=Math.floor(c.lastscrollx-
c.speedx*(1-c.demulxy)),c.lastscrollx=f,f<0||f>n))b=0.1;if(c.speedy&&(l=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=l,l<0||l>e))b=0.1;c.demulxy=Math.min(1,c.demulxy+b);c.nc.synched("domomentum2d",function(){if(c.speedx)c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=f,c.nc.setScrollLeft(f);if(c.speedy)c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=l,c.nc.setScrollTop(l);c.timer||(c.nc.hideCursor(),c.doSnapy(f,l))});c.demulxy<1?c.timer=setTimeout(g,p):(c.stop(),c.nc.hideCursor(),c.doSnapy(f,
l))};g()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},t=d.fn.scrollTop;d.cssHooks.pageYOffset={get:function(j){var c=d.data(j,"__nicescroll")||false;return c&&c.ishwscroll?c.getScrollTop():t.call(j)},set:function(j,c){var h=d.data(j,"__nicescroll")||false;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):t.call(j,c);return this}};d.fn.scrollTop=function(j){if(typeof j=="undefined"){var c=this[0]?d.data(this[0],"__nicescroll")||false:false;return c&&c.ishwscroll?c.getScrollTop():t.call(this)}else return this.each(function(){var c=
d.data(this,"__nicescroll")||false;c&&c.ishwscroll?c.setScrollTop(parseInt(j)):t.call(d(this),j)})};var u=d.fn.scrollLeft;d.cssHooks.pageXOffset={get:function(j){var c=d.data(j,"__nicescroll")||false;return c&&c.ishwscroll?c.getScrollLeft():u.call(j)},set:function(j,c){var h=d.data(j,"__nicescroll")||false;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):u.call(j,c);return this}};d.fn.scrollLeft=function(j){if(typeof j=="undefined"){var c=this[0]?d.data(this[0],"__nicescroll")||false:false;return c&&
c.ishwscroll?c.getScrollLeft():u.call(this)}else return this.each(function(){var c=d.data(this,"__nicescroll")||false;c&&c.ishwscroll?c.setScrollLeft(parseInt(j)):u.call(d(this),j)})};var v=function(j){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(d){for(var b=0;b<c.length;b++)d.call(c[b]);return c};this.push=function(d){c[c.length]=d;c.length++};this.eq=function(d){return c[d]};if(j)for(a=0;a<j.length;a++){var h=d.data(j[a],"__nicescroll")||false;h&&(this[this.length]=h,
this.length++)}return this};(function(d,c,h){for(var i=0;i<c.length;i++)h(d,c[i])})(v.prototype,"show,hide,onResize,resize,remove,stop,doScrollPos".split(","),function(d,c){d[c]=function(){var d=arguments;return this.each(function(){this[c].apply(this,d)})}});d.fn.getNiceScroll=function(j){return typeof j=="undefined"?new v(this):d.data(this[j],"__nicescroll")||false};d.extend(d.expr[":"],{nicescroll:function(j){return d.data(j,"__nicescroll")?true:false}});d.fn.niceScroll=function(j,c){typeof c==
"undefined"&&typeof j=="object"&&!("jquery"in j)&&(c=j,j=false);var h=new v;typeof c=="undefined"&&(c={});if(j)c.doc=d(j),c.win=d(this);var i=!("doc"in c);if(!i&&!("win"in c))c.win=d(this);this.each(function(){var b=d(this).data("__nicescroll")||false;if(!b)c.doc=i?d(this):c.doc,b=new F(c,d(this)),d(this).data("__nicescroll",b);h.push(b)});return h.length==1?h[0]:h};window.NiceScroll={getjQuery:function(){return d}};if(!d.nicescroll)d.nicescroll=new v})(jQuery);


;(function ($) {
    "use strict";
    
    var undef, zindex = 400, propNameTransform = 'Transform', propNameTransformOrigin = 'TransformOrigin', transformProps = [
        'O',
        'ms',
        'Webkit',
        'Moz'
    ], i = transformProps.length, div = document.createElement('div'), divStyle = div.style;
    
    while(i--) {
        if((transformProps[i]+propNameTransform) in divStyle) {
            propNameTransform = transformProps[i]+propNameTransform;
            propNameTransformOrigin = transformProps[i]+propNameTransformOrigin;
        }
    }
    
    function getRotationAngle(touch1X, touch1Y, touch2X, touch2Y) {
        var x = touch1X - touch2X,
            y = touch1Y - touch2Y,
            radiant = Math.atan2(y, x);
        
        return (radiant * 180 / Math.PI);   
    }

    function formatData(data) {
        return {
            "scaleX": data.scaleX,
            "scaleY": data.scaleY,
            "imgWidth":data.imgWidth,
            "imgHeight":data.imgHeight,
            "initWidth":data.initWidth,
            "initHeight":data.initHeight,
            "originWidth":data.originWidth,
            "originHeight":data.originHeight,
            'diffX': data.diffX,
            'diffY': data.diffY,
            'startWidth': data.startWidth,
            'startHeight': data.startHeight,
            'startDistance': data.startDistance,
            "startX": data.startX,
            "startY": data.startY,
            "newX": data.newX,
            "newY": data.newY,
            "rotatePoint1X": data.rotatePoint1X,
            "rotatePoint1Y": data.rotatePoint1Y,
            "rotatePoint2X": data.rotatePoint2X,
            "rotatePoint2Y": data.rotatePoint2Y,
            "startDegree": data.startDegree,
            "currDegree": data.currDegree,
            "_startDegree": data._startDegree
        }
    }

    $.fn.TouchBox = function (options) {
        var defaults = {
            drag: false,
            resize: false,
            rotate: false,
            grid_drag: 1,
            callback_touches: null,
            callback_size_change: null,
            callback_position_change: null,
            callback_degree_change: null
        }
        
        if(options != undef) $.extend(defaults, options);

        this.each(function () {
            var $this = $(this);
            
            $.data($this[0], 'options', defaults);

            $.data($this[0], 'touches', 0);
            $.data($this[0], 'rotation', false);
            $.data($this[0], 'ignoreTouch', false);
            $.data($this[0], 'originWidth', defaults.originWidth || 0);
            $.data($this[0], 'originHeight', defaults.originHeight || 0);
            $.data($this[0], 'imgWidth', defaults.imgWidth || 0);
            $.data($this[0], 'imgHeight', defaults.imgHeight || 0);
            $.data($this[0], 'initWidth', defaults.initWidth || 0);
            $.data($this[0], 'initHeight', defaults.initHeight || 0);
            $.data($this[0], 'scaleX', defaults.scaleX || 1);
            $.data($this[0], 'scaleY', defaults.scaleY || 1);
            $.data($this[0], 'diffX', defaults.diffX || 0);
            $.data($this[0], 'diffY', defaults.diffY || 0);
            $.data($this[0], 'startWidth', defaults.startWidth || 0);
            $.data($this[0], 'startHeight', defaults.startHeight || 0);
            $.data($this[0], 'startDistance', defaults.startDistance || 0);
            $.data($this[0], 'startX', defaults.startX || 0);
            $.data($this[0], 'startY', defaults.startY || 0);
            $.data($this[0], 'newX', defaults.newX || 0);
            $.data($this[0], 'newY', defaults.newY || 0);
            $.data($this[0], 'rotatePoint1X', defaults.rotatePoint1X || 0);
            $.data($this[0], 'rotatePoint1Y', defaults.rotatePoint1Y || 0);
            $.data($this[0], 'rotatePoint2X', defaults.rotatePoint2X || 0);
            $.data($this[0], 'rotatePoint2Y', defaults.rotatePoint2Y || 0);
            $.data($this[0], 'startDegree', defaults.startDegree || 0);
            $.data($this[0], 'currDegree', defaults.currDegree || 0);
            $.data($this[0], '_startDegree', defaults._startDegree || 0);
            
            //初始化样式
            if(defaults.rotate) $this.css(propNameTransformOrigin, 'center center');
            if(defaults.newX){
                $this.css({
                    left: defaults.newX + 'px',
                });
            }
            if(defaults.newY){
                $this.css({
                    top: defaults.newY + 'px',
                });
            }
            if(defaults.currDegree){
                $this.css(propNameTransform, 'rotate(' + Math.floor(defaults.currDegree) + 'deg)');
            }

            if(defaults.initWidth && defaults.initHeight) {
                var hbiw = defaults.imgHeight / defaults.imgWidth;
                var newW = defaults.initWidth;

                if(defaults.scaled) {
                    newW = defaults.initWidth;
                } else {
                    newW = defaults.initWidth * defaults.scaleX;
                }

                var newH = hbiw * newW;
                $this.css({
                    width: newW + 'px',
                    height: newH + 'px'
                });
            }
            
            this.draggable = false;
            
            $this.unbind('touchstart.touchBox mousedown.touchBox').bind('touchstart.touchBox mousedown.touchBox', function (e) {
                var $thiz = $(this),
                    pageX = (typeof e.pageX != 'undefined' ? e.pageX : e.originalEvent.touches[0].pageX),
                    pageY = (typeof e.pageY != 'undefined' ? e.pageY : e.originalEvent.touches[0].pageY),
                    ignoreTouch = $.data($thiz[0], 'ignoreTouch'),
                    touches = (typeof e.pageX != 'undefined' ? 1 : e.originalEvent.touches.length),
                    options = $.data($thiz[0], 'options');
                
                zindex += 1;
                
                $thiz.css({ zIndex: zindex });
                $.data($thiz[0], 'touches', touches);
                
                if(ignoreTouch) {
                    ignoreTouch = false;
                    $.data($thiz[0], 'ignoreTouch', ignoreTouch);
                }
                
                if(!ignoreTouch) {
                    var offsetLeft = parseFloat($thiz.css('left'), 10),
                        offsetTop = parseFloat($thiz.css('top'), 10),
                        x = pageX,
                        y = pageY;
                    $.data($thiz[0], 'startX', offsetLeft);
                    $.data($thiz[0], 'startY', offsetTop);

                    $.data($thiz[0], 'diffX',  (x - offsetLeft));
                    $.data($thiz[0], 'diffY', (y - offsetTop));
                }
                
                if(options.rotate) {
                    if(touches == 1) {
                        $.data($thiz[0], 'rotatePoint1X', pageX);
                        $.data($thiz[0], 'rotatePoint1Y', pageY);
                    } else if(touches == 2) {
                        var rotatePoint2X = e.originalEvent.touches[1].pageX,
                            rotatePoint2Y = e.originalEvent.touches[1].pageY,
                            rotatePoint1X = $.data($thiz[0], 'rotatePoint1X'),
                            rotatePoint1Y = $.data($thiz[0], 'rotatePoint1Y');
                        
                        $.data($thiz[0], 'rotatePoint2X', rotatePoint2X);
                        $.data($thiz[0], 'rotatePoint2Y', rotatePoint2Y);
                        
                        $.data($thiz[0], 'startDegree', getRotationAngle(rotatePoint1X, rotatePoint1Y, rotatePoint2X, rotatePoint2Y));
                        $.data($thiz[0], '_startDegree', $.data($thiz[0], 'currDegree'));
                        
                        $.data($thiz[0], 'rotation', true);
                    }
                }
                
                if(options.resize && touches == 2) {
                    $.data($thiz[0], 'startWidth', $this.width());
                    $.data($thiz[0], 'startHeight', $this.height());
                    
                    var x = e.originalEvent.touches[0].pageX,
                        y = e.originalEvent.touches[0].pageY,
                        x2 = e.originalEvent.touches[1].pageX,
                        y2 = e.originalEvent.touches[1].pageY,
                        xd = (x2 - x),
                        yd = (y2 - y),
                        distance = Math.sqrt((xd * xd) + (yd * yd));
                    
                    $.data($thiz[0], 'startDistance', distance);
                }
            }).unbind('touchmove.touchBox mousemove.touchBox').bind('touchmove.touchBox mousemove.touchBox', function (e) {
                e.preventDefault();
                var $thiz = $(this),
                    touches = $.data($thiz[0], 'touches'),
                    options = $.data($thiz[0], 'options');
                
                if(options.callback_touches != null) options.callback_touches.apply(this, [touches]);
                
                if(options.resize && touches == 2) {
                    var hbiw = $.data($thiz[0], 'imgHeight') / $.data($thiz[0], 'imgWidth');
                    var x = e.originalEvent.touches[0].pageX,
                        y = e.originalEvent.touches[0].pageY,
                        x2 = e.originalEvent.touches[1].pageX,
                        y2 = e.originalEvent.touches[1].pageY,
                        xd = (x2 - x),
                        yd = (y2 - y),
                        distance = Math.sqrt((xd * xd) + (yd * yd)),
                        halfDistance = ((distance - $.data($thiz[0], 'startDistance')) / 2),
                        newWidth = ($.data($thiz[0], 'startWidth') + (distance - $.data($thiz[0], 'startDistance'))),
                        newHeight = hbiw * newWidth,
                        newLeft = ($.data($thiz[0], 'startX') - halfDistance),
                        newTop = ($.data($thiz[0], 'startY') - halfDistance);

                    if(newWidth < 100) {return false;}
                    if(newWidth > ($.data($thiz[0], 'imgWidth'))) {return false;}

                    $.data($thiz[0], 'scaled', true);
                    $.data($thiz[0], 'newX', newLeft);
                    $.data($thiz[0], 'newY', newTop);
                    $.data($thiz[0], 'scaleX', newWidth / $.data($thiz[0], 'originWidth'));
                    $.data($thiz[0], 'scaleY', newHeight / $.data($thiz[0], 'priginHeight'));
                    $.data($thiz[0], 'initWidth', newWidth);
                    $.data($thiz[0], 'initHeight', newHeight);

                    $this.css({
                        width: newWidth + 'px',
                        height: newHeight + 'px',
                        left: newLeft + 'px',
                        top: newTop + 'px'
                    });
                    
                    if(options.callback_size_change != null) options.callback_size_change.apply(this, [newWidth, newHeight]);
                    if(options.callback_position_change != null) options.callback_position_change.apply(this, [newLeft, newTop]);
                }
                
                if(options.drag && !$.data($thiz[0], 'ignoreTouch') && touches == 1) {
                    var x = (typeof e.pageX != 'undefined' ? e.pageX : e.originalEvent.touches[0].pageX),
                        y = (typeof e.pageY != 'undefined' ? e.pageY : e.originalEvent.touches[0].pageY),
                        newLeft = (x - $.data($thiz[0], 'diffX')),
                        newTop = (y - $.data($thiz[0], 'diffY'));
                    
                    $.data($thiz[0], 'newX', newLeft);
                    $.data($thiz[0], 'newY', newTop);

                    $this.css({
                        left: (Math.floor((newLeft / options.grid_drag)) * options.grid_drag) + 'px',
                        top: (Math.floor((newTop / options.grid_drag)) * options.grid_drag) + 'px'
                    });
                    
                    if(options.callback_position_change != null) options.callback_position_change.apply(this, [$.data($thiz[0]), newLeft, newTop]);
                }
                
                if(options.rotate && $.data($thiz[0], 'rotation')) {
                    var lastDegrees = $.data($thiz[0], 'currDegree'),
                    degrees = (($.data($thiz[0], 'startDegree') - getRotationAngle(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY, e.originalEvent.touches[1].pageX, e.originalEvent.touches[1].pageY) - $.data($thiz[0], '_startDegree')) * -1);
                    
                    $.data($thiz[0], 'currDegree', degrees);
                    $thiz.css(propNameTransform, 'rotate(' + Math.floor(degrees) + 'deg)');
                    
                    if(options.callback_degree_change != null) options.callback_degree_change.apply(this, [lastDegrees, degrees]);
                }

                if(options.callback_change != null) options.callback_change.apply(this, [formatData($.data($thiz[0])),formatTargetData($.data($thiz[0]))]);
                
                e.preventDefault();
            }).unbind('touchend.touchBox mouseup.touchBox').bind('touchend.touchBox mouseup.touchBox', function (e) {
                var $thiz = $(this),
                    options = $.data($thiz[0], 'options'),
                    touches = $.data($thiz[0], 'touches');
                
                touches -= 1;
                
                $.data($thiz[0], 'touches', touches);
                
                if(touches == 1) $.data($thiz[0], 'ignoreTouch', true);
                
                $.data($thiz[0], 'rotation', false);
                
                if(options.callback_change != null) options.callback_change.apply(this, [formatData($.data($thiz[0])),formatTargetData($.data($thiz[0]))]);
                if(options.callback_touches != null) options.callback_touches.apply(this, [touches]);
            });
        });
    };
})(jQuery);


/*
    json2.js
    2014-02-04

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx,
        escapable,
        gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


/*
  html2canvas 0.4.0 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen (@niklasvh)

  Released under MIT License
*/

(function(window, document, undefined) {

  "use strict";

  var _html2canvas = {},
    previousElement,
    computedCSS,
    html2canvas;

  function h2clog(a) {
    if (_html2canvas.logging && window.console && window.console.log) {
      window.console.log(a);
    }
  }

  _html2canvas.Util = {};

  _html2canvas.Util.trimText = (function(isNative) {
    return function(input) {
      if (isNative) {
        return isNative.apply(input);
      } else {
        return ((input || '') + '').replace(/^\s+|\s+$/g, '');
      }
    };
  })(String.prototype.trim);

  _html2canvas.Util.parseBackgroundImage = function(value) {
    var whitespace = ' \r\n\t',
      method, definition, prefix, prefix_i, block, results = [],
      c, mode = 0,
      numParen = 0,
      quote, args;

    var appendResult = function() {
      if (method) {
        if (definition.substr(0, 1) === '"') {
          definition = definition.substr(1, definition.length - 2);
        }
        if (definition) {
          args.push(definition);
        }
        if (method.substr(0, 1) === '-' &&
          (prefix_i = method.indexOf('-', 1) + 1) > 0) {
          prefix = method.substr(0, prefix_i);
          method = method.substr(prefix_i);
        }
        results.push({
          prefix: prefix,
          method: method.toLowerCase(),
          value: block,
          args: args
        });
      }
      args = []; //for some odd reason, setting .length = 0 didn't work in safari
      method =
        prefix =
        definition =
        block = '';
    };

    appendResult();
    for (var i = 0, ii = value.length; i < ii; i++) {
      c = value[i];
      if (mode === 0 && whitespace.indexOf(c) > -1) {
        continue;
      }
      switch (c) {
        case '"':
          if (!quote) {
            quote = c;
          } else if (quote === c) {
            quote = null;
          }
          break;

        case '(':
          if (quote) {
            break;
          } else if (mode === 0) {
            mode = 1;
            block += c;
            continue;
          } else {
            numParen++;
          }
          break;

        case ')':
          if (quote) {
            break;
          } else if (mode === 1) {
            if (numParen === 0) {
              mode = 0;
              block += c;
              appendResult();
              continue;
            } else {
              numParen--;
            }
          }
          break;

        case ',':
          if (quote) {
            break;
          } else if (mode === 0) {
            appendResult();
            continue;
          } else if (mode === 1) {
            if (numParen === 0 && !method.match(/^url$/i)) {
              args.push(definition);
              definition = '';
              block += c;
              continue;
            }
          }
          break;
      }

      block += c;
      if (mode === 0) {
        method += c;
      } else {
        definition += c;
      }
    }
    appendResult();

    return results;
  };

  _html2canvas.Util.Bounds = function getBounds(el) {
    var clientRect,
      bounds = {};

    if (el.getBoundingClientRect) {
      clientRect = el.getBoundingClientRect();


      // TODO add scroll position to bounds, so no scrolling of window necessary
      bounds.top = clientRect.top;
      bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
      bounds.left = clientRect.left;

      // older IE doesn't have width/height, but top/bottom instead
      bounds.width = clientRect.width || (clientRect.right - clientRect.left);
      bounds.height = clientRect.height || (clientRect.bottom - clientRect.top);

      return bounds;

    }
  };

  _html2canvas.Util.getCSS = function(el, attribute, index) {
    // return $(el).css(attribute);

    var val,
      isBackgroundSizePosition = attribute.match(/^background(Size|Position)$/);

    function toPX(attribute, val) {
      var rsLeft = el.runtimeStyle && el.runtimeStyle[attribute],
        left,
        style = el.style;

      // Check if we are not dealing with pixels, (Opera has issues with this)
      // Ported from jQuery css.js
      // From the awesome hack by Dean Edwards
      // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

      // If we're not dealing with a regular pixel number
      // but a number that has a weird ending, we need to convert it to pixels

      if (!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(val) && /^-?\d/.test(val)) {

        // Remember the original values
        left = style.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
          el.runtimeStyle.left = el.currentStyle.left;
        }
        style.left = attribute === "fontSize" ? "1em" : (val || 0);
        val = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
          el.runtimeStyle.left = rsLeft;
        }

      }

      if (!/^(thin|medium|thick)$/i.test(val)) {
        return Math.round(parseFloat(val)) + "px";
      }

      return val;
    }

    if (previousElement !== el) {
      computedCSS = document.defaultView.getComputedStyle(el, null);
    }
    val = computedCSS[attribute];

    if (isBackgroundSizePosition) {
      val = (val || '').split(',');
      val = val[index || 0] || val[0] || 'auto';
      val = _html2canvas.Util.trimText(val).split(' ');

      if (attribute === 'backgroundSize' && (!val[0] || val[0].match(/cover|contain|auto/))) {
        //these values will be handled in the parent function

      } else {
        val[0] = (val[0].indexOf("%") === -1) ? toPX(attribute + "X", val[0]) : val[0];
        if (val[1] === undefined) {
          if (attribute === 'backgroundSize') {
            val[1] = 'auto';
            return val;
          } else {
            // IE 9 doesn't return double digit always
            val[1] = val[0];
          }
        }
        val[1] = (val[1].indexOf("%") === -1) ? toPX(attribute + "Y", val[1]) : val[1];
      }
    } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
      var arr = val.split(" ");
      if (arr.length <= 1) {
        arr[1] = arr[0];
      }
      arr[0] = parseInt(arr[0], 10);
      arr[1] = parseInt(arr[1], 10);
      val = arr;
    }

    return val;
  };

  _html2canvas.Util.resizeBounds = function(current_width, current_height, target_width, target_height, stretch_mode) {
    var target_ratio = target_width / target_height,
      current_ratio = current_width / current_height,
      output_width, output_height;

    if (!stretch_mode || stretch_mode === 'auto') {
      output_width = target_width;
      output_height = target_height;

    } else {
      if (target_ratio < current_ratio ^ stretch_mode === 'contain') {
        output_height = target_height;
        output_width = target_height * current_ratio;
      } else {
        output_width = target_width;
        output_height = target_width / current_ratio;
      }
    }

    return {
      width: output_width,
      height: output_height
    };
  };

  function backgroundBoundsFactory(prop, el, bounds, image, imageIndex, backgroundSize) {
    var bgposition = _html2canvas.Util.getCSS(el, prop, imageIndex),
      topPos,
      left,
      percentage,
      val;

    if (bgposition.length === 1) {
      val = bgposition[0];

      bgposition = [];

      bgposition[0] = val;
      bgposition[1] = val;
    }

    if (bgposition[0].toString().indexOf("%") !== -1) {
      percentage = (parseFloat(bgposition[0]) / 100);
      left = bounds.width * percentage;
      if (prop !== 'backgroundSize') {
        left -= (backgroundSize || image).width * percentage;
      }

    } else {
      if (prop === 'backgroundSize') {
        if (bgposition[0] === 'auto') {
          left = image.width;

        } else {
          if (bgposition[0].match(/contain|cover/)) {
            var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt(bgposition[0], 10);
          }
        }

      } else {
        left = parseInt(bgposition[0], 10);
      }
    }


    if (bgposition[1] === 'auto') {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1) {
      percentage = (parseFloat(bgposition[1]) / 100);
      topPos = bounds.height * percentage;
      if (prop !== 'backgroundSize') {
        topPos -= (backgroundSize || image).height * percentage;
      }

    } else {
      topPos = parseInt(bgposition[1], 10);
    }

    return [left, topPos];
  }

  _html2canvas.Util.BackgroundPosition = function(el, bounds, image, imageIndex, backgroundSize) {
    var result = backgroundBoundsFactory('backgroundPosition', el, bounds, image, imageIndex, backgroundSize);
    return {
      left: result[0],
      top: result[1]
    };
  };
  _html2canvas.Util.BackgroundSize = function(el, bounds, image, imageIndex) {
    var result = backgroundBoundsFactory('backgroundSize', el, bounds, image, imageIndex);
    return {
      width: result[0],
      height: result[1]
    };
  };

  _html2canvas.Util.Extend = function(options, defaults) {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        defaults[key] = options[key];
      }
    }
    return defaults;
  };


  /*
   * Derived from jQuery.contents()
   * Copyright 2010, John Resig
   * Dual licensed under the MIT or GPL Version 2 licenses.
   * http://jquery.org/license
   */
  _html2canvas.Util.Children = function(elem) {


    var children;
    try {

      children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ?
        elem.contentDocument || elem.contentWindow.document : (function(array) {
          var ret = [];

          if (array !== null) {

            (function(first, second) {
              var i = first.length,
                j = 0;

              if (typeof second.length === "number") {
                for (var l = second.length; j < l; j++) {
                  first[i++] = second[j];
                }

              } else {
                while (second[j] !== undefined) {
                  first[i++] = second[j++];
                }
              }

              first.length = i;

              return first;
            })(ret, array);

          }

          return ret;
        })(elem.childNodes);

    } catch (ex) {
      h2clog("html2canvas.Util.Children failed with exception: " + ex.message);
      children = [];
    }
    return children;
  };

  _html2canvas.Util.Font = (function() {

    var fontData = {};

    return function(font, fontSize, doc) {
      if (fontData[font + "-" + fontSize] !== undefined) {
        return fontData[font + "-" + fontSize];
      }

      var container = doc.createElement('div'),
        img = doc.createElement('img'),
        span = doc.createElement('span'),
        sampleText = 'Hidden Text',
        baseline,
        middle,
        metricsObj;

      container.style.visibility = "hidden";
      container.style.fontFamily = font;
      container.style.fontSize = fontSize;
      container.style.margin = 0;
      container.style.padding = 0;

      doc.body.appendChild(container);

      // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
      img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
      img.width = 1;
      img.height = 1;

      img.style.margin = 0;
      img.style.padding = 0;
      img.style.verticalAlign = "baseline";

      span.style.fontFamily = font;
      span.style.fontSize = fontSize;
      span.style.margin = 0;
      span.style.padding = 0;

      span.appendChild(doc.createTextNode(sampleText));
      container.appendChild(span);
      container.appendChild(img);
      baseline = (img.offsetTop - span.offsetTop) + 1;

      container.removeChild(span);
      container.appendChild(doc.createTextNode(sampleText));

      container.style.lineHeight = "normal";
      img.style.verticalAlign = "super";

      middle = (img.offsetTop - container.offsetTop) + 1;
      metricsObj = {
        baseline: baseline,
        lineWidth: 1,
        middle: middle
      };

      fontData[font + "-" + fontSize] = metricsObj;

      doc.body.removeChild(container);

      return metricsObj;
    };
  })();

  (function() {

    _html2canvas.Generate = {};

    var reGradients = [
      /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
      /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
      /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
      /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
      /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
      /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
      /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
    ];

    /*
     * TODO: Add IE10 vendor prefix (-ms) support
     * TODO: Add W3C gradient (linear-gradient) support
     * TODO: Add old Webkit -webkit-gradient(radial, ...) support
     * TODO: Maybe some RegExp optimizations are possible ;o)
     */
    _html2canvas.Generate.parseGradient = function(css, bounds) {
      var gradient, i, len = reGradients.length,
        m1, stop, m2, m2Len, step, m3, tl, tr, br, bl;

      for (i = 0; i < len; i += 1) {
        m1 = css.match(reGradients[i]);
        if (m1) {
          break;
        }
      }

      if (m1) {
        switch (m1[1]) {
          case '-webkit-linear-gradient':
          case '-o-linear-gradient':

            gradient = {
              type: 'linear',
              x0: null,
              y0: null,
              x1: null,
              y1: null,
              colorStops: []
            };

            // get coordinates
            m2 = m1[2].match(/\w+/g);
            if (m2) {
              m2Len = m2.length;
              for (i = 0; i < m2Len; i += 1) {
                switch (m2[i]) {
                  case 'top':
                    gradient.y0 = 0;
                    gradient.y1 = bounds.height;
                    break;

                  case 'right':
                    gradient.x0 = bounds.width;
                    gradient.x1 = 0;
                    break;

                  case 'bottom':
                    gradient.y0 = bounds.height;
                    gradient.y1 = 0;
                    break;

                  case 'left':
                    gradient.x0 = 0;
                    gradient.x1 = bounds.width;
                    break;
                }
              }
            }
            if (gradient.x0 === null && gradient.x1 === null) { // center
              gradient.x0 = gradient.x1 = bounds.width / 2;
            }
            if (gradient.y0 === null && gradient.y1 === null) { // center
              gradient.y0 = gradient.y1 = bounds.height / 2;
            }

            // get colors and stops
            m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
            if (m2) {
              m2Len = m2.length;
              step = 1 / Math.max(m2Len - 1, 1);
              for (i = 0; i < m2Len; i += 1) {
                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                if (m3[2]) {
                  stop = parseFloat(m3[2]);
                  if (m3[3] === '%') {
                    stop /= 100;
                  } else { // px - stupid opera
                    stop /= bounds.width;
                  }
                } else {
                  stop = i * step;
                }
                gradient.colorStops.push({
                  color: m3[1],
                  stop: stop
                });
              }
            }
            break;

          case '-webkit-gradient':

            gradient = {
              type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
              x0: 0,
              y0: 0,
              x1: 0,
              y1: 0,
              colorStops: []
            };

            // get coordinates
            m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
            if (m2) {
              gradient.x0 = (m2[1] * bounds.width) / 100;
              gradient.y0 = (m2[2] * bounds.height) / 100;
              gradient.x1 = (m2[3] * bounds.width) / 100;
              gradient.y1 = (m2[4] * bounds.height) / 100;
            }

            // get colors and stops
            m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
            if (m2) {
              m2Len = m2.length;
              for (i = 0; i < m2Len; i += 1) {
                m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
                stop = parseFloat(m3[2]);
                if (m3[1] === 'from') {
                  stop = 0.0;
                }
                if (m3[1] === 'to') {
                  stop = 1.0;
                }
                gradient.colorStops.push({
                  color: m3[3],
                  stop: stop
                });
              }
            }
            break;

          case '-moz-linear-gradient':

            gradient = {
              type: 'linear',
              x0: 0,
              y0: 0,
              x1: 0,
              y1: 0,
              colorStops: []
            };

            // get coordinates
            m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

            // m2[1] == 0%   -> left
            // m2[1] == 50%  -> center
            // m2[1] == 100% -> right

            // m2[2] == 0%   -> top
            // m2[2] == 50%  -> center
            // m2[2] == 100% -> bottom

            if (m2) {
              gradient.x0 = (m2[1] * bounds.width) / 100;
              gradient.y0 = (m2[2] * bounds.height) / 100;
              gradient.x1 = bounds.width - gradient.x0;
              gradient.y1 = bounds.height - gradient.y0;
            }

            // get colors and stops
            m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
            if (m2) {
              m2Len = m2.length;
              step = 1 / Math.max(m2Len - 1, 1);
              for (i = 0; i < m2Len; i += 1) {
                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
                if (m3[2]) {
                  stop = parseFloat(m3[2]);
                  if (m3[3]) { // percentage
                    stop /= 100;
                  }
                } else {
                  stop = i * step;
                }
                gradient.colorStops.push({
                  color: m3[1],
                  stop: stop
                });
              }
            }
            break;

          case '-webkit-radial-gradient':
          case '-moz-radial-gradient':
          case '-o-radial-gradient':

            gradient = {
              type: 'circle',
              x0: 0,
              y0: 0,
              x1: bounds.width,
              y1: bounds.height,
              cx: 0,
              cy: 0,
              rx: 0,
              ry: 0,
              colorStops: []
            };

            // center
            m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
            if (m2) {
              gradient.cx = (m2[1] * bounds.width) / 100;
              gradient.cy = (m2[2] * bounds.height) / 100;
            }

            // size
            m2 = m1[3].match(/\w+/);
            m3 = m1[4].match(/[a-z\-]*/);
            if (m2 && m3) {
              switch (m3[0]) {
                case 'farthest-corner':
                case 'cover': // is equivalent to farthest-corner
                case '': // mozilla removes "cover" from definition :(
                  tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                  tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                  br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                  bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                  gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                  break;
                case 'closest-corner':
                  tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                  tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                  br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                  bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                  gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                  break;
                case 'farthest-side':
                  if (m2[0] === 'circle') {
                    gradient.rx = gradient.ry = Math.max(
                      gradient.cx,
                      gradient.cy,
                      gradient.x1 - gradient.cx,
                      gradient.y1 - gradient.cy
                    );
                  } else { // ellipse

                    gradient.type = m2[0];

                    gradient.rx = Math.max(
                      gradient.cx,
                      gradient.x1 - gradient.cx
                    );
                    gradient.ry = Math.max(
                      gradient.cy,
                      gradient.y1 - gradient.cy
                    );
                  }
                  break;
                case 'closest-side':
                case 'contain': // is equivalent to closest-side
                  if (m2[0] === 'circle') {
                    gradient.rx = gradient.ry = Math.min(
                      gradient.cx,
                      gradient.cy,
                      gradient.x1 - gradient.cx,
                      gradient.y1 - gradient.cy
                    );
                  } else { // ellipse

                    gradient.type = m2[0];

                    gradient.rx = Math.min(
                      gradient.cx,
                      gradient.x1 - gradient.cx
                    );
                    gradient.ry = Math.min(
                      gradient.cy,
                      gradient.y1 - gradient.cy
                    );
                  }
                  break;

                  // TODO: add support for "30px 40px" sizes (webkit only)
              }
            }

            // color stops
            m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
            if (m2) {
              m2Len = m2.length;
              step = 1 / Math.max(m2Len - 1, 1);
              for (i = 0; i < m2Len; i += 1) {
                m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                if (m3[2]) {
                  stop = parseFloat(m3[2]);
                  if (m3[3] === '%') {
                    stop /= 100;
                  } else { // px - stupid opera
                    stop /= bounds.width;
                  }
                } else {
                  stop = i * step;
                }
                gradient.colorStops.push({
                  color: m3[1],
                  stop: stop
                });
              }
            }
            break;
        }
      }

      return gradient;
    };

    _html2canvas.Generate.Gradient = function(src, bounds) {
      if (bounds.width === 0 || bounds.height === 0) {
        return;
      }

      var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        gradient, grad, i, len;

      canvas.width = bounds.width;
      canvas.height = bounds.height;

      // TODO: add support for multi defined background gradients
      gradient = _html2canvas.Generate.parseGradient(src, bounds);

      if (gradient) {
        if (gradient.type === 'linear') {
          grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);

          for (i = 0, len = gradient.colorStops.length; i < len; i += 1) {
            try {
              grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
            } catch (e) {
              h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
            }
          }

          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);

        } else if (gradient.type === 'circle') {

          grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);

          for (i = 0, len = gradient.colorStops.length; i < len; i += 1) {
            try {
              grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
            } catch (e) {
              h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
            }
          }

          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);

        } else if (gradient.type === 'ellipse') {

          // draw circle
          var canvasRadial = document.createElement('canvas'),
            ctxRadial = canvasRadial.getContext('2d'),
            ri = Math.max(gradient.rx, gradient.ry),
            di = ri * 2,
            imgRadial;

          canvasRadial.width = canvasRadial.height = di;

          grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);

          for (i = 0, len = gradient.colorStops.length; i < len; i += 1) {
            try {
              grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
            } catch (e) {
              h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
            }
          }

          ctxRadial.fillStyle = grad;
          ctxRadial.fillRect(0, 0, di, di);

          ctx.fillStyle = gradient.colorStops[i - 1].color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);

        }
      }

      return canvas;
    };

    _html2canvas.Generate.ListAlpha = function(number) {
      var tmp = "",
        modulus;

      do {
        modulus = number % 26;
        tmp = String.fromCharCode((modulus) + 64) + tmp;
        number = number / 26;
      } while ((number * 26) > 26);

      return tmp;
    };

    _html2canvas.Generate.ListRoman = function(number) {
      var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = "",
        v,
        len = romanArray.length;

      if (number <= 0 || number >= 4000) {
        return number;
      }

      for (v = 0; v < len; v += 1) {
        while (number >= decimal[v]) {
          number -= decimal[v];
          roman += romanArray[v];
        }
      }

      return roman;

    };

  })();
  _html2canvas.Parse = function(images, options) {
    window.scroll(0, 0);

    var element = ((options.elements === undefined) ? document.body : options.elements[0]), // select body by default
      numDraws = 0,
      doc = element.ownerDocument,
      support = _html2canvas.Util.Support(options, doc),
      ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
      body = doc.body,
      getCSS = _html2canvas.Util.getCSS,
      pseudoHide = "___html2canvas___pseudoelement",
      hidePseudoElements = doc.createElement('style');

    hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
      '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

    body.appendChild(hidePseudoElements);

    images = images || {};

    function documentWidth() {
      return Math.max(
        Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
        Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
        Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
      );
    }

    function documentHeight() {
      return Math.max(
        Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
        Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
        Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
    }

    function getCSSInt(element, attribute) {
      var val = parseInt(getCSS(element, attribute), 10);
      return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
    }

    function renderRect(ctx, x, y, w, h, bgcolor) {
      if (bgcolor !== "transparent") {
        ctx.setVariable("fillStyle", bgcolor);
        ctx.fillRect(x, y, w, h);
        numDraws += 1;
      }
    }

    function textTransform(text, transform) {
      switch (transform) {
        case "lowercase":
          return text.toLowerCase();
        case "capitalize":
          return text.replace(/(^|\s|:|-|\(|\))([a-z])/g, function(m, p1, p2) {
            if (m.length > 0) {
              return p1 + p2.toUpperCase();
            }
          });
        case "uppercase":
          return text.toUpperCase();
        default:
          return text;
      }
    }

    function noLetterSpacing(letter_spacing) {
      return (/^(normal|none|0px)$/.test(letter_spacing));
    }

    function drawText(currentText, x, y, ctx) {
      if (currentText !== null && _html2canvas.Util.trimText(currentText).length > 0) {
        ctx.fillText(currentText, x, y);
        numDraws += 1;
      }
    }

    function setTextVariables(ctx, el, text_decoration, color) {
      var align = false,
        bold = getCSS(el, "fontWeight"),
        family = getCSS(el, "fontFamily"),
        size = getCSS(el, "fontSize");

      switch (parseInt(bold, 10)) {
        case 401:
          bold = "bold";
          break;
        case 400:
          bold = "normal";
          break;
      }

      ctx.setVariable("fillStyle", color);
      ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
      ctx.setVariable("textAlign", (align) ? "right" : "left");

      if (text_decoration !== "none") {
        return _html2canvas.Util.Font(family, size, doc);
      }
    }

    function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
      switch (text_decoration) {
        case "underline":
          // Draws a line at the baseline of the font
          // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
          renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
          break;
        case "overline":
          renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
          break;
        case "line-through":
          // TODO try and find exact position for line-through
          renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
          break;
      }
    }

    function getTextBounds(state, text, textDecoration, isLast) {
      var bounds;
      if (support.rangeBounds) {
        if (textDecoration !== "none" || _html2canvas.Util.trimText(text).length !== 0) {
          bounds = textRangeBounds(text, state.node, state.textOffset);
        }
        state.textOffset += text.length;
      } else if (state.node && typeof state.node.nodeValue === "string") {
        var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
        bounds = textWrapperBounds(state.node);
        state.node = newTextNode;
      }
      return bounds;
    }

    function textRangeBounds(text, textNode, textOffset) {
      var range = doc.createRange();
      range.setStart(textNode, textOffset);
      range.setEnd(textNode, textOffset + text.length);
      return range.getBoundingClientRect();
    }

    function textWrapperBounds(oldTextNode) {
      var parent = oldTextNode.parentNode,
        wrapElement = doc.createElement('wrapper'),
        backupText = oldTextNode.cloneNode(true);

      wrapElement.appendChild(oldTextNode.cloneNode(true));
      parent.replaceChild(wrapElement, oldTextNode);

      var bounds = _html2canvas.Util.Bounds(wrapElement);
      parent.replaceChild(backupText, wrapElement);
      return bounds;
    }

    function renderText(el, textNode, stack) {
      var ctx = stack.ctx,
        color = getCSS(el, "color"),
        textDecoration = getCSS(el, "textDecoration"),
        textAlign = getCSS(el, "textAlign"),
        metrics,
        textList,
        state = {
          node: textNode,
          textOffset: 0
        };

      if (_html2canvas.Util.trimText(textNode.nodeValue).length > 0) {
        textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
        textAlign = textAlign.replace(["-webkit-auto"], ["auto"]);

        textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
          textNode.nodeValue.split(/(\b| )/) : textNode.nodeValue.split("");

        metrics = setTextVariables(ctx, el, textDecoration, color);

        if (options.chinese) {
          textList.forEach(function(word, index) {
            if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
              word = word.split("");
              word.unshift(index, 1);
              textList.splice.apply(textList, word);
            }
          });
        }

        textList.forEach(function(text, index) {
          var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1));
          if (bounds) {
            drawText(text, bounds.left, bounds.bottom, ctx);
            renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
          }
        });
      }
    }

    function listPosition(element, val) {
      var boundElement = doc.createElement("boundelement"),
        originalType,
        bounds;

      boundElement.style.display = "inline";

      originalType = element.style.listStyleType;
      element.style.listStyleType = "none";

      boundElement.appendChild(doc.createTextNode(val));

      element.insertBefore(boundElement, element.firstChild);

      bounds = _html2canvas.Util.Bounds(boundElement);
      element.removeChild(boundElement);
      element.style.listStyleType = originalType;
      return bounds;
    }

    function elementIndex(el) {
      var i = -1,
        count = 1,
        childs = el.parentNode.childNodes;

      if (el.parentNode) {
        while (childs[++i] !== el) {
          if (childs[i].nodeType === 1) {
            count++;
          }
        }
        return count;
      } else {
        return -1;
      }
    }

    function listItemText(element, type) {
      var currentIndex = elementIndex(element),
        text;
      switch (type) {
        case "decimal":
          text = currentIndex;
          break;
        case "decimal-leading-zero":
          text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
          break;
        case "upper-roman":
          text = _html2canvas.Generate.ListRoman(currentIndex);
          break;
        case "lower-roman":
          text = _html2canvas.Generate.ListRoman(currentIndex).toLowerCase();
          break;
        case "lower-alpha":
          text = _html2canvas.Generate.ListAlpha(currentIndex).toLowerCase();
          break;
        case "upper-alpha":
          text = _html2canvas.Generate.ListAlpha(currentIndex);
          break;
      }

      text += ". ";
      return text;
    }

    function renderListItem(element, stack, elBounds) {
      var x,
        text,
        ctx = stack.ctx,
        type = getCSS(element, "listStyleType"),
        listBounds;

      if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
        text = listItemText(element, type);
        listBounds = listPosition(element, text);
        setTextVariables(ctx, element, "none", getCSS(element, "color"));

        if (getCSS(element, "listStylePosition") === "inside") {
          ctx.setVariable("textAlign", "left");
          x = elBounds.left;
        } else {
          return;
        }

        drawText(text, x, listBounds.bottom, ctx);
      }
    }

    function loadImage(src) {
      var img = images[src];
      if (img && img.succeeded === true) {
        return img.img;
      } else {
        return false;
      }
    }

    function clipBounds(src, dst) {
      var x = Math.max(src.left, dst.left),
        y = Math.max(src.top, dst.top),
        x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
        y2 = Math.min((src.top + src.height), (dst.top + dst.height));

      return {
        left: x,
        top: y,
        width: x2 - x,
        height: y2 - y
      };
    }

    function setZ(zIndex, parentZ) {
      // TODO fix static elements overlapping relative/absolute elements under same stack, if they are defined after them
      var newContext;
      if (!parentZ) {
        newContext = h2czContext(0);
        return newContext;
      }

      if (zIndex !== "auto") {
        newContext = h2czContext(zIndex);
        parentZ.children.push(newContext);
        return newContext;

      }

      return parentZ;
    }

    function renderImage(ctx, element, image, bounds, borders) {

      var paddingLeft = getCSSInt(element, 'paddingLeft'),
        paddingTop = getCSSInt(element, 'paddingTop'),
        paddingRight = getCSSInt(element, 'paddingRight'),
        paddingBottom = getCSSInt(element, 'paddingBottom');

      drawImage(
        ctx,
        image,
        0, //sx
        0, //sy
        image.width, //sw
        image.height, //sh
        bounds.left + paddingLeft + borders[3].width, //dx
        bounds.top + paddingTop + borders[0].width, // dy
        bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
        bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
      );
    }

    function getBorderData(element) {
      return ["Top", "Right", "Bottom", "Left"].map(function(side) {
        return {
          width: getCSSInt(element, 'border' + side + 'Width'),
          color: getCSS(element, 'border' + side + 'Color')
        };
      });
    }

    function getBorderRadiusData(element) {
      return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
        return getCSS(element, 'border' + side + 'Radius');
      });
    }

    var getCurvePoints = (function(kappa) {

      return function(x, y, r1, r2) {
        var ox = (r1) * kappa, // control point offset horizontal
          oy = (r2) * kappa, // control point offset vertical
          xm = x + r1, // x-middle
          ym = y + r2; // y-middle
        return {
          topLeft: bezierCurve({
            x: x,
            y: ym
          }, {
            x: x,
            y: ym - oy
          }, {
            x: xm - ox,
            y: y
          }, {
            x: xm,
            y: y
          }),
          topRight: bezierCurve({
            x: x,
            y: y
          }, {
            x: x + ox,
            y: y
          }, {
            x: xm,
            y: ym - oy
          }, {
            x: xm,
            y: ym
          }),
          bottomRight: bezierCurve({
            x: xm,
            y: y
          }, {
            x: xm,
            y: y + oy
          }, {
            x: x + ox,
            y: ym
          }, {
            x: x,
            y: ym
          }),
          bottomLeft: bezierCurve({
            x: xm,
            y: ym
          }, {
            x: xm - ox,
            y: ym
          }, {
            x: x,
            y: y + oy
          }, {
            x: x,
            y: y
          })
        };
      };
    })(4 * ((Math.sqrt(2) - 1) / 3));

    function bezierCurve(start, startControl, endControl, end) {

      var lerp = function(a, b, t) {
        return {
          x: a.x + (b.x - a.x) * t,
          y: a.y + (b.y - a.y) * t
        };
      };

      return {
        start: start,
        startControl: startControl,
        endControl: endControl,
        end: end,
        subdivide: function(t) {
          var ab = lerp(start, startControl, t),
            bc = lerp(startControl, endControl, t),
            cd = lerp(endControl, end, t),
            abbc = lerp(ab, bc, t),
            bccd = lerp(bc, cd, t),
            dest = lerp(abbc, bccd, t);
          return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
        },
        curveTo: function(borderArgs) {
          borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
        },
        curveToReversed: function(borderArgs) {
          borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
        }
      };
    }

    function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
      if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
        corner1[0].curveTo(borderArgs);
        corner1[1].curveTo(borderArgs);
      } else {
        borderArgs.push(["line", x, y]);
      }

      if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
      }
    }

    function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
      var borderArgs = [];

      if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
        outer1[1].curveTo(borderArgs);
      } else {
        borderArgs.push(["line", borderData.c1[0], borderData.c1[1]]);
      }

      if (radius2[0] > 0 || radius2[1] > 0) {
        borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
        outer2[0].curveTo(borderArgs);
        borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
        inner2[0].curveToReversed(borderArgs);
      } else {
        borderArgs.push(["line", borderData.c2[0], borderData.c2[1]]);
        borderArgs.push(["line", borderData.c3[0], borderData.c3[1]]);
      }

      if (radius1[0] > 0 || radius1[1] > 0) {
        borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
        inner1[1].curveToReversed(borderArgs);
      } else {
        borderArgs.push(["line", borderData.c4[0], borderData.c4[1]]);
      }

      return borderArgs;
    }

    function calculateCurvePoints(bounds, borderRadius, borders) {

      var x = bounds.left,
        y = bounds.top,
        width = bounds.width,
        height = bounds.height,

        tlh = borderRadius[0][0],
        tlv = borderRadius[0][1],
        trh = borderRadius[1][0],
        trv = borderRadius[1][1],
        brv = borderRadius[2][0],
        brh = borderRadius[2][1],
        blh = borderRadius[3][0],
        blv = borderRadius[3][1],

        topWidth = width - trh,
        rightHeight = height - brv,
        bottomWidth = width - brh,
        leftHeight = height - blv;

      return {
        topLeftOuter: getCurvePoints(
          x,
          y,
          tlh,
          tlv
        ).topLeft.subdivide(0.5),

        topLeftInner: getCurvePoints(
          x + borders[3].width,
          y + borders[0].width,
          Math.max(0, tlh - borders[3].width),
          Math.max(0, tlv - borders[0].width)
        ).topLeft.subdivide(0.5),

        topRightOuter: getCurvePoints(
          x + topWidth,
          y,
          trh,
          trv
        ).topRight.subdivide(0.5),

        topRightInner: getCurvePoints(
          x + Math.min(topWidth, width + borders[3].width),
          y + borders[0].width, (topWidth > width + borders[3].width) ? 0 : trh - borders[3].width,
          trv - borders[0].width
        ).topRight.subdivide(0.5),

        bottomRightOuter: getCurvePoints(
          x + bottomWidth,
          y + rightHeight,
          brh,
          brv
        ).bottomRight.subdivide(0.5),

        bottomRightInner: getCurvePoints(
          x + Math.min(bottomWidth, width + borders[3].width),
          y + Math.min(rightHeight, height + borders[0].width),
          Math.max(0, brh - borders[1].width),
          Math.max(0, brv - borders[2].width)
        ).bottomRight.subdivide(0.5),

        bottomLeftOuter: getCurvePoints(
          x,
          y + leftHeight,
          blh,
          blv
        ).bottomLeft.subdivide(0.5),

        bottomLeftInner: getCurvePoints(
          x + borders[3].width,
          y + leftHeight,
          Math.max(0, blh - borders[3].width),
          Math.max(0, blv - borders[2].width)
        ).bottomLeft.subdivide(0.5)
      };
    }

    function getBorderClip(element, borderPoints, borders, radius, bounds) {
      var backgroundClip = getCSS(element, 'backgroundClip'),
        borderArgs = [];

      switch (backgroundClip) {
        case "content-box":
        case "padding-box":
          parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
          parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
          parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
          parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
          break;

        default:
          parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
          parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
          parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
          parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
          break;
      }

      return borderArgs;
    }

    function parseBorders(element, bounds, borders) {
      var x = bounds.left,
        y = bounds.top,
        width = bounds.width,
        height = bounds.height,
        borderSide,
        bx,
        by,
        bw,
        bh,
        borderArgs,
        // http://www.w3.org/TR/css3-background/#the-border-radius
        borderRadius = getBorderRadiusData(element),
        borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
        borderData = {
          clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
          borders: []
        };

      for (borderSide = 0; borderSide < 4; borderSide++) {

        if (borders[borderSide].width > 0) {
          bx = x;
          by = y;
          bw = width;
          bh = height - (borders[2].width);

          switch (borderSide) {
            case 0:
              // top border
              bh = borders[0].width;

              borderArgs = drawSide({
                  c1: [bx, by],
                  c2: [bx + bw, by],
                  c3: [bx + bw - borders[1].width, by + bh],
                  c4: [bx + borders[3].width, by + bh]
                }, borderRadius[0], borderRadius[1],
                borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
              break;
            case 1:
              // right border
              bx = x + width - (borders[1].width);
              bw = borders[1].width;

              borderArgs = drawSide({
                  c1: [bx + bw, by],
                  c2: [bx + bw, by + bh + borders[2].width],
                  c3: [bx, by + bh],
                  c4: [bx, by + borders[0].width]
                }, borderRadius[1], borderRadius[2],
                borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
              break;
            case 2:
              // bottom border
              by = (by + height) - (borders[2].width);
              bh = borders[2].width;

              borderArgs = drawSide({
                  c1: [bx + bw, by + bh],
                  c2: [bx, by + bh],
                  c3: [bx + borders[3].width, by],
                  c4: [bx + bw - borders[2].width, by]
                }, borderRadius[2], borderRadius[3],
                borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
              break;
            case 3:
              // left border
              bw = borders[3].width;

              borderArgs = drawSide({
                  c1: [bx, by + bh + borders[2].width],
                  c2: [bx, by],
                  c3: [bx + bw, by + borders[0].width],
                  c4: [bx + bw, by + bh]
                }, borderRadius[3], borderRadius[0],
                borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
              break;
          }

          borderData.borders.push({
            args: borderArgs,
            color: borders[borderSide].color
          });

        }
      }

      return borderData;
    }

    function createShape(ctx, args) {
      var shape = ctx.drawShape();
      args.forEach(function(border, index) {
        shape[(index === 0) ? "moveTo" : border[0] + "To"].apply(null, border.slice(1));
      });
      return shape;
    }

    function renderBorders(ctx, borderArgs, color) {
      if (color !== "transparent") {
        ctx.setVariable("fillStyle", color);
        createShape(ctx, borderArgs);
        ctx.fill();
        numDraws += 1;
      }
    }

    function renderFormValue(el, bounds, stack) {

      var valueWrap = doc.createElement('valuewrap'),
        cssPropertyArray = ['lineHeight', 'textAlign', 'fontFamily', 'color', 'fontSize', 'paddingLeft', 'paddingTop', 'width', 'height', 'border', 'borderLeftWidth', 'borderTopWidth'],
        textValue,
        textNode;

      cssPropertyArray.forEach(function(property) {
        try {
          valueWrap.style[property] = getCSS(el, property);
        } catch (e) {
          // Older IE has issues with "border"
          h2clog("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
        }
      });

      valueWrap.style.borderColor = "black";
      valueWrap.style.borderStyle = "solid";
      valueWrap.style.display = "block";
      valueWrap.style.position = "absolute";

      if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT") {
        valueWrap.style.lineHeight = getCSS(el, "height");
      }

      valueWrap.style.top = bounds.top + "px";
      valueWrap.style.left = bounds.left + "px";

      textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
      if (!textValue) {
        textValue = el.placeholder;
      }

      textNode = doc.createTextNode(textValue);

      valueWrap.appendChild(textNode);
      body.appendChild(valueWrap);

      renderText(el, textNode, stack);
      body.removeChild(valueWrap);
    }

    function drawImage(ctx) {
      ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
      numDraws += 1;
    }

    function getPseudoElement(el, which) {
      var elStyle = window.getComputedStyle(el, which);
      if (!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content") {
        return;
      }
      var content = elStyle.content + '',
        first = content.substr(0, 1);
      //strips quotes
      if (first === content.substr(content.length - 1) && first.match(/'|"/)) {
        content = content.substr(1, content.length - 2);
      }

      var isImage = content.substr(0, 3) === 'url',
        elps = document.createElement(isImage ? 'img' : 'span');

      elps.className = pseudoHide + "-before " + pseudoHide + "-after";

      Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
        elps.style[prop] = elStyle[prop];
      });

      if (isImage) {
        elps.src = _html2canvas.Util.parseBackgroundImage(content)[0].args[0];
      } else {
        elps.innerHTML = content;
      }
      return elps;
    }

    function indexedProperty(property) {
      return (isNaN(window.parseInt(property, 10)));
    }

    function injectPseudoElements(el, stack) {
      var before = getPseudoElement(el, ':before'),
        after = getPseudoElement(el, ':after');
      if (!before && !after) {
        return;
      }

      if (before) {
        el.className += " " + pseudoHide + "-before";
        el.parentNode.insertBefore(before, el);
        parseElement(before, stack, true);
        el.parentNode.removeChild(before);
        el.className = el.className.replace(pseudoHide + "-before", "").trim();
      }

      if (after) {
        el.className += " " + pseudoHide + "-after";
        el.appendChild(after);
        parseElement(after, stack, true);
        el.removeChild(after);
        el.className = el.className.replace(pseudoHide + "-after", "").trim();
      }

    }

    function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
      var offsetX = Math.round(bounds.left + backgroundPosition.left),
        offsetY = Math.round(bounds.top + backgroundPosition.top);

      ctx.createPattern(image);
      ctx.translate(offsetX, offsetY);
      ctx.fill();
      ctx.translate(-offsetX, -offsetY);
    }

    function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
      var args = [];
      args.push(["line", Math.round(left), Math.round(top)]);
      args.push(["line", Math.round(left + width), Math.round(top)]);
      args.push(["line", Math.round(left + width), Math.round(height + top)]);
      args.push(["line", Math.round(left), Math.round(height + top)]);
      createShape(ctx, args);
      ctx.save();
      ctx.clip();
      renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
      ctx.restore();
    }

    function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
      renderRect(
        ctx,
        backgroundBounds.left,
        backgroundBounds.top,
        backgroundBounds.width,
        backgroundBounds.height,
        bgcolor
      );
    }

    function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
      var backgroundSize = _html2canvas.Util.BackgroundSize(el, bounds, image, imageIndex),
        backgroundPosition = _html2canvas.Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
        backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(function(value) {
          return value.trim();
        });

      image = resizeImage(image, backgroundSize);

      backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

      switch (backgroundRepeat) {
        case "repeat-x":
          backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
            bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
          break;

        case "repeat-y":
          backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
            bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
          break;

        case "no-repeat":
          backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
            bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
          break;

        default:
          renderBackgroundRepeat(ctx, image, backgroundPosition, {
            top: bounds.top,
            left: bounds.left,
            width: image.width,
            height: image.height
          });
          break;
      }
    }

    function renderBackgroundImage(element, bounds, ctx) {
      var backgroundImage = getCSS(element, "backgroundImage"),
        backgroundImages = _html2canvas.Util.parseBackgroundImage(backgroundImage),
        image,
        imageIndex = backgroundImages.length;

      while (imageIndex--) {
        backgroundImage = backgroundImages[imageIndex];

        if (!backgroundImage.args || backgroundImage.args.length === 0) {
          continue;
        }

        var key = backgroundImage.method === 'url' ?
          backgroundImage.args[0] :
          backgroundImage.value;

        image = loadImage(key);

        // TODO add support for background-origin
        if (image) {
          renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
        } else {
          h2clog("html2canvas: Error loading background:", backgroundImage);
        }
      }
    }

    function resizeImage(image, bounds) {
      if (image.width === bounds.width && image.height === bounds.height) {
        return image;
      }

      var ctx, canvas = doc.createElement('canvas');
      canvas.width = bounds.width;
      canvas.height = bounds.height;
      ctx = canvas.getContext("2d");
      drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height);
      return canvas;
    }

    function setOpacity(ctx, element, parentStack) {
      var opacity = getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1);
      ctx.setVariable("globalAlpha", opacity);
      return opacity;
    }

    function createStack(element, parentStack, bounds) {

      var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width, (!parentStack) ? documentHeight() : bounds.height),
        stack = {
          ctx: ctx,
          zIndex: setZ(getCSS(element, "zIndex"), (parentStack) ? parentStack.zIndex : null),
          opacity: setOpacity(ctx, element, parentStack),
          cssPosition: getCSS(element, "position"),
          borders: getBorderData(element),
          clip: (parentStack && parentStack.clip) ? _html2canvas.Util.Extend({}, parentStack.clip) : null
        };

      // TODO correct overflow for absolute content residing under a static position
      if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false) {
        stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
      }

      stack.zIndex.children.push(stack);

      return stack;
    }

    function getBackgroundBounds(borders, bounds, clip) {
      var backgroundBounds = {
        left: bounds.left + borders[3].width,
        top: bounds.top + borders[0].width,
        width: bounds.width - (borders[1].width + borders[3].width),
        height: bounds.height - (borders[0].width + borders[2].width)
      };

      if (clip) {
        backgroundBounds = clipBounds(backgroundBounds, clip);
      }

      return backgroundBounds;
    }

    function renderElement(element, parentStack, pseudoElement) {
      var bounds = _html2canvas.Util.Bounds(element),
        image,
        bgcolor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor"),
        stack = createStack(element, parentStack, bounds),
        borders = stack.borders,
        ctx = stack.ctx,
        backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
        borderData = parseBorders(element, bounds, borders);

      createShape(ctx, borderData.clip);

      ctx.save();
      ctx.clip();

      if (backgroundBounds.height > 0 && backgroundBounds.width > 0) {
        renderBackgroundColor(ctx, bounds, bgcolor);
        renderBackgroundImage(element, backgroundBounds, ctx);
      }

      ctx.restore();

      borderData.borders.forEach(function(border) {
        renderBorders(ctx, border.args, border.color);
      });

      if (!pseudoElement) {
        injectPseudoElements(element, stack);
      }

      switch (element.nodeName) {
        case "IMG":
          if ((image = loadImage(element.getAttribute('src')))) {
            renderImage(ctx, element, image, bounds, borders);
          } else {
            h2clog("html2canvas: Error loading <img>:" + element.getAttribute('src'));
          }
          break;
        case "INPUT":
          // TODO add all relevant type's, i.e. HTML5 new stuff
          // todo add support for placeholder attribute for browsers which support it
          if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder).length > 0) {
            renderFormValue(element, bounds, stack);
          }
          break;
        case "TEXTAREA":
          if ((element.value || element.placeholder || "").length > 0) {
            renderFormValue(element, bounds, stack);
          }
          break;
        case "SELECT":
          if ((element.options || element.placeholder || "").length > 0) {
            renderFormValue(element, bounds, stack);
          }
          break;
        case "LI":
          renderListItem(element, stack, backgroundBounds);
          break;
        case "CANVAS":
          renderImage(ctx, element, element, bounds, borders);
          break;
      }

      return stack;
    }

    function isElementVisible(element) {
      return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
    }

    function parseElement(el, stack, pseudoElement) {

      if (isElementVisible(el)) {
        stack = renderElement(el, stack, pseudoElement) || stack;
        if (!ignoreElementsRegExp.test(el.nodeName)) {
          _html2canvas.Util.Children(el).forEach(function(node) {
            if (node.nodeType === 1) {
              parseElement(node, stack, pseudoElement);
            } else if (node.nodeType === 3) {
              renderText(el, node, stack);
            }
          });
        }
      }
    }

    function svgDOMRender(body, stack) {
      var img = new Image(),
        docWidth = documentWidth(),
        docHeight = documentHeight(),
        html = "";

      function parseDOM(el) {
        var children = _html2canvas.Util.Children(el),
          len = children.length,
          attr,
          a,
          alen,
          elm,
          i;
        for (i = 0; i < len; i += 1) {
          elm = children[i];
          if (elm.nodeType === 3) {
            // Text node
            html += elm.nodeValue.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          } else if (elm.nodeType === 1) {
            // Element
            if (!/^(script|meta|title)$/.test(elm.nodeName.toLowerCase())) {

              html += "<" + elm.nodeName.toLowerCase();

              // add attributes
              if (elm.hasAttributes()) {
                attr = elm.attributes;
                alen = attr.length;
                for (a = 0; a < alen; a += 1) {
                  html += " " + attr[a].name + '="' + attr[a].value + '"';
                }
              }


              html += '>';

              parseDOM(elm);


              html += "</" + elm.nodeName.toLowerCase() + ">";
            }
          }

        }

      }

      parseDOM(body);
      img.src = [
        "data:image/svg+xml,",
        "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + docWidth + "' height='" + docHeight + "'>",
        "<foreignObject width='" + docWidth + "' height='" + docHeight + "'>",
        "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>",
        html.replace(/\#/g, "%23"),
        "</html>",
        "</foreignObject>",
        "</svg>"
      ].join("");

      img.onload = function() {
        stack.svgRender = img;
      };

    }

    function init() {
      var stack = renderElement(element, null);

      if (support.svgRendering) {
        svgDOMRender(document.documentElement, stack);
      }

      Array.prototype.slice.call(element.children, 0).forEach(function(childElement) {
        parseElement(childElement, stack);
      });

      stack.backgroundColor = getCSS(document.documentElement, "backgroundColor");
      body.removeChild(hidePseudoElements);
      return stack;
    }

    return init();
  };

  function h2czContext(zindex) {
    return {
      zindex: zindex,
      children: []
    };
  }
  _html2canvas.Preload = function(options) {

    var images = {
        numLoaded: 0, // also failed are counted here
        numFailed: 0,
        numTotal: 0,
        cleanupDone: false
      },
      pageOrigin,
      methods,
      i,
      count = 0,
      element = options.elements[0] || document.body,
      doc = element.ownerDocument,
      domImages = doc.images, // TODO probably should limit it to images present in the element only
      imgLen = domImages.length,
      link = doc.createElement("a"),
      supportCORS = (function(img) {
        return (img.crossOrigin !== undefined);
      })(new Image()),
      timeoutTimer;

    link.href = window.location.href;
    pageOrigin = link.protocol + link.host;

    function isSameOrigin(url) {
      link.href = url;
      link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
      var origin = link.protocol + link.host;
      return (origin === pageOrigin);
    }

    function start() {
      h2clog("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
      if (!images.firstRun && images.numLoaded >= images.numTotal) {
        h2clog("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

        if (typeof options.complete === "function") {
          options.complete(images);
        }

      }
    }

    // TODO modify proxy to serve images with CORS enabled, where available
    function proxyGetImage(url, img, imageObj) {
      var callback_name,
        scriptUrl = options.proxy,
        script;

      link.href = url;
      url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

      callback_name = 'html2canvas_' + (count++);
      imageObj.callbackname = callback_name;

      if (scriptUrl.indexOf("?") > -1) {
        scriptUrl += "&";
      } else {
        scriptUrl += "?";
      }
      scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
      script = doc.createElement("script");

      window[callback_name] = function(a) {
        if (a.substring(0, 6) === "error:") {
          imageObj.succeeded = false;
          images.numLoaded++;
          images.numFailed++;
          start();
        } else {
          setImageLoadHandlers(img, imageObj);
          img.src = a;
        }
        window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
        try {
          delete window[callback_name]; // for all browser that support this
        } catch (ex) {}
        script.parentNode.removeChild(script);
        script = null;
        delete imageObj.script;
        delete imageObj.callbackname;
      };

      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", scriptUrl);
      imageObj.script = script;
      window.document.body.appendChild(script);

    }

    function loadPseudoElement(element, type) {
      var style = window.getComputedStyle(element, type),
        content = style.content;
      if (content.substr(0, 3) === 'url') {
        methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
      }
      loadBackgroundImages(style.backgroundImage, element);
    }

    function loadPseudoElementImages(element) {
      loadPseudoElement(element, ":before");
      loadPseudoElement(element, ":after");
    }

    function loadGradientImage(backgroundImage, bounds) {
      var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

      if (img !== undefined) {
        images[backgroundImage] = {
          img: img,
          succeeded: true
        };
        images.numTotal++;
        images.numLoaded++;
        start();
      }
    }

    function invalidBackgrounds(background_image) {
      return (background_image && background_image.method && background_image.args && background_image.args.length > 0);
    }

    function loadBackgroundImages(background_image, el) {
      var bounds;

      _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
        if (background_image.method === 'url') {
          methods.loadImage(background_image.args[0]);
        } else if (background_image.method.match(/\-?gradient$/)) {
          if (bounds === undefined) {
            bounds = _html2canvas.Util.Bounds(el);
          }
          loadGradientImage(background_image.value, bounds);
        }
      });
    }

    function getImages(el) {
      var elNodeType = false;

      // Firefox fails with permission denied on pages with iframes
      try {
        _html2canvas.Util.Children(el).forEach(function(img) {
          getImages(img);
        });
      } catch (e) {}

      try {
        elNodeType = el.nodeType;
      } catch (ex) {
        elNodeType = false;
        h2clog("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
      }

      if (elNodeType === 1 || elNodeType === undefined) {
        loadPseudoElementImages(el);
        try {
          loadBackgroundImages(_html2canvas.Util.getCSS(el, 'backgroundImage'), el);
        } catch (e) {
          h2clog("html2canvas: failed to get background-image - Exception: " + e.message);
        }
        loadBackgroundImages(el);
      }
    }

    function setImageLoadHandlers(img, imageObj) {
      img.onload = function() {
        if (imageObj.timer !== undefined) {
          // CORS succeeded
          window.clearTimeout(imageObj.timer);
        }

        images.numLoaded++;
        imageObj.succeeded = true;
        img.onerror = img.onload = null;
        start();
      };
      img.onerror = function() {
        if (img.crossOrigin === "anonymous") {
          // CORS failed
          window.clearTimeout(imageObj.timer);

          // let's try with proxy instead
          if (options.proxy) {
            var src = img.src;
            img = new Image();
            imageObj.img = img;
            img.src = src;

            proxyGetImage(img.src, img, imageObj);
            return;
          }
        }

        images.numLoaded++;
        images.numFailed++;
        imageObj.succeeded = false;
        img.onerror = img.onload = null;
        start();
      };
    }

    methods = {
      loadImage: function(src) {
        var img, imageObj;
        if (src && images[src] === undefined) {
          img = new Image();
          if (src.match(/data:image\/.*;base64,/i)) {
            img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            setImageLoadHandlers(img, imageObj);
          } else if (isSameOrigin(src) || options.allowTaint === true) {
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            setImageLoadHandlers(img, imageObj);
            img.src = src;
          } else if (supportCORS && !options.allowTaint && options.useCORS) {
            // attempt to load with CORS

            img.crossOrigin = "anonymous";
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            setImageLoadHandlers(img, imageObj);
            img.src = src;

            // work around for https://bugs.webkit.org/show_bug.cgi?id=80028
            img.customComplete = function() {
              if (!this.img.complete) {
                this.timer = window.setTimeout(this.img.customComplete, 100);
              } else {
                this.img.onerror();
              }
            }.bind(imageObj);
            img.customComplete();

          } else if (options.proxy) {
            imageObj = images[src] = {
              img: img
            };
            images.numTotal++;
            proxyGetImage(src, img, imageObj);
          }
        }

      },
      cleanupDOM: function(cause) {
        var img, src;
        if (!images.cleanupDone) {
          if (cause && typeof cause === "string") {
            h2clog("html2canvas: Cleanup because: " + cause);
          } else {
            h2clog("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
          }

          for (src in images) {
            if (images.hasOwnProperty(src)) {
              img = images[src];
              if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
                // cancel proxy image request
                window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
                try {
                  delete window[img.callbackname]; // for all browser that support this
                } catch (ex) {}
                if (img.script && img.script.parentNode) {
                  img.script.setAttribute("src", "about:blank"); // try to cancel running request
                  img.script.parentNode.removeChild(img.script);
                }
                images.numLoaded++;
                images.numFailed++;
                h2clog("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
              }
            }
          }

          // cancel any pending requests
          if (window.stop !== undefined) {
            window.stop();
          } else if (document.execCommand !== undefined) {
            document.execCommand("Stop", false);
          }
          if (document.close !== undefined) {
            document.close();
          }
          images.cleanupDone = true;
          if (!(cause && typeof cause === "string")) {
            start();
          }
        }
      },

      renderingDone: function() {
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
      }
    };

    if (options.timeout > 0) {
      timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
    }

    h2clog('html2canvas: Preload starts: finding background-images');
    images.firstRun = true;

    getImages(element);

    h2clog('html2canvas: Preload: Finding images');
    // load <img> images
    for (i = 0; i < imgLen; i += 1) {
      methods.loadImage(domImages[i].getAttribute("src"));
    }

    images.firstRun = false;
    h2clog('html2canvas: Preload: Done.');
    if (images.numTotal === images.numLoaded) {
      start();
    }

    return methods;

  };

  function h2cRenderContext(width, height) {
    var storage = [];
    return {
      storage: storage,
      width: width,
      height: height,
      clip: function() {
        storage.push({
          type: "function",
          name: "clip",
          'arguments': arguments
        });
      },
      translate: function() {
        storage.push({
          type: "function",
          name: "translate",
          'arguments': arguments
        });
      },
      fill: function() {
        storage.push({
          type: "function",
          name: "fill",
          'arguments': arguments
        });
      },
      save: function() {
        storage.push({
          type: "function",
          name: "save",
          'arguments': arguments
        });
      },
      restore: function() {
        storage.push({
          type: "function",
          name: "restore",
          'arguments': arguments
        });
      },
      fillRect: function() {
        storage.push({
          type: "function",
          name: "fillRect",
          'arguments': arguments
        });
      },
      createPattern: function() {
        storage.push({
          type: "function",
          name: "createPattern",
          'arguments': arguments
        });
      },
      drawShape: function() {

        var shape = [];

        storage.push({
          type: "function",
          name: "drawShape",
          'arguments': shape
        });

        return {
          moveTo: function() {
            shape.push({
              name: "moveTo",
              'arguments': arguments
            });
          },
          lineTo: function() {
            shape.push({
              name: "lineTo",
              'arguments': arguments
            });
          },
          arcTo: function() {
            shape.push({
              name: "arcTo",
              'arguments': arguments
            });
          },
          bezierCurveTo: function() {
            shape.push({
              name: "bezierCurveTo",
              'arguments': arguments
            });
          },
          quadraticCurveTo: function() {
            shape.push({
              name: "quadraticCurveTo",
              'arguments': arguments
            });
          }
        };

      },
      drawImage: function() {
        storage.push({
          type: "function",
          name: "drawImage",
          'arguments': arguments
        });
      },
      fillText: function() {
        storage.push({
          type: "function",
          name: "fillText",
          'arguments': arguments
        });
      },
      setVariable: function(variable, value) {
        storage.push({
          type: "variable",
          name: variable,
          'arguments': value
        });
      }
    };
  }
  _html2canvas.Renderer = function(parseQueue, options) {

    function createRenderQueue(parseQueue) {
      var queue = [];

      var sortZ = function(zStack) {
        var subStacks = [],
          stackValues = [];

        zStack.children.forEach(function(stackChild) {
          if (stackChild.children && stackChild.children.length > 0) {
            subStacks.push(stackChild);
            stackValues.push(stackChild.zindex);
          } else {
            queue.push(stackChild);
          }
        });

        stackValues.sort(function(a, b) {
          return a - b;
        });

        stackValues.forEach(function(zValue) {
          var index;

          subStacks.some(function(stack, i) {
            index = i;
            return (stack.zindex === zValue);
          });
          sortZ(subStacks.splice(index, 1)[0]);

        });
      };

      sortZ(parseQueue.zIndex);

      return queue;
    }

    function getRenderer(rendererName) {
      var renderer;

      if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
        renderer = _html2canvas.Renderer[rendererName](options);
      } else if (typeof rendererName === "function") {
        renderer = rendererName(options);
      } else {
        throw new Error("Unknown renderer");
      }

      if (typeof renderer !== "function") {
        throw new Error("Invalid renderer defined");
      }
      return renderer;
    }

    return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue), _html2canvas);
  };

  _html2canvas.Util.Support = function(options, doc) {

    function supportSVGRendering() {
      var img = new Image(),
        canvas = doc.createElement("canvas"),
        ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
      if (ctx === false) {
        return false;
      }
      canvas.width = canvas.height = 10;
      img.src = [
        "data:image/svg+xml,",
        "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
        "<foreignObject width='10' height='10'>",
        "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
        "sup",
        "</div>",
        "</foreignObject>",
        "</svg>"
      ].join("");
      try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
      } catch (e) {
        return false;
      }
      h2clog('html2canvas: Parse: SVG powered rendering available');
      return true;
    }

    // Test whether we can use ranges to measure bounding boxes
    // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

    function supportRangeBounds() {
      var r, testElement, rangeBounds, rangeHeight, support = false;

      if (doc.createRange) {
        r = doc.createRange();
        if (r.getBoundingClientRect) {
          testElement = doc.createElement('boundtest');
          testElement.style.height = "123px";
          testElement.style.display = "block";
          doc.body.appendChild(testElement);

          r.selectNode(testElement);
          rangeBounds = r.getBoundingClientRect();
          rangeHeight = rangeBounds.height;

          if (rangeHeight === 123) {
            support = true;
          }
          doc.body.removeChild(testElement);
        }
      }

      return support;
    }

    return {
      rangeBounds: supportRangeBounds(),
      svgRendering: options.svgRendering && supportSVGRendering()
    };
  };
  window.html2canvas = function(elements, opts) {
    elements = (elements.length) ? elements : [elements];
    var queue,
      canvas,
      options = {
        // general
        logging: false,
        elements: elements,
        background: "#fff",

        // preload options
        proxy: null,
        timeout: 0, // no timeout
        useCORS: false, // try to load images as CORS (where available), before falling back to proxy
        allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

        // parse options
        svgRendering: false, // use svg powered rendering where available (FF11+)
        ignoreElements: "IFRAME|OBJECT|PARAM",
        useOverflow: true,
        letterRendering: false,
        chinese: false,

        // render options

        width: null,
        height: null,
        taintTest: true, // do a taint test with all images before applying to canvas
        renderer: "Canvas"
      };

    options = _html2canvas.Util.Extend(opts, options);

    _html2canvas.logging = options.logging;
    options.complete = function(images) {

      if (typeof options.onpreloaded === "function") {
        if (options.onpreloaded(images) === false) {
          return;
        }
      }
      queue = _html2canvas.Parse(images, options);

      if (typeof options.onparsed === "function") {
        if (options.onparsed(queue) === false) {
          return;
        }
      }

      canvas = _html2canvas.Renderer(queue, options);

      if (typeof options.onrendered === "function") {
        options.onrendered(canvas);
      }


    };

    // for pages without images, we still want this to be async, i.e. return methods before executing
    window.setTimeout(function() {
      _html2canvas.Preload(options);
    }, 0);

    return {
      render: function(queue, opts) {
        return _html2canvas.Renderer(queue, _html2canvas.Util.Extend(opts, options));
      },
      parse: function(images, opts) {
        return _html2canvas.Parse(images, _html2canvas.Util.Extend(opts, options));
      },
      preload: function(opts) {
        return _html2canvas.Preload(_html2canvas.Util.Extend(opts, options));
      },
      log: h2clog
    };
  };

  window.html2canvas.log = h2clog; // for renderers
  window.html2canvas.Renderer = {
    Canvas: undefined // We are assuming this will be used
  };
  _html2canvas.Renderer.Canvas = function(options) {

    options = options || {};

    var doc = document,
      safeImages = [],
      testCanvas = document.createElement("canvas"),
      testctx = testCanvas.getContext("2d"),
      canvas = options.canvas || doc.createElement('canvas');


    function createShape(ctx, args) {
      ctx.beginPath();
      args.forEach(function(arg) {
        ctx[arg.name].apply(ctx, arg['arguments']);
      });
      ctx.closePath();
    }

    function safeImage(item) {
      if (safeImages.indexOf(item['arguments'][0].src) === -1) {
        testctx.drawImage(item['arguments'][0], 0, 0);
        try {
          testctx.getImageData(0, 0, 1, 1);
        } catch (e) {
          testCanvas = doc.createElement("canvas");
          testctx = testCanvas.getContext("2d");
          return false;
        }
        safeImages.push(item['arguments'][0].src);
      }
      return true;
    }

    function isTransparent(backgroundColor) {
      return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
    }

    function renderItem(ctx, item) {
      switch (item.type) {
        case "variable":
          ctx[item.name] = item['arguments'];
          break;
        case "function":
          if (item.name === "createPattern") {
            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
              try {
                ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
              } catch (e) {
                h2clog("html2canvas: Renderer: Error creating pattern", e.message);
              }
            }
          } else if (item.name === "drawShape") {
            createShape(ctx, item['arguments']);
          } else if (item.name === "drawImage") {
            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
              if (!options.taintTest || (options.taintTest && safeImage(item))) {
                ctx.drawImage.apply(ctx, item['arguments']);
              }
            }
          } else {
            ctx[item.name].apply(ctx, item['arguments']);
          }
          break;
      }
    }

    return function(zStack, options, doc, queue, _html2canvas) {

      var ctx = canvas.getContext("2d"),
        storageContext,
        i,
        queueLen,
        newCanvas,
        bounds,
        fstyle;

      canvas.width = canvas.style.width = options.width || zStack.ctx.width;
      canvas.height = canvas.style.height = options.height || zStack.ctx.height;

      fstyle = ctx.fillStyle;
      ctx.fillStyle = (isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : zStack.backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = fstyle;


      if (options.svgRendering && zStack.svgRender !== undefined) {
        // TODO: enable async rendering to support this
        ctx.drawImage(zStack.svgRender, 0, 0);
      } else {
        for (i = 0, queueLen = queue.length; i < queueLen; i += 1) {
          storageContext = queue.splice(0, 1)[0];
          storageContext.canvasPosition = storageContext.canvasPosition || {};

          // set common settings for canvas
          ctx.textBaseline = "bottom";

          if (storageContext.clip) {
            ctx.save();
            ctx.beginPath();
            // console.log(storageContext);
            ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
            ctx.clip();
          }

          if (storageContext.ctx.storage) {
            storageContext.ctx.storage.forEach(renderItem.bind(null, ctx));
          }

          if (storageContext.clip) {
            ctx.restore();
          }
        }
      }

      h2clog("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

      queueLen = options.elements.length;

      if (queueLen === 1) {
        if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
          // crop image to the bounds of selected (single) element
          bounds = _html2canvas.Util.Bounds(options.elements[0]);
          newCanvas = doc.createElement('canvas');
          newCanvas.width = bounds.width;
          newCanvas.height = bounds.height;
          ctx = newCanvas.getContext("2d");

          ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
          canvas = null;
          return newCanvas;
        }
      }

      return canvas;
    };
  };
})(window, document);


/**
  @license html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */
/*
 * jQuery helper plugin for examples and tests
 */
(function( $ ){
    $.fn.html2canvas = function(options) {
        if (options && options.profile && window.console && window.console.profile) {
            console.profile();
        }
        var date = new Date(),
        html2obj,
        $message = null,
        timeoutTimer = false,
        timer = date.getTime();
        options = options || {};

        options.onrendered = options.onrendered || function( canvas ) {
            var $canvas = $(canvas),
            finishTime = new Date();

            if (options && options.profile && window.console && window.console.profileEnd) {
                console.profileEnd();
            }
            $canvas.css({
                position: 'absolute',
                left: 0,
                top: 0
            }).appendTo(document.body);
            $canvas.siblings().toggle();

            $(window).click(function(){
                $canvas.toggle().siblings().toggle();
                throwMessage("Canvas Render " + ($canvas.is(':visible') ? "visible" : "hidden"));
            });
            throwMessage('Screenshot created in '+ ((finishTime.getTime()-timer)) + " ms<br />",4000);

            // test if canvas is read-able
            try {
                $canvas[0].toDataURL();
            } catch(e) {
                if ($canvas[0].nodeName.toLowerCase() === "canvas") {
                    // TODO, maybe add a bit less offensive way to present this, but still something that can easily be noticed
                    alert("Canvas is tainted, unable to read data");
                }
            }
        };

        html2obj = html2canvas(this, options);

        function throwMessage(msg,duration){
            window.clearTimeout(timeoutTimer);
            timeoutTimer = window.setTimeout(function(){
                $message.fadeOut(function(){
                    $message.remove();
                    $message = null;
                });
            },duration || 2000);
            if ($message)
                $message.remove();
            $message = $('<div />').html(msg).css({
                margin:0,
                padding:10,
                background: "#000",
                opacity:0.7,
                position:"fixed",
                top:10,
                right:10,
                fontFamily: 'Tahoma',
                color:'#fff',
                fontSize:12,
                borderRadius:12,
                width:'auto',
                height:'auto',
                textAlign:'center',
                textDecoration:'none',
                display:'none'
            }).appendTo(document.body).fadeIn();
            html2obj.log(msg);
        }
    };
})( jQuery );

