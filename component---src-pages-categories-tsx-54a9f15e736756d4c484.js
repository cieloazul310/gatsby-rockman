(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4qGM":function(e,t,n){"use strict";n.r(t);n("kBzq");var a=n("mXGw"),l=n("dJqr"),r=n("CXRx"),o=n("u44p"),i=n("5UIW"),c=n("JF+v"),u=n("zaJg"),d=n.n(u),s=n("FJwj"),m=n("Pn/9"),f=n("5Nth"),v=n("gFAl"),b=n("y16u"),p=n("23bq"),y=n("JVN4"),g=n("KoUe"),w=Object(s.bindKeyboard)(d.a);t.default=function(){var e,t,n,u=Object(c.useLocation)(),d=Object(g.b)(),s=(null===(e=u.state)||void 0===e?void 0:e.category)?d.map((function(e){return e.fieldValue})).indexOf(u.state.category):0,E=a.useState(s),x=E[0],k=E[1],O=Object(y.a)();return a.useEffect((function(){window&&window.history.replaceState(x,"","#"+d[x].fieldValue)}),[x,d]),a.createElement(m.a,{title:null!==(t=null===(n=d[x])||void 0===n?void 0:n.fieldValue)&&void 0!==t?t:"Category",tabSticky:!0,componentViewports:{BottomNav:!1},tabs:a.createElement(l.a,{value:x,onChange:function(e,t){k(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},d.map((function(e,t){var n;return a.createElement(r.a,{key:null!==(n=e.fieldValue)&&void 0!==n?n:t,label:e.fieldValue+" "+e.edges.length})})))},a.createElement(w,{index:x,onChangeIndex:function(e){k(e)},resistance:!0},d.map((function(e,t){return a.createElement(f.a,{key:t,value:x,index:t},a.createElement(o.a,null,e.edges.sort((function(e,t){return O(e.node.week&&t.node.week?e.node.week-t.node.week:0)})).map((function(e){var t,n,l;return a.createElement(v.a,{key:e.node.id,to:null!==(t=null===(n=e.node.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#",primaryText:null!==(l=e.node.title)&&void 0!==l?l:"Program",secondaryText:"第"+e.node.week+"回 "+e.node.date,divider:!0})}))))}))),a.createElement(i.a,{maxWidth:"md"},a.createElement(b.a,null,a.createElement(p.a,null))))}},SpMI:function(e,t,n){"use strict";var a=n("Fcif"),l=n("dV/x"),r=n("mXGw"),o=n("PDtE"),i=n("gbh0"),c=n("nnXQ"),u=r.forwardRef((function(e,t){var n=e.classes,i=e.className,u=Object(l.a)(e,["classes","className"]),d=r.useContext(c.a);return r.createElement("div",Object(a.a)({className:Object(o.a)(n.root,i,"flex-start"===d.alignItems&&n.alignItemsFlexStart),ref:t},u))}));t.a=Object(i.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},gFAl:function(e,t,n){"use strict";n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var a=n("mXGw"),l=n("Wbzz"),r=n("v6vt"),o=n("5bSt"),i=n("SpMI"),c=n("vaiS"),u=n("1Dig"),d=n("MU2d");t.a=function(e){var t=e.color,n=void 0===t?"inherit":t,s=e.button,m=void 0!==s&&s,f=e.inset,v=void 0!==f&&f,b=e.to,p=e.primaryText,y=e.secondaryText,g=e.avatar,w=e.secondaryAction,E=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction"]);return Object(u.a)((function(e){return e.breakpoints.down("xs")}))||m?a.createElement(r.a,Object.assign({component:l.Link,to:b,button:!0},E),g?a.createElement(i.a,null,g):null,a.createElement(o.a,{primary:p,secondary:y,inset:v}),w?a.createElement(c.a,null,w):null):a.createElement(r.a,E,g?a.createElement(i.a,null,g):null,a.createElement(o.a,{inset:v,primary:a.createElement(d.a,{to:b,color:n},p),secondary:y||null}),w?a.createElement(c.a,null,w):null)}}}]);
//# sourceMappingURL=component---src-pages-categories-tsx-54a9f15e736756d4c484.js.map