(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/2Yb":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return T}));var r=n("mXGw"),a=n("Wbzz"),l=n("BQn0"),i=n("zaJg"),u=n.n(i),o=n("FJwj"),c=n("u44p"),s=n("NUsa"),d=n("ThN4"),f=n("gFAl"),m=n("7zBi"),v=n("DCqF"),g=n("LOiH"),b=n("Zfvn"),p=n("23bq"),h=n("y16u"),y=n("+I+c"),E=n("5UIW"),j=n("1Dig"),x=n("lOOT");var O=function(e){var t=e.children,n=Object(y.a)(e,["children"]),a=Object(x.a)(),l=Object(j.a)(a.breakpoints.only("xs"));return r.createElement(E.a,Object.assign({disableGutters:l},n),t)},w=n("KoUe");var k=n("6CzD");function M(e,t,n){void 0===n&&(n=5);var r=e.map((function(e){return e.node.id})).indexOf(t),a=function(e,t,n){var r=Math.min(n,e),a=Math.floor(r/2);return t<a?[0,r]:t>=e-a?[e-r,e]:[t-a,t+a+1]}(e.length,r,n),l=a[0],i=a[1];return Object(k.a)(e).slice(l,i)}var z=Object(o.bindKeyboard)(Object(o.virtualize)(u.a));t.default=function(e){var t,n,i=e.data,u=e.pageContext,o=i.program,y=u.previous,E=u.next,j=u.index,x=u.slug,k=Object(w.d)(),T=Object(w.f)(null!==(t=null==o?void 0:o.categories)&&void 0!==t?t:[]),V=function(e){var t=e.week,n=e.title,r=e.date,a=e.subtitle,l=e.guests,i=new Date(r);return["スピッツ・草野マサムネがパーソナリティを務める","「SPITZ 草野マサムネのロック大陸漫遊記」",i.getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日放送の","第"+t+"回","「"+n+"」",a?"〜"+a+"〜":"","のプレイリスト。",(null==l?void 0:l.length)?"ゲストは"+l.join("、")+"。":""].join("")}(o),N=r.useState(!1),I=N[0],A=N[1],C=r.useState(j),D=C[0],W=C[1];return r.useEffect((function(){var e=setTimeout((function(){var e,t,n;D!==j&&(A(!0),Object(a.navigate)(null!==(e=null===(t=k[D])||void 0===t||null===(n=t.fields)||void 0===n?void 0:n.slug)&&void 0!==e?e:"#"))}),500);return function(){clearTimeout(e)}}),[D,j,k]),r.createElement(d.a,{title:null!==(n=null==o?void 0:o.title)&&void 0!==n?n:"放送回",description:V,disableGutters:!0,disablePaddingTop:!0,maxWidth:!1,loading:I,componentViewports:{BottomNav:!1},drawerContents:r.createElement(v.a,S(y,E))},r.createElement(z,{index:D,onChangeIndex:function(e){W(e)},slideRenderer:function(e){var t,n,a,i,u,d,v,j,w=e.index,z=e.key,V=k[w];return r.createElement("div",{key:z},r.createElement(m.a,{title:null!==(t=V.title)&&void 0!==t?t:"Artist",header:"第"+V.week+"回 "+V.date+" 全"+(null!==(n=null===(a=V.playlist)||void 0===a?void 0:a.length)&&void 0!==n?n:0)+"曲",subtitle:null!==(i=V.subtitle)&&void 0!==i?i:void 0,artists:Array.from(new Set(null===(u=V.playlist)||void 0===u?void 0:u.map((function(e){var t;return null!==(t=null==e?void 0:e.artist)&&void 0!==t?t:""})))),imgUrl:null!==(d=V.img)&&void 0!==d?d:void 0}),r.createElement(O,{maxWidth:"md"},r.createElement(l.a,{pt:4},(null===(v=V.fields)||void 0===v?void 0:v.slug)===x?r.createElement("div",null,null==o||null===(j=o.playlist)||void 0===j?void 0:j.map((function(e,t){var n;return e?r.createElement(g.b,{key:null!==(n=e.id)&&void 0!==n?n:t,tune:e}):null})),r.createElement(h.a,null,r.createElement(b.b,S(y,E))),r.createElement(h.a,null,T.map((function(e,t){var n;return r.createElement(c.a,{key:t,subheader:r.createElement(s.a,null,e.fieldValue)},M(e.edges,null!==(n=null==o?void 0:o.id)&&void 0!==n?n:"dummy").map((function(e){var t,n,a;return r.createElement(f.a,{key:e.node.id,selected:e.node.id===(null==o?void 0:o.id),to:null!==(t=null===(n=e.node.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#",primaryText:null!==(a=e.node.title)&&void 0!==a?a:"Program",secondaryText:"第"+e.node.week+"回 "+e.node.date,divider:!0,dense:!0})})))}))),r.createElement(h.a,null,r.createElement(p.a,null))):r.createElement("div",null,r.createElement(g.a,null),r.createElement(g.a,null),r.createElement(g.a,null)))))},slideCount:k.length,resistance:!0}))};function S(e,t){var n,r,a,l;return{previous:e?{to:null!==(n=null===(r=e.fields)||void 0===r?void 0:r.slug)&&void 0!==n?n:"#",title:e.title}:null,next:t?{to:null!==(a=null===(l=t.fields)||void 0===l?void 0:l.slug)&&void 0!==a?a:"#",title:t.title}:null}}var T="3419295826"},"7SMM":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6CzD");function a(e,t){void 0===t&&(t={});var n=t.sortType||"abc";return Object(r.a)(e).sort((function(e,t){return"edges"===n?function(e,t){return-(e.edges.length-t.edges.length)}(e,t)||l(e,t):"tunes"===n&&function(e,t){return-(e.tunes.length-t.tunes.length)}(e,t)||l(e,t)}))}function l(e,t){return i(e.fieldValue,e.kana).localeCompare(i(t.fieldValue,t.kana))}function i(e,t){var n=e.slice(0,4);return"The "===n||"THE "===n||"the "===n?e.slice(4):t||e}},"7zBi":function(e,t,n){"use strict";var r=n("mXGw"),a=n("R82R"),l=n("ozoj"),i=n("BQn0"),u=n("/ZiB"),o=Object(a.a)((function(e){return Object(l.a)({jumbotronBg:function(t){var n=t.imgUrl;return{height:"100%",backgroundColor:e.palette.grey[700],backgroundImage:n?"url("+n+")":void 0,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":void 0,transform:n?"scale(1.1)":void 0}},jumbotronText:function(t){var n;return(n={height:t.height,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)})[e.breakpoints.down("xs")]={padding:e.spacing(2)},n},jumbotronTitle:{fontWeight:"bold"},artists:{margin:0,padding:0},artist:{display:"inline-block",marginRight:".6em"}})}));t.a=function(e){var t=e.header,n=e.subtitle,a=e.title,l=e.artists,c=e.imgUrl,s=e.height,d=void 0===s?300:s,f=o({imgUrl:c,height:d});return r.createElement(i.a,{height:d,overflow:"hidden",position:"relative"},r.createElement("div",{className:f.jumbotronBg}),r.createElement("div",{className:f.jumbotronText},r.createElement(u.a,{variant:"subtitle2"},t),r.createElement(u.a,{variant:"h3",component:"h2",className:f.jumbotronTitle,gutterBottom:!0},a),n?r.createElement(u.a,{variant:"subtitle1"},n):null,l?r.createElement("ul",{className:f.artists},l.map((function(e){return r.createElement(u.a,{className:f.artist,variant:"subtitle2",component:"li",key:e},e)}))):null))}},DCqF:function(e,t,n){"use strict";var r=n("mXGw"),a=n("u44p"),l=n("NUsa"),i=n("YZpo"),u=n("5bSt"),o=n("xR0W"),c=n.n(o),s=n("ylWx"),d=n.n(s),f=n("HexO");t.a=function(e){var t=e.previous,n=e.next;return r.createElement(a.a,{subheader:r.createElement(l.a,null,"Navigation")},t?r.createElement(f.a,{dense:!0,button:!0,to:t.to},r.createElement(i.a,null,r.createElement(c.a,null)),r.createElement(u.a,{primary:t.title,secondary:"prev"})):null,n?r.createElement(f.a,{dense:!0,button:!0,to:n.to},r.createElement(i.a,null,r.createElement(d.a,null)),r.createElement(u.a,{primary:n.title,secondary:"next"})):null)}},KoUe:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return b}));var r=n("mXGw"),a=n("Wbzz");function l(){var e=Object(a.useStaticQuery)("999573131");return r.useMemo((function(){return e.allProgram.edges.map((function(e){var t,n,r=e.node,a=(null!==(t=null===(n=r.playlist)||void 0===n?void 0:n.filter((function(e,t){return 0!==t&&(null==e?void 0:e.youtube)&&""!==e.youtube})).map((function(e){return null==e?void 0:e.youtube})))&&void 0!==t?t:[])[0];return Object.assign({},r,{img:a?"https://i.ytimg.com/vi/"+a+"/0.jpg":null})}))}),[e.allProgram.edges])}var i=n("6CzD");var u=n("7SMM");function o(){var e=Object(a.useStaticQuery)("3372252566");return r.useMemo((function(){return e.allProgram.group.map((function(e){var t,n=function(e){return e.reduce((function(e,t){return e.map((function(e){return e.node.id})).indexOf(t.node.id)>=0?e:[].concat(Object(i.a)(e),[t])}),[])}(e.edges).map((function(t){var n,r,a=t.node;return Object.assign({},a,{playlist:null!==(n=null==a||null===(r=a.playlist)||void 0===r?void 0:r.filter((function(t){return(null==t?void 0:t.artist)===e.fieldValue})))&&void 0!==n?n:[]})})),r=n.reduce((function(e,t){return t.playlist?[].concat(Object(i.a)(e),Object(i.a)(t.playlist)):e}),[]),a=r[0],l=a.kana,u=a.nation,o=r.filter((function(e){return(null==e?void 0:e.youtube)&&""!==e.youtube})).map((function(e){return null==e?void 0:e.youtube})).slice(-1)[0];return{fieldValue:null!==(t=e.fieldValue)&&void 0!==t?t:"",kana:null!=l?l:void 0,nation:null!=u?u:"",edges:n,tunes:r,img:o?"https://i.ytimg.com/vi/"+o+"/0.jpg":void 0}}))}),[e])}function c(e,t){void 0===t&&(t=0);var n=o();return r.useMemo((function(){return Object(u.a)(n,{sortType:e}).slice(0,t||n.length)}),[e,t,n])}function s(){var e=Object(a.useStaticQuery)("3859703565");return r.useMemo((function(){return e.allProgram.group.sort((function(e,t){return t.edges.length-e.edges.length}))}),[e])}function d(e){var t=s();return r.useMemo((function(){return t.filter((function(t){return t.fieldValue&&e.includes(t.fieldValue)}))}),[e,t])}n("Qmzd");var f=n("NFSF");function m(){var e=o(),t=Array.from(new Set(e.map((function(e){return e.nation}))));return r.useMemo((function(){return t.map((function(t){return{nation:t,artists:e.filter((function(e){return t===e.nation})).length,tunes:e.filter((function(e){return t===e.nation})).reduce((function(e,t){return e+t.tunes.length}),0)}})).sort((function(e,t){return t.artists-e.artists||e.nation.localeCompare(t.nation)}))}),[t,e])}function v(){var e=m();return r.useMemo((function(){var t=e.reduce((function(e,t){return f.b.includes(t.nation)?[[].concat(Object(i.a)(e[0]),[t]),Object(i.a)(e[1])]:[Object(i.a)(e[0]),[].concat(Object(i.a)(e[1]),[t])]}),[[],[]]),n=t[0],r=t[1];return[].concat(Object(i.a)(n),[r.reduce((function(e,t){return Object.assign({},e,{artists:e.artists+t.artists,tunes:e.tunes+t.tunes})}),{nation:"others",artists:0,tunes:0})])}),[e])}function g(){var e,t=(e=l(),r.useMemo((function(){return e.reduce((function(e,t){return t.playlist?[].concat(Object(i.a)(e),Object(i.a)(t.playlist)):e}),[])}),[e])),n=Object(a.useStaticQuery)("2825366380");return r.useMemo((function(){return n.allProgram.group.map((function(e){var n=e.fieldValue;return{fieldValue:n,tunes:t.filter((function(e){return(null==e?void 0:e.year)===parseInt(null!=n?n:"0",10)}))}}))}),[t,n])}function b(e){void 0===e&&(e=[]),e.forEach((function(e){if(e%10!=0)throw new Error}));var t=g();return r.useMemo((function(){var n,r=10*Math.floor(parseInt(null!==(n=t[0].fieldValue)&&void 0!==n?n:"1960",10)/10),a=10*Math.floor((new Date).getFullYear()/10);return(e.length?e:Array.from({length:(a-r)/10+1},(function(e,t){return r+10*t}))).map((function(e){var n=t.filter((function(t){var n=t.fieldValue;return Math.floor(parseInt(null!=n?n:"0",10)/10)===e/10}));return{fieldValue:e+"s",value:n.reduce((function(e,t){return e+t.tunes.length}),0),items:n}}))}),[t,e])}},SpMI:function(e,t,n){"use strict";var r=n("Fcif"),a=n("dV/x"),l=n("mXGw"),i=n("PDtE"),u=n("gbh0"),o=n("nnXQ"),c=l.forwardRef((function(e,t){var n=e.classes,u=e.className,c=Object(a.a)(e,["classes","className"]),s=l.useContext(o.a);return l.createElement("div",Object(r.a)({className:Object(i.a)(n.root,u,"flex-start"===s.alignItems&&n.alignItemsFlexStart),ref:t},c))}));t.a=Object(u.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(c)},Zfvn:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("mXGw"),a=n("Wbzz"),l=n("R82R"),i=n("ozoj"),u=n("BQn0"),o=n("/NZN"),c=n("xR0W"),s=n.n(c),d=n("ylWx"),f=n.n(d),m=(n("9dpD"),Object(l.a)((function(e){var t;return Object(i.a)({root:(t={display:"flex",flexDirection:"row",justifyContent:"space-between"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t)})})));function v(e,t,n){return{previous:e?{to:n+"/"+e.fieldValue+"/",title:e.fieldValue}:void 0,next:t?{to:n+"/"+t.fieldValue,title:t.fieldValue}:void 0}}t.b=function(e){var t=e.previous,n=e.next,l=m();return r.createElement(u.a,{className:l.root},t?r.createElement(u.a,{py:1,pr:1,textAlign:"left"},r.createElement(o.a,{component:a.Link,variant:"outlined",to:t.to},r.createElement(s.a,null),t.title)):null,n?r.createElement(u.a,{py:1,pl:1,textAlign:"right"},r.createElement(o.a,{component:a.Link,variant:"outlined",to:n.to},n.title,r.createElement(f.a,null))):null)}},gFAl:function(e,t,n){"use strict";var r=n("+I+c"),a=n("mXGw"),l=n("Wbzz"),i=n("v6vt"),u=n("5bSt"),o=n("SpMI"),c=n("vaiS"),s=n("1Dig"),d=n("MU2d");t.a=function(e){var t=e.color,n=void 0===t?"inherit":t,f=e.button,m=void 0!==f&&f,v=e.inset,g=void 0!==v&&v,b=e.to,p=e.primaryText,h=e.secondaryText,y=e.avatar,E=e.secondaryAction,j=Object(r.a)(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction"]);return Object(s.a)((function(e){return e.breakpoints.down("xs")}))||m?a.createElement(i.a,Object.assign({component:l.Link,to:b,button:!0},j),y?a.createElement(o.a,null,y):null,a.createElement(u.a,{primary:p,secondary:h,inset:g}),E?a.createElement(c.a,null,E):null):a.createElement(i.a,j,y?a.createElement(o.a,null,y):null,a.createElement(u.a,{inset:g,primary:a.createElement(d.a,{to:b,color:n},p),secondary:h||null}),E?a.createElement(c.a,null,E):null)}},xR0W:function(e,t,n){"use strict";var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),l=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=l},ylWx:function(e,t,n){"use strict";var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),l=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=l}}]);
//# sourceMappingURL=component---src-templates-program-tsx-088774e8e52a16d8208b.js.map