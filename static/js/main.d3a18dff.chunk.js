(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),i=(c(12),c(13),c(14),c(0));function o(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("p",{children:"daily quotes"})})}var u=c(6),j=c(4),b=(c(16),c(17),Object(n.forwardRef)((function(t,e){return Object(i.jsxs)("div",{ref:e,className:"card",children:[Object(i.jsx)("div",{className:"firstQuote"}),Object(i.jsx)("div",{className:"sentence",children:t.text.quote}),Object(i.jsx)("div",{className:"secondQuote"}),Object(i.jsx)("div",{className:"author",children:t.text.author})]})})));c(18);function f(t){return Object(i.jsx)("button",{onClick:t.click,className:"btn",children:t.text})}function l(t){var e=Object(n.useState)(),c=Object(j.a)(e,2),s=c[0],a=c[1],r=Object(n.useState)({}),o=Object(j.a)(r,2),l=o[0],d=o[1],h=Object(n.useState)([]),O=Object(j.a)(h,2),x=O[0],v=O[1],m=Object(n.useRef)(null);Object(n.useEffect)((function(){fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(t){return a(t)}))}),[]);return Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(f,{click:function(){m.current.style.transform="translateY(0)",m.current.style.animation="fadeIn 1s both";var t=Math.floor(Math.random()*s.length);d(s[t]);var e=x,c=[].concat(Object(u.a)(e),[l]);v(c)},text:"show quote"}),Object(i.jsx)(f,{click:function(){var t=Object(u.a)(x);t.length>1?(d(t[t.length-1]),t.pop(),v(t)):alert("there`s no previous quotes")},text:"show previous quote"}),Object(i.jsx)(b,{ref:m,text:l})]})})}var d=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(l,{})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),h()}],[[19,1,2]]]);
//# sourceMappingURL=main.d3a18dff.chunk.js.map