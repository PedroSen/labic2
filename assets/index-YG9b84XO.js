var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function ee(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+k(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(O,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=ee(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+k(s,l);c+=te(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+k(s,l++),c+=te(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ne(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},ae={transition:null},oe={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:ae,ReactCurrentOwner:C};function se(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ne,forEach:function(e,t,n){ne(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ne(e,function(){t++}),t},toArray:function(e){return ne(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,e.act=se,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=ae.transition;ae.transition={};try{e()}finally{ae.transition=t}},e.unstable_act=se,e.useCallback=function(e,t){return ie.current.useCallback(e,t)},e.useContext=function(e){return ie.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return ie.current.useDeferredValue(e)},e.useEffect=function(e,t){return ie.current.useEffect(e,t)},e.useId=function(){return ie.current.useId()},e.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return ie.current.useMemo(e,t)},e.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)},e.useRef=function(e){return ie.current.useRef(e)},e.useState=function(e){return ie.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return ie.current.useTransition()},e.version=`18.3.1`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m){if(n(c)!==null)m=!0,ne(x);else{var t=n(l);t!==null&&re(b,t.startTime-e)}}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&re(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,ee=-1;function E(){return!(e.unstable_now()-ee<T)}function D(){if(C!==null){var t=e.unstable_now();ee=t;var n=!0;try{n=C(!0,t)}finally{n?O():(S=!1,C=null)}}else S=!1}var O;if(typeof v==`function`)O=function(){v(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,te=k.port2;k.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){g(D,0)};function ne(e){C=e,S||(S=!0,O())}function re(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ne(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,re(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ne(x))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p(),n=h();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d={},f={};function m(e){return l.call(f,e)?!0:l.call(d,e)?!1:u.test(e)?f[e]=!0:(d[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?m(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type!==3&&``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),ee=Symbol.for(`react.fragment`),E=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),O=Symbol.for(`react.provider`),k=Symbol.for(`react.context`),te=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),ae=Symbol.for(`react.lazy`),oe=Symbol.for(`react.offscreen`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Object.assign,le;function j(e){if(le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);le=t&&t[1]||``}return`
`+le+e}var ue=!1;function de(e,t){if(!e||ue)return``;ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?j(e):``}function fe(e){switch(e.tag){case 5:return j(e.type);case 16:return j(`Lazy`);case 13:return j(`Suspense`);case 19:return j(`SuspenseList`);case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return``}}function pe(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ee:return`Fragment`;case T:return`Portal`;case D:return`Profiler`;case E:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case k:return(e.displayName||`Context`)+`.Consumer`;case O:return(e._context.displayName||`Context`)+`.Provider`;case te:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case ae:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function me(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return pe(t);case 8:return t===E?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function he(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ge(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function _e(e){var t=ge(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ve(e){e._valueTracker||=_e(e)}function ye(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ge(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function be(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function xe(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Se(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=he(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Ce(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function we(e,t){Ce(e,t);var n=he(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Ee(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Ee(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Ee(e,t,n){(t!==`number`||be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var De=Array.isArray;function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+he(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ke(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return A({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(De(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:he(n)}}function je(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Me(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Ne(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Pe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Ne(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Fe,Ie=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Fe||=document.createElement(`div`),Fe.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Le(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Re).forEach(function(e){ze.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Re[t]=Re[e]})});function Be(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Re.hasOwnProperty(e)&&Re[e]?(``+t).trim():t+`px`}function Ve(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Be(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var He=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(e,t){if(t){if(He[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function We(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Ge=null;function Ke(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qe=null,Je=null,Ye=null;function Xe(e){if(e=Ki(e)){if(typeof qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ji(t),qe(e.stateNode,e.type,t))}}function Ze(e){Je?Ye?Ye.push(e):Ye=[e]:Je=e}function Qe(){if(Je){var e=Je,t=Ye;if(Ye=Je=null,Xe(e),t)for(e=0;e<t.length;e++)Xe(t[e])}}function $e(e,t){return e(t)}function M(){}var et=!1;function tt(e,t,n){if(et)return e(t,n);et=!0;try{return $e(e,t,n)}finally{et=!1,(Je!==null||Ye!==null)&&(M(),Qe())}}function nt(e,t){var n=e.stateNode;if(n===null)return null;var i=Ji(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var rt=!1;if(c)try{var it={};Object.defineProperty(it,"passive",{get:function(){rt=!0}}),window.addEventListener(`test`,it,it),window.removeEventListener(`test`,it,it)}catch{rt=!1}function at(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ot=!1,st=null,ct=!1,lt=null,ut={onError:function(e){ot=!0,st=e}};function dt(e,t,n,r,i,a,o,s,c){ot=!1,st=null,at.apply(ut,arguments)}function ft(e,t,n,i,a,o,s,c,l){if(dt.apply(this,arguments),ot){if(ot){var u=st;ot=!1,st=null}else throw Error(r(198));ct||(ct=!0,lt=u)}}function pt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ht(e){if(pt(e)!==e)throw Error(r(188))}function gt(e){var t=e.alternate;if(!t){if(t=pt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ht(a),e;if(o===i)return ht(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function _t(e){return e=gt(e),e===null?null:vt(e)}function vt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vt(e);if(t!==null)return t;e=e.sibling}return null}var yt=n.unstable_scheduleCallback,bt=n.unstable_cancelCallback,xt=n.unstable_shouldYield,St=n.unstable_requestPaint,Ct=n.unstable_now,wt=n.unstable_getCurrentPriorityLevel,Tt=n.unstable_ImmediatePriority,Et=n.unstable_UserBlockingPriority,Dt=n.unstable_NormalPriority,Ot=n.unstable_LowPriority,kt=n.unstable_IdlePriority,At=null,jt=null;function Mt(e){if(jt&&typeof jt.onCommitFiberRoot==`function`)try{jt.onCommitFiberRoot(At,e,void 0,(e.current.flags&128)==128)}catch{}}var Nt=Math.clz32?Math.clz32:It,Pt=Math.log,Ft=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Pt(e)/Ft|0)|0}var Lt=64,Rt=4194304;function zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=zt(a))):r=zt(s)}else o=n&~i,o===0?a!==0&&(r=zt(a)):r=zt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Vt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Nt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Vt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ut(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Wt(){var e=Lt;return Lt<<=1,!(Lt&4194240)&&(Lt=64),e}function Gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function qt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Jt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var N=0;function Yt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xt,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,an=null,on=null,sn=new Map,cn=new Map,ln=[],un=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function dn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:an=null;break;case`mouseover`:case`mouseout`:on=null;break;case`pointerover`:case`pointerout`:sn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:cn.delete(t.pointerId)}}function fn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pn(e,t,n,r,i){switch(t){case`focusin`:return rn=fn(rn,e,t,n,r,i),!0;case`dragenter`:return an=fn(an,e,t,n,r,i),!0;case`mouseover`:return on=fn(on,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return sn.set(a,fn(sn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,cn.set(a,fn(cn.get(a)||null,e,t,n,r,i)),!0}return!1}function mn(e){var t=Gi(e.target);if(t!==null){var n=pt(t);if(n!==null){if(t=n.tag,t===13){if(t=mt(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ge=r,n.target.dispatchEvent(r),Ge=null}else return t=Ki(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function gn(e,t,n){hn(e)&&n.delete(t)}function _n(){tn=!1,rn!==null&&hn(rn)&&(rn=null),an!==null&&hn(an)&&(an=null),on!==null&&hn(on)&&(on=null),sn.forEach(gn),cn.forEach(gn)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_n)))}function yn(e){function t(t){return vn(t,e)}if(0<nn.length){vn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&vn(rn,e),an!==null&&vn(an,e),on!==null&&vn(on,e),sn.forEach(t),cn.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)mn(n),n.blockedOn===null&&ln.shift()}var bn=C.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=1,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function Cn(e,t,n,r){var i=N,a=bn.transition;bn.transition=null;try{N=4,wn(e,t,n,r)}finally{N=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)_i(e,t,r,Tn,n),dn(e,r);else if(pn(i,e,t,n,r))r.stopPropagation();else if(dn(e,r),t&4&&-1<un.indexOf(e)){for(;i!==null;){var a=Ki(i);if(a!==null&&Xt(a),a=En(e,t,n,r),a===null&&_i(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else _i(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Ke(r),e=Gi(e),e!==null){if(t=pt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(wt()){case Tt:return 1;case Et:return 4;case Dt:case Ot:return 16;case kt:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=A({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=A({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(A({},Un,{dataTransfer:0})),Kn=Fn(A({},Rn,{relatedTarget:0})),qn=Fn(A({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(A({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(A({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},P={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P[e])?!!t[e]:!1}function $n(){return Qn}var er=Fn(A({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),tr=Fn(A({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nr=Fn(A({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),rr=Fn(A({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ir=Fn(A({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ar=[9,13,27,32],or=c&&`CompositionEvent`in window,sr=null;c&&`documentMode`in document&&(sr=document.documentMode);var cr=c&&`TextEvent`in window&&!sr,lr=c&&(!or||sr&&8<sr&&11>=sr),ur=` `,dr=!1;function fr(e,t){switch(e){case`keyup`:return ar.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function pr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var F=!1;function mr(e,t){switch(e){case`compositionend`:return pr(t);case`keypress`:return t.which===32?(dr=!0,ur):null;case`textInput`:return e=t.data,e===ur&&dr?null:e;default:return null}}function hr(e,t){if(F)return e===`compositionend`||!or&&fr(e,t)?(e=jn(),An=kn=On=null,F=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return lr&&t.locale!==`ko`?null:t.data;default:return null}}var gr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!gr[e.type]:t===`textarea`}function vr(e,t,n,r){Ze(r),t=yi(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function xr(e){fi(e,0)}function Sr(e){if(ye(qi(e)))return e}function Cr(e,t){if(e===`change`)return t}var wr=!1;if(c){var Tr;if(c){var Er=`oninput`in document;if(!Er){var Dr=document.createElement(`div`);Dr.setAttribute(`oninput`,`return;`),Er=typeof Dr.oninput==`function`}Tr=Er}else Tr=!1;wr=Tr&&(!document.documentMode||9<document.documentMode)}function Or(){yr&&(yr.detachEvent(`onpropertychange`,kr),br=yr=null)}function kr(e){if(e.propertyName===`value`&&Sr(br)){var t=[];vr(t,br,e,Ke(e)),tt(xr,t)}}function Ar(e,t,n){e===`focusin`?(Or(),yr=t,br=n,yr.attachEvent(`onpropertychange`,kr)):e===`focusout`&&Or()}function jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Sr(br)}function Mr(e,t){if(e===`click`)return Sr(t)}function Nr(e,t){if(e===`input`||e===`change`)return Sr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rr(e,t){var n=Lr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Lr(n)}}function zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Br(){for(var e=window,t=be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=be(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Hr(e){var t=Br(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zr(n.ownerDocument.documentElement,n)){if(r!==null&&Vr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Rr(n,a);var o=Rr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ur=c&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==be(r)||(r=Wr,`selectionStart`in r&&Vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Ir(Kr,r)||(Kr=r,r=yi(Gr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};c&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),ri=$r(`transitionend`),ii=new Map,ai=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function oi(e,t){ii.set(e,t),o(t,[e])}for(var si=0;si<ai.length;si++){var ci=ai[si];oi(ci.toLowerCase(),`on`+(ci[0].toUpperCase()+ci.slice(1)))}oi(ei,`onAnimationEnd`),oi(ti,`onAnimationIteration`),oi(ni,`onAnimationStart`),oi(`dblclick`,`onDoubleClick`),oi(`focusin`,`onFocus`),oi(`focusout`,`onBlur`),oi(ri,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var li=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ui=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(li));function di(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ft(r,t,void 0,e),e.currentTarget=null}function fi(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;di(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;di(i,s,l),a=c}}}if(ct)throw e=lt,ct=!1,lt=null,e}function I(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+`__bubble`;n.has(r)||(gi(t,e,2,!1),n.add(r))}function pi(e,t,n){var r=0;t&&(r|=4),gi(n,e,r,t)}var mi=`_reactListening`+Math.random().toString(36).slice(2);function hi(e){if(!e[mi]){e[mi]=!0,i.forEach(function(t){t!==`selectionchange`&&(ui.has(t)||pi(t,!1,e),pi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,pi(`selectionchange`,!1,t))}}function gi(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!rt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function _i(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}tt(function(){var r=a,i=Ke(n),o=[];a:{var s=ii.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=er;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=nr;break;case ei:case ti:case ni:c=qn;break;case ri:c=rr;break;case`scroll`:c=zn;break;case`wheel`:c=ir;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=tr}var u=!!(t&4),d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=nt(p,f),h!=null&&u.push(vi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ge&&(l=n.relatedTarget||n.fromElement)&&(Gi(l)||l[Vi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gi(l):null,l!==null&&(d=pt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=tr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:qi(c),m=l==null?s:qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Gi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=bi(m))p++;for(m=0,h=f;h;h=bi(h))m++;for(;0<p-m;)u=bi(u),p--;for(;0<m-p;)f=bi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=bi(u),f=bi(f)}u=null}else u=null;c!==null&&xi(o,s,c,u,!1),l!==null&&d!==null&&xi(o,d,l,u,!0)}}a:{if(s=r?qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Cr;else if(_r(s)){if(wr)g=Nr;else{g=jr;var _=Ar}}else(c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Mr);if(g&&=g(e,r)){vr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Ee(s,`number`,s.value)}switch(_=r?qi(r):window,e){case`focusin`:(_r(_)||_.contentEditable===`true`)&&(Wr=_,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(o,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(o,n,i)}var v;if(or)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else F?fr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(lr&&n.locale!==`ko`&&(F||y!==`onCompositionStart`?y===`onCompositionEnd`&&F&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,F=!0)),_=yi(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=pr(n),v!==null&&(y.data=v)))),(v=cr?mr(e,n):hr(e,n))&&(r=yi(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}fi(o,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=nt(e,n),a!=null&&r.unshift(vi(e,a,i)),a=nt(e,t),a!=null&&r.push(vi(e,a,i))),e=e.return}return r}function bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=nt(n,a),c!=null&&o.unshift(vi(n,c,s))):i||(c=nt(n,a),c!=null&&o.push(vi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Si=/\r\n?/g,Ci=/\u0000|\uFFFD/g;function wi(e){return(typeof e==`string`?e:``+e).replace(Si,`
`).replace(Ci,``)}function Ti(e,t,n){if(t=wi(t),wi(e)!==t&&n)throw Error(r(425))}function Ei(){}var Di=null,Oi=null;function ki(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout==`function`?setTimeout:void 0,ji=typeof clearTimeout==`function`?clearTimeout:void 0,Mi=typeof Promise==`function`?Promise:void 0,Ni=typeof queueMicrotask==`function`?queueMicrotask:Mi===void 0?Ai:function(e){return Mi.resolve(null).then(e).catch(Pi)};function Pi(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++}n=i}while(n);yn(t)}function Ii(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Li(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Ri=Math.random().toString(36).slice(2),zi=`__reactFiber$`+Ri,Bi=`__reactProps$`+Ri,Vi=`__reactContainer$`+Ri,Hi=`__reactEvents$`+Ri,Ui=`__reactListeners$`+Ri,Wi=`__reactHandles$`+Ri;function Gi(e){var t=e[zi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vi]||n[zi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Li(e);e!==null;){if(n=e[zi])return n;e=Li(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[zi]||e[Vi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ji(e){return e[Bi]||null}var Yi=[],Xi=-1;function Zi(e){return{current:e}}function L(e){0>Xi||(e.current=Yi[Xi],Yi[Xi]=null,Xi--)}function R(e,t){Xi++,Yi[Xi]=e.current,e.current=t}var Qi={},$i=Zi(Qi),ea=Zi(!1),ta=Qi;function na(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ra(e){return e=e.childContextTypes,e!=null}function ia(){L(ea),L($i)}function aa(e,t,n){if($i.current!==Qi)throw Error(r(168));R($i,t),R(ea,n)}function oa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,me(e)||`Unknown`,a));return A({},n,i)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,ta=$i.current,R($i,e),R(ea,ea.current),!0}function ca(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=oa(e,t,ta),i.__reactInternalMemoizedMergedChildContext=e,L(ea),L($i),R($i,e)):L(ea),R(ea,n)}var la=null,ua=!1,da=!1;function fa(e){la===null?la=[e]:la.push(e)}function pa(e){ua=!0,fa(e)}function ma(){if(!da&&la!==null){da=!0;var e=0,t=N;try{var n=la;for(N=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}la=null,ua=!1}catch(t){throw la!==null&&(la=la.slice(e+1)),yt(Tt,ma),t}finally{N=t,da=!1}}return null}var ha=[],ga=0,_a=null,va=0,ya=[],ba=0,xa=null,Sa=1,Ca=``;function wa(e,t){ha[ga++]=va,ha[ga++]=_a,_a=e,va=t}function Ta(e,t,n){ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,xa=e;var r=Sa;e=Ca;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var a=32-Nt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sa=1<<32-Nt(t)+i|n<<i|r,Ca=a+e}else Sa=1<<a|n<<i|r,Ca=e}function Ea(e){e.return!==null&&(wa(e,1),Ta(e,1,0))}function Da(e){for(;e===_a;)_a=ha[--ga],ha[ga]=null,va=ha[--ga],ha[ga]=null;for(;e===xa;)xa=ya[--ba],ya[ba]=null,Ca=ya[--ba],ya[ba]=null,Sa=ya[--ba],ya[ba]=null}var Oa=null,ka=null,z=!1,Aa=null;function ja(e,t){var n=Zl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null&&(e.stateNode=t,Oa=e,ka=Ii(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t!==null&&(e.stateNode=t,Oa=e,ka=null,!0);case 13:return t=t.nodeType===8?t:null,t!==null&&(n=xa===null?null:{id:Sa,overflow:Ca},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oa=e,ka=null,!0);default:return!1}}function Na(e){return!!(e.mode&1)&&!(e.flags&128)}function Pa(e){if(z){var t=ka;if(t){var n=t;if(!Ma(e,t)){if(Na(e))throw Error(r(418));t=Ii(n.nextSibling);var i=Oa;t&&Ma(e,t)?ja(i,n):(e.flags=e.flags&-4097|2,z=!1,Oa=e)}}else{if(Na(e))throw Error(r(418));e.flags=e.flags&-4097|2,z=!1,Oa=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oa=e}function Ia(e){if(e!==Oa)return!1;if(!z)return Fa(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ki(e.type,e.memoizedProps)),t&&=ka){if(Na(e))throw La(),Error(r(418));for(;t;)ja(e,t),t=Ii(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ka=Ii(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ka=null}}else ka=Oa?Ii(e.stateNode.nextSibling):null;return!0}function La(){for(var e=ka;e;)e=Ii(e.nextSibling)}function Ra(){ka=Oa=null,z=!1}function za(e){Aa===null?Aa=[e]:Aa.push(e)}var Ba=C.ReactCurrentBatchConfig;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ua(e){var t=e._init;return t(e._payload)}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=eu(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=iu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ee?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ae&&Ua(i)===t.type)?(r=a(t,n.props),r.ref=Va(e,t,n),r.return=e,r):(r=tu(n.type,n.key,n.props,null,e.mode,r),r.ref=Va(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=au(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=nu(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=iu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=tu(t.type,t.key,t.props,null,e.mode,n),n.ref=Va(e,null,t),n.return=e,n;case T:return t=au(t,e.mode,n),t.return=e,t;case ae:var r=t._init;return f(e,r(t._payload),n)}if(De(t)||ce(t))return t=nu(t,e.mode,n,null),t.return=e,t;Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case ae:return i=n._init,p(e,t,i(n._payload),r)}if(De(n)||ce(n))return i===null?d(e,t,n,r,null):null;Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ae:var a=r._init;return m(e,t,n,a(r._payload),i)}if(De(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);Ha(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),z&&wa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&wa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),z&&wa(r,h),l}function g(a,s,c,l){var u=ce(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&wa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&wa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&wa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===ee&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===ee){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===ae&&Ua(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Va(e,l,i),r.return=e,e=r;break a}n(e,l);break}t(e,l),l=l.sibling}i.type===ee?(r=nu(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=tu(i.type,i.key,i.props,null,e.mode,o),o.ref=Va(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}n(e,r);break}t(e,r),r=r.sibling}r=au(i,e.mode,o),r.return=e,e=r}return s(e);case ae:return l=i._init,_(e,r,l(i._payload),o)}if(De(i))return h(e,r,i,o);if(ce(i))return g(e,r,i,o);Ha(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=iu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ga=Wa(!0),Ka=Wa(!1),qa=Zi(null),Ja=null,Ya=null,Xa=null;function Za(){Xa=Ya=Ja=null}function Qa(e){var t=qa.current;L(qa),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function eo(e,t){Ja=e,Xa=Ya=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Vs=!0),e.firstContext=null)}function to(e){var t=e._currentValue;if(Xa!==e){if(e={context:e,memoizedValue:t,next:null},Ya===null){if(Ja===null)throw Error(r(308));Ya=e,Ja.dependencies={lanes:0,firstContext:e}}else Ya=Ya.next=e}return t}var no=null;function ro(e){no===null?no=[e]:no.push(e)}function io(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,ao(e,r)}function ao(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var oo=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ao(e,n)}return i=r.interleaved,i===null?(t.next=t,ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,ao(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}function po(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;oo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=A({},d,f);break a;case 2:oo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);el|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var go={},_o=Zi(go),vo=Zi(go),B=Zi(go);function yo(e){if(e===go)throw Error(r(174));return e}function bo(e,t){switch(R(B,t),R(vo,e),R(_o,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pe(t,e)}L(_o),R(_o,t)}function xo(){L(_o),L(vo),L(B)}function So(e){yo(B.current);var t=yo(_o.current),n=Pe(t,e.type);t!==n&&(R(vo,e),R(_o,n))}function Co(e){vo.current===e&&(L(_o),L(vo))}var wo=Zi(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=[];function Do(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var Oo=C.ReactCurrentDispatcher,ko=C.ReactCurrentBatchConfig,Ao=0,V=null,jo=null,Mo=null,No=!1,Po=!1,Fo=0,Io=0;function Lo(){throw Error(r(321))}function Ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function zo(e,t,n,i,a,o){if(Ao=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?xs:Ss,e=n(i,a),Po){o=0;do{if(Po=!1,Fo=0,25<=o)throw Error(r(301));o+=1,Mo=jo=null,t.updateQueue=null,Oo.current=Cs,e=n(i,a)}while(Po)}if(Oo.current=bs,t=jo!==null&&jo.next!==null,Ao=0,Mo=jo=V=null,No=!1,t)throw Error(r(300));return e}function Bo(){var e=Fo!==0;return Fo=0,e}function Vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mo===null?V.memoizedState=Mo=e:Mo=Mo.next=e,Mo}function Ho(){if(jo===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=jo.next;var t=Mo===null?V.memoizedState:Mo.next;if(t!==null)Mo=t,jo=e;else{if(e===null)throw Error(r(310));jo=e,e={memoizedState:jo.memoizedState,baseState:jo.baseState,baseQueue:jo.baseQueue,queue:jo.queue,next:null},Mo===null?V.memoizedState=Mo=e:Mo=Mo.next=e}return Mo}function Uo(e,t){return typeof t==`function`?t(e):t}function Wo(e){var t=Ho(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=jo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Ao&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,V.lanes|=d,el|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Fr(i,t.memoizedState)||(Vs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,V.lanes|=o,el|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Ho(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(Vs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Ko(){}function qo(e,t){var n=V,i=Ho(),a=t(),o=!Fr(i.memoizedState,a);if(o&&(i.memoizedState=a,Vs=!0),i=i.queue,as(Xo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Mo!==null&&Mo.memoizedState.tag&1){if(n.flags|=2048,es(9,Yo.bind(null,n,i,a,t),void 0,null),Jc===null)throw Error(r(349));Ao&30||Jo(n,t,a)}return a}function Jo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yo(e,t,n,r){t.value=n,t.getSnapshot=r,Zo(t)&&Qo(e)}function Xo(e,t,n){return n(function(){Zo(t)&&Qo(e)})}function Zo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function Qo(e){var t=ao(e,1);t!==null&&bl(t,e,1,-1)}function $o(e){var t=Vo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=gs.bind(null,V,e),[t.memoizedState,e]}function es(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ts(){return Ho().memoizedState}function ns(e,t,n,r){var i=Vo();V.flags|=e,i.memoizedState=es(1|t,n,void 0,r===void 0?null:r)}function rs(e,t,n,r){var i=Ho();r=r===void 0?null:r;var a=void 0;if(jo!==null){var o=jo.memoizedState;if(a=o.destroy,r!==null&&Ro(r,o.deps)){i.memoizedState=es(t,n,a,r);return}}V.flags|=e,i.memoizedState=es(1|t,n,a,r)}function is(e,t){return ns(8390656,8,e,t)}function as(e,t){return rs(2048,8,e,t)}function os(e,t){return rs(4,2,e,t)}function ss(e,t){return rs(4,4,e,t)}function cs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,n){return n=n==null?null:n.concat([e]),rs(4,4,cs.bind(null,t,e),n)}function us(){}function ds(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function H(e,t){var n=Ho();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ro(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fs(e,t,n){return Ao&21?(Fr(n,t)||(n=Wt(),V.lanes|=n,el|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Vs=!0),e.memoizedState=n)}function ps(e,t){var n=N;N=n!==0&&4>n?n:4,e(!0);var r=ko.transition;ko.transition={};try{e(!1),t()}finally{N=n,ko.transition=r}}function ms(){return Ho().memoizedState}function hs(e,t,n){var r=yl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_s(e))vs(t,n);else if(n=io(e,t,n,r),n!==null){var i=vl();bl(n,e,r,i),ys(n,t,r)}}function gs(e,t,n){var r=yl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_s(e))vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o)){var c=t.interleaved;c===null?(i.next=i,ro(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=io(e,t,i,r),n!==null&&(i=vl(),bl(n,e,r,i),ys(n,t,r))}}function _s(e){var t=e.alternate;return e===V||t!==null&&t===V}function vs(e,t){Po=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ys(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Jt(e,n)}}var bs={readContext:to,useCallback:Lo,useContext:Lo,useEffect:Lo,useImperativeHandle:Lo,useInsertionEffect:Lo,useLayoutEffect:Lo,useMemo:Lo,useReducer:Lo,useRef:Lo,useState:Lo,useDebugValue:Lo,useDeferredValue:Lo,useTransition:Lo,useMutableSource:Lo,useSyncExternalStore:Lo,useId:Lo,unstable_isNewReconciler:!1},xs={readContext:to,useCallback:function(e,t){return Vo().memoizedState=[e,t===void 0?null:t],e},useContext:to,useEffect:is,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),ns(4194308,4,cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return ns(4,2,e,t)},useMemo:function(e,t){var n=Vo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hs.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Vo();return e={current:e},t.memoizedState=e},useState:$o,useDebugValue:us,useDeferredValue:function(e){return Vo().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=ps.bind(null,e[1]),Vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=V,a=Vo();if(z){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Jc===null)throw Error(r(349));Ao&30||Jo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,is(Xo.bind(null,i,o,e),[e]),i.flags|=2048,es(9,Yo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Vo(),t=Jc.identifierPrefix;if(z){var n=Ca,r=Sa;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Fo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Io++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Ss={readContext:to,useCallback:ds,useContext:to,useEffect:as,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:H,useReducer:Wo,useRef:ts,useState:function(){return Wo(Uo)},useDebugValue:us,useDeferredValue:function(e){return fs(Ho(),jo.memoizedState,e)},useTransition:function(){return[Wo(Uo)[0],Ho().memoizedState]},useMutableSource:Ko,useSyncExternalStore:qo,useId:ms,unstable_isNewReconciler:!1},Cs={readContext:to,useCallback:ds,useContext:to,useEffect:as,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:H,useReducer:Go,useRef:ts,useState:function(){return Go(Uo)},useDebugValue:us,useDeferredValue:function(e){var t=Ho();return jo===null?t.memoizedState=e:fs(t,jo.memoizedState,e)},useTransition:function(){return[Go(Uo)[0],Ho().memoizedState]},useMutableSource:Ko,useSyncExternalStore:qo,useId:ms,unstable_isNewReconciler:!1};function ws(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ts(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Es={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vl(),i=yl(e),a=lo(r,i);a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(bl(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vl(),i=yl(e),a=lo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(bl(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vl(),r=yl(e),i=lo(n,r);i.tag=2,t!=null&&(i.callback=t),t=uo(e,i,r),t!==null&&(bl(t,e,r,n),fo(t,e,r))}};function Ds(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function Os(e,t,n){var r=!1,i=Qi,a=t.contextType;return typeof a==`object`&&a?a=to(a):(i=ra(t)?ta:$i.current,r=t.contextTypes,a=(r=r!=null)?na(e,i):Qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Es,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Es.enqueueReplaceState(t,t.state,null)}function As(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},so(e);var a=t.contextType;typeof a==`object`&&a?i.context=to(a):(a=ra(t)?ta:$i.current,i.context=na(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(Ts(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Es.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function js(e,t){try{var n=``,r=t;do n+=fe(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ps=typeof WeakMap==`function`?WeakMap:Map;function Fs(e,t,n){n=lo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cl||(cl=!0,ll=r),Ns(e,t)},n}function Is(e,t,n){n=lo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ns(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Ns(e,t),typeof r!=`function`&&(ul===null?ul=new Set([this]):ul.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ps;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wl.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null||t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function zs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lo(-1,1),t.tag=2,uo(n,t,1))),n.lanes|=1),e)}var Bs=C.ReactCurrentOwner,Vs=!1;function Hs(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function Us(e,t,n,r,i){n=n.render;var a=t.ref;return eo(t,i),r=zo(e,t,n,r,a,i),n=Bo(),e!==null&&!Vs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lc(e,t,i)):(z&&n&&Ea(t),t.flags|=1,Hs(e,t,r,i),t.child)}function Ws(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Gs(e,t,a,r,i)):(e=tu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return lc(e,t,i)}return t.flags|=1,e=eu(a,r),e.ref=t.ref,e.return=t,t.child=e}function Gs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref){if(Vs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Vs=!0);else return t.lanes=e.lanes,lc(e,t,i)}}return Js(e,t,n,r,i)}function Ks(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`){if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Qc,Zc),Zc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Qc,Zc),Zc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,R(Qc,Zc),Zc|=r}}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),R(Qc,Zc),Zc|=r;return Hs(e,t,i,n),t.child}function qs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Js(e,t,n,r,i){var a=ra(n)?ta:$i.current;return a=na(t,a),eo(t,i),n=zo(e,t,n,r,a,i),r=Bo(),e!==null&&!Vs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lc(e,t,i)):(z&&r&&Ea(t),t.flags|=1,Hs(e,t,n,i),t.child)}function Ys(e,t,n,r,i){if(ra(n)){var a=!0;sa(t)}else a=!1;if(eo(t,i),t.stateNode===null)cc(e,t),Os(t,n,r),As(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=to(l):(l=ra(n)?ta:$i.current,l=na(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&ks(t,o,r,l),oo=!1;var f=t.memoizedState;o.state=f,mo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||ea.current||oo?(typeof u==`function`&&(Ts(t,n,u,r),c=t.memoizedState),(s=oo||Ds(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,co(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:ws(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=to(c):(c=ra(n)?ta:$i.current,c=na(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&ks(t,o,r,c),oo=!1,f=t.memoizedState,o.state=f,mo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||ea.current||oo?(typeof p==`function`&&(Ts(t,n,p,r),m=t.memoizedState),(l=oo||Ds(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xs(e,t,n,r,a,i)}function Xs(e,t,n,r,i,a){qs(e,t);var o=!!(t.flags&128);if(!r&&!o)return i&&ca(t,n,!1),lc(e,t,a);r=t.stateNode,Bs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ga(t,e.child,null,a),t.child=Ga(t,null,s,a)):Hs(e,t,s,a),t.memoizedState=r.state,i&&ca(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&aa(e,t.context,!1),bo(e,t.containerInfo)}function Qs(e,t,n,r,i){return Ra(),za(i),t.flags|=256,Hs(e,t,n,r),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function tc(e,t,n){var r=t.pendingProps,i=wo.current,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(i&2)),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(wo,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.lanes=t.mode&1?e.data===`$!`?8:1073741824:1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ru(o,r,0,null),e=nu(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ec(n),t.memoizedState=$s,e):nc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ic(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=eu(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=nu(a,o,n,null),a.flags|=2):a=eu(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=$s,r}return a=e.child,e=a.sibling,r=eu(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nc(e,t){return t=ru({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function rc(e,t,n,r){return r!==null&&za(r),Ga(t,e.child,null,n),e=nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ic(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ms(Error(r(422))),rc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=ru({mode:`visible`,children:i.children},a,0,null),o=nu(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ga(t,e.child,null,s),t.child.memoizedState=ec(s),t.memoizedState=$s,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return rc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ms(o,i,void 0),rc(e,t,s,i)}if(c=(s&e.childLanes)!==0,Vs||c){if(i=Jc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ao(e,a),bl(i,e,a,-1))}return Pl(),i=Ms(Error(r(421))),rc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Kl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ka=Ii(a.nextSibling),Oa=t,z=!0,Aa=null,e!==null&&(ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,Sa=e.id,Ca=e.overflow,xa=t),t=nc(t,i.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function oc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Hs(e,t,r.children,n),r=wo.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(wo,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oc(t,!0,n,null,a);break;case`together`:oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),el|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=eu(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=eu(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uc(e,t,n){switch(t.tag){case 3:Zs(t),Ra();break;case 5:So(t);break;case 1:ra(t.type)&&sa(t);break;case 4:bo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(R(wo,wo.current&1),e=lc(e,t,n),e===null?null:e.sibling):tc(e,t,n):(R(wo,wo.current&1),t.flags|=128,null);R(wo,wo.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(wo,wo.current),r)break;return null;case 22:case 23:return t.lanes=0,Ks(e,t,n)}return lc(e,t,n)}var dc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},fc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,yo(_o.current);var o=null;switch(n){case`input`:i=xe(e,i),r=xe(e,r),o=[];break;case`select`:i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case`textarea`:i=ke(e,i),r=ke(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Ei)}Ue(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null){if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null))}for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null)){if(u===`style`){if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l}else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&I(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function mc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function hc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gc(e,t,n){var i=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hc(t),null;case 1:return ra(t.type)&&ia(),hc(t),null;case 3:return i=t.stateNode,xo(),L(ea),L($i),Do(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Aa!==null&&(wl(Aa),Aa=null))),hc(t),null;case 5:Co(t);var o=yo(B.current);if(n=t.type,e!==null&&t.stateNode!=null)fc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return hc(t),null}if(e=yo(_o.current),Ia(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[zi]=t,i[Bi]=s,e=!!(t.mode&1),n){case`dialog`:I(`cancel`,i),I(`close`,i);break;case`iframe`:case`object`:case`embed`:I(`load`,i);break;case`video`:case`audio`:for(o=0;o<li.length;o++)I(li[o],i);break;case`source`:I(`error`,i);break;case`img`:case`image`:case`link`:I(`error`,i),I(`load`,i);break;case`details`:I(`toggle`,i);break;case`input`:Se(i,s),I(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},I(`invalid`,i);break;case`textarea`:Ae(i,s),I(`invalid`,i)}for(var c in Ue(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ti(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&I(`scroll`,i)}switch(n){case`input`:ve(i),Te(i,s,!0);break;case`textarea`:ve(i),Me(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Ei)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Ne(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[zi]=t,e[Bi]=i,dc(e,t,!1,!1),t.stateNode=e;a:{switch(c=We(n,i),n){case`dialog`:I(`cancel`,e),I(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:I(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<li.length;o++)I(li[o],e);o=i;break;case`source`:I(`error`,e),o=i;break;case`img`:case`image`:case`link`:I(`error`,e),I(`load`,e),o=i;break;case`details`:I(`toggle`,e),o=i;break;case`input`:Se(e,i),o=xe(e,i),I(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=A({},i,{value:void 0}),I(`invalid`,e);break;case`textarea`:Ae(e,i),o=ke(e,i),I(`invalid`,e);break;default:o=i}for(s in Ue(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ve(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ie(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&Le(e,u):typeof u==`number`&&Le(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&I(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:ve(e),Te(e,i,!1);break;case`textarea`:ve(e),Me(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+he(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Oe(e,!!i.multiple,i.defaultValue,!0):Oe(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Ei)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return hc(t),null;case 6:if(e&&t.stateNode!=null)pc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=yo(B.current),yo(_o.current),Ia(t)){if(i=t.stateNode,n=t.memoizedProps,i[zi]=t,(s=i.nodeValue!==n)&&(e=Oa,e!==null))switch(e.tag){case 3:Ti(i.nodeValue,n,!!(e.mode&1));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ti(i.nodeValue,n,!!(e.mode&1))}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zi]=t,t.stateNode=i}return hc(t),null;case 13:if(L(wo),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ka!==null&&t.mode&1&&!(t.flags&128))La(),Ra(),t.flags|=98560,s=!1;else if(s=Ia(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[zi]=t}else Ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;hc(t),s=!1}else Aa!==null&&(wl(Aa),Aa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||wo.current&1?q===0&&(q=3):Pl())),t.updateQueue!==null&&(t.flags|=4),hc(t),null);case 4:return xo(),e===null&&hi(t.stateNode.containerInfo),hc(t),null;case 10:return Qa(t.type._context),hc(t),null;case 17:return ra(t.type)&&ia(),hc(t),null;case 19:if(L(wo),s=t.memoizedState,s===null)return hc(t),null;if(i=!!(t.flags&128),c=s.rendering,c===null){if(i)mc(s,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=To(e),c!==null){for(t.flags|=128,mc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(wo,wo.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ct()>ol&&(t.flags|=128,i=!0,mc(s,!1),t.lanes=4194304)}}else{if(!i){if(e=To(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!z)return hc(t),null}else 2*Ct()-s.renderingStartTime>ol&&n!==1073741824&&(t.flags|=128,i=!0,mc(s,!1),t.lanes=4194304)}s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(hc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ct(),t.sibling=null,n=wo.current,R(wo,i?n&1|2:n&1),t);case 22:case 23:return Al(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Zc&1073741824&&(hc(t),t.subtreeFlags&6&&(t.flags|=8192)):hc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function _c(e,t){switch(Da(t),t.tag){case 1:return ra(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xo(),L(ea),L($i),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Co(t),null;case 13:if(L(wo),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(wo),null;case 4:return xo(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return Al(),null;case 24:return null;default:return null}}var U=!1,W=!1,vc=typeof WeakSet==`function`?WeakSet:Set,G=null;function yc(e,t){var n=e.ref;if(n!==null){if(typeof n==`function`)try{n(null)}catch(n){Ul(e,t,n)}else n.current=null}}function bc(e,t,n){try{n()}catch(n){Ul(e,t,n)}}var xc=!1;function Sc(e,t){if(Di=xn,e=Br(),Vr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},xn=!1,G=t;G!==null;)if(t=G,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ws(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Ul(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return h=xc,xc=!1,h}function Cc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bc(t,n,a)}i=i.next}while(i!==r)}}function wc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zi],delete t[Bi],delete t[Hi],delete t[Ui],delete t[Wi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var jc=null,Mc=!1;function Nc(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount==`function`)try{jt.onCommitFiberUnmount(At,n)}catch{}switch(n.tag){case 5:W||yc(n,t);case 6:var r=jc,i=Mc;jc=null,Nc(e,t,n),jc=r,Mc=i,jc!==null&&(Mc?(e=jc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):jc.removeChild(n.stateNode));break;case 18:jc!==null&&(Mc?(e=jc,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),yn(e)):Fi(jc,n.stateNode));break;case 4:r=jc,i=Mc,jc=n.stateNode.containerInfo,Mc=!0,Nc(e,t,n),jc=r,Mc=i;break;case 0:case 11:case 14:case 15:if(!W&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&bc(n,t,o),i=i.next}while(i!==r)}Nc(e,t,n);break;case 1:if(!W&&(yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Ul(n,t,e)}Nc(e,t,n);break;case 21:Nc(e,t,n);break;case 22:n.mode&1?(W=(r=W)||n.memoizedState!==null,Nc(e,t,n),W=r):Nc(e,t,n);break;default:Nc(e,t,n)}}function Fc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vc),t.forEach(function(t){var r=ql.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Ic(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:jc=c.stateNode,Mc=!1;break a;case 3:jc=c.stateNode.containerInfo,Mc=!0;break a;case 4:jc=c.stateNode.containerInfo,Mc=!0;break a}c=c.return}if(jc===null)throw Error(r(160));Pc(o,s,a),jc=null,Mc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Ul(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lc(t,e),t=t.sibling}function Lc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ic(t,e),Rc(e),i&4){try{Cc(3,e,e.return),wc(3,e)}catch(t){Ul(e,e.return,t)}try{Cc(5,e,e.return)}catch(t){Ul(e,e.return,t)}}break;case 1:Ic(t,e),Rc(e),i&512&&n!==null&&yc(n,n.return);break;case 5:if(Ic(t,e),Rc(e),i&512&&n!==null&&yc(n,n.return),e.flags&32){var a=e.stateNode;try{Le(a,``)}catch(t){Ul(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Ce(a,o),We(c,s);var u=We(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ve(a,f):d===`dangerouslySetInnerHTML`?Ie(a,f):d===`children`?Le(a,f):S(a,d,f,u)}switch(c){case`input`:we(a,o);break;case`textarea`:je(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Oe(a,!!o.multiple,o.multiple?[]:``,!1):Oe(a,!!o.multiple,o.defaultValue,!0)):Oe(a,!!o.multiple,m,!1)}a[Bi]=o}catch(t){Ul(e,e.return,t)}}break;case 6:if(Ic(t,e),Rc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Ul(e,e.return,t)}}break;case 3:if(Ic(t,e),Rc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){Ul(e,e.return,t)}break;case 4:Ic(t,e),Rc(e);break;case 13:Ic(t,e),Rc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(al=Ct())),i&4&&Fc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(W=(u=W)||d,Ic(t,e),W=u):Ic(t,e),Rc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(p=G,m=p.child,p.tag){case 0:case 11:case 14:case 15:Cc(4,p,p.return);break;case 1:yc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Ul(i,n,e)}}break;case 5:yc(p,p.return);break;case 22:if(p.memoizedState!==null){Hc(f);continue}}m===null?Hc(f):(m.return=p,G=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Be(`display`,s))}catch(t){Ul(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Ul(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ic(t,e),Rc(e),i&4&&Fc(e);break;case 21:break;default:Ic(t,e),Rc(e)}}function Rc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Dc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Le(a,``),i.flags&=-33),Ac(e,Oc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;kc(e,Oc(e),o);break;default:throw Error(r(161))}}catch(t){Ul(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zc(e,t,n){G=e,Bc(e,t,n)}function Bc(e,t,n){for(var r=!!(e.mode&1);G!==null;){var i=G,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||U;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||W;s=U;var l=W;if(U=o,(W=c)&&!l)for(G=i;G!==null;)o=G,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Uc(i):(c.return=o,G=c);for(;a!==null;)G=a,Bc(a,t,n),a=a.sibling;G=i,U=s,W=l}Vc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,G=a):Vc(e,t,n)}}function Vc(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:W||wc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!W){if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ws(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;o!==null&&ho(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ho(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}W||t.flags&512&&Tc(t)}catch(e){Ul(t,t.return,e)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function Hc(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Uc(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wc(4,t)}catch(e){Ul(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Ul(t,i,e)}}var a=t.return;try{Tc(t)}catch(e){Ul(t,a,e)}break;case 5:var o=t.return;try{Tc(t)}catch(e){Ul(t,o,e)}}}catch(e){Ul(t,t.return,e)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var Wc=Math.ceil,Gc=C.ReactCurrentDispatcher,Kc=C.ReactCurrentOwner,qc=C.ReactCurrentBatchConfig,K=0,Jc=null,Yc=null,Xc=0,Zc=0,Qc=Zi(0),q=0,$c=null,el=0,tl=0,nl=0,rl=null,il=null,al=0,ol=1/0,sl=null,cl=!1,ll=null,ul=null,dl=!1,fl=null,pl=0,ml=0,hl=null,gl=-1,_l=0;function vl(){return K&6?Ct():gl===-1?gl=Ct():gl}function yl(e){return e.mode&1?K&2&&Xc!==0?Xc&-Xc:Ba.transition===null?(e=N,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(_l===0&&(_l=Wt()),_l):1}function bl(e,t,n,i){if(50<ml)throw ml=0,hl=null,Error(r(185));Kt(e,n,i),(!(K&2)||e!==Jc)&&(e===Jc&&(!(K&2)&&(tl|=n),q===4&&El(e,Xc)),xl(e,i),n===1&&K===0&&!(t.mode&1)&&(ol=Ct()+500,ua&&ma()))}function xl(e,t){var n=e.callbackNode;Ht(e,t);var r=Bt(e,e===Jc?Xc:0);if(r===0)n!==null&&bt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bt(n),t===1)e.tag===0?pa(Dl.bind(null,e)):fa(Dl.bind(null,e)),Ni(function(){!(K&6)&&ma()}),n=null;else{switch(Yt(r)){case 1:n=Tt;break;case 4:n=Et;break;case 16:n=Dt;break;case 536870912:n=kt;break;default:n=Dt}n=Yl(n,Sl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sl(e,t){if(gl=-1,_l=0,K&6)throw Error(r(327));var n=e.callbackNode;if(Vl()&&e.callbackNode!==n)return null;var i=Bt(e,e===Jc?Xc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Fl(e,i);else{t=i;var a=K;K|=2;var o=Nl();(Jc!==e||Xc!==t)&&(sl=null,ol=Ct()+500,jl(e,t));do try{Ll();break}catch(t){Ml(e,t)}while(1);Za(),Gc.current=o,K=a,Yc===null?(Jc=null,Xc=0,t=q):t=0}if(t!==0){if(t===2&&(a=Ut(e),a!==0&&(i=a,t=Cl(e,a))),t===1)throw n=$c,jl(e,0),El(e,i),xl(e,Ct()),n;if(t===6)El(e,i);else{if(a=e.current.alternate,!(i&30)&&!Tl(a)&&(t=Fl(e,i),t===2&&(o=Ut(e),o!==0&&(i=o,t=Cl(e,o))),t===1))throw n=$c,jl(e,0),El(e,i),xl(e,Ct()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:J(e,il,sl);break;case 3:if(El(e,i),(i&130023424)===i&&(t=al+500-Ct(),10<t)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){vl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ai(J.bind(null,e,il,sl),t);break}J(e,il,sl);break;case 4:if(El(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Nt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wc(i/1960))-i,10<i){e.timeoutHandle=Ai(J.bind(null,e,il,sl),i);break}J(e,il,sl);break;case 5:J(e,il,sl);break;default:throw Error(r(329))}}}return xl(e,Ct()),e.callbackNode===n?Sl.bind(null,e):null}function Cl(e,t){var n=rl;return e.current.memoizedState.isDehydrated&&(jl(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=il,il=n,t!==null&&wl(t)),e}function wl(e){il===null?il=e:il.push.apply(il,e)}function Tl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function El(e,t){for(t&=~nl,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Dl(e){if(K&6)throw Error(r(327));Vl();var t=Bt(e,0);if(!(t&1))return xl(e,Ct()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var i=Ut(e);i!==0&&(t=i,n=Cl(e,i))}if(n===1)throw n=$c,jl(e,0),El(e,t),xl(e,Ct()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,J(e,il,sl),xl(e,Ct()),null}function Ol(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(ol=Ct()+500,ua&&ma())}}function kl(e){fl!==null&&fl.tag===0&&!(K&6)&&Vl();var t=K;K|=1;var n=qc.transition,r=N;try{if(qc.transition=null,N=1,e)return e()}finally{N=r,qc.transition=n,K=t,!(K&6)&&ma()}}function Al(){Zc=Qc.current,L(Qc)}function jl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ji(n)),Yc!==null)for(n=Yc.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:xo(),L(ea),L($i),Do();break;case 5:Co(r);break;case 4:xo();break;case 13:L(wo);break;case 19:L(wo);break;case 10:Qa(r.type._context);break;case 22:case 23:Al()}n=n.return}if(Jc=e,Yc=e=eu(e.current,null),Xc=Zc=t,q=0,$c=null,nl=tl=el=0,il=rl=null,no!==null){for(t=0;t<no.length;t++)if(n=no[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}no=null}return e}function Ml(e,t){do{var n=Yc;try{if(Za(),Oo.current=bs,No){for(var i=V.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}No=!1}if(Ao=0,Mo=jo=V=null,Po=!1,Fo=0,Kc.current=null,n===null||n.return===null){q=1,$c=t,Yc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Xc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Rs(s);if(m!==null){m.flags&=-257,zs(m,s,c,o,t),m.mode&1&&Ls(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}if(!(t&1)){Ls(o,u,t),Pl();break a}l=Error(r(426))}else if(z&&c.mode&1){var _=Rs(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),zs(_,s,c,o,t),za(js(l,c));break a}}o=l=js(l,c),q!==4&&(q=2),rl===null?rl=[o]:rl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Fs(o,l,t);po(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ul===null||!ul.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Is(o,c,t);po(o,x);break a}}o=o.return}while(o!==null)}zl(n)}catch(e){t=e,Yc===n&&n!==null&&(Yc=n=n.return);continue}break}while(1)}function Nl(){var e=Gc.current;return Gc.current=bs,e===null?bs:e}function Pl(){(q===0||q===3||q===2)&&(q=4),Jc===null||!(el&268435455)&&!(tl&268435455)||El(Jc,Xc)}function Fl(e,t){var n=K;K|=2;var i=Nl();(Jc!==e||Xc!==t)&&(sl=null,jl(e,t));do try{Il();break}catch(t){Ml(e,t)}while(1);if(Za(),K=n,Gc.current=i,Yc!==null)throw Error(r(261));return Jc=null,Xc=0,q}function Il(){for(;Yc!==null;)Rl(Yc)}function Ll(){for(;Yc!==null&&!xt();)Rl(Yc)}function Rl(e){var t=Jl(e.alternate,e,Zc);e.memoizedProps=e.pendingProps,t===null?zl(e):Yc=t,Kc.current=null}function zl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_c(n,t),n!==null){n.flags&=32767,Yc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Yc=null;return}}else if(n=gc(n,t,Zc),n!==null){Yc=n;return}if(t=t.sibling,t!==null){Yc=t;return}Yc=t=e}while(t!==null);q===0&&(q=5)}function J(e,t,n){var r=N,i=qc.transition;try{qc.transition=null,N=1,Bl(e,t,n,r)}finally{qc.transition=i,N=r}return null}function Bl(e,t,n,i){do Vl();while(fl!==null);if(K&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qt(e,o),e===Jc&&(Yc=Jc=null,Xc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Yl(Dt,function(){return Vl(),null})),o=!!(n.flags&15990),n.subtreeFlags&15990||o){o=qc.transition,qc.transition=null;var s=N;N=1;var c=K;K|=4,Kc.current=null,Sc(e,n),Lc(n,e),Hr(Oi),xn=!!Di,Oi=Di=null,e.current=n,zc(n,e,a),St(),K=c,N=s,qc.transition=o}else e.current=n;if(dl&&(dl=!1,fl=e,pl=a),o=e.pendingLanes,o===0&&(ul=null),Mt(n.stateNode,i),xl(e,Ct()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(cl)throw cl=!1,e=ll,ll=null,e;return pl&1&&e.tag!==0&&Vl(),o=e.pendingLanes,o&1?e===hl?ml++:(ml=0,hl=e):ml=0,ma(),null}function Vl(){if(fl!==null){var e=Yt(pl),t=qc.transition,n=N;try{if(qc.transition=null,N=16>e?16:e,fl===null)var i=!1;else{if(e=fl,fl=null,pl=0,K&6)throw Error(r(331));var a=K;for(K|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(G=u;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Cc(8,d,o)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var p=d.sibling,m=d.return;if(Ec(d),d===u){G=null;break}if(p!==null){p.return=m,G=p;break}G=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else b:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,G=v;break b}G=o.return}}var y=e.current;for(G=y;G!==null;){s=G;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,G=b;else b:for(s=y;G!==null;){if(c=G,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:wc(9,c)}}catch(e){Ul(c,c.return,e)}if(c===s){G=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,G=x;break b}G=c.return}}if(K=a,ma(),jt&&typeof jt.onPostCommitFiberRoot==`function`)try{jt.onPostCommitFiberRoot(At,e)}catch{}i=!0}return i}finally{N=n,qc.transition=t}}return!1}function Hl(e,t,n){t=js(n,t),t=Fs(e,t,1),e=uo(e,t,1),t=vl(),e!==null&&(Kt(e,1,t),xl(e,t))}function Ul(e,t,n){if(e.tag===3)Hl(e,e,n);else for(;t!==null;){if(t.tag===3){Hl(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ul===null||!ul.has(r))){e=js(n,e),e=Is(t,e,1),t=uo(t,e,1),e=vl(),t!==null&&(Kt(t,1,e),xl(t,e));break}}t=t.return}}function Wl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vl(),e.pingedLanes|=e.suspendedLanes&n,Jc===e&&(Xc&n)===n&&(q===4||q===3&&(Xc&130023424)===Xc&&500>Ct()-al?jl(e,0):nl|=n),xl(e,t)}function Gl(e,t){t===0&&(e.mode&1?(t=Rt,Rt<<=1,!(Rt&130023424)&&(Rt=4194304)):t=1);var n=vl();e=ao(e,t),e!==null&&(Kt(e,t,n),xl(e,n))}function Kl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gl(e,n)}function ql(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Gl(e,n)}var Jl=function(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps||ea.current)Vs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Vs=!1,uc(e,t,n);Vs=!!(e.flags&131072)}}else Vs=!1,z&&t.flags&1048576&&Ta(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;cc(e,t),e=t.pendingProps;var a=na(t,$i.current);eo(t,n),a=zo(null,t,i,e,a,n);var o=Bo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ra(i)?(o=!0,sa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,so(t),a.updater=Es,t.stateNode=a,a._reactInternals=t,As(t,i,e,n),t=Xs(null,t,i,!0,o,n)):(t.tag=0,z&&o&&Ea(t),Hs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(cc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=$l(i),e=ws(i,e),a){case 0:t=Js(null,t,i,e,n);break a;case 1:t=Ys(null,t,i,e,n);break a;case 11:t=Us(null,t,i,e,n);break a;case 14:t=Ws(null,t,i,ws(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Js(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Ys(e,t,i,a,n);case 3:a:{if(Zs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,co(e,t),mo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=js(Error(r(423)),t),t=Qs(e,t,i,n,a);break a}if(i!==a){a=js(Error(r(424)),t),t=Qs(e,t,i,n,a);break a}for(ka=Ii(t.stateNode.containerInfo.firstChild),Oa=t,z=!0,Aa=null,n=Ka(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ra(),i===a){t=lc(e,t,n);break a}Hs(e,t,i,n)}t=t.child}return t;case 5:return So(t),e===null&&Pa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ki(i,a)?s=null:o!==null&&ki(i,o)&&(t.flags|=32),qs(e,t),Hs(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return tc(e,t,n);case 4:return bo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ga(t,null,i,n):Hs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),Us(e,t,i,a,n);case 7:return Hs(e,t,t.pendingProps,n),t.child;case 8:return Hs(e,t,t.pendingProps.children,n),t.child;case 12:return Hs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,R(qa,i._currentValue),i._currentValue=s,o!==null){if(Fr(o.value,s)){if(o.children===a.children&&!ea.current){t=lc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=lo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$a(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$a(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}}Hs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,eo(t,n),a=to(a),i=i(a),t.flags|=1,Hs(e,t,i,n),t.child;case 14:return i=t.type,a=ws(i,t.pendingProps),a=ws(i.type,a),Ws(e,t,i,a,n);case 15:return Gs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:ws(i,a),cc(e,t),t.tag=1,ra(i)?(e=!0,sa(t)):e=!1,eo(t,n),Os(t,i,a),As(t,i,a,n),Xs(null,t,i,!0,e,n);case 19:return sc(e,t,n);case 22:return Ks(e,t,n)}throw Error(r(156,t.tag))};function Yl(e,t){return yt(e,t)}function Xl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zl(e,t,n,r){return new Xl(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $l(e){if(typeof e==`function`)return+!!Ql(e);if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===ie)return 14}return 2}function eu(e,t){var n=e.alternate;return n===null?(n=Zl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tu(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case ee:return nu(n.children,a,o,t);case E:s=8,a|=8;break;case D:return e=Zl(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case ne:return e=Zl(13,n,t,a),e.elementType=ne,e.lanes=o,e;case re:return e=Zl(19,n,t,a),e.elementType=re,e.lanes=o,e;case oe:return ru(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case O:s=10;break a;case k:s=9;break a;case te:s=11;break a;case ie:s=14;break a;case ae:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Zl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function nu(e,t,n,r){return e=Zl(7,e,r,t),e.lanes=n,e}function ru(e,t,n,r){return e=Zl(22,e,r,t),e.elementType=oe,e.lanes=n,e.stateNode={isHidden:!1},e}function iu(e,t,n){return e=Zl(6,e,null,t),e.lanes=n,e}function au(e,t,n){return t=Zl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ou(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function su(e,t,n,r,i,a,o,s,c){return e=new ou(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Zl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(a),e}function cu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function lu(e){if(!e)return Qi;e=e._reactInternals;a:{if(pt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ra(n))return oa(e,n,t)}return t}function uu(e,t,n,r,i,a,o,s,c){return e=su(n,r,!0,e,i,a,o,s,c),e.context=lu(null),n=e.current,r=vl(),i=yl(n),a=lo(r,i),a.callback=t??null,uo(n,a,i),e.current.lanes=i,Kt(e,i,r),xl(e,r),e}function du(e,t,n,r){var i=t.current,a=vl(),o=yl(i);return n=lu(n),t.context===null?t.context=n:t.pendingContext=n,t=lo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=uo(i,t,o),e!==null&&(bl(e,i,o,a),fo(e,i,o)),o}function fu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function hu(){return null}var gu=typeof reportError==`function`?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}vu.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));du(e,t,null,null)},vu.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kl(function(){du(null,e,null,null)}),t[Vi]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&mn(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function xu(){}function Su(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=fu(o);a.call(e)}}var o=uu(t,r,e,0,null,!1,!1,``,xu);return e._reactRootContainer=o,e[Vi]=o.current,hi(e.nodeType===8?e.parentNode:e),kl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=fu(c);s.call(e)}}var c=su(e,0,!1,null,null,!1,!1,``,xu);return e._reactRootContainer=c,e[Vi]=c.current,hi(e.nodeType===8?e.parentNode:e),kl(function(){du(t,c,n,r)}),c}function Cu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=fu(o);s.call(e)}}du(t,o,e,i)}else o=Su(n,t,e,i,r);return fu(o)}Xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zt(t.pendingLanes);n!==0&&(Jt(t,n|1),xl(t,Ct()),!(K&6)&&(ol=Ct()+500,ma()))}break;case 13:kl(function(){var t=ao(e,1);t!==null&&bl(t,e,1,vl())}),mu(e,1)}},Zt=function(e){if(e.tag===13){var t=ao(e,134217728);t!==null&&bl(t,e,134217728,vl()),mu(e,134217728)}},Qt=function(e){if(e.tag===13){var t=yl(e),n=ao(e,t);n!==null&&bl(n,e,t,vl()),mu(e,t)}},$t=function(){return N},en=function(e,t){var n=N;try{return N=e,t()}finally{N=n}},qe=function(e,t,n){switch(t){case`input`:if(we(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ji(i);if(!a)throw Error(r(90));ye(i),we(i,a)}}}break;case`textarea`:je(e,n);break;case`select`:t=n.value,t!=null&&Oe(e,!!n.multiple,t,!1)}},$e=Ol,M=kl;var wu={usingClientEntryPoint:!1,Events:[Ki,qi,Ji,Ze,Qe,Ol]},Tu={findFiberByHostInstance:Gi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},Eu={bundleType:Tu.bundleType,version:Tu.version,rendererPackageName:Tu.rendererPackageName,rendererConfig:Tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_t(e),e===null?null:e.stateNode},findFiberByHostInstance:Tu.findFiberByHostInstance||hu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{At=Du.inject(Eu),jt=Du}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(r(200));return cu(e,t,null,n)},e.createRoot=function(e,t){if(!yu(e))throw Error(r(299));var n=!1,i=``,a=gu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=su(e,1,!1,null,null,n,!1,i,a),e[Vi]=t.current,hi(e.nodeType===8?e.parentNode:e),new _u(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=_t(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return kl(e)},e.hydrate=function(e,t,n){if(!bu(t))throw Error(r(200));return Cu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!yu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=gu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=uu(t,null,e,1,n??null,a,!1,o,s),e[Vi]=t.current,hi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new vu(t)},e.render=function(e,t,n){if(!bu(t))throw Error(r(200));return Cu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!bu(e))throw Error(r(40));return e._reactRootContainer?(kl(function(){Cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Vi]=null})}),!0):!1},e.unstable_batchedUpdates=Ol,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!bu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Cu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=_();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot}));function y(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var b=o((()=>{})),x=c({default:()=>C}),S,C,w=o((()=>{b(),S=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,C=y(function(e){return S.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91})})),T=`-ms-`,ee=`-moz-`,E=`-webkit-`,D=`comm`,O=`rule`,k=`decl`,te=`@import`,ne=`@namespace`,re=`@keyframes`,ie=`@layer`,ae=Math.abs,oe=String.fromCharCode,se=Object.assign;function ce(e,t){return de(e,0)^45?(((t<<2^de(e,0))<<2^de(e,1))<<2^de(e,2))<<2^de(e,3):0}function A(e){return e.trim()}function le(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function ue(e,t,n){return e.indexOf(t,n)}function de(e,t){return e.charCodeAt(t)|0}function fe(e,t,n){return e.slice(t,n)}function pe(e){return e.length}function me(e){return e.length}function he(e,t){return t.push(e),e}function ge(e,t){return e.map(t).join(``)}function _e(e,t){return e.filter(function(e){return!le(e,t)})}var ve=1,ye=1,be=0,xe=0,Se=0,Ce=``;function we(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ve,column:ye,length:o,return:``,siblings:s}}function Te(e,t){return se(we(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function Ee(e){for(;e.root;)e=Te(e.root,{children:[e]});he(e,e.siblings)}function De(){return Se}function Oe(){return Se=xe>0?de(Ce,--xe):0,ye--,Se===10&&(ye=1,ve--),Se}function ke(){return Se=xe<be?de(Ce,xe++):0,ye++,Se===10&&(ye=1,ve++),Se}function Ae(){return de(Ce,xe)}function je(){return xe}function Me(e,t){return fe(Ce,e,t)}function Ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return ve=ye=1,be=pe(Ce=e),xe=0,[]}function Fe(e){return Ce=``,e}function Ie(e){return A(Me(xe-1,ze(e===91?e+2:e===40?e+1:e)))}function Le(e){for(;(Se=Ae())&&Se<33;)ke();return Ne(e)>2||Ne(Se)>3?``:` `}function Re(e,t){for(;--t&&ke()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Me(e,je()+(t<6&&Ae()==32&&ke()==32))}function ze(e){for(;ke();)switch(Se){case e:return xe;case 34:case 39:e!==34&&e!==39&&ze(Se);break;case 40:e===41&&ze(e);break;case 92:ke()}return xe}function Be(e,t){for(;ke()&&e+Se!==57&&(e+Se!==84||Ae()!==47););return`/*`+Me(t,xe-1)+`*`+oe(e===47?e:ke())}function Ve(e){for(;!Ne(Ae());)ke();return Me(e,xe)}function He(e){return Fe(Ue(``,null,null,null,[``],e=Pe(e),0,[0],e))}function Ue(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ke()){case 40:if(m!=108&&de(C,d-1)==58){ue(C+=j(Ie(v),`&`,`&\f`),`&\f`,ae(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ie(v);break;case 9:case 10:case 13:case 32:C+=Le(m);break;case 92:C+=Re(je()-1,7);continue;case 47:switch(Ae()){case 42:case 47:he(Ge(Be(ke(),je()),t,n,c),c),(Ne(m||1)==5||Ne(Ae()||1)==5)&&pe(C)&&fe(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=pe(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(pe(C)-d||h===0&&m===47)&&he(p>32?Ke(C+`;`,r,n,d-1,c):Ke(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(he(S=We(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Ue(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(de(C,3)===110)break;case 108:if(de(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ue(e,S,S,r&&he(We(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ue(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+pe(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&Oe()==125)continue}switch(C+=oe(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(pe(C)-1)*_,_=1;break;case 64:Ae()===45&&(C+=Ie(ke())),f=Ae(),u=d=pe(y=C+=Ve(je())),v++;break;case 45:m===45&&pe(C)==2&&(h=0)}}return a}function We(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=me(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=fe(e,f+1,f=ae(g=o[h])),b=e;v<m;++v)(b=A(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return we(e,t,n,i===0?O:s,c,l,u,d)}function Ge(e,t,n,r){return we(e,t,n,D,oe(De()),fe(e,2,-2),0,r)}function Ke(e,t,n,r,i){return we(e,t,n,k,fe(e,0,r),fe(e,r+1,-1),r,i)}function qe(e,t,n){switch(ce(e,t)){case 5103:return E+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return E+e+e;case 4855:return E+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return E+e+ee+e+T+e+e;case 5936:switch(de(e,t+11)){case 114:return E+e+T+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return E+e+T+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return E+e+T+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return E+e+T+e+e;case 6165:return E+e+T+`flex-`+e+e;case 5187:return E+e+j(e,/(\w+).+(:[^]+)/,E+`box-$1$2`+T+`flex-$1$2`)+e;case 5443:return E+e+T+`flex-item-`+j(e,/flex-|-self/g,``)+(le(e,/flex-|baseline/)?``:T+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return E+e+T+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return E+e+T+j(e,`shrink`,`negative`)+e;case 5292:return E+e+T+j(e,`basis`,`preferred-size`)+e;case 6060:return E+`box-`+j(e,`-grow`,``)+E+e+T+j(e,`grow`,`positive`)+e;case 4554:return E+j(e,/([^-])(transform)/g,`$1`+E+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,E+`$1`),/(image-set)/,E+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,E+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,E+`box-pack:$3`+T+`flex-pack:$3`),/space-between/,`justify`)+E+e+e;case 4200:if(!le(e,/flex-|baseline/))return T+`grid-column-align`+fe(e,t)+e;break;case 2592:case 3360:return T+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,le(e.props,/grid-\w+-end/)})?~ue(e+(n=n[t].value),`span`,0)?e:T+j(e,`-start`,``)+e+T+`grid-row-span:`+(~ue(n,`span`,0)?le(n,/\d+/):+le(n,/\d+/)-le(e,/\d+/))+`;`:T+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return le(e.props,/grid-\w+-start/)})?e:T+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,E+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pe(e)-1-t>6)switch(de(e,t+1)){case 109:if(de(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+E+`$2-$3$1`+ee+(de(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ue(e,`stretch`,0)?qe(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return T+n+`:`+r+s+(i?T+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(de(e,t+6)===121)return j(e,`:`,`:`+E)+e;break;case 6444:switch(de(e,de(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+E+(de(e,14)===45?`inline-`:``)+`box$3$1`+E+`$2$3$1`+T+`$2box$3`)+e;case 100:return j(e,`:`,`:`+T)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function Je(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ye(e,t,n,r){switch(e.type){case ie:if(e.children.length)break;case te:case ne:case k:return e.return=e.return||e.value;case D:return``;case re:return e.return=e.value+`{`+Je(e.children,r)+`}`;case O:if(!pe(e.value=e.props.join(`,`)))return``}return pe(n=Je(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Xe(e){var t=me(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ze(e){return function(t){t.root||(t=t.return)&&e(t)}}function Qe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case k:e.return=qe(e.value,e.length,n);return;case re:return Je([Te(e,{value:j(e.value,`@`,`@`+E)})],r);case O:if(e.length)return ge(n=e.props,function(t){switch(le(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:Ee(Te(e,{props:[j(t,/:(read-\w+)/,`:`+ee+`$1`)]})),Ee(Te(e,{props:[t]})),se(e,{props:_e(n,r)});break;case`::placeholder`:Ee(Te(e,{props:[j(t,/:(plac\w+)/,`:`+E+`input-$1`)]})),Ee(Te(e,{props:[j(t,/:(plac\w+)/,`:`+ee+`$1`)]})),Ee(Te(e,{props:[j(t,/:(plac\w+)/,T+`input-$1`)]})),Ee(Te(e,{props:[t]})),se(e,{props:_e(n,r)})}return``})}}var $e=u(v(),1),M=u(p()),et=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,tt=`active`,nt=`data-styled-version`,rt=`6.5.3`,it=`/*!sc*/
`,at=typeof window<`u`&&typeof document<`u`;function ot(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var st=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:ot(`REACT_APP_SC_DISABLE_SPEEDY`)??ot(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),ct=`sc-keyframes-`,lt={};function ut(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var dt=new Map,ft=new Map,pt=1,mt=e=>{if(dt.has(e))return dt.get(e);for(;ft.has(pt);)pt++;let t=pt++;return dt.set(e,t),ft.set(t,e),t},ht=e=>ft.get(e),gt=(e,t)=>{pt=t+1,dt.set(e,t),ft.set(t,e)},_t=Object.freeze([]),vt=Object.freeze({});function yt(e,t,n=vt){return e.theme!==n.theme&&e.theme||t||n.theme}var bt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xt=/(^-|-$)/g;function St(e){return e.replace(bt,`-`).replace(xt,``)}var Ct=/(a)(d)/gi,wt=e=>String.fromCharCode(e+(e>25?39:97));function Tt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=wt(t%52)+n;return(wt(t%52)+n).replace(Ct,`$1-$2`)}var Et=5381,Dt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Ot=e=>Dt(Et,e);function kt(e){return Tt(Ot(e)>>>0)}function At(e){return e.displayName||e.name||`Component`}function jt(e){return typeof e==`string`&&!0}function Mt(e){return jt(e)?`styled.${e}`:`Styled(${At(e)})`}var Nt=Symbol.for(`react.memo`),Pt=Symbol.for(`react.forward_ref`),Ft={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},It={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rt={[Pt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Nt]:Lt};function zt(e){return(`type`in(t=e)&&t.type.$$typeof)===Nt?Lt:`$$typeof`in e?Rt[e.$$typeof]:Ft;var t}var Bt=Object.defineProperty,Vt=Object.getOwnPropertyNames,Ht=Object.getOwnPropertySymbols,Ut=Object.getOwnPropertyDescriptor,Wt=Object.getPrototypeOf,Gt=Object.prototype;function Kt(e,t,n){if(typeof t!=`string`){let r=Wt(t);r&&r!==Gt&&Kt(e,r,n);let i=Vt(t).concat(Ht(t)),a=zt(e),o=zt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in It||n&&n[s]||o&&s in o||a&&s in a)){let n=Ut(t,s);try{Bt(e,s,n)}catch{}}}}return e}function qt(e){return typeof e==`function`}var Jt=Symbol.for(`react.forward_ref`);function N(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Jt&&`styledComponentId`in e}function Yt(e,t){return e&&t?e+` `+t:e||t||``}function Xt(e,t){return e.join(t||``)}function Zt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Qt(e,t,n=!1){if(!n&&!Zt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Qt(e[n],t[n]);else if(Zt(t))for(let n in t)e[n]=Qt(e[n],t[n]);return e}function $t(e,t){Object.defineProperty(e,"toString",{value:t})}var en=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw ut(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+it;return t}},tn=`style[${et}][${nt}="${rt}"]`,nn=RegExp(`^${et}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),rn=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,an=e=>{if(!e)return document;if(rn(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(rn(t))return t}return document},on=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},sn=(e,t)=>{let n=(t.textContent??``).split(it),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(nn);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(gt(n,t),on(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},cn=e=>{let t=an(e.options.target).querySelectorAll(tn);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(et)!==tt&&(sn(e,r),r.parentNode&&r.parentNode.removeChild(r))}},ln=!1;function un(){if(!1!==ln)return ln;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return ln=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return ln=t.getAttribute(`content`)||void 0}return ln=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var dn=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${et}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(et,tt),i.setAttribute(nt,rt);let s=t||un();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},fn=class{constructor(e,t){this.element=dn(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw ut(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},pn=class{constructor(e,t){this.element=dn(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},mn=at,hn={isServer:!at,useCSSOMInjection:!st},gn=class e{static registerId(e){return mt(e)}constructor(e=vt,t={},n){this.options=Object.assign(Object.assign({},hn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&at&&mn&&(mn=!1,cn(this)),$t(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=ht(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=et+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&at&&cn(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&at&&t.target!==this.options.target&&an(this.options.target)!==an(t.target)&&cn(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new fn(t,n):new pn(t,n))(this.options),new en(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){mt(e),e.startsWith(ct)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(mt(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(mt(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},_n=new WeakSet,vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function yn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in vn||e.startsWith(`--`)?String(t).trim():t+`px`}var bn=47;function xn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Sn=Symbol.for(`sc-keyframes`);function Cn(e){return typeof e==`object`&&!!e&&Sn in e}function wn(e){return qt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Tn=e=>e==null||!1===e||e===``,En=Symbol.for(`react.client.reference`);function Dn(e){return e.$$typeof===En}function On(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!Tn(r)&&(Array.isArray(r)&&_n.has(r)||qt(r)?t.push(xn(n)+`:`,r,`;`):Zt(r)?(t.push(n+` {`),On(r,t),t.push(`}`)):t.push(xn(n)+`: `+yn(n,r)+`;`))}}function kn(e,t,n,r,i=[]){if(Tn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return Dn(e)?i:wn(e)&&t?kn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)kn(e[a],t,n,r,i);return i}return N(e)?(i.push(`.${e.styledComponentId}`),i):Cn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Dn(e)?i:Zt(e)&&e.toString===Object.prototype.toString?(On(e,i),i):(i.push(e.toString()),i)}var An=Ot(rt),jn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Dt(An,t),this.baseStyle=n,gn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(wn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Xt(kn(r,e,t,n)))}else i+=Xt(kn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=Tt(Dt(Dt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Yt(r,a)}}return r}},Mn=/&/g;function Nn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Pn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==bn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===bn&&(o=!1,c++);else if(l!==34&&l!==39||Nn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Fn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Fn(a.children,t)}return e}function In({options:e=vt,plugins:t=_t}=vt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(Mn,r).replace(i,a))}),e.prefix&&o.push(Qe),o.push(Ye);let s=[],c=Xe(o.concat(Ze(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return Pn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||Nn(e,o)){if(s===0){if(t===bn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==bn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===bn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===bn&&o+1<r&&e.charCodeAt(o+1)===bn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:Pn(i)):l===0?e:Pn(e)}(t),d=He(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Fn(d,e.namespace)),s=[],Je(d,c),s},u=e,d=Et;for(let e=0;e<t.length;e++)t[e].name||ut(15),d=Dt(d,t[e].name);return u!=null&&u.namespace&&(d=Dt(d,u.namespace)),u!=null&&u.prefix&&(d=Dt(d,`p`)),l.hash=d===Et?``:d.toString(),l}var Ln=new gn,Rn=In(),zn=M.createContext({shouldForwardProp:void 0,styleSheet:Ln,stylis:Rn,stylisPlugins:void 0});zn.Consumer;function Bn(){return M.useContext(zn)}var Vn=M.createContext(void 0);Vn.Consumer;var Hn=Object.prototype.hasOwnProperty,Un={};function Wn(e,t){let n=typeof e==`string`?St(e):`sc`;Un[n]=(Un[n]||0)+1;let r=n+`-`+kt(rt+n+Un[n]);return t?t+`-`+r:r}function Gn(e,t,n){let r=N(e),i=e,a=!jt(e),{attrs:o=_t,componentId:s=Wn(t.displayName,t.parentComponentId),displayName:c=Mt(e)}=t,l=t.displayName&&t.componentId?St(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new jn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=M.useContext(Vn),u=Bn(),d=e.shouldForwardProp||u.shouldForwardProp,f=yt(t,l,a)||vt,p,m;{let e=M.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Hn.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=qt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Yt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Yt(r.className,t.className)),r}(r,t,f),m=i.generateAndInjectStyles(p,u.styleSheet,u.stylis);let n=0;for(let e in t)Hn.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),_=Yt(o,s);return m&&(_+=` `+m),p.className&&(_+=` `+p.className),g[jt(h)&&h.includes(`-`)?`class`:`className`]=_,n&&(g.ref=n),(0,M.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=M.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Yt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Qt(e,n,!0);return e}({},i.defaultProps,e):e}}),$t(m,()=>`.${m.styledComponentId}`),a&&Kt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Kn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function qn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Jn=e=>(_n.add(e),e);function Yn(e,...t){if(qt(e)||Zt(e))return Jn(kn(qn(_t,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?kn(n):Jn(kn(qn(n,t)))}function Xn(e,t,n=vt){if(!t)throw ut(1,t);let r=(r,...i)=>e(t,n,Yn(r,...i));return r.attrs=r=>Xn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Xn(e,t,Object.assign(Object.assign({},n),r)),r}var Zn=e=>Xn(Gn,e),P=Zn;Kn.forEach(e=>{P[e]=Zn(e)});var Qn=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(qt(n)&&!N(n))return!1}return!0}(e),gn.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Xt(kn(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function $n(e,...t){let n=Yn(e,...t),r=`sc-global-${kt(JSON.stringify(n))}`,i=new Qn(n,r),a=e=>{let t=Bn(),n=M.useContext(Vn),a;{let e=M.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=M.useRef(i);M.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),M.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,lt,n,o);else{let s=Object.assign(Object.assign({},t),{theme:yt(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return M.memo(a)}`${et}`,`${et}`,`${et}`;var er=`/labic2/assets/background_labic-C0SNYuqk.png`,tr=$n`
    :root {
        //--gradient: linear-gradient(90deg, #370e12, #932121, #ff8e44);
        --image: url(${er});
        --blue-1: #16d5ef;
        --blue-2: #17c2cb69;
        --purple-1: #8616ea;
        --purple-2: #78009c;
        --purple-3: #7342f5;
        --purple-4: #8716ea59;
        --white-1: #ffffff7b;
        --white-2: #ffffff;
        --pink-1: #f83efb;
        --yellow-1: #ffde1c;
        --yellow-2: #ffe11b;
        --black: #262626;
        --poppins: 'Poppins', sans-serif;
        --open-sans: 'Open Sans', sans-serif;
    }

    html{
    overflow-y: scroll;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    input {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        line-height: 1;
        background: var(--black);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`,nr=`/labic2/assets/images/labic-logo.png`,rr=`/labic2/assets/icons/email.png`,ir=`modulepreload`,ar=function(e){return`/labic2/`+e},or={},sr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ar(t,n),t=s(t),t in or)return;or[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ir,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},cr=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,lr=/^[\\/]{2}/;function ur(e,t){return t+e.replace(/\\/g,`/`)}var dr=`popstate`;function fr(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function pr(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=yr(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),_r(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:vr(t))}function r(e,t){mr(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return br(t,n,r,e)}function F(e,t){if(e===!1||e==null)throw Error(t)}function mr(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function hr(){return Math.random().toString(36).substring(2,10)}function gr(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function _r(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?yr(t):t,state:n,key:t&&t.key||r||hr(),mask:i}}function vr({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function yr(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function br(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=fr(e)?e:_r(h.location,e,t);n&&n(r,e),l=u()+1;let d=gr(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=fr(e)?e:_r(h.location,e,t);n&&n(r,e),l=u();let i=gr(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return xr(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(dr,d),c=e,()=>{i.removeEventListener(dr,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function xr(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),F(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:vr(t);return i=i.replace(/ $/,`%20`),!n&&lr.test(i)&&(i=r+i),new URL(i,r)}function Sr(e,t,n=`/`){return Cr(e,t,n,!1)}function Cr(e,t,n,r,i){let a=Hr((typeof t==`string`?yr(t):t).pathname||`/`,n);if(a==null)return null;let o=i??wr(e),s=null,c=Vr(a);for(let e=0;s==null&&e<o.length;++e)s=Lr(o[e],c,r);return s}function wr(e){let t=Tr(e);return Dr(t),t}function Tr(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;F(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Xr([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(F(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Tr(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Fr(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Br(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of Er(e.path))a(e,t,!0,n)}),t}function Er(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=Er(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function Dr(e){e.sort((e,t)=>e.score===t.score?Ir(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Or=/^:[\w-]+$/,kr=3,Ar=2,jr=1,Mr=10,Nr=-2,Pr=e=>e===`*`;function Fr(e,t){let n=e.split(`/`),r=n.length;return n.some(Pr)&&(r+=Nr),t&&(r+=Ar),n.filter(e=>!Pr(e)).reduce((e,t)=>e+(Or.test(t)?kr:t===``?jr:Mr),r)}function Ir(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Lr(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?zr(u,l,s.matcher,s.compiledParams):Rr(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Rr({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Xr([a,d.pathname]),pathnameBase:Qr(Xr([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Xr([a,d.pathnameBase]))}return o}function Rr(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Br(e.path,e.caseSensitive,e.end);return zr(e,t,n,r)}function zr(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=Zr(a,1),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=Zr(a.slice(0,a.length-e.length),1)}let i=s[r];return e[t]=n&&!i?void 0:(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Br(e,t=!1,n=!0){mr(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Vr(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return mr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Hr(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Ur(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?yr(e):e,a;return n?(n=Yr(n),a=n.startsWith(`/`)||n.startsWith(`\\`)?Wr(n.substring(1),`/`):Wr(n,t)):a=t,{pathname:a,search:$r(r),hash:ei(i)}}function Wr(e,t){let n=Zr(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Gr(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Kr(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function qr(e){let t=Kr(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Jr(e,t,n,r=!1){let i;typeof e==`string`?i=yr(e):(i={...e},F(!i.pathname||!i.pathname.includes(`?`),Gr(`?`,`pathname`,`search`,i)),F(!i.pathname||!i.pathname.includes(`#`),Gr(`#`,`pathname`,`hash`,i)),F(!i.search||!i.search.includes(`#`),Gr(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ur(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Yr=e=>e.replace(/[\\/]{2,}/g,`/`),Xr=e=>Yr(e.join(`/`));function Zr(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var Qr=e=>Zr(e).replace(/^\/*/,`/`),$r=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ei=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ti=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ni(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ri(e){return Xr(e.map(e=>e.route.path).filter(Boolean))||`/`}var ii=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ai(e,t){let n=e;if(typeof n!=`string`||!cr.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ii)try{let e=new URL(window.location.href),r=lr.test(n)?new URL(ur(n,e.protocol)):new URL(n),a=Hr(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{mr(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var oi=new URL(`http://localhost`);function si(e){if(e.createURL)return e.createURL(`/`);try{return new URL(e.createHref(`/`),oi)}catch{return oi}}function ci(e,t){return e.origin===t.origin&&(e.origin!==`null`||e.protocol===t.protocol&&e.host===t.host)}function li(e,t){if(e.startsWith(`//`))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===``||e.slice(n.length).startsWith(`//`):!1}function ui(e,t,n,r){let i=null;try{i=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=i!=null&&!ci(i,n),s=!ci(a,n);if(r===`reject`){if(o||s)throw Error(`External navigation is not allowed`)}else if(s&&(i==null||!li(e,i)||!ci(i,a)))throw Error(`External navigation is not allowed`)}var di=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(di);var fi=[`GET`,...di];new Set(fi);var I=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function pi(e){try{return I.includes(new URL(e).protocol)}catch{return!1}}var mi=M.createContext(null);mi.displayName=`DataRouter`;var hi=M.createContext(null);hi.displayName=`DataRouterState`;var gi=M.createContext(!1);function _i(){return M.useContext(gi)}var vi=M.createContext({isTransitioning:!1});vi.displayName=`ViewTransition`;var yi=M.createContext(new Map);yi.displayName=`Fetchers`;var bi=M.createContext(null);bi.displayName=`Await`;var xi=M.createContext(null);xi.displayName=`Navigation`;var Si=M.createContext(null);Si.displayName=`Location`;var Ci=M.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName=`Route`;var wi=M.createContext(null);wi.displayName=`RouteError`;var Ti=`REACT_ROUTER_ERROR`,Ei=`REDIRECT`,Di=`ROUTE_ERROR_RESPONSE`;function Oi(e){if(e.startsWith(`${Ti}:${Ei}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ki(e){if(e.startsWith(`${Ti}:${Di}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ti(t.status,t.statusText,t.data)}catch{}}function Ai(e,{relative:t}={}){F(ji(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=M.useContext(xi),{hash:i,pathname:a,search:o}=Li(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Xr([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ji(){return M.useContext(Si)!=null}function Mi(){return F(ji(),`useLocation() may be used only in the context of a <Router> component.`),M.useContext(Si).location}var Ni=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Pi(e){M.useContext(xi).static||M.useLayoutEffect(e)}function Fi(){let{isDataRoute:e}=M.useContext(Ci);return e?Qi():Ii()}function Ii(){F(ji(),`useNavigate() may be used only in the context of a <Router> component.`);let e=M.useContext(mi),{basename:t,navigator:n}=M.useContext(xi),{matches:r}=M.useContext(Ci),{pathname:i}=Mi(),a=JSON.stringify(qr(r)),o=M.useRef(!1);return Pi(()=>{o.current=!0}),M.useCallback((r,s={})=>{if(mr(o.current,Ni),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Jr(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Xr([t,c.pathname])),ui(typeof r==`string`?r:vr(r),n.createHref(c),si(n),`reject`),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}M.createContext(null);function Li(e,{relative:t}={}){let{matches:n}=M.useContext(Ci),{pathname:r}=Mi(),i=JSON.stringify(qr(n));return M.useMemo(()=>Jr(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ri(e,t){return zi(e,t)}function zi(e,t,n){F(ji(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=M.useContext(xi),{matches:i}=M.useContext(Ci),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;ea(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=Mi(),d;if(t){let e=typeof t==`string`?yr(t):t;F(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):Sr(e,{pathname:p});mr(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),mr(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ki(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Xr([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Xr([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?M.createElement(Si.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function Bi(){let e=R(),t=ni(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=M.createElement(M.Fragment,null,M.createElement(`p`,null,`💿 Hey developer 👋`),M.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,M.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,M.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),M.createElement(M.Fragment,null,M.createElement(`h2`,null,`Unexpected Application Error!`),M.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?M.createElement(`pre`,{style:i},n):null,o)}var Vi=M.createElement(Bi,null),Hi=class extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ki(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:M.createElement(Ci.Provider,{value:this.props.routeContext},M.createElement(wi.Provider,{value:e,children:this.props.component}));return this.context?M.createElement(Wi,{error:e},t):t}};Hi.contextType=gi;var Ui=new WeakMap;function Wi({children:e,error:t}){let{basename:n,navigator:r}=M.useContext(xi);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Oi(t.digest);if(e){let i=Ui.get(t);if(i)throw i;let a=ai(e.location,n),o=a.absoluteURL||a.to;if(ui(e.location,o,si(r),`allow-explicit`),pi(o))throw Error(`Invalid redirect location`);if(ii&&!Ui.get(t)){if(a.isExternal||e.reloadDocument)window.location.href=o;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:e.replace}));throw Ui.set(t,n),n}}return M.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${o}`})}}return e}function Gi({routeContext:e,match:t,children:n}){let r=M.useContext(mi);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),M.createElement(Ci.Provider,{value:e},n)}function Ki(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);F(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:ri(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Vi,o&&(s<0&&c===0?(ea(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?M.createElement(n.route.Component,null):n.route.element?n.route.element:e,M.createElement(Gi,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?M.createElement(Hi,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function qi(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ji(e){let t=M.useContext(mi);return F(t,qi(e)),t}function Yi(e){let t=M.useContext(hi);return F(t,qi(e)),t}function Xi(e){let t=M.useContext(Ci);return F(t,qi(e)),t}function Zi(e){let t=Xi(e),n=t.matches[t.matches.length-1];return F(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function L(){return Zi(`useRouteId`)}function R(){let e=M.useContext(wi),t=Yi(`useRouteError`),n=Zi(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Qi(){let{router:e}=Ji(`useNavigate`),t=Zi(`useNavigate`),n=M.useRef(!1);return Pi(()=>{n.current=!0}),M.useCallback(async(r,i={})=>{mr(n.current,Ni),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var $i={};function ea(e,t,n){!t&&!$i[e]&&($i[e]=!0,mr(!1,n))}M.memo(ta);function ta({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return zi(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function na(e){F(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function ra({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){F(!ji(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=M.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=yr(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=M.useMemo(()=>{let e=Hr(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return mr(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:M.createElement(xi.Provider,{value:c},M.createElement(Si.Provider,{children:t,value:h}))}function ia({children:e,location:t}){return Ri(aa(e),t)}M.Component;function aa(e,t=[]){let n=[];return M.Children.forEach(e,(e,r)=>{if(!M.isValidElement(e))return;let i=[...t,r];if(e.type===M.Fragment){n.push.apply(n,aa(e.props.children,i));return}F(e.type===na,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),F(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=aa(e.props.children,i)),n.push(a)}),n}var oa=`get`,sa=`application/x-www-form-urlencoded`;function ca(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function la(e){return ca(e)&&e.tagName.toLowerCase()===`button`}function ua(e){return ca(e)&&e.tagName.toLowerCase()===`form`}function da(e){return ca(e)&&e.tagName.toLowerCase()===`input`}function fa(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pa(e,t){return e.button===0&&(!t||t===`_self`)&&!fa(e)}var ma=null;function ha(){if(ma===null)try{new FormData(document.createElement(`form`),0),ma=!1}catch{ma=!0}return ma}var ga=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function _a(e){return e!=null&&!ga.has(e)?(mr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sa}"`),null):e}function va(e,t){let n,r,i,a,o;if(ua(e)){let o=e.getAttribute(`action`);r=o?Hr(o,t):null,n=e.getAttribute(`method`)||oa,i=_a(e.getAttribute(`enctype`))||sa,a=new FormData(e)}else if(la(e)||da(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Hr(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||oa,i=_a(e.getAttribute(`formenctype`))||_a(o.getAttribute(`enctype`))||sa,a=new FormData(o,e),!ha()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(ca(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=oa,r=null,i=sa,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);function ya(e,t){if(e===!1||e==null)throw Error(t)}function ba(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return i.pathname=n?i.pathname.endsWith(`/`)?`${i.pathname}_.${r}`:`${i.pathname}.${r}`:i.pathname===`/`?`_root.${r}`:t&&Hr(i.pathname,t)===`/`?`${Zr(t)}/_root.${r}`:`${Zr(i.pathname)}.${r}`,i}async function xa(e,t){if(e.id in t)return t[e.id];try{let n=await sr(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sa(e){return e!=null&&typeof e.page==`string`}function Ca(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function wa(e,t,n){return ka((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await xa(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(Ca).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function Ta(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function Ea(e,t,{includeHydrateFallback:n}={}){return Da(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Da(e){return[...new Set(e)]}function Oa(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function ka(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Sa(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Oa(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function z(){let e=M.useContext(mi);return ya(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Aa(){let e=M.useContext(hi);return ya(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var ja=M.createContext(void 0);ja.displayName=`FrameworkContext`;function Ma(){let e=M.useContext(ja);return ya(e,`You must render this element inside a <HydratedRouter> element`),e}function Na(e,t){let n=M.useContext(ja),[r,i]=M.useState(!1),[a,o]=M.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=M.useRef(null);M.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),M.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Pa(s,p),onBlur:Pa(c,m),onMouseEnter:Pa(l,p),onMouseLeave:Pa(u,m),onTouchStart:Pa(d,p)}]:[a,f,{}]:[!1,f,{}]}function Pa(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Fa({page:e,...t}){let n=_i(),{nonce:r}=Ma(),{router:i}=z(),a=M.useMemo(()=>Sr(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?M.createElement(La,{page:e,matches:a,...t}):M.createElement(Ra,{page:e,matches:a,...t})):null}function Ia(e){let{manifest:t,routeModules:n}=Ma(),[r,i]=M.useState([]);return M.useEffect(()=>{let r=!1;return wa(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function La({page:e,matches:t,...n}){let r=Mi(),{future:i}=Ma(),{basename:a}=z(),o=M.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ba(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return M.createElement(M.Fragment,null,o.map(e=>M.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Ra({page:e,matches:t,...n}){let r=Mi(),{future:i,manifest:a,routeModules:o}=Ma(),{basename:s}=z(),{loaderData:c,matches:l}=Aa(),u=M.useMemo(()=>Ta(e,t,l,a,r,`data`),[e,t,l,a,r]),d=M.useMemo(()=>Ta(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=M.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=ba(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=M.useMemo(()=>Ea(d,a),[d,a]),m=Ia(d);return M.createElement(M.Fragment,null,f.map(e=>M.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>M.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>M.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function za(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}M.Component;var Ba=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Ba&&(window.__reactRouterVersion=`7.18.3`)}catch{}function Va({basename:e,children:t,useTransitions:n,window:r}){let i=M.useRef();i.current??=pr({window:r,v5Compat:!0});let a=i.current,[o,s]=M.useState({action:a.action,location:a.location}),c=M.useCallback(e=>{n===!1?s(e):M.startTransition(()=>s(e))},[n]);return M.useLayoutEffect(()=>a.listen(c),[a,c]),M.createElement(ra,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var Ha=M.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=M.useContext(xi),v=typeof l==`string`&&cr.test(l),y=ai(l,h);l=y.to;let b=Ai(l,{relative:r}),x=Mi(),S=null;if(o){let e=Jr(o,[],x.mask?x.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Xr([h,e.pathname])),S=g.createHref(e)}let[C,w,T]=Na(n,p),ee=qa(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||ee(t)}let D=!(y.isExternal||i),O=M.createElement(`a`,{...p,...T,href:(D?S:void 0)||y.absoluteURL||b,onClick:D?E:e,ref:za(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?M.createElement(M.Fragment,null,O,M.createElement(Fa,{page:b})):O});Ha.displayName=`Link`;var Ua=M.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Li(a,{relative:c.relative}),d=Mi(),f=M.useContext(hi),{navigator:p,basename:m}=M.useContext(xi),h=f!=null&&Qa(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Hr(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,x=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:x,isTransitioning:h},C=b?e:void 0,w;w=typeof n==`function`?n(S):[n,b?`active`:null,x?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return M.createElement(Ha,{...c,"aria-current":C,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Ua.displayName=`NavLink`;var Wa=M.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=oa,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=M.useContext(xi),g=Xa(),_=Za(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&cr.test(s);return M.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?M.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Wa.displayName=`Form`;function Ga(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ka(e){let t=M.useContext(mi);return F(t,Ga(e)),t}function qa(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=Fi(),d=Mi(),f=Li(e,{relative:o});return M.useCallback(p=>{if(pa(p,t)){p.preventDefault();let t=n===void 0?vr(d)===vr(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?M.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ja=0,Ya=()=>`__${String(++Ja)}__`;function Xa(){let{router:e}=Ka(`useSubmit`),{basename:t}=M.useContext(xi),n=L(),r=e.fetch,i=e.navigate;return M.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=va(e,t);if(a.navigate===!1){let e=a.fetcherKey||Ya();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Za(e,{relative:t}={}){let{basename:n}=M.useContext(xi),r=M.useContext(Ci);F(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Li(e||`.`,{relative:t})},o=Mi();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Xr([n,a.pathname])),vr(a)}function Qa(e,{relative:t}={}){let n=M.useContext(vi);F(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ka(`useViewTransitionState`),i=Li(e,{relative:t});if(!n.isTransitioning)return!1;let a=Hr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Hr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Rr(i.pathname,o)!=null||Rr(i.pathname,a)!=null}var $a=P(Ha)`
    text-decoration: none;
`,eo=P.img`
    width: 15rem;
    height: 5.5rem;
`,to=P.div`
    display: flex;

    @media (max-width: 820px) {
        justify-content: flex-start;
        align-items: flex-start;
        margin-right: 50px;
    }
`,no=P.figure`
    justify-self: flex-start;
`,ro=P.div`
    display: flex;
    padding: 3rem 6rem;
    justify-content: space-between;
    align-items: center;
    height: 30vh;
    background-color: var(--black);
    margin-top: 1rem;

    @media (max-width: 820px) {
        flex-direction: column;
        gap: 2rem;
        height: auto;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
`,io=P.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`,ao=P.text`
    font-family: var(--poppins);
    font-style: normal;
    font-weight: 275;
    font-size: 20px;
    line-height: 180%;
    color: #FFFFFF;
`,oo=P.a`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    text-decoration: none;

    cursor: pointer;
`,so=P.img`
    width: 2rem;

    @media (max-width: 540px) {
        width: 1.5rem;
    }

    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`,co=P.nav`
    @media (max-width: 820px) {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 540px) {
        width: auto;
    }
`,lo=P.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`,uo=P.li`
    width: 1rem;

    &:nth-child(1) {
        width: 2.5rem;
        @media (max-width: 540px) {
            width: 2rem;
        }
    }

    &:nth-child(2) {
        width: 2rem;
        @media (max-width: 540px) {
            width: 1.75rem;
        }
    }

    &:nth-child(3) {
        width: 1.75rem;
        @media (max-width: 540px) {
            width: 1.5rem;
        }
    }
`,fo=P.a`
    text-decoration: none;
`,po=P.img`
    width: 100%;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`,mo=P.p`
    font-family: var(--open-sans);
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: 500;
    transition: text-shadow 0.2s;

    &:hover {
        text-shadow: 0 0 0.5rem #ffffff;
    }
`,ho=`/labic2/assets/icons/youtube.png`,go=`/labic2/assets/icons/instagram.png`,_o=`/labic2/assets/icons/facebook.png`,vo=s((e=>{var t=p(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),B=s(((e,t)=>{t.exports=vo()}))(),yo=()=>(0,B.jsxs)(ro,{children:[(0,B.jsx)(to,{children:(0,B.jsx)($a,{to:`/`,children:(0,B.jsx)(no,{children:(0,B.jsx)(eo,{src:nr,alt:`logo`})})})}),(0,B.jsxs)(io,{children:[(0,B.jsx)(ao,{children:`Fale com a gente:`}),(0,B.jsxs)(oo,{href:`labicbrasil2024@gmail.com.br`,target:`_blank`,children:[(0,B.jsx)(so,{src:rr,alt:`email`}),(0,B.jsx)(mo,{children:`labicbrasil2024@gmail.com.br`})]}),(0,B.jsx)(co,{children:(0,B.jsxs)(lo,{children:[(0,B.jsx)(uo,{children:(0,B.jsx)(fo,{href:`https://www.youtube.com/user/pontaodaeco`,target:`_blank`,children:(0,B.jsx)(po,{src:ho,alt:`YouTube`})})}),(0,B.jsx)(uo,{children:(0,B.jsx)(fo,{href:`https://www.instagram.com/pontaodaeco`,target:`_blank`,children:(0,B.jsx)(po,{src:go,alt:`Instagram`})})}),(0,B.jsx)(uo,{children:(0,B.jsx)(fo,{href:`https://www.facebook.com/pontaodaeco`,target:`_blank`,children:(0,B.jsx)(po,{src:_o,alt:`Facebook`})})})]})})]})]}),bo={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xo=M.createContext&&M.createContext(bo),So=[`attr`,`size`,`title`];function Co(e,t){if(e==null)return{};var n=wo(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function wo(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},To.apply(this,arguments)}function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Do(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Eo(Object(n),!0).forEach(function(t){Oo(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Oo(e,t,n){return t=ko(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ko(e){var t=Ao(e,`string`);return typeof t==`symbol`?t:t+``}function Ao(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function V(e){return e&&e.map((e,t)=>M.createElement(e.tag,Do({key:t},e.attr),V(e.child)))}function jo(e){return t=>M.createElement(Mo,To({attr:Do({},e.attr)},t),V(e.child))}function Mo(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Co(e,So),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),M.createElement(`svg`,To({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Do(Do({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&M.createElement(`title`,null,i),e.children)};return xo===void 0?t(bo):M.createElement(xo.Consumer,null,e=>t(e))}function No(e){return jo({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z`},child:[]}]})(e)}function Po(e){return jo({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeMiterlimit:`10`,strokeWidth:`48`,d:`M88 152h336M88 256h336M88 360h336`},child:[]}]})(e)}var Fo=P.header`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    border-bottom: 0.4rem solid #ffffff;
    background-color: var(--black);
    gap: 1rem;
    padding: 2rem 0rem 0.5rem 5%;

    @media (max-width: 859px) {
        height: auto;
        justify-content: space-between;
        padding-right: 3rem;
    }
`,Io=P.figure``,Lo=P.img`
    width: 9.8rem;
    height: 4.3rem;
    
`,Ro=P.nav`
    font-family: var(--poppins);
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
    display: none;
`,zo=P.ul`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    list-style: none;
    flex-wrap: nowrap;
    overflow-x: hide;
    height: stretch;
    font-family: var(--poppins);
    flex-direction: row;
    width: 80%;
    margin-top: 1rem;

    @media (max-width: 859px) {
        display: none;
    }
`,Bo=P.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2rem;
    
    @media (min-width: 860px){
        display: none;
    }
`,Vo=P.li`
    text-align: center;
`,Ho=P(Ha)`
    text-decoration: none;
    font-family: 'arial';
    font-style: normal;
    font-size: 1rem;
    transition: text-shadow 0.3s, background-color 0.3s ease, color 0.3s ease;
    color: #ffffff;
    padding: 0.55rem 0.8rem;

    ${({$isLive:e})=>e&&`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px;
        background: #EDB04E;
        border-radius: 8px;
        color: var(--black);
        `}

    &:hover {
        text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
    }

    @media (max-width: 1004px) {
        font-size: 0.9rem;
    }

    @media (max-width: 920px) {
        font-size: 0.8rem;
    }
`,Uo=P.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    text-align: left;
    position: fixed;
    bottom: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    transform: ${({isOpen:e})=>e?`translateX(0)`:`translateX(100%)`};
    z-index: 10;
    height: 100vh;
    width: 15%;
    min-width: 150px;
    font-family: var(--poppins);
    font-size: 0.75rem;
    border-left: 0.2rem solid #ffffff;
    @media (min-width: 860px){
        display: none;
    }
`,Wo=P(Po)`
    font-size: 3rem;
    color: #ffffff;
    cursor: pointer;

    @media (min-width: 860px) {
        display: none;
    }
`,Go=P(No)`
    font-size: 4rem;
    color: #ffffff;
    z-index: 20;
    top: 1rem;
    right: 1rem;
    position: fixed;
    cursor: pointer;

    @media (min-width: 1400px) {
        display: none;
    }
`,Ko=`/labic2/assets/labic%202%20biomas-Cr72pmSC.png`,qo=()=>{let[e,t]=(0,M.useState)(!1);(0,M.useEffect)(()=>{e?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`},[e]);let n=[{name:`Ao Vivo`,path:`/site-labic/live`},{name:`O Projeto`,path:`/site-labic/the-project`},{name:`Inscrições`,path:`https://forms.gle/JkxXue6jCF4g5R8K7`},{name:`Programação`,path:`/site-labic/scheduling`},{name:`Edições Anteriores`,path:`/site-labic/previous-editions`},{name:`Parceiros`,path:`/site-labic/parceiros`},{name:`Materiais`,path:`/site-labic/material`}];return(0,B.jsxs)(Fo,{isOpen:e,children:[(0,B.jsx)(Io,{children:(0,B.jsx)(Ho,{as:Ha,to:n[0].path,children:(0,B.jsx)(Lo,{src:Ko,alt:`Logo`})})}),(0,B.jsx)(zo,{children:n.map((e,n)=>{let r=e.name===`Ao Vivo`;return(0,B.jsx)(Vo,{children:(0,B.jsx)(Ho,{as:Ha,to:e.path,$isLive:r,onClick:()=>t(!0),children:e.name})},n)})}),(0,B.jsx)(Wo,{onClick:()=>t(!e)}),(0,B.jsxs)(Uo,{isOpen:e,children:[(0,B.jsx)(Bo,{children:n.map((e,n)=>{let r=e.name===`Ao Vivo`;return(0,B.jsx)(Vo,{children:(0,B.jsx)(Ho,{as:Ha,to:e.path,$isLive:r,onClick:()=>t(!1),children:e.name})},n)})}),e&&(0,B.jsx)(Go,{onClick:()=>t(!e)})]}),(0,B.jsx)(Ro,{children:(0,B.jsx)(Bo,{children:n.map((e,t)=>(0,B.jsx)(Vo,{children:(0,B.jsx)(Ho,{as:Ha,to:e.path,$isLive:e.name===`Ao Vivo`,children:e.name})},t))})})]})},Jo=P.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem 4rem 10rem 3rem;
    width: 100%;
    gap: 2rem;
    position: relative;
    overflow: hidden;
    background-image: url(${`/labic2/assets/HOME%20BIOMAS-WKFhdnzZ.png`});
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-size: cover;
    filter: drop-shadow(5px 20px 50px rgba(0, 0, 0, 0.5));

    @media (max-width: 1250px) {
        background-size: 1250px;
    }

    @media (max-width: 540px) {
        gap: 0.5rem;
    }
`,Yo=P.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;

    @media (max-width: 1448px) {
        padding-left: 10px;
    }

    @media (max-width: 540px) {
        width: 100%;
        padding-left: 0;
    }
`,Xo=P.p`
    font-family: var(--poppins);
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--black);
    max-width: 350px;
    line-height: 22px;

    @media (max-width: 1448px) {
        text-align: left;
        width: 100%;
        max-width: 250px;
        font-size: 1rem;
    }
`,Zo=P.p`
    font-family: var(--poppins);
    font-size: 1.4rem;
    color: var(--black);
    font-weight: bold;
    max-width: 350px;
    line-height: 22px;

    @media (max-width: 1448px) {
        text-align: left;
        width: 100%;
        max-width: 250px;
        font-size: 1rem;
    }
`,Qo=P.a`
  text-decoration: none;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  transition: text-shadow 0.3s;
  color: white;
  font-weight: 900;
  font-family: var(--poppins);

  &:hover {
    text-shadow: 0 0 2rem rgba(255, 255, 255, 1);
  }

  @media (max-width: 587px) {
    text-align: center;
    font-size: 1.2rem;
  }
`,$o=P.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;

    @media (max-width: 1400px) {
        flex-direction: column;
        gap: 2rem;
    }
    @media (max-width: 540px) {
        width: 100%;
        padding: 0;
    }
`;P.li`
    @media (max-width: 1400px) {
        text-align: center;
    }
`;var es=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 0.75rem;
    transition: transform 0.5s;
    background-color: #BE4425;
    max-width: 800px;
    max-height: 150px;
    padding: 0.7rem 4rem;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.8);
    }
`,ts=P.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 2.2rem;

    @media (max-width: 1448px) {
        justify-content: space-between;
        gap: 1rem;
    }
    @media (max-width: 540px) {
        width: 100%;
        padding: 3rem 0;
    }
`,ns=P.figure`
    display: flex;
    justify-content: center;
    align-items: center;
  

    @media (max-width: 1448px) {
        width: 100%;
    }
    @media (max-width: 540px) {
        width: 100%;
        padding: 0;
    }
`,rs=P.img`
    width: 515px;
    height: 223px;

    @media (max-width: 540px) {
        width: 100%;
        height: auto;
    }
`;P.h2`
    font-family: var(--open-sans);
    font-size: 1.6rem;
    font-weight: bold;
    color: #ffffff;
    background-color: var(--pink-1);
    padding: 1rem 2rem;
    text-align: center;

    @media (max-width: 1448px) {
        font-size: 1.5rem;
        padding: 1rem 0.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;var is=P.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    width: 100%;

    @media (max-width: 1448px) {
        margin: 1rem;
    }
`;P.nav`
    width: 33.3%;

    @media (max-width: 1448px) {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 540px) {
        width: auto;
    }
`,P.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`,P.li`
    width: 1rem;

    &:nth-child(1) {
        width: 2.5rem;
        @media (max-width: 540px) {
            width: 2rem;
        }
    }

    &:nth-child(2) {
        width: 2rem;
        @media (max-width: 540px) {
            width: 1.75rem;
        }
    }

    &:nth-child(3) {
        width: 1.75rem;
        @media (max-width: 540px) {
            width: 1.5rem;
        }
    }
`,P.a`
    text-decoration: none;
`,P.img`
    width: 100%;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`;var as=P.figure`
    display: flex;
    justify-content: center;
    align-items: center;
`,os=P.img`
    width: 6rem;

    @media (max-width: 540px) {
        width: 3rem;
    }
`;P.div`
    width: 33.3%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 1448px) {
        justify-content: center;
    }

    @media (max-width: 540px) {
        width: auto;
    }

    &:first-child {
        order: 2;
    }
`;var ss=`/labic2/assets/LOGO_BIOMAS-DDT4pfcK.png`,cs=`/labic2/assets/images/arrow-down.gif`,ls=()=>{let e=[{name:`INSCRIÇÕES ABERTAS`,path:`https://forms.gle/JkxXue6jCF4g5R8K7`}],[t,n]=(0,M.useState)(!1);return(0,M.useEffect)(()=>{t?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`},[t]),(0,B.jsxs)(Jo,{children:[(0,B.jsxs)(ts,{children:[(0,B.jsx)(ns,{children:(0,B.jsx)(rs,{src:ss,alt:`Banner`})}),(0,B.jsxs)(Yo,{children:[(0,B.jsx)(Xo,{children:`Inscrições abertas para a Rede de Formação que reúne lideranças, pesquisadores e comunicadores para`}),(0,B.jsx)(Zo,{children:`transformar a cultura digital nos territórios brasileiros.`})]})]}),(0,B.jsxs)(is,{children:[(0,B.jsx)(as,{children:(0,B.jsx)(os,{src:cs,alt:`Seta para baixo`})}),(0,B.jsx)(es,{children:(0,B.jsx)($o,{children:e.map(e=>(0,B.jsx)(Qo,{href:e.path,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>n(!1),children:e.name}))})})]})]})},us=P.div`
    width: 100%;
    background-color: ${e=>e.backgroundColor};
    color: ${e=>e.color};
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`,ds=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: ${e=>e.color};
    width: ${e=>e.width};

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`,H=({text:e,color:t,backgroundColor:n,textWidth:r})=>(0,B.jsx)(us,{color:t,backgroundColor:n,children:(0,B.jsx)(ds,{width:r,color:t,children:e})}),fs=`/labic2/assets/fundo%201-B_2Lvxe6.png`,ps=P.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding-bottom: 4rem;
    overflow-x: hidden;
    background-image: url(${fs});
`,ms=P.div`
    width: 40rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px;
    border-color: black;

    @media (max-width: 768px) {
        width: 30rem;
        height: 30rem;
    }

    @media (max-width: 540px) {
        width: 20rem;
        height: 20rem;
    }
`;P.p`
    font-size: 3rem;
    font-weight: 700;
    font-family: var(--open-sans);
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;var hs=()=>(0,B.jsxs)(ps,{children:[(0,B.jsx)(H,{text:`Estamos Ao Vivo`,backgroundColor:`var(--white-1)`}),(0,B.jsx)(ms,{children:(0,B.jsx)(`iframe`,{width:`1000rem`,height:`400rem`,src:`https://www.youtube.com/embed/MpB-VX9KyCs?si=VfLZgrefJW9enjGz`,title:`YouTube video player`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,referrerPolicy:`strict-origin-when-cross-origin`,allowFullScreen:!0})})]}),gs=P.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--gradient); 
    position: relative;
    overflow: hidden;

    @media (max-width: 540px) {
        gap: 0;
    }
`,_s=P.div`
    position: relative;
    overflow: hidden;
    padding-top: 2rem;
`,vs=P.div`
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    position: relative;
`,ys=P.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
        flex-basis: 100%;
    }
`,bs=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #ffffff;
    border-radius: 0.5rem;
    width: 40rem;

    @media (max-width: 768px) {
        width: 80%;
    }
`,xs=P.h2`
    text-align: center;
    font-family: var(--poppins);
    font-size: 1.8rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
    }

    @media (max-width: 320px) {
        font-size: 1.2rem;
    }
`,Ss=P.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--blue-1);
    font-family: var(--open-sans);
    font-size: 1.4rem;
    line-height: 1.4;
    padding: 3rem;

    @media (max-width: 768px) {
        padding: 2rem;
        font-size: 1.2rem;
    }

    @media (max-width: 540px) {
        padding: 1rem;
        font-size: 1rem;
    }
`,Cs=P.h3`
    text-align: center;
    font-family: var(--open-sans);
    font-size: 1.4rem;
    font-weight: 600;
`,ws=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Ts=P.p`
    color: ${({color:e})=>e};
    font-family: var(--open-sans);
    font-size: ${({fontSize:e})=>e};
    font-weight: ${({fontWeight:e})=>e};
`,Es=P.img`
    width: ${({width:e})=>e};
    height: ${({height:e})=>e};
`,Ds=P.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border: none;
    border-radius: 1.5rem;
    color: ${({color:e})=>e};
    background-color: ${({backgroundColor:e})=>e||`#FFFFFF`};
    font-size: ${({fontSize:e})=>e};
    font-weight: ${({fontWeight:e})=>e};
    font-family: var(--open-sans);
    cursor: ${({disabled:e})=>e?`not-allowed`:`pointer`};
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.8);
    }

    padding: ${({size:e})=>{switch(e){case`small`:return`0.5rem 1.5rem`;case`large`:return`1.5rem 4.5rem`;default:return`1rem 3rem`}}};
`,Os=({disabled:e,text:t,size:n,icon:r,backgroundColor:i,url:a})=>(0,B.jsx)(ws,{children:(0,B.jsxs)(Ds,{disabled:e,color:t.color,backgroundColor:i,size:n,fontSize:t.fontSize,fontWeight:t.fontWeight,onClick:()=>{a&&!e&&window.open(a,`_blank`)},children:[r&&r.position===`left`&&(0,B.jsx)(Es,{src:r.url,width:r.width,height:r.height}),(0,B.jsx)(Ts,{color:t.color,fontSize:t.fontSize,fontWeight:t.fontWeight,children:t.value}),r&&r.position===`right`&&(0,B.jsx)(Es,{src:r.url,width:r.width,height:r.height})]})}),ks=P.div``,As=P.img`
    position: absolute;
    left: 280px;
    bottom: 100px;
    width: 12rem;
    transform: rotate(120deg);
    z-index: 1;

    @media (max-width: 768px) {
        display: none;
    }
`,js=P.img`
    position: absolute;
    left: 100px;
    top: 200px;
    z-index: 2;
    width: 6rem;
    transform: rotate(120deg);

    @media (max-width: 768px) {
        display: none;
    }
`,Ms=P.img`
    position: absolute;
    right: -700px;
    top: -200px;
    z-index: 1;
    width: 80rem;
    transform: rotate(60deg);

    @media (max-width: 768px) {
        display: none;
    }
`,Ns=P.img`
    position: absolute;
    right: 350px;
    top: 180px;
    z-index: 2;
    width: 7.5rem;
    transform: rotate(45deg);

    @media (max-width: 768px) {
        display: none;
    }
`;P.img`
    position: absolute;
    left: -450px;
    bottom: 5px;
    z-index: 1;
    width: 30rem;
`,P.img`
    position: absolute;
    right: -120px;
    top: 130px;
    z-index: 1;
    width: 15rem;
    transform: rotate(270deg);
`,P.img`
    position: absolute;
    right: -240px;
    top: 150px;
    z-index: 1;
    width: 20rem;
    transform: rotate(200deg);
`;var Ps=P.img`
    position: absolute;
    left: -700px;
    bottom: 500px;
    z-index: 1;
    width: 80rem;
    transform: rotate(250deg);
    @media (max-width: 768px) {
        display: none;
    }
`;P.img`
    position: absolute;
    right: -200px;
    bottom: 0;
    z-index: -1;
    width: 60rem;

    @media (max-width: 768px) {
        display: none;
    }
`,P.img`
    position: absolute;
    z-index: -1;
    left: -160px;
    bottom: 0;
    width: 60rem;

    @media (max-width: 768px) {
        display: none;
    }
`;var Fs=P.img`
    position: absolute;
    right: -70px;
    top: 50px;
    width: 8.5rem;
    z-index: 1;
`,Is=P.img`
    position: absolute;
    left: -20px;
    bottom: 60px;
    width: 6rem;
    z-index: 1;
`,Ls=P.img`
    position: absolute;
    width: 25rem;
    top: -120px;
    right: -300px;
    transform: rotate(160deg);
`,Rs=P.img`
    position: absolute;
    width: 20rem;
    top: 50px;
    left: -250px;
`,zs=P.img`
    position: absolute;
    width: 20rem;
    top: 420px;
    left: -280px;
    transform: rotate(180deg);
`,Bs=P.img`
    position: absolute;
    width: 12rem;
    top: -90px;
    right: 40px;
    transform: rotate(180deg);
`,Vs=P.img`
    position: absolute;
    width: 7.5rem;
    bottom: 20px;
    right: 20px;
`,Hs=P.img`
    position: absolute;
    width: 4rem;
    bottom: 20px;
    right: 150px;
`,Us=P.img`
    position: absolute;
    width: 20rem;
    bottom: -50px;
    left: -200px;
    transform: rotate(300deg);
`,Ws=P.img`
    position: absolute;
    width: 10rem;
    bottom: -75px;
    left: -10px;
`,Gs=P.img`
    position: absolute;
    width: 14rem;
    left: -160px;
    transform: rotate(120deg);
`,Ks=P.img`
    position: absolute;
    width: 12.5rem;
    right: 50%;
    bottom: -120px;
    transform: translateX(50%);
`,qs=P.img`
    position: absolute;
    width: 20rem;
    bottom: -150px;
    right: -160px;
    transform: rotate(210deg);
`,Js=P.img`
    position: absolute;
    width: 20rem;
    bottom: -20px;
    left: -100px;
`,Ys=P.img`
    position: absolute;
    width: 20rem;
    bottom: 250px;
    left: -150px;
    transform: rotate(90deg);
`,Xs=P.img`
    position: absolute;
    width: 20rem;
    bottom: 50px;
    right: -220px;
`,Zs=P.img`
    position: absolute;
    width: 15rem;
    bottom: 100px;
    left: -120px;
`,Qs=P.img`
    position: absolute;
    width: 7.5rem;
    top: 450px;
    right: 5px;
`,$s=P.img`
    position: absolute;
    width: 12.5rem;
    top: 300px;
    right: -80px;
`,ec=P.img`
    position: absolute;
    width: 20rem;
    bottom: 10px;
    left: -200px;
    transform: rotate(320deg);
`,tc=P.img`
    position: absolute;
    width: 10rem;
    bottom: 10px;
    left: -90px;
    transform: rotate(40deg);
`,nc=P.img`
    position: absolute;
    width: 10rem;
    top: 30px;
    right: -40px;
`,rc=P.img`
    position: absolute;
    width: 10rem;
    bottom: -65px;
    right: -10px;

    @media (max-width: 1080px) {
        right: -30px;
        bottom: -100px;
    }
`,ic=P.img`
    position: absolute;
    width: 20rem;
    top: 10px;
    left: -220px;
    transform: rotate(-15deg);
`,ac=P.img`
    position: absolute;
    width: 20rem;
    top: 0;
    right: -200px;

    @media (max-width: 768px) {
        display: none;
    }
`,oc=P.img`
    position: absolute;
    width: 30rem;
    bottom: 30px;
    left: -450px;
`,sc=P.img`
    position: absolute;
    width: 10rem;
    top: 70px;
    right: -50px;
`,cc=P.img`
    position: absolute;
    width: 5rem;
    top: 200px;
    right: 40px;
`,lc=P.img`
    position: absolute;
    width: 5rem;
    top: 50px;
    left: -10px;
`,uc=P.img`
    position: absolute;
    width: 7.5rem;
    bottom: 10px;
    left: -50px;
`,dc=P.img`
    position: absolute;
    width: 30rem;
    left: -400px;
    top: 50%;
`,fc=P.img`
    position: absolute;
    width: 15rem;
    right: -100px;
`,pc=P.img`
    position: absolute;
    width: 5rem;
    top: 52.5%;
    left: 20px;
    transform: rotate(-120deg);
`,mc=P.img`
    position: absolute;
    width: 10rem;
    bottom: 40px;
    left: -30px;
`,hc=P.img`
    position: absolute;
    width: 25rem;
    top: 45%;
    right: -220px;
    transform: rotate(160deg);
`,gc=P.img`
    position: absolute;
    width: 20rem;
    top: 37.5%;
    left: -190px;
    transform: rotate(-40deg);
`,_c=P.img`
    position: absolute;
    width: 7.5rem;
    right: -80px;
    top: 57.5%;
`,U=`/labic2/assets/images/F2025/3.png`,W=`/labic2/assets/images/F2025/linhanova.png`,vc=`/labic2/assets/images/pixels.png`,G=({page:e,section:t})=>(()=>{if(e===`Home`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(As,{src:U,alt:`Imagem 1`}),(0,B.jsx)(js,{src:U,alt:`Imagem 01`}),(0,B.jsx)(Ms,{src:W,alt:`Imagem 2`}),(0,B.jsx)(Ns,{src:U,alt:`Imagem 3`}),(0,B.jsx)(Ps,{src:W,alt:`Imagem 7`})]});if(e===`TheProject`&&t==`One`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(Fs,{src:U,alt:`Imagem 10`}),(0,B.jsx)(Is,{src:U,alt:`Imagem 11`}),(0,B.jsx)(Ls,{src:W,alt:`Imagem 12`}),(0,B.jsx)(Rs,{src:W,alt:`Imagem 13`}),(0,B.jsx)(zs,{src:vc,alt:`Imagem 14`})]});if(e===`TheProject`&&t==`Two`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(Bs,{src:U,alt:`Imagem 15`}),(0,B.jsx)(Vs,{src:U,alt:`Imagem 16`}),(0,B.jsx)(Hs,{src:U,alt:`Imagem 17`}),(0,B.jsx)(Us,{src:W,alt:`Imagem 18`}),(0,B.jsx)(Ws,{src:U,alt:`Imagem 19`})]});if(e===`TheProject`&&t==`Three`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(Gs,{src:U,alt:`Imagem 20`}),(0,B.jsx)(Ks,{src:U,alt:`Imagem 21`}),(0,B.jsx)(qs,{src:W,alt:`Imagem 22`}),(0,B.jsx)(Js,{src:vc,alt:`Imagem 23`})]});if(e===`TheProject`&&t==`Five`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(Ys,{src:vc,alt:`Imagem 27`}),(0,B.jsx)(Xs,{src:vc,alt:`Imagem 28`}),(0,B.jsx)(Zs,{src:U,alt:`Imagem 24`}),(0,B.jsx)(Qs,{src:U,alt:`Imagem 25`}),(0,B.jsx)($s,{src:U,alt:`Imagem 26`}),(0,B.jsx)(ec,{src:W,alt:`Imagem 29`})]});if(e===`TheProject`&&t==`Six`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(tc,{src:U,alt:`Imagem 30`}),(0,B.jsx)(nc,{src:U,alt:`Imagem 31`}),(0,B.jsx)(rc,{src:U,alt:`Imagem 32`}),(0,B.jsx)(ic,{src:W,alt:`Imagem 33`})]});if(e===`Registrations`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(ac,{src:vc,alt:`Imagem 34`}),(0,B.jsx)(oc,{src:vc,alt:`Imagem 35`}),(0,B.jsx)(sc,{src:U,alt:`Imagem 36`}),(0,B.jsx)(cc,{src:U,alt:`Imagem 37`}),(0,B.jsx)(lc,{src:U,alt:`Imagem 38`}),(0,B.jsx)(uc,{src:U,alt:`Imagem 39`})]});if(e===`Scheduling`)return(0,B.jsxs)(ks,{children:[(0,B.jsx)(dc,{src:vc,alt:`Imagem 40`}),(0,B.jsx)(fc,{src:U,alt:`Imagem 41`}),(0,B.jsx)(pc,{src:U,alt:`Imagem 42`}),(0,B.jsx)(mc,{src:U,alt:`Imagem 43`}),(0,B.jsx)(hc,{src:W,alt:`Imagem 44`}),(0,B.jsx)(gc,{src:W,alt:`Imagem 45`}),(0,B.jsx)(_c,{src:U,alt:`Imagem 46`})]})})(),yc=()=>(0,B.jsxs)(gs,{children:[(0,B.jsx)(H,{text:`Inscrições`,backgroundColor:`var(--purple-4)`}),(0,B.jsxs)(_s,{children:[(0,B.jsx)(G,{page:`Registrations`}),(0,B.jsx)(vs,{children:[{title:`CURSO DE EXTENSÃO`,content:`Formação em Cultura Digital é um Curso de Extensão oferecido pela Universidade Federal do Rio de Janeiro (UFRJ) e pelo Ministério da Cultura (MinC). A ação conta com o apoio da Mídia NINJA. O curso acontece de 13 a 16 de novembro de forma remota (on-line) e síncrona (transmissão ao vivo). No dia 15/11 (feriado) teremos atividade normalmente.`,subtitle:`INSCRIÇÕES ATÉ 08/11/2024`,buttonText:`INSCREVA-SE`,url:`https://docs.google.com/forms/d/e/1FAIpQLSepEEjZLQJR7PX0HZDEoQ5HK46bJiSsNilRNzmGK_X8dydQAQ/viewform`},{title:`PARA COLABORADORES`,content:`Inscreva-se como colaborador e participe de todos os encontros e mentorias. Os colaboradores auxiliam no desenvolvimento dos projetos`,subtitle:`INSCRIÇÕES ATÉ 04/10/2024`,buttonText:`ENCERRADA`,url:`https://docs.google.com/forms/d/e/1FAIpQLSd2ESN3BFwkiSKR6TtJAKgFkwjbYaiL7Dm6-gtV-BtsvYocgQ/viewform`},{title:`PARA PROJETOS`,content:`Esta Chamada Pública é direcionada para projetos sediados no estado do PARANÁ. A ação acontecerá presencialmente na cidade de CURITIBA.`,subtitle:`INSCRIÇÕES ATÉ 03/11/2024`,buttonText:`INSCREVA-SE`,url:`https://docs.google.com/forms/d/e/1FAIpQLSdTy9XYcL-dV76Ted_-9trkLgWEG5IFvzl-pBmn43kRKIxXsg/viewform`}].map((e,t)=>(0,B.jsx)(ys,{children:(0,B.jsxs)(bs,{children:[(0,B.jsx)(xs,{children:e.title}),(0,B.jsx)(Ss,{children:e.content}),e.subtitle&&(0,B.jsx)(Cs,{children:e.subtitle}),(0,B.jsx)(Os,{text:{value:e.buttonText,fontSize:`1.4rem`,fontWeight:700,color:`var(--purple-2)`},disabled:e.buttonText===`ENCERRADA`,size:`small`,url:e.url})]},t)}))})]})]}),bc=P.main`
    background-image: url(${fs});
    position: relative;
    overflow-x: hidden;
`,xc=(0,M.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`}),Sc=(0,M.createContext)({}),Cc=(0,M.createContext)(null),wc=typeof window<`u`,Tc=wc?M.useLayoutEffect:M.useEffect,Ec=(0,M.createContext)({strict:!1}),Dc=e=>e.replace(/([a-z])([A-Z])/gu,`$1-$2`).toLowerCase(),Oc=`data-`+Dc(`framerAppearId`),kc={skipAnimations:!1,useManualTiming:!1};function Ac(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.has(e)||s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,c.process(e))}};return c}var jc=[`read`,`resolveKeyframes`,`update`,`preRender`,`render`,`postRender`],Mc=40;function Nc(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=jc.reduce((e,t)=>(e[t]=Ac(a),e),{}),{read:s,resolveKeyframes:c,update:l,preRender:u,render:d,postRender:f}=o,p=()=>{let a=kc.useManualTiming?i.timestamp:performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,Mc),1),i.timestamp=a,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(p))},m=()=>{n=!0,r=!0,i.isProcessing||e(p)};return{schedule:jc.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||m(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<jc.length;t++)o[jc[t]].cancel(e)},state:i,steps:o}}var{schedule:Pc,cancel:Fc}=Nc(queueMicrotask,!1);function Ic(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}var Lc=(0,M.createContext)({}),Rc=!1;function zc(e,t,n,r,i){let{visualElement:a}=(0,M.useContext)(Sc),o=(0,M.useContext)(Ec),s=(0,M.useContext)(Cc),c=(0,M.useContext)(xc).reducedMotion,l=(0,M.useRef)();r||=o.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:a,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:c}));let u=l.current,d=(0,M.useContext)(Lc);u&&!u.projection&&i&&(u.type===`html`||u.type===`svg`)&&Vc(l.current,n,i,d),(0,M.useInsertionEffect)(()=>{u&&u.update(n,s)});let f=(0,M.useRef)(!!(n[Oc]&&!window.HandoffComplete));return Tc(()=>{u&&(u.updateFeatures(),Pc.render(u.render),f.current&&u.animationState&&u.animationState.animateChanges())}),(0,M.useEffect)(()=>{u&&(!f.current&&u.animationState&&u.animationState.animateChanges(),f.current&&(f.current=!1,Rc||(Rc=!0,queueMicrotask(Bc))))}),u}function Bc(){window.HandoffComplete=!0}function Vc(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Hc(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ic(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,layoutScroll:c,layoutRoot:l})}function Hc(e){if(e)return e.options.allowProjection===!1?Hc(e.parent):e.projection}function Uc(e,t,n){return(0,M.useCallback)(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n==`function`?n(r):Ic(n)&&(n.current=r))},[t])}function Wc(e){return typeof e==`string`||Array.isArray(e)}function Gc(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}var Kc=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],qc=[`initial`,...Kc];function K(e){return Gc(e.animate)||qc.some(t=>Wc(e[t]))}function Jc(e){return!!(K(e)||e.variants)}function Yc(e,t){if(K(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Wc(t)?t:void 0,animate:Wc(n)?n:void 0}}return e.inherit===!1?{}:t}function Xc(e){let{initial:t,animate:n}=Yc(e,(0,M.useContext)(Sc));return(0,M.useMemo)(()=>({initial:t,animate:n}),[Zc(t),Zc(n)])}function Zc(e){return Array.isArray(e)?e.join(` `):e}var Qc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},q={};for(let e in Qc)q[e]={isEnabled:t=>Qc[e].some(e=>!!t[e])};function $c(e){for(let t in e)q[t]={...q[t],...e[t]}}var el=(0,M.createContext)({}),tl=Symbol.for(`motionComponentSymbol`),nl=e=>e,rl=nl,il=nl;function al({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&$c(e);function a(a,o){let s,c={...(0,M.useContext)(xc),...a,layoutId:ol(a)},{isStatic:l}=c,u=Xc(a),d=r(a,l);if(!l&&wc){sl(c,e);let n=cl(c);s=n.MeasureLayout,u.visualElement=zc(i,d,c,t,n.ProjectionNode)}return(0,B.jsxs)(Sc.Provider,{value:u,children:[s&&u.visualElement?(0,B.jsx)(s,{visualElement:u.visualElement,...c}):null,n(i,a,Uc(d,u.visualElement,o),d,l,u.visualElement)]})}let o=(0,M.forwardRef)(a);return o[tl]=i,o}function ol({layoutId:e}){let t=(0,M.useContext)(el).id;return t&&e!==void 0?t+`-`+e:e}function sl(e,t){(0,M.useContext)(Ec).strict}function cl(e){let{drag:t,layout:n}=q;if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ll(e){function t(t,n={}){return al(e(t,n))}if(typeof Proxy>`u`)return t;let n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}var ul=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function dl(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(ul.indexOf(e)>-1||/[A-Z]/u.test(e))}var fl={};function pl(e){Object.assign(fl,e)}var ml=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],hl=new Set(ml);function gl(e,{layout:t,layoutId:n}){return hl.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!fl[e]||e===`opacity`)}var _l=e=>!!(e&&e.getVelocity),vl={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},yl=ml.length;function bl(e,t,n){let r=``;for(let t=0;t<yl;t++){let n=ml[t];if(e[n]!==void 0){let t=vl[n]||n;r+=`${t}(${e[n]}) `}}return r=r.trim(),n?r=n(e,t?``:r):t&&(r=`none`),r}var xl=e=>t=>typeof t==`string`&&t.startsWith(e),Sl=xl(`--`),Cl=xl(`var(--`),wl=e=>Cl(e)?Tl.test(e.split(`/*`)[0].trim()):!1,Tl=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,El=(e,t)=>t&&typeof e==`number`?t.transform(e):e,Dl=(e,t,n)=>n>t?t:n<e?e:n,Ol={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},kl={...Ol,transform:e=>Dl(0,1,e)},Al={...Ol,default:1},jl=e=>Math.round(e*1e5)/1e5,Ml=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,Nl=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Pl=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function Fl(e){return typeof e==`string`}function Il(e){return e==null}var Ll=e=>({test:t=>Fl(t)&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Rl=Ll(`deg`),zl=Ll(`%`),J=Ll(`px`),Bl=Ll(`vh`),Vl=Ll(`vw`),Hl={...zl,parse:e=>zl.parse(e)/100,transform:e=>zl.transform(e*100)},Ul={...Ol,transform:Math.round},Wl={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,radius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,size:J,top:J,right:J,bottom:J,left:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,rotate:Rl,rotateX:Rl,rotateY:Rl,rotateZ:Rl,scale:Al,scaleX:Al,scaleY:Al,scaleZ:Al,skew:Rl,skewX:Rl,skewY:Rl,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:kl,originX:Hl,originY:Hl,originZ:J,zIndex:Ul,backgroundPositionX:J,backgroundPositionY:J,fillOpacity:kl,strokeOpacity:kl,numOctaves:Ul};function Gl(e,t,n){let{style:r,vars:i,transform:a,transformOrigin:o}=e,s=!1,c=!1,l=!0;for(let e in t){let n=t[e];if(Sl(e)){i[e]=n;continue}let u=Wl[e],d=El(n,u);if(hl.has(e)){if(s=!0,a[e]=d,!l)continue;n!==(u.default||0)&&(l=!1)}else e.startsWith(`origin`)?(c=!0,o[e]=d):r[e]=d}if(t.transform||(s||n?r.transform=bl(e.transform,l,n):r.transform&&=`none`),c){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=o;r.transformOrigin=`${e} ${t} ${n}`}}var Kl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ql(e,t,n){for(let r in t)!_l(t[r])&&!gl(r,n)&&(e[r]=t[r])}function Jl({transformTemplate:e},t){return(0,M.useMemo)(()=>{let n=Kl();return Gl(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Yl(e,t){let n=e.style||{},r={};return ql(r,n,e),Object.assign(r,Jl(e,t)),r}function Xl(e,t){let n={},r=Yl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Zl=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(`.`));function Ql(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Zl.has(e)}var $l=e=>!Ql(e);function eu(e){e&&($l=t=>t.startsWith(`on`)?!Ql(t):e(t))}try{eu((w(),d(x)).default)}catch{}function tu(e,t,n){let r={};for(let i in e)(i!==`values`||typeof e.values!=`object`)&&($l(i)||n===!0&&Ql(i)||!t&&!Ql(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}function nu(e,t,n){return typeof e==`string`?e:J.transform(t+n*e)}function ru(e,t,n){return`${nu(t,e.x,e.width)} ${nu(n,e.y,e.height)}`}var iu={offset:`stroke-dashoffset`,array:`stroke-dasharray`},au={offset:`strokeDashoffset`,array:`strokeDasharray`};function ou(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?iu:au;e[a.offset]=J.transform(-r);let o=J.transform(t),s=J.transform(n);e[a.array]=`${o} ${s}`}function su(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:c=0,...l},u,d){if(Gl(e,l,d),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:f,style:p,dimensions:m}=e;f.transform&&(m&&(p.transform=f.transform),delete f.transform),m&&(i!==void 0||a!==void 0||p.transform)&&(p.transformOrigin=ru(m,i===void 0?.5:i,a===void 0?.5:a)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&ou(f,o,s,c,!1)}var cu=()=>({...Kl(),attrs:{}}),lu=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function uu(e,t,n,r){let i=(0,M.useMemo)(()=>{let n=cu();return su(n,t,lu(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};ql(t,e.style,e),i.style={...t,...i.style}}return i}function du(e=!1){return(t,n,r,{latestValues:i},a)=>{let o=(dl(t)?uu:Xl)(n,i,a,t),s=tu(n,typeof t==`string`,e),c=t===M.Fragment?{}:{...s,...o,ref:r},{children:l}=n,u=(0,M.useMemo)(()=>_l(l)?l.get():l,[l]);return(0,M.createElement)(t,{...c,children:u})}}function fu(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(let t in n)e.style.setProperty(t,n[t])}var pu=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]);function mu(e,t,n,r){fu(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(pu.has(n)?n:Dc(n),t.attrs[n])}function hu(e,t,n){let{style:r}=e,i={};for(let a in r)(_l(r[a])||t.style&&_l(t.style[a])||gl(a,e)||n?.getValue(a)?.liveStyle!==void 0)&&(i[a]=r[a]);return n&&r&&typeof r.willChange==`string`&&(n.applyWillChange=!1),i}function gu(e,t,n){let r=hu(e,t,n);for(let n in e)if(_l(e[n])||_l(t[n])){let t=ml.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}function _u(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function vu(e,t,n,r){if(typeof t==`function`){let[i,a]=_u(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=_u(r);t=t(n===void 0?e.custom:n,i,a)}return t}function yu(e){let t=(0,M.useRef)(null);return t.current===null&&(t.current=e()),t.current}var bu=e=>Array.isArray(e),xu=e=>!!(e&&typeof e==`object`&&e.mix&&e.toValue),Su=e=>bu(e)?e[e.length-1]||0:e;function Cu(e){let t=_l(e)?e.get():e;return xu(t)?t.toValue():t}var wu=new Set([`opacity`,`clipPath`,`filter`,`transform`]);function Tu(e){if(hl.has(e))return`transform`;if(wu.has(e))return Dc(e)}function Eu(e,t){e.indexOf(t)===-1&&e.push(t)}function Du(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}function Ou({applyWillChange:e=!1,scrapeMotionValuesFromProps:t,createRenderState:n,onMount:r},i,a,o,s){let c={latestValues:Mu(i,a,o,!s&&e,t),renderState:n()};return r&&(c.mount=e=>r(i,e,c)),c}var ku=e=>(t,n)=>{let r=(0,M.useContext)(Sc),i=(0,M.useContext)(Cc),a=()=>Ou(e,t,r,i,n);return n?a():yu(a)};function Au(e,t){let n=Tu(t);n&&Eu(e,n)}function ju(e,t,n){let r=Array.isArray(t)?t:[t];for(let t=0;t<r.length;t++){let i=vu(e,r[t]);if(i){let{transitionEnd:e,transition:t,...r}=i;n(r,e)}}}function Mu(e,t,n,r,i){let a={},o=[],s=r&&e.style?.willChange===void 0,c=i(e,{});for(let e in c)a[e]=Cu(c[e]);let{initial:l,animate:u}=e,d=K(e),f=Jc(e);t&&f&&!d&&e.inherit!==!1&&(l===void 0&&(l=t.initial),u===void 0&&(u=t.animate));let p=n?n.initial===!1:!1;p||=l===!1;let m=p?u:l;return m&&typeof m!=`boolean`&&!Gc(m)&&ju(e,m,(e,t)=>{for(let t in e){let n=e[t];if(Array.isArray(n)){let e=p?n.length-1:0;n=n[e]}n!==null&&(a[t]=n)}for(let e in t)a[e]=t[e]}),s&&(u&&l!==!1&&!Gc(u)&&ju(e,u,e=>{for(let t in e)Au(o,t)}),o.length&&(a.willChange=o.join(`,`))),a}var{schedule:Y,cancel:Nu,state:Pu,steps:Fu}=Nc(typeof requestAnimationFrame<`u`?requestAnimationFrame:nl,!0),Iu={useVisualState:ku({scrapeMotionValuesFromProps:gu,createRenderState:cu,onMount:(e,t,{renderState:n,latestValues:r})=>{Y.read(()=>{try{n.dimensions=typeof t.getBBox==`function`?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),Y.render(()=>{su(n,r,lu(t.tagName),e.transformTemplate),mu(t,n)})}})},Lu={useVisualState:ku({applyWillChange:!0,scrapeMotionValuesFromProps:hu,createRenderState:Kl})};function Ru(e,{forwardMotionProps:t=!1},n,r){return{...dl(e)?Iu:Lu,preloadedFeatures:n,useRender:du(t),createVisualElement:r,Component:e}}function zu(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Bu=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1;function Vu(e,t=`page`){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}var Hu=e=>t=>Bu(t)&&e(t,Vu(t));function Uu(e,t,n,r){return zu(e,t,Hu(n),r)}var Wu=(e,t)=>n=>t(e(n)),Gu=(...e)=>e.reduce(Wu);function Ku(e){let t=null;return()=>t===null&&(t=e,()=>{t=null})}var qu=Ku(`dragHorizontal`),Ju=Ku(`dragVertical`);function Yu(e){let t=!1;if(e===`y`)t=Ju();else if(e===`x`)t=qu();else{let e=qu(),n=Ju();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Xu(){let e=Yu(!0);return!e||(e(),!1)}var Zu=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Qu(e,t){let n=t?`pointerenter`:`pointerleave`,r=t?`onHoverStart`:`onHoverEnd`;return Uu(e.current,n,(n,i)=>{if(n.pointerType===`touch`||Xu())return;let a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive(`whileHover`,t);let o=a[r];o&&Y.postRender(()=>o(n,i))},{passive:!e.getProps()[r]})}var $u=class extends Zu{mount(){this.unmount=Gu(Qu(this.node,!0),Qu(this.node,!1))}unmount(){}},ed=class extends Zu{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Gu(zu(this.node.current,`focus`,()=>this.onFocus()),zu(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}},td=(e,t)=>t?e===t||td(e,t.parentElement):!1;function nd(e,t){if(!t)return;let n=new PointerEvent(`pointer`+e);t(n,Vu(n))}var rd=class extends Zu{constructor(){super(...arguments),this.removeStartListeners=nl,this.removeEndListeners=nl,this.removeAccessibleListeners=nl,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();let n=this.node.getProps(),r=Uu(window,`pointerup`,(e,t)=>{if(!this.checkPressEnd())return;let{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps(),a=!i&&!td(this.node.current,e.target)?r:n;a&&Y.update(()=>a(e,t))},{passive:!(n.onTap||n.onPointerUp)}),i=Uu(window,`pointercancel`,(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Gu(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{let e=zu(this.node.current,`keydown`,e=>{if(e.key!==`Enter`||this.isPressing)return;let t=e=>{e.key!==`Enter`||!this.checkPressEnd()||nd(`up`,(e,t)=>{let{onTap:n}=this.node.getProps();n&&Y.postRender(()=>n(e,t))})};this.removeEndListeners(),this.removeEndListeners=zu(this.node.current,`keyup`,t),nd(`down`,(e,t)=>{this.startPress(e,t)})}),t=zu(this.node.current,`blur`,()=>{this.isPressing&&nd(`cancel`,(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=Gu(e,t)}}startPress(e,t){this.isPressing=!0;let{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive(`whileTap`,!0),n&&Y.postRender(()=>n(e,t))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive(`whileTap`,!1),!Xu()}cancelPress(e,t){if(!this.checkPressEnd())return;let{onTapCancel:n}=this.node.getProps();n&&Y.postRender(()=>n(e,t))}mount(){let e=this.node.getProps(),t=Uu(e.globalTapTarget?window:this.node.current,`pointerdown`,this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=zu(this.node.current,`focus`,this.startAccessiblePress);this.removeStartListeners=Gu(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}},id=new WeakMap,ad=new WeakMap,od=e=>{let t=id.get(e.target);t&&t(e)},sd=e=>{e.forEach(od)};function cd({root:e,...t}){let n=e||document;ad.has(n)||ad.set(n,{});let r=ad.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(sd,{root:e,...t})),r[i]}function ld(e,t,n){let r=cd(t);return id.set(e,n),r.observe(e),()=>{id.delete(e),r.unobserve(e)}}var ud={some:0,all:1},dd=class extends Zu{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:ud[r]};return ld(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(fd(e,t))&&this.startObserver()}unmount(){}};function fd({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var pd={inView:{Feature:dd},tap:{Feature:rd},focus:{Feature:ed},hover:{Feature:$u}};function md(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function hd(e,t,n){let r=e.getProps();return vu(r,t,n===void 0?r.custom:n,e)}var gd=e=>e*1e3,_d=e=>e/1e3,vd={type:`spring`,stiffness:500,damping:25,restSpeed:10},yd=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),bd={type:`keyframes`,duration:.8},xd={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Sd=(e,{keyframes:t})=>t.length>2?bd:hl.has(e)?e.startsWith(`scale`)?yd(t[1]):vd:xd;function Cd({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:c,elapsed:l,...u}){return!!Object.keys(u).length}function wd(e,t){return e[t]||e.default||e}var Td={current:!1},Ed=e=>e!==null;function Dd(e,{repeat:t,repeatType:n=`loop`},r){let i=e.filter(Ed),a=t&&n!==`loop`&&t%2==1?0:i.length-1;return!a||r===void 0?i[a]:r}var Od;function kd(){Od=void 0}var Ad={now:()=>(Od===void 0&&Ad.set(Pu.isProcessing||kc.useManualTiming?Pu.timestamp:performance.now()),Od),set:e=>{Od=e,queueMicrotask(kd)}},jd=e=>/^0[^.\s]+$/u.test(e);function Md(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||jd(e)}var Nd=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Pd=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Fd(e){let t=Pd.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}var Id=4;function Ld(e,t,n=1){il(n<=Id,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[r,i]=Fd(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Nd(e)?parseFloat(e):e}return wl(i)?Ld(i,t,n+1):i}var Rd=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,`x`,`y`,`translateX`,`translateY`]),zd=e=>e===Ol||e===J,Bd=(e,t)=>parseFloat(e.split(`, `)[t]),Vd=(e,t)=>(n,{transform:r})=>{if(r===`none`||!r)return 0;let i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Bd(i[1],t);{let t=r.match(/^matrix\((.+)\)$/u);return t?Bd(t[1],e):0}},Hd=new Set([`x`,`y`,`z`]),Ud=ml.filter(e=>!Hd.has(e));function Wd(e){let t=[];return Ud.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Gd={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Vd(4,13),y:Vd(5,14)};Gd.translateX=Gd.x,Gd.translateY=Gd.y;var Kd=e=>t=>t.test(e),qd=[Ol,J,zl,Rl,Vl,Bl,{test:e=>e===`auto`,parse:e=>e}],Jd=e=>qd.find(Kd(e)),Yd=new Set,Xd=!1,Zd=!1;function Qd(){if(Zd){let e=Array.from(Yd).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Wd(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{var r;(r=e.getValue(t))==null||r.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Zd=!1,Xd=!1,Yd.forEach(e=>e.complete()),Yd.clear()}function $d(){Yd.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Zd=!0)})}function ef(){$d(),Qd()}var tf=class{constructor(e,t,n,r,i,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yd.add(this),Xd||(Xd=!0,Y.read($d),Y.resolveKeyframes(Qd))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(e[i]===null){if(i===0){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}else e[i]=e[i-1]}}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yd.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yd.delete(this))}resume(){this.isComplete||this.scheduleResolve()}},nf=(e,t)=>n=>!!(Fl(n)&&Pl.test(n)&&n.startsWith(e)||t&&!Il(n)&&Object.prototype.hasOwnProperty.call(n,t)),rf=(e,t,n)=>r=>{if(!Fl(r))return r;let[i,a,o,s]=r.match(Ml);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},af=e=>Dl(0,255,e),of={...Ol,transform:e=>Math.round(af(e))},sf={test:nf(`rgb`,`red`),parse:rf(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+of.transform(e)+`, `+of.transform(t)+`, `+of.transform(n)+`, `+jl(kl.transform(r))+`)`};function cf(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var lf={test:nf(`#`),parse:cf,transform:sf.transform},uf={test:nf(`hsl`,`hue`),parse:rf(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+zl.transform(jl(t))+`, `+zl.transform(jl(n))+`, `+jl(kl.transform(r))+`)`},df={test:e=>sf.test(e)||lf.test(e)||uf.test(e),parse:e=>sf.test(e)?sf.parse(e):uf.test(e)?uf.parse(e):lf.parse(e),transform:e=>Fl(e)?e:e.hasOwnProperty(`red`)?sf.transform(e):uf.transform(e)};function ff(e){return isNaN(e)&&Fl(e)&&(e.match(Ml)?.length||0)+(e.match(Nl)?.length||0)>0}var pf=`number`,mf=`color`,hf=`var`,gf=`var(`,_f="${}",vf=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function yf(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(vf,e=>(df.test(e)?(r.color.push(a),i.push(mf),n.push(df.parse(e))):e.startsWith(gf)?(r.var.push(a),i.push(hf),n.push(e)):(r.number.push(a),i.push(pf),n.push(parseFloat(e))),++a,_f)).split(_f),indexes:r,types:i}}function bf(e){return yf(e).values}function xf(e){let{split:t,types:n}=yf(e),r=t.length;return e=>{let i=``;for(let a=0;a<r;a++)if(i+=t[a],e[a]!==void 0){let t=n[a];i+=t===pf?jl(e[a]):t===mf?df.transform(e[a]):e[a]}return i}}var Sf=e=>typeof e==`number`?0:e;function Cf(e){let t=bf(e);return xf(e)(t.map(Sf))}var wf={test:ff,parse:bf,createTransformer:xf,getAnimatableNone:Cf},Tf=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Ef(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Ml)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Tf.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Df=/\b([a-z-]*)\(.*?\)/gu,Of={...wf,getAnimatableNone:e=>{let t=e.match(Df);return t?t.map(Ef).join(` `):e}},kf={...Wl,color:df,backgroundColor:df,outlineColor:df,fill:df,stroke:df,borderColor:df,borderTopColor:df,borderRightColor:df,borderBottomColor:df,borderLeftColor:df,filter:Of,WebkitFilter:Of},Af=e=>kf[e];function jf(e,t){let n=Af(e);return n!==Of&&(n=wf),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Mf=new Set([`auto`,`none`,`0`]);function Nf(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Mf.has(t)&&yf(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=jf(n,i)}var Pf=class extends tf{constructor(e,t,n,r){super(e,t,n,r,r?.owner,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),wl(r))){let i=Ld(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Rd.has(n)||e.length!==2)return;let[r,i]=e,a=Jd(r),o=Jd(i);if(a!==o){if(zd(a)&&zd(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else this.needsMeasurement=!0}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)Md(e[t])&&n.push(t);n.length&&Nf(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Gd[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Gd[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Ff(e){let t;return()=>(t===void 0&&(t=e()),t)}var If=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(wf.test(e)||e===`0`)&&!e.startsWith(`url(`));function Lf(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Rf(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=If(i,t),s=If(a,t);return rl(o===s,`You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`),!o||!s?!1:Lf(e)||n===`spring`&&r}var zf=class{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,...o},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&ef(),this._resolved}onKeyframesResolved(e,t){this.hasAttemptedResolve=!0;let{name:n,type:r,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:c}=this.options;if(!c&&!Rf(e,n,r,i)){if(Td.current||!a){s?.(Dd(e,this.options,t)),o?.(),this.resolveFinishedPromise();return}this.options.duration=0}let l=this.initPlayback(e,t);l!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...l},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}};function Bf(e,t){return t?1e3/t*e:0}var Vf=5;function Hf(e,t,n){let r=Math.max(t-Vf,0);return Bf(n-e(r),t-r)}var Uf=.001,Wf=.01,Gf=.05;function Kf({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,a;rl(e<=gd(10),`Spring duration must be 10 seconds or less`);let o=1-t;o=Dl(Gf,1,o),e=Dl(Wf,10,_d(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Yf(t,o),c=Math.exp(-i);return Uf-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Yf(t**2,o);return(-i(t)+Uf>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Jf(i,a,s);if(e=gd(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var qf=12;function Jf(e,t,n){let r=n;for(let n=1;n<qf;n++)r-=e(r)/t(r);return r}function Yf(e,t){return e*Math.sqrt(1-t*t)}var Xf=[`duration`,`bounce`],Zf=[`stiffness`,`damping`,`mass`];function Qf(e,t){return t.some(t=>e[t]!==void 0)}function $f(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Qf(e,Zf)&&Qf(e,Xf)){let n=Kf(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function ep({keyframes:e,restDelta:t,restSpeed:n,...r}){let i=e[0],a=e[e.length-1],o={done:!1,value:i},{stiffness:s,damping:c,mass:l,duration:u,velocity:d,isResolvedFromDuration:f}=$f({...r,velocity:-_d(r.velocity||0)}),p=d||0,m=c/(2*Math.sqrt(s*l)),h=a-i,g=_d(Math.sqrt(s/l)),_=Math.abs(h)<5;n||=_?.01:2,t||=_?.005:.5;let v;if(m<1){let e=Yf(g,m);v=t=>{let n=Math.exp(-m*g*t);return a-n*((p+m*g*h)/e*Math.sin(e*t)+h*Math.cos(e*t))}}else if(m===1)v=e=>a-Math.exp(-g*e)*(h+(p+g*h)*e);else{let e=g*Math.sqrt(m*m-1);v=t=>{let n=Math.exp(-m*g*t),r=Math.min(e*t,300);return a-n*((p+m*g*h)*Math.sinh(r)+e*h*Math.cosh(r))/e}}return{calculatedDuration:f&&u||null,next:e=>{let r=v(e);if(f)o.done=e>=u;else{let i=p;e!==0&&(i=m<1?Hf(v,e,r):0);let s=Math.abs(i)<=n,c=Math.abs(a-r)<=t;o.done=s&&c}return o.value=o.done?a:r,o}}}function tp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=ep({keyframes:[f.value,m(f.value)],velocity:Hf(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}var np=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,rp=1e-7,ip=12;function ap(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=np(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>rp&&++s<ip);return o}function op(e,t,n,r){if(e===t&&n===r)return nl;let i=t=>ap(t,0,1,e,n);return e=>e===0||e===1?e:np(i(e),t,r)}var sp=op(.42,0,1,1),cp=op(0,0,.58,1),lp=op(.42,0,.58,1),up=e=>Array.isArray(e)&&typeof e[0]!=`number`,dp=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,fp=e=>t=>1-e(1-t),pp=e=>1-Math.sin(Math.acos(e)),mp=fp(pp),hp=dp(pp),gp=op(.33,1.53,.69,.99),_p=fp(gp),vp={linear:nl,easeIn:sp,easeInOut:lp,easeOut:cp,circIn:pp,circInOut:hp,circOut:mp,backIn:_p,backInOut:dp(_p),backOut:gp,anticipate:e=>(e*=2)<1?.5*_p(e):.5*(2-2**(-10*(e-1)))},yp=e=>{if(Array.isArray(e)){il(e.length===4,`Cubic bezier arrays must contain four numerical values.`);let[t,n,r,i]=e;return op(t,n,r,i)}return typeof e==`string`?(il(vp[e]!==void 0,`Invalid easing type '${e}'`),vp[e]):e},bp=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},xp=(e,t,n)=>e+(t-e)*n;function Sp(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Cp({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Sp(s,r,e+1/3),a=Sp(s,r,e),o=Sp(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function wp(e,t){return n=>n>0?t:e}var Tp=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Ep=[lf,sf,uf],Dp=e=>Ep.find(t=>t.test(e));function Op(e){let t=Dp(e);if(rl(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`),!t)return!1;let n=t.parse(e);return t===uf&&(n=Cp(n)),n}var kp=(e,t)=>{let n=Op(e),r=Op(t);if(!n||!r)return wp(e,t);let i={...n};return e=>(i.red=Tp(n.red,r.red,e),i.green=Tp(n.green,r.green,e),i.blue=Tp(n.blue,r.blue,e),i.alpha=xp(n.alpha,r.alpha,e),sf.transform(i))},Ap=new Set([`none`,`hidden`]);function jp(e,t){return Ap.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Mp(e,t){return n=>xp(e,t,n)}function Np(e){return typeof e==`number`?Mp:typeof e==`string`?wl(e)?wp:df.test(e)?kp:Lp:Array.isArray(e)?Pp:typeof e==`object`?df.test(e)?kp:Fp:wp}function Pp(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Np(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Fp(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Np(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ip(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Lp=(e,t)=>{let n=wf.createTransformer(t),r=yf(e),i=yf(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ap.has(e)&&!i.values.length||Ap.has(t)&&!r.values.length?jp(e,t):Gu(Pp(Ip(r,i),i.values),n):(rl(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),wp(e,t))};function Rp(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?xp(e,t,n):Np(e)(e,t)}function zp(e,t,n){let r=[],i=n||Rp,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Gu(Array.isArray(t)?t[n]||nl:t,a)),r.push(a)}return r}function Bp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(il(a===t.length,`Both input and output ranges must be the same length`),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let o=zp(t,r,i),s=o.length,c=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);let r=bp(e[n],e[n+1],t);return o[n](r)};return n?t=>c(Dl(e[0],e[a-1],t)):c}function Vp(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=bp(0,t,r);e.push(xp(n,1,i))}}function Hp(e){let t=[0];return Vp(t,e.length-1),t}function Up(e,t){return e.map(e=>e*t)}function Wp(e,t){return e.map(()=>t||lp).splice(0,e.length-1)}function Gp({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=up(r)?r.map(yp):yp(r),a={done:!1,value:t[0]},o=Bp(Up(n&&n.length===t.length?n:Hp(t),e),t,{ease:Array.isArray(i)?i:Wp(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}function Kp(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}var qp=e=>{let t=({timestamp:t})=>e(t);return{start:()=>Y.update(t,!0),stop:()=>Nu(t),now:()=>Pu.isProcessing?Pu.timestamp:Ad.now()}},Jp={decay:tp,inertia:tp,tween:Gp,keyframes:Gp,spring:ep},Yp=e=>e/100,Xp=class extends zf{constructor({KeyframeResolver:e=tf,...t}){super(t),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState=`running`,this.state=`idle`,this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state===`idle`)return;this.teardown();let{onStop:e}=this.options;e&&e()};let{name:n,motionValue:r,keyframes:i}=this.options,a=(e,t)=>this.onKeyframesResolved(e,t);this.resolver=n&&r&&r.owner?r.owner.resolveKeyframes(i,a,n,r):new e(i,a,n,r),this.resolver.scheduleResolve()}initPlayback(e){let{type:t=`keyframes`,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=this.options,o=Jp[t]||Gp,s,c;o!==Gp&&typeof e[0]!=`number`&&(s=Gu(Yp,Rp(e[0],e[1])),e=[0,100]);let l=o({...this.options,keyframes:e});i===`mirror`&&(c=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),l.calculatedDuration===null&&(l.calculatedDuration=Kp(l));let{calculatedDuration:u}=l,d=u+r,f=d*(n+1)-r;return{generator:l,mirroredGenerator:c,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:f}}onPostResolved(){let{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState===`paused`||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){let{resolved:n}=this;if(!n){let{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}let{finalKeyframe:r,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:c,totalDuration:l,resolvedDuration:u}=n;if(this.startTime===null)return i.next(0);let{delay:d,repeat:f,repeatType:p,repeatDelay:m,onUpdate:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-l/this.speed,this.startTime)),this.currentTime=t?e:this.holdTime===null?Math.round(e-this.startTime)*this.speed:this.holdTime;let g=this.currentTime-d*(this.speed>=0?1:-1),_=this.speed>=0?g<0:g>l;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=l);let v=this.currentTime,y=i;if(f){let e=Math.min(this.currentTime,l)/u,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,f+1),t%2&&(p===`reverse`?(n=1-n,m&&(n-=m/u)):p===`mirror`&&(y=a)),v=Dl(0,1,n)*u}let b=_?{done:!1,value:s[0]}:y.next(v);o&&(b.value=o(b.value));let{done:x}=b;!_&&c!==null&&(x=this.speed>=0?this.currentTime>=l:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&r!==void 0&&(b.value=Dd(s,this.options,r)),h&&h(b.value),S&&this.finish(),b}get duration(){let{resolved:e}=this;return e?_d(e.calculatedDuration):0}get time(){return _d(this.currentTime)}set time(e){e=gd(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=_d(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState=`running`;return}if(this.isStopped)return;let{driver:e=qp,onPlay:t}=this.options;this.driver||=e(e=>this.tick(e)),t&&t();let n=this.driver.now();this.holdTime===null?(!this.startTime||this.state===`finished`)&&(this.startTime=n):this.startTime=n-this.holdTime,this.state===`finished`&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state=`running`,this.driver.start()}pause(){if(!this._resolved){this.pendingPlayState=`paused`;return}this.state=`paused`,this.holdTime=this.currentTime??0}complete(){this.state!==`running`&&this.play(),this.pendingPlayState=this.state=`finished`,this.holdTime=null}finish(){this.teardown(),this.state=`finished`;let{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state=`idle`,this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}},Zp=e=>Array.isArray(e)&&typeof e[0]==`number`;function Qp(e){return!!(!e||typeof e==`string`&&e in em||Zp(e)||Array.isArray(e)&&e.every(Qp))}var $p=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,em={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:$p([0,.65,.55,1]),circOut:$p([.55,0,1,.45]),backIn:$p([.31,.01,.66,-.59]),backOut:$p([.33,1.53,.69,.99])};function tm(e){return nm(e)||em.easeOut}function nm(e){if(e)return Zp(e)?$p(e):Array.isArray(e)?e.map(tm):em[e]}function rm(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s,times:c}={}){let l={[t]:n};c&&(l.offset=c);let u=nm(s);return Array.isArray(u)&&(l.easing=u),e.animate(l,{delay:r,duration:i,easing:Array.isArray(u)?`linear`:u,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`})}var im=Ff(()=>Object.hasOwnProperty.call(Element.prototype,`animate`)),am=10,om=2e4;function sm(e){return e.type===`spring`||!Qp(e.ease)}function cm(e,t){let n=new Xp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0}),r={done:!1,value:e[0]},i=[],a=0;for(;!r.done&&a<om;)r=n.sample(a),i.push(r.value),a+=am;return{times:void 0,keyframes:i,duration:a-am,ease:`linear`}}var lm=class extends zf{constructor(e){super(e);let{name:t,motionValue:n,keyframes:r}=this.options;this.resolver=new Pf(r,(e,t)=>this.onKeyframesResolved(e,t),t,n),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:a,motionValue:o,name:s}=this.options;if(!o.owner?.current)return!1;if(sm(this.options)){let{onComplete:t,onUpdate:o,motionValue:s,...c}=this.options,l=cm(e,c);e=l.keyframes,e.length===1&&(e[1]=e[0]),n=l.duration,r=l.times,i=l.ease,a=`keyframes`}let c=rm(o.owner.current,s,e,{...this.options,duration:n,times:r,ease:i});return c.startTime=Ad.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):c.onfinish=()=>{let{onComplete:n}=this.options;o.set(Dd(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:n,times:r,type:a,ease:i,keyframes:e}}get duration(){let{resolved:e}=this;if(!e)return 0;let{duration:t}=e;return _d(t)}get time(){let{resolved:e}=this;if(!e)return 0;let{animation:t}=e;return _d(t.currentTime||0)}set time(e){let{resolved:t}=this;if(!t)return;let{animation:n}=t;n.currentTime=gd(e)}get speed(){let{resolved:e}=this;if(!e)return 1;let{animation:t}=e;return t.playbackRate}set speed(e){let{resolved:t}=this;if(!t)return;let{animation:n}=t;n.playbackRate=e}get state(){let{resolved:e}=this;if(!e)return`idle`;let{animation:t}=e;return t.playState}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{let{resolved:t}=this;if(!t)return nl;let{animation:n}=t;n.timeline=e,n.onfinish=null}return nl}play(){if(this.isStopped)return;let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.playState===`finished`&&this.updateFinishedPromise(),t.play()}pause(){let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state===`idle`)return;this.resolveFinishedPromise(),this.updateFinishedPromise();let{resolved:e}=this;if(!e)return;let{animation:t,keyframes:n,duration:r,type:i,ease:a,times:o}=e;if(t.playState===`idle`||t.playState===`finished`)return;if(this.time){let{motionValue:e,onUpdate:t,onComplete:s,...c}=this.options,l=new Xp({...c,keyframes:n,duration:r,type:i,ease:a,times:o,isGenerator:!0}),u=gd(this.time);e.setWithVelocity(l.sample(u-am).value,l.sample(u).value,am)}let{onStop:s}=this.options;s&&s(),this.cancel()}complete(){let{resolved:e}=this;e&&e.animation.finish()}cancel(){let{resolved:e}=this;e&&e.animation.cancel()}static supports(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;return im()&&n&&wu.has(n)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}};function um(e,t){let n,r=()=>{let{currentTime:r}=t,i=(r===null?0:r.value)/100;n!==i&&e(i),n=i};return Y.update(r,!0),()=>Nu(r)}var dm=Ff(()=>window.ScrollTimeline!==void 0),fm=class{constructor(e){this.stop=()=>this.runAll(`stop`),this.animations=e.filter(Boolean)}then(e,t){return Promise.all(this.animations).then(e).catch(t)}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e){let t=this.animations.map(t=>{if(dm()&&t.attachTimeline)t.attachTimeline(e);else return t.pause(),um(e=>{t.time=t.duration*e},e)});return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll(`time`)}set time(e){this.setAll(`time`,e)}get speed(){return this.getAll(`speed`)}set speed(e){this.setAll(`speed`,e)}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll(`play`)}pause(){this.runAll(`pause`)}cancel(){this.runAll(`cancel`)}complete(){this.runAll(`complete`)}},pm=(e,t,n,r={},i,a,o)=>s=>{let c=wd(r,e)||{},l=c.delay||r.delay||0,{elapsed:u=0}=r;u-=gd(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...c,delay:-u,onUpdate:e=>{t.set(e),c.onUpdate&&c.onUpdate(e)},onComplete:()=>{s(),c.onComplete&&c.onComplete(),o&&o()},onStop:o,name:e,motionValue:t,element:a?void 0:i};Cd(c)||(d={...d,...Sd(e,d)}),d.duration&&(d.duration=gd(d.duration)),d.repeatDelay&&(d.repeatDelay=gd(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),(Td.current||kc.skipAnimations)&&(f=!0,d.duration=0,d.delay=0),f&&!a&&t.get()!==void 0){let e=Dd(d.keyframes,c);if(e!==void 0)return Y.update(()=>{d.onUpdate(e),d.onComplete()}),new fm([])}return!a&&lm.supports(d)?new lm(d):new Xp(d)},mm=class{constructor(){this.subscriptions=[]}add(e){return Eu(this.subscriptions,e),()=>Du(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},hm=30,gm=e=>!isNaN(parseFloat(e)),_m={current:void 0},vm=class{constructor(e,t={}){this.version=`11.3.19`,this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=!0)=>{let n=Ad.now();this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ad.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=gm(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new mm);let n=this.events[e].add(t);return e===`change`?()=>{n(),Y.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return _m.current&&_m.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Ad.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>hm)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,hm);return Bf(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ym(e,t){return new vm(e,t)}function bm(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ym(n))}function xm(e,t){let{transitionEnd:n={},transition:r={},...i}=hd(e,t)||{};i={...i,...n};for(let t in i)bm(e,t,Su(i[t]))}function Sm(e){return e.getProps()[Oc]}var Cm=class extends vm{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(e){let t=Tu(e);if(!t)return;let n=this.counts.get(t)||0;this.counts.set(t,n+1),n===0&&(this.output.push(t),this.update());let r=!1;return()=>{if(r)return;r=!0;let e=this.counts.get(t)-1;this.counts.set(t,e),e===0&&(Du(this.output,t),this.update())}}update(){this.set(this.output.length?this.output.join(`, `):`auto`)}};function wm(e){return!!(_l(e)&&e.add)}function Tm(e,t){if(!e.applyWillChange)return;let n=e.getValue(`willChange`);if(!n&&!e.props.style?.willChange&&(n=new Cm(`auto`),e.addValue(`willChange`,n)),wm(n))return n.add(t)}function Em({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Dm(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);let c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||l&&Em(l,t))continue;let o={delay:n,elapsed:0,...wd(a||{},t)},u=!1;if(window.HandoffAppearAnimations){let n=Sm(e);if(n){let e=window.HandoffAppearAnimations(n,t,r,Y);e!==null&&(o.elapsed=e,u=!0)}}r.start(pm(t,r,i,e.shouldReduceMotion&&hl.has(t)?{type:!1}:o,e,u,Tm(e,t)));let d=r.animation;d&&c.push(d)}return o&&Promise.all(c).then(()=>{Y.update(()=>{o&&xm(e,o)})}),c}function Om(e,t,n={}){let r=hd(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Dm(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return km(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function km(e,t,n=0,r=0,i=1,a){let o=[],s=(e.variantChildren.size-1)*r,c=i===1?(e=0)=>e*r:(e=0)=>s-e*r;return Array.from(e.variantChildren).sort(Am).forEach((e,r)=>{e.notify(`AnimationStart`,t),o.push(Om(e,t,{...a,delay:n+c(r)}).then(()=>e.notify(`AnimationComplete`,t)))}),Promise.all(o)}function Am(e,t){return e.sortNodePosition(t)}function jm(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Om(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Om(e,t,n);else{let i=typeof t==`function`?hd(e,t,n.custom):t;r=Promise.all(Dm(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Mm=[...Kc].reverse(),Nm=Kc.length;function Pm(e){return t=>Promise.all(t.map(({animation:t,options:n})=>jm(e,t,n)))}function Fm(e){let t=Pm(e),n=Rm(),r=!0,i=t=>(n,r)=>{let i=hd(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(n){t=n(e)}function o(a){let o=e.getProps(),s=e.getVariantContext(!0)||{},c=[],l=new Set,u={},d=1/0;for(let t=0;t<Nm;t++){let f=Mm[t],p=n[f],m=o[f]===void 0?s[f]:o[f],h=Wc(m),g=f===a?p.isActive:null;g===!1&&(d=t);let _=m===s[f]&&m!==o[f]&&h;if(_&&r&&e.manuallyAnimateOnMount&&(_=!1),p.protectedKeys={...u},!p.isActive&&g===null||!m&&!p.prevProp||Gc(m)||typeof m==`boolean`)continue;let v=Im(p.prevProp,m)||f===a&&p.isActive&&!_&&h||t>d&&h,y=!1,b=Array.isArray(m)?m:[m],x=b.reduce(i(f),{});g===!1&&(x={});let{prevResolvedValues:S={}}=p,C={...S,...x},w=t=>{v=!0,l.has(t)&&(y=!0,l.delete(t)),p.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in C){let t=x[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=bu(t)&&bu(n)?!md(t,n):t!==n,r?t==null?l.add(e):w(e):t!==void 0&&l.has(e)?w(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=x,p.isActive&&(u={...u,...x}),r&&e.blockInitialAnimation&&(v=!1),v&&(!_||y)&&c.push(...b.map(e=>({animation:e,options:{type:f}})))}if(l.size){let t={};l.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),c.push({animation:t})}let f=!!c.length;return r&&(o.initial===!1||o.initial===o.animate)&&!e.manuallyAnimateOnMount&&(f=!1),r=!1,f?t(c):Promise.resolve()}function s(t,r){var i;if(n[t].isActive===r)return Promise.resolve();(i=e.variantChildren)==null||i.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let a=o(t);for(let e in n)n[e].protectedKeys={};return a}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Rm(),r=!0}}}function Im(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!md(t,e):!1}function Lm(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rm(){return{animate:Lm(!0),whileInView:Lm(),whileHover:Lm(),whileTap:Lm(),whileDrag:Lm(),whileFocus:Lm(),exit:Lm()}}var zm=class extends Zu{constructor(e){super(e),e.animationState||=Fm(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Gc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}},Bm=0,Vm={animation:{Feature:zm},exit:{Feature:class extends Zu{constructor(){super(...arguments),this.id=Bm++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Hm=(e,t)=>Math.abs(e-t);function Um(e,t){let n=Hm(e.x,t.x),r=Hm(e.y,t.y);return Math.sqrt(n**2+r**2)}var Wm=class{constructor(e,t,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=qm(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Um(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Pu;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Gm(t,this.transformPagePoint),Y.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=qm(e.type===`pointercancel`?this.lastMoveEventInfo:Gm(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Bu(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;let a=Gm(Vu(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=Pu;this.history=[{...o,timestamp:s}];let{onSessionStart:c}=t;c&&c(e,qm(a,this.history)),this.removeListeners=Gu(Uu(this.contextWindow,`pointermove`,this.handlePointerMove),Uu(this.contextWindow,`pointerup`,this.handlePointerUp),Uu(this.contextWindow,`pointercancel`,this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Nu(this.updatePoint)}};function Gm(e,t){return t?{point:t(e.point)}:e}function Km(e,t){return{x:e.x-t.x,y:e.y-t.y}}function qm({point:e},t){return{point:e,delta:Km(e,Ym(t)),offset:Km(e,Jm(t)),velocity:Xm(t,.1)}}function Jm(e){return e[0]}function Ym(e){return e[e.length-1]}function Xm(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Ym(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>gd(t)));)n--;if(!r)return{x:0,y:0};let a=_d(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}var Zm=.9999,Qm=1.0001,$m=-.01,eh=.01;function th(e){return e.max-e.min}function nh(e,t,n){return Math.abs(e-t)<=n}function rh(e,t,n,r=.5){e.origin=r,e.originPoint=xp(t.min,t.max,e.origin),e.scale=th(n)/th(t),e.translate=xp(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Zm&&e.scale<=Qm||isNaN(e.scale))&&(e.scale=1),(e.translate>=$m&&e.translate<=eh||isNaN(e.translate))&&(e.translate=0)}function ih(e,t,n,r){rh(e.x,t.x,n.x,r?r.originX:void 0),rh(e.y,t.y,n.y,r?r.originY:void 0)}function ah(e,t,n){e.min=n.min+t.min,e.max=e.min+th(t)}function oh(e,t,n){ah(e.x,t.x,n.x),ah(e.y,t.y,n.y)}function sh(e,t,n){e.min=t.min-n.min,e.max=e.min+th(t)}function ch(e,t,n){sh(e.x,t.x,n.x),sh(e.y,t.y,n.y)}function lh(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?xp(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?xp(n,e,r.max):Math.min(e,n)),e}function uh(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function dh(e,{top:t,left:n,bottom:r,right:i}){return{x:uh(e.x,n,i),y:uh(e.y,t,r)}}function fh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function ph(e,t){return{x:fh(e.x,t.x),y:fh(e.y,t.y)}}function mh(e,t){let n=.5,r=th(e),i=th(t);return i>r?n=bp(t.min,t.max-r,e.min):r>i&&(n=bp(e.min,e.max-i,t.min)),Dl(0,1,n)}function hh(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var gh=.35;function _h(e=gh){return e===!1?e=0:e===!0&&(e=gh),{x:vh(e,`left`,`right`),y:vh(e,`top`,`bottom`)}}function vh(e,t,n){return{min:yh(e,t),max:yh(e,n)}}function yh(e,t){return typeof e==`number`?e:e[t]||0}var bh=()=>({translate:0,scale:1,origin:0,originPoint:0}),xh=()=>({x:bh(),y:bh()}),Sh=()=>({min:0,max:0}),Ch=()=>({x:Sh(),y:Sh()});function wh(e){return[e(`x`),e(`y`)]}function Th({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Eh({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Dh(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Oh(e){return e===void 0||e===1}function kh({scale:e,scaleX:t,scaleY:n}){return!Oh(e)||!Oh(t)||!Oh(n)}function Ah(e){return kh(e)||jh(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function jh(e){return Mh(e.x)||Mh(e.y)}function Mh(e){return e&&e!==`0%`}function Nh(e,t,n){return n+t*(e-n)}function Ph(e,t,n,r,i){return i!==void 0&&(e=Nh(e,i,r)),Nh(e,n,r)+t}function Fh(e,t=0,n=1,r,i){e.min=Ph(e.min,t,n,r,i),e.max=Ph(e.max,t,n,r,i)}function Ih(e,{x:t,y:n}){Fh(e.x,t.translate,t.scale,t.originPoint),Fh(e.y,n.translate,n.scale,n.originPoint)}var Lh=.999999999999,Rh=1.0000000000001;function zh(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Hh(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ih(e,o)),r&&Ah(a.latestValues)&&Hh(e,a.latestValues))}t.x<Rh&&t.x>Lh&&(t.x=1),t.y<Rh&&t.y>Lh&&(t.y=1)}function Bh(e,t){e.min+=t,e.max+=t}function Vh(e,t,n,r,i=.5){Fh(e,t,n,xp(e.min,e.max,i),r)}function Hh(e,t){Vh(e.x,t.x,t.scaleX,t.scale,t.originX),Vh(e.y,t.y,t.scaleY,t.scale,t.originY)}function Uh(e,t){return Th(Dh(e.getBoundingClientRect(),t))}function Wh(e,t,n){let r=Uh(e,n),{scroll:i}=t;return i&&(Bh(r.x,i.offset.x),Bh(r.y,i.offset.y)),r}var Gh=({current:e})=>e?e.ownerDocument.defaultView:null,Kh=new WeakMap,qh=class{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ch(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){let{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;let r=e=>{let{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Vu(e,`page`).point)},i=(e,t)=>{var n;let{drag:r,dragPropagation:i,onDragStart:a}=this.getProps();if(r&&!i&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Yu(r),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wh(e=>{let t=this.getAxisMotionValue(e).get()||0;if(zl.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=th(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),a&&Y.postRender(()=>a(e,t)),(n=this.removeWillChange)==null||n.call(this),this.removeWillChange=Tm(this.visualElement,`transform`);let{animationState:o}=this.visualElement;o&&o.setActive(`whileDrag`,!0)},a=(e,t)=>{let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Yh(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&a(e,t)},o=(e,t)=>this.stop(e,t),s=()=>wh(e=>this.getAnimationState(e)===`paused`&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Wm(e,{onSessionStart:r,onStart:i,onMove:a,onSessionEnd:o,resumeAnimation:s},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Gh(this.visualElement)})}stop(e,t){var n;(n=this.removeWillChange)==null||n.call(this);let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:i}=t;this.startAnimation(i);let{onDragEnd:a}=this.getProps();a&&Y.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive(`whileDrag`,!1)}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Jh(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=lh(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Ic(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?dh(n.layoutBox,e):!1,this.elastic=_h(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&wh(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=hh(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ic(e))return!1;let n=e.current;il(n!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=Wh(n,r.root,this.visualElement.getTransformPagePoint()),a=ph(r.layout.layoutBox,i);if(t){let e=t(Eh(a));this.hasMutatedConstraints=!!e,e&&(a=Th(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=wh(o=>{if(!Jh(o,t,this.currentDirection))return;let c=s&&s[o]||{};a&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return n.start(pm(e,n,0,t,this.visualElement,!1,Tm(this.visualElement,e)))}stopAnimation(){wh(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){wh(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){wh(t=>{let{drag:n}=this.getProps();if(!Jh(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-xp(n,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ic(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};wh(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=mh({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),wh(t=>{if(!Jh(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(xp(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;Kh.set(this.visualElement,this);let e=this.visualElement.current,t=Uu(e,`pointerdown`,e=>{let{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),n=()=>{let{dragConstraints:e}=this.getProps();Ic(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener(`measure`,n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Y.read(n);let a=zu(window,`resize`,()=>this.scalePositionWithinConstraints()),o=r.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(wh(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{a(),t(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=gh,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Jh(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Yh(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Xh=class extends Zu{constructor(e){super(e),this.removeGroupControls=nl,this.removeListeners=nl,this.controls=new qh(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nl}unmount(){this.removeGroupControls(),this.removeListeners()}},Zh=e=>(t,n)=>{e&&Y.postRender(()=>e(t,n))},Qh=class extends Zu{constructor(){super(...arguments),this.removePointerDownListener=nl}onPointerDown(e){this.session=new Wm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Gh(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Zh(e),onStart:Zh(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Y.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Uu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};function $h(){let e=(0,M.useContext)(Cc);if(e===null)return[!0,null];let{isPresent:t,onExitComplete:n,register:r}=e,i=(0,M.useId)();(0,M.useEffect)(()=>r(i),[]);let a=(0,M.useCallback)(()=>n&&n(i),[i,n]);return!t&&n?[!1,a]:[!0]}var eg={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function tg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var ng={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(J.test(e))e=parseFloat(e);else return e}return`${tg(e,t.target.x)}% ${tg(e,t.target.y)}%`}},rg={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=wf.parse(e);if(i.length>5)return r;let a=wf.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=xp(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ig=class extends M.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;pl(og),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),eg.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||t===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Y.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Pc.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function ag(e){let[t,n]=$h(),r=(0,M.useContext)(el);return(0,B.jsx)(ig,{...e,layoutGroup:r,switchLayoutGroup:(0,M.useContext)(Lc),isPresent:t,safeToRemove:n})}var og={borderRadius:{...ng,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:ng,borderTopRightRadius:ng,borderBottomLeftRadius:ng,borderBottomRightRadius:ng,boxShadow:rg},sg=[`TopLeft`,`TopRight`,`BottomLeft`,`BottomRight`],cg=sg.length,lg=e=>typeof e==`string`?parseFloat(e):e,ug=e=>typeof e==`number`||J.test(e);function dg(e,t,n,r,i,a){i?(e.opacity=xp(0,n.opacity===void 0?1:n.opacity,pg(r)),e.opacityExit=xp(t.opacity===void 0?1:t.opacity,0,mg(r))):a&&(e.opacity=xp(t.opacity===void 0?1:t.opacity,n.opacity===void 0?1:n.opacity,r));for(let i=0;i<cg;i++){let a=`border${sg[i]}Radius`,o=fg(t,a),s=fg(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||ug(o)===ug(s)?(e[a]=Math.max(xp(lg(o),lg(s),r),0),(zl.test(s)||zl.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=xp(t.rotate||0,n.rotate||0,r))}function fg(e,t){return e[t]===void 0?e.borderRadius:e[t]}var pg=hg(0,.5,mp),mg=hg(.5,.95,nl);function hg(e,t,n){return r=>r<e?0:r>t?1:n(bp(e,t,r))}function gg(e,t){e.min=t.min,e.max=t.max}function _g(e,t){gg(e.x,t.x),gg(e.y,t.y)}function vg(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function yg(e,t,n,r,i){return e-=t,e=Nh(e,1/n,r),i!==void 0&&(e=Nh(e,1/i,r)),e}function bg(e,t=0,n=1,r=.5,i,a=e,o=e){if(zl.test(t)&&(t=parseFloat(t),t=xp(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=xp(a.min,a.max,r);e===a&&(s-=t),e.min=yg(e.min,t,n,s,i),e.max=yg(e.max,t,n,s,i)}function xg(e,t,[n,r,i],a,o){bg(e,t[n],t[r],t[i],t.scale,a,o)}var Sg=[`x`,`scaleX`,`originX`],Cg=[`y`,`scaleY`,`originY`];function wg(e,t,n,r){xg(e.x,t,Sg,n?n.x:void 0,r?r.x:void 0),xg(e.y,t,Cg,n?n.y:void 0,r?r.y:void 0)}function Tg(e){return e.translate===0&&e.scale===1}function Eg(e){return Tg(e.x)&&Tg(e.y)}function Dg(e,t){return e.min===t.min&&e.max===t.max}function Og(e,t){return Dg(e.x,t.x)&&Dg(e.y,t.y)}function kg(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ag(e,t){return kg(e.x,t.x)&&kg(e.y,t.y)}function jg(e){return th(e.x)/th(e.y)}function Mg(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}var Ng=class{constructor(){this.members=[]}add(e){Eu(this.members,e),e.scheduleRender()}remove(e){if(Du(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t=this.members.findIndex(t=>e===t);if(t===0)return!1;let n;for(let e=t;e>=0;e--){let t=this.members[e];if(t.isPresent!==!1){n=t;break}}return n?(this.promote(n),!0):!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:r}=e.options;r===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}};function Pg(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Fg=(e,t)=>e.depth-t.depth,Ig=class{constructor(){this.children=[],this.isDirty=!1}add(e){Eu(this.children,e),this.isDirty=!0}remove(e){Du(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Fg),this.isDirty=!1,this.children.forEach(e)}};function Lg(e,t){let n=Ad.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Nu(r),e(a-t))};return Y.read(r,!0),()=>Nu(r)}function Rg(e){return e instanceof SVGElement&&e.tagName!==`svg`}function zg(e,t,n){let r=_l(e)?e:ym(e);return r.start(pm(``,r,t,n)),r.animation}var Bg={type:`projectionFrame`,totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Vg=typeof window<`u`&&window.MotionDebug!==void 0,Hg=[``,`X`,`Y`,`Z`],Ug={visibility:`hidden`},Wg=1e3,Gg=0;function Kg(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function qg(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;let{visualElement:t}=e.options;return t?Sm(t)?!0:e.parent&&!e.parent.hasCheckedOptimisedAppear?qg(e.parent):!1:!1}function Jg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Gg++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vg&&(Bg.totalNodes=Bg.resolvedTargetDeltas=Bg.recalculatedProjection=0),this.nodes.forEach(Zg),this.nodes.forEach(i_),this.nodes.forEach(a_),this.nodes.forEach(Qg),Vg&&window.MotionDebug.record(Bg)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ig)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new mm),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t,n=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Rg(t),this.instance=t;let{layoutId:r,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||r)&&(this.isLayoutDirty=!0),e){let n,r=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Lg(r,250),eg.hasAnimatedSinceResize&&(eg.hasAnimatedSinceResize=!1,this.nodes.forEach(r_))})}r&&this.root.registerSharedNode(r,this),this.options.animate!==!1&&a&&(r||i)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let i=this.options.transition||a.getDefaultTransition()||f_,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=a.getProps(),c=!this.targetLayout||!Ag(this.targetLayout,r)||n,l=!t&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,l);let t={...wd(i,`layout`),onPlay:o,onComplete:s};(a.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||r_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Nu(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(o_),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.HandoffCancelAllAnimations&&qg(this)&&window.HandoffCancelAllAnimations(),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(e_);return}this.isUpdating||this.nodes.forEach(t_),this.isUpdating=!1,this.nodes.forEach(n_),this.nodes.forEach(Yg),this.nodes.forEach(Xg),this.clearAllSnapshots();let e=Ad.now();Pu.delta=Dl(0,1e3/60,e-Pu.timestamp),Pu.timestamp=e,Pu.isProcessing=!0,Fu.update.process(Pu),Fu.preRender.process(Pu),Fu.render.process(Pu),Pu.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($g),this.sharedNodes.forEach(s_)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Y.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Y.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ch(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Eg(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&(t||Ah(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),g_(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Ch();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(v_))){let{scroll:e}=this.root;e&&(Bh(t.x,e.offset.x),Bh(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Ch();if(_g(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&_g(t,e),Bh(t.x,i.offset.x),Bh(t.y,i.offset.y))}return t}applyTransform(e,t=!1){let n=Ch();_g(n,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];!t&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Hh(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),Ah(r.latestValues)&&Hh(n,r.latestValues)}return Ah(this.latestValues)&&Hh(n,this.latestValues),n}removeTransform(e){let t=Ch();_g(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!n.instance||!Ah(n.latestValues))continue;kh(n.latestValues)&&n.updateSnapshot();let r=Ch();_g(r,n.measurePageBox()),wg(t,n.latestValues,n.snapshot?n.snapshot.layoutBox:void 0,r)}return Ah(this.latestValues)&&wg(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pu.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!(!this.layout||!(r||i))){if(this.resolvedRelativeTargetAt=Pu.timestamp,!this.targetDelta&&!this.relativeTarget){let e=this.getClosestProjectingParent();e&&e.layout&&this.animationProgress!==1?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ch(),this.relativeTargetOrigin=Ch(),ch(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),_g(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ch(),this.targetWithTransforms=Ch()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),oh(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_g(this.target,this.layout.layoutBox),Ih(this.target,this.targetDelta)):_g(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&this.animationProgress!==1?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ch(),this.relativeTargetOrigin=Ch(),ch(this.relativeTargetOrigin,this.target,e.target),_g(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vg&&Bg.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||kh(this.parent.latestValues)||jh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Pu.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;_g(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;zh(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Ch());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vg(this.prevProjectionDelta.x,this.projectionDelta.x),vg(this.prevProjectionDelta.y,this.projectionDelta.y)),ih(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Mg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Mg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Vg&&Bg.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){var t;if((t=this.options.visualElement)==null||t.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xh(),this.projectionDelta=xh(),this.projectionDeltaWithTransform=xh()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=xh();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Ch(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(d_));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;c_(a.x,e.x,n),c_(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ch(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),u_(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Og(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Ch(),_g(d,this.relativeTarget)),s&&(this.animationValues=i,dg(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&=(Nu(this.pendingAnimation),void 0),this.pendingAnimation=Y.update(()=>{eg.hasAnimatedSinceResize=!0,this.currentAnimation=zg(0,Wg,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Wg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&__(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Ch();let t=th(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=th(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}_g(t,n),Hh(t,i),ih(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ng),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Kg(`z`,e,r,this.animationValues);for(let t=0;t<Hg.length;t++)Kg(`rotate${Hg[t]}`,e,r,this.animationValues),Kg(`skew${Hg[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return Ug;let t={visibility:``},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity=``,t.pointerEvents=Cu(e?.pointerEvents)||``,t.transform=n?n(this.latestValues,``):`none`,t;let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){let t={};return this.options.layoutId&&(t.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,t.pointerEvents=Cu(e?.pointerEvents)||``),this.hasProjected&&!Ah(this.latestValues)&&(t.transform=n?n({},``):`none`,this.hasProjected=!1),t}let i=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=Pg(this.projectionDeltaWithTransform,this.treeScale,i),n&&(t.transform=n(i,t.transform));let{x:a,y:o}=this.projectionDelta;t.transformOrigin=`${a.origin*100}% ${o.origin*100}% 0`,t.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let e in fl){if(i[e]===void 0)continue;let{correct:n,applyTo:a}=fl[e],o=t.transform===`none`?i[e]:n(i[e],r);if(a){let e=a.length;for(let n=0;n<e;n++)t[a[n]]=o}else t[e]=o}return this.options.layoutId&&(t.pointerEvents=r===this?Cu(e?.pointerEvents)||``:`none`),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(e_),this.root.sharedNodes.clear()}}}function Yg(e){e.updateLayout()}function Xg(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;i===`size`?wh(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=th(r);r.min=n[e].min,r.max=r.min+i}):__(i,t.layoutBox,n)&&wh(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=th(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=xh();ih(o,n,t.layoutBox);let s=xh();a?ih(s,e.applyTransform(r,!0),t.measuredBox):ih(s,n,t.layoutBox);let c=!Eg(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=Ch();ch(o,t.layoutBox,i.layoutBox);let s=Ch();ch(s,n,a.layoutBox),Ag(o,s)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Zg(e){Vg&&Bg.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Qg(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $g(e){e.clearSnapshot()}function e_(e){e.clearMeasurements()}function t_(e){e.isLayoutDirty=!1}function n_(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function r_(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function i_(e){e.resolveTargetDelta()}function a_(e){e.calcProjection()}function o_(e){e.resetSkewAndRotation()}function s_(e){e.removeLeadSnapshot()}function c_(e,t,n){e.translate=xp(t.translate,0,n),e.scale=xp(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function l_(e,t,n,r){e.min=xp(t.min,n.min,r),e.max=xp(t.max,n.max,r)}function u_(e,t,n,r){l_(e.x,t.x,n.x,r),l_(e.y,t.y,n.y,r)}function d_(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var f_={duration:.45,ease:[.4,0,.1,1]},p_=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),m_=p_(`applewebkit/`)&&!p_(`chrome/`)?Math.round:nl;function h_(e){e.min=m_(e.min),e.max=m_(e.max)}function g_(e){h_(e.x),h_(e.y)}function __(e,t,n){return e===`position`||e===`preserve-aspect`&&!nh(jg(t),jg(n),.2)}function v_(e){return e!==e.root&&e.scroll?.wasRoot}var y_=Jg({attachResizeListener:(e,t)=>zu(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),b_={current:void 0},x_=Jg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!b_.current){let e=new y_({});e.mount(window),e.setOptions({layoutScroll:!0}),b_.current=e}return b_.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),S_={pan:{Feature:Qh},drag:{Feature:Xh,ProjectionNode:x_,MeasureLayout:ag}},C_={current:null},w_={current:!1};function T_(){if(w_.current=!0,wc){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>C_.current=e.matches;e.addListener(t),t()}else C_.current=!1}}function E_(e,t,n){for(let r in t){let i=t[r],a=n[r];if(_l(i))e.addValue(r,i);else if(_l(a))e.addValue(r,ym(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,ym(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var D_=new WeakMap,O_=[...qd,df,wf],k_=e=>O_.find(Kd(e)),A_=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],j_=qc.length,M_=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,blockInitialAnimation:i,visualState:a},o={}){this.applyWillChange=!1,this.resolveKeyframes=(e,t,n,r)=>new this.KeyframeResolver(e,t,n,r,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=tf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,Y.render(this.render,!1,!0))};let{latestValues:s,renderState:c}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=t.initial?{...s}:{},this.renderState=c,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!i,this.isControllingVariants=K(t),this.isVariantNode=Jc(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:l,...u}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in u){let t=u[e];s[e]!==void 0&&_l(t)&&t.set(s[e],!1)}}mount(e){this.current=e,D_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),w_.current||T_(),this.shouldReduceMotion=this.reducedMotionConfig===`never`?!1:this.reducedMotionConfig===`always`||C_.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){D_.delete(this.current),this.projection&&this.projection.unmount(),Nu(this.notifyUpdate),Nu(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){let n=hl.has(e),r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&Y.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on(`renderRequest`,this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in q){let t=q[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ch()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<A_.length;t++){let n=A_[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=E_(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let e=this.parent&&this.parent.getVariantContext()||{};return this.props.initial!==void 0&&(e.initial=this.props.initial),e}let t={};for(let e=0;e<j_;e++){let n=qc[e],r=this.props[n];(Wc(r)||r===!1)&&(t[n]=r)}return t}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=ym(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Nd(n)||jd(n))?n=parseFloat(n):!k_(n)&&wf.test(t)&&(n=jf(e,t)),this.setBaseTarget(e,_l(n)?n.get():n)),_l(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=vu(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!_l(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new mm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}},N_=class extends M_{constructor(){super(...arguments),this.KeyframeResolver=Pf}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}};function P_(e){return window.getComputedStyle(e)}var F_=class extends N_{constructor(){super(...arguments),this.type=`html`,this.applyWillChange=!0,this.renderInstance=fu}readValueFromInstance(e,t){if(hl.has(t)){let e=Af(t);return e&&e.default||0}{let n=P_(e),r=(Sl(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Uh(e,t)}build(e,t,n){Gl(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return hu(e,t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;_l(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},I_=class extends N_{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Ch}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(hl.has(t)){let e=Af(t);return e&&e.default||0}return t=pu.has(t)?t:Dc(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return gu(e,t,n)}build(e,t,n){su(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){mu(e,t,n,r)}mount(e){this.isSVGTag=lu(e.tagName),super.mount(e)}},L_=(e,t)=>dl(e)?new I_(t):new F_(t,{allowProjection:e!==M.Fragment}),R_={layout:{ProjectionNode:x_,MeasureLayout:ag}},z_={...Vm,...pd,...S_,...R_},B_=ll((e,t)=>Ru(e,t,z_,L_)),V_=class extends M.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}};function H_({children:e,isPresent:t}){let n=(0,M.useId)(),r=(0,M.useRef)(null),i=(0,M.useRef)({width:0,height:0,top:0,left:0}),{nonce:a}=(0,M.useContext)(xc);return(0,M.useInsertionEffect)(()=>{let{width:e,height:o,top:s,left:c}=i.current;if(t||!r.current||!e||!o)return;r.current.dataset.motionPopId=n;let l=document.createElement(`style`);return a&&(l.nonce=a),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),(0,B.jsx)(V_,{isPresent:t,childRef:r,sizeRef:i,children:M.cloneElement(e,{ref:r})})}var U_=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{let s=yu(W_),c=(0,M.useId)(),l=(0,M.useMemo)(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:e=>{s.set(e,!0);for(let e of s.values())if(!e)return;r&&r()},register:e=>(s.set(e,!1),()=>s.delete(e))}),a?[Math.random()]:[n]);return(0,M.useMemo)(()=>{s.forEach((e,t)=>s.set(t,!1))},[n]),M.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o===`popLayout`&&(e=(0,B.jsx)(H_,{isPresent:n,children:e})),(0,B.jsx)(Cc.Provider,{value:l,children:e})};function W_(){return new Map}var G_=e=>e.key||``;function K_(e){let t=[];return M.Children.forEach(e,e=>{(0,M.isValidElement)(e)&&t.push(e)}),t}var q_=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:o=`sync`})=>{il(!t,`Replace exitBeforeEnter with mode='wait'`);let s=(0,M.useMemo)(()=>K_(e),[e]),c=s.map(G_),l=(0,M.useRef)(!0),u=(0,M.useRef)(s),d=yu(()=>new Map),[f,p]=(0,M.useState)(s),[m,h]=(0,M.useState)(s);Tc(()=>{l.current=!1,u.current=s;for(let e=0;e<m.length;e++){let t=G_(m[e]);c.includes(t)?d.delete(t):d.get(t)!==!0&&d.set(t,!1)}},[m,c.length,c.join(`-`)]);let g=[];if(s!==f){let e=[...s];for(let t=0;t<m.length;t++){let n=m[t],r=G_(n);c.includes(r)||(e.splice(t,0,n),g.push(n))}o===`wait`&&g.length&&(e=g),h(K_(e)),p(s);return}let{forceRender:_}=(0,M.useContext)(el);return(0,B.jsx)(B.Fragment,{children:m.map(e=>{let t=G_(e),f=s===m||c.includes(t);return(0,B.jsx)(U_,{isPresent:f,initial:!l.current||r?void 0:!1,custom:f?void 0:n,presenceAffectsLayout:a,mode:o,onExitComplete:f?void 0:()=>{if(d.has(t))d.set(t,!0);else return;let e=!0;d.forEach(t=>{t||(e=!1)}),e&&(_?.(),h(u.current),i&&i())},children:e},t)})})},J_=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`,Y_=P.div`
    background-color: #FFFFFF;
    border-radius: 3rem;
    cursor: pointer;
    font-family: var(--open-sans);
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50rem;
    height: 7.5rem;
    position: relative;
    padding: 0 4rem 0 8rem;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 85%;
        height: 5rem;
        padding: 0 2rem 0 5.5rem;
    }
`,X_=P.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`,Z_=P.div`
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`,Q_=P.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }

    @media (max-width: 540px) {
        font-size: 0.6rem;
    }
`,$_=P.h4`
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 540px) {
        font-size: 1.6rem;
    }

    @media (max-width: 540px) {
        font-size: 1.4rem;
    }
`,ev=P.h4`
    background-color: #7342F5;
    color: #FFFFFF;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    position: absolute;
    left: -5%;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 540px) {
        font-size: 1.6rem;
    }

    @media (max-width: 540px) {
        width: 6rem;
        height: 6rem;
        font-size: 1.4rem;
    }
`,tv=P(B_.div)`
    background-color: #FFFFFF;
    font-family: var(--open-sans);
    width: 40rem;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 0;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 85%;
        padding: 2rem;
    }
`,nv=P.div`
    display: flex;
    gap: 1rem;
`,rv=P.img`
    width: 1rem;
    height: 1.75rem;
    transform: translateY(-0.25rem);

    @media (max-width: 540px) {
        width: 0.75rem;
        height: 1.25rem;
        transform: translateY(0)
    }
`,iv=P.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,av=P.h5`
    font-size: 1.2rem;
    font-weight: 700;
    color: #7342F5;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`,ov=P.p`
    font-size: 1rem;

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`,sv=P.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,cv=P.h5`
    font-size: 1.2rem;
    font-weight: 700;
    color: #7342F5;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`,lv=P.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 500;

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`,uv=P.p``,dv=({date:e,title:t,subtitle:n,time:r,location:i,mentors:a,mediators:o,url:s})=>{let[c,l]=(0,M.useState)(!1);return(0,B.jsxs)(J_,{children:[(0,B.jsxs)(Y_,{onClick:()=>{l(!c)},children:[(0,B.jsx)(ev,{children:e}),(0,B.jsxs)(X_,{children:[(0,B.jsx)(Z_,{children:t}),n&&(0,B.jsx)(Q_,{children:n})]}),(0,B.jsx)($_,{children:r})]}),(0,B.jsx)(q_,{children:c&&(0,B.jsxs)(tv,{initial:`hidden`,animate:`visible`,exit:`exit`,variants:{hidden:{opacity:0,y:-20},visible:{opacity:1,y:0},exit:{opacity:0,y:-20}},transition:{duration:.5},children:[(0,B.jsxs)(nv,{children:[(0,B.jsx)(rv,{src:`/labic2/assets/icons/location.png`}),(0,B.jsxs)(iv,{children:[(0,B.jsx)(av,{children:`Local:`}),(0,B.jsx)(ov,{children:i})]})]}),(0,B.jsxs)(sv,{children:[a&&(0,B.jsx)(cv,{children:`Mentores:`}),o&&(0,B.jsx)(cv,{children:`Mediadora:`}),(0,B.jsxs)(lv,{children:[a&&a.map((e,t)=>(0,B.jsx)(uv,{children:e},t)),o&&o.map((e,t)=>(0,B.jsx)(uv,{children:e},t))]})]}),(0,B.jsx)(Os,{text:{value:`Clique aqui e assista`,color:`#ffffff`,fontWeight:700,fontSize:`1rem`},url:s,backgroundColor:`var(--purple-1)`,size:`small`,disabled:!1})]})})]})},fv=P.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0 4rem 0;
    background-color: var(--gradient);
    overflow: hidden;
`,pv=()=>(0,B.jsxs)(fv,{children:[(0,B.jsx)(G,{page:`Scheduling`}),(0,B.jsx)(dv,{date:`18/09`,title:`Abertura e Debate:`,subtitle:`Transição Digital e  Conferência de Abertura com Preto Zezé`,time:`18:30`,location:`Pinacoteca do Ceará`,mentors:[`Ivana Bentes – Pró-Reitora de Extensão da UFRJ`,`Fabiano Piúba – Secretário de Formação Artística e Cultural, Livro e Leitura (SEFLI/MinC)`,`Rian Fontenele – Diretor-Geral e Artístico da Pinacoteca do Ceará`,`Lana Nascimento – Pró-Reitora de Extensão da UECE`,`Bernadete de Souza – Pró-Reitora de Extensão da UFC`,`Tiago Santana – Diretor-Presidente do Instituto Mirante de Cultura Arte`,`Preto Zezé (CUFA)`],url:`https://youtube.com/live/MpB-VX9KyCs?feature=share`}),(0,B.jsx)(dv,{date:`19/09`,title:`Apresentação dos projetos selecionados`,time:`10h`,location:`Pinacoteca do Ceará`,url:` https://youtube.com/live/kmE1a2XAzqM?feature=share`}),(0,B.jsx)(dv,{date:`19/09`,title:`Floresta Ativista: Narrar Mundos (Mídia Ninja)`,time:`14h`,location:`Pinacoteca do Ceará`,mentors:[`MEDIAÇÃO: IVANA BENTES`],url:`https://youtube.com/live/HQR1PvNJGnQ?feature=share`}),(0,B.jsx)(dv,{date:`19/09`,title:`Design Ativista`,time:`15h`,location:`Pinacoteca do Ceará`,mentors:[`Thiago Scherer (Mídia Ninja)`],url:`https://youtube.com/live/0iF-1HQXR-I?feature=share`}),(0,B.jsx)(dv,{date:`20/09`,title:` Inteligência Artificial Centrada nas Pessoas`,time:`10h`,location:`Pinacoteca do Ceará`,mentors:[`Cláudio Miceli (UFRJ)`],url:`https://youtube.com/live/cUBUDJANG98?feature=share`}),(0,B.jsx)(dv,{date:`20/09`,title:`Combate à Desinformação e Educação Midiática`,time:`11h`,location:`Pinacoteca do Ceará`,mentors:[`Tai Nalon (Aos Fatos)`],url:`https://youtube.com/live/vn68vIjQxaI?feature=share`}),(0,B.jsx)(dv,{date:`21/09`,title:`Transição Digital, Memética e Democracia`,time:`09h`,location:`Pinacoteca do Ceará`,mentors:[`Ivana Bentes (UFRJ)`],url:`https://youtube.com/live/fWyOUrRNMPM?feature=share`}),(0,B.jsx)(dv,{date:`21/09`,title:`Circuito Cultural e Formação`,time:`10h`,location:`Pinacoteca do Ceará`,mentors:[`Ivan Ferraro (Mídia Ninja e Feira da Música de Fortaleza)`,`Valéria Cordeiro (Feira da Música de Fortaleza)`],url:`https://youtube.com/live/jgG9vUE2tRg?feature=share`}),(0,B.jsx)(dv,{date:`21/09`,title:`Cultura Periférica`,time:`11h`,location:`Pinacoteca do Ceará`,mentors:[`Alécio Fernandes (Pretim Dalest)`,`Helen de Sá (Princesinha da Favela)`],url:`https://youtube.com/live/VR4ayakulRo?feature=share`}),(0,B.jsx)(dv,{date:`21/09`,title:`Comunicação Territorial e Cultura Digital`,time:`12h`,location:`Pinacoteca do Ceará`,mentors:[`Dani Moura (Comunicação Comunitária)`,`Uirá Porã (FeliciLab e Laboratório do Futuro da UFC)`],url:`https://youtube.com/live/Wt09YlFonL0?feature=share`})]}),mv=()=>(0,B.jsxs)(bc,{children:[(0,B.jsx)(H,{text:`Programação completa do LABIC Fortaleza`,color:`#7342f5`,backgroundColor:`#fcfcfc`,textWidth:`60%`}),(0,B.jsx)(pv,{})]}),hv=P.main`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`,gv=P.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: #ffffff;
    font-family: var(--open-sans);
    padding-bottom: 4rem;
    position: relative;
    background-color: var(--purple-1);
    overflow: hidden;
`,_v=P.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 2;
`,vv=P.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50rem;
    gap: 1rem;

    @media (max-width: 1024px) {
        padding: 0 2rem;
    }
`,yv=P.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1.25rem;
    }
`,bv=P.p`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`,xv=P.video`
    object-fit: cover;
    width: 25rem;
    height: 25rem;

    @media (max-width: 540px) {
        width: 20rem;
        height: 20rem;
    }
`,Sv=`/labic2/assets/videos/labic-video.mp4`,Cv=e=>{switch(e){case`top-left`:return`transform: translate(-90%, -50%);`;case`top-right`:return`transform: translate(90%, -50%);`;case`bottom-left`:return`transform: translate(-53%, 17.5%);`;case`bottom-right`:return`
                bottom: -0.9rem;
                right: -2.3rem;
            `;default:return``}},wv=P.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 2;
`,Tv=P.div`
    background-color: var(--pink-1);
    width: 15rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`,Ev=P.img`
    width: ${e=>e.width};
    height: ${e=>e.height};
    position: absolute;
    ${e=>Cv(e.position)};
`,Dv=P.h3`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
`,Ov=`/labic2/assets/icons/lamp.png`,kv=`/labic2/assets/icons/support.png`,Av=`/labic2/assets/icons/accelerometer.png`,jv=()=>(0,B.jsxs)(wv,{children:[(0,B.jsxs)(Tv,{children:[(0,B.jsx)(Ev,{src:Ov,width:`8rem`,height:`auto`,position:`top-left`}),(0,B.jsx)(Dv,{children:`Desenvolver`})]}),(0,B.jsxs)(Tv,{children:[(0,B.jsx)(Ev,{src:kv,width:`10rem`,height:`auto`,position:`bottom-left`}),(0,B.jsx)(Dv,{children:`Apoiar`})]}),(0,B.jsxs)(Tv,{children:[(0,B.jsx)(Ev,{src:Av,width:`8rem`,height:`auto`,position:`bottom-right`}),(0,B.jsx)(Dv,{children:`Acelerar`})]})]}),Mv=()=>(0,B.jsxs)(gv,{children:[(0,B.jsx)(G,{page:`TheProject`,section:`One`}),(0,B.jsxs)(_v,{children:[(0,B.jsxs)(vv,{children:[(0,B.jsx)(yv,{children:`O Laboratório de Inovação Cidadã da UFRJ é uma rede de ações, pesquisa e formação com objetivo de mapear e sistematizar experiências de referência em tecnologias sociais e inovação no estado do Rio de Janeiro.`}),(0,B.jsx)(bv,{children:`São espaços criados para desenvolver, apoiar e acelerar propostas que surgem e têm potencial para serem replicadas ou ativar outras iniciativas.`})]}),(0,B.jsxs)(xv,{autoPlay:!0,muted:!0,loop:!0,children:[(0,B.jsx)(`source`,{src:Sv,type:`video/mp4`}),`Seu navegador não suporta este vídeo.`]})]}),(0,B.jsx)(jv,{})]}),Nv=`/labic2/assets/images/innovation.jpeg`,Pv=P.section`
    display: flex;
    flex-direction: column;
    background-color: var(--pink-1);
    position: relative;
`,Fv=P.section`
    display: flex;
    background-color: var(--blue-1);

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`,Iv=P.section`
    display: flex;
    flex-direction: column;
    padding: 8rem 8rem;
    width: 70%;
    background-color: var(--blue-1);
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`,Lv=P.h1`
    font-size: 5rem;
    font-weight: 600;
    line-height: 1.25;
    font-family: var(--poppins);
    color: var(--purple-1);
    width: 30rem;
    z-index: 2;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`,Rv=P.span`
    font-style: italic;
`,zv=P.p`
    font-family: var(--open-sans);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    color: #ffffff;
    width: 80%;
    z-index: 2;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`,Bv=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Nv});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 40%;

    @media (max-width: 1024px) {
        width: 100%;
        height: 30rem;
    }
`,Vv=P.div`
    display: flex;
    justify-content: space-between;
    padding: 4rem 0;
    z-index: 2;

    @media (max-width: 1280px) {
        gap: 2rem;
        padding: 2rem 0;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }
`,Hv=P.div`
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 1280px) {
        width: auto;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`,Uv=P.div`
    display: flex;
    justify-content: center;
`,Wv=P.p`
    font-size: 4rem;
    font-family: var(--poppins);
    color: #ffffff;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`,Gv=P.p`
    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
    font-family: var(--poppins);
    text-align: center;
    line-height: 1.25;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;function Kv(){let[e,t]=(0,M.useState)({width:void 0,height:void 0});return(0,M.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener(`resize`,e),e(),()=>window.removeEventListener(`resize`,e)},[]),e}var qv=()=>{let[e]=(0,M.useState)(200),[t]=(0,M.useState)(100),[n]=(0,M.useState)(1500),[r]=(0,M.useState)(2e3),[i,a]=(0,M.useState)(0),o=Kv(),s=()=>o.width&&o.width<480?`2rem`:o.width&&o.width<768?`3rem`:`4rem`;return(0,M.useEffect)(()=>{let e=setInterval(()=>{a(e=>e+1)},15e3);return()=>clearInterval(e)},[]),(0,B.jsxs)(Vv,{children:[(0,B.jsxs)(Hv,{children:[(0,B.jsxs)(Uv,{children:[(0,B.jsx)(Wv,{children:`+`}),(0,B.jsxs)(`p`,{hidden:!0,children:[` key=`,i]}),(0,B.jsx)(`span`,{style:{fontSize:s(),fontFamily:`var(--poppins)`,fontWeight:700,color:`#FFFFFF`},children:e})]}),(0,B.jsx)(Gv,{children:`projetos apoiados`})]}),(0,B.jsxs)(Hv,{children:[(0,B.jsxs)(Uv,{children:[(0,B.jsx)(Wv,{children:`+`}),(0,B.jsx)(`span`,{style:{fontSize:s(),fontFamily:`var(--poppins)`,fontWeight:700,color:`#FFFFFF`},children:t})]}),(0,B.jsx)(Gv,{children:`encontros realizados`})]}),(0,B.jsxs)(Hv,{children:[(0,B.jsxs)(Uv,{children:[(0,B.jsx)(Wv,{children:`+`}),(0,B.jsx)(`span`,{style:{fontSize:s(),fontFamily:`var(--poppins)`,fontWeight:700,color:`#FFFFFF`},children:n})]}),(0,B.jsx)(Gv,{children:`colaboradores`})]}),(0,B.jsxs)(Hv,{children:[(0,B.jsxs)(Uv,{children:[(0,B.jsx)(Wv,{children:`+`}),(0,B.jsx)(`span`,{style:{fontSize:s(),fontFamily:`var(--poppins)`,fontWeight:700,color:`#FFFFFF`},children:r})]}),(0,B.jsx)(Gv,{children:`inscritos nos cursos de extensão`})]})]})},Jv=()=>(0,B.jsxs)(Pv,{children:[(0,B.jsxs)(Fv,{children:[(0,B.jsxs)(Iv,{children:[(0,B.jsx)(G,{page:`TheProject`,section:`Two`}),(0,B.jsxs)(Lv,{children:[(0,B.jsx)(Rv,{children:`Match`}),` da INOVAÇÃO`]}),(0,B.jsx)(zv,{children:`Chamamos de “Match da Inovação” porque aproxima projetos e experiências da cidade com quem pode ajudar a concretizá-los ou melhorá-los.`})]}),(0,B.jsx)(Bv,{})]}),(0,B.jsx)(qv,{})]}),Yv=P.section`
    display: flex;
    padding: 6rem 4rem;
    color: #ffffff;
    font-family: var(--open-sans);
    background-color: var(--purple-1);
    position: relative;
    overflow: hidden;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 4rem 2rem;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        padding: 2rem;
        gap: 2rem;
    }
`,Xv=P.section`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    z-index: 2;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0;
    }
`,Zv=P.p`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1.2rem;
    }
`,Qv=P.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    z-index: 2;

    @media (max-width: 1024px) {
        width: 100%;
        padding: 2rem 0;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`,$v=P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    width: 25rem;
    height: 25rem;
    padding: 2rem;

    @media (max-width: 768px) {
        width: 20rem;
        height: 20rem;
        padding: 0;
    }
`,ey=P.img`
    width: 40rem;
    height: 20rem;

    @media (max-width: 1024px) {
        width: 20rem;
        height: 15rem;
    }
`;P.p`
    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;var ty=`/labic2/assets/images/labic.jpeg`,ny=()=>(0,B.jsxs)(Yv,{children:[(0,B.jsx)(G,{page:`TheProject`,section:`Three`}),(0,B.jsx)(Xv,{children:(0,B.jsx)(Zv,{children:`A iniciativa é realizada pelo Laboratório de Inovação da UFRJ e coordenado pela professora Ivana Bentes desde 2017. O Labic já foi realizado no Rio de Janeiro (2017, 2018, 2019), em Salvador/BA (2019) e Lisboa/PT (2019) e, em 2024, chega a Brasília, novamente ao Rio e a Curitiba. Desde 2020, realizamos edições virtuais e híbridas.`})}),(0,B.jsx)(Qv,{children:(0,B.jsx)($v,{children:(0,B.jsx)(ey,{src:ty})})})]}),ry=P.section`
    display: flex;
    flex-direction: column;
    color: #622def;
    border-radius: 0.5rem;
`,iy=P.section`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`,ay=P.img`
    width: 12rem;

    @media (max-width: 540px) {
        width: 10rem;
    }
`,oy=P.section`
    padding: 0 4rem;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }

    @media (max-width: 540px) {
        padding: 0;
    }
`,sy=P.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    font-family: var(--open-sans);

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`,cy=P.span`
    font-weight: 700;
`,ly=P.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-2);
`,uy=P.img`
    width: 20rem;

    @media (max-width: 768px) {
        width: 15rem;
    }

    @media (max-width: 576px) {
        width: 100%;
    }
`,dy=`/labic2/assets/icons/support-round.png`,fy=`/labic2/assets/images/faperj-logo.png`,py=`/labic2/assets/images/cnpq-logo.png`,my=()=>(0,B.jsxs)(ry,{children:[(0,B.jsxs)(iy,{children:[(0,B.jsx)(ay,{src:dy,alt:`Ícone de suporte`}),(0,B.jsx)(oy,{children:(0,B.jsxs)(sy,{children:[`O Laboratório de Inovação Cidadã conta com o apoio da`,` `,(0,B.jsx)(cy,{children:`FAPERJ`}),`, através da`,` `,(0,B.jsx)(cy,{children:`Bolsa Cientista do Nosso Estado`}),`, e do `,(0,B.jsx)(cy,{children:`CNPQ`}),`.`]})})]}),(0,B.jsxs)(ly,{children:[(0,B.jsx)(uy,{src:fy,alt:`Logo da Faperj`}),(0,B.jsx)(uy,{src:py,alt:`Logo do CNPQ`})]})]}),hy=P.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--purple-1);
`,gy=P.section`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 4rem 0;
    z-index: 1;

    @media (max-width: 540px) {
        gap: 1rem;
        padding: 2rem 0;
    }
`,_y=P.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 25rem;
    height: 25rem;
    padding: 2rem;
    font-family: var(--open-sans);
    background-color: #ffffff;

    @media (max-width: 540px) {
        width: 21rem;
        height: 21rem;
        padding: 1rem;
        gap: 1rem;
    }
`,vy=P.img`
    width: 5rem;
    height: 5rem;
`,yy=P.h2`
    font-size: 1.4rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`,by=P.p`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`,xy=P.a`
    font-size: 1.2rem;
    font-weight: 700;
    color: #000000;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        font-weight: 800;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,Sy=`/labic2/assets/icons/laptop.png`,Cy=`/labic2/assets/icons/technology.png`,wy=`/labic2/assets/icons/book.png`,Ty=`/labic2/assets/icons/coin.png`,Ey=`/labic2/assets/icons/more.png`,Dy=()=>(0,B.jsxs)(hy,{children:[(0,B.jsx)(G,{page:`TheProject`,section:`Five`}),(0,B.jsx)(H,{text:`Principais Eixos Temáticos`,backgroundColor:`var(--purple-4)`}),(0,B.jsx)(gy,{children:[{icon:Sy,title:`Mídias, Ações Virtuais e Diversidade`,content:`Projetos, ações, aplicativos e tecnologias que apresentem iniciativas de comunicação em qualquer suporte e linguagem e que estimulem a diversidade de conteúdos e de produtos de mídias.`},{icon:Cy,title:`Tecnologias, Redes, Dados e Plataformas`,content:`Iniciativas de desenvolvimento de plataformas, redes, aplicativos, programas, tecnologias abertas. Projetos de mineração, análise e visualização de dados.`},{icon:wy,title:`Formação`,content:`Projetos, propostas, metodologias que proponham novas perspectivas em educação, inovação e formação utilizando qualquer linguagem. Como por exemplo: educação inclusiva, formação em rede, livre, de agentes e multiplicadores, formação para a diversidade etc.`},{icon:Ty,title:`Economia e Cidadania`,content:`Iniciativas em novas economias, sustentabilidade, financiamento colaborativo, empreendedorismo social, redes de proteção, inclusão, visibilidade, ampliação de direitos para a diversidade cultural, de gênero, religiosa, étnica etc.`},{icon:Ey,title:`Outros temas`,content:`A diversidade temática do LABIC é vasta e cheia de pluralidade.`,link:{text:`Acesse a programação completa para conhecer todos os eixos!`,url:`https://drive.google.com/file/d/1CF-sd7dLpj80N-NpwenBhwH2WbjkhEpz/view?usp=drivesdk`}}].map((e,t)=>(0,B.jsxs)(_y,{children:[(0,B.jsx)(vy,{src:e.icon,alt:e.title}),(0,B.jsx)(yy,{children:e.title}),(0,B.jsx)(by,{children:e.content}),e.link&&(0,B.jsx)(xy,{href:e.link.url,target:`_blank`,children:e.link.text})]},t))})]}),Oy=P.section`
    display: flex;
    background-image: url(/assets/images/labic-pelo-mundo.png);
    padding: 4rem;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 2rem;
    }
`,ky=P.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
    padding: 2rem 4rem;
    z-index: 1;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`,Ay=P.h1`
    font-family: var(--poppins);
    font-size: 4rem;
    font-weight: 600;
    color: #FFFFFF;

    @media (max-width: 540px) {
        font-size: 3rem;
    }
`,jy=P.p`
    font-family: var(--open-sans);
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 500;
    color: white;

    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;P.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 50%;
    z-index: 1;

    @media (max-width: 1024px) {
        width: 100%;
    }
`,P.img`
    height: auto;
    width: 100%;
`;var My=()=>(0,B.jsxs)(Oy,{children:[(0,B.jsx)(G,{page:`TheProject`,section:`Six`}),(0,B.jsxs)(ky,{children:[(0,B.jsx)(Ay,{children:`Laboratórios no mundo`}),(0,B.jsx)(jy,{children:`O Laboratório de Inovação Cidadã é um projeto da Secretaria-Geral Ibero-americana que tem como objetivo promover a inovação cidadã a fim de fomentar a transformação social, a governança democrática, e o desenvolvimento social, cultural e econômico. Inovação Cidadã é um processo que resolve problemas sociais com tecnologias (digitais, sociais, ancestrais) e metodologias inovadoras, através do envolvimento da própria comunidade afetada. Com isso, os cidadãos deixam de ser receptores passivos de ações institucionais e se convertem em protagonistas e produtores de suas próprias soluções.`})]})]}),Ny=()=>(0,B.jsxs)(hv,{children:[(0,B.jsx)(H,{text:`O Projeto`,color:`#7342f5`,backgroundColor:`var(--white-2)`}),(0,B.jsx)(Mv,{}),(0,B.jsx)(Jv,{}),(0,B.jsx)(ny,{}),(0,B.jsx)(my,{}),(0,B.jsx)(Dy,{}),(0,B.jsx)(My,{})]}),Py=P.div`
    background-image: url(${er});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;P.div`
    display: flex;
    flex-direction: row;
`,P.text`
    text-align: justify;
`,P.img`

`;var Fy=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,Iy=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,Ly=P.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    padding: 0 4rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
        gap: 20px;
    }
`,Ry=P.div`
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 4rem;

    @media (max-width: 768px) {
        width: 90%;
        margin-left: 0;
    }

    @media (max-width: 540px) {
        width: 90%;
        margin-left: 0;
    }
`,zy=P.p`
    color: white;
    text-align: justify;
    font-weight: 600;
    line-height: 1.5;
    font-family: var(--open-sans);
    font-size: ${({size:e})=>{switch(e){case`small`:return`1.2rem`;case`large`:return`1.5rem`;default:return`1.35rem`}}};

    @media (max-width: 768px) {
        font-size: 1.30rem;
        line-height: 1.2;
    }

    @media (max-width: 540px) {
        font-size: 1.2rem;
        line-height: 1.2;
    }
    
`,By=P.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

`,Vy=P.img`
    max-width: 30rem;
    height: 25rem;
`,Hy=({description:e,banner:t,size:n})=>(0,B.jsxs)(Ly,{children:[(0,B.jsx)(Ry,{children:(0,B.jsx)(zy,{size:n,children:e})}),(0,B.jsx)(By,{children:(0,B.jsx)(Vy,{src:t})})]}),Uy=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f83efb;
    width: 200px;
    height: 82px;
    gap: 0.5rem;
    border-radius: 8px;
`,Wy=P.text`
    color: white;
    font-family: var(--open-sans);
    font-size: 1.25rem;
    text-align: center;
    font-weight: 700;
`,X=({num:e,info:t})=>(0,B.jsxs)(Uy,{children:[(0,B.jsx)(Wy,{children:e}),(0,B.jsx)(Wy,{children:t})]}),Gy=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Ky=P.button`
    display: flex;
    justify-content: center;
    background-color: #8616ea;
    align-items: center;
    border-radius: 10px;
    gap: 0.5rem;
    border: none;
    padding: ${({size:e})=>{switch(e){case`small`:return`1.35rem 1.35rem`;case`large`:return`1.35rem 1.35rem`;default:return`1.35rem 1.35rem`}}};
    cursor: pointer;
`,qy=P.text`
    color: white;
    font-weight: 700;
    font-family: var(--open-sans);
    font-size: 1.2rem;
`,Z=({text:e,disabled:t,size:n,url:r})=>(0,B.jsx)(Gy,{children:(0,B.jsx)(Ky,{disabled:t,size:n,onClick:()=>{r&&!t&&window.open(r,`_blank`)},children:(0,B.jsx)(qy,{children:e})})}),Jy=`/labic2/assets/images/B2024/1.jpeg`,Yy=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`,Xy=function(){return(Xy=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function Zy(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Qy=`styles-module_carousel-base__3keqD`,$y=`styles-module_item-provider__YgMwz`,eb=`styles-module_item-container__a8zaY`,tb=`styles-module_item-tracker__3bypy`,nb=`styles-module_carousel-arrow__26sRw`;Zy(`.styles-module_carousel-base__3keqD {
	width: 100%;
	box-sizing: border-box;
	display: flex;
	outline: none;
	position: relative;
}

.styles-module_item-provider__YgMwz {
	overflow: hidden;
	width: 100%;
	cursor: pointer;
}

.styles-module_item-container__a8zaY img {
	-webkit-user-select: none;
	        user-select: none;
	-webkit-user-drag: none;
}

.styles-module_item-tracker__3bypy {
	height: 100%;
	display: flex;
}

.styles-module_carousel-arrow__26sRw {
	z-index: 1;
}
`);var rb,ib=function(e){return M.createElement(`button`,{className:nb,onClick:e.onClick,"data-direction":e.direction})};(function(e){e[e.Right=-1]=`Right`,e[e.Left=1]=`Left`})(rb||={});var ab=function(){function e(e,t){this.arr=e,this.currentIndex=t}return e.prototype.next=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e<t.length-1?e+1:0,this.current()},e.prototype.prev=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e>0&&e<t.length?e-1:t.length-1,this.current()},e.prototype.current=function(){return this.arr[this.currentIndex]},e}(),ob=function(e,t,n){return n*e*t},sb=function(e){var t=e.itemCount,n=e.itemsToShow,r=e.infinite,i=e.current,a=e.hideArrows;if(a!==void 0&&a)return{left:!1,right:!1};var o=t>n;return r?{left:o,right:o}:{left:o&&i!==0,right:o&&i+n<t}},cb=function(e,t,n){if(!n)return e;for(var r=Array.from(e),i=new ab(e,0),a=0;a<t;a++)r.unshift(i.prev());return r};function lb(e){return e.nativeEvent instanceof MouseEvent?e.nativeEvent.pageX:e.nativeEvent instanceof TouchEvent?e.nativeEvent.changedTouches[0].pageX:0}function ub(e,t,n,r,i){if(n&&n.length<t.length)return cb(t,r,i);var a=e.map((function(e){return t.find((function(t){return e.key===t.key}))}));return a.some((function(e){return e===void 0}))?cb(t,r,i):a}var db=function(e){var t=(0,M.useState)(typeof window>`u`?0:window.innerWidth),n=t[0],r=t[1];(0,M.useLayoutEffect)((function(){var t=function(){var t=n-window.innerWidth;r(window.innerWidth),e(t)};return window.addEventListener(`resize`,t),function(){return window.removeEventListener(`resize`,t)}}),[])},fb=function(e){var t=(0,M.useState)(200),n=t[0],r=t[1],i=(0,M.useCallback)((function(t){if(t!==null){var n=t.getBoundingClientRect().width/e.show;r(n),e.widthCallBack(n)}}),[n]);e.responsive&&db((function(e){r(n-e)}));var a=(0,M.useState)({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),o=a[0],s=a[1],c=function(t){t.persist(),s(Xy(Xy({},o),{isDown:!0,start:lb(t),initial:e.transform,finished:!1}))},l=function(t){if(t.persist(),!o.finished){if(Math.abs(o.drag)<n*e.swipeOn)return e.dragCallback(e.transform),s({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});e.slideCallback(o.drag>0?rb.Right:rb.Left),s(Xy(Xy({},o),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},u=function(t){if(t.persist(),o.isDown){var n=lb(t);s(Xy(Xy({},o),{drag:o.start-n,pointers:Math.abs(o.start-n)<e.triggerClickOn}))}},d=e.swiping?{onTouchCancel:l,onTouchEnd:l,onTouchMove:u,onTouchStart:c,onMouseDown:c,onMouseLeave:l,onMouseUp:l,onMouseMove:u}:{};return M.createElement(`div`,{ref:i,className:$y},M.createElement(`div`,Xy({"data-testid":`trackList`},d,{className:tb,style:{transform:`translateX(`+(e.transform-o.drag)+`px)`,transition:`transform `+e.transition+`s ease 0s`,width:n*e.items.length}}),e.items.map((function(e,t){return M.createElement(`div`,{key:t,style:{width:n,pointerEvents:o.pointers?`all`:`none`},className:eb},e)}))))},pb={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:``,useArrowKeys:!1,a11y:{},dynamic:!1,paginationCallback:null,pageCount:0,rightArrow:null,leftArrow:null,autoSwipe:null,navigation:null,triggerClickOn:-(2**53-1),hideArrows:!1,onLeftArrowClick:function(){return null},onRightArrowClick:function(){return null}},mb=`styles-module_carousel-navigation__1g_vs`;Zy(`.styles-module_carousel-navigation__1g_vs {
	display: flex;
	position: absolute;
	bottom: 0;
}
`);var hb=function(e){var t=e.items,n=e.current,r=e.onClick,i=e.factory;return M.createElement(`div`,{className:mb},t.map((function(e,t){return M.createElement(`div`,{onMouseOver:function(){return r(t)},key:t},i(n===t))})))},gb=function(e){var t,n,r=Xy(Xy({},pb),e),i=cb(r.children,r.navigation?r.children.length-1:r.slide,r.infinite),a=(0,M.useState)(i),o=a[0],s=a[1],c=(0,M.useRef)(i),l=(0,M.useState)(0),u=l[0],d=l[1],f=(0,M.useState)({transform:0,transition:0,isSliding:!1}),p=f[0],m=f[1],h=(0,M.useState)(0),g=h[0],_=h[1],v=(0,M.useState)(sb({itemCount:r.children.length,itemsToShow:r.show,infinite:r.infinite,current:g,hideArrows:r.hideArrows})),y=v[0],b=v[1],x=(t=e.children,n=(0,M.useRef)(),(0,M.useEffect)((function(){n.current=t})),n.current),S=(0,M.useState)(0),C=S[0],w=S[1],T=(0,M.useRef)(!1),ee=(0,M.useRef)(null),E=(0,M.useRef)(),D=typeof r.navigation==`function`;r.dynamic&&(0,M.useEffect)((function(){var e=ub(c.current,r.children,x,r.slide,r.infinite);s(e),c.current=e,C<r.pageCount&&x&&x?.length<r.children.length&&(k(rb.Right),w(C+1))}),[r.children]),(0,M.useEffect)((function(){O()}),[]);var O=function(){clearTimeout(E.current),ee&&typeof r.autoSwipe==`number`&&r.autoSwipe>r.transition&&(E.current=setTimeout((function(){ee.current&&ee.current.click()}),r.autoSwipe))},k=function(e,t){if(!(p.isSliding||e===rb.Right&&!y.right||e===rb.Left&&!y.left)){if(r.paginationCallback&&e===rb.Right&&C<r.pageCount-1&&!T.current)return T.current=!0,void r.paginationCallback(e);var n=r.children,i=function(e,t,n,r){var i=e-r*t;return i<0?n+i:n<=i?i-n:i}(g,r.slide,n.length,e),a=typeof t==`number`?t-g:-1*e,l=r.infinite?D?function(e,t,n,r,i,a){var o=function(e,t,n){var r=e+t>=n.length?e+t-n.length:e+t;return r<0?n.length+r:r}(n,i,e),s=Math.floor(t.length/2),c=new ab(e,o),l=Array.from(t);switch(+a){case rb.Left:for(var u=0;u<s;u++){var d=s-(Math.abs(i)+u)-r;(d<0||!l[d])&&l.unshift(c.current()),c.prev()}break;case rb.Right:for(u=0;u<s;u++)l[s+i+u+r]||l.push(c.current()),c.next()}return l}(n,o,i,r.show,a,e):function(e,t,n,r,i,a){var o=new ab(e,n),s=Array.from(t);switch(+a){case rb.Left:for(var c=i;c>=0;c--)(i-c<0||!s[c-i])&&s.unshift(o.current()),o.prev();break;case rb.Right:for(c=0;c<r+i;c++)s[2*i+c]||s.push(o.current()),o.next()}return s}(n,o,i,r.show,r.slide,e):o;r.infinite&&e===rb.Right&&(s(l),c.current=l),m({transform:p.transform+Math.abs(a)*ob(u,r.slide,e),transition:r.transition,isSliding:!0}),_(D&&typeof t==`number`?t:i),b(sb({itemCount:n.length,itemsToShow:r.show,infinite:r.infinite,current:i,hideArrows:r.hideArrows})),setTimeout((function(){if(r.infinite){var n=D?function(e,t,n){return n===rb.Left?e.slice(0,t):e.slice(t)}(e===rb.Right?c.current:l,function(e,t,n,r){return typeof e==`number`?r===rb.Right?e-t+1:n:-1*r}(t,i,a,e),e):function(e,t,n){return n===rb.Left?e.slice(0,-1*t):e.slice(t)}(e===rb.Right?c.current:l,r.slide,e);s(n),c.current=n}m({transform:r.infinite?ob(u,r.navigation?r.children.length-1:r.slide,rb.Right):p.transform+ob(u,r.slide,e),transition:0,isSliding:!1}),O()}),1e3*r.transition),T.current=!1}};return M.createElement(`div`,Xy({},r.a11y,{"data-testid":`carousel`,tabIndex:0},r.useArrowKeys?{onKeyDown:function(e){e.keyCode===37?k(rb.Left):e.keyCode===39&&k(rb.Right)}}:{},{className:Qy+` `+r.className}),y.left&&M.createElement(`div`,{onClick:function(){k(rb.Left),r.onLeftArrowClick&&r.onLeftArrowClick()}},r.leftArrow??M.createElement(ib,{direction:`left`})),M.createElement(fb,Xy({},r,{transition:p.transition,items:c.current,transform:p.transform,slideCallback:function(e){k(e)},dragCallback:function(e){m({transform:e,transition:r.transition,isSliding:!1}),setTimeout((function(){return m(Xy(Xy({},p),{transition:0}))}),1e3*r.transition)},widthCallBack:function(e){d(e),m({transform:r.infinite?ob(e,r.navigation?r.children.length-1:r.slide,rb.Right):0,transition:0,isSliding:!1})}})),y.right&&M.createElement(`div`,{onClick:function(){k(rb.Right),r.onRightArrowClick&&r.onRightArrowClick()},ref:ee},r.rightArrow??M.createElement(ib,{direction:`right`})),D&&M.createElement(hb,{factory:r.navigation,items:r.children,current:g,onClick:function(e){g!==e&&k(e>g?rb.Right:rb.Left,e)}}))};Zy(`.styles-module_sliderBase__swkx1 {
	width: 100%;
	position: relative;
}

.styles-module_slider__o0fqa {
	display: flex;
	overflow-x: auto;
	scrollbar-width: none; /* Firefox 64 */
	-ms-overflow-style: none; /* Internet Explorer 11 */
}

.styles-module_slider__o0fqa::-webkit-scrollbar {
	/** WebKit */
	display: none;
}

.styles-module_slider__o0fqa > * {
	flex: 0 0 auto;
}

.styles-module_sliding__3T6T6 > * {
	pointer-events: none;
}
`);var _b=P.div`
  width: 60px;
  height: 250px;
  //background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  //color: "none";
  //margin-top: 100px;
  //gap: 10px;
  

  
`,vb=P.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`,yb=P.img`
    width: ${e=>e.elements===1?`6rem`:e.elements===2?`10rem`:e.elements===3?`15rem`:`12rem`};
  height: ${e=>e.elements===1?`10.5rem`:e.elements===2?`14,5rem`:e.elements===3?`15rem`:`16.5rem`};

`,bb=`/labic2/assets/images/leftArrow.png`,xb=`/labic2/assets/images/rigthArrow.png`,Sb=({items:e})=>{let t=Kv(),n=()=>t.width&&t.width<=480?1:t.width&&t.width<=1024?2:3;return(0,B.jsx)(gb,{show:n(),slide:1,transition:1,responsive:!0,dynamic:!0,leftArrow:(0,B.jsx)(_b,{direction:`left`,children:(0,B.jsx)(vb,{src:xb})}),rightArrow:(0,B.jsx)(_b,{direction:`right`,children:(0,B.jsx)(vb,{src:bb})}),children:e.map((e,t)=>(0,B.jsx)(yb,{src:e.src,elements:n()},t))})},Cb=`/labic2/assets/images/B2024/2.jpeg`,wb=`/labic2/assets/images/B2024/3.jpeg`,Tb=`/labic2/assets/images/B2024/4.jpeg`,Eb=`/labic2/assets/images/B2024/5.jpeg`,Db=`/labic2/assets/images/B2024/6.jpeg`,Ob=`/labic2/assets/images/B2024/7.jpeg`,kb=`/labic2/assets/images/B2024/8.jpeg`,Ab=`/labic2/assets/images/B2024/9.jpeg`,jb=`/labic2/assets/images/B2024/10.jpeg`,Mb=`/labic2/assets/images/B2024/11.jpeg`,Nb=`/labic2/assets/images/B2024/12.jpeg`,Pb=`/labic2/assets/images/B2024/13.jpeg`,Fb=`/labic2/assets/images/B2024/14.jpeg`,Ib=`/labic2/assets/images/B2024/15.jpeg`,Lb=`/labic2/assets/images/B2024/16.jpeg`,Rb=`/labic2/assets/images/B2024/17.jpeg`,zb=`/labic2/assets/images/B2024/18.jpeg`,Bb=`/labic2/assets/images/B2024/20.jpeg`,Vb=`/labic2/assets/images/B2024/21.jpeg`,Hb=`/labic2/assets/images/B2024/22.jpeg`,Ub=`/labic2/assets/images/B2024/23.jpeg`,Wb=`/labic2/assets/images/B2024/24.jpeg`,Gb=`/labic2/assets/images/B2024/25.jpeg`,Kb=`/labic2/assets/images/B2024/26.jpeg`,qb=`/labic2/assets/images/B2024/27.jpeg`,Jb=`/labic2/assets/images/B2024/28.jpeg`;function Yb(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function Xb(e){Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Zb(e,t=0){return setTimeout(e,t)}function Qb(){return Date.now()}function $b(e){return window.getComputedStyle(e,null)}function ex(e,t=`x`){let n=$b(e),r=n.transform||n.webkitTransform;if(!r||r===`none`)return 0;let i=new DOMMatrixReadOnly(r);return t===`x`?i.m41:i.m42}function tx(e){return typeof e==`object`&&!!e&&!!e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function nx(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement||!!e&&typeof e==`object`&&(e.nodeType===1||e.nodeType===11)}function rx(e,...t){let n=Object(e);for(let e=0;e<t.length;e+=1){let r=t[e];if(r==null||nx(r))continue;let i=r,a=Object.keys(Object(i));for(let e=0,t=a.length;e<t;e+=1){let t=a[e];if(t===`__proto__`||t===`constructor`||t===`prototype`)continue;let r=Object.getOwnPropertyDescriptor(i,t);if(!r||!r.enumerable)continue;let o=i[t];tx(n[t])&&tx(o)?o.__swiper__?n[t]=o:rx(n[t],o):!tx(n[t])&&tx(o)?(n[t]={},o.__swiper__?n[t]=o:rx(n[t],o)):n[t]=o}}return n}function ix(e,t,n){e.style.setProperty(t,n)}function ax(e,t=``){let n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(e=>e.matches(t)):n}function ox(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}return!1}function sx(e,t){let n=t.contains(e);return!n&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||=ox(e,t)),n}function cx(e){try{console.warn(e)}catch{}}function lx(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Yb(t)),n}function ux(e){let t=e.getBoundingClientRect();return{top:t.top-(e.clientTop||0),left:t.left-(e.clientLeft||0)}}function dx(e,t){let n=[],r=e.previousElementSibling;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.previousElementSibling;return n}function fx(e,t){let n=[],r=e.nextElementSibling;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.nextElementSibling;return n}function px(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}function mx(e){if(!(!e||!e.parentNode))return[...e.parentNode.children].indexOf(e)}function hx(e,t){let n=[],r=e.parentElement;for(;r;)(!t||r.matches(t))&&n.push(r),r=r.parentElement;return n}function gx(e,t,n){{let n=window.getComputedStyle(e,null);return e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(n.getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(n.getPropertyValue(t===`width`?`margin-left`:`margin-bottom`))}}function _x(e){return(Array.isArray(e)?e:[e]).filter(e=>!!e)}function vx(e,t=``){let n=globalThis.trustedTypes;e.innerHTML=n===void 0?t:n.createPolicy(`html`,{createHTML:e=>e}).createHTML(t)}var yx=`eventsPrefix.injectStyles.injectStylesUrls.modules.init._direction.oneWayMovement.swiperElementNodeName.touchEventsTarget.initialSlide._speed.cssMode.updateOnWindowResize.resizeObserver.nested.focusableElements._enabled._width._height.preventInteractionOnTransition.userAgent.url._edgeSwipeDetection._edgeSwipeThreshold._freeMode._autoHeight.setWrapperSize.virtualTranslate._effect.breakpoints.breakpointsBase._spaceBetween._slidesPerView.maxBackfaceHiddenSlides._grid._slidesPerGroup._slidesPerGroupSkip._slidesPerGroupAuto._centeredSlides._centeredSlidesBounds._slidesOffsetBefore._slidesOffsetAfter.normalizeSlideIndex._centerInsufficientSlides._snapToSlideEdge._watchOverflow.roundLengths.touchRatio.touchAngle.simulateTouch._shortSwipes._longSwipes.longSwipesRatio.longSwipesMs._followFinger.allowTouchMove._threshold.touchMoveStopPropagation.touchStartPreventDefault.touchStartForcePreventDefault.touchReleaseOnEdges.uniqueNavElements._resistance._resistanceRatio._watchSlidesProgress._grabCursor.preventClicks.preventClicksPropagation._slideToClickedSlide._loop.loopAdditionalSlides.loopAddBlankSlides.loopPreventsSliding._rewind._allowSlidePrev._allowSlideNext._swipeHandler._noSwiping.noSwipingClass.noSwipingSelector.passiveListeners.containerModifierClass.slideClass.slideActiveClass.slideVisibleClass.slideFullyVisibleClass.slideNextClass.slidePrevClass.slideBlankClass.wrapperClass.lazyPreload.lazyPreloaderClass.lazyPreloadPrevNext.runCallbacksOnInit.observer.observeParents.observeSlideChildren.a11y._autoplay._controller.coverflowEffect.cubeEffect.fadeEffect.flipEffect.creativeEffect.cardsEffect.hashNavigation.history.keyboard.mousewheel._navigation._pagination.parallax._scrollbar._thumbs.virtual.zoom.control`.split(`.`);function bx(e){if(typeof e!=`object`||!e)return!1;let t=e;return!!t.constructor&&Object.prototype.toString.call(t).slice(8,-1)===`Object`&&!t.__swiper__}function xx(e,t){let n=e,r=t,i=Object.keys(r);for(let e=0,t=i.length;e<t;e+=1){let t=i[e];if(t===`__proto__`||t===`constructor`||t===`prototype`)continue;let a=r[t],o=n[t];o===void 0?n[t]=a:bx(a)&&bx(o)&&Object.keys(a).length>0?a.__swiper__?n[t]=a:xx(o,a):n[t]=a}return e}function Sx(e={}){let t=e.navigation;return t?t===!0||t.nextEl===void 0&&t.prevEl===void 0:!1}function Cx(e={}){let t=e.pagination;return t?t===!0||t.el===void 0:!1}function wx(e={}){let t=e.scrollbar;return t?t===!0||t.el===void 0:!1}function Tx(e=``){let t=e.split(` `).map(e=>e.trim()).filter(e=>!!e),n=[];return t.forEach(e=>{n.indexOf(e)<0&&n.push(e)}),n.join(` `)}function Ex(e=``){return e?e.includes(`swiper-wrapper`)?e:`swiper-wrapper ${e}`:`swiper-wrapper`}function Dx(e){let{nextEl:t,prevEl:n,scrollbarEl:r,paginationEl:i}=e,{swiper:a,slides:o,passedParams:s,changedParams:c}=e,l=c.filter(e=>e!==`children`&&e!==`direction`&&e!==`wrapperClass`),{params:u,pagination:d,navigation:f,scrollbar:p,virtual:m,thumbs:h}=a,g=s,_=u,v,y,b,x,S,C,w,T,ee=g.thumbs,E=_.thumbs;c.includes(`thumbs`)&&bx(ee)&&ee.swiper&&!ee.swiper.destroyed&&bx(E)&&(!E.swiper||E.swiper.destroyed)&&(v=!0);let D=g.controller,O=_.controller;c.includes(`controller`)&&bx(D)&&D.control&&bx(O)&&!O.control&&(y=!0);let k=g.pagination;c.includes(`pagination`)&&bx(k)&&(k.el||i)&&(_.pagination||_.pagination===!1)&&d&&!d.el&&(b=!0);let te=g.scrollbar;c.includes(`scrollbar`)&&bx(te)&&(te.el||r)&&(_.scrollbar||_.scrollbar===!1)&&p&&!p.el&&(x=!0);let ne=g.navigation;c.includes(`navigation`)&&bx(ne)&&(ne.prevEl||n)&&(ne.nextEl||t)&&(_.navigation||_.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(S=!0);let re=e=>{let t=a[e];if(!t)return;t.destroy();let n=_[e],r=bx(n)?n:void 0;e===`navigation`?(a.isElement&&(t.prevEl?.remove(),t.nextEl?.remove()),r&&(r.prevEl=void 0,r.nextEl=void 0),t.prevEl=void 0,t.nextEl=void 0):(a.isElement&&t.el?.remove(),r&&(r.el=void 0),t.el=void 0)};if(c.includes(`loop`)&&a.isElement&&(u.loop&&!s.loop?C=!0:!u.loop&&s.loop?w=!0:T=!0),l.forEach(e=>{let t=_[e],n=g[e];bx(t)&&bx(n)?(Object.assign(t,n),(e===`navigation`||e===`pagination`||e===`scrollbar`)&&`enabled`in n&&!n.enabled&&re(e)):(n===!0||n===!1)&&(e===`navigation`||e===`pagination`||e===`scrollbar`)?n===!1&&re(e):_[e]=n}),l.includes(`controller`)&&!y&&a.controller&&a.controller.control&&bx(O)&&O.control&&(a.controller.control=O.control),c.includes(`children`)&&o&&m&&u.virtual?.enabled?(m.slides=o,m.update(!0)):c.includes(`virtual`)&&m&&u.virtual?.enabled&&(o&&(m.slides=o),m.update(!0)),c.includes(`children`)&&o&&u.loop&&(T=!0),v&&h&&h.init()&&h.update(!0),y&&a.controller&&bx(O)&&(a.controller.control=O.control),b&&d){if(a.isElement&&(!i||typeof i==`string`)){let e=document.createElement(`div`);e.classList.add(`swiper-pagination`),e.part.add(`pagination`),a.el.appendChild(e),i=e}let e=_.pagination;i&&bx(e)&&(e.el=i),d.init(),d.render(),d.update()}if(x&&p){if(a.isElement&&(!r||typeof r==`string`)){let e=document.createElement(`div`);e.classList.add(`swiper-scrollbar`),e.part.add(`scrollbar`),a.el.appendChild(e),r=e}let e=_.scrollbar;r&&bx(e)&&(e.el=r),p.init(),p.updateSize(),p.setTranslate()}if(S&&f){if(a.isElement){if(!t||typeof t==`string`){let e=document.createElement(`div`);e.classList.add(`swiper-button-next`),vx(e,f.arrowSvg),e.part.add(`button-next`),a.el.appendChild(e),t=e}if(!n||typeof n==`string`){let e=document.createElement(`div`);e.classList.add(`swiper-button-prev`),vx(e,f.arrowSvg),e.part.add(`button-prev`),a.el.appendChild(e),n=e}}let e=_.navigation;t&&bx(e)&&(e.nextEl=t),n&&bx(e)&&(e.prevEl=n),f.init(),f.update()}c.includes(`allowSlideNext`)&&(a.allowSlideNext=g.allowSlideNext),c.includes(`allowSlidePrev`)&&(a.allowSlidePrev=g.allowSlidePrev),c.includes(`direction`)&&a.changeDirection(g.direction,!1),(C||T)&&a.loopDestroy(),(w||T)&&a.loopCreate(),a.update()}var Ox;function kx(){return typeof window>`u`?{touch:!1}:{touch:`ontouchstart`in window||navigator.maxTouchPoints>0}}function Ax(){return Ox||=kx(),Ox}var jx;function Mx({userAgent:e}={}){if(typeof window>`u`)return{ios:!1,android:!1};let t=Ax(),n=navigator.platform,r=e||navigator.userAgent,i={ios:!1,android:!1},a=/(Android);?[\s/]+([\d.]+)?/.test(r),o=/(iPhone\sOS|iOS|iPod)/.test(r),s=/iPad/.test(r),c=n===`MacIntel`&&t.touch&&navigator.maxTouchPoints>1,l=s||c;return a&&n!==`Win32`&&(i.os=`android`,i.android=!0),(l||o)&&(i.os=`ios`,i.ios=!0),i}function Nx(e={}){return jx||=Mx(e),jx}var Px;function Fx(){if(typeof window>`u`)return{isSafari:!1,isWebView:!1,need3dFix:!1};let e=Nx(),t=navigator.userAgent,n=t.toLowerCase(),r=n.includes(`safari`)&&!n.includes(`chrome`)&&!n.includes(`android`),i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t);return{isSafari:r,isWebView:i,need3dFix:r||i&&e.ios}}function Ix(){return Px||=Fx(),Px}var Lx=(e,t)=>{if(!e||e.destroyed||!e.params||!e.params.lazyPreload)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{if(n.shadowRoot){let t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`);t&&!t.lazyPreloaderManaged&&t.remove()}})),t&&!t.lazyPreloaderManaged&&t.remove()}},Rx=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},zx=e=>{if(!e||e.destroyed||!e.params||!e.params.lazyPreload)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&(e.params.grid.rows??1)>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{t.column!==void 0&&a.includes(t.column)&&Rx(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&Rx(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&Rx(e,r)};function Bx(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=t===`window`?window.innerHeight:n.clientHeight,a=Object.keys(e).map(e=>{if(typeof e==`string`&&e.indexOf(`@`)===0){let t=parseFloat(e.substr(1));return{value:i*t,point:e}}return{value:e,point:e}});a.sort((e,t)=>parseInt(String(e.value),10)-parseInt(String(t.value),10));for(let e=0;e<a.length;e+=1){let{point:i,value:o}=a[e];t===`window`?window.matchMedia(`(min-width: ${o}px)`).matches&&(r=i):o<=n.clientWidth&&(r=i)}return r||`max`}var Vx=(e,t)=>!!(e.grid&&t.grid&&t.grid.rows>1);function Hx(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,s=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:document.querySelector(r.breakpointsBase),c=e.getBreakpoint(a,o,s);if(!c||e.currentBreakpoint===c)return;let l=a,u=(c in l?l[c]:void 0)||e.originalParams,d=Vx(e,r),f=Vx(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor();let g=(e,t)=>e[t];[`navigation`,`pagination`,`scrollbar`].forEach(t=>{let n=g(u,t);if(n===void 0)return;let i=g(r,t),a=typeof i==`object`&&!!i&&i.enabled,o=typeof n==`object`&&!!n&&n.enabled,s=e[t];a&&!o&&s?.disable?.(),!a&&o&&s?.enable?.()});let _=u.direction&&u.direction!==r.direction,v=r.loop&&(u.slidesPerView!==r.slidesPerView||_),y=r.loop;_&&n&&e.changeDirection(),rx(e.params,u);let b=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!b?e.disable():!h&&b&&e.enable(),e.currentBreakpoint=c,e.emit(`_beforeBreakpoint`,u),n&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!y&&x?(e.loopCreate(t),e.updateSlides()):y&&!x&&e.loopDestroy()),e.emit(`breakpoint`,u)}var Ux={setBreakpoint:Hx,getBreakpoint:Bx};function Wx(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var Gx={checkOverflow:Wx};function Kx(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function qx(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Kx([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Jx(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var Yx={addClasses:qx,removeClasses:Jx},Xx={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreload:!0,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1},Zx={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=function(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)};return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;if(typeof e[0]==`string`||Array.isArray(e[0]))n=e[0],r=e.slice(1,e.length),i=t;else{let a=e[0];n=a.events,r=a.data??[],i=a.context||t}return r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Qx(e){let t=this;t.destroyed||t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function $x(){let e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}function eS(e){let t=this;t.destroyed||(Lx(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update())}function tS(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual?.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides.length:e.slides.length;e.slideTo(t-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);if(e.autoplay&&e.autoplay.running&&e.autoplay.paused){let t=e.autoplay;clearTimeout(t.resizeTimeout),t.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)}e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function nS(){let e=this;if(e.destroyed)return;let{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.translate=e.isHorizontal()?-t.scrollLeft:-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function rS(e){let t=this;if(t.destroyed)return;let n=t.touchEventsData,r=e.originalEvent??e;if(r.type!==`touchend`&&r.type!==`touchcancel`){if(n.touchId!==null||r.pointerId!==n.pointerId)return}else{let e=[...r.changedTouches].find(e=>e.identifier===n.touchId);if(!e||e.identifier!==n.touchId)return}if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:i,touches:a,rtlTranslate:o,slidesGrid:s,enabled:c}=t;if(!c||!i.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let l=Qb(),u=l-n.touchStartTime;if(t.allowClick){let e=r.path??(r.composedPath&&r.composedPath());t.updateClickedSlide(e&&e[0],e),t.emit(`tap click`,r),u<300&&l-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=Qb(),Zb(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let d;if(d=i.followFinger?o?t.translate:-t.translate:-(n.currentTranslate??0),i.cssMode)return;if(i.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let f=d>=-t.maxTranslate()&&!t.params.loop,p=0,m=t.slidesSizesGrid[0];for(let e=0;e<s.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){let t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;s[e+t]===void 0?(f||d>=s[e])&&(p=e,m=s[s.length-1]-s[s.length-2]):(f||d>=s[e]&&d<s[e+t])&&(p=e,m=s[e+t]-s[e])}let h=null,g=null;i.rewind&&(t.isBeginning?g=i.virtual?.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));let _=(d-s[p])/m,v=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(u>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(_>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?h:p+v):t.slideTo(p)),t.swipeDirection===`prev`&&(_>1-i.longSwipesRatio?t.slideTo(p+v):g!==null&&_<0&&Math.abs(_)>i.longSwipesRatio?t.slideTo(g):t.slideTo(p))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):(t.swipeDirection===`next`&&t.slideTo(h===null?p+v:h),t.swipeDirection===`prev`&&t.slideTo(g===null?p:g))}}function iS(e){let t=this;if(t.destroyed)return;let n=t.touchEventsData,{params:r,touches:i,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&e.pointerType===`mouse`)return;let s=e,c=s.originalEvent??s;if(c.type===`pointermove`&&(n.touchId!==null||c.pointerId!==n.pointerId))return;let l;if(c.type===`touchmove`){let e=[...c.changedTouches].find(e=>e.identifier===n.touchId);if(!e||e.identifier!==n.touchId)return;l=e}else l=c;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){i.startX=u,i.startY=d;return}if(!t.allowTouchMove){c.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=Qb());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(d<i.startY&&t.translate<=t.maxTranslate()||d>i.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(a&&(u>i.startX&&-t.translate<=t.maxTranslate()||u<i.startX&&-t.translate>=t.minTranslate()))return;else if(!a&&(u<i.startX&&t.translate<=t.maxTranslate()||u>i.startX&&t.translate>=t.minTranslate()))return}if(document.activeElement&&document.activeElement.matches(n.focusableElements)&&document.activeElement!==c.target&&c.pointerType!==`mouse`&&document.activeElement.blur(),document.activeElement&&c.target===document.activeElement&&c.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit(`touchMove`,c),i.previousX=i.currentX,i.previousY=i.currentY,i.currentX=u,i.currentY=d;let f=i.currentX-i.startX,p=i.currentY-i.startY;if(t.params.threshold&&Math.sqrt(f**2+p**2)<t.params.threshold)return;if(n.isScrolling===void 0){let e;t.isHorizontal()&&i.currentY===i.startY||t.isVertical()&&i.currentX===i.startX?n.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,n.isScrolling=t.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(n.isScrolling&&t.emit(`touchMoveOpposite`,c),n.startMoving===void 0&&(i.currentX!==i.startX||i.currentY!==i.startY)&&(n.startMoving=!0),n.isScrolling||c.type===`touchmove`&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation();let m=t.isHorizontal()?f:p,h=t.isHorizontal()?i.currentX-i.previousX:i.currentY-i.previousY;r.oneWayMovement&&(m=Math.abs(m)*(a?1:-1),h=Math.abs(h)*(a?1:-1)),i.diff=m,m*=r.touchRatio,a&&(m=-m,h=-h);let g=t.touchesDirection;t.swipeDirection=m>0?`prev`:`next`,t.touchesDirection=h>0?`prev`:`next`;let _=t.params.loop&&!r.cssMode,v=t.touchesDirection===`next`&&t.allowSlideNext||t.touchesDirection===`prev`&&t.allowSlidePrev;if(!n.isMoved){if(_&&v&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(e)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit(`sliderFirstMove`,c)}if(new Date().getTime(),r._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&g!==t.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(i,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit(`sliderMove`,c),n.isMoved=!0;let y=n.startTranslate??0;n.currentTranslate=m+y;let b=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),m>0?(_&&v&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!==`auto`&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(b=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+y+m)**x))):m<0&&(_&&v&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!==`auto`&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView===`auto`?t.slidesPerViewDynamic():Math.ceil(parseFloat(String(r.slidesPerView))))}),n.currentTranslate<t.maxTranslate()&&(b=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-y-m)**x))),b&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection===`next`&&(n.currentTranslate??0)<y&&(n.currentTranslate=y),!t.allowSlidePrev&&t.swipeDirection===`prev`&&(n.currentTranslate??0)>y&&(n.currentTranslate=y),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=y),r.threshold>0){if(Math.abs(m)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,n.currentTranslate=n.startTranslate,i.diff=t.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY;return}}else{n.currentTranslate=n.startTranslate;return}}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate??0))}function aS(e,t){function n(t){if(!t||t===document||t===window)return null;let r=t;r.assignedSlot&&(r=r.assignedSlot);let i=r.closest(e);if(!i&&!r.getRootNode)return null;let a=r.getRootNode();return i||n(a.host)}return n(t)}function oS(e,t,n){let{params:r}=e,i=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return i&&(n<=a||n>=window.innerWidth-a)?i===`prevent`&&(t.preventDefault(),!0):!0}function sS(e){let t=this;if(t.destroyed)return;let n=e.originalEvent??e,r=t.touchEventsData;if(n.type===`pointerdown`){let e=n;if(r.pointerId!==null&&r.pointerId!==e.pointerId)return;r.pointerId=e.pointerId}else n.type===`touchstart`&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type===`touchstart`){oS(t,n,n.targetTouches[0].pageX);return}let{params:i,touches:a,enabled:o}=t;if(!o||!i.simulateTouch&&n.pointerType===`mouse`||t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let s=n.target;if(i.touchEventsTarget===`wrapper`&&!sx(s,t.wrapperEl))return;let c=n;if(typeof c.which==`number`&&c.which===3||typeof c.button==`number`&&c.button>0||r.isTouched&&r.isMoved)return;let l=!!i.noSwipingClass&&i.noSwipingClass!==``,u=n.composedPath?n.composedPath():n.path;l&&n.target&&n.target.shadowRoot&&u&&(s=u[0]);let d=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,f=!!(n.target&&n.target.shadowRoot);if(i.noSwiping&&(f?aS(d,s):s.closest(d))){t.allowClick=!0;return}if(i.swipeHandler&&typeof i.swipeHandler==`string`&&!s.closest(i.swipeHandler))return;let p=n;a.currentX=p.pageX,a.currentY=p.pageY;let m=a.currentX,h=a.currentY;if(!oS(t,n,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=h,r.touchStartTime=Qb(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(r.allowThresholdMove=!1);let g=!0;s.matches(r.focusableElements)&&(g=!1,s.nodeName===`SELECT`&&(r.isTouched=!1)),document.activeElement&&document.activeElement.matches(r.focusableElements)&&document.activeElement!==s&&(p.pointerType===`mouse`||p.pointerType!==`mouse`&&!s.matches(r.focusableElements))&&document.activeElement.blur();let _=g&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||_)&&!s.isContentEditable&&n.preventDefault(),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,n)}var cS=(e,t)=>{let{params:n,el:r,wrapperEl:i,device:a}=e,o=!!n.nested,s=t===`on`?`addEventListener`:`removeEventListener`,c=t;if(!r||typeof r==`string`)return;document[s](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:o}),r[s](`touchstart`,e.onTouchStart,{passive:!1}),r[s](`pointerdown`,e.onTouchStart,{passive:!1}),document[s](`touchmove`,e.onTouchMove,{passive:!1,capture:o}),document[s](`pointermove`,e.onTouchMove,{passive:!1,capture:o}),document[s](`touchend`,e.onTouchEnd,{passive:!0}),document[s](`pointerup`,e.onTouchEnd,{passive:!0}),document[s](`pointercancel`,e.onTouchEnd,{passive:!0}),document[s](`touchcancel`,e.onTouchEnd,{passive:!0}),document[s](`pointerout`,e.onTouchEnd,{passive:!0}),document[s](`pointerleave`,e.onTouchEnd,{passive:!0}),document[s](`contextmenu`,e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[s](`click`,e.onClick,!0),n.cssMode&&i[s](`scroll`,e.onScroll);let l=t=>{e[c](t,tS,!0)};n.updateOnWindowResize?l(a.ios||a.android?`resize orientationchange observerUpdate`:`resize observerUpdate`):l(`observerUpdate`),n.lazyPreload&&r[s](`load`,e.onLoad,{capture:!0})};function lS(){let e=this,{params:t}=e;e.onTouchStart=sS.bind(e),e.onTouchMove=iS.bind(e),e.onTouchEnd=rS.bind(e),e.onDocumentTouchStart=$x.bind(e),t.cssMode&&(e.onScroll=nS.bind(e)),e.onClick=Qx.bind(e),e.onLoad=eS.bind(e),cS(e,`on`)}function uS(){cS(this,`off`)}var dS={attachEvents:lS,detachEvents:uS};function fS(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function pS(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var mS={setGrabCursor:fS,unsetGrabCursor:pS};function hS(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual?.enabled)return;let a=()=>{ax(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,String(t))})},o=()=>{let e=ax(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?lx(`swiper-slide`,[r.slideBlankClass]):lx(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):cx(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):cx(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function gS(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual?.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e,n=t.swiperSlideIndex===void 0?Number(e.getAttribute(`data-swiper-slide-index`)):t.swiperSlideIndex;r[n]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}function _S(e={}){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,initial:o,byController:s,byMousewheel:c}=e,l=a,u=this;if(!u.params.loop)return;u.emit(`beforeLoopFix`),u.__loopFixInProgress__=!0;let{slides:d,allowSlidePrev:f,allowSlideNext:p,slidesEl:m,params:h}=u,{centeredSlides:g,slidesOffsetBefore:_,slidesOffsetAfter:v,initialSlide:y}=h,b=g||!!_||!!v;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&h.virtual?.enabled){if(n){let e=u.virtual.slides.length,t=u.virtual.slidesBefore??0;!b&&u.snapIndex===0?u.slideTo(e,0,!1,!0):b&&u.snapIndex<h.slidesPerView?u.slideTo(e+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(t,0,!1,!0)}u.allowSlidePrev=f,u.allowSlideNext=p,u.__loopFixInProgress__=!1,u.emit(`loopFix`);return}let x=h.slidesPerView;x===`auto`?x=u.slidesPerViewDynamic():(x=Math.ceil(parseFloat(String(h.slidesPerView))),b&&x%2==0&&(x+=1));let S=h.slidesPerGroupAuto?x:h.slidesPerGroup,C=e=>(typeof e==`function`?e.call(u):e)||0,w=u.slidesGrid.length>1?(u.slidesGrid[u.slidesGrid.length-1]-u.slidesGrid[0])/(u.slidesGrid.length-1):u.size,T=w>0?C(_)/w:0,ee=w>0?C(v)/w:0,E=b?Math.max(S,(g?Math.ceil(x/2):0)+Math.ceil(Math.max(T,ee))):S;E%S!==0&&(E+=S-E%S),E+=h.loopAdditionalSlides,u.loopedSlides=E;let D=u.grid&&h.grid&&h.grid.rows>1;d.length<x+E||u.params.effect===`cards`&&d.length<x+E*2?cx(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):D&&h.grid.fill===`row`&&cx("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let O=[],k=[],te=D?Math.ceil(d.length/h.grid.rows):d.length,ne=o&&te-y<x&&!b,re=ne?y:u.activeIndex;l===void 0?l=u.getSlideIndex(d.find(e=>e.classList.contains(h.slideActiveClass))):re=l;let ie=r===`next`||!r,ae=r===`prev`||!r,oe=0,se=0,ce=(D?d[l].column??0:l)+(b&&i===void 0?(g?-x/2+.5:0)-T:0);if(ce<E){oe=Math.max(E-ce,S);for(let e=0;e<E-ce;e+=1){let t=e-Math.floor(e/te)*te;if(D){let e=te-t-1;for(let t=d.length-1;t>=0;--t)d[t].column===e&&O.push(t)}else O.push(te-t-1)}}else if(ce+x>te-E){se=Math.max(ce-(te-E*2),S),ne&&(se=Math.max(se,x-te+y+1));for(let e=0;e<se;e+=1){let t=e-Math.floor(e/te)*te;D?d.forEach((e,n)=>{e.column===t&&k.push(n)}):k.push(t)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),u.params.effect===`cards`&&d.length<x+E*2&&(k.includes(l)&&k.splice(k.indexOf(l),1),O.includes(l)&&O.splice(O.indexOf(l),1)),ae&&O.forEach(e=>{let t=d[e];t.swiperLoopMoveDOM=!0,m.prepend(t),t.swiperLoopMoveDOM=!1}),ie&&k.forEach(e=>{let t=d[e];t.swiperLoopMoveDOM=!0,m.append(t),t.swiperLoopMoveDOM=!1}),u.recalcSlides(),h.slidesPerView===`auto`?u.updateSlides():D&&(O.length>0&&ae||k.length>0&&ie)&&u.slides.forEach((e,t)=>{u.grid.updateSlide(t,e,u.slides)}),h.watchSlidesProgress&&u.updateSlidesOffset(),n){if(O.length>0&&ae){if(t===void 0){let e=u.slidesGrid[re],t=u.slidesGrid[re+oe]-e;c?u.setTranslate(u.translate-t):(u.slideTo(re+Math.ceil(oe),0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-t,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-t))}else if(i){let e=D?O.length/h.grid.rows:O.length;u.slideTo(u.activeIndex+e,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(k.length>0&&ie){if(t===void 0){let e=u.slidesGrid[re],t=u.slidesGrid[re-se]-e;c?u.setTranslate(u.translate-t):(u.slideTo(re-se,0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-t,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-t))}else{let e=D?k.length/h.grid.rows:k.length;u.slideTo(u.activeIndex-e,0,!1,!0)}}}u.allowSlidePrev=f,u.allowSlideNext=p;let A=u.controller?.control;if(A&&!s){let e={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:l,byController:!0};Array.isArray(A)?A.forEach(t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===h.slidesPerView&&n})}):A instanceof u.constructor&&A.params.loop&&A.loopFix({...e,slideTo:A.params.slidesPerView===h.slidesPerView&&n})}u.__loopFixInProgress__=!1,u.emit(`loopFix`)}var vS={loopCreate:hS,loopFix:_S,loopDestroy:gS};function yS(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){rx(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){rx(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),rx(t,n)}}var bS=({swiper:e,extendParams:t,on:n})=>{let r=[],i=(t,n={})=>{let i=window.MutationObserver||window.WebkitMutationObserver;if(!i)return;let a=new i(t=>{if(e.__preventObserver__)return;if(t.length===1){e.emit(`observerUpdate`,t[0]);return}let n=function(){e.emit(`observerUpdate`,t[0])};window.requestAnimationFrame?window.requestAnimationFrame(n):window.setTimeout(n,0)});a.observe(t,{attributes:n.attributes===void 0||n.attributes,childList:e.isElement||n.childList===void 0||n.childList,characterData:n.characterData===void 0||n.characterData}),r.push(a)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=hx(e.hostEl);for(let e=0;e<t.length;e+=1)i(t[e])}i(e.hostEl,{childList:e.params.observeSlideChildren}),i(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{r.forEach(e=>{e.disconnect()}),r.splice(0,r.length)})},xS=({swiper:e,on:t,emit:n})=>{let r=null,i=null,a=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},o=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(t=>{i=window.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,o=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{if(r&&r!==e.el)return;let a=Array.isArray(t)?t[0]:t;i=n?n.width:a.inlineSize,o=n?n.height:a.blockSize}),(i!==n||o!==r)&&a()})}),r.observe(e.el))},s=()=>{i&&window.cancelAnimationFrame(i),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&window.ResizeObserver!==void 0){o();return}window.addEventListener(`resize`,a),window.addEventListener(`orientationchange`,c)}),t(`destroy`,()=>{s(),window.removeEventListener(`resize`,a),window.removeEventListener(`orientationchange`,c)})};function SS(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual?.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function CS(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual?.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual?.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return i.loop&&r.activeIndex===0&&i.cssMode?(requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0):r.slideTo(_,e,t,n)}function wS(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function TS(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual?.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;return t===0?(y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&(a.params.initialSlide??0)>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1})):p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`}),!0}let b=Ix().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function ES(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n,clickedSlide:r,clickedIndex:i}=e;if(r===void 0||i===void 0)return;let a=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,o=e.getSlideIndexWhenGrid(i),s,c=e.isElement?`swiper-slide`:`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;s=parseInt(r.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(s):o>(l?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),o=e.getSlideIndex(ax(n,`${c}[data-swiper-slide-index="${s}"]`)[0]),Zb(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}function DS(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function OS(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop){if(i.virtual&&i.params.virtual?.enabled)o+=i.virtual.slidesBefore??0;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>Number(e.getAttribute(`data-swiper-slide-index`))===t)?.column??0}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u;i.params.slidesPerView===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(String(i.params.slidesPerView))),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>Number(t.getAttribute(`data-swiper-slide-index`))===e)?.column??0}else o=i.getSlideIndexByData(o)}}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}var kS={slideTo:TS,slideToLoop:OS,slideNext:SS,slidePrev:CS,slideReset:wS,slideToClosest:DS,slideToClickedSlide:ES};function AS(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function jS({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function MS(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),jS({swiper:n,runCallbacks:e,direction:t,step:`End`}))}function NS(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),jS({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}var PS={setTransition:AS,transitionStart:NS,transitionEnd:MS};function FS(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=ex(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function IS(){return-this.snapGrid[this.snapGrid.length-1]}function LS(){return-this.snapGrid[0]}function RS(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function zS(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();return t===0?s[e?`scrollLeft`:`scrollTop`]=-u:s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`}),!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var BS={getTranslate:FS,setTranslate:RS,minTranslate:LS,maxTranslate:IS,translateTo:zS};function VS(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function HS(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=t.virtual.slides,r=e-(t.virtual.slidesBefore??0);return r<0&&(r=n.length+r),r>=n.length&&(r-=n.length),r};if(c===void 0&&(c=VS(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual?.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual?.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&zx(t),!t.__loopFixInProgress__&&(t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&((t.__lastEmittedRealIndex__??o)!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`)),t.__lastEmittedRealIndex__=f)}function US(e){let t=this,n=[],r=t.virtual&&t.params.virtual?.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1){if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;let i=o(e);i&&n.push(i)}}else{let e=o(t.activeIndex);e&&n.push(e)}for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function WS(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.clickedIndex=n.virtual&&n.params.virtual?.enabled?parseInt(i.getAttribute(`data-swiper-slide-index`),10):o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}function GS(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o}=t,s=t.progressLoop,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}function KS(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(px(r,`padding-left`)||`0`,10)-parseInt(px(r,`padding-right`)||`0`,10),n=n-parseInt(px(r,`padding-top`)||`0`,10)-parseInt(px(r,`padding-bottom`)||`0`,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function qS(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||`0`)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=!!(e.virtual&&n.virtual?.enabled),c=s?e.virtual.slides.length:e.slides.length,l=ax(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=t=>typeof t==`function`?t.call(e):t,h=m(n.slidesOffsetBefore),g=m(n.slidesOffsetAfter),_=e.snapGrid.length,v=e.slidesGrid.length,y=e.size-h-g,b=n.spaceBetween,x=-h,S=0,C=0;if(y===void 0)return;typeof b==`string`&&b.indexOf(`%`)>=0?b=parseFloat(b.replace(`%`,``))/100*y:typeof b==`string`&&(b=parseFloat(b)),e.virtualSize=-b-h-g,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(ix(r,`--swiper-centered-offset-before`,``),ix(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(ix(r,`--swiper-slides-offset-before`,`${h}px`),ix(r,`--swiper-slides-offset-after`,`${g}px`));let w=n.grid&&n.grid.rows>1&&e.grid;w?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let T=0,ee=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e]?.slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){T=0;let i=l[r];if(!(i&&(w&&e.grid.updateSlide(r,i,l),px(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual?.slidesPerViewAutoSlideSize&&(T=n.virtual.slidesPerViewAutoSlideSize),T&&i&&(n.roundLengths&&(T=Math.floor(T)),i.style[e.getDirectionLabel(`width`)]=`${T}px`);else if(n.slidesPerView===`auto`){ee&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)T=e.isHorizontal()?gx(i,`width`):gx(i,`height`);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)T=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;T=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(T=Math.floor(T))}else T=(y-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(T=Math.floor(T)),i&&(i.style[e.getDirectionLabel(`width`)]=`${T}px`);i&&(i.swiperSlideSize=T),p.push(T),n.centeredSlides?(x=x+T/2+S/2+b,S===0&&r!==0&&(x=x-y/2-b),r===0&&(x=x-y/2-b),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),C%n.slidesPerGroup===0&&d.push(x),f.push(x)):(n.roundLengths&&(x=Math.floor(x)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&d.push(x),f.push(x),x=x+T+b),e.virtualSize+=T+b,S=T,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,y)+g,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+b}px`),w&&e.grid.updateWrapperSize(T,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?b:0),t<=y);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-y&&a.push(o)}d=a,Math.floor(e.virtualSize-y)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-y))}if(s&&n.loop){let t=p[0]+b,r=(e.virtual.slidesBefore??0)+(e.virtual.slidesAfter??0);if(n.slidesPerGroup>1){let e=Math.ceil(r/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let t=0;t<e;t+=1)d.push(d[d.length-1]+i)}for(let i=0;i<r;i+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),b!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${b}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(b||0)}),e-=b;let t=e>y?e-y:0;d=d.map(e=>e<=0?-h:e>t?t+g:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(b||0)}),e-=b,e<y){let t=(y-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ix(r,`--swiper-centered-offset-before`,`${-d[0]}px`),ix(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==_&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==v&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}var JS=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function YS(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=!!(e.virtual&&n.virtual?.enabled),o=e.grid&&n.grid&&n.grid.rows>1,s=e=>ax(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a){if(n.loop){let t=e.virtual.slides,n=i-(e.virtual.slidesBefore??0);n<0&&(n=t.length+n),n>=t.length&&(n-=t.length),c=s(`[data-swiper-slide-index="${n}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`)}else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=fx(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=dx(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{JS(e,e===c,n.slideActiveClass),JS(e,e===u,n.slideNextClass),JS(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}function XS(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var ZS=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function QS(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset??0;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset??0);let u=c.swiperSlideSize??0,d=(o+(n.centeredSlides?t.minTranslate():0)-l)/(u+s),f=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(u+s),p=-(o-l),m=p+t.slidesSizesGrid[e],h=p>=0&&p<=t.size-t.slidesSizesGrid[e],g=p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size;g&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),ZS(c,g,n.slideVisibleClass),ZS(c,h,n.slideFullyVisibleClass),c.progress=i?-d:d,c.originalProgress=i?-f:f}}var $S={eventsEmitter:Zx,update:{updateSize:KS,updateSlides:qS,updateAutoHeight:US,updateSlidesOffset:XS,updateSlidesProgress:QS,updateProgress:GS,updateSlidesClasses:YS,updateActiveIndex:HS,updateClickedSlide:WS},translate:BS,transition:PS,slide:kS,loop:vS,grabCursor:mS,events:dS,breakpoints:Ux,checkOverflow:Gx,classes:Yx},eC={},tC=class e{static extendedDefaults;static defaults;constructor(...t){let n,r;if(t.length===1&&t[0]!==null&&typeof t[0]==`object`&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=rx({},r),n&&!r.el&&(r.el=n),r.el&&typeof r.el==`string`&&typeof document<`u`&&document.querySelectorAll(r.el).length>1){let t=[];return document.querySelectorAll(r.el).forEach(n=>{let i=rx({},r,{el:n});t.push(new e(i))}),t}let i=this;i.__swiper__=!0,i.support=Ax(),i.device=Nx({userAgent:r.userAgent??void 0}),i.browser=Ix(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__||[]],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{let t=e;typeof t==`function`&&i.modules.indexOf(t)<0&&i.modules.push(t)});let a={};if(i.modules.forEach(e=>{e({params:r,swiper:i,extendParams:yS(r,a),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}),i.params=rx({},rx({},Xx,a),eC,r),i.originalParams=rx({},i.params),i.passedParams=rx({},r),i.params&&i.params.on){let e=i.params.on;Object.keys(e).forEach(t=>{let n=e[t];n&&i.on(t,n)})}return i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction===`horizontal`},isVertical(){return i.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit(`_swiper`),i.params.init&&i.init(),i}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}isHorizontal(){return this.params.direction===`horizontal`}isVertical(){return this.params.direction===`vertical`}cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=mx(ax(t,`.${n.slideClass}, swiper-slide`)[0]);return mx(e)-(r??0)}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>Number(t.getAttribute(`data-swiper-slide-index`))===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let{slidesEl:e,params:t}=this;this.slides=ax(e,`.${t.slideClass}, swiper-slide`)}enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit(`enable`))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit(`disable`))}setProgress(e,t){e=Math.min(Math.max(e,0),1);let n=this.minTranslate(),r=(this.maxTranslate()-n)*e+n;this.translateTo(r,t===void 0?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){if(!this.params._emitClasses||!this.el)return;let e=this.el.className.split(` `).filter(e=>e.indexOf(`swiper`)===0||e.indexOf(this.params.containerModifierClass)===0);this.emit(`_containerClasses`,e.join(` `))}getSlideClasses(e){return this.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(this.params.slideClass)===0).join(` `)}emitSlidesClasses(){if(!this.params._emitClasses||!this.el)return;let e=[];this.slides.forEach(t=>{let n=this.getSlideClasses(t);e.push({slideEl:t,classNames:n}),this.emit(`_slideClass`,t,n)}),this.emit(`_slideClasses`,e)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(!o)return c;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize??0):0,t=!1;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize??0),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize??0,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),n.lazyPreload&&[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&Lx(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode?.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual?.enabled?e.virtual.slides.length:e.slides.length;i=e.slideTo(t-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.rtlTranslate=e===`horizontal`&&n.rtl,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;if(typeof document>`u`)return!1;let n=e??t.params.el,r=null;if(typeof n==`string`?r=document.querySelector(n):n instanceof HTMLElement&&(r=n),!r)return!1;r.swiper=t;let i=r.parentNode;i&&i.host&&i.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let a=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,o=r&&r.shadowRoot?r.shadowRoot.querySelector(a()):ax(r,a())[0];!o&&t.params.createElements&&(o=lx(`div`,t.params.wrapperClass),r.append(o),ax(r,`.${t.params.slideClass}`).forEach(e=>{o.append(e)}));let s=t.isElement?r.parentNode.host:null;return Object.assign(t,{el:r,wrapperEl:o,slidesEl:t.isElement&&!s.slideSlots?s:o,hostEl:t.isElement?s:r,mounted:!0,rtl:r.dir.toLowerCase()===`rtl`||px(r,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(r.dir.toLowerCase()===`rtl`||px(r,`direction`)===`rtl`),wrongRTL:px(o,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;if(t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual?.enabled?t.slideTo((t.params.initialSlide??0)+(t.virtual.slidesBefore??0),0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents(),t.params.lazyPreload){let e=[...t.el.querySelectorAll(`[loading="lazy"]`)];t.isElement&&e.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),e.forEach(e=>{e.complete?Lx(t,e):e.addEventListener(`load`,e=>{Lx(t,e.target)})})}return t.initialized=!0,zx(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),Xb(n)),n.destroyed=!0,null)}static extendDefaults(e){rx(eC,e)}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.defineProperty(tC,"extendedDefaults",{get(){return eC}}),Object.defineProperty(tC,"defaults",{get(){return Xx}});var nC=$S,rC=tC.prototype;Object.keys(nC).forEach(e=>{let t=nC[e];Object.keys(t).forEach(e=>{rC[e]=t[e]})}),tC.use([xS,bS]);function iC(e,t,n,r,i){let a=[];if(!t)return a;let o=e=>{a.indexOf(e)<0&&a.push(e)};if(n&&r){let e=r.map(i),t=n.map(i);e.join(``)!==t.join(``)&&o(`children`),r.length!==n.length&&o(`children`)}return yx.filter(e=>e[0]===`_`).map(e=>e.replace(/_/,``)).forEach(n=>{if(n in e&&n in t){let r=e[n],i=t[n];if(bx(r)&&bx(i)){let e=Object.keys(r),t=Object.keys(i);e.length===t.length?(e.forEach(e=>{r[e]!==i[e]&&o(n)}),t.forEach(e=>{r[e]!==i[e]&&o(n)})):o(n)}else r!==i&&o(n)}}),a}function aC(e={},t=!0){let n={on:{}},r={},i={};xx(n,Xx),n._emitClasses=!0,n.init=!1;let a={},o=yx.map(e=>e.replace(/_/,``)),s={...e};return Object.keys(s).forEach(s=>{let c=e[s];if(c!==void 0){if(o.indexOf(s)>=0)bx(c)?(n[s]={},i[s]={},xx(n[s],c),xx(i[s],c)):(n[s]=c,i[s]=c);else if(s.search(/on[A-Z]/)===0&&typeof c==`function`){let e=`${s[2].toLowerCase()}${s.substring(3)}`,i=c;t?r[e]=i:n.on[e]=i}else a[s]=c}}),[`navigation`,`pagination`,`scrollbar`].forEach(e=>{n[e]===!0&&(n[e]={}),n[e]===!1&&delete n[e]}),{params:n,passedParams:i,rest:a,events:r}}function oC(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;if(Sx(t)&&r&&i){let e=s.params.navigation,t=s.originalParams.navigation;e.nextEl=r,t.nextEl=r,e.prevEl=i,t.prevEl=i}Cx(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),wx(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}var sC=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit(`_virtualUpdated`),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate?.())},cC=(0,M.createContext)(null),lC=(0,M.createContext)(null);function uC(e){return typeof e==`object`&&!!e&&`type`in e&&`props`in e}function dC(e){if(!uC(e))return!1;let{type:t}=e;if(typeof t!=`function`&&typeof t!=`object`)return!1;let n=t.displayName;return!!n&&n.includes(`SwiperSlide`)}function fC(e){let t=[];return M.Children.toArray(e).forEach(e=>{dC(e)?t.push(e):uC(e)&&e.props&&e.props.children&&fC(e.props.children).forEach(e=>t.push(e))}),t}function pC(e){let t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return M.Children.toArray(e).forEach(e=>{if(dC(e))t.push(e);else if(uC(e)&&e.props&&e.props.slot&&e.props.slot in n)n[e.props.slot].push(e);else if(uC(e)&&e.props&&e.props.children){let r=fC(e.props.children);r.length>0?r.forEach(e=>t.push(e)):n[`container-end`].push(e)}else uC(e)&&n[`container-end`].push(e)}),{slides:t,slots:n}}function mC(e,t){return typeof window>`u`?(0,M.useEffect)(e,t):(0,M.useLayoutEffect)(e,t)}function hC(e,t,n){if(!n||!e)return null;let r=e=>{let n=e;return e<0?n=t.length+e:n>=t.length&&(n-=t.length),n},i=e.isHorizontal()?{[e.rtlTranslate?`right`:`left`]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,c=e.params.loop?t.length*2:t.length,l=[];for(let e=s;e<c;e+=1)if(e>=a&&e<=o){let n=t[r(e)];n&&l.push(n)}return l.map((t,n)=>{let r=t.props.virtualIndex;return M.cloneElement(t,{swiper:e,style:i,key:r||t.key||`slide-${n}`})})}var gC=(0,M.forwardRef)(function(e,t){let{className:n,tag:r=`div`,wrapperTag:i=`div`,children:a,onSwiper:o,...s}=e??{},c=!1,[l,u]=(0,M.useState)(`swiper`),[d,f]=(0,M.useState)(null),[p,m]=(0,M.useState)(!1),h=(0,M.useRef)(!1),g=(0,M.useRef)(null),_=(0,M.useRef)(null),v=(0,M.useRef)(null),y=(0,M.useRef)(null),b=(0,M.useRef)(null),x=(0,M.useRef)(null),S=(0,M.useRef)(null),C=(0,M.useRef)(null),{params:w,passedParams:T,rest:ee,events:E}=aC(s),{slides:D,slots:O}=pC(a),k=()=>{m(!p)};Object.assign(w.on,{_containerClasses(e,t){u(t)}});let te=()=>{Object.assign(w.on,E),c=!0;let e={...w};delete e.wrapperClass,_.current=new tC(e);let t=_.current;if(t.virtual&&t.params.virtual?.enabled){t.virtual.slides=D;let e={cache:!1,slides:D,renderExternal:f,renderExternalUpdate:!1};xx(t.params.virtual,e),t.originalParams.virtual&&xx(t.originalParams.virtual,e)}};g.current||te(),_.current&&_.current.on(`_beforeBreakpoint`,k);let ne=()=>{c||!E||!_.current||Object.keys(E).forEach(e=>{_.current.on(e,E[e])})},re=()=>{!E||!_.current||Object.keys(E).forEach(e=>{_.current.off(e,E[e])})};(0,M.useEffect)(()=>()=>{_.current&&_.current.off(`_beforeBreakpoint`,k)}),(0,M.useEffect)(()=>{!h.current&&_.current&&(_.current.emitSlidesClasses(),h.current=!0)}),mC(()=>{if(t&&(typeof t==`function`?t(g.current):t.current=g.current),g.current)return _.current&&_.current.destroyed&&te(),oC({el:g.current,nextEl:b.current,prevEl:x.current,paginationEl:S.current,scrollbarEl:C.current,swiper:_.current},w),o&&_.current&&!_.current.destroyed&&o(_.current),()=>{_.current&&!_.current.destroyed&&_.current.destroy(!0,!1)}},[]),mC(()=>{ne();let e=iC(T,v.current,D,y.current,e=>e.key);return v.current=T,y.current=D,e.length&&_.current&&!_.current.destroyed&&Dx({swiper:_.current,slides:D,passedParams:T,changedParams:e,nextEl:b.current,prevEl:x.current,scrollbarEl:C.current,paginationEl:S.current}),()=>{re()}}),mC(()=>{sC(_.current)},[d]);function ie(){return w.virtual?hC(_.current,D,d):D.map((e,t)=>M.cloneElement(e,{swiper:_.current,swiperSlideIndex:t}))}let ae=r,oe=i;return M.createElement(ae,{ref:g,className:Tx(`${l}${n?` ${n}`:``}`),...ee},M.createElement(lC.Provider,{value:_.current},O[`container-start`],M.createElement(oe,{className:Ex(w.wrapperClass)},O[`wrapper-start`],ie(),O[`wrapper-end`]),Sx(w)&&M.createElement(M.Fragment,null,M.createElement(`div`,{ref:x,className:`swiper-button-prev`}),M.createElement(`div`,{ref:b,className:`swiper-button-next`})),wx(w)&&M.createElement(`div`,{ref:C,className:`swiper-scrollbar`}),Cx(w)&&M.createElement(`div`,{ref:S,className:`swiper-pagination`}),O[`container-end`]))});gC.displayName=`Swiper`;var _C=(0,M.forwardRef)(function(e,t){let{tag:n=`div`,children:r,className:i=``,swiper:a,zoom:o,lazy:s,virtualIndex:c,swiperSlideIndex:l,...u}=e,d=(0,M.useRef)(null),[f,p]=(0,M.useState)(`swiper-slide`),[m,h]=(0,M.useState)(!1);function g(e,t,n){t===d.current&&p(n)}mC(()=>{if(l!==void 0&&d.current&&(d.current.swiperSlideIndex=l),t&&(typeof t==`function`?t(d.current):t.current=d.current),!(!d.current||!a)){if(a.destroyed){f!==`swiper-slide`&&p(`swiper-slide`);return}return a.on(`_slideClass`,g),()=>{a&&a.off(`_slideClass`,g)}}}),mC(()=>{a&&d.current&&!a.destroyed&&p(a.getSlideClasses(d.current))},[a]);let _={isActive:f.indexOf(`swiper-slide-active`)>=0,isVisible:f.indexOf(`swiper-slide-visible`)>=0,isFullyVisible:f.indexOf(`swiper-slide-fully-visible`)>=0,isPrev:f.indexOf(`swiper-slide-prev`)>=0,isNext:f.indexOf(`swiper-slide-next`)>=0},v=()=>typeof r==`function`?r(_):r,y=()=>{h(!0)},b=e=>{e&&(e.lazyPreloaderManaged=!0)},x=n;return M.createElement(x,{ref:d,className:Tx(`${f}${i?` ${i}`:``}`),"data-swiper-slide-index":c,onLoad:y,...u},o&&M.createElement(cC.Provider,{value:_},M.createElement(`div`,{className:`swiper-zoom-container`,"data-swiper-zoom":typeof o==`number`?o:void 0},v(),s&&!m&&M.createElement(`div`,{className:`swiper-lazy-preloader`,ref:b}))),!o&&M.createElement(cC.Provider,{value:_},v(),s&&!m&&M.createElement(`div`,{className:`swiper-lazy-preloader`,ref:b})))});_C.displayName=`SwiperSlide`;var vC=({swiper:e,extendParams:t,on:n,emit:r})=>{t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0,speed:void 0}});function i(){return e.params.keyboard}function a(t){if(!e.enabled)return;let{rtlTranslate:n}=e,a=`originalEvent`in t&&t.originalEvent?t.originalEvent:t,o=a.keyCode||a.charCode,s=i(),c=!!s.pageUpDown,l=c&&o===33,u=c&&o===34,d=o===37,f=o===39,p=o===38,m=o===40;if(!e.allowSlideNext&&(e.isHorizontal()&&f||e.isVertical()&&m||u)||!e.allowSlidePrev&&(e.isHorizontal()&&d||e.isVertical()&&p||l))return!1;if(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)return;let h=document.activeElement;if(h&&(h.isContentEditable||h.nodeName&&(h.nodeName.toLowerCase()===`input`||h.nodeName.toLowerCase()===`textarea`)))return;if(s.onlyInViewport&&(l||u||d||f||p||m)){let t=!1;if(hx(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&hx(e.el,`.${e.params.slideActiveClass}`).length===0)return;let r=e.el,i=r.clientWidth,a=r.clientHeight,o=window.innerWidth,s=window.innerHeight,c=ux(r);n&&(c.left-=r.scrollLeft);let l=[[c.left,c.top],[c.left+i,c.top],[c.left,c.top+a],[c.left+i,c.top+a]];for(let e=0;e<l.length;e+=1){let n=l[e];if(n[0]>=0&&n[0]<=o&&n[1]>=0&&n[1]<=s){if(n[0]===0&&n[1]===0)continue;t=!0}}if(!t)return}let g=s.speed;e.isHorizontal()?((l||u||d||f)&&a.cancelable&&a.preventDefault(),((u||f)&&!n||(l||d)&&n)&&e.slideNext(g),((l||d)&&!n||(u||f)&&n)&&e.slidePrev(g)):((l||u||p||m)&&a.cancelable&&a.preventDefault(),(u||m)&&e.slideNext(g),(l||p)&&e.slidePrev(g)),r(`keyPress`,o)}function o(){e.keyboard.enabled||(document.addEventListener(`keydown`,a),e.keyboard.enabled=!0)}function s(){e.keyboard.enabled&&(document.removeEventListener(`keydown`,a),e.keyboard.enabled=!1)}e.keyboard={enabled:!1,enable:o,disable:s},n(`init`,()=>{i().enabled&&o()}),n(`destroy`,()=>{e.keyboard.enabled&&s()})};function yC(e,t,n,r){let i=n??{},a=t??{};return e.params.createElements&&Object.keys(r).forEach(t=>{if(!i[t]&&i.auto===!0){let n=ax(e.el,`.${r[t]}`)[0];n||(n=lx(`div`,r[t]),n.className=r[t],e.el.append(n)),i[t]=n,a[t]=n}}),i}var bC=`<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`,xC=({swiper:e,extendParams:t,on:n,emit:r})=>{t({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:`swiper-button-disabled`,hiddenClass:`swiper-button-hidden`,lockClass:`swiper-button-lock`,navigationDisabledClass:`swiper-navigation-disabled`}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:bC};function i(){return e.params.navigation}function a(t){let n;return t&&typeof t==`string`&&e.isElement&&(n=e.el.querySelector(t)||e.hostEl.querySelector(t),n)?n:(t&&(typeof t==`string`&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&typeof t==`string`&&n&&n.length>1&&e.el.querySelectorAll(t).length===1?n=e.el.querySelector(t):n&&n.length===1&&(n=n[0])),t&&!n?t:n)}function o(t,n){let r=i();_x(t).forEach(t=>{t&&(t.classList[n?`add`:`remove`](...r.disabledClass.split(` `)),t.tagName===`BUTTON`&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](r.lockClass))})}function s(){let{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop){o(n,!1),o(t,!1);return}o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function c(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r(`navigationPrev`))}function l(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r(`navigationNext`))}function u(){e.params.navigation=yC(e,e.originalParams.navigation,e.params.navigation,{nextEl:`swiper-button-next`,prevEl:`swiper-button-prev`});let t=i();if(!(t.nextEl||t.prevEl))return;let n=a(t.nextEl),r=a(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r});let o=_x(n),s=_x(r),u=(n,r)=>{if(n){if(t.addIcons&&n.matches(`.swiper-button-next,.swiper-button-prev`)&&!n.querySelector(`svg`)){let e=document.createElement(`div`);vx(e,bC);let t=e.querySelector(`svg`);t&&n.appendChild(t),e.remove()}n.addEventListener(`click`,r===`next`?l:c)}!e.enabled&&n&&n.classList.add(...t.lockClass.split(` `))};o.forEach(e=>u(e,`next`)),s.forEach(e=>u(e,`prev`))}function d(){let t=i(),{nextEl:n,prevEl:r}=e.navigation,a=_x(n),o=_x(r),s=(e,n)=>{e.removeEventListener(`click`,n===`next`?l:c),e.classList.remove(...t.disabledClass.split(` `))};a.forEach(e=>s(e,`next`)),o.forEach(e=>s(e,`prev`))}n(`init`,()=>{i().enabled===!1?p():(u(),s())}),n(`toEdge fromEdge lock unlock`,()=>{s()}),n(`destroy`,()=>{d()}),n(`enable disable`,()=>{let t=i(),{nextEl:n,prevEl:r}=e.navigation,a=_x(n),o=_x(r);if(e.enabled){s();return}[...a,...o].filter(e=>!!e).forEach(e=>e.classList.add(t.lockClass))}),n(`click`,(t,n)=>{let a=i(),{nextEl:o,prevEl:s}=e.navigation,c=_x(o),l=_x(s),u=n.target,d=l.includes(u)||c.includes(u);if(e.isElement&&!d){let e=n.composedPath?n.composedPath():[];e.length&&(d=e.find(e=>c.includes(e)||l.includes(e)))}if(a.hideOnClick&&!d){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===u||e.pagination.el.contains(u)))return;let t;c.length?t=c[0].classList.contains(a.hiddenClass):l.length&&(t=l[0].classList.contains(a.hiddenClass)),r(t===!0?`navigationShow`:`navigationHide`),[...c,...l].filter(e=>!!e).forEach(e=>e.classList.toggle(a.hiddenClass))}});let f=()=>{let t=i();e.el.classList.remove(...t.navigationDisabledClass.split(` `)),u(),s()},p=()=>{let t=i();e.el.classList.add(...t.navigationDisabledClass.split(` `)),d()};Object.assign(e.navigation,{enable:f,disable:p,update:s,init:u,destroy:d})};function SC(e=``){return`.${e.trim().replace(/([.:!+/()[\]#>~*^$|=,'"@{}\\])/g,`\\$1`).replace(/ /g,`.`)}`}var CC=e=>!!e.virtual&&!!e.params.virtual?.enabled,wC=e=>!!e.params.freeMode?.enabled,TC=e=>{if(CC(e))return e.virtual.slides.length;let t=e.params.grid?.rows;return e.grid&&t&&t>1?e.slides.length/Math.ceil(t):e.slides.length},EC=({swiper:e,extendParams:t,on:n,emit:r})=>{let i=`swiper-pagination`;t({pagination:{el:null,bulletElement:`span`,clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:`bullets`,dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function s(){return e.params.pagination}function c(){return!s().el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(e,t){let{bulletActiveClass:n}=s();if(!e)return;let r=e[`${t===`prev`?`previous`:`next`}ElementSibling`];r&&(r.classList.add(`${n}-${t}`),r=r[`${t===`prev`?`previous`:`next`}ElementSibling`],r&&r.classList.add(`${n}-${t}-${t}`))}function u(e,t,n){if(e%=n,t%=n,t===e+1)return`next`;if(t===e-1)return`previous`}function d(t){let n=t.target.closest(SC(s().bulletClass));if(!n)return;t.preventDefault();let r=(mx(n)??0)*(e.params.slidesPerGroup??1);if(e.params.loop){if(e.realIndex===r)return;let t=u(e.realIndex,r,e.slides.length);t===`next`?e.slideNext():t===`previous`?e.slidePrev():e.slideToLoop(r)}else e.slideTo(r)}function f(){let t=e.rtl,n=s();if(c())return;let i=_x(e.pagination.el),u,d,f=TC(e),p=e.params.loop?Math.ceil(f/(e.params.slidesPerGroup??1)):e.snapGrid.length;if(e.params.loop?(d=e.previousRealIndex||0,u=(e.params.slidesPerGroup??1)>1?Math.floor(e.realIndex/(e.params.slidesPerGroup??1)):e.realIndex):e.snapIndex===void 0?(d=e.previousIndex||0,u=e.activeIndex||0):(u=e.snapIndex,d=e.previousSnapIndex),n.type===`bullets`&&e.pagination.bullets&&e.pagination.bullets.length>0){let r=e.pagination.bullets,s=0,c=0,f=0;if(n.dynamicBullets){a=gx(r[0],e.isHorizontal()?`width`:`height`);let t=e.isHorizontal()?`width`:`height`;i.forEach(e=>{e.style[t]=`${(a??0)*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&d!==void 0&&(o+=u-(d||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),s=Math.max(u-o,0),c=s+(Math.min(r.length,n.dynamicMainBullets)-1),f=(c+s)/2}if(r.forEach(e=>{let t=[``,`-next`,`-next-next`,`-prev`,`-prev-prev`,`-main`].map(e=>`${n.bulletActiveClass}${e}`).flatMap(e=>typeof e==`string`&&e.includes(` `)?e.split(` `):[e]);e.classList.remove(...t)}),i.length>1)r.forEach(t=>{let r=mx(t);r===u?t.classList.add(...n.bulletActiveClass.split(` `)):e.isElement&&t.setAttribute(`part`,`bullet`),n.dynamicBullets&&r!==void 0&&(r>=s&&r<=c&&t.classList.add(...`${n.bulletActiveClass}-main`.split(` `)),r===s&&l(t,`prev`),r===c&&l(t,`next`))});else{let t=r[u];if(t&&t.classList.add(...n.bulletActiveClass.split(` `)),e.isElement&&r.forEach((e,t)=>{e.setAttribute(`part`,t===u?`bullet-active`:`bullet`)}),n.dynamicBullets){let e=r[s],t=r[c];for(let e=s;e<=c;e+=1)r[e]&&r[e].classList.add(...`${n.bulletActiveClass}-main`.split(` `));l(e,`prev`),l(t,`next`)}}if(n.dynamicBullets){let i=Math.min(r.length,n.dynamicMainBullets+4),o=((a??0)*i-(a??0))/2-f*(a??0),s=t?`right`:`left`,c=e.isHorizontal()?s:`top`;r.forEach(e=>{e.style[c]=`${o}px`})}}i.forEach((t,i)=>{if(n.type===`fraction`&&(t.querySelectorAll(SC(n.currentClass)).forEach(e=>{e.textContent=String(n.formatFractionCurrent(u+1))}),t.querySelectorAll(SC(n.totalClass)).forEach(e=>{e.textContent=String(n.formatFractionTotal(p))})),n.type===`progressbar`){let r;r=n.progressbarOpposite?e.isHorizontal()?`vertical`:`horizontal`:e.isHorizontal()?`horizontal`:`vertical`;let i=(u+1)/p,a=1,o=1;r===`horizontal`?a=i:o=i,t.querySelectorAll(SC(n.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${a}) scaleY(${o})`,t.style.transitionDuration=`${e.params.speed}ms`})}n.type===`custom`&&n.renderCustom?(vx(t,n.renderCustom(e,u+1,p)),i===0&&r(`paginationRender`,t)):(i===0&&r(`paginationRender`,t),r(`paginationUpdate`,t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?`add`:`remove`](n.lockClass)})}function p(){let t=s();if(c())return;let n=TC(e),i=_x(e.pagination.el),a=``;if(t.type===`bullets`){let r=e.params.loop?Math.ceil(n/(e.params.slidesPerGroup??1)):e.snapGrid.length;e.params.freeMode&&wC(e)&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?a+=t.renderBullet.call(e,n,t.bulletClass):a+=`<${t.bulletElement} ${e.isElement?`part="bullet"`:``} class="${t.bulletClass}"></${t.bulletElement}>`}t.type===`fraction`&&(a=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type===`progressbar`&&(a=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(n=>{t.type!==`custom`&&vx(n,a||``),t.type===`bullets`&&e.pagination.bullets.push(...Array.from(n.querySelectorAll(SC(t.bulletClass))))}),t.type!==`custom`&&r(`paginationRender`,i[0])}function m(){e.params.pagination=yC(e,e.originalParams.pagination,e.params.pagination,{el:`swiper-pagination`});let t=s();if(!t.el)return;let n;if(typeof t.el==`string`&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el==`string`&&(n=[...document.querySelectorAll(t.el)]),n||=t.el,!(!n||Array.isArray(n)&&n.length===0)){if(e.params.uniqueNavElements&&typeof t.el==`string`&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1)){let t=n.find(t=>hx(t,`.swiper`)[0]===e.el);t&&(n=t)}Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),_x(n).forEach(n=>{t.type===`bullets`&&t.clickable&&n.classList.add(...(t.clickableClass||``).split(` `)),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type===`bullets`&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type===`progressbar`&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener(`click`,d),e.enabled||n.classList.add(t.lockClass)})}}function h(){let t=s();if(c())return;let n=e.pagination.el;n&&_x(n).forEach(n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(n.classList.remove(...(t.clickableClass||``).split(` `)),n.removeEventListener(`click`,d))}),e.pagination.bullets&&e.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(` `)))}n(`changeDirection`,()=>{if(!e.pagination||!e.pagination.el)return;let t=s();_x(e.pagination.el).forEach(n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),n(`init`,()=>{s().enabled===!1?_():(m(),p(),f())}),n(`activeIndexChange`,()=>{e.snapIndex===void 0&&f()}),n(`snapIndexChange`,()=>{f()}),n(`snapGridLengthChange`,()=>{p(),f()}),n(`destroy`,()=>{h()}),n(`enable disable`,()=>{let{el:t}=e.pagination;if(t){let n=s();_x(t).forEach(t=>t.classList[e.enabled?`remove`:`add`](n.lockClass))}}),n(`lock unlock`,()=>{f()}),n(`click`,(t,n)=>{let i=n.target,a=_x(e.pagination.el),o=s();if(o.el&&o.hideOnClick&&a&&a.length>0&&!i.classList.contains(o.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;a[0].classList.contains(o.hiddenClass)===!0?r(`paginationShow`):r(`paginationHide`),a.forEach(e=>e.classList.toggle(o.hiddenClass))}});let g=()=>{let t=s();e.el.classList.remove(t.paginationDisabledClass);let{el:n}=e.pagination;n&&_x(n).forEach(e=>e.classList.remove(t.paginationDisabledClass)),m(),p(),f()},_=()=>{let t=s();e.el.classList.add(t.paginationDisabledClass);let{el:n}=e.pagination;n&&_x(n).forEach(e=>e.classList.add(t.paginationDisabledClass)),h()};Object.assign(e.pagination,{enable:g,disable:_,render:p,update:f,init:m,destroy:h})};P.div`
    width: 100%;
    height: 100%;
`;var DC=P.img`
    width: 12rem;
    height: 16.5rem;
`;P.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;var OC=({items:e})=>(0,B.jsx)(gC,{spaceBetween:void 0,modules:[xC,EC,vC],slidesPerView:`auto`,onSlideChange:()=>console.log(`slide change`),onSwiper:e=>console.log(e),children:e.map((e,t)=>(0,B.jsx)(_C,{children:(0,B.jsx)(DC,{src:e.src},t)}))}),kC=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,AC=P.button`
    display: flex;
    justify-content: center;
    background-color: #17c2cb69;
    align-items: center;
    border-radius: 10px;
    gap: 0.5rem;
    border: none;
    padding: ${({size:e})=>{switch(e){case`small`:return`1.35rem 1.35rem`;case`large`:return`1.35rem 1.35rem`;default:return`1.35rem 1.35rem`}}};
    cursor: pointer;
`,jC=P.text`
    color: white;
    font-weight: 700;
    font-family: var(--open-sans);
    font-size: 1.2rem;
`,MC=({text:e,disabled:t,size:n,url:r})=>(0,B.jsx)(kC,{children:(0,B.jsx)(AC,{disabled:t,size:n,onClick:()=>{r&&!t&&window.open(r,`_blank`)},children:(0,B.jsx)(jC,{children:e})})}),NC=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:Cb},{src:wb},{src:Tb},{src:Eb},{src:Db},{src:Ob},{src:kb},{src:Ab},{src:jb},{src:Mb},{src:Nb},{src:Pb},{src:Fb},{src:Ib},{src:Lb},{src:Rb},{src:zb},{src:Bb},{src:Vb},{src:Hb},{src:Ub},{src:Wb},{src:Gb},{src:Kb},{src:qb},{src:Jb}];return(0,B.jsxs)(Fy,{children:[(0,B.jsx)(Yy,{children:`LABIC Brasília 2024`}),(0,B.jsx)(Hy,{size:`medium`,description:`Realizada de 2 a 4 de agosto de 2024, o LABIC Brasília \r
            ratificou a importância do enfrentamento à cultura do ódio, às fake news, \r
            à desinformação, ao fanatismo religioso, ao racismo, à xenofobia, ao preconceito \r
            contra pessoas com deficiência. A abertura (1/8) do evento, 'Democracia Hackeada: \r
            cultura digital e redes de combate à informação' foi no Memorial Darcy Ribeiro e \r
            contou com manifestações inspiradoras de Alexandre de Moraes (STF), em vídeo; \r
            Ivana Bentes (UFRJ); Maria Marighella (Funarte); Fabiano Piúba (SEFLI-MinC); \r
            Marcio Tavares (MinC); Samara Costa, (Secom), Priscila Almeida (UnB) e \r
            Felipe Altenfelder (Mídia Ninja).`,banner:Jy}),(0,B.jsxs)(Iy,{children:[(0,B.jsx)(X,{num:`30`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`12`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`34`,info:`MENTORES`})]}),(0,B.jsxs)(Iy,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1GiK3hpg733XKhFV0O45b64BuZXH6jmVe/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1hX_VYXaJlzQ7PgxbSiphF-GXvTuitnP8/view?usp=sharing`}),(0,B.jsx)(MC,{text:`Playlist no Youtube`,size:`small`,url:`https://youtube.com/playlist?list=PLs_n0oj-a3rmCOsMnbOo15LcqFRLD1QQ5&si=W816pn0Nmz1k3NxQ`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC BSB 2024`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(Iy,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(Iy,{children:(0,B.jsx)(Z,{text:`Acesse a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1MU_JaeJ316Tx_kUtiWrGN_b51Ee1CWkg/view?usp=sharing`})})]})},PC=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,FC=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,IC=`/labic2/assets/images/R2023/20.jpeg`,LC=`/labic2/assets/images/R2023/1.jpeg`,RC=`/labic2/assets/images/R2023/2.jpeg`,zC=`/labic2/assets/images/R2023/3.jpeg`,BC=`/labic2/assets/images/R2023/4.jpg`,VC=`/labic2/assets/images/R2023/5.jpeg`,HC=`/labic2/assets/images/R2023/6.jpeg`,UC=`/labic2/assets/images/R2023/7.jpeg`,WC=`/labic2/assets/images/R2023/8.jpeg`,GC=`/labic2/assets/images/R2023/9.jpeg`,KC=`/labic2/assets/images/R2023/10.jpeg`,qC=`/labic2/assets/images/R2023/11.jpeg`,JC=`/labic2/assets/images/R2023/12.jpeg`,YC=`/labic2/assets/images/R2023/13.jpeg`,XC=`/labic2/assets/images/R2023/14.jpeg`,ZC=`/labic2/assets/images/R2023/15.jpeg`,QC=`/labic2/assets/images/R2023/16.jpeg`,$C=`/labic2/assets/images/R2023/17.jpeg`,ew=`/labic2/assets/images/R2023/18.jpeg`,tw=`/labic2/assets/images/R2023/19.jpeg`,nw=`/labic2/assets/images/R2023/21.jpeg`,rw=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:LC},{src:RC},{src:zC},{src:BC},{src:VC},{src:HC},{src:UC},{src:WC},{src:GC},{src:KC},{src:qC},{src:JC},{src:YC},{src:XC},{src:ZC},{src:QC},{src:$C},{src:ew},{src:tw},{src:nw}];return(0,B.jsxs)(PC,{children:[(0,B.jsx)(Yy,{children:`LABIC Ações Transformadoras 2023`}),(0,B.jsx)(Hy,{size:`medium`,description:`Em 2023, o Laboratório de Inovação Cidadã - Ações Transformadoras selecionou 25 projetos \r
            de todo o estado do Rio de Janeiro. As propostas foram apresentadas por projetos, ações, coletivos, \r
            redes e empreendimentos sociais já atuantes, com impacto junto a seu público e com a inovação cidadã, \r
            a cidadania e a diversidade em seu horizonte. Cada uma recebeu R$ 5.000,00, totalizando um investimento \r
            direto de R$ 125.000,00, oriundos de emendas parlamentares, projetos especiais da UFRJ-Parque Tecnológico, \r
            auxílios e agências de fomento. Recursos investidos em ações de inovação, desenvolvimento cultural e tecnológico,\r
            cidadania, meio ambiente e sustentabilidade e diversidade. `,banner:IC}),(0,B.jsxs)(FC,{children:[(0,B.jsx)(X,{num:`25`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`5`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`20`,info:`MENTORES`})]}),(0,B.jsxs)(FC,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1GbUKhallttYlg14422SHT0v_WZ1QUAfg/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1d3X7S6xcFO60hf70tMGjoCocFMC1Mi2N/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DO LABIC AÇÕES TRANSFORMADORAS 2023`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(FC,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(FC,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1yoU0ZuFjwwLwBTGJmOIfkqQ3Wkjv3xMj/view?usp=sharing`})})]})},iw=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,aw=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,ow=`/labic2/assets/images/R2022/1.jpg`,sw=`/labic2/assets/images/R2022/2.jpeg`,cw=`/labic2/assets/images/R2022/3.jpeg`,lw=`/labic2/assets/images/R2022/4.jpeg`,uw=`/labic2/assets/images/R2022/5.jpg`,dw=`/labic2/assets/images/R2022/6.jpeg`,fw=`/labic2/assets/images/R2022/7.jpeg`,pw=`/labic2/assets/images/R2022/8.jpg`,mw=`/labic2/assets/images/R2022/9.jpeg`,hw=`/labic2/assets/images/R2022/10.jpeg`,gw=`/labic2/assets/images/R2022/11.jpeg`,_w=`/labic2/assets/images/R2022/12.jpeg`,vw=`/labic2/assets/images/R2022/13.jpeg`,yw=`/labic2/assets/images/R2022/14.jpeg`,bw=`/labic2/assets/images/R2022/15.jpeg`,xw=`/labic2/assets/images/R2022/16.jpeg`,Sw=`/labic2/assets/images/R2022/17.jpeg`,Cw=`/labic2/assets/images/R2022/18.jpeg`,ww=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:sw},{src:cw},{src:lw},{src:uw},{src:dw},{src:fw},{src:pw},{src:mw},{src:hw},{src:gw},{src:_w},{src:vw},{src:yw},{src:bw},{src:xw},{src:Sw},{src:Cw}];return(0,B.jsxs)(iw,{children:[(0,B.jsx)(Yy,{children:`LABIC FAVELA E UNIVERSIDADE 2022`}),(0,B.jsx)(Hy,{size:`large`,description:`De volta às atividades presenciais, o Laboratório de Inovação Cidadã voltou ao presencial, \r
            seguindo os protocolos de segurança recomendados pelo comitê de combate ao coronavírus da UFRJ. O Labic Favela \r
            e Universidade teve como objetivo apoiar ações de coletivos e organizações de todo o estado do Rio de Janeiro \r
            com ações em 6 Eixos: Ações de Enfrentamento a Covid-19; Mídias e Diversidade; Tecnologias, Redes, Dados e Plataformas; \r
            Ações Culturais; Formação Livre; Economia e Cidadania. `,banner:ow}),(0,B.jsxs)(aw,{children:[(0,B.jsx)(X,{num:`40`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`6`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`24`,info:`MENTORES`})]}),(0,B.jsxs)(aw,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1Cgp9AYALH_Fb8-F8A_CFP5YyroGnkKQw/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1ZO2TsBEEi0ExeXPSM_gID4BpAPi-O_FX/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO FAVELA E UNIVERSIDADE LABIC 2022`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(aw,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(aw,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1yfNfXh9kScIJyZv8UYi9qlQM3tS_-D16/view?usp=sharing`})})]})},Tw=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,Ew=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,Dw=`/labic2/assets/images/R2021_2/1.jpeg`,Ow=`/labic2/assets/images/R2021_2/2.jpeg`,kw=`/labic2/assets/images/R2021_2/3.jpeg`,Aw=`/labic2/assets/images/R2021_2/4.jpeg`,jw=`/labic2/assets/images/R2021_2/5.jpeg`,Mw=`/labic2/assets/images/R2021_2/6.jpeg`,Nw=`/labic2/assets/images/R2021_2/7.jpeg`,Pw=`/labic2/assets/images/R2021_2/8.jpeg`,Fw=`/labic2/assets/images/R2021_2/9.jpeg`,Iw=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:Dw},{src:Ow},{src:kw},{src:Aw},{src:jw},{src:Mw},{src:Nw},{src:Pw},{src:Fw}];return(0,B.jsxs)(Tw,{children:[(0,B.jsx)(Yy,{children:`Monitoria LABIC 2021.2`}),(0,B.jsx)(Hy,{size:`small`,description:`Após 5 anos, 7 edições e mais de 180 projetos atendidos, \r
            o Laboratório de Inovação Cidadã abriu uma chamada para saber como estavam \r
            as iniciativas que fizeram parte do LABIC UFRJ. Quinze desses projetos, \r
            pelo menos um de cada edição, retornaram e tiveram a oportunidade de participar de novos encontros, \r
            criar novas redes e encontrar novas parcerias e apoios. Durante oito encontros, \r
            foram realizadas mentorias específicas para cada um dos selecionados. \r
            Trocamos conhecimento em diversas áreas, como design e comunicação visual; \r
            criação e envio de newsletter; elaboração de projetos e captação de recursos; \r
            gestão de mídias e redes sociais; operação de plataformas de streaming e transmissão ao vivo; \r
            e narrativas. Todo esse material está disponível no Youtube do Pontão através do LABIC Sob Demanda, \r
            que reúne conversas com nossos mentores e mentorias práticas em uma só playlist! `,banner:Dw}),(0,B.jsxs)(Ew,{children:[(0,B.jsx)(X,{num:`15`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`8`,info:`MENTORES`})]}),(0,B.jsxs)(Ew,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1eLt25u7MLNrzVXOVvzutljgwlSE45-_I/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1yT6lf60wwKfLnav7fg6ivNOl5730av6j/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DO MONITORA LABIC 2021.2`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(Ew,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(Ew,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1aq0A7lDQ7uUIZENbbFuppY_aGCESFU8r/view?usp=sharing`})})]})},Lw=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,Rw=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,zw=`/labic2/assets/images/R2021_1/1.jpeg`,Bw=`/labic2/assets/images/R2021_1/2.jpeg`,Vw=`/labic2/assets/images/R2021_1/3.jpeg`,Hw=`/labic2/assets/images/R2021_1/4.jpeg`,Uw=`/labic2/assets/images/R2021_1/5.jpeg`,Ww=`/labic2/assets/images/R2021_1/6.jpeg`,Gw=`/labic2/assets/images/R2021_1/7.jpeg`,Kw=`/labic2/assets/images/R2021_1/8.jpeg`,qw=`/labic2/assets/images/R2021_1/9.jpeg`,Jw=`/labic2/assets/images/R2021_1/10.jpeg`,Yw=`/labic2/assets/images/R2021_1/11.jpeg`,Xw=`/labic2/assets/images/R2021_1/12.jpeg`,Zw=`/labic2/assets/images/R2021_1/13.jpeg`,Qw=`/labic2/assets/images/R2021_1/14.jpeg`,$w=`/labic2/assets/images/R2021_1/15.jpeg`,eT=`/labic2/assets/images/R2021_1/16.jpeg`,tT=`/labic2/assets/images/R2021_1/17.jpeg`,nT=`/labic2/assets/images/R2021_1/18.jpeg`,rT=`/labic2/assets/images/R2021_1/19.jpeg`,iT=`/labic2/assets/images/R2021_1/20.jpeg`,aT=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:Bw},{src:Vw},{src:Hw},{src:Uw},{src:Ww},{src:Gw},{src:Kw},{src:qw},{src:Jw},{src:Yw},{src:Xw},{src:Zw},{src:Qw},{src:$w},{src:eT},{src:tT},{src:nT},{src:rT},{src:iT}];return(0,B.jsxs)(Lw,{children:[(0,B.jsx)(Yy,{children:`LABIC Territórios 2021.1`}),(0,B.jsx)(Hy,{size:`medium`,description:`A urgência de vida trazida pela pandemia, sentida de forma ainda mais profunda nas periferias, \r
            nos fez testemunhar que as respostas mais inovadoras de enfrentamento à Covid-19 e suas consequências foram \r
            desenvolvidas justamente nesses territórios. O LABIC Territórios, realizado no primeiro semestre de 2021, \r
            olhou para essas iniciativas, buscou intensificar a troca de experiências entre realizadores, possibilitou a \r
            colaboração de universitários, especialistas, professores, consultores, gestores, numa verdadeira profusão de \r
            troca de conhecimentos, saberes, tecnologias, metodologias, criatividade e inovação. O LABIC Territórios teve \r
            apoio do Pontão de Cultura Digital da Escola de Comunicação da UFRJ, da Pró-Reitoria de Extensão da UFRJ, da \r
            Fundação Universitária José Bonifácio, da FAPERJ e do CNPq.`,banner:zw}),(0,B.jsxs)(Rw,{children:[(0,B.jsx)(X,{num:`17`,info:`PARTICIPAÇÕES ESPECIAIS`}),(0,B.jsx)(X,{num:`12`,info:`ENCONTROS`}),(0,B.jsx)(X,{num:`9`,info:`PODCASTS`}),(0,B.jsx)(X,{num:`40`,info:`PROJETOS`})]}),(0,B.jsxs)(Rw,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1eMViQItbiVUtGUR8R7TTxtdO0oJ84H5I/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1j71TcrkIOoMRCBYmWGZ_G68cLs48r7Ao/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DO LABIC TERRITÓRIOS 2021.1`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(Rw,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(Rw,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1w3wTwFR9CROEHDk1_imL0BrCqHzOJrdI/view?usp=sharing`})}),(0,B.jsx)(Rw,{})]})},oT=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,sT=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,cT=`/labic2/assets/images/R2020/1.jpeg`,lT=`/labic2/assets/images/R2020/2.jpeg`,uT=`/labic2/assets/images/R2020/3.jpeg`,dT=`/labic2/assets/images/R2020/4.jpeg`,fT=`/labic2/assets/images/R2020/5.jpeg`,pT=`/labic2/assets/images/R2020/6.jpeg`,mT=`/labic2/assets/images/R2020/7.jpeg`,hT=`/labic2/assets/images/R2020/8.jpeg`,gT=`/labic2/assets/images/R2020/9.jpeg`,_T=`/labic2/assets/images/R2020/10.jpeg`,vT=`/labic2/assets/images/R2020/11.jpeg`,yT=`/labic2/assets/images/R2020/12.jpeg`,bT=`/labic2/assets/images/R2020/13.jpeg`,xT=`/labic2/assets/images/R2020/14.jpeg`,ST=`/labic2/assets/images/R2020/15.jpeg`,CT=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:lT},{src:uT},{src:dT},{src:fT},{src:pT},{src:mT},{src:hT},{src:gT},{src:_T},{src:vT},{src:yT},{src:bT},{src:xT},{src:ST}];return(0,B.jsxs)(oT,{children:[(0,B.jsx)(Yy,{children:`LABIC Virtual 2020`}),(0,B.jsx)(Hy,{size:`small`,description:`2020 trouxe a pandemia do coronavírus, acarretando mudanças na vida da maioria das pessoas. \r
            Foram tempos de ruas desertas, escolas e universidades fechadas, afastamento sanitário. Nosso desafio era \r
            produzir um LABIC totalmente virtual. oferecendo respostas - vindas de dentro - a essa crise mundial. \r
            Formamos uma equipe de 13 pessoas para atender 40 projetos e gerir 325 colaboradores de todo o Brasil. \r
            De 11 de setembro a 11 de dezembro de 2020, produzimos 13 encontros e reunimos projetos, colaboradores \r
            e mentores às sextas-feiras, das 14h às 19h, em ambiente virtual. Os encontros foram divididos em conferências, \r
            mentorias, oficinas, aconselhamento e consultorias específicas, além de espaços de troca de expertises entre os \r
            grupos e projetos, mesmo num ambiente virtual.`,banner:cT}),(0,B.jsxs)(sT,{children:[(0,B.jsx)(X,{num:`325`,info:`COLABORADORES`}),(0,B.jsx)(X,{num:`65H`,info:`DE TRABALHO`}),(0,B.jsx)(X,{num:`13`,info:`ENCONTROS`}),(0,B.jsx)(X,{num:`40`,info:`PROJETOS`})]}),(0,B.jsxs)(sT,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/11FIpnKhfsPWR9k7be9tiLzLtywLxw63o/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1vLy1N3MOEmyPcVPOuUZeQR_M47YEeFkM/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DO LABIC VIRTUAL 2020`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(sT,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(sT,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1X1HBXWg9dE1qO5X66qr_3N2jW7NHlKnD/view?usp=sharing`})})]})},wT=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,TT=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,ET=`/labic2/assets/images/R2019/1.jpeg`,DT=`/labic2/assets/images/R2019/2.jpeg`,OT=`/labic2/assets/images/R2019/3.jpeg`,kT=`/labic2/assets/images/R2019/4.jpeg`,AT=`/labic2/assets/images/R2019/5.jpeg`,jT=`/labic2/assets/images/R2019/6.jpeg`,MT=`/labic2/assets/images/R2019/7.jpeg`,NT=`/labic2/assets/images/R2019/8.jpeg`,PT=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:DT},{src:OT},{src:kT},{src:AT},{src:jT},{src:MT},{src:NT}];return(0,B.jsxs)(wT,{children:[(0,B.jsx)(Yy,{children:`LABIC RIO 2019`}),(0,B.jsx)(Hy,{size:`small`,description:`A terceira edição do Labic reuniu lideranças e gestores de projetos, artistas, pesquisadores, \r
            mentores, realizadores, produtores e colaboradores entre os meses de setembro e dezembro de 2019 no Rio de Janeiro. \r
            O projeto conectou tecnologias apreendidas pela equipe ao longo do ano com iniciativas inventivas e potentes de campos\r
            como cultura, meio ambiente, negócios sociais, periferia, mídia e ativismo, ciência aberta etc. \r
            Nos encontros, para além de apresentações sobre cases e metodologias de trabalhos voltados aos campos dos \r
            novos jornalismos (de dados, investigativos, de gênero, raça etc.) e da ciência de dados (campanhas políticas, \r
            cultura algorítmica preemptiva e preditiva, memética, fakes e bots), foram confabuladas uma série de táticas e \r
            metodologias passíveis de apropriação pelos grupos.`,banner:ET}),(0,B.jsxs)(TT,{children:[(0,B.jsx)(X,{num:`70`,info:`COLABORADORES`}),(0,B.jsx)(X,{num:`26`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`5`,info:`CONFERENCISTAS`}),(0,B.jsx)(X,{num:`11`,info:`MENTORES`})]}),(0,B.jsxs)(TT,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1fOl1pHDXnydwxrJcr1UHMz95p9fhfFPQ/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1RnO-Rv4jK9qHsMgsHkGrqDEG9nzTTExS/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO COMPLETA DO LABIC RIO 2019`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(TT,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(TT,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1uD0Rhw9uLk4baM7ypiwdtIlnhHWYmC4J/view?usp=sharing`})})]})},FT=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,IT=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,LT=`/labic2/assets/images/S2019/1.jpg`,RT=`/labic2/assets/images/S2019/2.jpg`,zT=`/labic2/assets/images/S2019/3.jpg`,BT=`/labic2/assets/images/S2019/4.jpg`,VT=`/labic2/assets/images/S2019/5.jpg`,HT=`/labic2/assets/images/S2019/6.jpg`,UT=`/labic2/assets/images/S2019/7.jpeg`,WT=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:RT},{src:zT},{src:BT},{src:VT},{src:HT},{src:UT}];return(0,B.jsxs)(FT,{children:[(0,B.jsx)(Yy,{children:`LABIC SALVADOR 2019`}),(0,B.jsx)(Hy,{size:`small`,description:`Nosso ciclo formativo em fluxo seguiu para a cidade de Salvador (BA) \r
            durante o Simpósio Internacional LAVITS: Assimetrias e (In)Visibilidades: Vigilância, \r
            Gênero e Raça, ocorrido em junho, na Universidade Federal da Bahia (UFBA). No evento, \r
            testamos a aplicação de uma metodologia de ativação de redes em curtíssimo tempo, mapeamos \r
            redes parceiras em outros estados, expandindo nossa incidência e relevância. Foram 25 projetos \r
            atendidos por 11 mentores e 5 conferencistas que abordaram temas como: redes e narrativas; aplicativos \r
            e tecnologias do comum, economia colaborativa, sustentabilidade, gestão e governança; articulação, mobilização, \r
            mídia e ativismo; produção audiovisual; dados e algoritmos; dados e narrativas; construção de narrativas para \r
            projetos e apresentações; ferramentas de gestão de projetos; além das mentorias de redes sociais, design e \r
            construção de aplicativos.`,banner:LT}),(0,B.jsxs)(IT,{children:[(0,B.jsx)(X,{num:`5`,info:`CONFERÊNCIAS`}),(0,B.jsx)(X,{num:`11`,info:`MENTORIAS`}),(0,B.jsx)(X,{num:`25`,info:`PROJETOS`})]}),(0,B.jsxs)(IT,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1vuw-88414-nHK5X6L4s0NIeSBS8YIRX0/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1vDC5tU4A1RAB5CnTuH-bSoQSXCRZpkkL/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO COMPLETA DO LABIC SALVADOR 2019`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(IT,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(IT,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1XprMhjzHGi4VTwzKCBI6a1MYF6qCWx2_/view?usp=sharing`})})]})},GT=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,KT=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,qT=`/labic2/assets/images/R2018/2018rj1.jpg`,JT=`/labic2/assets/images/R2018/2018rj2.jpg`,YT=`/labic2/assets/images/R2018/2018rj3.jpg`,XT=`/labic2/assets/images/R2018/2018rj4.jpg`,ZT=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:JT},{src:YT},{src:XT}];return(0,B.jsxs)(GT,{children:[(0,B.jsx)(Yy,{children:`LABIC RIO 2018`}),(0,B.jsx)(Hy,{size:`small`,description:`Em 2018, o LABIC foi desafiado a alcançar voos mais amplos. \r
            Com apoio da UFRJ, renovamos e consolidamos o projeto e suas atividades, \r
            que já eram referência em cultura digital e ambiente cognitivo de diversidade, \r
            produção e partilha de saberes e cosmovisões plurais. A segunda edição do LABIC \r
            reuniu lideranças e gestores de projetos, pesquisadores, mentores e colaboradores \r
            entre os meses de setembro e dezembro de 2018, no Rio de Janeiro, conectando pessoas \r
            interessadas no intercâmbio de ideias e práticas pioneiras e inovadoras da economia criativa. \r
            Vinte projetos participaram dessa edição e tiveram a oportunidade de desenvolver suas propostas, \r
            compartilhar experiências, mapear as melhorias necessárias e planejar seus próximos passos. \r
            Para isso, 58 colaboradores se uniram aos projetos, contribuindo para seu desenvolvimento e sustentabilidade em rede.`,banner:qT}),(0,B.jsxs)(KT,{children:[(0,B.jsx)(X,{num:`10`,info:`ENCONTROS`}),(0,B.jsx)(X,{num:`20`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`100`,info:`PARTICIPANTES`})]}),(0,B.jsxs)(KT,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1hy1XBaHMsQ7IIQXBZtZ8JHlPkARfAwb_/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1HQRKF3xN22uz8hTMIOcFrIKTi1GFCi_-/view?usp=sharing`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO COMPLETA DO LABIC RJ 2018`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(KT,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(KT,{children:(0,B.jsx)(Z,{text:`Baixe a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1N5XTfbD56oVmbvaruPWTsVdFwa9kwN92/view?usp=sharing`})})]})},QT=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,$T=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,eE=`/labic2/assets/images/R2017/2017rj1.jpg`,tE=`/labic2/assets/images/R2017/2017rj2.jpg`,nE=`/labic2/assets/images/R2017/2017rj3.jpg`,rE=`/labic2/assets/images/R2017/2017rj4.jpg`,iE=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:tE},{src:nE},{src:rE},{src:rE}];return(0,B.jsxs)(QT,{children:[(0,B.jsx)(Yy,{children:`LABIC 2017`}),(0,B.jsx)(Hy,{size:`medium`,description:`O LABIC foi implementado na Escola de Comunicação da UFRJ em 2017. \r
            O laboratório incidiu em toda a Região Metropolitana Fluminense. Teve LABIC no Pontão da ECO, \r
            na Central de Produção Multimídia da ECO, no Território Inventivo (Centro), na Comunidade da \r
            Maré/Redes da Maré, na Rede BOTAFOGO Solidária e na ANF -Agência de Notícias da Favela. \r
            Além desses projetos e iniciativas que viraram parceiros, o LABIC contou com a colaboração \r
            da Mídia NINJA, do Circuito Fora do Eixo, da Companhia Teatral Língua de Trapo, da Encantamento \r
            Filmes e do Projeto Visionárias. Na primeira edição, o LABIC realizou 13 encontros, aos sábados, \r
            das 14h às 18h. Para atender 27 projetos, reuniu 50 colaboradores voluntários, mentores e conferencistas, \r
            envolvendo diretamente 150 pessoas.`,banner:eE}),(0,B.jsxs)($T,{children:[(0,B.jsx)(X,{num:`150`,info:`PESSOAS`}),(0,B.jsx)(X,{num:`13`,info:`ENCONTROS`}),(0,B.jsx)(X,{num:`27`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`50`,info:`COLABORADORES`})]}),(0,B.jsxs)($T,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/0B2f9fvVBVvAlYjBGSjNpTlVpQ3M/view?usp=sharing&resourcekey=0-EjkKkEhzK8OqMDhm8UmiuA`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1JFw6oRk6DMjrt7ZwyPFFVxJT338DWpM7/view?usp=sharing`})]}),(0,B.jsx)(H,{text:` CONFIRA A PROGRAMAÇÃO DO LABIC 2017`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)($T,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})})]})},aE=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,oE=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 540px) {
        flex-direction: row;
    }
`,sE=P.button`
    display: flex;
    background-color:white;
    width: 3rem;
    height: 3rem;
    border: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;

`;P.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
`;var cE=P.p`
    text-align: center;
    color: black;
    font-size: 0.75rem;
    font-weight: 700;
    
`,lE=({onClick:e})=>{let t=t=>{e(t)};return(0,B.jsxs)(aE,{children:[(0,B.jsxs)(oE,{children:[(0,B.jsx)(sE,{onClick:()=>t(14),children:(0,B.jsx)(cE,{children:`2026.1`})}),(0,B.jsx)(sE,{onClick:()=>t(13),children:(0,B.jsx)(cE,{children:`2025.1`})}),(0,B.jsx)(sE,{onClick:()=>t(12),children:(0,B.jsx)(cE,{children:`2024.3`})}),(0,B.jsx)(sE,{onClick:()=>t(11),children:(0,B.jsx)(cE,{children:`2024.2`})}),(0,B.jsx)(sE,{onClick:()=>t(1),children:(0,B.jsx)(cE,{children:`2024.1`})}),(0,B.jsx)(sE,{onClick:()=>t(2),children:(0,B.jsx)(cE,{children:`2023`})}),(0,B.jsx)(sE,{onClick:()=>t(3),children:(0,B.jsx)(cE,{children:`2022`})})]}),(0,B.jsxs)(oE,{children:[(0,B.jsx)(sE,{onClick:()=>t(4),children:(0,B.jsx)(cE,{children:`2021.2`})}),(0,B.jsx)(sE,{onClick:()=>t(5),children:(0,B.jsx)(cE,{children:`2021.1`})}),(0,B.jsx)(sE,{onClick:()=>t(6),children:(0,B.jsx)(cE,{children:`2020`})}),(0,B.jsx)(sE,{onClick:()=>t(7),children:(0,B.jsx)(cE,{children:`2019 RJ`})}),(0,B.jsx)(sE,{onClick:()=>t(8),children:(0,B.jsx)(cE,{children:`2019 S`})}),(0,B.jsx)(sE,{onClick:()=>t(9),children:(0,B.jsx)(cE,{children:`2018`})}),(0,B.jsx)(sE,{onClick:()=>t(10),children:(0,B.jsx)(cE,{children:`2017`})})]})]})},uE=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,dE=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,fE=`/labic2/assets/images/R2024/1.jpg`,pE=`/labic2/assets/images/R2024/2.jpg`,mE=`/labic2/assets/images/R2024/3.jpg`,hE=`/labic2/assets/images/R2024/4.jpg`,gE=`/labic2/assets/images/R2024/5.jpg`,_E=`/labic2/assets/images/R2024/6.jpg`,vE=`/labic2/assets/images/R2024/7.jpg`,yE=`/labic2/assets/images/R2024/8.jpg`,bE=`/labic2/assets/images/R2024/9.jpg`,xE=`/labic2/assets/images/R2024/10.jpg`,SE=`/labic2/assets/images/R2024/11.jpg`,CE=`/labic2/assets/images/R2024/12.jpg`,wE=`/labic2/assets/images/R2024/13.jpg`,TE=`/labic2/assets/images/R2024/14.jpg`,EE=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:fE},{src:pE},{src:mE},{src:hE},{src:gE},{src:_E},{src:vE},{src:yE},{src:bE},{src:xE},{src:SE},{src:CE},{src:wE},{src:TE}];return(0,B.jsxs)(uE,{children:[(0,B.jsx)(Yy,{children:`LABIC RIO 2024`}),(0,B.jsx)(Hy,{size:`medium`,description:`Entre os dias 10 e 13 de outubro de 2024, o Fórum de Ciência e Cultura da UFRJ foi palco de uma experiência transformadora promovida pelo LABIC Brasil 2024. \r
            A edição carioca da Rede de Formação em Cultura Digital reuniu especialistas, lideranças e agentes culturais em um ambiente de aprendizado, colaboração e inovação. Com 30 selecionados, \r
            a ação destacou o papel fundamental da tecnologia social no fortalecimento da cidadania e da cultura digital. A iniciativa reafirmou o compromisso \r
            da Pró-Reitoria de Extensão da UFRJ e do Ministério da Cultura com o fortalecimento da cultura digital como um motor para a cidadania e a inovação.`,banner:fE}),(0,B.jsxs)(dE,{children:[(0,B.jsx)(X,{num:`30`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`12`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`13`,info:`MENTORES`})]}),(0,B.jsxs)(dE,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`medium`,url:`https://drive.google.com/file/d/1WptGzrEspKbfdArugiv8Qi-klIkgXfmA/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1eO2D2Rom_duF0FzTenAgKCsyxzzFbkKw/view?usp=sharing`}),(0,B.jsx)(MC,{text:`Playlist no Youtube`,size:`small`,url:`https://youtube.com/playlist?list=PLs_n0oj-a3rlml6qw3NPuGzWvI0PTuy5g&si=YnOlDGJgWmxkhSMu`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC RIO 2024`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(dE,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(dE,{children:(0,B.jsx)(Z,{text:`Acesse programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1cPqwaz7WxZuGWFdsKfJ0IDaO2H_VIG5j/view?usp=sharing`})})]})},DE=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,OE=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,kE=`/labic2/assets/images/C2024/1.png`,AE=`/labic2/assets/images/C2024/2.png`,jE=`/labic2/assets/images/C2024/3.png`,ME=`/labic2/assets/images/C2024/4.png`,NE=`/labic2/assets/images/C2024/5.png`,PE=`/labic2/assets/images/C2024/6.png`,FE=`/labic2/assets/images/C2024/7.png`,IE=`/labic2/assets/images/C2024/8.png`,LE=`/labic2/assets/images/C2024/9.png`,RE=`/labic2/assets/images/C2024/10.png`,zE=`/labic2/assets/images/C2024/11.png`,BE=`/labic2/assets/images/C2024/12.png`,VE=`/labic2/assets/images/C2024/13.png`,HE=`/labic2/assets/images/C2024/14.png`,UE=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:kE},{src:AE},{src:jE},{src:ME},{src:NE},{src:PE},{src:FE},{src:IE},{src:LE},{src:RE},{src:zE},{src:BE},{src:VE},{src:HE}];return(0,B.jsxs)(DE,{children:[(0,B.jsx)(Yy,{children:`LABIC CURITIBA 2024`}),(0,B.jsx)(Hy,{size:`medium`,description:`Entre os dias 13 e 16 de novembro de 2024, Curitiba recebeu a Rede de Formação em Cultura Digital. \r
            O evento teve início com uma cerimônia no Auditório Teatro Anfi100, na Reitoria da Universidade Federal do Paraná (UFPR), \r
            e continuou com imersões práticas no Espaço Itupava, reunindo agentes culturais, lideranças e especialistas em inovação cidadã. \r
            Foram 30 projetos selecionados para participar de oficinas temáticas e mentorias especializadas. A programação abordou temas \r
            cruciais, como a aplicação de tecnologias digitais na cultura cidadã e o combate à desinformação, promovendo o fortalecimento \r
            da cultura digital e da cidadania no Brasil.`,banner:kE}),(0,B.jsxs)(OE,{children:[(0,B.jsx)(X,{num:`30`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`12`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`12`,info:`MENTORES`})]}),(0,B.jsxs)(OE,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`small`,url:`https://drive.google.com/file/d/1W6FosVeAv60eu4SkEV-e7rtZMHwmrzFB/view?usp=sharing`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1r8BD57mJCNDQQH3W2EFvP0ra6ou0DsKQ/view?usp=sharing`}),(0,B.jsx)(MC,{text:`Playlist no Youtube`,size:`small`,url:`https://youtube.com/playlist?list=PLs_n0oj-a3rk0LsZzrkgRBgJYYksuBDq9&si=LnWu2Nt7MgDXZgYe`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC CURITIBA 2024`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(OE,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(OE,{children:(0,B.jsx)(Z,{text:`Acesse a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/1F0xV-nRt5fIZqaiCWOq8QPInzpW3Z5Q0/view?usp=sharing`})})]})},WE=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,GE=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,KE=`/labic2/assets/images/F2025/card7.png`,qE=`/labic2/assets/images/F2025/card1.png`,JE=`/labic2/assets/images/F2025/card2.png`,YE=`/labic2/assets/images/F2025/card3.png`,XE=`/labic2/assets/images/F2025/card4.png`,ZE=`/labic2/assets/images/F2025/card5.png`,QE=`/labic2/assets/images/F2025/card6.png`,$E=`/labic2/assets/images/F2025/card8.png`,eD=`/labic2/assets/images/F2025/card9.png`,tD=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:qE},{src:JE},{src:YE},{src:XE},{src:ZE},{src:QE},{src:KE},{src:$E},{src:eD}];return(0,B.jsxs)(WE,{children:[(0,B.jsx)(Yy,{children:`LABIC FORTALEZA 2025`}),(0,B.jsx)(Hy,{size:`medium`,description:`Entre os dias 18 e 21 de setembro de 2025, Fortaleza recebeu a Rede de Formação em Cultura Digital. \r
            O evento teve início com uma cerimônia na Pinacoteca do Ceará, reunindo agentes culturais, lideranças e especialistas em inovação cidadã. \r
            Foram 29 projetos selecionados para participar de oficinas temáticas e mentorias especializadas. A programação abordou temas \r
            cruciais, como a aplicação de tecnologias digitais na cultura cidadã e o combate à desinformação, promovendo o fortalecimento \r
            da cultura digital e da cidadania no Brasil.`,banner:KE}),(0,B.jsxs)(GE,{children:[(0,B.jsx)(X,{num:`29`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`12`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`19`,info:`MENTORES`})]}),(0,B.jsxs)(GE,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`small`,url:`https://drive.google.com/file/d/10GbtDxFsT-hzfDNrHQ9qm-seTiM23gKE/view?usp=drivesdk`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1TDpCXRZRIdBi4IulSRglJU3GmLSatG6h/view`}),(0,B.jsx)(MC,{text:`Playlist no Youtube`,size:`small`,url:`https://www.youtube.com/embed/MpB-VX9KyCs?si=VfLZgrefJW9enjGz`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC FORTALEZA 2025`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(GE,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(GE,{children:(0,B.jsx)(Z,{text:`Acesse a programação completa em PDF`,size:`large`,url:`https://drive.google.com/file/d/12XMUUlhd4lGs4gDV5qAzhUpsBY-u3g0N/view?usp=drivesdk`})})]})},nD=P.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    padding-top: 2rem;
`,rD=P.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,iD=`/labic2/assets/6-BRzEPwYB.png`,aD=`/labic2/assets/1-D_ZpUVwO.png`,oD=`/labic2/assets/2-9evDdAAa.png`,sD=`/labic2/assets/3-DUEAixVa.png`,cD=`/labic2/assets/4-1aEDLhki.png`,lD=`/labic2/assets/5-MQpGvDuU.png`,uD=`/labic2/assets/7-CIlUTsnR.png`,dD=`/labic2/assets/8-BLULinyv.png`,fD=`/labic2/assets/9-BAekejV7.png`,pD=`/labic2/assets/10-VTjpCb5b.png`,mD=`/labic2/assets/11-D3PcNspU.png`,hD=`/labic2/assets/12-eYeNKH3-.png`,gD=`/labic2/assets/13-Clsh9QTP.png`,_D=`/labic2/assets/14-PWOZqEb-.png`,vD=`/labic2/assets/15-DDlq5LwG.png`,yD=`/labic2/assets/16-BRBkUsg_.png`,bD=`/labic2/assets/17-BkbXEEuN.png`,xD=`/labic2/assets/18-HD50psQ3.png`,SD=`/labic2/assets/19-yjFH5xUe.png`,CD=`/labic2/assets/20-BSrh6hXx.png`,wD=`/labic2/assets/21-D2W8s6Hf.jpeg`,TD=`/labic2/assets/22-BdMMZ5j4.png`,ED=`/labic2/assets/23-Dj21H5WG.png`,DD=()=>{let e=Kv(),t=()=>e.width&&e.width<=480?1:e.width&&e.width<=768?2:3,n=[{src:aD},{src:oD},{src:sD},{src:cD},{src:lD},{src:iD},{src:uD},{src:dD},{src:fD},{src:pD},{src:mD},{src:hD},{src:gD},{src:_D},{src:vD},{src:yD},{src:bD},{src:xD},{src:SD},{src:CD},{src:wD},{src:TD},{src:ED}];return(0,B.jsxs)(nD,{children:[(0,B.jsx)(Yy,{children:`LABIC AMAZONAS 2026`}),(0,B.jsx)(Hy,{size:`medium`,description:`A rede de formação em cultura digital LABIC Amazonas iniciou o ano de 2026 \r
            com uma travessia pelo Alto Rio Negro rumo à “Capital Indígena”, São Gabriel da Cachoeira (AM). \r
            Entre os dias 26 e 31 de janeiro, ocorreu uma imersão prévia nas comunidades de Assunção do Içana, \r
            Ambaúba, Buia Igarapé, Aldeia de Nazaré e Escola Viva, proporcionando uma vivência direta com a cultura e os costumes dos povos originários.\r
            Em seguida, a programação avançou para uma segunda etapa, realizada entre os dias 4 e 7 de fevereiro. \r
            Essa fase foi dedicada exclusivamente à formação em cultura digital voltada a 30 projetos indígenas de diversas etnias. \r
            Durante os encontros, foram promovidas oficinas e mentorias sobre diversos temas, como culturas digitais, \r
            tecnologias sociais, comunicação comunitária, uso de inteligência artificial, fake news, artes indígenas e negócios socioambientais. \r
            Além disso, a formação incluiu imersões na Casa Wariró e na Casa de Pimenta Baniwa, que possibilitaram um aprendizado prático sobre os \r
            modos de vida e saberes amazônicos.`,banner:iD}),(0,B.jsxs)(rD,{children:[(0,B.jsx)(X,{num:`30`,info:`PROJETOS`}),(0,B.jsx)(X,{num:`12`,info:`EIXOS-TEMÁTICOS`}),(0,B.jsx)(X,{num:`30`,info:`MENTORES`})]}),(0,B.jsxs)(rD,{children:[(0,B.jsx)(Z,{text:`Acesse a chamada pública`,size:`small`,url:`https://drive.google.com/file/d/1_7ZZz3Wze1rC-2H2hWvhdyRgva4YcjPw/view?usp=drivesdk`}),(0,B.jsx)(Z,{text:`Projetos Selecionados`,size:`small`,url:`https://drive.google.com/file/d/1GYkT3jHXGAT8ALBZUkISnpd_eqyi4eHt/view?usp=drivesdk`}),(0,B.jsx)(MC,{text:`Playlist no Youtube`,size:`small`,url:`https://www.youtube.com/watch?v=EjpwBe70m-Y&list=PLs_n0oj-a3rnh6jY0q2UImnH7m_y2V7rk`})]}),(0,B.jsx)(H,{text:`CONFIRA A PROGRAMAÇÃO DA REDE DE FORMAÇÃO EM CULTURA DIGITAL - LABIC AMAZONAS 2026`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(rD,{children:t()===1?(0,B.jsx)(OC,{items:n}):(0,B.jsx)(Sb,{items:n})}),(0,B.jsx)(rD,{children:(0,B.jsx)(Z,{text:`Acesse a programação completa em PDF`,size:`large`,url:`https://mcusercontent.com/49915ace06aee87b69e0607af/files/e722d5f2-6899-ae1e-e2f4-37cccb3ace03/PDF_Programa_ccedil_atilde_o_Horario_de_Brasilia_2_.pdf`})})]})},OD=()=>{let[e,t]=(0,M.useState)(14);return(0,B.jsxs)(Py,{children:[(0,B.jsx)(H,{text:`Edições Anteriores`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(lE,{onClick:t}),(()=>{switch(e){case 1:return(0,B.jsx)(NC,{});case 2:return(0,B.jsx)(rw,{});case 3:return(0,B.jsx)(ww,{});case 4:return(0,B.jsx)(Iw,{});case 5:return(0,B.jsx)(aT,{});case 6:return(0,B.jsx)(CT,{});case 7:return(0,B.jsx)(PT,{});case 8:return(0,B.jsx)(WT,{});case 9:return(0,B.jsx)(ZT,{});case 10:return(0,B.jsx)(iE,{});case 11:return(0,B.jsx)(EE,{});case 12:return(0,B.jsx)(UE,{});case 13:return(0,B.jsx)(tD,{});case 14:return(0,B.jsx)(DD,{});default:return(0,B.jsx)(DD,{})}})()]})},kD=P.div`
    background-image: url(${er});
    background-color: var(--black);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;P.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;var AD=P.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`,jD=P.button` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 28rem;
    height: 5rem;
    border-radius: 10px;
    border: none;

    cursor: pointer;
`,MD=P.p` 
    font-family: var(--poppins);
    font-size: 0.8rem;
    width: 100%;
    color: black;
    margin-left: 10px;
    text-align: center;
`,ND=P.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background-color: var(--blue-1);
    border-radius: 0px 0px 10px 10px;
`,PD=P.div` 
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: center;
`;P.p` 
    font-family: var(--open-sans);
    font-size: 1rem;
    color: black;
    margin-left: 10px;
    text-align: left;
`;var FD=P.img` 
    width: 30px;
    height: 30px;
    justify-self: flex-end;
`,ID=`/labic2/assets/icons/icons8-baixar-64.png`,Q=({text:e,url:t,disabled:n})=>(0,B.jsxs)(jD,{onClick:()=>{t&&!n&&window.open(t,`_blank`)},children:[(0,B.jsx)(PD,{children:(0,B.jsx)(MD,{children:e})}),(0,B.jsx)(ND,{children:(0,B.jsx)(FD,{src:ID})})]}),LD=P.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`,RD=P.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,zD=P.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`,BD=()=>(0,B.jsx)(LD,{children:(0,B.jsxs)(RD,{children:[(0,B.jsxs)(zD,{children:[(0,B.jsx)(Q,{text:`DESIGN PARA REDES SOCIAIS`,url:`https://drive.google.com/file/d/1rMWxhGGNIsgHpio25VtLgpPE3qwxmB1S/view?usp=sharing`}),(0,B.jsx)(Q,{text:`DESIGN THINKING`,url:`https://drive.google.com/file/d/1LcHBFIHyWl2ZLEzh8wOUwAmZx2T09s4V/view?usp=sharing`}),(0,B.jsx)(Q,{text:`FERRAMENTAS DE GESTÃO`,url:`https://drive.google.com/file/d/1De4VF2wQNeN1PD7NOegqTy1ydOrIr_bT/view?usp=sharing`}),(0,B.jsx)(Q,{text:`MENTORIA DE REDES SOCIAIS`,url:`https://docs.google.com/presentation/d/1KqpYh90G1VUQztFo91QvNKo02596mjzY/edit?usp=sharing&ouid=106686455655726341941&rtpof=true&sd=true`}),(0,B.jsx)(Q,{text:`MENTORIA DE VÍDEO`,url:`https://docs.google.com/presentation/d/1Y2SSsSSfEpTJHwxKVjLEDbLIrw6jYFxzaDVBJvvFsLs/edit?usp=sharing`}),(0,B.jsx)(Q,{text:`REDES, MÍDIAS E MEMES`,url:`https://drive.google.com/file/d/1CjEr7rZeUkYAHpTwPbIzRP5J4Itlc9ot/view?usp=sharing`})]}),(0,B.jsxs)(zD,{children:[(0,B.jsx)(Q,{text:`MENTORIA DE VÍDEO, ÁUDIO E PODCAST`,url:`https://drive.google.com/file/d/1G4Oe9oR_gRGP3x2I8ZmyeUhhqTMuFq_T/view?usp=sharing`}),(0,B.jsx)(Q,{text:`OFICINA DE NARRATIVAS COMPLETA`,url:`https://drive.google.com/file/d/15rUF_3vPcNsYNDjG55u5pbXnvSEs086f/view?usp=sharing`}),(0,B.jsx)(Q,{text:`OFICINA DE NARRATIVAS CURTA`,url:`https://drive.google.com/file/d/1YVr6e9n0-r0VCc3lGyERJT9jBGLem8CZ/view?usp=sharing`}),(0,B.jsx)(Q,{text:`O USO DE MOEDAS SOCIAIS E BANCOS COMUNITÁRIOS PARA O DESENVOLVIMENTO LOCAL`,url:`https://drive.google.com/file/d/1wIKpUFxAH2fgGzeAxGCvabru-PZt_AHt/view?usp=sharing`}),(0,B.jsx)(Q,{text:`PRODUÇÃO DE LIVES`,url:`https://drive.google.com/file/d/1GMzZ45LbFNRhq5lmm7LFNjMmAeQJVAxB/view?usp=sharing`}),(0,B.jsx)(Q,{text:`PRODUÇÃO DE LIVE E PLATAFORMA DE STREAMING`,url:`https://drive.google.com/file/d/1GMzZ45LbFNRhq5lmm7LFNjMmAeQJVAxB/view?usp=sharing`})]})]})}),VD=P.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`,HD=P.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,UD=P.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`,WD=()=>(0,B.jsx)(VD,{children:(0,B.jsxs)(HD,{children:[(0,B.jsxs)(UD,{children:[(0,B.jsx)(Q,{text:`A DIMENSÃO POLÍTICA DOS MEMES`,url:`https://drive.google.com/file/d/1I5bnjZAgZNVoLrK6pgN6ToUruim33dg0/view?usp=sharing`}),(0,B.jsx)(Q,{text:`ADVOCACY DIGITAL`,url:`https://drive.google.com/file/d/1VwENCP_Sai7F07D-iAISqRBjlDjExP8W/view?usp=sharing`}),(0,B.jsx)(Q,{text:`BANCOS DE TEMPO`,url:`https://drive.google.com/file/d/14ty2TlWJrYwai8Fqy_DZgFp7g56pHgGD/view?usp=sharing`}),(0,B.jsx)(Q,{text:`BLACK INFLUENCE`,url:`https://drive.google.com/file/d/1hUMd4N1hI_BZ0vPGUrpASv-D6DSiib-0/view?usp=sharing`}),(0,B.jsx)(Q,{text:`CIÊNCIA CIDADÃ, CATÁSTROFES ANCESTRAIS`,url:`https://drive.google.com/file/d/1O5_HirRo8gTFskW1s-NJHllWnxJuMsJp/view?usp=sharing`}),(0,B.jsx)(Q,{text:`CIRCUITO DE FORMAÇÃO CINE NINJA`,url:`https://midianinja.org/especial/circuito-de-formacao/`}),(0,B.jsx)(Q,{text:`COCÔZAP: UM GUIA PARA GERAÇÃO CIDADÃ DE DADOS`,url:`https://drive.google.com/file/d/1bKLbhV0VPnz93SduJm6Gkq6t7DhUhQO4/view?usp=sharing`}),(0,B.jsx)(Q,{text:`FASES DE MATURIDADE, DIAGNÓSTICO E FERRAMENTAS DE GESTÃO AYRA`,url:`https://drive.google.com/file/d/1yU68Ukn0yVCrFn9RyL-QkBW9hXkvS2c9/view?usp=sharing `}),(0,B.jsx)(Q,{text:`GUIA DE PROTEÇÃO E SEGURANÇA PARA COMUNICADORES E DEFENSORES DE DIREITOS HUMANOS`,url:`https://drive.google.com/file/d/0B42UWo9JBHU4MTh1eHFuallYM2s/view?usp=sharing&resourcekey=0-ymC8R3nOerRZY7R6BGNV9A`}),(0,B.jsx)(Q,{text:`GUÍA PARA GARANTIZAR LA LIBERTAD DE EXPRESIÓN FRENTE A LA DESINFORMACIÓN DELIBERADA EN CONTEXTOS ELECTORALES`,url:`https://drive.google.com/file/d/1FqSHmr--ThSAGiV-aC8y56fVSH039WVZ/view?usp=sharing`}),(0,B.jsx)(Q,{text:`GUIA PRÁTICA DE ESTRATÉGIAS E TÁTICAS PARA A SEGURANÇA DIGITAL FEMINISTA`,url:`https://drive.google.com/file/d/1YrTKCtoFg_NHNiMD00H1aVkgRyQIc9_b/view?usp=sharing`})]}),(0,B.jsxs)(UD,{children:[(0,B.jsx)(Q,{text:`IA PARA O COMUM`,url:`https://drive.google.com/file/d/1Uq6ug-CZ9JKtPS86lbRinOdOwmSUBWPp/view?usp=sharing`}),(0,B.jsx)(Q,{text:`IMPACTOS DE SISTEMAS DE IA E SEUS VIESES`,url:`https://drive.google.com/file/d/12hv-tHvJTrjGAXW-BFKYizhNjqZA-vhm/view?usp=sharing`}),(0,B.jsx)(Q,{text:`INOVAÇÃO CIDADÃ E COPRODUÇÃO POLÍTICA`,url:`https://drive.google.com/file/d/1wIHaB8ohKo7M-GyA5tNTTez3WH4Q84Lf/view?usp=sharing`}),(0,B.jsx)(Q,{text:`INTRODUÇÃO À CIÊNCIA DE DADOS: DA MINERAÇÃO À VISUALIZAÇÃO`,url:`https://drive.google.com/file/d/1Rf7-lFW2hRrk0Q1zmGdWUz81kO21rfsi/view?usp=sharing`}),(0,B.jsx)(Q,{text:`LABORATÓRIO DE FOTOGRAFIA, COM MARCELO BRITO DO PROJETO CENA BXD`,url:`https://drive.google.com/file/d/1-bJBLHpr7earZthfTGgrAhxVrvrRZi4Z/view?usp=sharing`}),(0,B.jsx)(Q,{text:`MAPAS COGNITIVOS`,url:`https://drive.google.com/file/d/192uEaUIVDRfDcvnqkfOe6aNGf49bkUM2/view?usp=sharing`}),(0,B.jsx)(Q,{text:`MAPEAMENTO DA MÍDIA NEGRA NO BRASIL`,url:`https://drive.google.com/file/d/0B42UWo9JBHU4by1YQnU0bGNGdEU/view?usp=sharing&resourcekey=0-5crg4EmTjyNMHMZtPdEyJg`}),(0,B.jsx)(Q,{text:`MARKETING DE INFLUÊNCIA`,url:`https://drive.google.com/file/d/1a9lBGy5diVejYRtSbnyUl8IIrpqcP0sk/view?usp=sharing`}),(0,B.jsx)(Q,{text:`METODOLOGIAS COLABORATIVAS PARA IMPACTO POSITIVO E INOVAÇÃO SOCIAL`,url:`https://drive.google.com/file/d/1Mqo6Q18CL17qGLXNG5rHv1AwTr64vJjb/view?usp=sharing`}),(0,B.jsx)(Q,{text:`UM HUB DE SOLUÇÕES DE COMBATE À DESINFORMAÇÃO`,url:`https://lupa.uol.com.br/institucional#faq`}),(0,B.jsx)(Q,{text:`UM OUTRO OLHAR PARA A TECNOLOGIA`,url:`https://drive.google.com/file/d/1hgAHHAWMsaf0UN5rp0qCNaJuXXMdxZhF/view?usp=sharing`})]})]})}),GD=P.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`,KD=P.div` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,qD=P.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`,JD=()=>(0,B.jsx)(GD,{children:(0,B.jsxs)(KD,{children:[(0,B.jsxs)(qD,{children:[(0,B.jsx)(Q,{text:`ABRIR INSTITUCIONES DESDE DENTRO`,url:`https://drive.google.com/file/d/1mrXuZyqjxDsLYJxQSCts0vL_xr0w43Wk/view?usp=sharing`}),(0,B.jsx)(Q,{text:`A ECONOMIA CRIATIVA SOB MEDIDA: CONCEITOS E DINAMISMO DAS CLASSES CRIATIVAS`,url:`https://drive.google.com/file/d/13BUScSJWj69_ln_n-zXdoGOqw6HhbeWQ/view?usp=sharing`}),(0,B.jsx)(Q,{text:`A SOCIEDADE EM REDE DO CONHECIMENTO À ACÇÃO POLÍTICA`,url:`https://drive.google.com/file/d/1R0WOqNeps6Z1QiIjFj1in5KGsGi2adkI/view?usp=sharing`}),(0,B.jsx)(Q,{text:`ATIVISMO NO CONTEXTO URBANO DIAGNÓSTICO PARA AÇÃO NAS CIDADES`,url:`https://drive.google.com/file/d/0B42UWo9JBHU4by1YQnU0bGNGdEU/view?usp=sharing&resourcekey=0-5crg4EmTjyNMHMZtPdEyJg`}),(0,B.jsx)(Q,{text:`A TRIBUTAÇÃO DO SETOR DIGITAL NO BRASIL: PANORAMA E PERSPECTIVAS`,url:`https://drive.google.com/file/d/18sJNDVztorwOQszClZjlrAWSCrAfjg0X/view?usp=sharing`}),(0,B.jsx)(Q,{text:`CADERNO DE COMUNICAÇÃO PARA O ATIVISMO`,url:`https://drive.google.com/file/d/1JneJbuaezEBc7w3nnONFABX_N6HB24Az/view?usp=sharing`}),(0,B.jsx)(Q,{text:`CAIU NA REDE É CRIME`,url:`https://www.gov.br/secom/pt-br/assuntos/noticias/2023/03/caiu-na-rede-e-crime-exposicao-de-imagens-intimas-sem-consentimento-em-plataformas-digitais-nao-e-normal/caiu-na-rede-e-crime.pdf`}),(0,B.jsx)(Q,{text:`CARTILHA DE ORIENTAÇÃO PARA VÍTIMAS DE DISCURSO DE ÓDIO`,url:`https://drive.google.com/file/d/14c57Y_VX9ELUSGsmWrNYrP3AzXNKUFeL/view?usp=sharing`}),(0,B.jsx)(Q,{text:`COLONIALISMO TECNOLÓGICO OU COMO PODEMOS RESISTIR AO NOVO EUGENISMO DIGITAL – ENTREVISTA COM SÉRGIO AMADEU SILVEIRA`,url:`https://drive.google.com/file/d/12NEYkYjqJXGDbiwwVZv4i6hg0Yt49OEb/view?usp=sharing`}),(0,B.jsx)(Q,{text:`COMUNIDADES, ALGORITMOS E ATIVISMOS DIGITAIS: OLHARES AFRODIASPÓRICOS`,url:`https://drive.google.com/file/d/1zqgAkCJt3GCmlFWnUNd2cp4QJUTQZ8BW/view?usp=sharing`}),(0,B.jsx)(Q,{text:`CONFERÊNCIA NACIONAL DE COMUNICAÇÃO 10 ANOS DEPOIS: VELHOS E NOVOS DESAFIOS DAS POLÍTICAS DE COMUNICAÇÃO NO BRASIL`,url:`https://drive.google.com/file/d/18_iivvn90kYXOovLTkcFHyCQz8r7mnm3/view?usp=sharing`})]}),(0,B.jsxs)(qD,{children:[(0,B.jsx)(Q,{text:`DIÁLOGOS FEMINISTAS SOBRE A VIOLÊNCIA DIGITAL DE GÊNERO NO BRASIL DURANTE A PANDEMIA DE COVID-19 NO ANO DE 2020`,url:`https://drive.google.com/file/d/1qg_BZumW5078_WmD03iTIokouV53QFJ0/view?usp=sharing`}),(0,B.jsx)(Q,{text:`DIVERSIDADE NA EDUCAÇÃO - REFLEXÕES E EXPERIÊNCIAS`,url:`https://drive.google.com/file/d/1BrdoIXDpSuHXSlJPq2vOeylSF1Dg-Qpq/view?usp=sharing`}),(0,B.jsx)(Q,{text:`ECONOMIA SOLIDÁRIA DIGITAL - CAMINHOS PARA POTENCIALIZAR POLÍTICAS E AÇÕES BASEADAS EM COOPERAÇÃO E SOLIDARIEDADE`,url:`https://rosalux.org.br/wp-content/uploads/2024/08/DIGITAL-livro-economia-solidaria.pdf`}),(0,B.jsx)(Q,{text:`ECOSSISTEMAS DE EMPREENDEDORISMO INOVADORES E INSPIRADORES`,url:`https://drive.google.com/file/d/1_2vICBlA3e21E6zghkLVTLR1eDgBGwUd/view?usp=sharing`}),(0,B.jsx)(Q,{text:`ELAS NO CONGRESSO`,url:`https://www.elasnocongresso.com.br/`}),(0,B.jsx)(Q,{text:`ESCOLA DO FINANCIAMENTO COLETIVO`,url:`https://www.ofinanciamentocoletivo.com.br/?ref=ctrse_footer`}),(0,B.jsx)(Q,{text:`ESCOLA SEGURA: COMO LIDAR COM VIOLÊNCIA ONLINE E CONVERSAR COM CRIANÇAS E JOVENS SOBRE O TEMA`,url:`https://www.gov.br/mec/pt-br/centrais-de-conteudo/publicacoes/cartilha_escola_segura.pdf`}),(0,B.jsx)(Q,{text:`ESTRATÉGIA BRASILEIRA DE EDUCAÇÃO MIDIÁTICA`,url:`https://www.gov.br/secom/pt-br/assuntos/noticias/2023/10/estrategia-brasileira-de-educacao-midiatica-apresenta-as-politicas-publicas-voltadas-para-a-populacao/2023_secom-spdigi_estrategia-brasileira-de-educacao-midiatica.pdf`}),(0,B.jsx)(Q,{text:`ESTUDANDO CULTURA E COMUNICAÇÃO COM MÍDIAS SOCIAIS`,url:`https://drive.google.com/file/d/1CqT1INXAeGd81_l785UMNY78H2n_JckV/view?usp=sharing`}),(0,B.jsx)(Q,{text:`ESTUDO, ANÁLISE E PROPOSIÇÕES SOBRE AS INCUBADORAS DE EMPRESAS NO BRASIL`,url:`https://drive.google.com/file/d/14I2D1k9SB1ENVeibYYPecIQrI71gywIG/view?usp=sharing`}),(0,B.jsx)(Q,{text:`EXPERIÊNCIAS E LUTAS POR DIREITOS HUMANOS NO SUL FLUMINENSE`,url:`https://drive.google.com/file/d/12GW8dOPKfSw1v-rLfKXTOeH-CggVs7IU/view?usp=sharing`})]}),(0,B.jsxs)(qD,{children:[(0,B.jsx)(Q,{text:`IA para o Bem de Todos: Proposta de Plano Brasileiro de Inteligência Artificial 2024-2028`,url:`https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2024/07/plano-brasileiro-de-ia-tera-supercomputador-e-investimento-de-r-23-bilhoes-em-quatro-anos/ia_para_o_bem_de_todos.pdf/@@download/file`}),(0,B.jsx)(Q,{text:`Interfaces do Midiativismo`,url:`https://drive.google.com/file/d/1RslPgVDthlOas0Ks_v_leTywbVJsAvFn/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Justiça Social na Era dos Dados | Documentário`,url:`https://www.youtube.com/watch?v=1q_mB8rAmck`}),(0,B.jsx)(Q,{text:`Manual Antirracista Carnaval 2024 - Prefeitura de Salvador`,url:`https://drive.google.com/file/d/1oN0M0iVUjzAlsbZQHkSq4d7LiHHCxF4v/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Mídia-Multidão`,url:`https://drive.google.com/file/d/0B8Wt_2FCwNDgYzRzazF5a3pBSkFkSmN4TDJ0aDhPaVZmTFZv/view?usp=sharing&resourcekey=0-DFznoFuQzdVrAHMIlI5BQg`}),(0,B.jsx)(Q,{text:`O Bem Viver - Uma Oportunidade para Imaginar Outros Mundos`,url:`https://drive.google.com/file/d/19DHP75QQZRfbIQHJbDieqbSoEc-MEQLy/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Proteção de Crianças e Adolescentes na Internet (Dúvida)`,url:`https://drive.google.com/file/d/1NceXQbkT1HQTuTlvtAqY-m8c5u1C82pS/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Redes de Indignação e Esperança: Movimentos Sociais na Era da Internet`,url:`https://drive.google.com/file/d/13BJNG-kxNKmyc16BXtEVdqfTABhNSZoL/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Relatório Luz da Agenda 2030 de Desenvolvimento Sustentável`,url:`https://drive.google.com/file/d/10QGlrUB2J4tL8cE_Nh8oVBAPS2QJpGci/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Revista Internet & Sociedade`,url:`https://drive.google.com/file/d/1Rsku8-wB2riTVMpTcAsOZgf2LErQs7tr/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Tudo Sobre Todos - Redes Digitais, Privacidade e Venda de Dados Pessoais`,url:`https://drive.google.com/file/d/1da6XheHnF96cQ_VTYUTWJ8qQpL4kCDy1/view?usp=sharing`})]}),(0,B.jsxs)(qD,{children:[(0,B.jsx)(Q,{text:`CONVERGÊNCIA DIVERGENTE: TV ABERTA NA CONTRAMÃO GLOBAL`,url:`https://drive.google.com/file/d/1r2f1og4aaAfVKdZ6K-h0CLfZ4Pn0stsm/view?usp=sharing`}),(0,B.jsx)(Q,{text:`CULTURA VIVA`,url:`https://www.gov.br/culturaviva/pt-br`}),(0,B.jsx)(Q,{text:`DEMOCRACIA E OS CÓDIGOS INVISÍVEIS, SÉRGIO AMADEU`,url:`https://drive.google.com/file/d/1vSMREX_eeG6pXw9lXdBDVY9jxTfte5NW/view?usp=sharing`}),(0,B.jsx)(Q,{text:`DESIGUALDADE DIGITAL DE GÊNERO NA AMÉRICA LATINA E CARIBE`,url:`https://drive.google.com/file/d/1r59m01fX8vRK3KNzV0hDlbf7NipO7B25/view?usp=sharing`}),(0,B.jsx)(Q,{text:`EXTREMA DIREITA NO BRASIL: SUJEITOS E COLETIVOS PELA 'RESTAURAÇÃO NACIONAL'`,url:`https://drive.google.com/file/d/1rET8hpxqf3kV6rbeGQU1m-1txjqYNGgo/view?usp=sharing`}),(0,B.jsx)(Q,{text:`FLUXO DE TRABALHO COM DADOS - DO ZERO À PRÁTICA`,url:`https://drive.google.com/file/d/1W7fBrYiw69dgHpLSF0rBMGtrn2lNk3Qw/view?usp=sharing`}),(0,B.jsx)(Q,{text:`FLUXOS EM REDES SOCIOTÉCNICAS: DAS MICRONARRATIVAS AO BIG DATA`,url:`https://drive.google.com/file/d/1tEqTrcsGW8LJcK0kwpwn3KsvF_WMQXL_/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Griots e Tecnologias Digitais`,url:`https://drive.google.com/file/d/1KxAYIhmPJH8D4Kx3Mf8iLljj7dV8Y4Jp/view?usp=sharing`}),(0,B.jsx)(Q,{text:`Violências Contra Mulher na Internet: Diagnóstico, Soluções e Desafios`,url:`https://drive.google.com/file/d/1ytXLcVcxGxb041v9R9i2sEw3NyN90FZW/view?usp=sharing`}),(0,B.jsx)(Q,{text:`@Internet e #Rua`,url:`https://drive.google.com/file/d/1LfzukvvOHZyV2-bLbceFrMuTdlVcj1pk/view?usp=sharing`}),(0,B.jsx)(Q,{text:`:(){ COPYFIGHT :|: Pirataria & Cultura Livre };:`,url:`https://drive.google.com/file/d/1JME4GTPVp0DPzWJMSEpB-R-9Qahi8w6a/view?usp=sharing`})]})]})}),YD=P.div`
    width: 40rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,XD=P.button`
    width: 200px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    border: none;
    cursor: pointer;
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 200px;
        height: 54px;
    }

    @media (max-width: 540px) {
        width: 200px;
        height: 54px;
    }
`,ZD=P.p`
    font-size: 1.2rem;
    color: white;
    font-family: var(--open-sans);
    font-weight: 700;
    text-align: center;
`,QD=({onClick:e})=>{let t=t=>{e(t)};return(0,B.jsxs)(YD,{children:[(0,B.jsx)(XD,{onClick:()=>t(0),children:(0,B.jsx)(ZD,{children:`Ebook`})}),(0,B.jsx)(XD,{onClick:()=>t(1),children:(0,B.jsx)(ZD,{children:`Mentorias Equipe LABIC`})}),(0,B.jsx)(XD,{onClick:()=>t(2),children:(0,B.jsx)(ZD,{children:`Mentorias Parceiros`})}),(0,B.jsx)(XD,{onClick:()=>t(3),children:(0,B.jsx)(ZD,{children:`Indicações Bibliográficas`})})]})},$D=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,eO=P.button`
    display: flex;
    width: 450px;
    height: 84px;
    justify-content: center;
    background-color:#ffffff;
    align-items: center;
    gap: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 300px;
        height: 50px;
    }

    @media (max-width: 540px) {
        width: 300px;
        height: 50px;
    }
`,tO=P.text`
    color: black;
    font-weight: 700;
    font-family: var(--open-sans);
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
    
`,nO=({text:e,disabled:t,url:n})=>(0,B.jsx)($D,{children:(0,B.jsx)(eO,{disabled:t,onClick:()=>{n&&!t&&window.open(n,`_blank`)},children:(0,B.jsx)(tO,{children:e})})}),rO=P.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 5rem;
    overflow-x: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,iO=P.div`
    max-width: 550px;
    max-height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`,aO=P.img`
    width: 650px;
    height: 500px;

    @media (max-width: 768px) {
        width: 350px;
        height: 300px;
    }

    @media (max-width: 540px) {
        width: 350px;
        height: 300px;
    }

`,oO=`/labic2/assets/ebook_inovacao-DLmr-Nj8.png`,sO=`/labic2/assets/ebook_jp-DbEwWNSI.png`,cO=`/labic2/assets/ciudadesconectadas2-2JWe0X6G.png`,lO=()=>(0,B.jsxs)(rO,{children:[(0,B.jsxs)(iO,{children:[(0,B.jsx)(aO,{src:oO}),(0,B.jsx)(nO,{text:`Clique aqui para baixar!`,url:`https://forms.gle/iFEvAJfFY7UP1V6q9`})]}),(0,B.jsxs)(iO,{children:[(0,B.jsx)(aO,{src:sO}),(0,B.jsx)(nO,{text:`Clique aqui para baixar!`,url:`https://forms.gle/QxBHHc7ajk6g7eBF7`})]}),(0,B.jsxs)(iO,{children:[(0,B.jsx)(aO,{src:cO}),(0,B.jsx)(nO,{text:`Clique aqui para baixar!`,url:`https://forms.gle/a13AibegxGfibqyY7`})]})]}),uO=()=>{let[e,t]=(0,M.useState)(1);return(0,B.jsxs)(kD,{children:[(0,B.jsx)(H,{text:`MATERIAIS LABIC`,color:`white`}),(0,B.jsxs)(AD,{children:[(0,B.jsx)(QD,{onClick:t}),(()=>{switch(e){case 0:return(0,B.jsx)(lO,{});case 1:return(0,B.jsx)(BD,{});case 2:return(0,B.jsx)(WD,{});case 3:return(0,B.jsx)(JD,{});default:return(0,B.jsx)(BD,{})}})()]})]})},dO=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
    background-image: url(${er});
    background-size: cover;
    background-position: center;
`,fO=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,pO=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 540px) {
        flex-direction: row;
    }
`,mO=P.button`
    display: flex;
    background-color:white;
    width: 3rem;
    height: 3rem;
    border: white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    justify-content: center;

`;P.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
`;var hO=P.p`
    text-align: center;
    color: black;
    font-size: 0.75rem;
    font-weight: 700;
    
`,gO=({onClick:e})=>{let t=t=>{e(t)};return(0,B.jsx)(fO,{children:(0,B.jsxs)(pO,{children:[(0,B.jsx)(mO,{onClick:()=>t(1),children:(0,B.jsx)(hO,{children:`2021`})}),(0,B.jsx)(mO,{onClick:()=>t(2),children:(0,B.jsx)(hO,{children:`2022`})}),(0,B.jsx)(mO,{onClick:()=>t(3),children:(0,B.jsx)(hO,{children:`2023`})}),(0,B.jsx)(mO,{onClick:()=>t(4),children:(0,B.jsx)(hO,{children:`2024`})}),(0,B.jsx)(mO,{onClick:()=>t(6),children:(0,B.jsx)(hO,{children:`2026`})})]})})},_O=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`,vO=P.button`
    background-color: #FFFFFF;
    border-radius: 3rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 50rem;
    height: 5rem;
    position: relative;
    padding: 0 4rem 0 4rem;
    gap: 1rem;

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 85%;
        height: 5rem;
        padding: 0 2rem 0 5.5rem;
    }

`,yO=P.p`
    font-size: 1.2rem;
    font-weight: 700;
    text-align:justify;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }
`;P.p`
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 540px) {
        font-size: 0.8rem;
    }

    @media (max-width: 540px) {
        font-size: 0.6rem;
    }
`;var $=({disabled:e,url:t,text:n})=>(0,B.jsx)(_O,{children:(0,B.jsx)(vO,{onClick:()=>{t&&!e&&window.open(t,`_blank`)},children:(0,B.jsx)(yO,{children:n})})}),bO=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,xO=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`,SO=()=>(0,B.jsxs)(bO,{children:[(0,B.jsx)(xO,{children:`2021`}),(0,B.jsx)($,{text:`Laboratório de Inovação da UFRJ oferece apoio financeiro e de gestão a projetos de enfrentamento à Covid-19 - Por Alba Valéria Mendonça, G1 Rio`,disabled:!1,url:`https://g1.globo.com/rj/rio-de-janeiro/noticia/2021/04/27/laboratorio-de-inovacao-da-ufrj-oferece-apoio-financeiro-e-de-gestao-a-projetos-de-enfrentamento-a-covid-19.ghtml`}),(0,B.jsx)($,{text:`Laboratório de Inovação da UFRJ oferece R$ 40 mil a projetos de enfrentamento à Covid-19 - Por O Dia`,disabled:!1,url:`https://odia.ig.com.br/economia/2021/05/6137421-laboratorio-de-inovacao-da-ufrj-oferece-rs-40-mil-a-projetos-de-enfrentamento-a-covid-19.html`}),(0,B.jsx)($,{text:`Laboratório de Inovação da UFRJ oferece R$ 40 mil a projetos de enfrentamento à Covid-19 - Por MH`,disabled:!1,url:`https://www.meiahora.com.br/geral/2021/05/6137491-laboratorio-de-inovacao-da-ufrj-oferece-rs-40-mil-a-projetos-de-enfrentamento-a-covid-19.html`}),(0,B.jsx)($,{text:`UFRJ oferece R$ 40 mil a projetos de enfrentamento à Covid-19 - Por Babi Wentz`,disabled:!1,url:`https://diariodorio.com/ufrj-oferece-r-40-mil-a-projetos-de-enfrentamento-a-covid-19/`})]}),CO=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,wO=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`,TO=()=>(0,B.jsxs)(CO,{children:[(0,B.jsx)(wO,{children:`2022`}),(0,B.jsx)($,{text:`UFRJ recebe jovem empreendedor destaque no “Oscar” da gastronomia mundial de alto impacto - Eu, Rio! - Por Portal Eu, Rio!`,disabled:!1,url:`https://eurio.com.br/noticia/34598/ufrj-recebe-jovem-empreendedor-destaque-no-a-oscara-da-gastronomia-mundial-de-alto-impacto.html`}),(0,B.jsx)($,{text:`UFRJ oferece R$ 140 mil para projetos em favelas - Rafael Lopes`,disabled:!1,url:`https://oglobo.globo.com/rio/bairros/ufrj-oferece-140-mil-para-projetos-em-favelas-1-25381675`}),(0,B.jsx)($,{text:`UFRJ vai oferecer R$140 mil a projetos sociais de favelas e periferias - Por Suelen Bastos, g1 Rio`,disabled:!1,url:`https://g1.globo.com/rj/rio-de-janeiro/noticia/2022/02/26/ufrj-vai-oferecer-r140-mil-a-projetos-sociais-de-favelas-e-periferias.ghtml`}),(0,B.jsx)($,{text:`UFRJ vai apoiar projetos na chamada Favela e Universidade - Alana Gandra - Repórter da Agência Brasil`,disabled:!1,url:`https://agenciabrasil.ebc.com.br/geral/noticia/2022-02/ufrj-vai-apoiar-projetos-na-chamada-favela-e-universidade`}),(0,B.jsx)($,{text:`UFRJ vai apoiar projetos na chamada Favela e Universidade - Agência Brasil`,disabled:!1,url:`https://www.istoedinheiro.com.br/ufrj-vai-apoiar-projetos-na-chamada-favela-e-universidade/`}),(0,B.jsx)($,{text:`UFRJ vai apoiar iniciativas sociais pelo programa Favela e Universidade - Por Jacqueline Cardiano`,disabled:!1,url:`https://www.vozdascomunidades.com.br/geral/ufrj-vai-apoiar-iniciativas-sociais-pelo-programa-favela-e-universidade-saiba-mais/`}),(0,B.jsx)($,{text:`Projeto Favela e Universidade inscreve até dia 28/02 - Por: Lucas Feitoza`,disabled:!1,url:`https://www.anf.org.br/projeto-favela-e-universidade-inscreve-ate-dia-28-02/`}),(0,B.jsx)($,{text:`Entrevista Ivana Bentes - Rádio Roquette Pinto`,disabled:!1,url:`https://drive.google.com/file/d/1M38ouZkXIHIlV5jghxDJ2BlQ69gmYzoy/view?usp=sharing`}),(0,B.jsx)($,{text:`UFRJ lança chamada para apoiar projetos em favelas e territórios vulneráveis - Por Redação`,disabled:!1,url:`https://odebateon.com.br/ufrj-lanca-chamada-para-apoiar-projetos-em-favelas-e-territorios-vulneraveis/`}),(0,B.jsx)($,{text:`UFRJ oferece R$ 140 mil para projetos em favelas e territórios vulneráveis - Diário do Vale`,disabled:!1,url:`https://diariodovale.com.br/tempo-real/ufrj-oferece-r-140-mil-para-projetos-em-favelas-e-territorios-vulneraveis/`}),(0,B.jsx)($,{text:`UFRJ apoia projetos com atuação em favelas e periferias - Toda Palavra`,disabled:!1,url:`https://www.todapalavra.info/single-post/ufrj-apoia-projetos-com-atua%C3%A7%C3%A3o-em-favelas-e-periferias`}),(0,B.jsx)($,{text:`UFRJ vai apoiar projetos na chamada Favela e Universidade - Dinheiro Rural`,disabled:!1,url:`https://www.dinheirorural.com.br/ufrj-vai-apoiar-projetos-na-chamada-favela-e-universidade/`}),(0,B.jsx)($,{text:`Projeto da UFRJ apoia iniciativas coletivas nas favelas cariocas - Correio do Brasil`,disabled:!1,url:`https://www.correiodobrasil.com.br/projeto-ufrj-apoia-iniciativas-coletivas-favelas-cariocas/`})]}),EO=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,DO=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`,OO=()=>(0,B.jsxs)(EO,{children:[(0,B.jsx)(DO,{children:`2023`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para financiar projetos com ações transformadoras - Alana Gandra - Repórter da Agência Brasil`,disabled:!1,url:`https://agenciabrasil.ebc.com.br/educacao/noticia/2023-06/ufrj-abre-inscricoes-para-financiar-projetos-com-acoes-transformadoras`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para financiar projetos com ações transformadoras - Uol`,disabled:!1,url:`https://noticias.uol.com.br/ultimas-noticias/agencia-brasil/2023/06/22/ufrj-abre-inscricoes-para-financiar-projetos-com-acoes-transformadoras.htm`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para financiar projetos com ações transformadoras - Isto É`,disabled:!1,url:`https://istoe.com.br/ufrj-abre-inscricoes-para-financiar-projetos-com-acoes-transformadoras/#:~:text=Est%C3%A3o%20abertas%20at%C3%A9%20o%20dia,pode%20ser%20acessado%20pela%20internet`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para financiar projetos com ações transformadoras - O Fluminense`,disabled:!1,url:`https://www.ofluminense.com.br/educacao/2023/06/1264854-ufrj-abre-inscricoes-para-financiar-projetos-com-acoes-transformadoras.html`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para o Laboratório de Inovação Cidadã 2023 - Por: mareonline`,disabled:!1,url:`https://mareonline.com.br/ufrj-abre-inscricoes-para-o-laboratorio-de-inovacao-cidada-2023/`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para financiar projetos com ações transformadoras - Diário Comercial`,disabled:!1,url:`https://diariocomercial.com.br/ufrj-abre-inscricoes-para-financiar-projetos-com-acoes-transformadoras/`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para o Laboratório de Inovação Cidadã 2023 - Por Redação`,disabled:!1,url:`https://odebateon.com.br/ufrj-abre-inscricoes-para-o-laboratorio-de-inovacao-cidada-2023/`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para o Laboratório de Inovação Cidadã 2023 - Acontece Macaé`,disabled:!1,url:`https://aconteceemmacaeeregiao.com.br/index.php/2023/06/26/ufrj-abre-inscricoes-para-o-laboratorio-de-inovacao-cidada-2023/`}),(0,B.jsx)($,{text:`Prorrogadas as inscrições para UFRJ na Ciência e Tecnologia, projeto que formará estudantes para atuação nas Naves do Conhecimento - Barra Legal`,disabled:!1,url:`https://www.barralegal.com.br/em-destaque/prorrogadas-as-inscricoes-para-ufrj-na-ciencia-e-tecnologia-projeto-que-formara-estudantes-para-atuacao-nas-naves-do-conhecimento`}),(0,B.jsx)($,{text:`Prorrogadas as inscrições para UFRJ na Ciência e Tecnologia - RJ4News`,disabled:!1,url:`https://rj4news.com.br/2023/08/11/prorrogadas-as-inscricoes-para-ufrj-na-ciencia-e-tecnologia-projeto-que-formara-estudantes-para-atuacao-nas-naves-do-conhecimento/`}),(0,B.jsx)($,{text:`Mais tempo para se inscrever no projeto UFRJ na Ciência e Tecnologia - Conexão UFRJ`,disabled:!1,url:`https://bit.ly/443N6Fd`}),(0,B.jsx)($,{text:`Abertas as inscrições para UFRJ na Ciência e Tecnologia, para atuar nas Naves de Conhecimento - Alou News`,disabled:!1,url:`https://www.alounews.com.br/post/abertas-as-inscri%C3%A7%C3%B5es-para-ufrj-na-ci%C3%AAncia-e-tecnologia-para-atuar-nas-naves-de-conhecimento`}),(0,B.jsx)($,{text:`Laboratório de Inovação Cidadã da UFRJ recebe inscrições para colaboradores - Plurale`,disabled:!1,url:`https://www.plurale.com.br/site/agenda-detalhes.php?cod=5765`}),(0,B.jsx)($,{text:`Prorrogadas inscrições para alunos da UFRJ atuarem nas Naves do Conhecimento da Prefeitura do Rio - Extra`,disabled:!1,url:`https://extra.globo.com/economia/emprego/noticia/2023/08/prorrogadas-inscricoes-para-alunos-da-ufrj-atuarem-nas-naves-do-conhecimento-da-prefeitura-do-rio.ghtml`})]}),kO=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,AO=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`,jO=()=>(0,B.jsxs)(kO,{children:[(0,B.jsx)(AO,{children:`2024`}),(0,B.jsx)($,{text:`MinC e UFRJ abrem inscrições para seleção de projetos sociais para formação em cultura digital - Ministério da Cultura`,disabled:!1,url:`https://www.gov.br/cultura/pt-br/assuntos/noticias/minc-e-ufrj-abrem-inscricoes-para-selecao-de-projetos-sociais-para-formacao-em-cultura-digital`}),(0,B.jsx)($,{text:`Clássificados do Edimilson - G1`,disabled:!1,url:`https://g1.globo.com/google/amp/rj/rio-de-janeiro/blog/edimilson-avila/post/2024/09/09/classificados-do-edimilson-veja-as-vagas-de-emprego-da-semana-de-9-a-13-de-setembro.ghtml`}),(0,B.jsx)($,{text:`Aberta seleção para formação em cultura digital no RJ - Terra`,disabled:!1,url:`https://www.terra.com.br/visao-do-corre/corre-pro-futuro/aberta-selecao-para-formacao-em-cultura-digital-no-rj,cce0bd338836f106165146873e2f5222yr6n37vc.html`}),(0,B.jsx)($,{text:`MinC e UFRJ abrem inscrições para seleção de projetos sociais para formação em cultura digital - Diário Carioca`,disabled:!1,url:`https://www.diariocarioca.com/cultura/minc-e-ufrj-abrem-inscricoes-para-selecao-de-projetos-sociais-para-formacao-em-cultura-digital/`}),(0,B.jsx)($,{text:`Cultura digital que transforma: projeto oferece 30 bolsas de R$ 1.000… - Uol`,disabled:!1,url:`https://www.uol.com.br/ecoa/colunas/eduardo-carvalho/2024/09/12/cultura-digital-que-transforma-projeto-oferece-30-bolsas-de-r-1-mil.htm`}),(0,B.jsx)($,{text:`UFRJ abre inscrições para curso de extensão remoto - IG`,disabled:!1,url:`https://www.leiaja.com/carreiras/2024/09/30/ufrj-abre-inscricoes-para-curso-de-extensao-remoto/#:~:text=A%20Universidade%20Federal%20do%20Rio,4%20de%20outubro%2C%20pela%20internet`}),(0,B.jsx)($,{text:`UFRJ abre vagas para novo curso de extensão em cultura digital - Correio Braziliense`,disabled:!1,url:`https://www.correiobraziliense.com.br/euestudante/educacao-profissional/2024/09/6954090-ufrj-abre-vagas-para-novo-curso-de-extensao-em-cultura-digital.html`}),(0,B.jsx)($,{text:`MinC divulga projetos selecionados para Rede de Formação em Cultura Digital - Labic Rio 2024 - Ministério da Cultura`,disabled:!1,url:`https://www.gov.br/cultura/pt-br/assuntos/noticias/minc-divulga-projetos-selecionados-para-rede-de-formacao-em-cultura-digital-labic-rio-2024`}),(0,B.jsx)($,{text:`Documentário “Decodificando a extrema-direita” mapeia gramática do discurso de ódio - Brasil de Fato`,disabled:!1,url:`https://www.brasildefatorj.com.br/2024/10/08/documentario-decodificando-a-extrema-direita-mapeia-gramatica-do-discurso-de-odio`}),(0,B.jsx)($,{text:`Ação em Curitiba seleciona projetos sociais para treinamento sobre plataformas digitais; veja como participar - G1`,disabled:!1,url:`https://g1.globo.com/google/amp/pr/parana/noticia/2024/10/31/acao-em-curitiba-seleciona-projetos-sociais-para-treinamento-sobre-plataformas-digitais-veja-como-participar.ghtml`}),(0,B.jsx)($,{text:`Quer aprender a engajar nas redes? Ação gratuita chega a Curitiba - Tribuna PR`,disabled:!1,url:`https://www.tribunapr.com.br/noticias/curitiba-regiao/quer-aprender-a-engajar-nas-redes-acao-gratuita-chega-a-curitiba/amp/`}),(0,B.jsx)($,{text:`Rede de Formação em Cultura Digital vai selecionar 30 projetos sociais de todo o Paraná - Brasil de Fato`,disabled:!1,url:`https://www.brasildefatopr.com.br/2024/10/31/redes-de-formacao-em-cultura-digital-vai-selecionar-30-projetos-sociais-de-todo-o-parana`}),(0,B.jsx)($,{text:`Tinder de projetos sociais fará seleção de ideias em Curitiba. - Bem Paraná`,disabled:!1,url:`https://www.bemparana.com.br/noticias/parana/tinder-de-projetos-sociais-desembarca-em-curitiba-confira-como-participar/`}),(0,B.jsx)($,{text:`UFRJ abre vagas para curso remoto em cultura digital, com foco em mudanças climáticas - Portal Energia Limpa`,disabled:!1,url:`https://energialimpa.live/ufrj-abre-vagas-para-curso-remoto-em-cultura-digital-com-foco-em-mudancas-climaticas/?srsltid=AfmBOopIG_tSl8N2PqhclSSmF1B46OhHtHvtWFQt5F8OAKbO1XCtM8V0#google_vignette`})]}),MO=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,NO=P.h1`
    font-family: var(--open-sans);
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
`,PO=()=>(0,B.jsxs)(MO,{children:[(0,B.jsx)(NO,{children:`2026`}),(0,B.jsx)($,{text:`Formação digital quer preparar líderes comunitários de cada bioma - iBand CE`,disabled:!1,url:`https://ibandce.com.br/formacao-digital-quer-preparar-lideres-comunitarios-de-cada-bioma/`}),(0,B.jsx)($,{text:`Formação digital quer preparar líderes comunitários de cada bioma - Reporter PB`,disabled:!1,url:`https://www.reporterpb.com.br/noticia-extra/2026/06/26/formacao-digital-quer-preparar-lideres-comunitarios-de-cada-bioma/123733.html`}),(0,B.jsx)($,{text:`Formação digital vai preparar líderes para defender territórios e combater desinformação - O Alagoano`,disabled:!1,url:`https://oalagoano.com.br/noticias/2026/06/26/18639-formacao-digital-vai-preparar-lideres-para-defender-territorios-e-combater-desinformacao`}),(0,B.jsx)($,{text:`MinC e UFRJ lançam programa para formar agentes culturais e comunicadores nos biomas brasileiros - Aldeia Nago`,disabled:!1,url:`https://aldeianago.com.br/minc-e-ufrj-lancam-programa-para-formar-agentes-culturais-e-comunicadores-nos-biomas-brasileiros/`}),(0,B.jsx)($,{text:`Formação digital quer preparar líderes comunitários de cada bioma - Agência Brasil`,disabled:!1,url:`https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-06/formacao-digital-quer-preparar-lideres-comunitarios-de-cada-bioma`}),(0,B.jsx)($,{text:`Formação digital prepara líderes comunitários de cada bioma`,disabled:!1,url:`https://www.portaltela.com/noticias/educacao/2026/06/27/formacao-digital-prepara-lideres-comunitarios-de-cada-bioma/`}),(0,B.jsx)($,{text:`Formação digital prepara líderes comunitários para preservar cada bioma brasileiro. - Boletim Bahia`,disabled:!1,url:`https://boletimbahia.com.br/2026/06/26/formacao-digital-prepara-lideres-comunitarios-para-preservar-cada-bioma-brasileiro/`}),(0,B.jsx)($,{text:`Formação digital quer preparar líderes comunitários de cada bioma... - Poder360`,disabled:!1,url:`https://www.poder360.com.br/poder-educacao/formacao-digital-quer-preparar-lideres-comunitarios-de-cada-bioma/`}),(0,B.jsx)($,{text:`Formação digital quer preparar líderes comunitários de cada bioma - GZ1`,disabled:!1,url:`https://gz1.com.br/formacao-digital-quer-preparar-lideres-comunitarios-de-cada-bioma/`}),(0,B.jsx)($,{text:`Formação digital quer preparar líderes comunitários de cada bioma - Talks SC`,disabled:!1,url:`https://talksc.com.br/formacao-digital-quer-preparar-lideres-comunitarios-de-cada-bioma/`})]}),FO=()=>{let[e,t]=(0,M.useState)(6);return(0,B.jsxs)(dO,{children:[(0,B.jsx)(H,{text:`LABIC NA MIDIA`,backgroundColor:`#fcfcfc68`,color:`white`}),(0,B.jsx)(gO,{onClick:t}),(()=>{switch(e){case 1:return(0,B.jsx)(SO,{});case 2:return(0,B.jsx)(TO,{});case 3:return(0,B.jsx)(OO,{});case 4:return(0,B.jsx)(jO,{});case 6:return(0,B.jsx)(PO,{});default:return(0,B.jsx)(PO,{})}})()]})},IO=P.div`
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`,LO=P.img`
    width: 100%;
    height: 100%;
    max-width: 247px;
    max-height: 242px;
`,RO=P.p`
    font-family: var(--open-sans);
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
`,zO=P.p`
    font-family: var(--poppins);
    font-size: 1rem;
    color: #ffffff;
    text-align: center;
`,BO=({img:e,name:t,description:n})=>(0,B.jsxs)(IO,{children:[(0,B.jsx)(LO,{src:e}),(0,B.jsx)(RO,{children:t}),(0,B.jsx)(zO,{children:n})]}),VO=P.div`
    background-image: url(${er});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    gap: 5rem;
`,HO=P.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,UO=`/labic2/assets/ninjalogo-W3EAQP-f.png`,WO=`/labic2/assets/redejplogo-CU5IJr9A.png`,GO=`/labic2/assets/extensaologo-BHDRhHzq.png`,KO=`/labic2/assets/minc-B1sbc5Wu.png`,qO=`/labic2/assets/terracoverde-B4YqoPio.png`,JO=`/labic2/assets/comiteparana-B1FDwiqj.png`,YO=`/labic2/assets/unibrasi-MrmLuAnx.png`,XO=`/labic2/assets/proec-9raMEMhy.png`,ZO=`/labic2/assets/ufc1-CIAQ2T7j.png`,QO=`/labic2/assets/kuya1-D40g3MrS.png`,$O=`/labic2/assets/governoceara2-CRykDz3G.png`,ek=`/labic2/assets/leirouanet-Dv1hNTYr.png`,tk=`/labic2/assets/alimenta1-Bqr3mB0H.png`,nk=`/labic2/assets/mirante2-DY93fyly.png`,rk=`/labic2/assets/pinacoteca1-B3iIppQa.png`,ik=`/labic2/assets/proex1-VBn-Pxdo.png`,ak=()=>(0,B.jsxs)(VO,{children:[(0,B.jsx)(H,{text:`NOSSOS PARCEIROS`,color:`var(--white-2)`}),(0,B.jsxs)(HO,{children:[(0,B.jsx)(BO,{name:`Midia Ninja`,img:UO,description:``}),(0,B.jsx)(BO,{name:`Jornalistas Pretos`,img:WO,description:`Rede de Jornalistas pela Diversidade na Comunicação`}),(0,B.jsx)(BO,{name:`Pró-Reitoria de Extensão da UFRJ`,img:GO,description:``}),(0,B.jsx)(BO,{name:`Secretaria do Livro e Leitura do MinC`,img:KO,description:``})]}),(0,B.jsxs)(HO,{children:[(0,B.jsx)(BO,{name:`Pró-Reitoria de Extensão da UFC`,img:ZO,description:``}),(0,B.jsx)(BO,{name:`Pinacoteca`,img:rk,description:``}),(0,B.jsx)(BO,{name:`Mercado Alimenta`,img:tk,description:``}),(0,B.jsx)(BO,{name:`Centro de Design do Ceará`,img:QO,description:``})]}),(0,B.jsxs)(HO,{children:[(0,B.jsx)(BO,{name:`Lei Rouanet`,img:ek,description:``}),(0,B.jsx)(BO,{name:`Pró-Reitoria de Extensão`,img:ik,description:``}),(0,B.jsx)(BO,{name:`Secretaria de Cultura do Ceará`,img:$O,description:``}),(0,B.jsx)(BO,{name:`Instituto Mirante`,img:nk,description:``})]}),(0,B.jsxs)(HO,{children:[(0,B.jsx)(BO,{name:`Terraço Verde`,img:qO,description:``}),(0,B.jsx)(BO,{name:`Comitê de Cultura do Paraná`,img:JO,description:``}),(0,B.jsx)(BO,{name:`Pró-Reitoria de Extensão da UnB`,img:YO,description:``}),(0,B.jsx)(BO,{name:`Pró-Reitoria de Extensão da UFPR`,img:XO,description:``})]})]}),ok=P.div`
    background-image: url(${fs});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;P.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`,P.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`,P.img`
    width: 100%;
    height: 100%;
    max-width: 432px;
    max-height: 592px;

`,P.p`

`;var sk=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,ck=P.button`
    display: flex;
    width: 622px;
    height: 84px;
    justify-content: center;
    background-color:#ffffff;
    align-items: center;
    gap: 0.5rem;
    border: none;
    cursor: pointer;
    border-radius: 20px;

    @media (max-width: 768px) {
        width: 300px;
        height: 50px;
    }

    @media (max-width: 540px) {
        width: 300px;
        height: 50px;
    }
`,lk=P.text`
    color: black;
    font-weight: 700;
    font-family: var(--open-sans);
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 540px) {
        font-size: 1rem;
    }
    
`,uk=({text:e,disabled:t,url:n})=>(0,B.jsx)(sk,{children:(0,B.jsx)(ck,{disabled:t,onClick:()=>{n&&!t&&window.open(n,`_blank`)},children:(0,B.jsx)(lk,{children:e})})}),dk=P.div`
    background-image: url(${fs});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;P.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`;var fk=P.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`,pk=P.img`
    width: 100%;
    height: 100%;
    max-width: 432px;
    max-height: 592px;

`;P.p`

`;var mk=`/labic2/assets/ebooklogo-DtvnydAh.png`,hk=()=>(0,B.jsxs)(dk,{children:[(0,B.jsx)(H,{text:`e-BOOK INOVAÇÃO CIDADÃ`,color:`white`,backgroundColor:`#fcfcfc68`}),(0,B.jsxs)(fk,{children:[(0,B.jsx)(pk,{src:mk}),(0,B.jsx)(uk,{text:`Clique aqui para baixar!`,url:`https://forms.gle/iFEvAJfFY7UP1V6q9`})]})]}),gk=P.div`
    background-image: url(${fs});
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
    overflow-x: hidden;
`;P.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`;var _k=P.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    

`,vk=P.img`
    width: 100%;
    height: 100%;
    max-width: 432px;
    max-height: 592px;

`;P.p`

`;var yk=`/labic2/assets/ebookjp-B1QfJnb3.png`,bk=()=>(0,B.jsxs)(gk,{children:[(0,B.jsx)(H,{text:`DIVERSIDADE INCLUSÃO E NOVOS FORMATOS NO JORNALISMO PÓS-CULTURA DIGITAL`,color:`white`,backgroundColor:`#fcfcfc68`}),(0,B.jsxs)(_k,{children:[(0,B.jsx)(vk,{src:yk}),(0,B.jsx)(uk,{text:`Clique aqui para baixar!`,url:`https://forms.gle/QxBHHc7ajk6g7eBF7`})]})]}),xk=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 15px;
    padding-top: 2rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 540px) {
        flex-direction: column;
    }
`,Sk=P.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 15px;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 540px) {
        flex-direction: row;
    }
`,Ck=P.button`
    display: flex;
    background-color:white;
    width: 35rem; 
    height: 5rem;
    border: white;
    border-radius: 5px;
    cursor: pointer;
    align-items: center;
    justify-content: center;

`;P.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
`;var wk=P.p`
    text-align: center;
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    
`,Tk=({onClick:e})=>{let t=t=>{e(t)};return(0,B.jsx)(xk,{children:(0,B.jsxs)(Sk,{children:[(0,B.jsx)(Ck,{onClick:()=>t(0),children:(0,B.jsx)(wk,{children:`INOVAÇÃO CIDADÃ`})}),(0,B.jsx)(Ck,{onClick:()=>t(1),children:(0,B.jsx)(wk,{children:`DIVERSIDADE INCLUSAO E NOVOS FORMATOS NO JORNALISMO POS CULTURA DIGITAL`})})]})})},Ek=()=>{let[e,t]=(0,M.useState)(0);return(0,B.jsxs)(ok,{children:[(0,B.jsx)(Tk,{onClick:t}),(()=>{switch(e){case 0:return(0,B.jsx)(hk,{});case 1:return(0,B.jsx)(bk,{});default:return(0,B.jsx)(hk,{})}})()]})},Dk=()=>(0,B.jsxs)(ia,{children:[(0,B.jsx)(na,{path:`/`,element:(0,B.jsx)(ls,{})}),(0,B.jsx)(na,{path:`/site-labic/home`,element:(0,B.jsx)(ls,{})}),(0,B.jsx)(na,{path:`/site-labic/live`,element:(0,B.jsx)(hs,{})}),(0,B.jsx)(na,{path:`/site-labic/registrations`,element:(0,B.jsx)(yc,{})}),(0,B.jsx)(na,{path:`/site-labic/scheduling`,element:(0,B.jsx)(mv,{})}),(0,B.jsx)(na,{path:`/site-labic/the-project`,element:(0,B.jsx)(Ny,{})}),(0,B.jsx)(na,{path:`/site-labic/previous-editions`,element:(0,B.jsx)(OD,{})}),(0,B.jsx)(na,{path:`/site-labic/parceiros`,element:(0,B.jsx)(ak,{})}),(0,B.jsx)(na,{path:`/site-labic/material`,element:(0,B.jsx)(uO,{})}),(0,B.jsx)(na,{path:`/site-labic/midia`,element:(0,B.jsx)(FO,{})}),(0,B.jsx)(na,{path:`/site-labic/ebook`,element:(0,B.jsx)(Ek,{})})]});function Ok(){return(0,B.jsxs)(Va,{children:[(0,B.jsx)(tr,{}),(0,B.jsx)(qo,{}),(0,B.jsx)(Dk,{}),(0,B.jsx)(yo,{})]})}$e.createRoot(document.getElementById(`root`)).render((0,B.jsx)(M.StrictMode,{children:(0,B.jsx)(Ok,{})}));