(function(){'use strict';var d,k=function(a){if("function"==typeof a.gwdLoad&&"function"==typeof a.gwdIsLoaded&&!a.gwdIsLoaded()){var b=h(a),c=b&&"function"==typeof b.gwdIsLoaded;(!b||c&&b.gwdIsLoaded())&&a.gwdLoad()}},l=function(a){if(null==a.gwdActivate||"function"==typeof a.gwdActivate)if(null==a.gwdIsActive||!a.gwdIsActive()){var b=h(a),c=b&&null!=b.gwdIsActive&&"function"==typeof b.gwdIsActive;null==b&&a.gwdActivate();c&&b.gwdIsActive()&&a.gwdActivate()}},m=function(a){return"gwd-page"==a.tagName.toLowerCase()||
"gwd-page"==a.getAttribute("is")},h=function(a){if(m(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&m(a))return a;return null},n=function(a){for(var b=[];a;a=a.parentNode)b.unshift(a);return b},p=function(a,b,c){var e=e||b;a.hasAttribute(b)?(a=a.getAttribute(b),c.setAttribute(e,a)):c.removeAttribute(e)};var q=function(a,b){setTimeout(a,b)};var r=function(a,b,c){if(c){var e=document.createEvent("CustomEvent");e.initCustomEvent(a,!0,!0,c)}else e=document.createEvent("Event"),e.initEvent(a,!0,!0);b.dispatchEvent(e)},t=function(a,b){var c=function(e){a.removeEventListener("playing",c);b(e)};a.addEventListener("playing",c)};var u={v:"fullscreenchange",A:"webkitfullscreenchange",w:"mozfullscreenchange"},v={v:"fullscreenElement",A:"webkitFullscreenElement",w:"mozFullScreenElement"},w=function(a){var b;for(b in v){var c=a[v[b]];if(void 0!==c)break}return c||null},x=function(a){var b=document;this.g="has-fullscreen-gwd-video";this.b=b;this.c=a;this.o=this.C.bind(this)};
x.prototype.C=function(){var a=w(this.b);if(a)if(this.c==a){var b=this.b;for(a=this.c;a&&a!=b;a=a.parentNode)a.classList.add(this.g)}else if(a.classList.contains(this.g)){b=n(this.c);a=n(a);for(var c=0,e=b[0],g=a[0],f=null;e&&g&&e==g;)f=e,c++,e=b[c],g=a[c];y(this,f)}else y(this);else y(this)};x.prototype.install=function(){for(var a in u)this.b.addEventListener(u[a],this.o)};var y=function(a,b){b=b||a.b;for(var c=a.c;c&&c!=b;c=c.parentNode)c.classList.remove(a.g)};var z="abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A="autoplay loop muted sources controls poster".split(" "),B=function(){};goog.inherits(B,HTMLElement);d=B.prototype;
d.createdCallback=function(){for(var a;a=this.firstChild;)this.removeChild(a);this.a=document.createElement("video");this.u=this.B.bind(this);this.m=function(a){r(a.type,this,a.detail)}.bind(this);this.s=new x(this);this.h=this.i=!1;for(a=0;a<A.length;a++)p(this,A[a],this.a);this.a.setAttribute("webkit-playsinline","");this.a.setAttribute("playsinline","");this.a.setAttribute("x-webkit-airplay","allow");this.l=1;this.j=!1;a=document.createElement("div");a.classList.add("intermediate-element");a.appendChild(this.a);
this.appendChild(a);Object.defineProperty(this,"nativeElement",{enumerable:!0,get:function(){return this.a}});Object.defineProperty(this,"autoplay",{enumerable:!0,get:function(){return this.a.autoplay},set:function(a){a?this.setAttribute("autoplay",""):this.removeAttribute("autoplay")}});Object.defineProperty(this,"loop",{enumerable:!0,get:function(){return this.a.loop},set:function(a){a?this.setAttribute("loop",""):this.removeAttribute("loop")}});Object.defineProperty(this,"muted",{enumerable:!0,
get:function(){return this.hasAttribute("muted")},set:function(a){a?this.setAttribute("muted",""):this.removeAttribute("muted")}});this.a.muted=this.muted;Object.defineProperty(this,"controls",{enumerable:!0,get:function(){return this.a.controls},set:function(a){a?this.setAttribute("controls",""):this.removeAttribute("controls")}});Object.defineProperty(this,"poster",{enumerable:!0,get:function(){return this.a.poster},set:function(a){a?this.setAttribute("poster",a):this.removeAttribute("poster")}});
Object.defineProperty(this,"paused",{enumerable:!0,get:function(){return this.a.paused}});Object.defineProperty(this,"volume",{enumerable:!0,get:function(){return this.a.volume},set:function(a){this.a.volume=a}});Object.defineProperty(this,"currentTime",{enumerable:!0,get:function(){return this.a.currentTime},set:function(a){this.a.currentTime=a}});Object.defineProperty(this,"duration",{enumerable:!0,get:function(){return this.a.duration}});Object.defineProperty(this,"width",{enumerable:!0,get:function(){return this.a.width},
set:function(a){a&&(this.a.width=a)}});Object.defineProperty(this,"height",{enumerable:!0,get:function(){return this.a.height},set:function(a){a&&(this.a.height=a)}});Object.defineProperty(this,"videoWidth",{enumerable:!0,get:function(){return this.a.videoWidth}});Object.defineProperty(this,"videoHeight",{enumerable:!0,get:function(){return this.a.videoHeight}});this.f=this.muted&&-1!=(window.navigator.userAgent||"").indexOf("Android")};
d.attachedCallback=function(){k(this);l(this);this.f&&t(this.a,function(){this.f&&(this.a.volume=0)}.bind(this));this.a.addEventListener("volumechange",this.u,!1);for(var a=0;a<z.length;a++)this.a.addEventListener(z[a],this.m,!1);this.s.install()};d.detachedCallback=function(){var a=this.s,b;for(b in u)a.b.removeEventListener(u[b],a.o);a.c==w(a.b)&&y(a);this.f&&(this.a.volume=1);this.a.removeEventListener("volumechange",this.u,!1);for(a=0;a<z.length;a++)this.a.removeEventListener(z[a],this.m,!1)};
d.attributeChangedCallback=function(a){if("sources"==a){if(this.i){var b=this.a.paused,c=this.muted;C(this);this.a.load();q(function(){this.muted=c;b?this.pause():this.play()}.bind(this),0)}}else"muted"==a&&(this.a.muted=this.muted);p(this,a,this.a)};d.gwdActivate=function(){this.autoplay&&this.a.paused&&q(function(){this.play()}.bind(this),200);this.h=!0};d.gwdDeactivate=function(){this.hasAttribute("resumable")||this.seek(0);this.pause();this.h=!1};d.gwdIsActive=function(){return this.h};
d.gwdLoad=function(){C(this);this.i=!0;r("ready",this)};d.gwdIsLoaded=function(){return this.i};d.mute=function(){this.f&&(this.a.volume=1);this.f=!1;this.muted=!this.muted};d.replay=function(){this.seek(0);this.play()};d.seek=function(a){this.currentTime!=a&&(this.currentTime=a)};d.B=function(){!1===this.j&&!0===this.muted&&0===this.l&&(this.a.volume=1,this.muted=!1);this.l=this.a.volume;this.j=this.muted};
d.setVolume=function(a){this.muted=0<a?!1:!0;this.a.volume=a/100;this.l=this.a.volume;this.j=this.muted};d.setSources=function(a){this.setAttribute("sources",a)};d.play=function(){this.a.play()};d.pause=function(){this.a.pause()};var C=function(a){var b=a.getAttribute("sources");b=b?b.split(","):[];for(var c;c=a.a.firstChild;)a.a.removeChild(c);for(c=0;c<b.length;++c){var e=document.createElement("source"),g=e;var f=b[c];f=f.trim();f=window.Enabler?Enabler.getUrl(f):f;g.src=f;a.a.appendChild(e)}};
document.registerElement("gwd-video",{prototype:B.prototype});}).call(this);
