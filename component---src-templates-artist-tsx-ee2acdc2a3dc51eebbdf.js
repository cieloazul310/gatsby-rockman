(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7SMM":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6CzD");function a(e,t){void 0===t&&(t={});var n=t.sortType||"abc";return Object(r.a)(e).sort((function(e,t){return"edges"===n?function(e,t){return-(e.edges.length-t.edges.length)}(e,t)||u(e,t):"tunes"===n&&function(e,t){return-(e.tunes.length-t.tunes.length)}(e,t)||u(e,t)}))}function u(e,t){return i(e.fieldValue,e.kana).localeCompare(i(t.fieldValue,t.kana))}function i(e,t){var n=e.slice(0,4);return"The "===n||"THE "===n||"the "===n?e.slice(4):t||e}},"7zBi":function(e,t,n){"use strict";var r=n("mXGw"),a=n("R82R"),u=n("ozoj"),i=n("BQn0"),l=n("/ZiB"),o=Object(a.a)((function(e){return Object(u.a)({jumbotronBg:function(t){var n=t.imgUrl;return{height:"100%",backgroundColor:e.palette.grey[700],backgroundImage:n?"url("+n+")":void 0,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":void 0,transform:n?"scale(1.1)":void 0}},jumbotronText:function(t){var n;return(n={height:t.height,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)})[e.breakpoints.down("xs")]={padding:e.spacing(2)},n},jumbotronTitle:{fontWeight:"bold"},artists:{margin:0,padding:0},artist:{display:"inline-block",marginRight:".6em"}})}));t.a=function(e){var t=e.header,n=e.subtitle,a=e.title,u=e.artists,c=e.imgUrl,s=e.height,d=void 0===s?300:s,f=o({imgUrl:c,height:d});return r.createElement(i.a,{height:d,overflow:"hidden",position:"relative"},r.createElement("div",{className:f.jumbotronBg}),r.createElement("div",{className:f.jumbotronText},r.createElement(l.a,{variant:"subtitle2"},t),r.createElement(l.a,{variant:"h3",component:"h2",className:f.jumbotronTitle,gutterBottom:!0},a),n?r.createElement(l.a,{variant:"subtitle1"},n):null,u?r.createElement("ul",{className:f.artists},u.map((function(e){return r.createElement(l.a,{className:f.artist,variant:"subtitle2",component:"li",key:e},e)}))):null))}},DCqF:function(e,t,n){"use strict";var r=n("mXGw"),a=n("u44p"),u=n("NUsa"),i=n("YZpo"),l=n("5bSt"),o=n("xR0W"),c=n.n(o),s=n("ylWx"),d=n.n(s),f=n("HexO");t.a=function(e){var t=e.previous,n=e.next;return r.createElement(a.a,{subheader:r.createElement(u.a,null,"Navigation")},t?r.createElement(f.a,{dense:!0,button:!0,to:t.to},r.createElement(i.a,null,r.createElement(c.a,null)),r.createElement(l.a,{primary:t.title,secondary:"prev"})):null,n?r.createElement(f.a,{dense:!0,button:!0,to:n.to},r.createElement(i.a,null,r.createElement(d.a,null)),r.createElement(l.a,{primary:n.title,secondary:"next"})):null)}},JVN4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("mXGw"),a=n("fUi+");function u(){var e=Object(a.b)().sort;return r.useCallback((function(t){return"older"===e?t:-t}),[e])}},KoUe:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return g}));var r=n("mXGw"),a=n("Wbzz");function u(){var e=Object(a.useStaticQuery)("999573131");return r.useMemo((function(){return e.allProgram.edges.map((function(e){var t,n,r=e.node,a=(null!==(t=null===(n=r.playlist)||void 0===n?void 0:n.filter((function(e,t){return 0!==t&&(null==e?void 0:e.youtube)&&""!==e.youtube})).map((function(e){return null==e?void 0:e.youtube})))&&void 0!==t?t:[])[0];return Object.assign({},r,{img:a?"https://i.ytimg.com/vi/"+a+"/0.jpg":null})}))}),[e.allProgram.edges])}var i=n("6CzD");var l=n("7SMM");function o(){var e=Object(a.useStaticQuery)("3372252566");return r.useMemo((function(){return e.allProgram.group.map((function(e){var t,n=function(e){return e.reduce((function(e,t){return e.map((function(e){return e.node.id})).indexOf(t.node.id)>=0?e:[].concat(Object(i.a)(e),[t])}),[])}(e.edges).map((function(t){var n,r,a=t.node;return Object.assign({},a,{playlist:null!==(n=null==a||null===(r=a.playlist)||void 0===r?void 0:r.filter((function(t){return(null==t?void 0:t.artist)===e.fieldValue})))&&void 0!==n?n:[]})})),r=n.reduce((function(e,t){return t.playlist?[].concat(Object(i.a)(e),Object(i.a)(t.playlist)):e}),[]),a=r[0],u=a.kana,l=a.nation,o=r.filter((function(e){return(null==e?void 0:e.youtube)&&""!==e.youtube})).map((function(e){return null==e?void 0:e.youtube})).slice(-1)[0];return{fieldValue:null!==(t=e.fieldValue)&&void 0!==t?t:"",kana:null!=u?u:void 0,nation:null!=l?l:"",edges:n,tunes:r,img:o?"https://i.ytimg.com/vi/"+o+"/0.jpg":void 0}}))}),[e])}function c(e,t){void 0===t&&(t=0);var n=o();return r.useMemo((function(){return Object(l.a)(n,{sortType:e}).slice(0,t||n.length)}),[e,t,n])}function s(){var e=Object(a.useStaticQuery)("3859703565");return r.useMemo((function(){return e.allProgram.group.sort((function(e,t){return t.edges.length-e.edges.length}))}),[e])}function d(e){var t=s();return r.useMemo((function(){return t.filter((function(t){return t.fieldValue&&e.includes(t.fieldValue)}))}),[e,t])}n("Qmzd");var f=n("NFSF");function m(){var e=o(),t=Array.from(new Set(e.map((function(e){return e.nation}))));return r.useMemo((function(){return t.map((function(t){return{nation:t,artists:e.filter((function(e){return t===e.nation})).length,tunes:e.filter((function(e){return t===e.nation})).reduce((function(e,t){return e+t.tunes.length}),0)}})).sort((function(e,t){return t.artists-e.artists||e.nation.localeCompare(t.nation)}))}),[t,e])}function v(){var e=m();return r.useMemo((function(){var t=e.reduce((function(e,t){return f.b.includes(t.nation)?[[].concat(Object(i.a)(e[0]),[t]),Object(i.a)(e[1])]:[Object(i.a)(e[0]),[].concat(Object(i.a)(e[1]),[t])]}),[[],[]]),n=t[0],r=t[1];return[].concat(Object(i.a)(n),[r.reduce((function(e,t){return Object.assign({},e,{artists:e.artists+t.artists,tunes:e.tunes+t.tunes})}),{nation:"others",artists:0,tunes:0})])}),[e])}function p(){var e,t=(e=u(),r.useMemo((function(){return e.reduce((function(e,t){return t.playlist?[].concat(Object(i.a)(e),Object(i.a)(t.playlist)):e}),[])}),[e])),n=Object(a.useStaticQuery)("2825366380");return r.useMemo((function(){return n.allProgram.group.map((function(e){var n=e.fieldValue;return{fieldValue:n,tunes:t.filter((function(e){return(null==e?void 0:e.year)===parseInt(null!=n?n:"0",10)}))}}))}),[t,n])}function g(e){void 0===e&&(e=[]),e.forEach((function(e){if(e%10!=0)throw new Error}));var t=p();return r.useMemo((function(){var n,r=10*Math.floor(parseInt(null!==(n=t[0].fieldValue)&&void 0!==n?n:"1960",10)/10),a=10*Math.floor((new Date).getFullYear()/10);return(e.length?e:Array.from({length:(a-r)/10+1},(function(e,t){return r+10*t}))).map((function(e){var n=t.filter((function(t){var n=t.fieldValue;return Math.floor(parseInt(null!=n?n:"0",10)/10)===e/10}));return{fieldValue:e+"s",value:n.reduce((function(e,t){return e+t.tunes.length}),0),items:n}}))}),[t,e])}},Rgr8:function(e,t,n){"use strict";var r=n("mXGw"),a=n("BQn0"),u=n("SUdF"),i=n("/ZiB"),l=n("MU2d"),o=n("LOiH");var c=function(e){var t,n,u,c,s=e.program,d=e.filter,f=void 0===d?function(){return!0}:d;return r.createElement(a.a,{py:2},r.createElement(i.a,{variant:"subtitle2",component:"span"},"第",s.week,"回 ",s.date),r.createElement(i.a,{variant:"h6",component:"h3",gutterBottom:!0},r.createElement(l.a,{to:null!==(t=null===(n=s.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#"},s.title)),null!==(u=null==s||null===(c=s.playlist)||void 0===c?void 0:c.filter(f).map((function(e,t){var n;return r.createElement(o.b,{key:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:t,tune:e})})))&&void 0!==u?u:null)},s=n("6CzD"),d=n("JVN4");function f(){return r.createElement(a.a,{py:4},r.createElement(o.a,null))}function m(e){var t=e.children,n=e.margin,a=void 0===n?0:n,i=e.once,l=void 0===i||i,o=Object(u.a)({rootMargin:a+"px",triggerOnce:l}),c=o[0],s=o[1];return r.createElement("div",{ref:c},s?t:r.createElement(f,null))}t.a=function(e){var t=e.programs,n=e.filter,a=void 0===n?function(){return!0}:n,u=e.divisor,i=function(e,t,n){void 0===n&&(n=function(){return!0});var a=Object(d.a)();return r.useMemo((function(){return e.sort((function(e,t){return a(e.week&&t.week?e.week-t.week:0)})).reduce((function(e,r,a){var u,i,l=Object.assign({},r,{playlist:null!==(u=null===(i=r.playlist)||void 0===i?void 0:i.filter(n))&&void 0!==u?u:[]});return 0===a?[[l]]:function(e){return e.reduce((function(e,t){return t.playlist?e+t.playlist.length:e}),0)}(e[e.length-1])<t?(e[e.length-1].push(l),e):[].concat(Object(s.a)(e),[[l]])}),[])}),[e,t,n,a])}(t,void 0===u?15:u,a),l=r.useMemo((function(){return i.map((function(e,t){return 0===t?r.createElement("div",{key:t},e.map((function(e){return r.createElement(c,{program:e,key:e.id})}))):r.createElement(m,{key:t,margin:40},e.map((function(e){return r.createElement(c,{program:e,key:e.id})})))}))}),[i]);return r.createElement("div",null,l)}},Zfvn:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("mXGw"),a=n("Wbzz"),u=n("R82R"),i=n("ozoj"),l=n("BQn0"),o=n("/NZN"),c=n("xR0W"),s=n.n(c),d=n("ylWx"),f=n.n(d),m=(n("9dpD"),Object(u.a)((function(e){var t;return Object(i.a)({root:(t={display:"flex",flexDirection:"row",justifyContent:"space-between"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t)})})));function v(e,t,n){return{previous:e?{to:n+"/"+e.fieldValue+"/",title:e.fieldValue}:void 0,next:t?{to:n+"/"+t.fieldValue,title:t.fieldValue}:void 0}}t.b=function(e){var t=e.previous,n=e.next,u=m();return r.createElement(l.a,{className:u.root},t?r.createElement(l.a,{py:1,pr:1,textAlign:"left"},r.createElement(o.a,{component:a.Link,variant:"outlined",to:t.to},r.createElement(s.a,null),t.title)):null,n?r.createElement(l.a,{py:1,pl:1,textAlign:"right"},r.createElement(o.a,{component:a.Link,variant:"outlined",to:n.to},n.title,r.createElement(f.a,null))):null)}},amBo:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return N}));var r=n("mXGw"),a=n("Wbzz"),u=n("/ZiB"),i=n("5UIW"),l=n("BQn0"),o=n("9dpD"),c=n("zaJg"),s=n.n(c),d=n("FJwj"),f=n("ThN4"),m=n("7zBi"),v=n("Rgr8"),p=n("LOiH"),g=n("DCqF"),b=n("Zfvn"),E=n("y16u"),h=n("23bq"),y=n("6CzD"),j=n("/NZN"),O=n("R82R"),w=n("ozoj"),x=Object(O.a)((function(e){return Object(w.a)({root:{margin:0,padding:0},item:{display:"inline-block",padding:0,marginRight:e.spacing(1)}})}));var k=function(e){var t=e.edges,n=x();return r.createElement("ul",{className:n.root},function(e){var t=e.map((function(e){var t;return null!==(t=e.node.playlist)&&void 0!==t?t:[]})).reduce((function(e,t){return e&&t?[].concat(Object(y.a)(e),Object(y.a)(t)):e}),[]);return Array.from(new Set(t.map((function(e){var t;return null!==(t=null==e?void 0:e.artist)&&void 0!==t?t:""})))).sort((function(e,t){return e.localeCompare(t)}))}(t).map((function(e){return r.createElement("li",{key:e,className:n.item},r.createElement(j.a,{component:a.Link,to:"/artist/"+e+"/"},e))})))},M=n("7SMM"),V=n("KoUe"),z=Object(d.bindKeyboard)(Object(d.virtualize)(s.a));t.default=function(e){var t=e.data,n=e.pageContext,c=Object(V.a)(),s=r.useMemo((function(){return Object(M.a)(c)}),[c]),d=n.previous,y=n.next,j=n.index,O=n.fieldValue,w=t.allProgram.edges,x=r.useState(!1),N=x[0],B=x[1],C=r.useState(j),S=C[0],R=C[1];return r.useEffect((function(){var e=setTimeout((function(){S!==j&&(B(!0),Object(a.navigate)("/artist/"+s[S].fieldValue))}),500);return function(){clearTimeout(e)}}),[S,s,j]),r.createElement(f.a,{title:O,disableGutters:!0,disablePaddingTop:!0,loading:N,maxWidth:!1,componentViewports:{BottomNav:!1},drawerContents:r.createElement(g.a,Object(b.a)(d,y,"/artist"))},r.createElement(z,{index:S,onChangeIndex:function(e){R(e)},slideRenderer:function(e){var t=e.index,n=e.key,a=s[t];return r.createElement("div",{key:n},r.createElement(m.a,{title:a.fieldValue,subtitle:"登場回: "+a.edges.length+" 曲数: "+a.tunes.length,imgUrl:a.img}),r.createElement(i.a,{maxWidth:"md"},r.createElement(l.a,{pt:4},a.fieldValue===O?r.createElement("div",null,r.createElement(v.a,{programs:w.map((function(e){return e.node})),filter:function(e){return e.artist===O}}),r.createElement(E.a,null,r.createElement(b.b,Object(b.a)(d,y,"/artist"))),"スピッツ"!==a.fieldValue?r.createElement(E.a,null,r.createElement(u.a,{variant:"h6",component:"h3",gutterBottom:!0},a.fieldValue,"と同じ回で登場したアーティスト"),r.createElement(k,{edges:w})):null,r.createElement(E.a,null,r.createElement(h.a,null))):r.createElement("div",null,r.createElement(l.a,{py:2},r.createElement(u.a,{variant:"subtitle2"},r.createElement(o.a,{variant:"text",width:100})),r.createElement(u.a,{variant:"h6"},r.createElement(o.a,{variant:"text"})),r.createElement(p.a,null))))))},slideCount:s.length,resistance:!0}))};var N="1228417001"},xR0W:function(e,t,n){"use strict";var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),u=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=u},ylWx:function(e,t,n){"use strict";var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),u=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=u}}]);
//# sourceMappingURL=component---src-templates-artist-tsx-ee2acdc2a3dc51eebbdf.js.map