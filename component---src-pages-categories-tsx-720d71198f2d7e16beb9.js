(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4hPr":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n("Wbzz");function u(){var e=Object(a.useStaticQuery)("75097974");return r.useMemo((function(){return e.allArtist.edges}),[e])}},"4qGM":function(e,t,n){"use strict";n.r(t);var r=n("KQm4"),a=n("q1tI"),u=n("ofer"),l=n("dfam"),o=n("eD//"),i=n("tVbE"),c=n("IsqK"),s=n("7VIw"),d=n.n(s),f=n("7wYf"),m=n("xLcO"),v=n("JiCf"),b=n("OSZ0"),g=n("nrjT"),E=n("kPp+"),p=n("b31w"),y=n("7zBi"),j=n("23bq"),x=n("Dyiq"),O=n("JVN4"),w=n("ek7T"),A=n("KoUe"),C=Object(f.bindKeyboard)(d.a);t.default=function(){var e=Object(A.useAllCategories)(),t=a.useMemo((function(){return[""].concat(Object(r.a)(e.map((function(e){var t=e.fieldValue;return null!=t?t:""}))))}),[e]),n=Object(w.b)(t,(function(e){var t;return null!==(t=null==e?void 0:e.category)&&void 0!==t?t:void 0})),s=a.useState(n),d=s[0],f=s[1],I=Object(O.c)(),k=function(e){return function(){f(e)}};return Object(w.a)(d,t),a.useEffect((function(){"object"==typeof window&&window.scrollTo(0,0)}),[d]),a.createElement(m.a,{title:"テーマ",tabs:a.createElement(l.a,{value:d,onChange:function(e,t){f(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},a.createElement(b.a,{label:"概要"}),e.map((function(e,t){var n;return a.createElement(b.a,{key:null!==(n=e.fieldValue)&&void 0!==n?n:t,label:e.fieldValue+" "+e.edges.length})})))},a.createElement(C,{index:d,onChangeIndex:function(e){f(e)},resistance:!0,animateHeight:"object"==typeof window},a.createElement(v.a,{value:d,index:0,disableGutters:!0},a.createElement(y.a,{title:"テーマ"}),a.createElement(g.a,null),a.createElement(g.b,null,a.createElement(E.g,null,a.createElement(E.f,null,"ロック大陸漫遊記の放送回を「アーティスト特集」「スピッツメンバーと漫遊記」など特定のテーマで分類したページです。"),a.createElement(o.a,null,e.map((function(e,t){return a.createElement(i.a,{key:t,button:!0,onClick:k(t+1)},a.createElement(c.a,{primary:e.fieldValue}),a.createElement(u.a,{variant:"button",component:"span"},e.edges.length,"回"))})))))),e.map((function(e,t){return a.createElement(v.a,{key:t,value:d,index:t+1,disableGutters:!0},a.createElement(y.a,{title:e.fieldValue,footer:"全"+e.edges.length+"回"}),a.createElement(g.a,null),a.createElement(g.b,null,a.createElement(o.a,null,e.edges.sort(I).map((function(t,n){var r=t.node;return a.createElement(p.a,{key:r.id,program:r,last:n===e.edges.length-1})})))))}))),a.createElement(g.a,null),a.createElement(x.a,null),a.createElement(g.a,null),a.createElement(g.b,null,a.createElement(j.a,null)))}},FgIt:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n("Wbzz");function u(){var e=Object(a.useStaticQuery)("3655941339");return r.useMemo((function(){return e.allProgram.edges.map((function(e){return e.node}))}),[e.allProgram.edges])}},JVN4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var r=n("q1tI"),a=n("Btix");function u(){var e=Object(a.b)().sort;return r.useCallback((function(t){return"older"===e?t:-t}),[e])}function l(){var e=u();return function(t,n){var r,a;return e((null!==(r=null==t?void 0:t.week)&&void 0!==r?r:0)-(null!==(a=null==n?void 0:n.week)&&void 0!==a?a:0))}}function o(){var e=u();return function(t,n){var r,a,u,l;return e((null!==(r=null==t||null===(a=t.node)||void 0===a?void 0:a.week)&&void 0!==r?r:0)-(null!==(u=null==n||null===(l=n.node)||void 0===l?void 0:l.week)&&void 0!==u?u:0))}}},KoUe:function(e,t,n){"use strict";var r=n("FgIt");n.d(t,"useAllPrograms",(function(){return r.a}));var a=n("v56V");n.o(a,"useAllArtists")&&n.d(t,"useAllArtists",(function(){return a.useAllArtists})),n.o(a,"useAllCategories")&&n.d(t,"useAllCategories",(function(){return a.useAllCategories})),n.o(a,"useAllNations")&&n.d(t,"useAllNations",(function(){return a.useAllNations}));var u=n("wck0");n.d(t,"useAllArtists",(function(){return u.a}));var l=n("xXBW");n.d(t,"useAllCategories",(function(){return l.a}));n("Qmzd");var o=n("RxEg");n.d(t,"useAllNations",(function(){return o.a}));n("qoXt"),n("4hPr"),n("atvy")},Qmzd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a=n("Wbzz"),u=n("rr8Y");function l(){var e=Object(a.useStaticQuery)("2209312375");return r.useMemo((function(){return e.allProgram.group.filter((function(e){return"草野マサムネ"!==e.fieldValue})).map((function(e){var t,n=Object(u.a)(e.edges,(function(e){return e.node.id}));return{fieldValue:null!==(t=e.fieldValue)&&void 0!==t?t:"selector",edges:n,totalCount:e.totalCount}})).sort((function(e,t){return t.totalCount-e.totalCount||t.edges.length-e.edges.length}))}),[e])}},RxEg:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("E9XD"),n("KQm4");var r=n("q1tI"),a=n("Wbzz");n("NFSF");function u(){var e=Object(a.useStaticQuery)("1288951134").allArtist.group;return r.useMemo((function(){return e.map((function(e){return{nation:e.fieldValue,totalCount:e.totalCount,tunesCount:e.edges.reduce((function(e,t){return e+t.node.tunesCount}),0)}})).sort((function(e,t){var n,r;return t.totalCount-e.totalCount||(null!==(n=e.nation)&&void 0!==n?n:"").localeCompare(null!==(r=t.nation)&&void 0!==r?r:"")}))}),[e])}},SLcR:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),u=n("q1tI"),l=n("iuhU"),o=n("H2TA"),i=n("MquD"),c=u.forwardRef((function(e,t){var n=e.classes,o=e.className,c=Object(a.a)(e,["classes","className"]),s=u.useContext(i.a);return u.createElement("div",Object(r.a)({className:Object(l.a)(n.root,o,"flex-start"===s.alignItems&&n.alignItemsFlexStart),ref:t},c))}));t.a=Object(o.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(c)},atvy:function(e,t,n){"use strict";n("q1tI"),n("Wbzz")},b31w:function(e,t,n){"use strict";var r=n("q1tI"),a=n("469l"),u=n("R/WZ"),l=n("ZBNC"),o=n("zLVn"),i=n("Wbzz"),c=n("tVbE"),s=n("IsqK"),d=n("SLcR"),f=n("TjOe"),m=n("lopY"),v=n("v+NH");var b=function(e){var t=e.color,n=void 0===t?"inherit":t,a=e.button,u=void 0!==a&&a,l=e.inset,b=void 0!==l&&l,g=e.to,E=e.primaryText,p=e.secondaryText,y=e.avatar,j=e.secondaryAction,x=e.textClasses,O=Object(o.a)(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction","textClasses"]);return Object(m.a)((function(e){return e.breakpoints.down("xs")}))||u?r.createElement(c.a,Object.assign({component:i.Link,to:g,button:!0},O),y?r.createElement(d.a,null,y):null,r.createElement(s.a,{classes:x,primary:E,secondary:p,inset:b}),j?r.createElement(f.a,null,j):null):r.createElement(c.a,O,y?r.createElement(d.a,null,y):null,r.createElement(s.a,{classes:x,inset:b,primary:r.createElement(v.a,{to:g,color:n},E),secondary:p||null}),j?r.createElement(f.a,null,j):null)},g=n("JatN"),E=Object(u.a)((function(e){return Object(l.a)({inset:{paddingLeft:e.spacing(2)}})}));t.a=function(e){var t,n,u,l,o,i=e.program,c=e.last,s=Object(g.a)(),d=E();return r.createElement(b,{avatar:r.createElement(a.a,{className:s.avatar,src:null!==(t=null==i||null===(n=i.fields)||void 0===n?void 0:n.image)&&void 0!==t?t:void 0,variant:"square"}),to:null!==(u=null==i||null===(l=i.fields)||void 0===l?void 0:l.slug)&&void 0!==u?u:"#",primaryText:null!==(o=null==i?void 0:i.title)&&void 0!==o?o:"タイトル",secondaryText:"第"+(null==i?void 0:i.week)+"回 "+(null==i?void 0:i.date),divider:!c,inset:!0,textClasses:d})}},qoXt:function(e,t){},rr8Y:function(e,t,n){"use strict";function r(e,t){var n=e.map(t),r=new Set(n);return Array.from(r).map((function(t){return e[n.indexOf(t)]}))}n.d(t,"a",(function(){return r}))},v56V:function(e,t){},wck0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n("Wbzz");function u(){var e=Object(a.useStaticQuery)("3466533141");return r.useMemo((function(){return e.allArtist.edges}),[e])}},xXBW:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n("Wbzz");function u(){var e=Object(a.useStaticQuery)("2821110976");return r.useMemo((function(){return e.allProgram.group.sort((function(e,t){return t.edges.length-e.edges.length}))}),[e])}}}]);
//# sourceMappingURL=component---src-pages-categories-tsx-720d71198f2d7e16beb9.js.map