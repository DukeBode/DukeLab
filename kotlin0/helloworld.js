if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'helloworld'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'helloworld'.");
}
var helloworld = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello,World!');
  }
  var package$com = _.com || (_.com = {});
  var package$easy = package$com.easy || (package$com.easy = {});
  var package$kotlin = package$easy.kotlin || (package$easy.kotlin = {});
  var package$chaptor1 = package$kotlin.chaptor1 || (package$kotlin.chaptor1 = {});
  package$chaptor1.main_kand9s$ = main;
  Kotlin.defineModule('helloworld', _);
  main([]);
  return _;
}(typeof helloworld === 'undefined' ? {} : helloworld, kotlin);
