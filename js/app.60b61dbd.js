(function(){"use strict";var n={9441:function(n,e,t){var i=t(9242),r=t(3396);const a=(0,r._)("p",null,"Your advice is loading, please wait...",-1),o=(0,r._)("div",{class:"attribution"},[(0,r.Uk)(" Challenge by "),(0,r._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,r.Uk)(". Coded by "),(0,r._)("a",{href:"#"},"Chanchala Murthy"),(0,r.Uk)(". ")],-1);function c(n,e,t,i,c,l){const u=(0,r.up)("AdviceCard");return(0,r.wg)(),(0,r.iD)(r.HY,null,[((0,r.wg)(),(0,r.j4)(r.n4,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),fallback:(0,r.w5)((()=>[a])),_:1})),o],64)}var l=t(7139),u=t.p+"img/pattern-divider-desktop.f43373de.svg",s=t.p+"img/pattern-divider-mobile.f74c7460.svg",d=t.p+"img/icon-dice.b81fefcd.svg",f=t(4870);const v=n=>((0,r.dD)("data-v-4e1d9e34"),n=n(),(0,r.Cn)(),n),p={class:"card"},g={class:"title"},h=v((()=>(0,r._)("img",{src:u,alt:"dividing-line",class:"desktop-line"},null,-1))),_=v((()=>(0,r._)("img",{src:s,alt:"dividing-line",class:"mobile-line"},null,-1))),b=v((()=>(0,r._)("img",{src:d,alt:"dice-icon"},null,-1))),m=[b],w="https://api.adviceslip.com/advice";var k={__name:"AdviceCard",setup(n){const e=(0,f.iH)({}),t=async function(){const n=await fetch(w,{method:"GET",mode:"cors",cache:"no-cache"});e.value=(await n.json()).slip};return t(),(n,i)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("article",p,[(0,r._)("h1",g,"Advice # "+(0,l.zw)(e.value.id),1),(0,r._)("p",null,(0,l.zw)(e.value.advice),1)]),(0,r._)("section",{class:"end-section"},[h,_,(0,r._)("div",{class:"btn-glow"},[(0,r._)("button",{class:"green-circle",onClick:t},m)])])],64))}},y=t(89);const O=(0,y.Z)(k,[["__scopeId","data-v-4e1d9e34"]]);var C=O,j={name:"App",components:{AdviceCard:C}};const x=(0,y.Z)(j,[["render",c]]);var A=x;(0,i.ri)(A).mount("#app")}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return n[i].call(a.exports,a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,i,r,a){if(!i){var o=1/0;for(s=0;s<n.length;s++){i=n[s][0],r=n[s][1],a=n[s][2];for(var c=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(t.O).every((function(n){return t.O[n](i[l])}))?i.splice(l--,1):(c=!1,a<o&&(o=a));if(c){n.splice(s--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[i,r,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.p="/advice-generator-app/"}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,i){var r,a,o=i[0],c=i[1],l=i[2],u=0;if(o.some((function(e){return 0!==n[e]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(l)var s=l(t)}for(e&&e(i);u<o.length;u++)a=o[u],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(s)},i=self["webpackChunkadvice_generator_app_main"]=self["webpackChunkadvice_generator_app_main"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(9441)}));i=t.O(i)})();
//# sourceMappingURL=app.60b61dbd.js.map