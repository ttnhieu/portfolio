(self["webpackChunkhieu_ttn"]=self["webpackChunkhieu_ttn"]||[]).push([[844],{635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home-banner",attrs:{id:"home"}},[t("div",{staticClass:"home-banner__wrp"}),t("div",{staticClass:"s-container"},[t("div",{staticClass:"home-banner__ctn"},[t("div",{staticClass:"home-banner__intro"},[t("h3",{staticClass:"home-banner__name"},[t("span",[e._v("I")]),e._v(" AM "),t("br"),e._v(" Hieu. ")]),t("span",{staticClass:"home-banner__welcome",attrs:{id:"type"}})]),t("div",{staticClass:"home-banner__avatar"})])]),t("span",{staticClass:"shape shape-1"},[t("img",{staticClass:"animate-circle",attrs:{src:n(3809),alt:""}})]),t("span",{staticClass:"shape shape-2"},[t("img",{attrs:{src:n(6707),alt:""}})]),t("span",{staticClass:"shape shape-3"},[t("img",{attrs:{src:n(7455),alt:""}})]),t("span",{staticClass:"shape shape-4"},[t("img",{staticClass:"animate-circle",attrs:{src:n(8770),alt:""}})]),t("span",{staticClass:"shape shape-5"},[t("img",{attrs:{src:n(2701),alt:""}})]),t("span",{staticClass:"shape shape-6"},[t("img",{staticClass:"animate-circle",attrs:{src:n(3809),alt:""}})]),t("span",{staticClass:"shape shape-7"},[t("img",{attrs:{src:n(8526),alt:""}})])])}],a=n(1635),s=n(9603),i=n(5514),u=n.n(i);let l=class extends s.lD{mounted(){this.initTypeWriter()}initTypeWriter(){const e=document.documentElement.clientWidth,t=document.getElementById("type"),n=new(u())(t,{loop:!0});e>480?setTimeout((()=>{this.startTypeWriter(n)}),2e3):this.startTypeWriter(n)}startTypeWriter(e){e.typeString("I'm a Front-end Developer").pauseFor(2500).deleteAll().typeString("I Build Website").pauseFor(2500).deleteAll(7).typeString("I Solve Problems").pauseFor(2500).start(500)}};l=(0,a.Cg)([(0,s.uA)({name:"BannerComponent"})],l);var c=l,p=c,d=n(845),f=(0,d.A)(p,r,o,!1,null,null,null),v=f.exports},5514:function(e){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,(()=>(()=>{var e={75:function(e){(function(){var t,n,r,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),s=1e9*process.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],s="AnimationFrame",i=o["request"+s],u=o["cancel"+s]||o["cancelRequest"+s],l=0;!i&&l<a.length;l++)i=o[a[l]+"Request"+s],u=o[a[l]+"Cancel"+s]||o[a[l]+"CancelRequest"+s];if(!i||!u){var c=0,p=0,d=[];i=function(e){if(0===d.length){var t=r(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return i.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=i,e.cancelAnimationFrame=u}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";n.d(r,{default:()=>S});var e=n(4087),t=n.n(e);const o=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},a=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var s="TYPE_CHARACTER",i="REMOVE_CHARACTER",u="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",c="PAUSE_FOR",p="CALL_FUNCTION",d="ADD_HTML_TAG_ELEMENT",f="CHANGE_DELETE_SPEED",v="CHANGE_DELAY",h="CHANGE_CURSOR",m="PASTE_STRING",y="HTML_TAG";function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function _(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===g(t)?t:String(t)}const S=function(){function n(r,g){var b=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),_(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),_(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),_(this,"setupWrapperElement",(function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))})),_(this,"start",(function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b})),_(this,"pause",(function(){return b.state.eventLoopPaused=!0,b})),_(this,"stop",(function(){return b.state.eventLoop&&((0,e.cancel)(b.state.eventLoop),b.state.eventLoop=null),b})),_(this,"pauseFor",(function(e){return b.addEventToQueue(c,{ms:e}),b})),_(this,"typeOutAllStrings",(function(){return"string"==typeof b.options.strings?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach((function(e){b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)})),b)})),_(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(e))return b.typeOutHTMLString(e,t);if(e){var n=(b.options||{}).stringSplitter,r="function"==typeof n?n(e):e.split("");b.typeCharacters(r,t)}return b})),_(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o(e)?b.typeOutHTMLString(e,t,!0):(e&&b.addEventToQueue(m,{character:e,node:t}),b)})),_(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes}(e);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",b.addEventToQueue(d,{node:a,parentNode:t}),n?b.pasteString(s,a):b.typeString(s,a)):a.textContent&&(n?b.pasteString(a.textContent,t):b.typeString(a.textContent,t))}return b})),_(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return b.addEventToQueue(u,{speed:e}),b})),_(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return b.addEventToQueue(f,{speed:e}),b})),_(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return b.addEventToQueue(v,{delay:e}),b})),_(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return b.addEventToQueue(h,{cursor:e}),b})),_(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)b.addEventToQueue(i);return b})),_(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callback must be a function");return b.addEventToQueue(p,{cb:e,thisArg:t}),b})),_(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){b.addEventToQueue(s,{character:e,node:t})})),b})),_(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){b.addEventToQueue(i)})),b})),_(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.addEventToStateProperty(e,t,n,"eventQueue")})),_(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.options.loop?b.addEventToStateProperty(e,t,n,"reverseCalledEvents"):b})),_(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return b.state[r]=n?[o].concat(w(b.state[r])):[].concat(w(b.state[r]),[o]),b})),_(this,"runEventLoop",(function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var e=Date.now(),n=e-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=w(b.state.calledEvents),b.state.calledEvents=[],b.options=E({},b.state.initialOptions)}if(b.state.eventLoop=t()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(e<b.state.pauseUntil)return;b.state.pauseUntil=null}var r,o=w(b.state.eventQueue),g=o.shift();if(!(n<=(r=g.eventName===l||g.eventName===i?"natural"===b.options.deleteSpeed?a(40,80):b.options.deleteSpeed:"natural"===b.options.delay?a(120,160):b.options.delay))){var T=g.eventName,C=g.eventArgs;switch(b.logInDevMode({currentEvent:g,state:b.state,delay:r}),T){case m:case s:var _=C.character,A=C.node,S=document.createTextNode(_),N=S;b.options.onCreateTextNode&&"function"==typeof b.options.onCreateTextNode&&(N=b.options.onCreateTextNode(_,S)),N&&(A?A.appendChild(N):b.state.elements.wrapper.appendChild(N)),b.state.visibleNodes=[].concat(w(b.state.visibleNodes),[{type:"TEXT_NODE",character:_,node:N}]);break;case i:o.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case c:var O=g.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(O);break;case p:var x=g.eventArgs,L=x.cb,D=x.thisArg;L.call(D,{elements:b.state.elements});break;case d:var P=g.eventArgs,M=P.node,k=P.parentNode;k?k.appendChild(M):b.state.elements.wrapper.appendChild(M),b.state.visibleNodes=[].concat(w(b.state.visibleNodes),[{type:y,node:M,parentNode:k||b.state.elements.wrapper}]);break;case u:var R=b.state.visibleNodes,j=C.speed,F=[];j&&F.push({eventName:f,eventArgs:{speed:j,temp:!0}});for(var Q=0,H=R.length;Q<H;Q++)F.push({eventName:l,eventArgs:{removingCharacterNode:!1}});j&&F.push({eventName:f,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,F);break;case l:var I=g.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var W=b.state.visibleNodes.pop(),U=W.type,q=W.node,G=W.character;b.options.onRemoveNode&&"function"==typeof b.options.onRemoveNode&&b.options.onRemoveNode({node:q,character:G}),q&&q.parentNode.removeChild(q),U===y&&I&&o.unshift({eventName:l,eventArgs:{}})}break;case f:b.options.deleteSpeed=g.eventArgs.speed;break;case v:b.options.delay=g.eventArgs.delay;break;case h:b.options.cursor=g.eventArgs.cursor,b.state.elements.cursor.innerHTML=g.eventArgs.cursor}b.options.loop&&(g.eventName===l||g.eventArgs&&g.eventArgs.temp||(b.state.calledEvents=[].concat(w(b.state.calledEvents),[g]))),b.state.eventQueue=o,b.state.lastFrameTime=e}}})),r)if("string"==typeof r){var T=document.querySelector(r);if(!T)throw new Error("Could not find container element");this.state.elements.container=T}else this.state.elements.container=r;g&&(this.options=E(E({},this.options),g)),this.state.initialOptions=E({},this.options),this.init()}var r,g;return r=n,(g=[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(h,{cursor:this.options.cursor},!0),this.addEventToQueue(u,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&C(r.prototype,g),Object.defineProperty(r,"prototype",{writable:!1}),n}()})(),r.default})()))},2701:function(e,t,n){"use strict";e.exports=n.p+"img/icon1.05e1e2d6.svg"},8526:function(e,t,n){"use strict";e.exports=n.p+"img/icon2.b57fb3cd.svg"},7455:function(e,t,n){"use strict";e.exports=n.p+"img/icon3.92ff07f0.svg"},3809:function(e,t,n){"use strict";e.exports=n.p+"img/icon5.1dc3c19e.svg"},8770:function(e,t,n){"use strict";e.exports=n.p+"img/icon6.6d51489f.svg"},6707:function(e,t,n){"use strict";e.exports=n.p+"img/icon7.d475381b.svg"}}]);
//# sourceMappingURL=banner-Banner-vue.cfefce9e.js.map