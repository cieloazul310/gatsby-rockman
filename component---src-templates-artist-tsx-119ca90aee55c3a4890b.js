(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7zBi":function(e,t,n){"use strict";var r=n("mXGw"),a=n("R82R"),o=n("ozoj"),i=n("BQn0"),l=n("/ZiB"),c=Object(a.a)((function(e){return Object(o.a)({jumbotronBg:function(t){var n=t.imgUrl;return{height:"100%",backgroundColor:e.palette.grey[700],backgroundImage:n?"url("+n+")":null,backgroundPosition:"center",backgroundSize:"cover",filter:n?"blur(6px) brightness(0.8)":null,transform:n?"scale(1.1)":null}},jumbotronText:function(t){var n;return(n={height:t.height,color:"white",position:"absolute",transform:"translate(0, -100%)",display:"flex",flexDirection:"column",justifyContent:"center",zIndex:2,padding:e.spacing(2,4)})[e.breakpoints.down("xs")]={padding:e.spacing(2)},n},jumbotronTitle:{fontWeight:"bold"}})}));t.a=function(e){var t=e.header,n=e.subtitle,a=e.title,o=e.artists,u=e.imgUrl,s=e.height,d=void 0===s?300:s,f=c({imgUrl:u,height:d});return r.createElement(i.a,{height:d,overflow:"hidden",position:"relative"},r.createElement("div",{className:f.jumbotronBg}),r.createElement("div",{className:f.jumbotronText},r.createElement(l.a,{variant:"subtitle2"},t),r.createElement(l.a,{variant:"h2",className:f.jumbotronTitle,gutterBottom:!0},a),n?r.createElement(l.a,{variant:"subtitle1"},n):null,o?r.createElement(l.a,{variant:"body2",component:"div"},o):null))}},DCqF:function(e,t,n){"use strict";var r=n("mXGw"),a=n("u44p"),o=n("NUsa"),i=n("YZpo"),l=n("5bSt"),c=n("xR0W"),u=n.n(c),s=n("ylWx"),d=n.n(s),f=n("HexO");t.a=function(e){var t=e.previous,n=e.next;return r.createElement(a.a,{subheader:r.createElement(o.a,null,"Navigation")},t?r.createElement(f.a,{dense:!0,button:!0,to:t.to},r.createElement(i.a,null,r.createElement(u.a,null)),r.createElement(l.a,{primary:t.title,secondary:"prev"})):null,n?r.createElement(f.a,{dense:!0,button:!0,to:n.to},r.createElement(i.a,null,r.createElement(d.a,null)),r.createElement(l.a,{primary:n.title,secondary:"next"})):null)}},HexO:function(e,t,n){"use strict";n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),a=n("Wbzz"),o=n("v6vt");function i(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var l=r.forwardRef((function(e,t){var n=e.to,o=e.state,l=i(e,["to","state"]);return r.createElement(a.Link,Object.assign({to:n,state:o,ref:t},l))}));t.a=function(e){var t=e.className,n=e.innerRef,a=e.naked,c=e.to,u=e.button,s=i(e,["className","innerRef","naked","to","button"]);return a?r.createElement(l,Object.assign({className:t,ref:n,to:c},s)):u?r.createElement(o.a,Object.assign({component:l,className:t,to:c,ref:n,button:!0},s)):r.createElement(o.a,Object.assign({component:l,className:t,to:c,ref:n},s))}},JVN4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("kBzq");var r=n("mXGw"),a=n("fUi+");function o(){var e=Object(a.b)().sort;return r.useCallback((function(t){return"older"===e?t:-t}),[e])}},MU2d:function(e,t,n){"use strict";n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),a=n("Wbzz"),o=n("1LRU"),i=(n("/NZN"),n("JF+v")),l=n("PDtE");function c(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var u=r.forwardRef((function(e,t){var n=e.to,o=e.state,i=c(e,["to","state"]);return r.createElement(a.Link,Object.assign({to:n,state:o,ref:t},i))}));t.a=function(e){var t,n=e.activeClassName,s=void 0===n?"active":n,d=e.className,f=e.color,m=void 0===f?"secondary":f,v=e.underline,h=void 0===v?"hover":v,p=e.innerRef,g=e.naked,b=e.to,E=c(e,["activeClassName","className","color","underline","innerRef","naked","to"]),y=Object(i.useLocation)().pathname,w=Object(l.a)(d,((t={})[s]=y===Object(a.withPrefix)(b)&&s,t));return g?r.createElement(u,Object.assign({className:w,ref:p,to:b},E)):r.createElement(o.a,Object.assign({component:u,className:w,to:b,ref:p,color:m,underline:h},E))}},Rgr8:function(e,t,n){"use strict";var r=n("mXGw"),a=n("BQn0"),o=n("SUdF"),i=n("/ZiB"),l=n("MU2d"),c=n("LOiH");var u=function(e){var t=e.program,n=e.filter,o=void 0===n?function(){return!0}:n;return r.createElement(a.a,{py:2},r.createElement(i.a,{variant:"subtitle2",component:"span"},"第",t.week,"回 ",t.date),r.createElement(i.a,{variant:"h6",component:"h3",gutterBottom:!0},r.createElement(l.a,{to:t.fields.slug},t.title)),t.playlist.filter(o).map((function(e){return r.createElement(c.b,{key:e.id,tune:e})})))},s=(n("jr56"),n("Eb4t"),n("Fdmb"),n("abGl"),n("IYjZ"),n("yvkl"),n("1c7q"),n("kBzq"),n("VlJN"),n("YjJN"),n("JVN4"));function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(){return r.createElement(a.a,{py:4},r.createElement(c.a,null))}function v(e){var t=e.children,n=e.margin,a=void 0===n?0:n,i=e.once,l=void 0===i||i,c=Object(o.a)({rootMargin:a+"px",triggerOnce:l}),u=c[0],s=c[1];return r.createElement("div",{ref:u},s?t:r.createElement(m,null))}t.a=function(e){var t=e.programs,n=e.filter,a=void 0===n?function(){return!0}:n,o=e.divisor,i=function(e,t,n){void 0===n&&(n=function(){return!0});var a=Object(s.a)();return r.useMemo((function(){return e.sort((function(e,t){return a(e.week-t.week)})).reduce((function(e,r,a){var o=Object.assign({},r,{playlist:r.playlist.filter(n)});return 0===a?[[o]]:function(e){return e.reduce((function(e,t){return e+t.playlist.length}),0)}(e[e.length-1])<t?(e[e.length-1].push(o),e):[].concat(d(e),[[o]])}),[])}),[e,t,n,a])}(t,void 0===o?15:o,a),l=r.useMemo((function(){return i.map((function(e,t){return 0===t?r.createElement("div",{key:t},e.map((function(e){return r.createElement(u,{program:e,key:e.id})}))):r.createElement(v,{key:t,margin:40},e.map((function(e){return r.createElement(u,{program:e,key:e.id})})))}))}),[i]);return r.createElement("div",null,l)}},SUdF:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n("lLrm"),n("Tw+y"),n("apM1"),n("Eb4t"),n("Yp4Z"),n("VlJN"),n("ZY1c"),n("6IHZ"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("EH6R"),n("1c7q"),n("hBi6");var r=n("mXGw");var a=function(e,t){if(!e)throw new Error("Invariant failed")};function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=new Map,u=new Map,s=new Map,d=0;function f(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,i=r.rootMargin,l=r.threshold;if(c.has(e)&&a(!1),e){var f=function(e){return e?s.has(e)?s.get(e):(d+=1,s.set(e,d.toString()),s.get(e)+"_"):""}(o)+(i?l.toString()+"_"+i:l.toString()),m=u.get(f);m||(m=new IntersectionObserver(v,n),f&&u.set(f,m));var h={callback:t,element:e,inView:!1,observerId:f,observer:m,thresholds:m.thresholds||(Array.isArray(l)?l:[l])};return c.set(e,h),m.observe(e),h}}function m(e){if(e){var t=c.get(e);if(t){var n=t.observerId,r=t.observer,a=r.root;r.unobserve(e);var o=!1,i=!1;n&&c.forEach((function(t,r){r!==e&&(t.observerId===n&&(o=!0,i=!0),t.observer.root===a&&(i=!0))})),!i&&a&&s.delete(a),r&&!o&&r.disconnect(),c.delete(e)}}}function v(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,a=c.get(r);if(a&&n>=0){var o=a.thresholds.some((function(e){return a.inView?n>e:n>=e}));void 0!==t&&(o=o&&t),a.inView=o,a.callback(o,e)}}))}var h=function(e){var t,n;function c(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return o(l(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),o(l(t),"node",null),o(l(t),"handleNode",(function(e){t.node&&(m(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),o(l(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var u=c.prototype;return u.componentDidMount=function(){this.node||a(!1)},u.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(m(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(m(this.node),this.node=null)},u.componentWillUnmount=function(){this.node&&(m(this.node),this.node=null)},u.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},u.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var a=this.props,o=a.children,l=a.as,c=a.tag,u=(a.triggerOnce,a.threshold,a.root,a.rootMargin,a.onChange,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(l||c||"div",i({ref:this.handleNode},u),o)},c}(r.Component);o(h,"displayName","InView"),o(h,"defaultProps",{threshold:0,triggerOnce:!1});var p={inView:!1,entry:void 0};function g(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(p),a=n[0],o=n[1],i=Object(r.useCallback)((function(n){t.current&&m(t.current),n&&f(n,(function(t,r){o({inView:t,entry:r}),t&&e.triggerOnce&&m(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||a===p||e.triggerOnce||o(p)})),[i,a.inView,a.entry]}},Zfvn:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("mXGw"),a=n("Wbzz"),o=n("R82R"),i=n("ozoj"),l=n("BQn0"),c=n("/NZN"),u=n("xR0W"),s=n.n(u),d=n("ylWx"),f=n.n(d),m=(n("9dpD"),Object(o.a)((function(e){var t;return Object(i.a)({root:(t={display:"flex",flexDirection:"row",justifyContent:"space-between"},t[e.breakpoints.down("sm")]={flexDirection:"column"},t)})})));function v(e,t,n){return{previous:e?{to:n+"/"+e.fieldValue+"/",title:e.fieldValue}:null,next:t?{to:n+"/"+t.fieldValue,title:t.fieldValue}:null}}t.b=function(e){var t=e.previous,n=e.next,o=m();return r.createElement(l.a,{className:o.root},t?r.createElement(l.a,{py:1,pr:1,textAlign:"left"},r.createElement(c.a,{component:a.Link,variant:"outlined",to:t.to},r.createElement(s.a,null),t.title)):null,n?r.createElement(l.a,{py:1,pl:1,textAlign:"right"},r.createElement(c.a,{component:a.Link,variant:"outlined",to:n.to},n.title,r.createElement(f.a,null))):null)}},amBo:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return w}));n("kBzq");var r=n("mXGw"),a=n("Wbzz"),o=n("/ZiB"),i=n("5UIW"),l=n("BQn0"),c=n("9dpD"),u=n("zaJg"),s=n.n(u),d=n("FJwj"),f=n("ThN4"),m=n("7zBi"),v=n("Rgr8"),h=n("LOiH"),p=n("DCqF"),g=n("Zfvn"),b=n("KoUe"),E=Object(d.bindKeyboard)(Object(d.virtualize)(s.a));function y(e,t){var n=e.slice(0,4);return"The "===n||"THE "===n||"the "===n?e.slice(4):t||e}t.default=function(e){var t=e.data,n=e.pageContext,u=Object(b.a)(),s=r.useMemo((function(){return u.sort((function(e,t){return t.edges.length-e.edges.length||t.tunes.length-e.tunes.length||y(e.fieldValue,e.kana).localeCompare(y(t.fieldValue,t.kana))}))}),[]),d=n.previous,w=n.next,O=n.index,j=n.fieldValue,k=t.allProgram.edges,x=r.useState(!1),N=x[0],V=x[1],M=r.useState(O),B=M[0],C=M[1];return r.useEffect((function(){var e=setTimeout((function(){B!==O&&(V(!0),Object(a.navigate)("/artist/"+s[B].fieldValue))}),500);return function(){clearTimeout(e)}}),[B]),r.createElement(f.a,{title:j,disableGutters:!0,disablePaddingTop:!0,loading:N,componentViewports:{BottomNav:!1},drawerContents:r.createElement(p.a,Object(g.a)(d,w,"/artist"))},r.createElement(E,{index:B,onChangeIndex:function(e){C(e)},slideRenderer:function(e){var t=e.index,n=e.key,a=s[t];return r.createElement("div",{key:n},r.createElement(m.a,{title:a.fieldValue,subtitle:"登場回: "+a.edges.length+" 曲数: "+a.tunes.length,imgUrl:a.img}),r.createElement(i.a,{maxWidth:"md"},r.createElement(l.a,{pt:4},a.fieldValue===j?r.createElement("div",null,r.createElement(v.a,{programs:k.map((function(e){return e.node})),filter:function(e){return e.artist===j}}),r.createElement(g.b,Object(g.a)(d,w,"/artist"))):r.createElement("div",null,r.createElement(l.a,{py:2},r.createElement(o.a,{variant:"subtitle2"},r.createElement(c.a,{variant:"text",width:100})),r.createElement(o.a,{variant:"h6"},r.createElement(c.a,{variant:"text"})),r.createElement(h.a,null))))))},slideCount:s.length,resistance:!0}))};var w="2941313762"},xR0W:function(e,t,n){"use strict";n("hBi6");var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),o=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=o},ylWx:function(e,t,n){"use strict";n("hBi6");var r=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("mXGw")),o=(0,r(n("c9Um")).default)(a.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.default=o}}]);
//# sourceMappingURL=component---src-templates-artist-tsx-119ca90aee55c3a4890b.js.map