(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4hPr":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n("Wbzz");function u(){var e=Object(r.useStaticQuery)("75097974");return a.useMemo((function(){return e.allArtist.edges}),[e])}},"4qGM":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n("dfam"),u=n("JrkS"),o=n("eD//"),l=n("YwZP"),i=n("7VIw"),c=n.n(i),s=n("7wYf"),d=n("mIa/"),f=n("JiCf"),m=n("nrjT"),v=n("b31w"),b=n("7zBi"),g=n("23bq"),A=n("Dyiq"),y=n("JVN4"),p=n("KoUe"),w=Object(s.bindKeyboard)(c.a);t.default=function(){var e,t,n=Object(l.useLocation)(),i=n.hash,c=n.state,s=Object(p.useAllCategories)(),E=s.map((function(e){return e.fieldValue})),x=""!==i?decodeURI(i.slice(1)):null,j=E.indexOf(x)>=0?E.indexOf(x):null!=c&&c.category?E.indexOf(c.category):0,O=a.useState(j),I=O[0],S=O[1],h=Object(y.a)();return a.useEffect((function(){window&&"object"==typeof window&&window.history.replaceState(I,"","#"+s[I].fieldValue)}),[I,s]),a.useEffect((function(){"object"==typeof window&&window.scrollTo(0,0)}),[I]),a.createElement(d.a,{title:null!==(e=null===(t=s[I])||void 0===t?void 0:t.fieldValue)&&void 0!==e?e:"Category",tabSticky:!0,disableGutters:!0,disablePaddingTop:!0,componentViewports:{BottomNav:!1},tabs:a.createElement(r.a,{value:I,onChange:function(e,t){S(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},s.map((function(e,t){var n;return a.createElement(u.a,{key:null!==(n=e.fieldValue)&&void 0!==n?n:t,label:e.fieldValue+" "+e.edges.length})})))},a.createElement(w,{index:I,onChangeIndex:function(e){S(e)},resistance:!0},s.map((function(e,t){return a.createElement(f.a,{key:t,value:I,index:t,disableGutters:!0},a.createElement(b.a,{title:E[I],footer:"全"+e.edges.length+"回"}),a.createElement(m.b,null,a.createElement(o.a,null,e.edges.sort((function(e,t){return h(e.node.week&&t.node.week?e.node.week-t.node.week:0)})).map((function(t,n){var r=t.node;return a.createElement(v.a,{key:r.id,program:r,last:n===e.edges.length-1})})))))}))),a.createElement(m.a,null),a.createElement(A.a,null),a.createElement(m.a,null),a.createElement(m.b,null,a.createElement(g.a,null)))}},FgIt:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n("Wbzz");function u(){var e=Object(r.useStaticQuery)("3655941339");return a.useMemo((function(){return e.allProgram.edges.map((function(e){return e.node}))}),[e.allProgram.edges])}},KoUe:function(e,t,n){"use strict";var a=n("FgIt");n.d(t,"useAllPrograms",(function(){return a.a}));var r=n("v56V");n.o(r,"useAllArtists")&&n.d(t,"useAllArtists",(function(){return r.useAllArtists})),n.o(r,"useAllCategories")&&n.d(t,"useAllCategories",(function(){return r.useAllCategories})),n.o(r,"useAllNations")&&n.d(t,"useAllNations",(function(){return r.useAllNations}));var u=n("wck0");n.d(t,"useAllArtists",(function(){return u.a}));var o=n("xXBW");n.d(t,"useAllCategories",(function(){return o.a}));n("Qmzd");var l=n("RxEg");n.d(t,"useAllNations",(function(){return l.a}));n("qoXt"),n("4hPr"),n("atvy")},NFSF:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return m}));n("q1tI"),n("tr08");var a=n("edxh"),r=n("Yb7a"),u=n("6yBS"),o={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},l=n("dl/7"),i={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},c=n("LXXt"),s={JPN:a.a,UK:r.a,US:u.a,FR:o,CAN:l.a,AUS:i},d=Object.keys(s);function f(e){return d.includes(e)}function m(e,t){return void 0===t&&(t=!1),f(e)?t?s[e][300]:s[e][500]:c.a[500]}},RxEg:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("E9XD"),n("KQm4");var a=n("q1tI"),r=n("Wbzz");n("NFSF");function u(){var e=Object(r.useStaticQuery)("1288951134").allArtist.group;return a.useMemo((function(){return e.map((function(e){return{nation:e.fieldValue,totalCount:e.totalCount,tunesCount:e.edges.reduce((function(e,t){return e+t.node.tunesCount}),0)}})).sort((function(e,t){var n,a;return t.totalCount-e.totalCount||(null!==(n=e.nation)&&void 0!==n?n:"").localeCompare(null!==(a=t.nation)&&void 0!==a?a:"")}))}),[e])}},SLcR:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),u=n("q1tI"),o=n("iuhU"),l=n("H2TA"),i=n("MquD"),c=u.forwardRef((function(e,t){var n=e.classes,l=e.className,c=Object(r.a)(e,["classes","className"]),s=u.useContext(i.a);return u.createElement("div",Object(a.a)({className:Object(o.a)(n.root,l,"flex-start"===s.alignItems&&n.alignItemsFlexStart),ref:t},c))}));t.a=Object(l.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(c)},atvy:function(e,t,n){"use strict";n("q1tI"),n("Wbzz")},b31w:function(e,t,n){"use strict";var a=n("q1tI"),r=n("469l"),u=n("zLVn"),o=n("Wbzz"),l=n("tVbE"),i=n("IsqK"),c=n("SLcR"),s=n("TjOe"),d=n("lopY"),f=n("v+NH");var m=function(e){var t=e.color,n=void 0===t?"inherit":t,r=e.button,m=void 0!==r&&r,v=e.inset,b=void 0!==v&&v,g=e.to,A=e.primaryText,y=e.secondaryText,p=e.avatar,w=e.secondaryAction,E=Object(u.a)(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction"]);return Object(d.a)((function(e){return e.breakpoints.down("xs")}))||m?a.createElement(l.a,Object.assign({component:o.Link,to:g,button:!0},E),p?a.createElement(c.a,null,p):null,a.createElement(i.a,{primary:A,secondary:y,inset:b}),w?a.createElement(s.a,null,w):null):a.createElement(l.a,E,p?a.createElement(c.a,null,p):null,a.createElement(i.a,{inset:b,primary:a.createElement(f.a,{to:g,color:n},A),secondary:y||null}),w?a.createElement(s.a,null,w):null)},v=n("JatN");t.a=function(e){var t,n,u,o,l,i=e.program,c=e.last,s=Object(v.a)();return a.createElement(m,{avatar:a.createElement(r.a,{className:s.avatar,src:null!==(t=null==i||null===(n=i.fields)||void 0===n?void 0:n.image)&&void 0!==t?t:void 0,variant:"square"}),to:null!==(u=null==i||null===(o=i.fields)||void 0===o?void 0:o.slug)&&void 0!==u?u:"#",primaryText:null!==(l=null==i?void 0:i.title)&&void 0!==l?l:"タイトル",secondaryText:"第"+(null==i?void 0:i.week)+"回 "+(null==i?void 0:i.date),divider:!c,inset:!0})}},qoXt:function(e,t){},v56V:function(e,t){},wck0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n("Wbzz");function u(){var e=Object(r.useStaticQuery)("3466533141");return a.useMemo((function(){return e.allArtist.edges}),[e])}},xXBW:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n("Wbzz");function u(){var e=Object(r.useStaticQuery)("2821110976");return a.useMemo((function(){return e.allProgram.group.sort((function(e,t){return t.edges.length-e.edges.length}))}),[e])}}}]);
//# sourceMappingURL=component---src-pages-categories-tsx-5b56a5059ce03f51c3d7.js.map