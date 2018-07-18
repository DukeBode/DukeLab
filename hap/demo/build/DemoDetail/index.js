(function(){
      
  var createPageHandler = function() {
    return !function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var n=o(7),r=o(8),a=o(9);$app_define$("@app-component/index",[],function(t,e,o){a(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=n,o.exports.style=r}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},,,,,,,function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"text",attr:{value:function(){return this.text}},classList:["title"]}]}},function(t,e){t.exports={".demo-page":{flexDirection:"column",justifyContent:"center",alignItems:"center"},".title":{fontSize:"40px",textAlign:"center"}}},function(t,e){t.exports=function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default={private:{text:"欢迎打开详情页"},onMenuPress:function(){this.$app.$def.showMenu()}};var r=e.default||t.exports,a=["public","protected","private"];if(r.data&&a.some(function(t){return r[t]}))throw new Error('页面VM对象中的属性data不可与"'+a.join(",")+'"同时存在，请使用private替换data名称');r.data||(r.data={},r._descriptor={},a.forEach(function(t){var e=n(r[t]);if("object"===e){r.data=Object.assign(r.data,r[t]);for(var o in r[t])r._descriptor[o]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();