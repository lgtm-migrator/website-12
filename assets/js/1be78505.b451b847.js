(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,181],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ke}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),i=n(341),c=n(2122),s=n(9756),u=n(6010),d=n(9306),m=n(1839),p=n(3783),h=n(7898),f=n(6742),b=n(3919),y=n(5537),g=function(e){return r.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},v=n(4478),E=n(8617),k=n(4973),N="sidebar_15mo",_="sidebarWithHideableNavbar_267A",C="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",S="menu_Bmed",T="menuLinkText_2aKo",w="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",O="collapseSidebarButtonIcon_3E-R",j="sidebarMenuIcon_fgN0",I="sidebarMenuCloseIcon_1lpH",P=["items"],L=["item","onItemClick","collapsible","activePath"],B=["item","onItemClick","activePath","collapsible"],D=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},A=(0,r.memo)((function(e){var t=e.items,n=(0,s.Z)(e,P);return t.map((function(e,t){return r.createElement(M,(0,c.Z)({key:t,item:e},n))}))}));function M(e){switch(e.item.type){case"category":return r.createElement(R,e);case"link":default:return r.createElement(H,e)}}function R(e){var t,n=e.item,a=e.onItemClick,o=e.collapsible,l=e.activePath,i=(0,s.Z)(e,L),m=n.items,p=n.label,h=D(n,l),f=(0,d.D9)(h),b=(0,r.useState)((function(){return!!o&&(!h&&n.collapsed)})),y=b[0],g=b[1],v=(0,r.useRef)(null),E=(0,r.useState)(void 0),k=E[0],N=E[1],_=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=v.current)?void 0:t.scrollHeight)+"px":void 0)};(0,r.useEffect)((function(){h&&!f&&y&&g(!1)}),[h,f,y]);var C=(0,r.useCallback)((function(e){e.preventDefault(),k||_(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[k]);return 0===m.length?null:r.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":y})},r.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[T]=!o,t)),onClick:o?C:void 0,href:o?"#":void 0},i),p),r.createElement("ul",{className:"menu__list",ref:v,style:{height:k},onTransitionEnd:function(){y||_(!1)}},r.createElement(A,{items:m,tabIndex:y?"-1":"0",onItemClick:a,collapsible:o,activePath:l})))}function H(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,(0,s.Z)(e,B)),l=t.href,i=t.label,d=D(t,a);return r.createElement("li",{className:"menu__list-item",key:i},r.createElement(f.Z,(0,c.Z)({className:(0,u.Z)("menu__link",{"menu__link--active":d}),to:l},(0,b.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,b.Z)(l)?i:r.createElement("span",null,i,r.createElement(E.Z,null))))}function W(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",x),onClick:t},r.createElement(g,{className:O}))}function z(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.createElement("span",{className:(0,u.Z)(j,I)},"\xd7"):r.createElement(v.Z,{className:j,height:24,width:24}))}var F=function(e){var t,n,a=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,d.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),b=(0,d.LU)(),g=b.navbar.hideOnScroll,v=b.hideableSidebar,E=(0,d.nT)().isClosed,T=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var a=(0,p.Z)();return(0,r.useEffect)((function(){a===p.D.desktop&&n(!1)}),[a]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,r.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,r.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=T.showResponsiveSidebar,O=T.closeResponsiveSidebar,j=T.toggleResponsiveSidebar;return r.createElement("div",{className:(0,u.Z)(N,(t={},t[_]=g,t[C]=s,t))},g&&r.createElement(y.Z,{tabIndex:-1,className:Z}),r.createElement("nav",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":x},n[w]=!E&&f,n)),"aria-label":(0,k.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},r.createElement(z,{responsiveSidebarOpened:x,onClick:j}),r.createElement("ul",{className:"menu__list"},r.createElement(A,{items:o,onItemClick:O,collapsible:i,activePath:a}))),v&&r.createElement(W,{onClick:c}))},U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).Z,theme:U};function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var V=/\r\n|\r|\n/,q=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},G=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=K({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=K({},n,{backgroundColor:null}),a};function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var Q=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),J(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?G(e.theme,e.language):void 0;return t.themeDict=n})),J(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=K({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?K({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),J(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),J(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=K({},X(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?K({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),J(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=Y(u,d.type),d.alias&&(u=Y(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(V),p=m.length;i.push({types:u,content:m[0]});for(var h=1;h<p;h++)q(i),c.push(i=[]),i.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return q(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var ee=n(7594),te=n.n(ee),ne={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},re=n(5350),ae=function(){var e=(0,d.LU)().prism,t=(0,re.Z)().isDarkTheme,n=e.theme||ne,r=e.darkTheme||n;return t?r:n},oe="codeBlockContainer_K1bP",le="codeBlockContent_hGly",ie="codeBlockTitle_eoMF",ce="codeBlock_23N8",se="codeBlockWithTitle_2JqI",ue="copyButton_Ue-o",de="codeBlockLines_39YC",me=/{([\d,-]+)}/,pe=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")};function he(e){var t=e.children,n=e.className,a=e.metastring,o=e.title,l=(0,d.LU)().prism,i=(0,r.useState)(!1),s=i[0],m=i[1],p=(0,r.useState)(!1),h=p[0],f=p[1];(0,r.useEffect)((function(){f(!0)}),[]);var b=(0,d.bc)(a)||o,y=(0,r.useRef)(null),g=[],v=ae(),E=Array.isArray(t)?t.join(""):t;if(a&&me.test(a)){var N=a.match(me)[1];g=te()(N).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);var C=E.replace(/\n$/,"");if(0===g.length&&void 0!==_){for(var Z,S="",T=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return pe(["js","jsBlock"]);case"jsx":case"tsx":return pe(["js","jsBlock","jsx"]);case"html":return pe(["js","jsBlock","html"]);case"python":case"py":return pe(["python"]);default:return pe()}}(_),w=E.replace(/\n$/,"").split("\n"),x=0;x<w.length;){var O=x+1,j=w[x].match(T);if(null!==j){switch(j.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=O+",";break;case"highlight-start":Z=O;break;case"highlight-end":S+=Z+"-"+(O-1)+","}w.splice(x,1)}else x+=1}g=te()(S),C=w.join("\n")}var I=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),i&&(l.removeAllRanges(),l.addRange(i)),o&&o.focus()}(C),m(!0),setTimeout((function(){return m(!1)}),2e3)};return r.createElement(Q,(0,c.Z)({},$,{key:String(h),theme:v,code:C,language:_}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,i=e.getTokenProps;return r.createElement("div",{className:oe},b&&r.createElement("div",{style:a,className:ie},b),r.createElement("div",{className:(0,u.Z)(le,_)},r.createElement("pre",{tabIndex:0,className:(0,u.Z)(n,ce,"thin-scrollbar",(t={},t[se]=b,t)),style:a},r.createElement("code",{className:de},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),r.createElement("span",(0,c.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,c.Z)({key:t},i({token:e,key:t})))})))})))),r.createElement("button",{ref:y,type:"button","aria-label":(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(ue,"clean-btn"),onClick:I},s?r.createElement(k.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.createElement(k.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var fe=n(6159),be={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(he,e):r.createElement("code",e)},a:function(e){return r.createElement(f.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(he,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,fe.Z)("h1"),h2:(0,fe.Z)("h2"),h3:(0,fe.Z)("h3"),h4:(0,fe.Z)("h4"),h5:(0,fe.Z)("h5"),h6:(0,fe.Z)("h6")},ye=n(4608),ge=n(5977),ve={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function Ee(e){var t,n,l,c,s,m=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=(0,o.Z)(),b=f.siteConfig,y=f.isClient,v=p.pluginId,E=p.version,N=function(e){var t,n=e.versionMetadata,r=e.currentDocRoute,a=n.permalinkToSidebar,o=n.docsSidebars,l=a[r.path]||a[(t=r.path,t.endsWith("/")?t:t+"/")]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(r.path)];return{sidebar:o[l],sidebarName:l}}({versionMetadata:p,currentDocRoute:m}),_=N.sidebarName,C=N.sidebar,Z=(0,r.useState)(!1),S=Z[0],T=Z[1],w=(0,r.useState)(!1),x=w[0],O=w[1],j=(0,r.useCallback)((function(){x&&O(!1),T(!S)}),[x]);return r.createElement(i.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:E,tag:(0,d.os)(v,E)}},r.createElement("div",{className:ve.docPage},C&&r.createElement("aside",{className:(0,u.Z)(ve.docSidebarContainer,(t={},t[ve.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve.docSidebarContainer)&&S&&O(!0)}},r.createElement(F,{key:_,sidebar:C,path:m.path,sidebarCollapsible:null==(n=null==(l=b.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:j,isHidden:x}),x&&r.createElement("div",{className:ve.collapsedDocSidebar,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:j,onClick:j},r.createElement(g,{className:ve.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,u.Z)(ve.docMainContainer,(c={},c[ve.docMainContainerEnhanced]=S||!C,c))},r.createElement("div",{className:(0,u.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,(s={},s[ve.docItemWrapperEnhanced]=S,s))},r.createElement(a.Zo,{components:be},h)))))}var ke=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,ge.LX)(a.pathname,e)}));return o?r.createElement(Ee,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):r.createElement(ye.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(9756),a=n(2122),o=n(7294),l=n(6010),i=n(4973),c=n(9306),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,d),m=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!m,n)),id:a}),u.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},4608:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(341),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(2122),a=n(9756),o=n(7294),l=n(6010),i=n(6742),c=n(2263),s=n(4996),u=n(8465),d="footerLogoLink_qW4Z",m="iconslist_2fpx",p="footerCopyright_2yvt",h=n(969),f=["to","href","label","prependBaseUrlToHref"];function b(e){var t=e.to,n=e.href,l=e.label,c=e.prependBaseUrlToHref,u=(0,a.Z)(e,f),d=(0,s.Z)(t),m=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(i.Z,(0,r.Z)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:c?m:n}:{to:d},u),l)}var y=function(e){var t=e.sources,n=e.alt;return o.createElement(u.Z,{className:"footer__logo",alt:n,sources:t})};var g=function(){var e=(0,c.Z)().siteConfig,t=(void 0===e?{}:e).themeConfig,n=(void 0===t?{}:t).footer,r=n||{},a=r.copyright,i=r.links,u=void 0===i?[]:i,f=r.logo,g=void 0===f?{}:f,v={light:(0,s.Z)(g.src),dark:(0,s.Z)(g.srcDark||g.src)};return n?o.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===n.style})},o.createElement("div",{className:"container "},o.createElement("div",{className:"col footer__col"},g&&(g.src||g.srcDark)&&o.createElement("div",{className:"margin-bottom--sm"},g.href?o.createElement("a",{href:g.href,target:"_blank",rel:"noopener noreferrer",className:d},o.createElement(y,{alt:g.alt,sources:v})):o.createElement(y,{alt:g.alt,sources:v}))),u&&u.length>0&&o.createElement("div",{className:"row footer__links"},o.createElement("div",{className:"col footer__col"},o.createElement("ul",{className:"row "+m},o.createElement("li",null,o.createElement("a",{href:"https://github.com/sumelms",className:d},o.createElement(h.uOf,{size:20}))),o.createElement("li",null,o.createElement("a",{href:"#",className:d},o.createElement(h.qOw,{size:20}))),o.createElement("li",null,o.createElement("a",{href:"https://twitter.com/sumelms",className:d},o.createElement(h.Ccr,{size:20}))),o.createElement("li",null,o.createElement("a",{href:"https://facebook.com/sumelms",className:d},o.createElement(h.Bsb,{size:20}))),o.createElement("li",null,o.createElement("a",{href:"#",className:d},o.createElement(h.JID,{size:20}))),o.createElement("li",null,o.createElement("a",{href:"https://youtube.com/educacaoadistancia",className:d},o.createElement(h.Dp0,{size:20}))))),u.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col "},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:t,className:"footer__item"},o.createElement(b,e))}))):null)}))),a&&o.createElement("div",{className:"text--right margin-top--xl"},o.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:a}}),o.createElement("a",{className:d,href:"https://www.freepik.com/free-photos-vectors/business"},"Vector created by stories - www.freepik.com")))):null}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);