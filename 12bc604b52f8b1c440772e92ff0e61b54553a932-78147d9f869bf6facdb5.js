(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Rgr8:function(e,t,n){"use strict";var r=n("mXGw"),o=n("BQn0"),i=n("SUdF"),a=n("/ZiB"),c=n("MU2d"),u=n("LOiH");var l=function(e){var t,n,i,l,s=e.program,d=e.filter,f=void 0===d?function(){return!0}:d;return r.createElement(o.a,{py:2},r.createElement(a.a,{variant:"subtitle2",component:"span"},"第",s.week,"回 ",s.date),r.createElement(a.a,{variant:"h6",component:"h3",gutterBottom:!0},r.createElement(c.a,{to:null!==(t=null===(n=s.fields)||void 0===n?void 0:n.slug)&&void 0!==t?t:"#"},s.title)),null!==(i=null==s||null===(l=s.playlist)||void 0===l?void 0:l.filter(f).map((function(e,t){var n;return r.createElement(u.b,{key:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:t,tune:e})})))&&void 0!==i?i:null)},s=(n("jr56"),n("Eb4t"),n("Fdmb"),n("abGl"),n("IYjZ"),n("yvkl"),n("1c7q"),n("kBzq"),n("VlJN"),n("YjJN"),n("JVN4"));function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){return r.createElement(o.a,{py:4},r.createElement(u.a,null))}function p(e){var t=e.children,n=e.margin,o=void 0===n?0:n,a=e.once,c=void 0===a||a,u=Object(i.a)({rootMargin:o+"px",triggerOnce:c}),l=u[0],s=u[1];return r.createElement("div",{ref:l},s?t:r.createElement(h,null))}t.a=function(e){var t=e.programs,n=e.filter,o=void 0===n?function(){return!0}:n,i=e.divisor,a=function(e,t,n){void 0===n&&(n=function(){return!0});var o=Object(s.a)();return r.useMemo((function(){return e.sort((function(e,t){return o(e.week&&t.week?e.week-t.week:0)})).reduce((function(e,r,o){var i,a,c=Object.assign({},r,{playlist:null!==(i=null===(a=r.playlist)||void 0===a?void 0:a.filter(n))&&void 0!==i?i:[]});return 0===o?[[c]]:function(e){return e.reduce((function(e,t){return t.playlist?e+t.playlist.length:e}),0)}(e[e.length-1])<t?(e[e.length-1].push(c),e):[].concat(d(e),[[c]])}),[])}),[e,t,n,o])}(t,void 0===i?15:i,o),c=r.useMemo((function(){return a.map((function(e,t){return 0===t?r.createElement("div",{key:t},e.map((function(e){return r.createElement(l,{program:e,key:e.id})}))):r.createElement(p,{key:t,margin:40},e.map((function(e){return r.createElement(l,{program:e,key:e.id})})))}))}),[a]);return r.createElement("div",null,c)}},SUdF:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n("lLrm"),n("Tw+y"),n("apM1"),n("Eb4t"),n("Yp4Z"),n("VlJN"),n("ZY1c"),n("6IHZ"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("EH6R"),n("1c7q"),n("hBi6");var r=n("mXGw");var o=function(e,t){if(!e)throw new Error("Invariant failed")};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=new Map,l=new Map,s=new Map,d=0;function f(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,i=r.root,a=r.rootMargin,c=r.threshold;if(u.has(e)&&o(!1),e){var f=function(e){return e?s.has(e)?s.get(e):(d+=1,s.set(e,d.toString()),s.get(e)+"_"):""}(i)+(a?c.toString()+"_"+a:c.toString()),h=l.get(f);h||(h=new IntersectionObserver(p,n),f&&l.set(f,h));var v={callback:t,element:e,inView:!1,observerId:f,observer:h,thresholds:h.thresholds||(Array.isArray(c)?c:[c])};return u.set(e,v),h.observe(e),v}}function h(e){if(e){var t=u.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var i=!1,a=!1;n&&u.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&s.delete(o),r&&!i&&r.disconnect(),u.delete(e)}}}function p(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=u.get(r);if(o&&n>=0){var i=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}}))}var v=function(e){var t,n;function u(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return i(c(t=e.call.apply(e,[this].concat(r))||this),"state",{inView:!1,entry:void 0}),i(c(t),"node",null),i(c(t),"handleNode",(function(e){t.node&&(h(t.node),e||t.props.triggerOnce||t.setState({inView:!1,entry:void 0})),t.node=e||null,t.observeNode()})),i(c(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=u.prototype;return l.componentDidMount=function(){this.node||o(!1)},l.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(h(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(h(this.node),this.node=null)},l.componentWillUnmount=function(){this.node&&(h(this.node),this.node=null)},l.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},l.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var o=this.props,i=o.children,c=o.as,u=o.tag,l=(o.triggerOnce,o.threshold,o.root,o.rootMargin,o.onChange,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(r.createElement)(c||u||"div",a({ref:this.handleNode},l),i)},u}(r.Component);i(v,"displayName","InView"),i(v,"defaultProps",{threshold:0,triggerOnce:!1});var g={inView:!1,entry:void 0};function m(e){void 0===e&&(e={});var t=Object(r.useRef)(),n=Object(r.useState)(g),o=n[0],i=n[1],a=Object(r.useCallback)((function(n){t.current&&h(t.current),n&&f(n,(function(t,r){i({inView:t,entry:r}),t&&e.triggerOnce&&h(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(r.useEffect)((function(){t.current||o===g||e.triggerOnce||i(g)})),[a,o.inView,o.entry]}}}]);
//# sourceMappingURL=12bc604b52f8b1c440772e92ff0e61b54553a932-78147d9f869bf6facdb5.js.map