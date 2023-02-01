"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{288:function(e,t,r){r.r(t),r.d(t,{MovieDetails:function(){return d},default:function(){return f}});var n=r(861),a=r(439),c=r(757),o=r.n(c),s=r(791),i=r(87),u=r(689),p="MovieDetails_image__fOz-Q",l="MovieDetails_overview__6ggp-",h=r(933),v=r(184),d=function(){var e,t,r=(0,s.useState)({}),c=(0,a.Z)(r,2),d=c[0],f=c[1],x=(0,s.useState)(""),m=(0,a.Z)(x,2),g=m[0],w=m[1],j=(0,u.UO)().movieId,_=(0,u.TH)(),k=new Date(d.release_date).getFullYear(),b=null!==(e=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",y=function(){var e=(0,n.Z)(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.DD)(t);case 2:r=e.sent,n=r.genres,a=n.map((function(e){return e.name})).join(", "),f(r),w(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){y(j)}),[j]),(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("main",{children:[(0,v.jsx)(i.rU,{to:b,children:" \u21e6 Go Back "}),(0,v.jsxs)("h2",{children:[d.title," (",k,")"]}),(0,v.jsxs)("h3",{children:["Vote average: ",d.vote_average," \u2b50"]}),(0,v.jsx)("img",{className:p,src:d.poster_path?"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(d.poster_path):"https://via.placeholder.com/220x330?text=Theres+no+photo",alt:d.title}),(0,v.jsx)("h3",{children:"Overview: "}),(0,v.jsx)("p",{className:l,children:d.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsxs)("p",{children:[g," "]}),(0,v.jsx)("hr",{}),(0,v.jsx)("h3",{children:" Additional Information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading subpage..."}),children:(0,v.jsx)(u.j3,{})})]})})},f=d},933:function(e,t,r){r.d(t,{Bt:function(){return l},DD:function(){return u},Tg:function(){return i},on:function(){return h},y:function(){return p}});var n=r(861),a=r(757),c=r.n(a),o=r(912),s="97d70a3173ca56d5850cad3599f6b1e5",i=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s,"&page=1"),e.prev=1,e.next=4,o.Z.get("".concat(t));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&page=1"),e.prev=1,e.next=4,o.Z.get("".concat(r));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&page=1"),e.prev=1,e.next=4,o.Z.get("".concat(r));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&page=1"),e.prev=1,e.next=4,o.Z.get("".concat(r));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(t),e.prev=1,e.next=4,o.Z.get("".concat(r));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=199.bc6aec87.chunk.js.map