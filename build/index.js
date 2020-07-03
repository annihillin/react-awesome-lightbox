module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var o=n(0),r=n.n(o);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){var e=0,n=0;return t.touches&&t.touches.length?(e=t.touches[0].pageX,n=t.touches[0].pageY):(e=t.pageX,n=t.pageY),{x:e,y:n}}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,t);var e,n,o,a=l(s);function s(){var t;u(this,s);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return m(f(t=a.call.apply(a,[this].concat(n))),"moving",!1),m(f(t),"initX",0),m(f(t),"initY",0),m(f(t),"lastX",0),m(f(t),"lastY",0),m(f(t),"state",{x:0,y:0,zoom:1,rotate:0}),m(f(t),"createTransform",(function(t,e,n,o){return"translate3d(".concat(t,"px,").concat(e,"px,0px) scale(").concat(n,") rotate(").concat(o,"deg)")})),m(f(t),"stopSideEffect",(function(t){return t.stopPropagation()})),m(f(t),"preventDefault",(function(t){return t.preventDefault()})),m(f(t),"startMove",(function(e){t.moving=!0,t.preventDefault(e);var n=v(e);t.initX=n.x-t.lastX,t.initY=n.y-t.lastY})),m(f(t),"duringMove",(function(e){if(!t.moving)return!1;t.preventDefault(e);var n=v(e);t.lastX=n.x-t.initX,t.lastY=n.y-t.initY,t.setState({x:n.x-t.initX,y:n.y-t.initY})})),m(f(t),"endMove",(function(e){t.preventDefault(e),t.moving=!1})),m(f(t),"applyZoom",(function(e){var n=t.props.zoomStep,o=void 0===n?.3:n;switch(e){case"in":t.setState({zoom:t.state.zoom+o});break;case"out":t.setState({zoom:t.state.zoom-o});break;default:console.error("Wrong function invocation")}})),m(f(t),"applyRotate",(function(e){switch(e){case"cw":t.setState({rotate:t.state.rotate+90});break;case"acw":t.setState({rotate:t.state.rotate-90});break;default:console.error("Wrong function invocation")}})),m(f(t),"reset",(function(){return t.setState({x:0,y:0,zoom:1,rorate:0})})),t}return e=s,(n=[{key:"render",value:function(){var t=this;return this.props.image?r.a.createElement("div",{className:"lb-container"},r.a.createElement("div",{className:"lb-header"},r.a.createElement("div",{className:"lb-button zoomin",onClick:function(){return t.applyZoom("in")}}),r.a.createElement("div",{className:"lb-button zoomout",onClick:function(){return t.applyZoom("out")}}),r.a.createElement("div",{className:"lb-button rotatel",onClick:function(){return t.applyRotate("acw")}}),r.a.createElement("div",{className:"lb-button rotater",onClick:function(){return t.applyRotate("cw")}}),r.a.createElement("div",{className:"lb-button reload",onClick:this.reset}),r.a.createElement("div",{className:"lb-button close",onClick:function(e){return t.props.onClose(e)}})),r.a.createElement("div",{className:"lb-canvas",onClick:function(t){return onClose(t)}},r.a.createElement("img",{draggable:"false",style:{transform:this.createTransform(this.state.x,this.state.y,this.state.zoom,this.state.rotate)},onMouseDown:function(e){return t.startMove(e)},onTouchStart:function(e){return t.startMove(e)},onMouseMove:function(e){return t.duringMove(e)},onTouchMove:function(e){return t.duringMove(e)},onMouseUp:function(e){return t.endMove(e)},onMouseLeave:function(e){return t.endMove(e)},onTouchEnd:function(e){return t.endMove(e)},onClick:function(e){return t.stopSideEffect(e)},className:"lb-img",src:this.props.image,alt:this.props.title}))):null}}])&&c(e.prototype,n),o&&c(e,o),s}(r.a.Component)}]);