(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(22)},17:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(4),o=t.n(r),i=(t(17),t(5)),u=t(6),s=t(9),l=t(7),f=t(10),p=(t(18),t(1)),d=(t(19),t(2)),h=t.n(d),m=t(8);var w=function(e){var n=Object(a.useState)([]),t=Object(p.a)(n,2),c=t[0],r=t[1],o=function(){var n=Object(m.a)(h.a.mark(function n(){var t,a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:a=n.sent,r(a);case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)(function(){o()},[]),[c,r]},b="".concat("https://api.unsplash.com/photos/","?client_id=").concat("f087b0c870f7c0efeaddd887875463ec09225c2107d777a004e7e6dfaee3d647","&per_page=50"),v=function(){var e=w(b),n=Object(p.a)(e,2),t=n[0];n[1];return c.a.createElement("section",null,t.map(function(e){return c.a.createElement("img",{src:e.urls.small,alt:e.description||"photo",key:e.id})}))},j=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.f989bcf1.chunk.js.map