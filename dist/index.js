!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"),require("prop-types"),require("classnames"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","prop-types","classnames","react-dom"],e);else{var n="object"==typeof exports?e(require("react"),require("prop-types"),require("classnames"),require("react-dom")):e(t.React,t["prop-types"],t.classnames,t.ReactDOM);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,function(t,e,n,o){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(0),u=o(l),c=n(1),f=o(c),d=n(10),p=o(d),h=n(3),b=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._index=0,n.setPosition=n.setPosition.bind(n),n.getPosition=n.getPosition.bind(n),n.getSize=n.getSize.bind(n),n.getDivStyle=n.getDivStyle.bind(n),n.onClick=n.onClick.bind(n),n.displayTitle=n.displayTitle.bind(n),n}return a(e,t),s(e,[{key:"componentDidMount",value:function(){(0,h.changeButtonBackgroundColor)(this.props.buttonBackground),(0,h.changeButtonFontSize)(this.props.buttonFontSize),this._a.style.color=this.props.buttonFontColor,this._a.style["box-shadow"]="0 0 0 3px "+this.props.buttonBackground,this._title.style.color=this.props.titleFontColor,this._title.style["font-size"]=this.props.titleFontSize}},{key:"getSize",value:function(){return{width:this._div.offsetWidth,height:this._div.offsetHeight,index:this._index}}},{key:"setPosition",value:function(t,e,n){this._div.style.left=t+"px",this._div.style.top=e+"px",this._index=n}},{key:"getPosition",value:function(){return{left:this._div.offsetLeft,top:this._div.offsetTop}}},{key:"getDivStyle",value:function(){var t=this.props,e=t.size,n=t.className,o=(0,p.default)({"hi-icon-wrap":"normal"===e,"hi-icon-child-wrap":"small"===e,"hi-icon-effect-2":!0,"hi-icon-effect-2a":!0});return n&&(o+=" "+n),o}},{key:"onClick",value:function(t){var e=this.props,n=e.onClick,o=e.hideChildPop,i=e.setCenter,r=e.index,a=e.data;n&&n(t,a),i&&i(r),o&&o()}},{key:"displayTitle",value:function(t){this._title.style.display=t}},{key:"render",value:function(){var t=this,e=this.props,n=e.title,o=e.text,i=e.size,r=e.className,a=(0,p.default)({"hi-icon-wrap":"normal"===i,"hi-icon-child-wrap":"small"===i,"hi-icon-effect-2":!0,"hi-icon-effect-2a":!0});r&&(a+=" "+r);var s=(0,p.default)({"hi-icon":"normal"===i,"hi-icon-child":"small"===i,"hi-icon-text":!0}),l=(0,p.default)({"hi-icon-child-title":"small"===i,"hi-icon-title":"normal"===i});return u.default.createElement("div",{className:a,ref:function(e){return t._div=e}},u.default.createElement("a",{className:s,"data-attr":o,ref:function(e){return t._a=e},onClick:this.onClick},o),u.default.createElement("span",{className:l,ref:function(e){return t._title=e}},n))}}]),e}(u.default.PureComponent);b.propTypes={title:f.default.string.isRequired,text:f.default.string.isRequired,className:f.default.string,size:f.default.oneOf(["normal","small"]),titleFontColor:f.default.string.isRequired,titleFontSize:f.default.string.isRequired,buttonFontColor:f.default.string.isRequired,buttonFontSize:f.default.string.isRequired,buttonBackground:f.default.string.isRequired,data:f.default.object},b.defaultProps={size:"normal"},e.default=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.MORE_BUTTON_LEFT=160,i=e.MORE_BUTTON_TOP=10,r=(e.POP_HALF_WIDTH=225,e.AVD=45),a=(e.AHD=r*Math.PI/180,e.mouseCoords=function(t){return t.pageX||t.pageY?{x:t.pageX,y:t.pageY}:t.clientX||t.clientY?{x:t.clientX+document.body.scrollLeft-document.body.clientLeft,y:t.clientY+document.body.scrollTop-document.body.clientTop}:t.touches[0].pageX||t.touches[0].pageY?{x:t.touches[0].pageX,y:t.touches[0].pageY}:void 0},e.calculatePosition=function(t,e,n,r,a,s){var l=Math.sin(s*(8-t+3))*e+n-a,u=Math.cos(s*(8-t+3))*e+r-a;return l-o<1&&l-o>0&&(l=o),u-i<1&&u-i>0&&(u=i),{left:l,top:u}},e.isMobile=function(){return/Mobile/i.test(window.navigator.userAgent)},function(t,e){e=document.createElement("style"),e.innerText=t,document.body.appendChild(e)});e.changeButtonBackgroundColor=function(t){a(".hi-icon-effect-2 .hi-icon:after {\n  top: -2px;\n  left: -2px;\n  padding: 2px;\n  z-index: -1;\n  background: "+t+";\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  transition: transform 0.2s, opacity 0.2s;\n  }\n  ")},e.changeButtonFontSize=function(t){a(".hi-icon:before {\n  speak: none;\n  font-size: "+t+";\n  line-height: 90px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  display: block;\n  -webkit-font-smoothing: antialiased;\n}\n  ")}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(0),u=o(l),c=n(1),f=o(c);n(5);var d=n(2),p=o(d),h=n(11),b=o(h),v=n(12),m=o(v),g=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.showChildPop=n.showChildPop.bind(n),n.hideChildPop=n.hideChildPop.bind(n),n.setCenter=n.setCenter.bind(n),n.state={childPopLeft:0,childPopTop:0,showChildPop:!1,dataSource:n.processingData(n.props.dataSource),originalDataSource:n.processingData(n.props.dataSource)},n}return a(e,t),s(e,[{key:"processingData",value:function(t){return t.map(function(t,e){return t.index=e,t})}},{key:"showChildPop",value:function(t){this.setState({childPopLeft:t.target.getBoundingClientRect().left+45,childPopTop:t.target.getBoundingClientRect().top+60,showChildPop:!0})}},{key:"hideChildPop",value:function(){this.setState({showChildPop:!1})}},{key:"setCenter",value:function(t){var e=[];e.push(this.state.originalDataSource[t]),e=e.concat(this.state.originalDataSource.slice(0,t)),e=e.concat(this.state.originalDataSource.slice(t+1,this.state.originalDataSource.length)),this.setState({dataSource:e})}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.offset;return u.default.createElement("div",{className:e,style:{padding:n,position:"absolute"}},u.default.createElement(p.default,{title:this.state.dataSource[0].title,text:this.state.dataSource[0].text,onClick:this.showChildPop,titleFontColor:this.props.titleFontColor,buttonFontColor:this.props.buttonFontColor,buttonBackground:this.props.buttonBackground,titleFontSize:this.props.titleFontSize,buttonFontSize:this.props.buttonFontSize}),this.state.dataSource.length>1&&this.state.showChildPop&&u.default.createElement(m.default,{container:this.props.container||document.body},u.default.createElement(b.default,{left:this.state.childPopLeft,top:this.state.childPopTop,hideChildPop:this.hideChildPop,setCenter:this.setCenter,radius:this.props.radius,buttonSize:this.props.buttonSize,data:this.state.dataSource.slice(1,this.state.dataSource.length),titleFontColor:this.props.titleFontColor,buttonFontColor:this.props.buttonFontColor,buttonBackground:this.props.buttonBackground,titleFontSize:this.props.titleFontSize,buttonFontSize:this.props.buttonFontSize,onClick:this.props.onClick})))}}]),e}(u.default.PureComponent);g.propTypes={dataSource:f.default.array.isRequired,radius:f.default.number,buttonSize:f.default.number,titleFontColor:f.default.string,titleFontSize:f.default.string,buttonFontColor:f.default.string,buttonFontSize:f.default.string,buttonBackground:f.default.string,className:f.default.string,onClick:f.default.func,container:f.default.object,offset:f.default.number},g.defaultProps={radius:150,buttonSize:65,titleFontColor:"#fff",titleFontSize:"16px",buttonFontColor:"#0e83cd",buttonFontSize:"28px",buttonBackground:"#fff",container:document.body,offset:0},e.default=g},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0};i.transform=void 0,n(8)(o,i),o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(7)(!1),e.push([t.i,'.hi-icon-wrap{text-align:center;margin:0 auto;padding:2em 0 3em;width:150px;position:absolute;-webkit-transition:all .6s;transition:all .6s}.hi-icon-title{font-size:16px;-moz-user-select:none;-webkit-user-select:none}.hi-icon,.hi-icon-title{text-align:center;color:#fff}.hi-icon{display:inline-block;font-size:0;cursor:pointer;margin:15px 30px;width:90px;height:90px;border-radius:50%;position:relative;z-index:1}.hi-icon:after{pointer-events:none;position:absolute;width:100%;height:100%;border-radius:50%;content:"";-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.hi-icon:before{speak:none;font-size:28px;line-height:90px;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;display:block;-webkit-font-smoothing:antialiased}.hi-icon-text:before{content:attr(data-attr)}.hi-icon-child-wrap{text-align:center;margin:0 auto;width:130px;position:absolute}.hi-icon-child{display:inline-block;font-size:0;cursor:pointer;margin:15px 30px;width:70px;height:70px;border-radius:50%;text-align:center;position:relative;z-index:1;color:#fff}.hi-icon-child:after{pointer-events:none;position:absolute;width:100%;height:100%;border-radius:50%;content:"";-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.hi-icon-child:before{speak:none;font-size:20px;line-height:75px;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;display:block;-webkit-font-smoothing:antialiased}.hi-icon-child-title{height:20px;font-size:16px;text-align:center;color:#fff;-moz-user-select:none;-webkit-user-select:none}.hi-icon-effect-2 .hi-icon{color:#0e83cd;box-shadow:0 0 0 3px #fff;-webkit-transition:color .3s;-moz-transition:color .3s;transition:color .3s}.hi-icon-effect-2 .hi-icon:after{top:-2px;left:-2px;padding:2px;z-index:-1;background:#fff;-webkit-transition:-webkit-transform .2s,opacity .2s;-moz-transition:-moz-transform .2s,opacity .2s;transition:transform .2s,opacity .2s}.hi-icon-effect-2a .hi-icon:hover{color:#0e83cd}.hi-icon-effect-2a .hi-icon:hover:after{-webkit-transform:scale(.85);-moz-transform:scale(.85);-ms-transform:scale(.85);transform:scale(.85)}.hi-icon-effect-2 .hi-icon-child{color:#0e83cd;box-shadow:0 0 0 3px #fff;-webkit-transition:color .3s;-moz-transition:color .3s;transition:color .3s}.hi-icon-effect-2 .hi-icon-child:after{top:-2px;left:-2px;padding:2px;z-index:-1;background:#fff;-webkit-transition:-webkit-transform .2s,opacity .2s;-moz-transition:-moz-transform .2s,opacity .2s;transition:transform .2s,opacity .2s}.hi-icon-effect-2a .hi-icon-child:hover{color:#0e83cd}.hi-icon-effect-2a .hi-icon-child:hover:after{-webkit-transform:scale(.85);-moz-transform:scale(.85);-ms-transform:scale(.85);transform:scale(.85)}.child-pop-div{position:relative;width:450px;height:450px}.child-pop-button-show{display:block}.child-pop-button-hide{display:none}.more-button{height:140px;z-index:999}',""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=h[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(c(o.parts[r],e));h[o.id]={id:o.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s=r[1],l=r[2],u=r[3],c={css:s,media:l,sourceMap:u};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function r(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=v(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),r(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),r(t,e),e}function u(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var u=g++;n=m||(m=s(e)),o=f.bind(null,n,u,!1),i=f.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=p.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),i=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function f(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=w(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){if(void 0===e[n]){var o=t.call(this,n);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[n]=o}return e[n]}}(function(t){return document.querySelector(t)}),m=null,g=0,y=[],w=n(9);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return o(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,r.push(l)}t&&o(i(t,e),e);for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(t,e){t.exports=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(0),u=o(l),c=n(2),f=o(c),d=n(3),p=function(t){function e(t){i(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n._buttons=[],n._move=!1,n._old_angle=0,n._events=[],n.addListen=n.addListen.bind(n),n.removeListen=n.removeListen.bind(n),n.mouseUpHandle=n.mouseUpHandle.bind(n),n.mouseDownHandle=n.mouseDownHandle.bind(n),n.touchStartHandle=n.touchStartHandle.bind(n),n.touchEndHandle=n.touchEndHandle.bind(n),n.rotatingEventHandle=n.rotatingEventHandle.bind(n),n.timerOverEventHandle=n.timerOverEventHandle.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.timerRotating=n.timerRotating.bind(n),n.rotating=n.rotating.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.initRing=n.initRing.bind(n),n.getCentralPoint=n.getCentralPoint.bind(n);var o=n.props.data;return n.state={data:o.length<9?o:o.slice(0,8)},n._hideData=o.length<9?[]:o.slice(8,o.length),n}return a(e,t),s(e,[{key:"componentWillUnmount",value:function(){this.removeListen()}},{key:"componentDidMount",value:function(){this.initRing(),this.props.data.length>8&&this.addListen()}},{key:"addListen",value:function(){(0,d.isMobile)()?(window.addEventListener("touchstart",this.touchStartHandle),window.addEventListener("touchend",this.touchEndHandle),window.addEventListener("touchmove",this.onTouchMove)):(window.addEventListener("mouseup",this.mouseUpHandle),window.addEventListener("mousedown",this.mouseDownHandle),window.addEventListener("mousemove",this.onMouseMove)),window.addEventListener("rotating",this.rotatingEventHandle),window.addEventListener("timerOver",this.timerOverEventHandle)}},{key:"removeListen",value:function(){(0,d.isMobile)()?(window.removeEventListener("touchstart",this.touchStartHandle),window.removeEventListener("touchend",this.touchEndHandle),window.removeEventListener("touchmove",this.onTouchMove)):(window.removeEventListener("mousedown",this.mouseDownHandle),window.removeEventListener("mouseup",this.mouseUpHandle),window.removeEventListener("mousemove",this.onMouseMove)),window.removeEventListener("rotating",this.rotatingEventHandle),window.removeEventListener("timerOver",this.timerOverEventHandle)}},{key:"mouseUpHandle",value:function(){this._move=!1,this._old_angle=0}},{key:"mouseDownHandle",value:function(){this._move=!0}},{key:"touchStartHandle",value:function(t){"A"!==t.target.nodeName&&t.preventDefault()}},{key:"touchEndHandle",value:function(){}},{key:"rotatingEventHandle",value:function(t){0===this._events.length?this.timerRotating(t.detail,11):this._events.push(t.detail)}},{key:"timerOverEventHandle",value:function(){this._events.length>0&&this.timerRotating(this._events.shift(),11)}},{key:"onTouchMove",value:function(t){var e=this.props,n=e.left,o=e.top;try{var i=(0,d.mouseCoords)(t),r=180*Math.atan2(i.y-o,i.x-n)/Math.PI;if(0===this._old_angle)return void(this._old_angle=r);var a=r-this._old_angle,s=void 0;a>15?(s=new CustomEvent("rotating",{detail:!0}),this._old_angle=r,window.dispatchEvent(s)):a<-15&&(s=new CustomEvent("rotating",{detail:!1}),this._old_angle=r,window.dispatchEvent(s))}catch(t){console.warn(t)}}},{key:"timerRotating",value:function(t,e){var n=this;setTimeout(function(){if(e>=0){try{n.rotating(t,11===e)}catch(t){console.warn(t)}e-=1,n.timerRotating(t,e)}else{var o=new Event("timerOver");window.dispatchEvent(o)}},40)}},{key:"rotating",value:function(t){var e=this,n=this.getCentralPoint(),o=n.dotLeft,i=n.dotTop,r=this.props,a=r.radius,s=r.buttonSize;this._buttons.forEach(function(n,r){var l=n.getSize().index,u=t?l+1/12:l-1/12,c=(0,d.calculatePosition)(u,a,o,i,s,d.AHD),f=c.left.toFixed(2)-160,p=c.top.toFixed(2)-12;if(f>-10&&f<0&&p<2&&!t){var h=e._hideData[0],b=e.state.data.slice();if(1===h.index||0===r&&h.index-b[b.length-1].index==1||0!==r&&h.index-b[r-1].index==1){h=e._hideData.shift();var v=[];v.push(b[r]),e._hideData=e._hideData.concat(v),b[r]=h,e.setState({data:b})}n.displayTitle("block")}if(f>0&&f<10&&p<2&&t){var m=e._hideData[e._hideData.length-1],g=e.state.data.slice(),y=e.props.data;if(m.index===y.length||r===g.length-1&&g[0].index-m.index==1||r!==g.length-1&&g[r+1].index-m.index==1){m=e._hideData.pop();var w=[];w.push(g[r]),e._hideData=w.concat(e._hideData),g[r]=m,e.setState({data:g})}n.displayTitle("block")}f<1&&f>-1&&p<1&&n.displayTitle("none"),n.setPosition(c.left.toFixed(1),c.top.toFixed(1),u)})}},{key:"onMouseMove",value:function(t){this._move&&this.onTouchMove(t)}},{key:"getCentralPoint",value:function(){return{dotLeft:this._pop.offsetWidth/2,dotTop:this._pop.offsetHeight/2}}},{key:"initRing",value:function(){var t=this,e=this.props,n=e.radius,o=e.buttonSize,i=this.getCentralPoint(),r=i.dotLeft,a=i.dotTop;this._buttons.forEach(function(e,i){var s=(0,d.calculatePosition)(i,n,r,a,o,d.AHD);e.setPosition(s.left,s.top,i),i===t.state.data.length-1&&e.displayTitle("none")}),this._button_more&&this._button_more.setPosition(d.MORE_BUTTON_LEFT,d.MORE_BUTTON_TOP)}},{key:"render",value:function(){var t=this,e=this.props,n=e.left,o=e.top,i=e.data,r=e.hideChildPop,a=e.setCenter,s=e.onClick;return u.default.createElement("div",{className:"child-pop-div",ref:function(e){return t._pop=e},style:{left:n-d.POP_HALF_WIDTH,top:o-d.POP_HALF_WIDTH}},this.state.data&&this.state.data.map(function(e,n){return u.default.createElement(f.default,{key:n,title:e.title,text:e.text,size:"small",onClick:s,hideChildPop:r,data:e,setCenter:a,index:e.index,ref:function(e){return t._buttons[n]=e},titleFontColor:t.props.titleFontColor,buttonFontColor:t.props.buttonFontColor,buttonBackground:t.props.buttonBackground,titleFontSize:t.props.titleFontSize,buttonFontSize:t.props.buttonFontSize})}),i.length>8&&u.default.createElement(f.default,{title:"",text:"More",size:"small",ref:function(e){return t._button_more=e},className:"more-button",titleFontColor:this.props.titleFontColor,buttonFontColor:this.props.buttonFontColor,buttonBackground:this.props.buttonBackground,titleFontSize:this.props.titleFontSize,buttonFontSize:this.props.buttonFontSize}))}}]),e}(u.default.PureComponent);e.default=p},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(0),l=n(13),u=function(t){return t&&t.__esModule?t:{default:t}}(l),c=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._refs={},n.getChildRef=n.getChildRef.bind(n),n}return r(e,t),a(e,[{key:"componentDidMount",value:function(){this.popup=document.createElement("div"),this.props.container.appendChild(this.popup),this._renderLayer()}},{key:"componentDidUpdate",value:function(){this._renderLayer()}},{key:"componentWillUnmount",value:function(){u.default.unmountComponentAtNode(this.popup),this.props.container.removeChild(this.popup)}},{key:"_renderLayer",value:function(){this._refs[this.props.children.props.refName]=this.props.children,u.default.render(this.props.children,this.popup)}},{key:"getChildRef",value:function(t){return this._refs[t]}},{key:"render",value:function(){return null}}]),e}(s.Component);e.default=c},function(t,e){t.exports=o}])});
//# sourceMappingURL=index.js.map