(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),u=n(134),c=n(141),s=n.n(c),l=n(139),d=n.n(l),p=n(146),m=n(148),f=(n(213),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(m.a,{location:this.props.location},i.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),n.map(function(e){var t=e.node,n=s()(t,"frontmatter.title")||"--no title--";return i.a.createElement("div",{className:"Index--item",key:t.fields.slug},i.a.createElement("h2",{className:"Index--title"},i.a.createElement(u.Link,{to:t.fields.slug},n)),i.a.createElement("div",{className:"Index--meta"},i.a.createElement(p.a,{author:t.frontmatter.author,date:t.frontmatter.date})),t.frontmatter.description&&i.a.createElement("p",null,t.frontmatter.description)||i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component));n.d(t,"homeQuery",function(){return y});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,this.props))},t}(i.a.Component),y=(t.default=h,"3332245402")},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(133),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(135),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(30);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},135:function(e,t,n){var a;e.exports=(a=n(140))&&a.default||a},140:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(49),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},146:function(e,t,n){"use strict";n(29);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),u=(n(147),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.author,a=t.date,r=t.words,o=Math.round((r||1)/179)||1;return i.a.createElement("div",{className:"Meta--root"},r&&i.a.createElement("span",{className:"Meta--timeToRead"},"~",o," min",i.a.createElement("span",{className:"Meta--dot"}," · ")),n,i.a.createElement("span",{className:"Meta--dot"}," · "),(e=a,new Date(Date.parse(e)).toLocaleDateString("de-CH",{year:"numeric",month:"long",day:"numeric"})).replace(/ /g," "))},t}(i.a.Component));t.a=u},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),u=n(134),c=(n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/typesetting/"===n.pathname?i.a.createElement("h1",null,"Blog"):i.a.createElement("h3",null,i.a.createElement(u.Link,{to:"/"},"← Home")),i.a.createElement("div",{className:"layout--content"},e,a)},t}(i.a.Component));t.a=c},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},213:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-2dd2b1e6e9bb2397da29.js.map