// ==UserScript==
// @name            Oh-My-GitHub
// @version         0.1.0
// @author          cssmagic
// @namespace       https://github.com/UserScript
// @homepage        https://github.com/UserScript/Oh-My-GitHub
// @description     Make GitHub even better.
// @downloadURL     https://raw.githubusercontent.com/UserScript/Oh-My-GitHub/master/dist/oh-my-github.user.js
// @updateURL       https://raw.githubusercontent.com/UserScript/Oh-My-GitHub/master/src/meta.js
// @icon            https://github.com/favicon.ico
// @grant           none
// @noframes
// @run-at          document-start
// @include         https://github.com/*
// @include         https://gist.github.com/*
// ==/UserScript==

//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/**
 * Underscore-template - More APIs for Underscore's template engine - template fetching, rendering and caching.
 * Released under the MIT license.
 * https://github.com/cssmagic/underscore-template
 */
var template = function () {
	'use strict'

	//namespace
	var template = {}

	//config
	var ELEM_ID_PREFIX = 'template-'

	//cache
	var _cacheTemplate = {}
	var _cacheCompiledTemplate = {}

	//string function
	function _trim(str) {
		return str.replace(/^\s+|\s+$/g, '')
	}
	function _include(str, substring) {
		return str.length > substring.length ? str.indexOf(substring) > -1 : false
	}
	function _startsWith(str, starts) {
		return str.length > starts.length ? str.indexOf(starts) === 0 : false
	}
	function _endsWith(str, ends) {
		return str.length > ends.length ? str.indexOf(ends) === (str.length - ends.length) : false
	}

	//util
	function _toTemplateId(id) {
		//`#template-my-tpl-001` -> `my-tpl-001`
		// `template-my-tpl-001` -> `my-tpl-001`
		//          `my-tpl-001` -> `my-tpl-001`
		id = _.isString(id) && id ? _trim(id).replace(/^[#!]+/, '') : ''
		return _trim(id).replace(ELEM_ID_PREFIX, '')
	}
	function _toElementId(id) {
		//`template-my-tpl-001` -> `template-my-tpl-001`
		//         `my-tpl-001` -> `template-my-tpl-001`
		id = id ? _trim(id) : ''
		return _startsWith(id, ELEM_ID_PREFIX) ? id : ELEM_ID_PREFIX + id
	}
	function _stripCommentTag(str) {
		str = String(str)
		if (_startsWith(str, '<!' + '--') && _endsWith(str, '-->')) {
			str = str.replace(/^<!\-\-/, '').replace(/\-\->$/, '')
			str = _trim(str)
		}
		return str
	}
	//get template by id (of dummy script element in html)
	function _getTemplateById(id) {
		if (!id) return false
		var result
		var elementId = _toElementId(String(id))
		var elem = document.getElementById(elementId)
		if (elem) {
			var str = _trim(elem.innerHTML)
			if (str) {
				//strip html comment tag wrapping template code
				//especially for jedi 1.0 (https://github.com/baixing/jedi)
				if (_.templateSettings.shouldUnwrapCommentTag) str = _stripCommentTag(str)

				if (_isTemplateCode(str)) {
					result = str
				} else {
					/*
					console.warn('[Template] Template code in element "#' + elementId + '" is invalid!')
					*/
				}
			} else {
				/*
				console.warn('[Template] Element "#' + elementId + '" is empty!')
				*/
			}
		} else {
			/*
			console.warn('[Template] Element "#' + elementId + '" not found!')
			*/
		}
		return result || false
	}
	function _isTemplateCode(s) {
		var code = String(s)
		return _include(code, '<%') && _include(code, '%>') && /\bdata\b/.test(code)
	}

	//fn
	function add(id, templateCode) {
		//todo: accept second param as a function, to support pre-compiled template.
		if (arguments.length < 2) return false

		var result
		if (templateCode) {
			var templateId = _toTemplateId(id)
			/*
			if (_cacheTemplate[templateId]) {
				console.warn('[Template] Template id "' + templateId + '" already existed.')
			}
			*/
			result = _cacheTemplate[templateId] = templateCode
		} else {
			//todo: support `_.template.add(id)` to add from dummy script element
			//console.error('Missing template code to add to cache.')
		}
		return !!result
	}

	//api
	template.remove = function (/* id */) {
		//todo: remove template from cache (both str and fn)
		//todo: remove dummy script element
	}
	template.add = add
	template.render = function (id, data) {
		//todo: support _.template.render(templateCode, templateData)
		if (arguments.length < 2) {
			console.error('Missing data to render template: "' + id + '"')
			return false
		}
		var result
		var templateId = _toTemplateId(id)

		//todo: refactor: use recursion to simplify these codes
		//search in _cacheCompiledTemplate
		var fn = _cacheCompiledTemplate[templateId]
		var templateCode = _cacheTemplate[templateId]
		if (_.isFunction(fn)) {
			result = fn(data)
		}
		//search in _cacheTemplate
		else if (_.isString(templateCode)) {
			fn = _.template(templateCode)
			_cacheCompiledTemplate[templateId] = fn
			result = fn(data)
		}
		//get template code from dom
		else {
			templateCode = _getTemplateById(templateId)
			if (templateCode) {
				_cacheTemplate[templateId] = templateCode
				fn = _.template(templateCode)
				_cacheCompiledTemplate[templateId] = fn
				result = fn(data)
			}
		}
		return result || ''
	}

	/*
	//exports for unit test
	template.__trim = _trim
	template.__include = _include
	template.__startsWith = _startsWith
	template.__endsWith = _endsWith
	template.__toTemplateId = _toTemplateId
	template.__toElementId = _toElementId
	template.__isTemplateCode = _isTemplateCode
	template.__stripCommentTag = _stripCommentTag
	template.__cacheTemplate = _cacheTemplate
	template.__cacheCompiledTemplate = _cacheCompiledTemplate
	*/

	//exports
	return template

}()

/**
 * Action - Easy and lazy solution for click-event-binding.
 * Released under the MIT license.
 * https://github.com/cssmagic/action
 */
var action = function (window) {
	'use strict'

	var SELECTOR = '[data-action]'
	var _actionList = {}

	// util
	function _getActionName($elem) {
		var result = $elem.data('action') || ''
		if (!result) {
			var href = $.trim($elem.attr('href'))
			if (href && href.indexOf('#') === 0) result = href
		}
		return _formatActionName(result)
	}
	function _formatActionName(s) {
		return s ? $.trim(String(s).replace(/^[#!\s]+/, '')) : ''
	}

	function _init() {
		var $wrapper = $(document.body || document.documentElement)
		$wrapper.on('click', SELECTOR, function (ev) {
			//notice: default click behavior will be prevented.
			ev.preventDefault()

			var $elem = $(this)
			var actionName = _getActionName($elem)
			_handle(actionName, this)
		})
	}
	function _handle(actionName, context) {
		if (!actionName) {
			/*
			console.warn('[Action] Empty action. Do nothing.')
			*/

			return
		}
		var fn = _actionList[actionName]
		if (fn && $.isFunction(fn)) {
			/*
			console.log('[Action] Executing action `%s`.', actionName)
			*/

			return fn.call(context || window)
		} else {
			/*
			console.error('[Action] Not found action `%s`.', actionName)
			*/
		}
	}

	// fn
	function add(actionSet) {
		if ($.isPlainObject(actionSet)) {
			$.each(actionSet, function (key, value) {
				var actionName = _formatActionName(key)
				if (actionName) {
					if ($.isFunction(value)) {
						/*
						if (_actionList[actionName]) {
							console.warn('[Action] The existed action `%s` has been overridden.', actionName)
						}
						*/

						_actionList[actionName] = value
					} else {
						/*
						console.error('[Action] The function for action `%s` is invalid.', actionName)
						*/
					}
				} else {
					/*
					console.error('[Action] The action name `%s` is invalid.', key)
					*/
				}
			})
		} else {
			/*
			console.warn('[Action] Param must be a plain object.')
			*/
		}
	}
	function trigger(actionName, context) {
		return _handle(_formatActionName(actionName), context)
	}

	// api
	var exports = {}
	exports.add = add
	exports.trigger = trigger

	/*
	// only for unit test
	exports.__actionList = _actionList
	exports.__getActionName = _getActionName
	exports.__formatActionName = _formatActionName
	*/

	// init
	exports.init = _init

	//exports
	return exports

}(window)


// shim
if (typeof unsafeWindow === 'undefined') {
	var unsafeWindow = window
}
//var unsafeWindow = unsafeWindow || window

// shim for string methods
if (typeof String.prototype.contains !== 'function') {
	String.prototype.contains = String.prototype.includes
}

// shortcut
var $ = function () {
	console.error('[Oh-My-GitHub] jQuery is not available while `documentStart`.')
	// never mind, we'll get jQuery later.
}
var $doc = null
var $root = null

// ns
var app = {}
app.util = {}


// config for lib
_.extend(_.templateSettings, {
	interpolate : /<%-([\s\S]+?)%>/g,
	escape      : /<%=([\s\S]+?)%>/g,
	variable: 'data',
})


// const
app.EVENT_START = 'documentStart'
app.EVENT_END = 'documentEnd'
app.EVENT_IDLE = 'documentIdle'
app.NAME = 'Oh-My-GitHub'
app.LS_KEY = 'omg_config'
app.LINK_SETTING = '/settings/applications?x=oh-my-github'

// bind
document.addEventListener('DOMContentLoaded', function () {
	// can't use jQuery until here.
	$ = unsafeWindow.$
	$doc = $(unsafeWindow.document)
	$root = $(unsafeWindow.document.documentElement)
	action.init()
	app.getUrlTypeMore()
	app.getEnvInfoMore()

	$(document).on('pjax:end', function () {
		console.log('[OMG] pjax: ' + location.href)
		app.refresh()
	})

	app.runTask(app.EVENT_END)
}, false)

window.addEventListener('load', function () {
	app.runTask(app.EVENT_IDLE)
}, false)



// url
void function () {
	'use strict'

	var _query, _cacheParam = null
	function _getQuery() {
		return location.search.slice(1)
	}
	function getParam(s) {
		if (!s || !_.isString(s)) return false
		if (typeof _query === 'undefined') {	// first run
			_query = _getQuery()
		} else {
			var currentQuery = _getQuery()
			if (currentQuery !== _query) {
				_cacheParam = null	// clear cache to enforce re-parse
				_query = currentQuery
			}
		}
		if (!_cacheParam) {
			_cacheParam = parseQuery(_query)
		}
		return _cacheParam[s.toLowerCase()]
	}
	function appendParam(url, param) {
		var s = ''
		url = _.isString(url) ? url : ''
		//url = _.url.removeHashFromUrl(url)
		if ($.isPlainObject(param)) {
			param = $.param(param)
		} else if (_.isString(param)) {
			// fix param string
			if (param.startsWith('&') || param.startsWith('?')) {
				param = param.slice(1)
			}
		} else {
			param = null
		}
		// append
		s = param ? url + (url.contains('?') ? '&' : '?') + param : s
		return s || false
	}
	function parseQuery(query) {
		var data = {}
		if (query && _.isString(query)) {
			var pairs = query.split('&'), pair, name, value
			_.each(pairs, function(n) {
				pair = n.split('=')
				name = pair[0]
				value = pair[1] || ''
				if (name) {
					data[decodeURIComponent(name).toLowerCase()] = decodeURIComponent(value)
				}
			})
		}
		return data
	}

	// exports
	app.util.url = {
		getParam: getParam,
		appendParam: appendParam,
		parseQuery: parseQuery,
	}

}()


// match
void function () {
	'use strict'

	function matchDom(rules) {
		if (!_.isArray(rules)) return true
		if (!rules.length) return true
		return _.some(rules, function (item) {
			return $(item).length
		})
	}
	function matchConfig(mod) {
		if (mod.internal) return true
		var modName = mod.name
		var config = app.readConfig()
		var cfgModules = config.modules || {}
		var result = modName in cfgModules
		return result
	}
	function matchUrl(rules) {
		if (!_.isArray(rules)) return true
		if (!rules.length) return true
		var result = false

		_.each(rules, function (rule) {
			if (result) return
			//console.log(app.urlType)
			//console.log(rule)
			if (app.urlType === rule) {
				result = true
			} else if (rule.contains('*')) {
				//alert('*')
				var segments = rule.split('/')
				//console.log(segments)
				var urlTypeSegments = app.urlType.split('/')
				var segOK = true
				for (var i = 0; i < segments.length; i++) {
					var seg = segments[i]
					if (seg !== '*' && seg !== urlTypeSegments[i]) {
						segOK = false
						break
					}
				}
				if (segOK) result = true
			}
		})

		return result
	}

	// exports
	app.util.match = {
		url: matchUrl,
		dom: matchDom,
		config: matchConfig,
	}


}()


void function () {
	'use strict'
	var isFirefox = 'mozPaintCount' in unsafeWindow || 'mozContact' in unsafeWindow

	// exports
	app.util.env = {
		isFirefox: isFirefox,
	}
}()


/*
'github/home'
'github/setting/...'
'github/setting/app'	https://github.com/settings/applications
'github/setting/omg'	https://github.com/settings/applications?x=oh-my-github

'github/me/watch'		https://github.com/watching
'github/me/pr'			https://github.com/pulls
'github/me/issue'		https://github.com/issues
'github/me/fav'			https://github.com/stars
'github/user'			https://github.com/cssmagic
'github/user/repo'			https://github.com/cssmagic?tab=repositories
'github/user/act'			https://github.com/cssmagic?tab=activity
'github/user/following'		https://github.com/hax/following
'github/user/fav'			https://github.com/stars/hax
'github/user/follower'		https://github.com/cssmagic/followers
'github/repo/home'			https://github.com/hax/hax.github.com
'github/repo/commit'		https://github.com/baixing/jedi/commits
'github/repo/commit/user'	https://github.com/baixing/jedi/commits?author=hax
'github/repo/commit/detail'	https://github.com/baixing/jedi/commit/5f2f07f1da330bfdb200a1357552c9a0fcdb2f12
							https://github.com/baixing/jedi/commit/master
'github/repo/issue'			https://github.com/UserScript/Oh-My-GitHub/issues
'github/repo/issue/detail'	https://github.com/UserScript/Oh-My-GitHub/issues/11
'github/repo/issue/new'		https://github.com/UserScript/Oh-My-GitHub/issues/new
'github/repo/pr'			https://github.com/cssmagic/action/pulls
'github/repo/pr/closed'			https://github.com/cssmagic/action/pulls?q=is%3Apr+is%3Aclosed
'github/repo/pr/detail'		https://github.com/cssmagic/action/pulls/22
'github/repo/pr/commit'		https://github.com/cssmagic/action/pulls/22/commits
'github/repo/pr/diff'		https://github.com/cssmagic/action/pulls/22/files
'github/repo/wiki'				https://github.com/stylus/stylus/wiki
'github/repo/wiki/detail'		https://github.com/stylus/stylus/wiki/1.0.0
'github/repo/wiki/detail/edit'	https://github.com/stylus/stylus/wiki/1.0.0/_edit
'github/repo/setting'		https://github.com/cssmagic/action/settings
'github/repo/setting/...'	https://github.com/cssmagic/action/settings/...

'github/org/...'			...

'github/me'
'github/me/repo'
*/

/*
'gist/home'
'gist/user'
'gist/user/fav'
'gist/detail'
'gist/detail/rev'
'gist/detail/star'
'gist/detail/fork'
'gist/detail/edit'

'gist/me'
'gist/me/fav'
*/


app.urlType = ''

app.getUrlType = function () {

	//var url = location.href
	var host = location.hostname
	var path = location.pathname.toLowerCase()
	var pathSegments = path.split('/')
	pathSegments.shift()	// drop the first empty str

	var site = host.startsWith('gist') ? 'gist' : 'github'
	var pathType = '(unknown)'

	// home
	if (path === '/') {
		pathType = 'home'
	} else {
		if (site === 'gist') {
			if (/^\/[\w\-]+\/\w+\/?$/.test(path)) {
				pathType = 'detail'
			} else if (/^\/[\w\-]+\/?$/.test(path)) {
				pathType = 'user'
			} else if (/^\/[\w\-]+\/starred\/?$/i.test(path)) {
				pathType = 'user/star'
			} else if (/^\/[\w\-]+\/\w+\/revisions\/?$/i.test(path)) {
				pathType = 'detail/rev'
			} else if (/^\/[\w\-]+\/\w+\/stargazers\/?$/i.test(path)) {
				pathType = 'detail/star'
			} else if (/^\/[\w\-]+\/\w+\/forks\/?$/i.test(path)) {
				pathType = 'detail/fork'
			} else if (/^\/[\w\-]+\/\w+\/edit\/?$/i.test(path)) {
				pathType = 'detail/edit'
			}
		} else {
			var systemPaths = {
				'/organizations/new': 'new/org',
				'/settings/applications': 'setting/app',
			}
			var matchedSystemPath = ''
			_.each(systemPaths, function (value, key) {
				if (path === key || path === key + '/') {
					matchedSystemPath = value
				}
			})
			var systemPathSegments = [
				'site',
				'security',
				'contact',
				'blog',
				'about',
				'explore',
				'showcases',
				'trending',
				'settings',
				'new',
			]
			var matchedSystemPathSegment = (_.filter(systemPathSegments, function (key) {
				return key === pathSegments[0]
			}))[0]
			if (matchedSystemPath) {
				pathType = matchedSystemPath
			} else if (matchedSystemPathSegment) {
				// rename
				if (matchedSystemPathSegment === 'settings') {
					matchedSystemPathSegment = 'setting'
				}
				pathType = matchedSystemPathSegment
			} else {
				if (/^\/[\w\-]+\/?$/.test(path)) {
					pathType = 'user'
				} else if (/^\/[\w\-]+\/[\w\-]+\/?$/.test(path)) {
					pathType = 'user/repo'
				} else if (/^\/[\w\-]+\/[\w\-]+\/issues\/?(?:\?.+)?$/.test(path)) {
					pathType = 'repo/issue'
				} else if (/^\/[\w\-]+\/[\w\-]+\/issues\/\d+\/?$/.test(path)) {
					pathType = 'repo/issue/detail'
				} else if (/^\/[\w\-]+\/[\w\-]+\/issues\/new\/?$/.test(path)) {
					pathType = 'repo/issue/new'
				} else if (/^\/[\w\-]+\/[\w\-]+\/pull\/\d+\/files?$/.test(path)) {
					pathType = 'repo/pr/diff'
				}



			}

			// special page
			if (pathType === 'setting/app') {
				var key = app.util.url.getParam('x')
				if (key === 'oh-my-github') {
					pathType = 'setting/omg'
				}
			} else if (pathType === 'user') {
				var tab = app.util.url.getParam('tab')
				var map = {
					'repositories': 'repo',
					'activity': 'act',
				}
				tab = map[tab]
				if (tab) pathType = [pathType, tab].join('/')
			}

		}
	}




	// output
	app.site = site
	app.urlType = site + '/' + pathType

	// debug
	console.log('[OMG] url: ' + location.href)
	console.log('[OMG] url type: ' + app.urlType)

}

app.getUrlTypeMore = function () {
	//var type = app.urlType

	// TODO: 当 DOM ready 后获取详细信息

	//app.urlType = type
}

app.getEnvInfo = function () {
	var type = app.urlType
	if (type === 'github/user') {
		app.username = location.pathname.slice(1).toLowerCase()
	}

	// debug
	console.log('[OMG] username: ' + (app.username || '(unknown)'))
}
app.getEnvInfoMore = function () {
	// 'body.logged_in'
}


var allModules = []

app.defineModule = function (mod) {
	var modName = mod.name
	if (!modName) return
	console.log('[OMG] def mod: `' + modName + '`')

	// index
	allModules.push(mod)

	// language package
	//if ('i18n' in mod) {
	//	app.indexI18n(modName)
	//}

}

app.getModList = function () {
	app.modules = _.filter(allModules, function (mod) {
		return !mod.internal
	})
}

// shortcut for module dev
var defineModule = app.defineModule

// data
app.i18n = {
	en: {},
	zh: {},
}
app.lang = ''

// TODO 语言机制需要再想想，重点是如何提供 API 给模块
app.indexI18n = function (modName) {
	// TODO allModules 的结构有变化，以下代码需要改写
	var module = allModules[modName]
	var i18n = module.i18n
	var db = app.i18n
	var languages = Object.keys(i18n)
	languages.forEach(function (lang) {
		var pkg = i18n[lang]
		var labels = Object.keys(pkg)
		labels.forEach(function (label) {
			db[lang][modName + '/' + label] = pkg[label]
		})
	})

	// gc
	module.i18n = null
}

/**
 * Get display name of every label key
 * @param key {String} 'module_name/key_name'
 * @return {String}
 */
app.msg = function (key) {
	var lang = app.getLanguage()
	var db = app.i18n || {}
	return (db[lang] || db.en || {})[key] || ''
}

/**
 * Get language config
 * @return {String}
 */
app.getLanguage = function () {
	if (!app.lang) {
		var lang = 'en'
		// 先从本地存储中找语言设置
		// TODO

		// 如果没有，则从 UA 中自动解析
		var ua = navigator.userAgent
		if (/\bzh\-cn\b/i.test(ua)) {
			lang = 'zh'
		}
		app.lang = lang
	}
	return app.lang
}

// structure
var _config = {
	modules: {
		'(sample-module)': 1,
		'my-mod': 1,
	},
	modOptions: {
		'(sample-module)': {
			option1: ''
		},
		'my-mod': {
			option1: ''
		},
	}
}

//app.config = {}

//app.getConfig = function () {
//	// TODO 其实还没想好
//}
//app.setConfig = function () {
//	// TODO 其实还没想好
//}


app.readConfig = function () {
	var config
	if (app.LS_KEY in localStorage) {
		config = JSON.parse(localStorage.getItem(app.LS_KEY))
	} else {
		config = {}
	}
	return config
}
app.writeConfig = function (config) {
	if (!arguments.length) return
	localStorage.setItem(app.LS_KEY, JSON.stringify(config || {}))
}

// 把已经不存在的 module name 从 config 数据中删掉
app.cleanConfig = function (config) {
	var modNames = _.pluck(app.modules, 'name')
	var cfgModules = config.modules
	var cfgModOpts = config.modOptions
	_.each([cfgModules, cfgModOpts], function (cfg) {
		if (_.isObject(cfg)) {
			_.each(cfg, function (modName) {
				if (_.contains(modNames, modName)) {
					delete cfg[modName]
				}
			})
		}
	})
	return config
}

app.runTask = function (taskType) {
	var env = {
		urlType: app.urlType,
		site: app.site,
		username: app.username,
		repo: app.repo,
		repoOwner: app.repoOwner,
	}

	_.each(allModules, function (mod) {
		//console.log('[OMG] [' + taskType + '] `' + modName + '`')
		if (taskType in mod) {
			var modName = mod.name
			var isConfigOK = app.util.match.config(mod)
			var isDomOK = taskType === app.EVENT_START ? true : app.util.match.dom(mod.domMatches)
			var isUrlOK = app.util.match.url(mod.urlTypeMatches)
			console.log('[OMG] [' + taskType + '] `' + modName + '` matches DOM: ' + isDomOK)
			console.log('[OMG] [' + taskType + '] `' + modName + '` matches URL: ' + isUrlOK)
			if (isConfigOK && isUrlOK && isDomOK) {
				//try {
					console.log('[OMG] [' + taskType + '] `' + modName + '` is running...')
					mod[taskType](env)
					console.log('[OMG] [' + taskType + '] `' + modName + '` is done.')
				//} catch (e) {}
			}
			console.log('----------')
		}
	})

}


app.styleElem = null

app.insertCSS = function () {
	// prepare css container
	var elem = app.styleElem
	if (!elem) {
		elem = app.styleElem = document.createElement('style')
		elem.id = 'userscript-css'
		document.head.appendChild(elem)
	}

	var cssTextList = []
	_.each(allModules, function (mod) {
		if (!('css' in mod)) return
		var isConfigOK = app.util.match.config(mod)
		var isUrlOK = app.util.match.url(mod.urlTypeMatches)
		if (isConfigOK && isUrlOK) {
			cssTextList.push('/* ' + mod.name + ' */')
			cssTextList.push(mod.css)
		}
	})

	elem.innerHTML = cssTextList.join('\n')
	console.log('[OMG] css updated.')

}

void function () {
	'use strict'

	var selHeaderNav = 'ul.header-nav.user-nav'
	var clsNavItem = 'header-nav-item'
	var clsNavItemSeparator = clsNavItem + '-separator'
	var selHeaderNavItem = selHeaderNav + ' > .' + clsNavItem

	var css = `
		${selHeaderNavItem} span.octicon-gear {position: relative; top: 1px;}
	`
	var htmlOmgNavItem = `
		<li class="${clsNavItem} ${clsNavItemSeparator}">
			<a class="header-nav-link tooltipped tooltipped-s" href="${app.LINK_SETTING}" aria-label="Config ${app.NAME}…">
				<span class="octicon octicon-gear"></span>
			</a>
		</li>
	`

	var mod = {
		isReady: false,
		init: function () {
			if (this.isReady) return
			this._getElem()
			this.initItem()
			this.isReady = true
		},
		_getElem: function () {
			this.$wrapper = $(selHeaderNav)
			//this.$items = $(selHeaderNavItem)
		},
		initItem: function () {
			this.$itemOmg = $(htmlOmgNavItem)
			this.$itemOmg
				.prependTo(this.$wrapper)
				//.children('a').trigger('navigation:mouseover')
			//console.log(this.$itemOmg.children('a'))
		},
	}

	defineModule({
		name: 'ui-entrance',
		internal: true,
		//urlTypeMatches: [
		//	'github/*',
		//	'gist/*',
		//],
		domMatches: [
			selHeaderNavItem,
		],

		// style
		css: css,

		// init entrance
		documentEnd: function () {
			mod.init()
		},

		// msg
		i18n: {
			en: {
				module_name: 'Sample Module',
			},
			zh: {
				module_name: '示例模块',
			},
		}
	})

}()


void function () {
	'use strict'

	var selSettingMainCol = '.page-content div.columns div.column.three-fourths'
	var clsPaneInner = 'boxed-group-inner'
	var selSettingPaneInner = selSettingMainCol + ' > .boxed-group > .' + clsPaneInner
	var clsTabContent = 'tab-content'
	var clsSelected = 'selected'
	var clsTabContentSelected = clsTabContent + '-' + clsSelected
	//var selTabItem = selSettingMainCol + ' > div.tabnav > nav.tabnav-tabs > a'

	var css = `
		${selSettingMainCol} { visibility: hidden; }
		${selSettingPaneInner} {
			padding-top: 10px;
			min-height: 400px;
		}
		/* tab */
		.${clsTabContent} {
			display: none;
			margin: 30px 20px;
		}
		.${clsTabContent}.${clsTabContentSelected} { display: block; }

		/* form */
		.${clsTabContent} form {

		}
		.${clsTabContent} form div.act {
			margin-top: 30px;
		}
		.${clsTabContent} form div.act .btn:first-child {
			width: 80px;
			text-align: center;
		}

		/* mod list */
		ul#omg-mod-list {
			/*margin-left: 1em;*/
			list-style: none;
		}
		ul#omg-mod-list > li {
			margin-bottom: 20px;
		}
		ul#omg-mod-list > li label b {
			font-size: 14px;
			cursor: pointer;
			text-transform: capitalize;  /* temp */
		}
		ul#omg-mod-list > li div.descr {
			margin-top: 5px;
		}
	`
	var htmlPane = `
		<div class="boxed-group">
			<h3>${app.NAME}</h3>
			<div class="${clsPaneInner}"></div>
		</div>
	`
	var htmlTab = `
		<div class="tabnav">
			<nav class="tabnav-tabs">
				<a class="tabnav-tab ${clsSelected}" href="#tab=mod" data-action="switch-tab">Modules and options</a>
				<a class="tabnav-tab" href="#tab=about" data-action="switch-tab">About</a>
			</nav>
		</div>
	`
	var htmlTabContentMod = `
		<div class="${clsTabContent} ${clsTabContentSelected}" data-tab-name="mod">
			<!--<h4>Check to enable modules you want:</h4>-->
			<form class="form-checkbox">
				<div class="act">
					<a role="button" class="btn btn-primary disabled" href="#omg-config-save" data-action>Save</a>
					<!--<a role="button" class="btn" href="#omg-config-cancel" data-action>Cancel</a>-->
				</div>
			</form>
		</div>
	`
	var htmlTabContentAbout = `
		<div class="${clsTabContent}" data-tab-name="about">
			<h3 style="font-size: 14px; font-weight: 400;">
				<strong style="font-size: 16px;">${app.NAME}</strong>
				<span style="margin-left: 1em;">v0.1.0</span>
				<a class="right" href="https://github.com/UserScript/Oh-My-GitHub" target="_blank">
					<span class="octicon octicon-mark-github" style="margin-right: 3px;"></span>View on GitHub
				</a>
			</h3>
			<hr class="bleed-flush">
			<h4>Author</h4>
			<p class="form-checkbox"><a href="/cssmagic" target="_blank"><b>@cssmagic</b></a> - Designer and developer.</p>
			<h4>Credits</h4>
			<p class="form-checkbox">Open source projects:</p>
			<ul style="margin-left: 3em; margin-top: -10px;">
				<li><a href="https://github.com/jquery/jquery" target="_blank">jQuery</a></li>
				<li><a href="https://github.com/jashkenas/underscore" target="_blank">Underscore</a></li>
				<li><a href="https://github.com/cssmagic/action" target="_blank">Action</a></li>
				<li><a href="https://github.com/cssmagic/underscore-template" target="_blank">Underscore-template</a></li>
			</ul>
			<p class="form-checkbox">Icons and images:</p>
			<ul style="margin-left: 3em; margin-top: -10px;">
				<li><a href="https://octicons.github.com/" target="_blank">Octicons</a></li>
			</ul>
			<h4>License</h4>
			<p class="form-checkbox">MIT.</p>
			<hr class="bleed-flush">
			<h4>Donate</h4>
			<p class="form-checkbox">
				<a role="button" class="btn btn-sm btn-primary" href="http://www.cssmagic.net/blog/donate" target="_blank">Donate proudly!</a>
			</p>
		</div>
	`
	var tmplModList = `
		<ul id="omg-mod-list">
			<% _.each(data, function (mod) { %>
			<li>
				<label>
					<input name="<%= mod.name %>" type="checkbox" value="1" disabled>
					<b><%= mod.name %></b>
				</label>
				<div class="descr">
					<%= mod.description || '' %>
				</div>
			</li>
			<% }) %>
		</ul>
	`

	// ui
	var tab = {
		isReady: false,
		init: function () {
			if (this.isReady) return
			this.isReady = true
			action.add({
				'switch-tab': function () {
					// handle tab
					var $target = $(this)
					if ($target.hasClass(clsSelected)) return
					$target
						.addClass(clsSelected)
						.siblings('.' + clsSelected).removeClass(clsSelected)
					// handle tab content
					var tabName = $target.attr('href').split('#tab=')[1]
					if (!tabName) return
					var $content = $(`div[data-tab-name="${tabName}"]`)
					if ($content.hasClass(clsTabContentSelected)) return
					$content
						.addClass(clsTabContentSelected)
						.siblings('.' + clsTabContentSelected).removeClass(clsTabContentSelected)
				},
			})
		},
	}

	// fn
	var mod = {
		//isReady: false,
		init: function () {
			//if (this.isReady) return
			//this.isReady = true
			this._getElem()
			this._initPane()
			this._initModList()
			this._bind()
			this.applyConfig()
			this._showSettingCol()
		},
		_getElem: function () {
			this.$settingCol = $(selSettingMainCol)
			this.$settingPane = $(htmlPane)
			this.$settingPaneInner = this.$settingPane.children('.' + clsPaneInner)
			this.$tab = $(htmlTab)
			this.$tabContentMod = $(htmlTabContentMod)
			this.$formConfig = this.$tabContentMod.children('form')
			//this.$modList = this.$formConfig.children('ul')
		},
		_bind: function () {
			var _ns = this
			action.add({
				'omg-config-save': function () {
					_ns.configSave()
				},
				//'omg-config-cancel': function () {
				//	_ns.configCancel()
				//},
			})
			this.$formConfig.on('submit', function (ev) {
				ev.preventDefault()
				_ns.configSave()
			})
		},
		_initPane: function () {
			this.$settingCol.empty().append(this.$settingPane)
			this.$settingPaneInner.append(this.$tab)
			this.$settingPaneInner.append(htmlTabContentAbout).append(this.$tabContentMod)
		},
		_initModList: function () {
			if (app.util.env.isFirefox) return
			var extModules = app.modules
			template.add('mod-list', tmplModList)
			var html = template.render('mod-list', extModules)
			this.$formConfig.prepend(html)
		},
		_showSettingCol: function () {
			this.$settingCol.css('visibility', 'visible')
			this.$formConfig.find('a.btn').removeClass('disabled')
			this.$formConfig.find('input[type=checkbox]').prop('disabled', false)
		},
		applyConfig: function () {
			var config = app.readConfig()
			//console.log(config)
			var cfgModules = config.modules || {}
			//var cfgModOpts = config.modOptions || {}
			if (_.isObject(cfgModules)) {
				_.each(cfgModules, function (value, modName) {
					var $input = $(`input[name="${modName}"]`).prop('disabled', false)
					if (parseInt(value, 10)) $input.prop('checked', true)
				})
			}
		},

		configSave: function () {
			var data = this.$formConfig.serializeArray()
			// transform data
			// [{name: 'mod_name', value: 1}, {...}] ----> {'mod_name': 1, ...}
			var config = app.readConfig()
			var modules = {}
			_.each(data, function (item) {
				if (parseInt(item.value, 10) === 1 && item.name) {
					modules[item.name] = 1
				}
			})
			config.modules = modules
			//console.log(config)
			app.writeConfig(config)
			alert('\nConfig saved!\n\nRefreshing...')
			location.reload()
		},
		//configCancel: function () {
		//	location.reload()
		//},
	}

	defineModule({
		name: 'ui-setting-pane',
		internal: true,
		urlTypeMatches: [
			'github/setting/omg',
		],
		domMatches: [
			selSettingMainCol,
			//selTabItem,
		],

		// style
		css: css,

		// init entrance
		documentStart: function () {
			document.title = app.NAME + ' settings'
		},
		documentEnd: function () {
			tab.init()
			mod.init()
		},

		// msg
		i18n: {
			en: {
				module_name: 'Sample Module',
			},
			zh: {
				module_name: '示例模块',
			},
		}
	})
}()

void function () {
	'use strict'

	var selSettingSideCol = '.page-content div.columns div.column.one-fourth'
	var clsSelected = 'selected'
	var clsNav = 'menu-extensions'
	var clsNavItemOmg = 'menu-item-omg'

	var css = `
		nav.${clsNav} a.${clsNavItemOmg} span.org-avatar {
			line-height: 18px;
			width: 20px;
		}
	`

	var html = `
		<nav data-pjax="" class="menu ${clsNav}">
			<h3 class="menu-heading">Extensions</h3>
			<a href="${app.LINK_SETTING}" class="menu-item ${clsNavItemOmg}">
				<span class="octicon octicon-gear org-avatar"></span>
				<span class="org-settings-link">${app.NAME}</span>
			</a>
		</nav>
	`

	var mod = {
		init: function (env) {
			this._getElem()
			this._initMenu(env)
			this._updateSelectedItem(env)
		},
		_getElem: function () {
			this.$wrapper = $(selSettingSideCol)
			this.$nav = this.$wrapper.find('.' + clsNav)
		},
		_initMenu: function () {
			if (this.$nav.length) return
			this.$nav = $(html)
			this.$wrapper.append(this.$nav)
		},
		_updateSelectedItem: function (env) {
			if (env.urlType === 'github/setting/omg') {
				this.$wrapper.find('nav a' + '.' + clsSelected).removeClass(clsSelected)
				this.$nav.find('.' + clsNavItemOmg).addClass(clsSelected)
			}
		}
	}

	defineModule({
		name: 'ui-setting-side-menu',
		internal: true,
		urlTypeMatches: [
			'github/setting/*',
		],
		domMatches: [
			selSettingSideCol
		],

		// style
		css: css,

		// init entrance
		documentEnd: function (env) {
			mod.init(env)
		},

		// msg
		i18n: {
			en: {
				module_name: 'Sample Module',
			},
			zh: {
				module_name: '示例模块',
			},
		}
	})
}()


void function () {
	'use strict'

	defineModule({
		name: '(sample-module)',
		description: 'Sample module which can be used as a template.',
		homepage: 'http://www.cssmagic.net/',
		category: 'issue',
		urlTypeMatches: [
			//'github/*',
			//'gist/*',
		],
		domMatches: [
			//'.header.gist-header a',
			//'#sample > ul',
			//'header .new .alert-box',
		],

		// style
		//css: css,

		// init entrance
		/* var env = {
			urlType: app.urlType,
			username: app.username,
			repo: app.repo,
			repoOwner: app.repoOwner,
		} */
		documentEnd: function (env) {
			console.log('end')
		},
		documentIdle: function (env) {
			console.log('idle')
		},
	})

}()


void function () {
	'use strict'

	var selToc = '#toc'
	var selBtnGroupView = selToc + ' > div.btn-group '
	var idLabel = 'omg-label-diff-view-ignore-ws'

	var css = `
		#${idLabel} {
			margin-right: 15px;
			margin-top: 4px;
			white-space: nowrap;
			cursor: pointer;
		}
	`
	var htmlSwticher = `
		<label class="right" id="${idLabel}"><input type="checkbox" autocomplete="off"> Ignore whitespace</label>
	`

	var mod = {
		init: function () {
			this._getElem()
			this._initUI()
			this._bind()
		},
		_getElem: function () {
			//this.$wrapper = $(selToc)
			this.$btnGroupView = $(selBtnGroupView)
			this.$switcherWrapper = $(htmlSwticher)
			this.$switcher = this.$switcherWrapper.children('input[type=checkbox]')
			//this.$btn = this.$wrapper.find('')
		},
		_initUI: function () {
			this.$btnGroupView.after(this.$switcherWrapper)
			var status = app.util.url.getParam('w') === '1'

			this.$switcher.prop('checked', status)
		},
		_bind: function () {
			var _ns = this
			var orgUrl = $('[data-container-id="files_bucket"]').attr('href')
			var newUrl = app.util.url.appendParam(orgUrl, {w: 1})
			this.$switcher.on('change', function () {
				//var hash = location.hash
				var status = _ns.$switcher.prop('checked')
				var url = status ? newUrl : orgUrl
				//url += hash
				//alert(url)
				location.href = url
			})
		}
	}
	defineModule({
		name: 'ignore-whitespace-in-diff-view',
		description: 'It adds an option to ignore whitespace changes in diff view.',
		homepage: 'http://www.cssmagic.net/',
		category: 'ui',
		urlTypeMatches: [
			'github/repo/pr/diff',
		],
		domMatches: [
			selBtnGroupView,
		],

		// style
		css: css,

		// init entrance
		documentEnd: function () {
			mod.init()
			//alert('ignore')
		},
	})

}()


void function () {
	'use strict'

	var selHeaderNav = 'ul.header-nav.user-nav'
	var clsNavItem = 'header-nav-item'
	var clsNavItemSeparator = clsNavItem + '-separator'
	var selHeaderNavItem = selHeaderNav + ' > .' + clsNavItem
	var clsNavLink = 'header-nav-link'
	var selHeaderNavLink = selHeaderNavItem + ':last-child > a.' + clsNavLink
	var selAvatar = 'img.avatar'
	var selHeaderNavAvatar = selHeaderNavLink + ' > ' + selAvatar

	var css = `
		${selHeaderNav} { visibility: hidden }
		${selHeaderNav} .${clsNavItemSeparator} {
			margin-right: 5px;
			padding-right: 6px;
		}
		${selHeaderNav} .${clsNavItemSeparator}::before {
			content: '';
			margin-right: -5px;
			margin-top: 4px;
			float: right;
			width: 0;
			height: 21px;
			border-right: 1px dotted #ccc;
		}
	`
	var htmlItemAvatar = `
		<li class="${clsNavItem} ${clsNavItemSeparator}">
			<a class="${clsNavLink}" href="/"></a>
		</li>
	`
	var htmlMenuIcon = `
		<span class="octicon octicon-three-bars"></span>
	`

	var mod = {
		isReady: false,
		init: function () {
			if (this.isReady) return
			this._getElem()
			this.initItem()
			this.isReady = true
		},
		_getElem: function () {
			this.$wrapper = $(selHeaderNav)
			this.$itemLast = $(selHeaderNavItem).last()
		},
		initItem: function () {
			this.$avatar = this.$itemLast.find(selAvatar)
			if (!this.$avatar.length) return
			// move avatar to a new nav item
			this.$itemAvatar = $(htmlItemAvatar)
			var $linkAvatar = this.$itemAvatar.children('a')
			$linkAvatar.append(this.$avatar)
			// use a new menu icon
			var $linkLast = this.$itemLast.children('a.' + clsNavLink)
			$linkLast.html(htmlMenuIcon)
			// use profile link
			var url = $linkLast.attr('href')
			$linkAvatar.attr('href', url)
			// insert avatar back
			this.$itemAvatar.insertBefore(this.$itemLast)
			// show nav
			this.$wrapper.css('visibility', 'visible')
		},
	}

	defineModule({
		name: 'free-header-nav-avatar',
		description: 'It reorganizes avatar in header nav.',
		homepage: 'http://www.cssmagic.net/',
		category: 'ui',
		domMatches: [
			selHeaderNavAvatar,
		],

		// style
		css: css,

		// init entrance
		documentEnd: function () {
			mod.init()
		},
	})

}()


void function () {
	'use strict'

	var selInputIssueTitle = 'input[name="issue[title]"]'
	var selInputIssueBody = 'textarea[name="issue[body]"]'
	var selIssueTitle = '.js-issue-title'
	var selBtnEditTitle = '.gh-header-show button.js-details-target'

	//var css = ` `

	var mod = {
		init: function (urlType) {
			this._getActionType(urlType)
			this._getElem()
			this._bind()
		},
		_getActionType: function (urlType) {
			this.actionType = ''
			if (urlType.contains('issue/new')) {
				this.actionType = 'new'
			} else if (urlType.contains('issue/detail')) {
				this.actionType = 'edit'
			}
		},
		_getElem: function () {
			this.$inputIssueTitle = $(selInputIssueTitle)
			this.$inputIssueBody = $(selInputIssueBody)
			if (this.actionType === 'edit') {
				this.$issueTitle = $(selIssueTitle)
				this.$btnEditTitle = $(selBtnEditTitle)
			}
		},
		_refreshElem: function () {
			// because structure might be re-generated.
			if (this.actionType === 'edit') {
				this.$issueTitle = $(selIssueTitle)
				//this.$btnEditTitle = $(selBtnEditTitle)
			}
		},
		_bind: function () {
			var _ns = this
			this.$inputIssueBody.on('paste', function (ev) {
				setTimeout(function () {
					_ns.onPaste()
				}, 0)
			})
		},
		_parse: function (str) {
			var lines = (str || '').split('\n')

			// trim empty lines
			while (lines.length && lines[0].trim() === '') {
				lines.shift()
			}
			while (lines.length && lines[lines.length - 1].trim() === '') {
				lines.pop()
			}

			// get title
			var title = this._getTitle(lines)
			// get Jekyll section
			var jkLineAmount = 0
			var firstLine = lines[0]
			if (firstLine.trim() === '---') {
				for (var i = 0 + 1, len = lines.length; i < len; i++) {
					var line = lines[i].trim()
					if (line === '---') {
						jkLineAmount = i
						break
					} else if (line.indexOf(':') < 1) {  // invalid Jekyll line
						jkLineAmount = 0
						break
					}
				}
				// convert line index to line amount
				jkLineAmount++
				// include empty lines
				while ((lines[jkLineAmount] || '').trim() === '') {
					jkLineAmount++
				}
			}

			return {
				title: title,
				lines: lines,
				jkLineAmount: jkLineAmount,
			}
		},
		_getTitle: function (lines) {
			var firstLine = lines[0]
			if (!firstLine) return ''
			var title = ''

			// normal headline in markdown
			var reHeadline = /^#{1,6}\s*(.+)$/
			var guessMarkdownTitle = reHeadline.exec(firstLine)
			if (guessMarkdownTitle) {
				title = guessMarkdownTitle[1]
			}

			// Jekyll meta
			else if (firstLine.trim() === '---') {
				var jkTitle = ''
				for (var i = 0 + 1, len = lines.length; i < len; i++) {
					var line = lines[i].trim()
					if (line === '---') break
					if (line.startsWith('title:')) {
						jkTitle = (line.split('title:')[1] || '').trim()
						break
					}
				}
				// strip quotes
				var guessJkTitle = /^'(.*)'$|^"(.*)"$/.exec(jkTitle)
				if (guessJkTitle) {
					title = guessJkTitle[1] || guessJkTitle[2] || ''
				} else {
					title = jkTitle
				}
			}

			// TODO: if Jekyll meta has no title info, need to failover to markdown headline

			return title
		},
		onPaste: function () {
			var value = this.$inputIssueBody.val()
			var content = this._parse(value)
			console.log(content)
			var lines = content.lines
			// handle title
			var title = content.title
			if (title) {
				// auto fill title
				if (this.actionType === 'new') {
					this.$inputIssueTitle.val(title)
				}
				// check title update
				else if (this.actionType === 'edit') {
					var originalTitle = this.$issueTitle.html().trim()
					if (originalTitle !== title) {
						var needToUpdateTitle = confirm('贴入内容的标题与现有标题不同，是否更新？')
						if (needToUpdateTitle) {
							this._refreshElem()
							this.$btnEditTitle.click()
							this.$inputIssueTitle.val(title)
						}
					}
				}
			}

			// strip Jekyll meta
			var jkLineAmount = content.jkLineAmount
			if (jkLineAmount) {
				lines = lines.slice(content.jkLineAmount)
			}

			// output
			//console.log(lines)
			this.$inputIssueBody.val(lines.join('\n'))

			// patch: active submit btn - it is disabled on default
			if (this.actionType == 'new') {
				this.$inputIssueTitle.focus()
				this.$inputIssueBody.focus()
			}
		},
	}

	defineModule({
		name: 'issue-writer-helper',
		description: 'It helps when posting or editing issues.',
		homepage: 'http://www.cssmagic.net/',
		category: 'issue',
		urlTypeMatches: [
			'github/repo/issue/detail',
			'github/repo/issue/new',
		],
		domMatches: [],

		// style
		//css: css,

		// init entrance
		/* var env = {
			urlType: app.urlType,
			username: app.username,
			repo: app.repo,
			repoOwner: app.repoOwner,
		} */
		documentEnd: function (env) {
			mod.init(env.urlType)
		},
	})

}()



app.init = function () {
	app.getUrlType()
	app.getEnvInfo()
	app.getModList()
	app.insertCSS()
	app.runTask(app.EVENT_START)
}

app.refresh = function () {
	app.getUrlType()
	app.getEnvInfo()
	app.getUrlTypeMore()
	app.getEnvInfoMore()
	app.insertCSS()
	app.runTask(app.EVENT_START)
	app.runTask(app.EVENT_END)
	app.runTask(app.EVENT_IDLE)
}


// exports for debug
app.allModules = allModules
unsafeWindow.OMG = app

// debug

// init
app.init()
