(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4hPr":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n("Wbzz");function i(){var e=Object(r.useStaticQuery)("75097974");return a.useMemo((function(){return e.allArtist.edges}),[e])}},"7zBi":function(e,t,n){"use strict";var a=n("q1tI"),r=n("ofer"),i=n("R/WZ"),l=n("ZBNC"),o=Object(i.a)((function(e){var t;return Object(l.a)({root:{height:240,overflow:"hidden",position:"relative"},jumbotronBg:function(t){var n=t.image;return{height:"100%",backgroundColor:n||"light"!==e.palette.type?e.palette.grey[700]:e.palette.secondary.light,backgroundImage:n?"url("+n+")":void 0,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":void 0,transform:n?"scale(1.1)":void 0}},jumbotronText:(t={height:240,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)},t[e.breakpoints.down("xs")]={padding:e.spacing(2)},t),jumbotronTitle:{fontWeight:"bold"}})}));t.a=function(e){var t=e.header,n=e.footer,i=e.title,l=e.image,c=o({image:l});return a.createElement("div",{className:c.root},a.createElement("div",{className:c.jumbotronBg}),a.createElement("div",{className:c.jumbotronText},t?a.createElement(r.a,{variant:"subtitle2"},t):null,a.createElement(r.a,{variant:"h5",component:"h2",className:c.jumbotronTitle,gutterBottom:!0},i),n?a.createElement(r.a,{variant:"subtitle2"},n):null))}},"8yLC":function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),i=n("Iu20"),l=n("cRy8");t.a=function(e){var t=e.children,n=Object(a.a)(e,["children"]),o=Object(l.a)();return r.createElement(i.a,Object.assign({disableGutters:!0,disablePaddingTop:!0,componentViewports:{BottomNav:!1}},n,{key:o}),t)}},ASl3:function(e,t,n){"use strict";var a=n("q1tI"),r=n("ofer"),i=n("tRbT"),l=n("lopY"),o=n("R/WZ"),c=n("ZBNC"),s=n("tr08"),u=(n("SpDg"),n("v+NH")),m=Object(o.a)((function(e){return Object(c.a)({root:{display:"flex",padding:e.spacing(1)},item:{display:"flex",flexGrow:1,flexDirection:"column"},imageContainer:{width:"100%",display:"flex",position:"relative"},image:{backgroundColor:e.palette.grey["light"===e.palette.type?300:700],backgroundImage:function(e){var t=e.image;return t?"url("+t+")":void 0},backgroundPosition:"center",backgroundSize:"cover",paddingBottom:"100%",width:"100%"},label:{position:"absolute",top:0,left:0,color:e.palette.common.white,backgroundColor:e.palette.primary.dark,padding:e.spacing(0,1)},name:{padding:e.spacing(1,0)}})}));var d=function(e){var t=e.artist,n=m({image:null==t?void 0:t.image});return a.createElement(u.a,{to:"/artist/"+(null==t?void 0:t.name),color:"inherit",className:n.root,onTouchMove:p,onTouchStart:p,onTouchEnd:p},a.createElement("div",{className:n.item},a.createElement("div",{className:n.imageContainer},a.createElement("div",{className:n.image}),a.createElement("div",{className:n.label},a.createElement(r.a,{variant:"caption"},null==t?void 0:t.tunesCount,"曲/",null==t?void 0:t.programCount,"回"))),a.createElement("div",{className:n.name},a.createElement(r.a,{variant:"body2"},null==t?void 0:t.name))))};function p(e){e.stopPropagation()}var v=Object(o.a)((function(e){var t,n,a;return Object(c.a)({root:{width:"100%",padding:e.spacing(1,0)},header:{padding:e.spacing(1)},wrapper:(t={},t[e.breakpoints.only("xs")]={overflowX:"auto",WebkitOverflowScrolling:"touch"},t),container:(n={},n[e.breakpoints.only("xs")]={display:"flex",width:"max-content"},n),item:(a={},a[e.breakpoints.only("xs")]={width:"33vw"},a)})}));t.a=function(e){var t=e.artists,n=e.title,o=Object(s.a)(),c=Object(l.a)(o.breakpoints.only("xs")),u=v();return a.createElement("div",{className:u.root},a.createElement("div",{className:u.header},a.createElement(r.a,null,n)),a.createElement("div",{className:u.wrapper,onTouchMove:f,onTouchStart:f,onTouchEnd:f},a.createElement(i.a,{container:!c,className:u.container},null==t?void 0:t.filter((function(e){return"スピッツ"!==(null==e?void 0:e.name)})).map((function(e){return a.createElement(i.a,{className:u.item,item:!c||void 0,key:null==e?void 0:e.name,sm:c?void 0:2},a.createElement(d,{artist:e}))})))))};function f(e){e.stopPropagation()}},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n("eD//"),i=n("hxuT"),l=n("8yLC"),o=n("7zBi"),c=n("23bq"),s=n("b31w"),u=n("ASl3"),m=n("nrjT"),d=n("kPp+"),p=n("Wbzz"),v=n("tRbT"),f=n("ofer"),g=n("R/WZ"),b=n("ZBNC"),h=n("PGlZ");function E(e,t,n){void 0===e&&(e="linear"),void 0===t&&(t=500),void 0===n&&(n=0);var r=function(e,t){void 0===e&&(e=1e3);void 0===t&&(t=0);var n=a.useState(0),r=n[0],i=n[1];return a.useEffect((function(){var n,a,r;function l(){i(Date.now()-r),o()}function o(){n=requestAnimationFrame(l)}var c=setTimeout((function(){a=setTimeout((function(){cancelAnimationFrame(n),i(Date.now()-r)}),e),r=Date.now(),o()}),t);return function(){clearTimeout(a),clearTimeout(c),cancelAnimationFrame(n)}}),[e,t]),r}(t,n),i=Math.min(1,r/t);return y[e](i)}var y={linear:function(e){return e},elastic:function(e){return e*(33*e*e*e*e-106*e*e*e+126*e*e-67*e+15)},inExpo:function(e){return Math.pow(2,10*(e-1))}};var w=n("h/Rp"),x=Object(g.a)((function(e){var t;return Object(b.a)({container:{padding:e.spacing(1)},root:(t={display:"flex",padding:e.spacing(2),alignItems:"baseline",flexDirection:"row"},t[e.breakpoints.down("xs")]={flexDirection:"column",alignItems:"inherit",padding:e.spacing(2,0)},t),title:{display:"flex",alignItems:"center"},valueField:{display:"flex",flexGrow:1,justifyContent:"flex-end",alignItems:"baseline"},icon:{display:"flex",padding:e.spacing(1,.5)},label:{marginLeft:".5em"}})}));function j(e){var t=e.icon,n=e.value,r=e.label,i=e.title,l=x(),o=Object(h.a)({triggerOnce:!0}),c=o[0],s=o[1];return a.createElement(v.a,{item:!0,xs:4,ref:c,className:l.root},a.createElement("div",{className:l.title},a.createElement(f.a,{className:l.icon,variant:"h5",component:"div"},t),a.createElement(f.a,{variant:"body2",component:"span"},i)),a.createElement("div",{className:l.valueField},a.createElement(f.a,{variant:"h5",component:"em"},s?a.createElement(O,{value:n}):a.createElement("span",null,"0")),a.createElement(f.a,{component:"span",className:l.label},r)))}function O(e){var t=e.value,n=E("linear",t,0);return a.createElement("span",null,Math.round(t*n))}function k(){var e=x(),t=Object(p.useStaticQuery)("1850358936"),n=t.allProgram,r=t.allArtist;return a.createElement(v.a,{container:!0,className:e.container},a.createElement(j,{icon:a.createElement(w.e,{fontSize:"inherit"}),value:n.totalCount,title:"放送",label:"回"}),a.createElement(j,{icon:a.createElement(w.i,{fontSize:"inherit"}),value:n.group[0].totalCount,title:"曲数",label:"曲"}),a.createElement(j,{icon:a.createElement(w.b,{fontSize:"inherit"}),value:r.totalCount,title:"アーティスト",label:"組"}))}var N=n("Dyiq"),T=n("4hPr");t.default=function(e){var t=e.data,n=Object(T.a)(),p=t.allProgram.edges.map((function(e){var t,n;return null!==(t=null===(n=e.node.fields)||void 0===n?void 0:n.image)&&void 0!==t?t:void 0})).filter((function(e){return Boolean(e)}));return a.createElement(l.a,null,a.createElement(o.a,{title:"ロック大陸漫遊記 プレイリスト集",footer:"since 2018",image:p.length?p[0]:void 0}),a.createElement(m.a,null),a.createElement(m.b,null,a.createElement(k,null),a.createElement(d.g,{maxWidth:"lg"},a.createElement(d.f,null,a.createElement("strong",null,"ロック大陸漫遊記プレイリスト集"),"は、TOKYO-FM他全国38局で放送されているラジオ番組",a.createElement("strong",null,"「SPITZ 草野マサムネのロック大陸漫遊記」"),"でオンエアされた楽曲を、放送回別、アーティスト別、選曲者別、コーナー別に表示したサイトです。"),a.createElement(d.f,null,"原則毎週日曜日 TOKYO-FM の本放送終了後に更新します。作者がリアルタイムで聞けなかった日は、一両日中に視聴して更新します。"),a.createElement(d.f,null,a.createElement("strong",null,"SPITZ 草野マサムネのロック大陸漫遊記"),a.createElement("br",null),a.createElement(d.e,{href:"https://www.tfm.co.jp/manyuki/"},"https://www.tfm.co.jp/manyuki/")),a.createElement(d.f,null,"全国38局放送時間一覧",a.createElement("br",null),a.createElement(d.e,{href:"https://www.tfm.co.jp/manyuki/index.php?catid=3350",rel:"noopener noreferrer"},"https://www.tfm.co.jp/manyuki/index.php?catid=3350")))),a.createElement(m.a,null),a.createElement(m.b,null,a.createElement(r.a,{subheader:a.createElement(i.a,null,"過去2か月の放送")},t.allProgram.edges.map((function(e,t,n){var r=e.node;return a.createElement(s.a,{key:r.week,program:r,last:t===n.length-1})})))),a.createElement(m.a,null),a.createElement(N.a,null),a.createElement(m.a,null),a.createElement(m.b,null,a.createElement(u.a,{title:"登場回数Top25",artists:n.map((function(e){return e.node}))})),a.createElement(m.a,null),a.createElement(m.b,null,a.createElement(c.a,null)))}},SLcR:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),l=n("iuhU"),o=n("H2TA"),c=n("MquD"),s=i.forwardRef((function(e,t){var n=e.classes,o=e.className,s=Object(r.a)(e,["classes","className"]),u=i.useContext(c.a);return i.createElement("div",Object(a.a)({className:Object(l.a)(n.root,o,"flex-start"===u.alignItems&&n.alignItemsFlexStart),ref:t},s))}));t.a=Object(o.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(s)},SpDg:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),i=n("q1tI"),l=n("iuhU"),o=n("ye/S"),c=n("H2TA"),s=i.forwardRef((function(e,t){var n=e.animation,o=void 0===n?"pulse":n,c=e.classes,s=e.className,u=e.component,m=void 0===u?"span":u,d=e.height,p=e.variant,v=void 0===p?"text":p,f=e.width,g=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),b=Boolean(g.children);return i.createElement(m,Object(a.a)({ref:t,className:Object(l.a)(c.root,c[v],s,b&&[c.withChildren,!f&&c.fitContent,!d&&c.heightAuto],!1!==o&&c[o])},g,{style:Object(a.a)({width:f,height:d},g.style)}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",backgroundColor:Object(o.b)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(s)},b31w:function(e,t,n){"use strict";var a=n("q1tI"),r=n("469l"),i=n("R/WZ"),l=n("ZBNC"),o=n("zLVn"),c=n("Wbzz"),s=n("tVbE"),u=n("IsqK"),m=n("SLcR"),d=n("TjOe"),p=n("lopY"),v=n("v+NH");var f=function(e){var t=e.color,n=void 0===t?"inherit":t,r=e.button,i=void 0!==r&&r,l=e.inset,f=void 0!==l&&l,g=e.to,b=e.primaryText,h=e.secondaryText,E=e.avatar,y=e.secondaryAction,w=e.textClasses,x=Object(o.a)(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction","textClasses"]);return Object(p.a)((function(e){return e.breakpoints.down("xs")}))||i?a.createElement(s.a,Object.assign({component:c.Link,to:g,button:!0},x),E?a.createElement(m.a,null,E):null,a.createElement(u.a,{classes:w,primary:b,secondary:h,inset:f}),y?a.createElement(d.a,null,y):null):a.createElement(s.a,x,E?a.createElement(m.a,null,E):null,a.createElement(u.a,{classes:w,inset:f,primary:a.createElement(v.a,{to:g,color:n},b),secondary:h||null}),y?a.createElement(d.a,null,y):null)},g=n("JatN"),b=Object(i.a)((function(e){return Object(l.a)({inset:{paddingLeft:e.spacing(2)}})}));t.a=function(e){var t,n,i,l,o,c=e.program,s=e.last,u=Object(g.a)(),m=b();return a.createElement(f,{avatar:a.createElement(r.a,{className:u.avatar,src:null!==(t=null==c||null===(n=c.fields)||void 0===n?void 0:n.image)&&void 0!==t?t:void 0,variant:"square"}),to:null!==(i=null==c||null===(l=c.fields)||void 0===l?void 0:l.slug)&&void 0!==i?i:"#",primaryText:null!==(o=null==c?void 0:c.title)&&void 0!==o?o:"タイトル",secondaryText:"第"+(null==c?void 0:c.week)+"回 "+(null==c?void 0:c.date),divider:!s,inset:!0,textClasses:m})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a38ad3369bc85ccdc5d8.js.map