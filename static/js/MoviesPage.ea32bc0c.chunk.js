(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{35:function(e,t,c){"use strict";c.d(t,"e",(function(){return h})),c.d(t,"d",(function(){return b})),c.d(t,"b",(function(){return f})),c.d(t,"a",(function(){return m})),c.d(t,"c",(function(){return l}));var r=c(36),n=c.n(r),a=c(38),o="https://api.themoviedb.org/3",s="d487c6d6cc7f608fd9f791a1c234621c";function i(){return u.apply(this,arguments)}function u(){return u=Object(a.a)(n.a.mark((function e(){var t,c,r,a=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",c=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,c);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function h(){return i("".concat(o,"/trending/movie/day?api_key=").concat(s))}function b(e){return i("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1"))}function f(e){return i("".concat(o,"/movie/").concat(e,"?api_key=").concat(s))}function m(e){return i("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s))}function l(e){return i("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s))}},58:function(e,t,c){e.exports={searchbar:"Searchbar_searchbar__QzQSX",searchForm:"Searchbar_searchForm__1A9PT",searchFormButton:"Searchbar_searchFormButton__4fgeZ",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3SaVE",searchFormInput:"Searchbar_searchFormInput__26qFR"}},64:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var r=c(13),n=c(34),a=c(0),o=c(10),s=c(39),i=c.n(s),u=c(2),h=c(35),b=c(58),f=c.n(b),m=c(1);function l(e){var t=e.onSubmit,c=Object(a.useState)(""),r=Object(n.a)(c,2),o=r[0],s=r[1];return Object(m.jsx)("header",{className:f.a.searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):window.alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")},className:f.a.searchForm,children:[Object(m.jsx)("input",{value:o,className:f.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"search",onChange:function(e){s(e.currentTarget.value.toLowerCase())}}),Object(m.jsx)("button",{type:"submit",className:f.a.searchFormButton,children:Object(m.jsx)("span",{className:f.a.searchFormButtonLabel,children:"Search"})})]})})}function j(){var e=Object(u.g)(),t=Object(u.f)(),c=Object(a.useState)([]),s=Object(n.a)(c,2),b=s[0],f=s[1],j=Object(a.useState)(""),d=Object(n.a)(j,2),p=d[0],O=d[1],v=Object(a.useState)("init"),g=Object(n.a)(v,2),S=g[0],x=g[1];Object(a.useEffect)((function(){window.localStorage.getItem("movies")&&(x("success"),f(JSON.parse(window.localStorage.getItem("movies"))))}),[]),Object(a.useEffect)((function(){p&&(x("pending"),h.d(p).then((function(e){if(f(e.results),localStorage.setItem("movies",JSON.stringify(e.results)),x("success"),0===e.results.length)return x("error")})))}),[p]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l,{onSubmit:function(c){O(c),t.push(Object(r.a)(Object(r.a)({},e),{},{search:"query=".concat(c)}))}}),"init"===S&&Object(m.jsx)("h1",{children:"Hello! Search something...."}),"pending"===S&&Object(m.jsx)(i.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),"success"===S&&Object(m.jsx)("ul",{children:b&&b.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e}},children:t.title})},t.id)}))}),"error"===S&&Object(m.jsx)("h2",{children:"No results..."})]})}}}]);
//# sourceMappingURL=MoviesPage.ea32bc0c.chunk.js.map