(function(global, factory) {
  typeof exports === 'object' && module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory()) : global.WaterMark = factory(); 
}(window, function() {
  class WaterMark {
    constructor(options) {
      console.log(options);
    }
  }

  return WaterMark;
}));