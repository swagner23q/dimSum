"use strict";jQuery.fn.brightness=function(){var t=this.css("background-color"),r=0,n=0;if(null!=t&&t.length){if(r=t.match(/^rgb(?:a)?\(([0-9]{1,3}),\s([0-9]{1,3}),\s([0-9]{1,3})(?:,\s)?([0-9]{1,3})?\)$/),null!=r){if("0"!==r[4])return n=(2.99*r[1]+5.87*r[2]+1.14*r[3])/1e3,n>=1.81?"light":"dark";if(this.parent().length)return this.parent().brightness()}}else if(this.parent().length)return this.parent().brightness()};
//# sourceMappingURL=source-maps/jquery.brightness.js.map
