(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1iKp":function(t,e,n){"use strict";var r=n("TqRt"),u=n("284h");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("q1tI")),a=(0,r(n("8/g6")).default)(i.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");e.default=a},"7SMM":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("KQm4");function u(t,e){void 0===e&&(e={});var n=e.sortType||"abc";return Object(r.a)(t).sort((function(t,e){return"edges"===n?function(t,e){return-(t.edges.length-e.edges.length)}(t,e)||i(t,e):"tunes"===n&&function(t,e){return-(t.tunes.length-e.tunes.length)}(t,e)||i(t,e)}))}function i(t,e){return a(t.fieldValue,t.kana).localeCompare(a(e.fieldValue,e.kana))}function a(t,e){var n=t.slice(0,4);return"The "===n||"THE "===n||"the "===n?t.slice(4):e||t}},JQEk:function(t,e,n){"use strict";var r=n("wx14"),u=n("ODXe"),i=n("Ff2n"),a=n("q1tI"),o=n("iuhU"),c=n("dRu9"),l=n("H2TA"),s=n("wpWl"),f=n("4Hym"),d=n("tr08"),m=n("bfFb"),v=a.forwardRef((function(t,e){var n=t.children,l=t.classes,v=t.className,p=t.collapsedHeight,g=void 0===p?"0px":p,b=t.component,h=void 0===b?"div":b,y=t.disableStrictModeCompat,O=void 0!==y&&y,j=t.in,E=t.onEnter,x=t.onEntered,M=t.onEntering,w=t.onExit,S=t.onExited,A=t.onExiting,I=t.style,V=t.timeout,N=void 0===V?s.b.standard:V,R=t.TransitionComponent,T=void 0===R?c.a:R,F=Object(i.a)(t,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),H=Object(d.a)(),k=a.useRef(),C=a.useRef(null),D=a.useRef(),Q="number"==typeof g?"".concat(g,"px"):g;a.useEffect((function(){return function(){clearTimeout(k.current)}}),[]);var q=H.unstable_strictMode&&!O,P=a.useRef(null),U=Object(m.a)(e,q?P:void 0),z=function(t){return function(e,n){if(t){var r=q?[P.current,e]:[e,n],i=Object(u.a)(r,2),a=i[0],o=i[1];void 0===o?t(a):t(a,o)}}},L=z((function(t,e){t.style.height=Q,E&&E(t,e)})),K=z((function(t,e){var n=C.current?C.current.clientHeight:0,r=Object(f.a)({style:I,timeout:N},{mode:"enter"}).duration;if("auto"===N){var u=H.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(u,"ms"),D.current=u}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style.height="".concat(n,"px"),M&&M(t,e)})),J=z((function(t,e){t.style.height="auto",x&&x(t,e)})),W=z((function(t){var e=C.current?C.current.clientHeight:0;t.style.height="".concat(e,"px"),w&&w(t)})),X=z(S),_=z((function(t){var e=C.current?C.current.clientHeight:0,n=Object(f.a)({style:I,timeout:N},{mode:"exit"}).duration;if("auto"===N){var r=H.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(r,"ms"),D.current=r}else t.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");t.style.height=Q,A&&A(t)}));return a.createElement(T,Object(r.a)({in:j,onEnter:L,onEntered:J,onEntering:K,onExit:W,onExited:X,onExiting:_,addEndListener:function(t,e){var n=q?t:e;"auto"===N&&(k.current=setTimeout(n,D.current||0))},nodeRef:q?P:void 0,timeout:"auto"===N?null:N},F),(function(t,e){return a.createElement(h,Object(r.a)({className:Object(o.a)(l.container,v,{entered:l.entered,exited:!j&&"0px"===Q&&l.hidden}[t]),style:Object(r.a)({minHeight:Q},I),ref:U},e),a.createElement("div",{className:l.wrapper,ref:C},a.createElement("div",{className:l.wrapperInner},n)))}))}));v.muiSupportAuto=!0,e.a=Object(l.a)((function(t){return{container:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(v)},KoUe:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return s})),n.d(e,"f",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"h",(function(){return v})),n.d(e,"g",(function(){return g}));var r=n("q1tI"),u=n("Wbzz");function i(){var t=Object(u.useStaticQuery)("999573131");return r.useMemo((function(){return t.allProgram.edges.map((function(t){var e,n,r=t.node,u=(null!==(e=null===(n=r.playlist)||void 0===n?void 0:n.filter((function(t,e){return 0!==e&&(null==t?void 0:t.youtube)&&""!==t.youtube})).map((function(t){return null==t?void 0:t.youtube})))&&void 0!==e?e:[])[0];return Object.assign({},r,{img:u?"https://i.ytimg.com/vi/"+u+"/0.jpg":null})}))}),[t.allProgram.edges])}n("E9XD");var a=n("KQm4");var o=n("7SMM");function c(){var t=Object(u.useStaticQuery)("3372252566");return r.useMemo((function(){return t.allProgram.group.map((function(t){var e,n=function(t){return t.reduce((function(t,e){return t.map((function(t){return t.node.id})).indexOf(e.node.id)>=0?t:[].concat(Object(a.a)(t),[e])}),[])}(t.edges).map((function(e){var n,r,u=e.node;return Object.assign({},u,{playlist:null!==(n=null==u||null===(r=u.playlist)||void 0===r?void 0:r.filter((function(e){return(null==e?void 0:e.artist)===t.fieldValue})))&&void 0!==n?n:[]})})),r=n.reduce((function(t,e){return e.playlist?[].concat(Object(a.a)(t),Object(a.a)(e.playlist)):t}),[]),u=r[0],i=u.kana,o=u.nation,c=r.filter((function(t){return(null==t?void 0:t.youtube)&&""!==t.youtube})).map((function(t){return null==t?void 0:t.youtube})).slice(-1)[0];return{fieldValue:null!==(e=t.fieldValue)&&void 0!==e?e:"",kana:null!=i?i:void 0,nation:null!=o?o:"",edges:n,tunes:r,img:c?"https://i.ytimg.com/vi/"+c+"/0.jpg":void 0}}))}),[t])}function l(t,e){void 0===e&&(e=0);var n=c();return r.useMemo((function(){return Object(o.a)(n,{sortType:t}).slice(0,e||n.length)}),[t,e,n])}function s(){var t=Object(u.useStaticQuery)("3859703565");return r.useMemo((function(){return t.allProgram.group.sort((function(t,e){return e.edges.length-t.edges.length}))}),[t])}function f(t){var e=s();return r.useMemo((function(){return e.filter((function(e){return e.fieldValue&&t.includes(e.fieldValue)}))}),[t,e])}n("Qmzd");var d=n("NFSF");function m(){var t=c(),e=Array.from(new Set(t.map((function(t){return t.nation}))));return r.useMemo((function(){return e.map((function(e){return{nation:e,artists:t.filter((function(t){return e===t.nation})).length,tunes:t.filter((function(t){return e===t.nation})).reduce((function(t,e){return t+e.tunes.length}),0)}})).sort((function(t,e){return e.artists-t.artists||t.nation.localeCompare(e.nation)}))}),[e,t])}function v(){var t=m();return r.useMemo((function(){var e=t.reduce((function(t,e){return d.b.includes(e.nation)?[[].concat(Object(a.a)(t[0]),[e]),Object(a.a)(t[1])]:[Object(a.a)(t[0]),[].concat(Object(a.a)(t[1]),[e])]}),[[],[]]),n=e[0],r=e[1];return[].concat(Object(a.a)(n),[r.reduce((function(t,e){return Object.assign({},t,{artists:t.artists+e.artists,tunes:t.tunes+e.tunes})}),{nation:"others",artists:0,tunes:0})])}),[t])}function p(){var t,e=(t=i(),r.useMemo((function(){return t.reduce((function(t,e){return e.playlist?[].concat(Object(a.a)(t),Object(a.a)(e.playlist)):t}),[])}),[t])),n=Object(u.useStaticQuery)("2825366380");return r.useMemo((function(){return n.allProgram.group.map((function(t){var n=t.fieldValue;return{fieldValue:n,tunes:e.filter((function(t){return(null==t?void 0:t.year)===parseInt(null!=n?n:"0",10)}))}}))}),[e,n])}function g(t){void 0===t&&(t=[]),t.forEach((function(t){if(t%10!=0)throw new Error}));var e=p();return r.useMemo((function(){var n,r=10*Math.floor(parseInt(null!==(n=e[0].fieldValue)&&void 0!==n?n:"1960",10)/10),u=10*Math.floor((new Date).getFullYear()/10);return(t.length?t:Array.from({length:(u-r)/10+1},(function(t,e){return r+10*e}))).map((function(t){var n=e.filter((function(e){var n=e.fieldValue;return Math.floor(parseInt(null!=n?n:"0",10)/10)===t/10}));return{fieldValue:t+"s",value:n.reduce((function(t,e){return t+e.tunes.length}),0),items:n}}))}),[e,t])}},NFSF:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return p}));var r=n("q1tI"),u=n("tr08"),i=n("edxh"),a=n("Yb7a"),o=n("6yBS"),c={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},l=n("dl/7"),s={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},f=n("LXXt"),d={JPN:i.a,UK:a.a,US:o.a,FR:c,CAN:l.a,AUS:s},m=Object.keys(d);function v(t,e){return void 0===e&&(e=!1),"JPN"===t||"UK"===t||"US"===t||"FR"===t||"AUS"===t||"CAN"===t?e?d[t][300]:d[t][500]:f.a[500]}function p(){var t="dark"===Object(u.a)().palette.type;return r.useCallback((function(e){return v(e,t)}),[t])}},Qmzd:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("E9XD");var r=n("KQm4"),u=n("q1tI"),i=n("Wbzz");function a(){var t=Object(i.useStaticQuery)("1399381709");return u.useMemo((function(){return t.allProgram.group.filter((function(t){return"草野マサムネ"!==t.fieldValue})).map((function(t){var e,n=function(t){return t.reduce((function(t,e){return t.map((function(t){return t.node.id})).indexOf(e.node.id)>=0?t:[].concat(Object(r.a)(t),[e])}),[])}(t.edges);return{fieldValue:null!==(e=t.fieldValue)&&void 0!==e?e:"selector",edges:n,playlist:n.reduce((function(e,n){return n.node.playlist?[].concat(Object(r.a)(e),Object(r.a)(n.node.playlist.filter((function(e){return(null==e?void 0:e.selector)===t.fieldValue})))):Object(r.a)(e)}),[])}})).sort((function(t,e){return e.playlist.length-t.playlist.length||e.edges.length-t.edges.length}))}),[t])}},SLcR:function(t,e,n){"use strict";var r=n("wx14"),u=n("Ff2n"),i=n("q1tI"),a=n("iuhU"),o=n("H2TA"),c=n("MquD"),l=i.forwardRef((function(t,e){var n=t.classes,o=t.className,l=Object(u.a)(t,["classes","className"]),s=i.useContext(c.a);return i.createElement("div",Object(r.a)({className:Object(a.a)(n.root,o,"flex-start"===s.alignItems&&n.alignItemsFlexStart),ref:e},l))}));e.a=Object(o.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(l)},mYdW:function(t,e,n){"use strict";var r=n("TqRt"),u=n("284h");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("q1tI")),a=(0,r(n("8/g6")).default)(i.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");e.default=a}}]);
//# sourceMappingURL=2911c103690539ef8b3b2e5a29b40aa004629f68-3ffb01da326b03395f01.js.map