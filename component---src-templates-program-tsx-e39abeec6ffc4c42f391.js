(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/2Yb":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return O}));var l=n("mXGw"),a=n("Wbzz"),r=n("5UIW"),i=n("BQn0"),o=n("zaJg"),u=n.n(o),c=n("FJwj"),d=n("u44p"),s=n("NUsa"),m=n("ThN4"),v=n("gFAl"),f=n("7zBi"),p=n("DCqF"),b=n("LOiH"),g=n("Zfvn"),E=n("23bq"),x=n("y16u"),h=n("KoUe");var y=n("6CzD");function w(e,t,n){void 0===n&&(n=5);var l=e.map((function(e){return e.node.id})).indexOf(t),a=function(e,t,n){var l=Math.min(n,e),a=Math.floor(l/2);return t<a?[0,l]:t>=e-a?[e-l,e]:[t-a,t+a+1]}(e.length,l,n),r=a[0],i=a[1];return Object(y.a)(e).slice(r,i)}var j=Object(c.bindKeyboard)(Object(c.virtualize)(u.a));t.default=function(e){var t,n,o=e.data,u=e.pageContext,c=o.program,y=u.previous,O=u.next,z=u.index,N=u.slug,T=Object(h.d)(),W=Object(h.g)(null!==(t=null==c?void 0:c.categories)&&void 0!==t?t:[]),A=function(e){var t=e.week,n=e.title,l=e.date,a=e.subtitle,r=e.guests,i=new Date(l);return["スピッツ・草野マサムネがパーソナリティを務める","「SPITZ 草野マサムネのロック大陸漫遊記」",i.getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日放送の","第"+t+"回","「"+n+"」",a?"〜"+a+"〜":"","のプレイリスト。",(null==r?void 0:r.length)?"ゲストは"+r.join("、")+"。":""].join("")}(c),S=l.useState(!1),I=S[0],B=S[1],C=l.useState(z),D=C[0],M=C[1];return l.useEffect((function(){var e=setTimeout((function(){var e,t,n;D!==z&&(B(!0),Object(a.navigate)(null!==(e=null===(t=T[D])||void 0===t||null===(n=t.fields)||void 0===n?void 0:n.slug)&&void 0!==e?e:"#"))}),500);return function(){clearTimeout(e)}}),[D,z,T]),l.createElement(m.a,{title:null!==(n=null==c?void 0:c.title)&&void 0!==n?n:"放送回",description:A,disableGutters:!0,disablePaddingTop:!0,maxWidth:!1,loading:I,componentViewports:{BottomNav:!1},drawerContents:l.createElement(p.a,k(y,O))},l.createElement(j,{index:D,onChangeIndex:function(e){M(e)},slideRenderer:function(e){var t,n,a,o,u,m,p,h,j=e.index,z=e.key,A=T[j];return l.createElement("div",{key:z},l.createElement(f.a,{title:null!==(t=A.title)&&void 0!==t?t:"Artist",header:"第"+A.week+"回 "+A.date+" 全"+(null!==(n=null===(a=A.playlist)||void 0===a?void 0:a.length)&&void 0!==n?n:0)+"曲",subtitle:null!==(o=A.subtitle)&&void 0!==o?o:void 0,artists:Array.from(new Set(null===(u=A.playlist)||void 0===u?void 0:u.map((function(e){var t;return null!==(t=e.artist)&&void 0!==t?t:""})))),imgUrl:null!==(m=A.img)&&void 0!==m?m:void 0}),l.createElement(r.a,{maxWidth:"md"},l.createElement(i.a,{pt:4},(null===(p=A.fields)||void 0===p?void 0:p.slug)===N?l.createElement("div",null,null==c||null===(h=c.playlist)||void 0===h?void 0:h.map((function(e,t){var n;return e?l.createElement(b.b,{key:null!==(n=e.id)&&void 0!==n?n:t,tune:e}):null})),l.createElement(x.a,null,l.createElement(g.b,k(y,O))),l.createElement(x.a,null,W.map((function(e,t){var n;return l.createElement(d.a,{key:t,subheader:l.createElement(s.a,null,e.fieldValue)},w(e.edges,null!==(n=null==c?void 0:c.id)&&void 0!==n?n:"dummy").map((function(e){var t,n,a;return l.createElement(v.a,{key:e.node.id,selected:e.node.id===(null==c?void 0:c.id),to:null!==(t=null===(n=e.node.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#",primaryText:null!==(a=e.node.title)&&void 0!==a?a:"Program",secondaryText:"第"+e.node.week+"回 "+e.node.date,divider:!0,dense:!0})})))}))),l.createElement(x.a,null,l.createElement(E.a,null))):l.createElement("div",null,l.createElement(b.a,null),l.createElement(b.a,null),l.createElement(b.a,null)))))},slideCount:T.length,resistance:!0}))};function k(e,t){var n,l,a,r;return{previous:e?{to:null!==(n=null===(l=e.fields)||void 0===l?void 0:l.slug)&&void 0!==n?n:"#",title:e.title}:null,next:t?{to:null!==(a=null===(r=t.fields)||void 0===r?void 0:r.slug)&&void 0!==a?a:"#",title:t.title}:null}}var O="3419295826"},"7zBi":function(e,t,n){"use strict";var l=n("mXGw"),a=n("R82R"),r=n("ozoj"),i=n("BQn0"),o=n("/ZiB"),u=Object(a.a)((function(e){return Object(r.a)({jumbotronBg:function(t){var n=t.imgUrl;return{height:"100%",backgroundColor:e.palette.grey[700],backgroundImage:n?"url("+n+")":void 0,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":void 0,transform:n?"scale(1.1)":void 0}},jumbotronText:function(t){var n;return(n={height:t.height,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)})[e.breakpoints.down("xs")]={padding:e.spacing(2)},n},jumbotronTitle:{fontWeight:"bold"},artists:{margin:0,padding:0},artist:{display:"inline-block",marginRight:".6em"}})}));t.a=function(e){var t=e.header,n=e.subtitle,a=e.title,r=e.artists,c=e.imgUrl,d=e.height,s=void 0===d?300:d,m=u({imgUrl:c,height:s});return l.createElement(i.a,{height:s,overflow:"hidden",position:"relative"},l.createElement("div",{className:m.jumbotronBg}),l.createElement("div",{className:m.jumbotronText},l.createElement(o.a,{variant:"subtitle2"},t),l.createElement(o.a,{variant:"h3",component:"h2",className:m.jumbotronTitle,gutterBottom:!0},a),n?l.createElement(o.a,{variant:"subtitle1"},n):null,r?l.createElement("ul",{className:m.artists},r.map((function(e){return l.createElement(o.a,{className:m.artist,variant:"subtitle2",component:"li",key:e},e)}))):null))}},DCqF:function(e,t,n){"use strict";var l=n("mXGw"),a=n("u44p"),r=n("NUsa"),i=n("YZpo"),o=n("5bSt"),u=n("xR0W"),c=n.n(u),d=n("ylWx"),s=n.n(d),m=n("HexO");t.a=function(e){var t=e.previous,n=e.next;return l.createElement(a.a,{subheader:l.createElement(r.a,null,"Navigation")},t?l.createElement(m.a,{dense:!0,button:!0,to:t.to},l.createElement(i.a,null,l.createElement(c.a,null)),l.createElement(o.a,{primary:t.title,secondary:"prev"})):null,n?l.createElement(m.a,{dense:!0,button:!0,to:n.to},l.createElement(i.a,null,l.createElement(s.a,null)),l.createElement(o.a,{primary:n.title,secondary:"next"})):null)}},SpMI:function(e,t,n){"use strict";var l=n("Fcif"),a=n("dV/x"),r=n("mXGw"),i=n("PDtE"),o=n("gbh0"),u=n("nnXQ"),c=r.forwardRef((function(e,t){var n=e.classes,o=e.className,c=Object(a.a)(e,["classes","className"]),d=r.useContext(u.a);return r.createElement("div",Object(l.a)({className:Object(i.a)(n.root,o,"flex-start"===d.alignItems&&n.alignItemsFlexStart),ref:t},c))}));t.a=Object(o.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(c)},Zfvn:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var l=n("mXGw"),a=n("Wbzz"),r=n("R82R"),i=n("ozoj"),o=n("BQn0"),u=n("/NZN"),c=n("xR0W"),d=n.n(c),s=n("ylWx"),m=n.n(s),v=(n("9dpD"),Object(r.a)((function(e){var t;return Object(i.a)({root:(t={display:"flex",flexDirection:"row",justifyContent:"space-between"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t)})})));function f(e,t,n){return{previous:e?{to:n+"/"+e.fieldValue+"/",title:e.fieldValue}:void 0,next:t?{to:n+"/"+t.fieldValue,title:t.fieldValue}:void 0}}t.b=function(e){var t=e.previous,n=e.next,r=v();return l.createElement(o.a,{className:r.root},t?l.createElement(o.a,{py:1,pr:1,textAlign:"left"},l.createElement(u.a,{component:a.Link,variant:"outlined",to:t.to},l.createElement(d.a,null),t.title)):null,n?l.createElement(o.a,{py:1,pl:1,textAlign:"right"},l.createElement(u.a,{component:a.Link,variant:"outlined",to:n.to},n.title,l.createElement(m.a,null))):null)}},gFAl:function(e,t,n){"use strict";var l=n("+I+c"),a=n("mXGw"),r=n("Wbzz"),i=n("v6vt"),o=n("5bSt"),u=n("SpMI"),c=n("vaiS"),d=n("1Dig"),s=n("MU2d");t.a=function(e){var t=e.color,n=void 0===t?"inherit":t,m=e.button,v=void 0!==m&&m,f=e.inset,p=void 0!==f&&f,b=e.to,g=e.primaryText,E=e.secondaryText,x=e.avatar,h=e.secondaryAction,y=Object(l.a)(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction"]);return Object(d.a)((function(e){return e.breakpoints.down("xs")}))||v?a.createElement(i.a,Object.assign({component:r.Link,to:b,button:!0},y),x?a.createElement(u.a,null,x):null,a.createElement(o.a,{primary:g,secondary:E,inset:p}),h?a.createElement(c.a,null,h):null):a.createElement(i.a,y,x?a.createElement(u.a,null,x):null,a.createElement(o.a,{inset:p,primary:a.createElement(s.a,{to:b,color:n},g),secondary:E||null}),h?a.createElement(c.a,null,h):null)}},xR0W:function(e,t,n){"use strict";var l=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n("mXGw")),r=(0,l(n("c9Um")).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=r},ylWx:function(e,t,n){"use strict";var l=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n("mXGw")),r=(0,l(n("c9Um")).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=r}}]);
//# sourceMappingURL=component---src-templates-program-tsx-e39abeec6ffc4c42f391.js.map