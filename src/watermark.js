(function (global, factory) {
  typeof exports === 'object' && module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory()) : global.WaterMark = factory();
}(window, function () {

  const defaultSettings = {
    size: '30px',
    color: '#e1e1e1',
    id: 'watermarkdrawcanvas',
    density: 200,
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
      const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        ratio = this._getPixelRatio(ctx);

      canvas.id = settings.id;
      canvas.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; z-index: -100;';
      canvas.width = window.screen.width;
      canvas.height = window.screen.height;
      canvas.innerHTML = settings.tip;
      canvas.width = window.screen.width * ratio;
      canvas.height = window.screen.height * ratio;

      this.canvas = canvas;
      this.ctx = ctx;
      this.ratio = ratio;
    }

    _getPixelRatio(context) {
      var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;

      return (window.devicePixelRatio || 1) / backingStore;
    }

    render(text) {
      this.clear();
      this._createCanvas();

      const settings = this.settings,
        size = parseInt(settings.size, 10),
        color = settings.color,
        density = parseInt(settings.density, 10),
        ratio = this.ratio,
        ctx = this.ctx;

      const distance = 10;
      const row = window.screen.width * ratio / density + distance;
      const col = window.screen.height * ratio * 1.5 / density;

      ctx.rotate(-15 * Math.PI / 180);

      for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          ctx.fillStyle = color;
          ctx.font = size + 'px Arial';
          ctx.fillText(text, density * (i - distance / 2), j * density);
        }
      }

      window.document.documentElement.appendChild(this.canvas);
    }

    clear() {
      const el = document.getElementById(this.settings.id);

      if (el && el.nodeType === 1) {
        el.remove();
        this.canvas = null;
        this.ctx = null;
      }
    }
  }

  return WaterMark;
}));