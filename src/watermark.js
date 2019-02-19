(function(global, factory) {
  typeof exports === 'object' && module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory()) : global.WaterMark = factory(); 
}(window, function() {

  const defaultSettings = {
    size: '30px',
    color: '#e1e1e1',
    id: 'watermarkdrawcanvas',
    density: 200,
    clarity: 1,
    tip: '您的浏览器不支持 canvas'
  };

  class WaterMark {
    constructor(options) {
      this.settings = Object.assign(defaultSettings, options);

      // 生成 canvas
      this._createCanvas();
    }

    _createCanvas() {
      const settings = this.settings;
      let canvas = document.createElement('canvas');

      canvas.id = settings.id;
      canvas.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: -100;';
      canvas.width = window.screen.width;
      canvas.height = window.screen.height;

      this.canvas = canvas;
    }

    render(text) {
      window.document.documentElement.appendChild(this.canvas);
    }

    clear() {

    }

    delete() {

    }
  }

  return WaterMark;
}));