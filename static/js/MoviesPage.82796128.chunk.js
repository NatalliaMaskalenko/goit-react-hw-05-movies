(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3],{34:function(e,t,c){"use strict";c.d(t,"e",(function(){return h})),c.d(t,"d",(function(){return b})),c.d(t,"b",(function(){return f})),c.d(t,"a",(function(){return l})),c.d(t,"c",(function(){return m}));var r=c(35),n=c.n(r),a=c(37),o="https://api.themoviedb.org/3",s="d487c6d6cc7f608fd9f791a1c234621c";function u(){return i.apply(this,arguments)}function i(){return i=Object(a.a)(n.a.mark((function e(){var t,c,r,a=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",c=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,c);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function h(){return u("".concat(o,"/trending/movie/day?api_key=").concat(s))}function b(e){return u("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&page=1"))}function f(e){return u("".concat(o,"/movie/").concat(e,"?api_key=").concat(s))}function l(e){return u("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s))}function m(e){return u("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s))}},58:function(e,t,c){e.exports={searchbar:"Searchbar_searchbar__QzQSX",searchForm:"Searchbar_searchForm__1A9PT",searchFormButton:"Searchbar_searchFormButton__4fgeZ",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__3SaVE",searchFormInput:"Searchbar_searchFormInput__26qFR"}},64:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var r=c(61),n=c(33),a=c(0),o=c(10),s=c(39),u=c.n(s),i=c(1),h=c(34),b=c(58),f=c.n(b),l=c(2);function m(e){var t=e.onSubmit,c=Object(a.useState)(""),r=Object(n.a)(c,2),o=r[0],s=r[1];return Object(l.jsx)("header",{className:f.a.searchbar,children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):window.alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")},className:f.a.searchForm,children:[Object(l.jsx)("input",{value:o,className:f.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"search",onChange:function(e){s(e.currentTarget.value.toLowerCase())}}),Object(l.jsx)("button",{type:"submit",className:f.a.searchFormButton,children:Object(l.jsx)("span",{className:f.a.searchFormButtonLabel,children:"Search"})})]})})}function j(){var e=Object(i.g)(),t=Object(i.f)(),c=Object(a.useState)([]),s=Object(n.a)(c,2),b=s[0],f=s[1];console.log(b);var j=Object(a.useState)(""),d=Object(n.a)(j,2),p=d[0],O=d[1],v=Object(a.useState)("init"),g=Object(n.a)(v,2),x=g[0],_=g[1];Object(a.useEffect)((function(){p&&(_("pending"),h.d(p).then((function(e){if(f(e.results),localStorage.setItem("movies",JSON.stringify(e.results)),_("success"),0===e.results.length)return _("error")})))}),[p]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{onSubmit:function(c){O(c),t.push(Object(r.a)(Object(r.a)({},e),{},{search:"query=".concat(c)}))}}),"init"===x&&Object(l.jsx)("h1",{children:"Hello! Search something...."}),"pending"===x&&Object(l.jsx)(u.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),"success"===x&&Object(l.jsx)("ul",{children:b&&b.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e,search:"query=".concat(p)}},children:t.title})},t.id)}))}),"error"===x&&Object(l.jsx)("h2",{children:"No results..."})]})}}}]);
//# sourceMappingURL=MoviesPage.82796128.chunk.js.map