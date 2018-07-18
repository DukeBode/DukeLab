(function(){
      
  var createAppHandler = function() {
    return !function(e){function t(a){if(o[a])return o[a].exports;var s=o[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){var a=o(10);$app_define$("@app-application/app",[],function(e,t,o){a(o,t,e),t.__esModule&&t.default&&(o.exports=t.default)}),$app_bootstrap$("@app-application/app",{packagerVersion:"0.0.5"})},10:function(e,t,o){e.exports=function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(11),r=s(n);t.default={showMenu:r.default.showMenu,createShortcut:r.default.createShortcut},(t.default||e.exports).manifest={package:"com.application.demo",name:"工大·易班",versionName:"1.0.0",versionCode:"1",minPlatformVersion:"101",icon:"/Common/logo.png",features:[{name:"system.prompt"},{name:"system.router"},{name:"system.shortcut"},{name:"system.webview"},{name:"system.vibrator"}],permissions:[{origin:"*"}],config:{logLevel:"debug"},router:{entry:"Demo",pages:{Demo:{component:"index"},DemoDetail:{component:"index"},About:{component:"index"}}},display:{titleBarBackgroundColor:"#f2f2f2",titleBarTextColor:"#414141",menu:!0,pages:{Demo:{titleBarText:"工大·易班",menu:!1},DemoDetail:{titleBarText:"详情页"},About:{menu:!1}}}}}},11:function(e,t){"use strict";function o(){var e=$app_require$("@app-module/system.prompt"),t=$app_require$("@app-module/system.router"),o=$app_require$("@app-module/system.app").getInfo();e.showContextMenu({itemList:["保存桌面","关于","取消"],success:function(s){switch(s.index){case 0:a();break;case 1:t.push({uri:"/About",params:{name:o.name,icon:o.icon}});break;case 2:break;default:e.showToast({message:"error"})}}})}function a(){var e=$app_require$("@app-module/system.prompt"),t=$app_require$("@app-module/system.shortcut");t.hasInstalled({success:function(o){o?e.showToast({message:"已创建桌面图标"}):t.install({success:function(){e.showToast({message:"成功创建桌面图标"})},fail:function(t,o){e.showToast({message:o+": "+t})}})}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={showMenu:o,createShortcut:a}}});
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.application.demo","name":"工大·易班","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"101","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.webview"},{"name":"system.vibrator"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"Demo":{"titleBarText":"工大·易班","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}};
  }
})();