(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Rgr8:function(e,t,n){"use strict";var r=n("mXGw"),a=n("BQn0"),l=n("SUdF"),i=n("/ZiB"),o=n("MU2d"),u=n("LOiH");var c=function(e){var t,n,l,c,d=e.program,m=e.filter,f=void 0===m?function(){return!0}:m;return r.createElement(a.a,{py:2},r.createElement(i.a,{variant:"subtitle2",component:"span"},"第",d.week,"回 ",d.date),r.createElement(i.a,{variant:"h6",component:"h3",gutterBottom:!0},r.createElement(o.a,{to:null!==(t=null===(n=d.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#"},d.title)),null!==(l=null==d||null===(c=d.playlist)||void 0===c?void 0:c.filter(f).map((function(e,t){var n;return r.createElement(u.b,{key:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:t,tune:e})})))&&void 0!==l?l:null)},d=n("6CzD"),m=n("JVN4");function f(){return r.createElement(a.a,{py:4},r.createElement(u.a,null))}function s(e){var t=e.children,n=e.margin,a=void 0===n?0:n,i=e.once,o=void 0===i||i,u=Object(l.a)({rootMargin:a+"px",triggerOnce:o}),c=u[0],d=u[1];return r.createElement("div",{ref:c},d?t:r.createElement(f,null))}t.a=function(e){var t=e.programs,n=e.filter,a=void 0===n?function(){return!0}:n,l=e.divisor,i=function(e,t,n){void 0===n&&(n=function(){return!0});var a=Object(m.a)();return r.useMemo((function(){return e.sort((function(e,t){return a(e.week&&t.week?e.week-t.week:0)})).reduce((function(e,r,a){var l,i,o=Object.assign({},r,{playlist:null!==(l=null===(i=r.playlist)||void 0===i?void 0:i.filter(n))&&void 0!==l?l:[]});return 0===a?[[o]]:function(e){return e.reduce((function(e,t){return t.playlist?e+t.playlist.length:e}),0)}(e[e.length-1])<t?(e[e.length-1].push(o),e):[].concat(Object(d.a)(e),[[o]])}),[])}),[e,t,n,a])}(t,void 0===l?15:l,a),o=r.useMemo((function(){return i.map((function(e,t){return 0===t?r.createElement("div",{key:t},e.map((function(e){return r.createElement(c,{program:e,key:e.id})}))):r.createElement(s,{key:t,margin:40},e.map((function(e){return r.createElement(c,{program:e,key:e.id})})))}))}),[i]);return r.createElement("div",null,o)}},yN4N:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),a=n("5UIW"),l=n("dJqr"),i=n("CXRx"),o=n("JF+v"),u=n("zaJg"),c=n.n(u),d=n("FJwj"),m=n("Pn/9"),f=n("5Nth"),s=n("y16u"),v=n("23bq"),p=n("Rgr8"),E=n("Qmzd"),g=Object(d.bindKeyboard)(c.a);t.default=function(){var e=Object(o.useLocation)(),t=e.hash,n=e.state,u=Object(E.a)(),c=""!==t?decodeURI(t.slice(1)):null,d=u.map((function(e){return e.fieldValue})),b=d.indexOf(c)>=0?d.indexOf(c):(null==n?void 0:n.selector)?d.indexOf(null==n?void 0:n.selector):0,w=r.useState(b),y=w[0],h=w[1];return r.useEffect((function(){window&&"object"==typeof window&&window.history.replaceState(y,"","#"+u[y].fieldValue)}),[y,u]),r.createElement(m.a,{title:u[y].fieldValue+"の選曲",tabSticky:!0,componentViewports:{BottomNav:!1},tabs:r.createElement(l.a,{value:y,onChange:function(e,t){h(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},u.map((function(e){return r.createElement(i.a,{key:e.fieldValue,label:e.fieldValue+" "+e.playlist.length})})))},r.createElement(g,{index:y,onChangeIndex:function(e){h(e)},resistance:!0},u.map((function(e,t){return r.createElement(f.a,{key:t,value:y,index:t},r.createElement(p.a,{programs:e.edges.map((function(e){return e.node})),divisor:15,filter:function(t){return t.selector===e.fieldValue}}))}))),r.createElement(a.a,{maxWidth:"md"},r.createElement(s.a,null,r.createElement(v.a,null))))}}}]);
//# sourceMappingURL=component---src-pages-selectors-tsx-142b9b90bbd0b6b54e41.js.map