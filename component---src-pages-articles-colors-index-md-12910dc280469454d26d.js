(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var r=n(142),o=n.n(r),a=n(0),c=n.n(a),p=n(143);t.default=function(e){var t=e.components;o()(e,["components"]);return c.a.createElement(p.MDXTag,{name:"wrapper",components:t},c.a.createElement(p.MDXTag,{name:"h1",components:t},"this is a stub! don't read!"),c.a.createElement(p.MDXTag,{name:"h2",components:t},"Correct Collors"),c.a.createElement(p.MDXTag,{name:"p",components:t},"Die ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.lettertypen.de/"}},"Lettertypen")," kennen einen Lieferanten, der Farben mit Leinöl liefert."),c.a.createElement(p.MDXTag,{name:"h2",components:t},"Colors"),c.a.createElement(p.MDXTag,{name:"p",components:t},"To print in colors take «Kleinoffset ohne Trockenstoff». As for Black you can probably also order «Folienfarbe»."),c.a.createElement(p.MDXTag,{name:"h3",components:t},"Colos in Germany"),c.a.createElement(p.MDXTag,{name:"p",components:t},"In Germany there is a company called ",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gerstaecker.de/"}},"Gerstaecker")," selling speial «Buchdruckfarben». (",c.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.verein-fuer-die-schwarze-kunst.de/community/forum-wissen/druckfarben-hochdruck/#post-13"}},"Source"),")"),c.a.createElement(p.MDXTag,{name:"h3",components:t},"Colos in Switzerland"),c.a.createElement(p.MDXTag,{name:"p",components:t},"hubergroup Schweiz AG",c.a.createElement(p.MDXTag,{name:"br",components:t,parentName:"p"}),"Buechstrasse 11",c.a.createElement(p.MDXTag,{name:"br",components:t,parentName:"p"}),"CH-8645 Jona  "),c.a.createElement(p.MDXTag,{name:"p",components:t},"Dündup Rongtsang → Duendup.Rongtsang@hubergroup.com – +41 55 457 51 38"))};var u={title:"Colors",author:"Stefan Huber",date:"2018-11-04",layout:"post",draft:!0,path:"/articles/colors/",tags:["TagOne","TagTwo"],description:"bla bla bla... "}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=p(n(0)),a=p(n(47)),c=p(n(4));function p(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),s=u.Provider,i=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(i,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var l=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};l.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=l},142:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(144);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(140);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),c=s(a),p=s(n(145)),u=n(140);function s(e){return e&&e.__esModule?e:{default:e}}var i={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,s=e.components,l=void 0===s?{}:s,f=e.Layout,m=e.layoutProps,d=l[n+"."+t]||l[t]||i[t]||t;return f?((0,p.default)(this,f),c.default.createElement(f,r({components:l},m),c.default.createElement(d,a,u))):c.default.createElement(d,a,u)}}]),t}();t.default=(0,u.withMDXComponents)(l)},145:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,i=s&&s(Object);e.exports=function e(t,n,l){if("string"!=typeof n){if(i){var f=s(n);f&&f!==i&&e(t,f,l)}var m=c(n);p&&(m=m.concat(p(n)));for(var d=0;d<m.length;++d){var y=m[d];if(!(r[y]||o[y]||l&&l[y])){var b=u(n,y);try{a(t,y,b)}catch(e){}}}return t}return t}}}]);
//# sourceMappingURL=component---src-pages-articles-colors-index-md-12910dc280469454d26d.js.map