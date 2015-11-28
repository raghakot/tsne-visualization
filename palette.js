var Palette;
Palette = (function() {
	"use strict";

  Palette.BACKGROUND = new THREE.Color(0x202020);
  Palette.HIGHLIGHT = new THREE.Color(0xFFFFFF);
  Palette.prototype.colors = null;

  function Palette(size) {
    this.colors = new Array();
    this.generate(size);
  }

  Palette.prototype.generate = function(size) {
    var color, hue, i, lightness, saturation, step;
    hue = 0;
    saturation = 0.7;
    lightness = 0.45;
    step = 1 / size;
    for (i = 0; i < size; i++) {
      hue = (i + 1) * step;
      color = new THREE.Color();
      color.setHSL(hue, saturation, lightness);
      this.colors.push(color);
    }
  };

  Palette.prototype.getColors = function() {
    return this.colors;
  };

  return Palette;
})();
