(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JVN4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var l=n("q1tI"),a=n("Btix");function r(){var e=Object(a.b)().sort;return l.useCallback((function(t){return"older"===e?t:-t}),[e])}function i(){var e=r();return function(t,n){var l,a;return e((null!==(l=null==t?void 0:t.week)&&void 0!==l?l:0)-(null!==(a=null==n?void 0:n.week)&&void 0!==a?a:0))}}function u(){var e=r();return function(t,n){var l,a,r,i;return e((null!==(l=null==t||null===(a=t.node)||void 0===a?void 0:a.week)&&void 0!==l?l:0)-(null!==(r=null==n||null===(i=n.node)||void 0===i?void 0:i.week)&&void 0!==r?r:0))}}},amBo:function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),a=n("Wbzz"),r=n("dfam"),i=n("JrkS"),u=n("7VIw"),o=n.n(u),c=n("7wYf"),d=n("8yLC"),v=n("nrjT"),m=n("3H7G"),s=n("TsDZ"),E=n("ASl3"),f=n("Zfvn"),b=n("DCqF"),w=n("23bq"),k=n("Dyiq"),p=n("+HzE"),g=n("JVN4"),y=Object(c.bindKeyboard)(o.a);t.default=function(e){var t,n,u,o,c=e.data,C=e.pageContext,j=C.previous,x=C.next,O=Object(g.b)(),q=j?1:0,J=null===(t=c.artist)||void 0===t||null===(n=t.program)||void 0===n?void 0:n.map((function(e){var t,n;return Object.assign({},e,{playlist:null===(t=c.artist)||void 0===t||null===(n=t.tunes)||void 0===n?void 0:n.filter((function(t){return(null==t?void 0:t.week)===(null==e?void 0:e.week)}))})})),I=[j?l.createElement(p.a,{key:null==j?void 0:j.name,item:j}):null,l.createElement("div",{key:"main"},l.createElement(m.a,{artist:c.artist}),l.createElement(v.a,null),l.createElement(v.b,null,l.createElement(r.a,{indicatorColor:"secondary",centered:!0,value:0},l.createElement(i.a,{label:"曲"}),l.createElement(i.a,{label:"詳細"})),l.createElement("div",null,null==J?void 0:J.sort(O).map((function(e){return l.createElement(s.c,{key:e.week,program:e})})))),l.createElement(v.a,null),l.createElement(k.a,null),l.createElement(v.a,null),l.createElement(v.b,null,l.createElement(E.a,{title:"同じ回で登場したアーティスト",artists:null===(u=c.artist)||void 0===u?void 0:u.relatedArtists})),l.createElement(v.a,null),l.createElement(v.b,null,l.createElement(f.a,{variant:"artist",pageContext:C}))),x?l.createElement(p.a,{key:x.name,item:x}):null].filter((function(e){return Boolean(e)}));return l.createElement(d.a,{title:null===(o=c.artist)||void 0===o?void 0:o.name,drawerContents:l.createElement(b.a,{pageContext:C,variant:"artist"})},l.createElement(y,{index:1,onChangeIndex:function(e){e!==q&&(x&&e===q+1&&Object(a.navigate)("/artist/"+x.name),j&&e===q-1&&Object(a.navigate)("/artist/"+(null==j?void 0:j.name)))},resistance:!0},I),l.createElement(v.a,null),l.createElement(v.b,null,l.createElement(w.a,null)))}}}]);
//# sourceMappingURL=component---src-templates-artist-tsx-35d3f7759fa81bdca48d.js.map