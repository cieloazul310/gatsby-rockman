(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/2Yb":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return N}));a("abGl"),a("gZHo"),a("Fdmb"),a("sdqY"),a("VlJN"),a("YjJN");var n=a("mXGw"),r=a("Wbzz"),l=a("5UIW"),i=a("BQn0"),o=a("zaJg"),c=a.n(o),s=a("FJwj"),u=a("u44p"),d=a("NUsa"),m=a("ThN4"),v=a("gFAl"),f=a("7zBi"),p=a("DCqF"),b=a("LOiH"),h=a("Zfvn"),g=a("23bq"),y=a("y16u"),E=a("KoUe");a("jr56"),a("Eb4t"),a("IYjZ"),a("yvkl");function x(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function w(e,t,a){void 0===a&&(a=5);var n=e.map((function(e){return e.node.id})).indexOf(t),r=function(e,t,a){var n=Math.min(a,e),r=Math.floor(n/2);return t<r?[0,n]:t>=e-r?[e-n,e]:[t-r,t+r+1]}(e.length,n,a),l=r[0],i=r[1];return x(e).slice(l,i)}var O=Object(s.bindKeyboard)(Object(s.virtualize)(c.a));t.default=function(e){var t,a,o=e.data,c=e.pageContext,s=o.program,x=c.previous,j=c.next,N=c.index,T=c.slug,A=Object(E.d)(),S=Object(E.f)(null!==(t=null==s?void 0:s.categories)&&void 0!==t?t:[]),I=function(e){var t=e.week,a=e.title,n=e.date,r=e.subtitle,l=e.guests,i=new Date(n);return["スピッツ・草野マサムネがパーソナリティを務める","「SPITZ 草野マサムネのロック大陸漫遊記」",i.getFullYear()+"年"+(i.getMonth()+1)+"月"+i.getDate()+"日放送の","第"+t+"回","「"+a+"」",r?"〜"+r+"〜":"","のプレイリスト。",(null==l?void 0:l.length)?"ゲストは"+l.join("、")+"。":""].join("")}(s),R=n.useState(!1),C=R[0],M=R[1],W=n.useState(N),z=W[0],L=W[1];return n.useEffect((function(){var e=setTimeout((function(){var e,t,a;z!==N&&(M(!0),Object(r.navigate)(null!==(e=null===(t=A[z])||void 0===t||null===(a=t.fields)||void 0===a?void 0:a.slug)&&void 0!==e?e:"#"))}),500);return function(){clearTimeout(e)}}),[z,N,A]),n.createElement(m.a,{title:null!==(a=null==s?void 0:s.title)&&void 0!==a?a:"放送回",description:I,disableGutters:!0,disablePaddingTop:!0,maxWidth:!1,loading:C,componentViewports:{BottomNav:!1},drawerContents:n.createElement(p.a,k(x,j))},n.createElement(O,{index:z,onChangeIndex:function(e){L(e)},slideRenderer:function(e){var t,a,r,o,c,m,p,E,O=e.index,N=e.key,I=A[O];return n.createElement("div",{key:N},n.createElement(f.a,{title:null!==(t=I.title)&&void 0!==t?t:"Artist",header:"第"+I.week+"回 "+I.date+" 全"+(null!==(a=null===(r=I.playlist)||void 0===r?void 0:r.length)&&void 0!==a?a:0)+"曲",subtitle:null!==(o=I.subtitle)&&void 0!==o?o:void 0,artists:Array.from(new Set(null===(c=I.playlist)||void 0===c?void 0:c.map((function(e){var t;return null!==(t=e.artist)&&void 0!==t?t:""})))),imgUrl:null!==(m=I.img)&&void 0!==m?m:void 0}),n.createElement(l.a,{maxWidth:"md"},n.createElement(i.a,{pt:4},(null===(p=I.fields)||void 0===p?void 0:p.slug)===T?n.createElement("div",null,null==s||null===(E=s.playlist)||void 0===E?void 0:E.map((function(e,t){var a;return e?n.createElement(b.b,{key:null!==(a=e.id)&&void 0!==a?a:t,tune:e}):null})),n.createElement(y.a,null,n.createElement(h.b,k(x,j))),n.createElement(y.a,null,S.map((function(e,t){var a;return n.createElement(u.a,{key:t,subheader:n.createElement(d.a,null,e.fieldValue)},w(e.edges,null!==(a=null==s?void 0:s.id)&&void 0!==a?a:"dummy").map((function(e){var t,a,r;return n.createElement(v.a,{key:e.node.id,selected:e.node.id===(null==s?void 0:s.id),to:null!==(t=null===(a=e.node.fields)||void 0===a?void 0:a.slug)&&void 0!==t?t:"#",primaryText:null!==(r=e.node.title)&&void 0!==r?r:"Program",secondaryText:"第"+e.node.week+"回 "+e.node.date,divider:!0,dense:!0})})))}))),n.createElement(y.a,null,n.createElement(g.a,null))):n.createElement("div",null,n.createElement(b.a,null),n.createElement(b.a,null),n.createElement(b.a,null)))))},slideCount:A.length,resistance:!0}))};function k(e,t){var a,n,r,l;return{previous:e?{to:null!==(a=null===(n=e.fields)||void 0===n?void 0:n.slug)&&void 0!==a?a:"#",title:e.title}:null,next:t?{to:null!==(r=null===(l=t.fields)||void 0===l?void 0:l.slug)&&void 0!==r?r:"#",title:t.title}:null}}var N="3419295826"},"9dpD":function(e,t,a){"use strict";var n=a("Fcif"),r=a("dV/x"),l=a("mXGw"),i=a("PDtE"),o=a("Rx6o"),c=a("gbh0"),s=l.forwardRef((function(e,t){var a=e.animation,o=void 0===a?"pulse":a,c=e.classes,s=e.className,u=e.component,d=void 0===u?"span":u,m=e.height,v=e.variant,f=void 0===v?"text":v,p=e.width,b=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),h=Boolean(b.children);return l.createElement(d,Object(n.a)({ref:t,className:Object(i.a)(c.root,c[f],s,h&&[c.withChildren,!p&&c.fitContent,!m&&c.heightAuto],!1!==o&&c[o])},b,{style:Object(n.a)({width:p,height:m},b.style)}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",backgroundColor:Object(o.c)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(s)},DCqF:function(e,t,a){"use strict";var n=a("mXGw"),r=a("u44p"),l=a("NUsa"),i=a("YZpo"),o=a("5bSt"),c=a("xR0W"),s=a.n(c),u=a("ylWx"),d=a.n(u),m=a("HexO");t.a=function(e){var t=e.previous,a=e.next;return n.createElement(r.a,{subheader:n.createElement(l.a,null,"Navigation")},t?n.createElement(m.a,{dense:!0,button:!0,to:t.to},n.createElement(i.a,null,n.createElement(s.a,null)),n.createElement(o.a,{primary:t.title,secondary:"prev"})):null,a?n.createElement(m.a,{dense:!0,button:!0,to:a.to},n.createElement(i.a,null,n.createElement(d.a,null)),n.createElement(o.a,{primary:a.title,secondary:"next"})):null)}},LOiH:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var n=a("mXGw"),r=a("Wbzz"),l=a("/ZiB"),i=a("BQn0"),o=a("Fcif"),c=a("dV/x"),s=a("PDtE"),u=a("bJWG"),d=a("gbh0"),m=n.forwardRef((function(e,t){var a=e.classes,r=e.className,l=e.raised,i=void 0!==l&&l,d=Object(c.a)(e,["classes","className","raised"]);return n.createElement(u.a,Object(o.a)({className:Object(s.a)(a.root,r),elevation:i?8:1,ref:t},d))})),v=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(m),f=n.forwardRef((function(e,t){var a=e.action,r=e.avatar,i=e.classes,u=e.className,d=e.component,m=void 0===d?"div":d,v=e.disableTypography,f=void 0!==v&&v,p=e.subheader,b=e.subheaderTypographyProps,h=e.title,g=e.titleTypographyProps,y=Object(c.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=h;null==E||E.type===l.a||f||(E=n.createElement(l.a,Object(o.a)({variant:r?"body2":"h5",className:i.title,component:"span",display:"block"},g),E));var x=p;return null==x||x.type===l.a||f||(x=n.createElement(l.a,Object(o.a)({variant:r?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},b),x)),n.createElement(m,Object(o.a)({className:Object(s.a)(i.root,u),ref:t},y),r&&n.createElement("div",{className:i.avatar},r),n.createElement("div",{className:i.content},E,x),a&&n.createElement("div",{className:i.action},a))})),p=Object(d.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(f),b=(a("6IHZ"),["video","audio","picture","iframe","img"]),h=n.forwardRef((function(e,t){var a=e.children,r=e.classes,l=e.className,i=e.component,u=void 0===i?"div":i,d=e.image,m=e.src,v=e.style,f=Object(c.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==b.indexOf(u),h=!p&&d?Object(o.a)({backgroundImage:'url("'.concat(d,'")')},v):v;return n.createElement(u,Object(o.a)({className:Object(s.a)(r.root,l,p&&r.media,-1!=="picture img".indexOf(u)&&r.img),ref:t,style:h,src:p?d||m:void 0},f),a)})),g=Object(d.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(h),y=n.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,l=e.classes,i=e.className,u=Object(c.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(o.a)({className:Object(s.a)(l.root,i,!r&&l.spacing),ref:t},u))})),E=Object(d.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(y),x=a("wGBp"),j=a("oQEK"),w=a("R82R"),O=a("ozoj"),k=a("LiPI"),N=a.n(k),T=a("9dpD"),A=a("h/Rp"),S=a("59YP"),I=Object(w.a)((function(e){return Object(O.a)({root:{display:"flex"},cardThumbnail:{flex:"auto",maxWidth:"30%",minWidth:100,backgroundColor:"dark"===e.palette.type?e.palette.grey[700]:e.palette.grey[200],display:"flex"},cardThumbnailLink:{flex:1,display:"flex",overflow:"hidden"},cardThumbnailInner:{flex:1,transition:e.transitions.create("transform"),"&:hover":{transform:"scale(1.2)"}},skeleton:{flex:1,height:"100%"}})}));t.b=function(e){var t,a=e.tune,o=I();return n.createElement(i.a,{my:2},n.createElement(v,{className:o.root},n.createElement(i.a,{className:o.cardThumbnail},a.youtube?n.createElement("a",{className:o.cardThumbnailLink,href:"https://youtu.be/"+a.youtube,target:"_blank",rel:"noopener noreferrer"},n.createElement(g,{className:o.cardThumbnailInner,image:"https://i.ytimg.com/vi/"+a.youtube+"/0.jpg",title:a.artist+"の"+a.title+"をYouTubeで視聴する"})):n.createElement(T.a,{variant:"rect",className:o.skeleton})),n.createElement(i.a,{flex:"1"},n.createElement(i.a,{px:2,pt:1},n.createElement(l.a,{variant:"body2"},"M",a.indexInWeek,". ",a.corner," ","草野マサムネ"!==a.selector?a.selector+"選曲":null)),n.createElement(p,{avatar:n.createElement(S.a,{nation:null!==(t=a.nation)&&void 0!==t?t:""}),title:a.title,subheader:a.artist+" ("+a.year+")"}),n.createElement(E,null,n.createElement(x.a,{title:a.artist+"の曲をブラウズ"},n.createElement(j.a,{component:r.Link,to:"/artist/"+a.artist},n.createElement(A.a,null))),"草野マサムネ"!==a.selector?n.createElement(x.a,{title:a.selector+"選曲の曲をブラウズ"},n.createElement(j.a,{component:r.Link,to:"/selectors/",state:{selector:a.selector}},n.createElement(A.f,null))):null,a.youtube?n.createElement(x.a,{title:"YouTube で視聴する"},n.createElement(j.a,{href:"https://youtu.be/"+a.youtube,target:"_blank",rel:"noopener noreferrer"},n.createElement(N.a,null))):null))))};function R(){var e=I();return n.createElement(i.a,{my:2},n.createElement(v,{className:e.root},n.createElement("div",{className:e.cardThumbnail},n.createElement(T.a,{variant:"rect",className:e.skeleton})),n.createElement(i.a,{flex:"1"},n.createElement(i.a,{px:2,pt:1},n.createElement(l.a,{variant:"body2"},n.createElement(T.a,{variant:"text"}))),n.createElement(p,{avatar:n.createElement(T.a,{variant:"circle",width:40,height:40}),title:n.createElement(T.a,{variant:"text"}),subheader:n.createElement(T.a,{variant:"text"})}),n.createElement(E,null,n.createElement(T.a,{variant:"circle",width:40,height:40}),n.createElement(T.a,{variant:"circle",width:40,height:40}),n.createElement(T.a,{variant:"circle",width:40,height:40})))))}},SpMI:function(e,t,a){"use strict";var n=a("Fcif"),r=a("dV/x"),l=a("mXGw"),i=a("PDtE"),o=a("gbh0"),c=a("nnXQ"),s=l.forwardRef((function(e,t){var a=e.classes,o=e.className,s=Object(r.a)(e,["classes","className"]),u=l.useContext(c.a);return l.createElement("div",Object(n.a)({className:Object(i.a)(a.root,o,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},s))}));t.a=Object(o.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(s)},Zfvn:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("mXGw"),r=a("Wbzz"),l=a("R82R"),i=a("ozoj"),o=a("BQn0"),c=a("/NZN"),s=a("xR0W"),u=a.n(s),d=a("ylWx"),m=a.n(d),v=(a("9dpD"),Object(l.a)((function(e){var t;return Object(i.a)({root:(t={display:"flex",flexDirection:"row",justifyContent:"space-between"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t)})})));function f(e,t,a){return{previous:e?{to:a+"/"+e.fieldValue+"/",title:e.fieldValue}:void 0,next:t?{to:a+"/"+t.fieldValue,title:t.fieldValue}:void 0}}t.b=function(e){var t=e.previous,a=e.next,l=v();return n.createElement(o.a,{className:l.root},t?n.createElement(o.a,{py:1,pr:1,textAlign:"left"},n.createElement(c.a,{component:r.Link,variant:"outlined",to:t.to},n.createElement(u.a,null),t.title)):null,a?n.createElement(o.a,{py:1,pl:1,textAlign:"right"},n.createElement(c.a,{component:r.Link,variant:"outlined",to:a.to},a.title,n.createElement(m.a,null))):null)}},gFAl:function(e,t,a){"use strict";a("abGl"),a("gZHo"),a("Fdmb"),a("Ir+3"),a("1c7q");var n=a("mXGw"),r=a("Wbzz"),l=a("v6vt"),i=a("5bSt"),o=a("SpMI"),c=a("vaiS"),s=a("1Dig"),u=a("MU2d");t.a=function(e){var t=e.color,a=void 0===t?"inherit":t,d=e.button,m=void 0!==d&&d,v=e.inset,f=void 0!==v&&v,p=e.to,b=e.primaryText,h=e.secondaryText,g=e.avatar,y=e.secondaryAction,E=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["color","button","inset","to","primaryText","secondaryText","avatar","secondaryAction"]);return Object(s.a)((function(e){return e.breakpoints.down("xs")}))||m?n.createElement(l.a,Object.assign({component:r.Link,to:p,button:!0},E),g?n.createElement(o.a,null,g):null,n.createElement(i.a,{primary:b,secondary:h,inset:f}),y?n.createElement(c.a,null,y):null):n.createElement(l.a,E,g?n.createElement(o.a,null,g):null,n.createElement(i.a,{inset:f,primary:n.createElement(u.a,{to:p,color:a},b),secondary:h||null}),y?n.createElement(c.a,null,y):null)}},xR0W:function(e,t,a){"use strict";a("hBi6");var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mXGw")),l=(0,n(a("c9Um")).default)(r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=l},ylWx:function(e,t,a){"use strict";a("hBi6");var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mXGw")),l=(0,n(a("c9Um")).default)(r.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=l}}]);
//# sourceMappingURL=component---src-templates-program-tsx-b5fb46e78b138affe7ee.js.map