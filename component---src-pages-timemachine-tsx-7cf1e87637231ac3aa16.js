(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7zBi":function(e,t,n){"use strict";var a=n("q1tI"),r=n("ofer"),l=n("R/WZ"),i=n("ZBNC"),o=Object(l.a)((function(e){var t;return Object(i.a)({root:{height:240,overflow:"hidden",position:"relative"},jumbotronBg:function(t){var n=t.image;return{height:"100%",backgroundColor:n||"light"!==e.palette.type?e.palette.grey[700]:e.palette.secondary.light,backgroundImage:n?"url("+n+")":void 0,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":void 0,transform:n?"scale(1.1)":void 0}},jumbotronText:(t={height:240,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)},t[e.breakpoints.down("xs")]={padding:e.spacing(2)},t),jumbotronTitle:{fontWeight:"bold"}})}));t.a=function(e){var t=e.header,n=e.footer,l=e.title,i=e.image,c=o({image:i});return a.createElement("div",{className:c.root},a.createElement("div",{className:c.jumbotronBg}),a.createElement("div",{className:c.jumbotronText},t?a.createElement(r.a,{variant:"subtitle2"},t):null,a.createElement(r.a,{variant:"h5",component:"h2",className:c.jumbotronTitle,gutterBottom:!0},l),n?a.createElement(r.a,{variant:"subtitle2"},n):null))}},JVN4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var a=n("q1tI"),r=n("Btix");function l(){var e=Object(r.b)().sort;return a.useCallback((function(t){return"older"===e?t:-t}),[e])}function i(){var e=l();return function(t,n){var a,r;return e((null!==(a=null==t?void 0:t.week)&&void 0!==a?a:0)-(null!==(r=null==n?void 0:n.week)&&void 0!==r?r:0))}}function o(){var e=l();return function(t,n){var a,r,l,i;return e((null!==(a=null==t||null===(r=t.node)||void 0===r?void 0:r.week)&&void 0!==a?a:0)-(null!==(l=null==n||null===(i=n.node)||void 0===i?void 0:i.week)&&void 0!==l?l:0))}}},JiCf:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),l=n("Ji2X");t.a=function(e){var t=e.index,n=e.value,i=e.children,o=Object(a.a)(e,["index","value","children"]);return r.createElement("div",{role:"tabpanel",hidden:n!==t&&n!==t+1&&n!==t-1,id:"full-width-tabpanel-"+t,"aria-labelledby":"full-width-tab-"+t},r.createElement(l.a,o,r.createElement("div",null,n===t||n===t-1||n===t+1?i:null)))}},OSZ0:function(e,t,n){"use strict";var a=n("q1tI"),r=n("JrkS"),l=n("R/WZ"),i=n("ZBNC"),o=Object(l.a)((function(){return Object(i.a)({root:{textTransform:"none"}})}));t.a=function(e){var t=o();return a.createElement(r.a,Object.assign({classes:t},e))}},SpDg:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),l=n("q1tI"),i=n("iuhU"),o=n("ye/S"),c=n("H2TA"),u=l.forwardRef((function(e,t){var n=e.animation,o=void 0===n?"pulse":n,c=e.classes,u=e.className,d=e.component,s=void 0===d?"span":d,m=e.height,v=e.variant,f=void 0===v?"text":v,b=e.width,h=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),p=Boolean(h.children);return l.createElement(s,Object(a.a)({ref:t,className:Object(i.a)(c.root,c[f],u,p&&[c.withChildren,!b&&c.fitContent,!m&&c.heightAuto],!1!==o&&c[o])},h,{style:Object(a.a)({width:b,height:m},h.style)}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",backgroundColor:Object(o.b)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(u)},TsDZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return v}));var a=n("q1tI"),r=n("ofer"),l=n("R/WZ"),i=n("ZBNC"),o=n("SpDg"),c=n("v+NH"),u=n("z+hE"),d=n("xbUD"),s=Object(l.a)((function(e){return Object(i.a)({root:{padding:e.spacing(1,0)},header:{padding:e.spacing(1)},title:{fontWeight:e.typography.fontWeightBold}})}));function m(e){var t,n,l,i,o,m,v=e.tune,f=s();return a.createElement("div",{className:f.root},a.createElement("div",{className:f.header},a.createElement(r.a,{variant:"body2",color:"textSecondary"},a.createElement(d.a,null,"第",null==v||null===(t=v.program)||void 0===t?void 0:t.week,"回"),a.createElement(d.a,null,null==v||null===(n=v.program)||void 0===n?void 0:n.date)),a.createElement(r.a,{className:f.title,variant:"body1"},a.createElement(c.a,{to:null!==(l=null==v||null===(i=v.program)||void 0===i||null===(o=i.fields)||void 0===o?void 0:o.slug)&&void 0!==l?l:"#"},null==v||null===(m=v.program)||void 0===m?void 0:m.title))),a.createElement("div",null,a.createElement(u.b,{tune:v})))}function v(){var e,t=s();return a.createElement("div",{className:t.root},a.createElement("div",{className:t.header},a.createElement(r.a,{variant:"body2",color:"textSecondary"},a.createElement(d.a,null,a.createElement(o.a,{width:40})),a.createElement(d.a,null,a.createElement(o.a,{width:60}))),a.createElement(r.a,{className:t.title,variant:"body1",color:"secondary"},a.createElement(o.a,{width:260}))),a.createElement("div",null,null!==(e=Array.from({length:4}).map((function(e,t){return a.createElement(u.a,{key:t})})))&&void 0!==e?e:null))}t.c=function(e){var t,n,l,i,o=e.program,m=s();return a.createElement("div",{className:m.root},a.createElement("div",{className:m.header},a.createElement(r.a,{variant:"body2",color:"textSecondary"},a.createElement(d.a,null,"第",null==o?void 0:o.week,"回"),a.createElement(d.a,null,null==o?void 0:o.date)),a.createElement(r.a,{className:m.title,variant:"body1"},a.createElement(c.a,{to:null!==(t=null==o||null===(n=o.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#"},null==o?void 0:o.title))),a.createElement("div",null,null!==(l=null==o||null===(i=o.playlist)||void 0===i?void 0:i.map((function(e){return a.createElement(u.b,{key:null==e?void 0:e.id,tune:e})})))&&void 0!==l?l:null))}},ek7T:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n("YwZP");function l(e,t){var n=Object(r.useLocation)(),l=n.hash,i=n.state;return console.log(l,i),a.useMemo((function(){console.log(i);var n="object"==typeof i&&"function"==typeof t?t(i):null,a=n?e.indexOf(n):-1;if(a>=0)return a;var r=function(e){return""!==e&&"#"===e.slice(0,1)?decodeURI(e.slice(1)):""}(l),o=e.indexOf(r);return o>=0?o:0}),[])}function i(e,t){var n=Object(r.useLocation)().pathname;a.useEffect((function(){var a;window&&"object"==typeof window&&window.history.replaceState(e,"",0!==e?""!==(a=t[e])?"#"+a:"":n)}),[e,t,n])}},"kPp+":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return h}));var a=n("zLVn"),r=n("q1tI"),l=n("Ji2X"),i=n("ofer"),o=n("hlie"),c=n("R/WZ"),u=n("ZBNC"),d=Object(c.a)((function(e){return Object(u.a)({root:{padding:e.spacing(2,0)},section:{paddingBottom:e.spacing(1)},h2:{paddingBottom:e.spacing(4)},h4:{fontWeight:e.typography.fontWeightBold}})}));function s(e){var t=e.children,n=d();return r.createElement("div",{className:n.section},r.createElement("section",null,t))}function m(e){var t=e.children,n=d();return r.createElement(i.a,{className:n.h2,variant:"h6",component:"h2",align:"center"},t)}function v(e){var t=e.children;return r.createElement(i.a,{variant:"body2",paragraph:!0},t)}function f(e){var t=e.children;return r.createElement(i.a,{variant:"subtitle1",component:"h3",gutterBottom:!0},t)}function b(e){var t=e.children,n=d();return r.createElement(i.a,{className:n.h4,variant:"body2",component:"h4",gutterBottom:!0},t)}function h(e){var t=e.children,n=e.href,l=Object(a.a)(e,["children","href"]);return r.createElement(o.a,Object.assign({color:"secondary",href:n,target:"_blank",rel:"noopener noreferrer"},l),t)}t.g=function(e){var t=e.children,n=e.maxWidth,i=Object(a.a)(e,["children","maxWidth"]),o=d();return r.createElement("div",{className:o.root},r.createElement(l.a,Object.assign({maxWidth:null!=n?n:"sm"},i),r.createElement("article",null,t)))}},mhH4:function(e,t,n){"use strict";n.r(t);var a=n("KQm4"),r=n("q1tI"),l=n("ofer"),i=n("dfam"),o=n("eD//"),c=n("tVbE"),u=n("IsqK"),d=n("R/WZ"),s=n("ZBNC"),m=n("7VIw"),v=n.n(m),f=n("7wYf"),b=n("xLcO"),h=n("JiCf"),p=n("OSZ0"),E=n("7zBi"),g=n("nrjT"),y=n("TsDZ"),j=n("23bq"),w=n("Dyiq"),O=n("kPp+"),x=n("JVN4");n("E9XD");function N(e,t){var n=new Set(e.map(t));return Array.from(n).map((function(n){return{value:n,items:e.filter((function(e){return t(e)===n}))}}))}function k(e){var t=e.toString(),n="0"===t.slice(-1)?"前半":"後半";return t.slice(0,-1)+"0s"+n}function B(e){return e.items.reduce((function(e,t){return e+t.items.length}),0)}var S=n("ek7T"),I=Object(f.bindKeyboard)(v.a),C=Object(d.a)((function(e){return Object(s.a)({year:{padding:e.spacing(2,0)},yearHeader:{padding:e.spacing(0,1)}})}));t.default=function(e){var t,n=function(e,t,n){var a=N(e,n).sort((function(e,t){return e.value-t.value}));return N(a,(function(e){return Math.floor(e.value/t)*t}))}(null!==(t=e.data.allTunes)&&void 0!==t?t:[],5,(function(e){var t;return null!==(t=null==e?void 0:e.year)&&void 0!==t?t:0})).sort((function(e,t){return t.value-e.value})),d=r.useMemo((function(){return[""].concat(Object(a.a)(n.map((function(e){return e.value.toString()}))))}),[n]),s=Object(S.b)(d),m=r.useState(s),v=m[0],f=m[1],W=C(),Z=Object(x.a)(),q=function(e){return function(){f(e)}};return Object(S.a)(v,d),r.useEffect((function(){"object"==typeof window&&window.scrollTo(0,0)}),[v]),r.createElement(b.a,{title:"ちょっぴりタイムマシン",tabs:r.createElement(i.a,{value:v,onChange:function(e,t){f(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},r.createElement(p.a,{label:"概要"}),n.sort((function(e,t){return t.value-e.value})).map((function(e){return r.createElement(p.a,{key:e.value,label:k(e.value)})})))},r.createElement(I,{index:v,onChangeIndex:function(e){f(e)},resistance:!0,animateHeight:!0},r.createElement(h.a,{value:v,index:0,disableGutters:!0},r.createElement(E.a,{title:"ちょっぴりタイムマシン"}),r.createElement(g.a,null),r.createElement(g.b,null,r.createElement(O.g,null,r.createElement(O.f,null,"ちょっぴりタイムマシンは、放送の最後にオンエアされる「最近ラジオでかかってない少し前の日本の楽曲を掘り起こそう」というコーナーです。ちょっぴりタイムマシンで放送された楽曲を年代別に分類したページです。"),r.createElement(o.a,null,n.map((function(e,t){return r.createElement(c.a,{key:t,button:!0,onClick:q(t+1)},r.createElement(u.a,{primary:k(e.value)}),r.createElement(l.a,{variant:"button",component:"span"},B(e),"曲"))})))))),n.map((function(e,t){return r.createElement(h.a,{key:t,value:v,index:t+1,disableGutters:!0},r.createElement(E.a,{title:k(e.value),footer:"全"+B(e)+"曲"}),r.createElement(g.a,null),r.createElement(g.b,null,Object(a.a)(e.items).sort((function(e,t){return Z(e.value-t.value)})).map((function(e){return r.createElement("div",{key:e.value,className:W.year},r.createElement("div",{className:W.yearHeader},r.createElement(l.a,{variant:"h6"},e.value)),r.createElement("div",null,e.items.map((function(e){return r.createElement(y.a,{key:null==e?void 0:e.id,tune:e})}))))}))))}))),r.createElement(g.a,null),r.createElement(w.a,null),r.createElement(g.a,null),r.createElement(g.b,null,r.createElement(j.a,null)))}},xLcO:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),l=n("Iu20");var i=function(e){var t=e.children,n=e.maxWidth,i=void 0===n?"xl":n,o=e.disablePaddingTop,c=void 0===o||o,u=e.disableGutters,d=void 0===u||u,s=Object(a.a)(e,["children","maxWidth","disablePaddingTop","disableGutters"]);return r.createElement(l.a,Object.assign({maxWidth:i,disablePaddingTop:c,disableGutters:d},s),t)};t.a=function(e){var t=e.children,n=e.tabs,l=Object(a.a)(e,["children","tabs"]);return r.createElement(i,Object.assign({tabSticky:!0,disableGutters:!0,componentViewports:{BottomNav:!1}},l,{tabs:n}),t)}},xbUD:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),l=n("ofer"),i=n("R/WZ"),o=n("ZBNC"),c=Object(i.a)((function(e){return Object(o.a)({root:{marginRight:e.spacing(.5),display:"inline-block"}})}));t.a=function(e){var t,n=e.children,i=Object(a.a)(e,["children"]),o=c();return n?r.createElement(l.a,Object.assign({className:o.root,component:"span"},i,{variant:null!==(t=i.variant)&&void 0!==t?t:"inherit"}),n):null}},"z+hE":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),r=n("ofer"),l=n("469l"),i=n("R/WZ"),o=n("ZBNC"),c=n("SpDg"),u=n("v+NH"),d=n("xbUD"),s=n("h/Rp"),m=n("JatN"),v=Object(i.a)((function(e){return Object(o.a)({root:{display:"flex",padding:e.spacing(1,0)},left:{display:"flex",padding:e.spacing(0,1),alignItems:"center",flexShrink:0},right:{display:"flex",flexDirection:"column",padding:e.spacing(0,1),flexGrow:1}})}));function f(){var e=v(),t=Object(m.a)();return a.createElement("div",{className:e.root},a.createElement("div",{className:e.left},a.createElement(l.a,{className:t.avatar,variant:"square",src:void 0},a.createElement(s.h,null))),a.createElement("div",{className:e.right},a.createElement(r.a,{variant:"body2",color:"textSecondary"},a.createElement(d.a,null,a.createElement(c.a,{width:100}))),a.createElement("div",null,a.createElement(r.a,null,a.createElement(c.a,{width:160})),a.createElement(r.a,{variant:"body2"},a.createElement(d.a,null,a.createElement(c.a,{width:100}))))))}t.b=function(e){var t,n,i,o=e.tune,c=v(),f=Object(m.a)();return a.createElement("div",{className:c.root},a.createElement("div",{className:c.left},a.createElement(l.a,{className:f.avatar,variant:"square",src:null!=o&&o.youtube?"https://i.ytimg.com/vi/"+(null==o?void 0:o.youtube)+"/0.jpg":void 0},a.createElement(s.h,null))),a.createElement("div",{className:c.right},a.createElement(r.a,{variant:"body2",color:"textSecondary"},a.createElement(d.a,null,"M"+(null==o?void 0:o.indexInWeek)+"."),a.createElement(d.a,null,null==o?void 0:o.corner),null!=o&&o.selector&&"草野マサムネ"!==o.selector?a.createElement(d.a,null,o.selector,"選曲"):null),a.createElement("div",null,a.createElement(r.a,null,null==o?void 0:o.title),a.createElement(r.a,{variant:"body2"},a.createElement(d.a,null,"スピッツ"!==(null==o||null===(t=o.artist)||void 0===t?void 0:t.name)?a.createElement(u.a,{to:"/artist/"+(null==o||null===(n=o.artist)||void 0===n?void 0:n.name),color:"inherit"},null==o||null===(i=o.artist)||void 0===i?void 0:i.name):"スピッツ"),a.createElement(d.a,{color:"textSecondary"},"("+(null==o?void 0:o.year)+")")))))}}}]);
//# sourceMappingURL=component---src-pages-timemachine-tsx-7cf1e87637231ac3aa16.js.map