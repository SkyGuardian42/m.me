!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e){function n(){var t=["body",".main",".about"],e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);t.forEach(function(t){document.querySelector(t).setAttribute("style","height:"+e+"px;")})}var o=document.querySelectorAll(".link"),r=!1;o.forEach(function(t){t.style.backgroundColor=t.attributes.color.value,t.addEventListener("mouseenter",function(t){var e=t.target.attributes.img.value;t.target.style.backgroundImage='url("'+e+'")'}),t.addEventListener("mouseleave",function(t){var e=t.target.attributes.color.value;t.target.style.backgroundImage="",t.target.style.backgroundColor=e,t.target.clickReady=!1}),t.addEventListener("click",function(t){if(r){!0===t.target.clickReady?window.location.href=t.target.attributes.href.value:t.target.clickReady=!0}else window.location.href=t.target.attributes.href.value}),t.addEventListener("touchstart",function(t){r=!0})});var i=document.querySelectorAll("[toggle]"),a="";i.forEach(function(t){t.addEventListener("click",function(t){var e=document.getElementById(t.target.attributes.toggle.value),n=t.target.attributes.toggle.value;e.classList.contains("hide")?(window.history.pushState({action:"window opened"},"windowOpened: "+n,n),a=n,e.classList.toggle("hide")):window.history.go(-1)})}),window.onpopstate=function(t){document.getElementById(a).classList.toggle("hide")},window.onload=n(),window.addEventListener("onorientationchange",n,!0),window.addEventListener("resize",n,!0)},function(t,e){}]);
//# sourceMappingURL=build.js.map