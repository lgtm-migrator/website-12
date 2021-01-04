(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{134:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c}));var r=n(0),o=n.n(r),u=n(26);function i(t){var e,n=t.id,r=t.message;return null!==(e=u[null!=n?n:r])&&void 0!==e?e:r}function a(t){var e=t.message,n=i({message:e,id:t.id});return null!=n?n:e}function c(t){var e,n=t.children,r=null!==(e=i({message:n,id:t.id}))&&void 0!==e?e:n;return o.a.createElement(o.a.Fragment,null,r)}},135:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var u=n(0),i=n(1),a=n(136),c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,n){for(var r=!0;r;){var o=t,u=e,i=n;r=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,u);if(void 0!==a){if("value"in a)return a.value;var c=a.get;if(void 0===c)return;return c.call(i)}var s=Object.getPrototypeOf(o);if(null===s)return;t=s,e=u,n=i,r=!0,a=s=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t);var n=this.props,r=n.items,o=n.random;this.state={index:o?Math.floor(Math.random()*Math.floor(r.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map((function(t){return clearTimeout(t)}))}},{key:"_loop",value:function(t,e){var n=setTimeout(t,e);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(t,e){var n=this.state.output,r=this.props.typingInterval,o=this._type.bind(this,t,e),u=a(t);this.setState({output:u.slice(0,a(n).length+1).join("")}),n.length<u.length?this._loop(o,r):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),e())}},{key:"_erase",value:function(t){var e=this.state.output,n=this.props.deletingInterval,r=this._erase.bind(this,t),o=a(e);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:o.slice(0,o.length-1).join("")}),0!==o.length?this._loop(r,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),t())}},{key:"_overwrite",value:function(t,e){var n=this.state,r=n.output,o=n.substrLength,u=this.props.deletingInterval,i=this._overwrite.bind(this,t,e),c=a(t),s=a(r);this.setState({output:c.slice(0,o).concat(s.slice(o)),substrLength:o+1}),c.length!==o?this._loop(i,u):(this.setState({output:t,substrLength:0}),e())}},{key:"_animate",value:function(){var t=this,e=this.state.index,n=this.props,r=n.items,o=n.pause,u=n.emptyPause,i=n.eraseMode,a=n.random,c=this._type,s=this._erase,f=this._overwrite,l=this._animate.bind(this),p=void 0;p=a?Math.floor(Math.random()*Math.floor(r.length)):e===r.length-1?0:e+1;var h=function(){t.setState({index:p}),t._loop(l,u)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),c.bind(this)(r[e],(function(){"overwrite"===i?t._loop(f.bind(t,r[p],h),o):t._loop(s.bind(t,h),o)}))}},{key:"render",value:function(){var t=this.props,e=t.color,n=t.cursor,o=(t.deletingInterval,t.emptyPause,t.items,t.pause,t.eraseMode,t.typingInterval,t.random,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return u.createElement("span",r({style:{color:e}},o),this.state.output,n?u.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),e}(u.Component);c.propTypes={color:i.string,cursor:i.bool,deletingInterval:i.number,emptyPause:i.number,eraseMode:i.string,items:i.array,pause:i.number,typingInterval:i.number,random:i.bool,onTypingStart:i.func,onTypingEnd:i.func,onDeletingStart:i.func,onDeletingEnd:i.func},c.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=c,t.exports=e.default},136:function(t,e,n){(function(e){var n=9007199254740991,r="[object Arguments]",o="[object Map]",u="[object Promise]",i="[object Set]",a="[object WeakMap]",c="[object DataView]",s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l="\\u0300-\\u036f\\ufe20-\\ufe23",p="[\\ud800-\\udfff]",h="["+l+"\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",v="[^\\ud800-\\udfff]",y="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",b="(?:"+h+"|"+d+")"+"?",m="[\\ufe0e\\ufe0f]?",j=m+b+("(?:\\u200d(?:"+[v,y,g].join("|")+")"+m+b+")*"),O="(?:"+[v+h+"?",h,y,g,p].join("|")+")",_=RegExp(d+"(?="+d+")|"+O+j,"g"),w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),S="object"==typeof e&&e&&e.Object===Object&&e,P="object"==typeof self&&self&&self.Object===Object&&self,E=S||P||Function("return this")();function M(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}function k(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function x(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function I(t){return function(t){return w.test(t)}(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}var T,D,A,$=Function.prototype,F=Object.prototype,L=E["__core-js_shared__"],R=(T=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",C=$.toString,W=F.hasOwnProperty,z=F.toString,J=RegExp("^"+C.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),V=E.Symbol,B=V?V.iterator:void 0,G=F.propertyIsEnumerable,N=(D=Object.keys,A=Object,function(t){return D(A(t))}),U=ut(E,"DataView"),q=ut(E,"Map"),H=ut(E,"Promise"),K=ut(E,"Set"),Q=ut(E,"WeakMap"),X=ct(U),Y=ct(q),Z=ct(H),tt=ct(K),et=ct(Q);function nt(t,e){var n=st(t)||function(t){return function(t){return ht(t)&&ft(t)}(t)&&W.call(t,"callee")&&(!G.call(t,"callee")||z.call(t)==r)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],o=n.length,u=!!o;for(var i in t)!e&&!W.call(t,i)||u&&("length"==i||at(i,o))||n.push(i);return n}function rt(t){return!(!pt(t)||function(t){return!!R&&R in t}(t))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?J:s).test(ct(t))}function ot(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||F,e!==r)return N(t);var e,n,r,o=[];for(var u in Object(t))W.call(t,u)&&"constructor"!=u&&o.push(u);return o}function ut(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(n)?n:void 0}var it=function(t){return z.call(t)};function at(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function ct(t){if(null!=t){try{return C.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(U&&it(new U(new ArrayBuffer(1)))!=c||q&&it(new q)!=o||H&&it(H.resolve())!=u||K&&it(new K)!=i||Q&&it(new Q)!=a)&&(it=function(t){var e=z.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?ct(n):void 0;if(r)switch(r){case X:return c;case Y:return o;case Z:return u;case tt:return i;case et:return a}return e});var st=Array.isArray;function ft(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!lt(t)}function lt(t){var e=pt(t)?z.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ht(t){return!!t&&"object"==typeof t}function dt(t){return t?M(t,function(t){return ft(t)?nt(t):ot(t)}(t)):[]}t.exports=function(t){if(!t)return[];if(ft(t))return function(t){return"string"==typeof t||!st(t)&&ht(t)&&"[object String]"==z.call(t)}(t)?I(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(B&&t[B])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[B]());var e=it(t);return(e==o?k:e==i?x:dt)(t)}}).call(this,n(25))}}]);