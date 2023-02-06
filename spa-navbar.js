/*! For license information please see spa-navbar.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var r={},n={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){n.default=e.default}],execute:function(){e((()=>{var e={418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in a=Object(arguments[s]))r.call(a,l)&&(c[l]=a[l]);if(t){i=t(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(c[i[u]]=a[i[u]])}}return c}},251:(e,t,r)=>{"use strict";r(418);var n=r(954),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},893:(e,t,r)=>{"use strict";e.exports=r(251)},722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i},Number.isInteger},954:e=>{"use strict";e.exports=r},493:e=>{"use strict";e.exports=n}},o={};function a(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.y=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>ce,mount:()=>se,unmount:()=>le});var e=a(954),t=a(493);function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(s(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(s(e)));return e}}var u=null;try{u=require("react").createContext()}catch(r){}var p,d,f={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function m(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function h(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=g(e,t,(function(){r(this)})),a=l(e,t)(),i=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](n);return a.render(r),a}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function y(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function v(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=g(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var a=l(e,t)();e.ReactDOM.render(n,a)}}))}function g(e,t,r){var o=e.React.createElement(e.rootComponent,t),a=u?e.React.createElement(u.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,n(n({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}(d=p||(p={})).Pop="POP",d.Push="PUSH",d.Replace="REPLACE";const w="popstate";function R(e,t){if(!1===e||null==e)throw new Error(t)}function E(e,t){return{usr:e.state,key:e.key,idx:t}}function O(e,t,r,n){return void 0===r&&(r=null),b({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?C(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function S(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function C(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var j;function P(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function x(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function _(e,t,r,n){let o;void 0===n&&(n=!1),"string"==typeof e?o=C(e):(o=b({},e),R(!o.pathname||!o.pathname.includes("?"),P("?","pathname","search",o)),R(!o.pathname||!o.pathname.includes("#"),P("#","pathname","hash",o)),R(!o.search||!o.search.includes("#"),P("#","search","hash",o)));let a,i=""===e||""===o.pathname,c=i?"/":o.pathname;if(n||null==c)a=r;else{let e=t.length-1;if(c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"==typeof e?C(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:k(n),hash:B(o)}}(o,a),l=c&&"/"!==c&&c.endsWith("/"),u=(i||"."===c)&&r.endsWith("/");return s.pathname.endsWith("/")||!l&&!u||(s.pathname+="/"),s}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(j||(j={}));const D=e=>e.join("/").replace(/\/\/+/g,"/"),k=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class U extends Error{}const L=["post","put","patch","delete"],N=(new Set(L),["get",...L]);new Set(N),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred"),"function"==typeof Object.is&&Object.is;const{useState:M,useEffect:A,useLayoutEffect:T,useDebugValue:F}=e;"undefined"==typeof window||void 0===window.document||window.document.createElement,"useSyncExternalStore"in e&&e.useSyncExternalStore;const W=e.createContext(null),I=e.createContext(null),H=e.createContext({outlet:null,matches:[]});function G(){return null!=e.useContext(I)}function J(){return G()||R(!1),e.useContext(I).location}function q(t,r){let{relative:n}=void 0===r?{}:r,{matches:o}=e.useContext(H),{pathname:a}=J(),i=JSON.stringify(x(o).map((e=>e.pathnameBase)));return e.useMemo((()=>_(t,JSON.parse(i),a,"path"===n)),[t,i,a,n])}class K extends e.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?React.createElement(H.Provider,{value:this.props.routeContext},React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var $,V,z;function Y(t){let{basename:r="/",children:n=null,location:o,navigationType:a=p.Pop,navigator:i,static:c=!1}=t;G()&&R(!1);let s=r.replace(/^\/*/,"/"),l=e.useMemo((()=>({basename:s,navigator:i,static:c})),[s,i,c]);"string"==typeof o&&(o=C(o));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:h="default"}=o,y=e.useMemo((()=>{let e=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}(u,s);return null==e?null:{pathname:e,search:d,hash:f,state:m,key:h}}),[s,u,d,f,m,h]);return null==y?null:e.createElement(W.Provider,{value:l},e.createElement(I.Provider,{children:n,value:{location:y,navigationType:a}}))}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}($||($={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(V||(V={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(z||(z={})),new Promise((()=>{}));class Q extends e.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,o=z.pending;if(r instanceof Promise)if(this.state.error){z.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?void 0!==n._error?z.error:void 0!==n._data?z.success:z.pending:(z.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else z.success,Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(o===z.error&&n._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===z.error&&!t)throw n._error;if(o===z.error)return React.createElement(AwaitContext.Provider,{value:n,children:t});if(o===z.success)return React.createElement(AwaitContext.Provider,{value:n,children:e});throw n}}function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}const Z=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ee(t){let{basename:r,children:n,window:o}=t,a=e.useRef();var i;null==a.current&&(a.current=(void 0===(i={window:o,v5Compat:!0})&&(i={}),function(e,t,r,n){void 0===n&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,i=o.history,c=p.Pop,s=null,l=u();function u(){return(i.state||{idx:null}).idx}function d(){c=p.Pop;let e=u(),t=null==e?null:e-l;l=e,s&&s({action:c,location:m.location,delta:t})}function f(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,r="string"==typeof e?e:S(e);return R(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==l&&(l=0,i.replaceState(b({},i.state,{idx:l}),""));let m={get action(){return c},get location(){return function(e,t){let{pathname:r,search:n,hash:o}=e.location;return O("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}(o,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(w,d),s=e,()=>{o.removeEventListener(w,d),s=null}},createHref:e=>function(e,t){return"string"==typeof t?t:S(t)}(0,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){c=p.Push;let r=O(m.location,e,t);l=u()+1;let n=E(r,l),d=m.createHref(r);try{i.pushState(n,"",d)}catch(e){o.location.assign(d)}a&&s&&s({action:c,location:m.location,delta:1})},replace:function(e,t){c=p.Replace;let r=O(m.location,e,t);l=u();let n=E(r,l),o=m.createHref(r);i.replaceState(n,"",o),a&&s&&s({action:c,location:m.location,delta:0})},go:e=>i.go(e)};return m}(0,0,0,i)));let c=a.current,[s,l]=e.useState({action:c.action,location:c.location});return e.useLayoutEffect((()=>c.listen(l)),[c]),e.createElement(Y,{basename:r,children:n,location:s.location,navigationType:s.action,navigator:c})}const te="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,re=e.forwardRef((function(t,r){let{onClick:n,relative:o,reloadDocument:a,replace:i,state:c,target:s,to:l,preventScrollReset:u}=t,p=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,Z),d="string"==typeof l?l:S(l),f=/^[a-z+]+:\/\//i.test(d)||d.startsWith("//"),m=d,h=!1;if(te&&f){let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d);t.origin===e.origin?m=t.pathname+t.search+t.hash:h=!0}let y=function(t,r){let{relative:n}=void 0===r?{}:r;G()||R(!1);let{basename:o,navigator:a}=e.useContext(W),{hash:i,pathname:c,search:s}=q(t,{relative:n}),l=c;return"/"!==o&&(l="/"===c?o:D([o,c])),a.createHref({pathname:l,search:s,hash:i})}(m,{relative:o}),v=function(t,r){let{target:n,replace:o,state:a,preventScrollReset:i,relative:c}=void 0===r?{}:r,s=function(){G()||R(!1);let{basename:t,navigator:r}=e.useContext(W),{matches:n}=e.useContext(H),{pathname:o}=J(),a=JSON.stringify(x(n).map((e=>e.pathnameBase))),i=e.useRef(!1);return e.useEffect((()=>{i.current=!0})),e.useCallback((function(e,n){if(void 0===n&&(n={}),!i.current)return;if("number"==typeof e)return void r.go(e);let c=_(e,JSON.parse(a),o,"path"===n.relative);"/"!==t&&(c.pathname="/"===c.pathname?t:D([t,c.pathname])),(n.replace?r.replace:r.push)(c,n.state,n)}),[t,r,a,o])}(),l=J(),u=q(t,{relative:c});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,n)){e.preventDefault();let r=void 0!==o?o:S(l)===S(u);s(t,{replace:r,state:a,preventScrollReset:i,relative:c})}}),[l,s,u,o,a,n,t,i,c])}(m,{replace:i,state:c,target:s,preventScrollReset:u,relative:o});return e.createElement("a",X({},p,{href:f?d:y,onClick:h||a?n:function(e){n&&n(e),e.defaultPrevented||v(e)},ref:r,target:s}))}));var ne,oe;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ne||(ne={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(oe||(oe={}));var ae=a(893),ie=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=n(n({},f),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&t.React.createContext&&(u=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var r={bootstrap:m.bind(null,t),mount:h.bind(null,t),unmount:y.bind(null,t)};return t.parcelCanUpdate&&(r.update=v.bind(null,t)),r}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return document.title="SPA-Navbar",(0,ae.jsx)(ee,{children:(0,ae.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,ae.jsx)(re,{to:"/",children:"SPA HomePage"}),(0,ae.jsx)(re,{to:"/spa1",children:"SPA-Application1 MF"}),(0,ae.jsx)(re,{to:"/spa2",children:"SPA-Application2 MF"})]})})},errorBoundary:function(e,t,r){return(0,ae.jsx)(ae.Fragment,{children:"Error in Navbar"})}}),ce=ie.bootstrap,se=ie.mount,le=ie.unmount})(),i})())}}}));