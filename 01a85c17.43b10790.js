(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{139:function(e,t,a){"use strict";a.r(t);a(191),a(224),a(225),a(30),a(20),a(21),a(59);var r=a(0),n=a.n(r),l=a(178),o=a(174);t.default=function(e){var t=e.tags,a={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)}));var r=Object.entries(a).sort((function(e,t){var a=e[0],r=t[0];return a===r?0:a>r?1:-1})).map((function(e){var a=e[0],r=e[1];return n.a.createElement("div",{key:a},n.a.createElement("h3",null,a),r.map((function(e){return n.a.createElement(o.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},r)))))}},180:function(e,t,a){"use strict";var r=a(2),n=a(9),l=a(0),o=a.n(l),c=a(175),s=a(174),i=a(173),m=a(176),u=a(130),f=a.n(u),E=a(179);function h(e){var t=e.to,a=e.href,l=e.label,c=e.prependBaseUrlToHref,i=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),f=Object(m.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?f:a}:{to:u},i),l)}var d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,l=r.links,s=void 0===l?[]:l,u=r.logo,g=void 0===u?{}:u,p=Object(m.a)(g.src);return a?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container "},o.a.createElement("div",{className:"col footer__col"},o.a.createElement(d,{alt:g.alt,url:p})),s&&s.length>0&&o.a.createElement("div",{className:"row footer__links"},o.a.createElement("div",{className:"col footer__col"},o.a.createElement("ul",{className:"row "+f.a.iconslist},o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/sumelms",className:f.a.footerLogoLink},o.a.createElement(E.d,{size:20}))),o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:f.a.footerLogoLink},o.a.createElement(E.h,{size:20}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://twitter.com/sumelms",className:f.a.footerLogoLink},o.a.createElement(E.i,{size:20}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://facebook.com/sumelms",className:f.a.footerLogoLink},o.a.createElement(E.c,{size:20}))),o.a.createElement("li",null,o.a.createElement("a",{href:"#",className:f.a.footerLogoLink},o.a.createElement(E.f,{size:20}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://youtube.com/educacaoadistancia",className:f.a.footerLogoLink},o.a.createElement(E.k,{size:20}))))),s.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col "},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(h,e))}))):null)}))),n&&o.a.createElement("div",{className:"text--right margin-top--xl"},o.a.createElement("div",{className:f.a.footerCopyright,dangerouslySetInnerHTML:{__html:n}}),o.a.createElement("a",{className:f.a.footerLogoLink,href:"https://www.freepik.com/free-photos-vectors/business"},"Vector created by stories - www.freepik.com")))):null}},191:function(e,t,a){var r=a(24).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||a(10)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},224:function(e,t,a){var r=a(12),n=a(89)(!0);r(r.S,"Object",{entries:function(e){return n(e)}})},225:function(e,t,a){"use strict";var r=a(12),n=a(31),l=a(28),o=a(14),c=[].sort,s=[1,2,3];r(r.P+r.F*(o((function(){s.sort(void 0)}))||!o((function(){s.sort(null)}))||!a(226)(c)),"Array",{sort:function(e){return void 0===e?c.call(l(this)):c.call(l(this),n(e))}})},226:function(e,t,a){"use strict";var r=a(14);e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}}}]);