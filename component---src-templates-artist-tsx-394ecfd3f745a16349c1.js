(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"7zBi":function(e,t,n){"use strict";var r=n("mXGw"),a=n("R82R"),i=n("ozoj"),o=n("BQn0"),l=n("/ZiB"),u=Object(a.a)((function(e){return Object(i.a)({jumbotronBg:function(t){var n=t.imgUrl;return{height:"100%",backgroundColor:e.palette.grey[700],backgroundImage:n?"url("+n+")":void 0,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":void 0,transform:n?"scale(1.1)":void 0}},jumbotronText:function(t){var n;return(n={height:t.height,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)})[e.breakpoints.down("xs")]={padding:e.spacing(2)},n},jumbotronTitle:{fontWeight:"bold"},artists:{margin:0,padding:0},artist:{display:"inline-block",marginRight:".6em"}})}));t.a=function(e){var t=e.header,n=e.subtitle,a=e.title,i=e.artists,c=e.imgUrl,s=e.height,d=void 0===s?300:s,m=u({imgUrl:c,height:d});return r.createElement(o.a,{height:d,overflow:"hidden",position:"relative"},r.createElement("div",{className:m.jumbotronBg}),r.createElement("div",{className:m.jumbotronText},r.createElement(l.a,{variant:"subtitle2"},t),r.createElement(l.a,{variant:"h3",component:"h2",className:m.jumbotronTitle,gutterBottom:!0},a),n?r.createElement(l.a,{variant:"subtitle1"},n):null,i?r.createElement("ul",{className:m.artists},i.map((function(e){return r.createElement(l.a,{className:m.artist,variant:"subtitle2",component:"li",key:e},e)}))):null))}},DCqF:function(e,t,n){"use strict";var r=n("mXGw"),a=n("u44p"),i=n("NUsa"),o=n("YZpo"),l=n("5bSt"),u=n("xR0W"),c=n.n(u),s=n("ylWx"),d=n.n(s),m=n("HexO");t.a=function(e){var t=e.previous,n=e.next;return r.createElement(a.a,{subheader:r.createElement(i.a,null,"Navigation")},t?r.createElement(m.a,{dense:!0,button:!0,to:t.to},r.createElement(o.a,null,r.createElement(c.a,null)),r.createElement(l.a,{primary:t.title,secondary:"prev"})):null,n?r.createElement(m.a,{dense:!0,button:!0,to:n.to},r.createElement(o.a,null,r.createElement(d.a,null)),r.createElement(l.a,{primary:n.title,secondary:"next"})):null)}},JVN4:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("mXGw"),a=n("fUi+");function i(){var e=Object(a.b)().sort;return r.useCallback((function(t){return"older"===e?t:-t}),[e])}},Rgr8:function(e,t,n){"use strict";var r=n("mXGw"),a=n("BQn0"),i=n("SUdF"),o=n("/ZiB"),l=n("MU2d"),u=n("LOiH");var c=function(e){var t,n,i,c,s=e.program,d=e.filter,m=void 0===d?function(){return!0}:d;return r.createElement(a.a,{py:2},r.createElement(o.a,{variant:"subtitle2",component:"span"},"第",s.week,"回 ",s.date),r.createElement(o.a,{variant:"h6",component:"h3",gutterBottom:!0},r.createElement(l.a,{to:null!==(t=null===(n=s.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#"},s.title)),null!==(i=null==s||null===(c=s.playlist)||void 0===c?void 0:c.filter(m).map((function(e,t){var n;return r.createElement(u.b,{key:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:t,tune:e})})))&&void 0!==i?i:null)},s=n("6CzD"),d=n("JVN4");function m(){return r.createElement(a.a,{py:4},r.createElement(u.a,null))}function f(e){var t=e.children,n=e.margin,a=void 0===n?0:n,o=e.once,l=void 0===o||o,u=Object(i.a)({rootMargin:a+"px",triggerOnce:l}),c=u[0],s=u[1];return r.createElement("div",{ref:c},s?t:r.createElement(m,null))}t.a=function(e){var t=e.programs,n=e.filter,a=void 0===n?function(){return!0}:n,i=e.divisor,o=function(e,t,n){void 0===n&&(n=function(){return!0});var a=Object(d.a)();return r.useMemo((function(){return e.sort((function(e,t){return a(e.week&&t.week?e.week-t.week:0)})).reduce((function(e,r,a){var i,o,l=Object.assign({},r,{playlist:null!==(i=null===(o=r.playlist)||void 0===o?void 0:o.filter(n))&&void 0!==i?i:[]});return 0===a?[[l]]:function(e){return e.reduce((function(e,t){return t.playlist?e+t.playlist.length:e}),0)}(e[e.length-1])<t?(e[e.length-1].push(l),e):[].concat(Object(s.a)(e),[[l]])}),[])}),[e,t,n,a])}(t,void 0===i?15:i,a),l=r.useMemo((function(){return o.map((function(e,t){return 0===t?r.createElement("div",{key:t},e.map((function(e){return r.createElement(c,{program:e,key:e.id})}))):r.createElement(f,{key:t,margin:40},e.map((function(e){return r.createElement(c,{program:e,key:e.id})})))}))}),[o]);return r.createElement("div",null,l)}},SUdF:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("mXGw");var a=function(e,t){if(!e)throw new Error("Invariant failed")};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,c=new Map,s=new Map,d=0;function m(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,i=r.root,o=r.rootMargin,l=r.threshold;if(u.has(e)&&a(!1),e){var m=function(e){return e?s.has(e)?s.get(e):(d+=1,s.set(e,d.toString()),s.get(e)+"_"):""}(i)+(o?l.toString()+"_"+o:l.toString()),f=c.get(m);f||(f=new IntersectionObserver(v,n),m&&c.set(m,f));var p={callback:t,element:e,inView:!1,observerId:m,observer:f,thresholds:f.thresholds||(Array.isArray(l)?l:[l])};return u.set(e,p),f.observe(e),p}}function f(e){if(e){var t=u.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var i=!1,o=!1;n&&u.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,o=!0),t.observer.root===a&&(o=!0))})),!o&&a&&s.delete(a),r&&!i&&r.disconnect(),u.delete(e)}}}function v(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=u.get(r);if(a&&n>=0){var i=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),a.inView=i,a.callback(i,e)}}))}var p=function(e){var t,n;function u(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return i(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),i(l(t),"node",null),i(l(t),"handleNode",(function(e){t.node&&(f(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),i(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=u.prototype;return c.componentDidMount=function(){this.node||a(!1)},c.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(f(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(f(this.node),this.node=null)},c.componentWillUnmount=function(){this.node&&(f(this.node),this.node=null)},c.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;m(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},c.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,i=a.children,l=a.as,u=a.tag,c=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(l||u||"div",o({ref:this.handleNode},c),i)},u}(r.Component);i(p,"displayName","InView"),i(p,"defaultProps",{threshold:0,triggerOnce:!1});var h={inView:!1,entry:void 0};function g(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(h),a=n[0],i=n[1],o=Object(r.useCallback)((function(n){t.current&&f(t.current),n&&m(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&f(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||a===h||e.triggerOnce||i(h)})),[o,a.inView,a.entry]}},Zfvn:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("mXGw"),a=n("Wbzz"),i=n("R82R"),o=n("ozoj"),l=n("BQn0"),u=n("/NZN"),c=n("xR0W"),s=n.n(c),d=n("ylWx"),m=n.n(d),f=(n("9dpD"),Object(i.a)((function(e){var t;return Object(o.a)({root:(t={display:"flex",flexDirection:"row",justifyContent:"space-between"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t)})})));function v(e,t,n){return{previous:e?{to:n+"/"+e.fieldValue+"/",title:e.fieldValue}:void 0,next:t?{to:n+"/"+t.fieldValue,title:t.fieldValue}:void 0}}t.b=function(e){var t=e.previous,n=e.next,i=f();return r.createElement(l.a,{className:i.root},t?r.createElement(l.a,{py:1,pr:1,textAlign:"left"},r.createElement(u.a,{component:a.Link,variant:"outlined",to:t.to},r.createElement(s.a,null),t.title)):null,n?r.createElement(l.a,{py:1,pl:1,textAlign:"right"},r.createElement(u.a,{component:a.Link,variant:"outlined",to:n.to},n.title,r.createElement(m.a,null))):null)}},amBo:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return C}));var r=n("mXGw"),a=n("Wbzz"),i=n("/ZiB"),o=n("5UIW"),l=n("BQn0"),u=n("9dpD"),c=n("zaJg"),s=n.n(c),d=n("FJwj"),m=n("ThN4"),f=n("7zBi"),v=n("Rgr8"),p=n("LOiH"),h=n("DCqF"),g=n("Zfvn"),b=n("y16u"),E=n("23bq"),y=n("6CzD"),w=n("R82R"),O=n("ozoj"),j=n("MU2d"),x=Object(w.a)((function(e){return Object(O.a)({root:{margin:0,padding:0},item:{display:"inline-block",padding:0,marginRight:e.spacing(1)}})}));var k=function(e){var t=e.edges,n=x();return r.createElement("ul",{className:n.root},function(e){var t=e.map((function(e){var t;return null!==(t=e.node.playlist)&&void 0!==t?t:[]})).reduce((function(e,t){return e&&t?[].concat(Object(y.a)(e),Object(y.a)(t)):e}),[]);return Array.from(new Set(t.map((function(e){var t;return null!==(t=null==e?void 0:e.artist)&&void 0!==t?t:""})))).sort((function(e,t){return e.localeCompare(t)}))}(t).map((function(e){return r.createElement(i.a,{key:e,component:"li",className:n.item},r.createElement(j.a,{to:"/artist/"+e+"/"},e))})))},V=n("7SMM"),M=n("KoUe"),N=Object(d.bindKeyboard)(Object(d.virtualize)(s.a));t.default=function(e){var t=e.data,n=e.pageContext,c=Object(M.a)(),s=r.useMemo((function(){return Object(V.a)(c)}),[c]),d=n.previous,y=n.next,w=n.index,O=n.fieldValue,j=t.allProgram.edges,x=r.useState(!1),C=x[0],z=x[1],B=r.useState(w),R=B[0],U=B[1];return r.useEffect((function(){var e=setTimeout((function(){R!==w&&(z(!0),Object(a.navigate)("/artist/"+s[R].fieldValue))}),500);return function(){clearTimeout(e)}}),[R,s,w]),r.createElement(m.a,{title:O,disableGutters:!0,disablePaddingTop:!0,loading:C,maxWidth:!1,componentViewports:{BottomNav:!1},drawerContents:r.createElement(h.a,Object(g.a)(d,y,"/artist"))},r.createElement(N,{index:R,onChangeIndex:function(e){U(e)},slideRenderer:function(e){var t=e.index,n=e.key,a=s[t];return r.createElement("div",{key:n},r.createElement(f.a,{title:a.fieldValue,subtitle:"登場回: "+a.edges.length+" 曲数: "+a.tunes.length,imgUrl:a.img}),r.createElement(o.a,{maxWidth:"md"},r.createElement(l.a,{pt:4},a.fieldValue===O?r.createElement("div",null,r.createElement(v.a,{programs:j.map((function(e){return e.node})),filter:function(e){return e.artist===O}}),r.createElement(b.a,null,r.createElement(g.b,Object(g.a)(d,y,"/artist"))),"スピッツ"!==a.fieldValue?r.createElement(b.a,null,r.createElement(i.a,{variant:"h6",component:"h3",gutterBottom:!0},a.fieldValue,"と同じ回で登場したアーティスト"),r.createElement(k,{edges:j})):null,r.createElement(b.a,null,r.createElement(E.a,null))):r.createElement("div",null,r.createElement(l.a,{py:2},r.createElement(i.a,{variant:"subtitle2"},r.createElement(u.a,{variant:"text",width:100})),r.createElement(i.a,{variant:"h6"},r.createElement(u.a,{variant:"text"})),r.createElement(p.a,null))))))},slideCount:s.length,resistance:!0}))};var C="1228417001"},xR0W:function(e,t,n){"use strict";var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),i=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=i},ylWx:function(e,t,n){"use strict";var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),i=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=i}}]);
//# sourceMappingURL=component---src-templates-artist-tsx-394ecfd3f745a16349c1.js.map