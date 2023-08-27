Object.prototype.rotate = function(d) {
  var s = "rotate(" + d + "deg)";
  if (this.style) { // regular DOM Object
      this.style.MozTransform = s
      this.style.WebkitTransform = s;
      this.style.OTransform = s;
      this.style.transform = s;
  } else if (this.css) { // JQuery Object
      this.css("-moz-transform", s);
      this.css("-webkit-transform", s);
      this.css("-0-transform", s);
      this.css("transform", s);
  }
  this.setAttribute("rotation", d);
}

for(let i = 0; i < 359; i++) {
  document.getElementById("test1").rotate(i);
  await new Promise(r => setTimeout(r, 2000));
}

document.getElementById("test2").rotate(180);