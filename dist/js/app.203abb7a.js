(function(){"use strict";var n={8670:function(n,e,t){var r=t(9242),o=t(3396);const a={class:"container p-5"};function i(n,e,t,r,i,u){const c=(0,o.up)("Navbar"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o._)("div",a,[(0,o.Wm)(s)])],64)}const u={class:"navbar navbar-expand-lg navbar-dark bg-primary"},c={class:"container"},s=(0,o.Uk)("MEVN-TYPESCRIPT Kevin Yanes: TaskList App"),l={class:"navbar-nav"},f={class:"nav-item"},d=(0,o.Uk)("TASKS"),v={class:"nav-item"},p=(0,o.Uk)("CREATE TASK");function m(n,e,t,r,a,i){const m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",c,[(0,o.Wm)(m,{to:"/",class:"navbar-brand"},{default:(0,o.w5)((()=>[s])),_:1}),(0,o._)("div",null,[(0,o._)("ul",l,[(0,o._)("li",f,[(0,o.Wm)(m,{class:"nav-link",to:"/tasks"},{default:(0,o.w5)((()=>[d])),_:1})]),(0,o._)("li",v,[(0,o.Wm)(m,{class:"nav-link",to:"/task/new"},{default:(0,o.w5)((()=>[p])),_:1})])])])])])}var b=(0,o.aZ)({name:"Navbar"}),h=t(89);const k=(0,h.Z)(b,[["render",m]]);var g=k,w=(0,o.aZ)({name:"App",components:{Navbar:g}});const y=(0,h.Z)(w,[["render",i]]);var _=y,O=t(678);const T=[{path:"/",redirect:"/tasks",name:"welcome"},{path:"/tasks",name:"tasks",component:()=>Promise.all([t.e(182),t.e(659)]).then(t.bind(t,8659))},{path:"/task/new",name:"tasks-new",component:()=>Promise.all([t.e(182),t.e(656)]).then(t.bind(t,9656))},{path:"/tasks/:id",name:"tasks-details",component:()=>Promise.all([t.e(182),t.e(644)]).then(t.bind(t,8644))}],j=(0,O.p7)({history:(0,O.PO)(),routes:T});var P=j;(0,r.ri)(_).use(P).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){n.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{182:"6172988b",644:"0174b7e4",656:"cb54d957",659:"f4c97a17"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="mevn-ts-recordatorios:";t.l=function(r,o,a,i){if(n[r])n[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+a),u.src=r),n[r]=[o];var d=function(e,t){u.onerror=u.onload=null,clearTimeout(v);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(t)})),e)return e(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(e&&e(r);s<i.length;s++)a=i[s],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},r=self["webpackChunkmevn_ts_recordatorios"]=self["webpackChunkmevn_ts_recordatorios"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(8670)}));r=t.O(r)})();
//# sourceMappingURL=app.203abb7a.js.map