(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * Knockout JavaScript library v3.4.2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var x=this||(0,eval)("this"),t=x.document,M=x.navigator,u=x.jQuery,H=x.JSON;(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(x.ko={})})(function(N,O){function J(a,c){return null===a||typeof a in R?a===c:!1}function S(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function T(b,c){var d;return function(){clearTimeout(d);d=a.a.setTimeout(b,c)}}function U(a,
c){c&&c!==E?"beforeChange"===c?this.Ob(a):this.Ja(a,c):this.Pb(a)}function V(a,c){null!==c&&c.k&&c.k()}function W(a,c){var d=this.Mc,e=d[s];e.T||(this.ob&&this.Oa[c]?(d.Sb(c,a,this.Oa[c]),this.Oa[c]=null,--this.ob):e.s[c]||d.Sb(c,a,e.t?{$:a}:d.yc(a)),a.Ha&&a.Hc())}function K(b,c,d,e){a.d[b]={init:function(b,g,h,l,m){var k,r;a.m(function(){var q=g(),p=a.a.c(q),p=!d!==!p,A=!r;if(A||c||p!==k)A&&a.xa.Ca()&&(r=a.a.wa(a.f.childNodes(b),!0)),p?(A||a.f.fa(b,a.a.wa(r)),a.hb(e?e(m,q):m,b)):a.f.za(b),k=p},null,
{i:b});return{controlsDescendantBindings:!0}}};a.h.va[b]=!1;a.f.aa[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.H=function(a,c,d){a[c]=d};a.version="3.4.2";a.b("version",a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1};a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=
b;return a}function e(b,c,d,e){var m=b[c].match(r)||[];a.a.r(d.match(r),function(b){a.a.ra(m,b,e)});b[c]=m.join(" ")}var f={__proto__:[]}instanceof Array,g="function"===typeof Symbol,h={},l={};h[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];h.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(h,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)l[b[c]]=a});var m={propertychange:!0},k=
t&&function(){for(var a=3,b=t.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),r=/\S+/g;return{gc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],r:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},o:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Vb:function(a,b,c){for(var d=
0,e=a.length;d<e;d++)if(b.call(c,a[d],d))return a[d];return null},Na:function(b,c){var d=a.a.o(b,c);0<d?b.splice(d,1):0===d&&b.shift()},Wb:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<e;d++)0>a.a.o(c,b[d])&&c.push(b[d]);return c},ib:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)c.push(b(a[d],d));return c},Ma:function(a,b){a=a||[];for(var c=[],d=0,e=a.length;d<e;d++)b(a[d],d)&&c.push(a[d]);return c},ta:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<
d;c++)a.push(b[c]);return a},ra:function(b,c,d){var e=a.a.o(a.a.Bb(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},la:f,extend:c,$a:d,ab:f?d:c,D:b,Ea:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},rb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},nc:function(b){b=a.a.W(b);for(var c=(b[0]&&b[0].ownerDocument||t).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.ba(b[d]));return c},wa:function(b,c){for(var d=0,e=b.length,m=[];d<e;d++){var k=
b[d].cloneNode(!0);m.push(c?a.ba(k):k)}return m},fa:function(b,c){a.a.rb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},uc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],m=e.parentNode,k=0,f=c.length;k<f;k++)m.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ba:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=
a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},wc:function(a,b){7>k?a.setAttribute("selected",b):a.selected=b},cb:function(a){return null===a||a===n?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sd:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Rc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==
(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},qb:function(b){return a.a.Rc(b,b.ownerDocument.documentElement)},Tb:function(b){return!!a.a.Vb(b,a.a.qb)},A:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},Zb:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Zb(b),c)},dc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},q:function(b,
c,d){var e=a.a.Zb(d);d=k&&m[c];if(a.options.useOnlyNativeEvents||d||!u)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var f=function(a){e.call(b,a)},l="on"+c;b.attachEvent(l,f);a.a.G.qa(b,function(){b.detachEvent(l,f)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else u(b).bind(c,e)},Fa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===
a.a.A(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!u||d)if("function"==typeof t.createEvent)if("function"==typeof b.dispatchEvent)d=t.createEvent(l[c]||"HTMLEvents"),d.initEvent(c,!0,!0,x,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");
else u(b).trigger(c)},c:function(b){return a.I(b)?b():b},Bb:function(b){return a.I(b)?b.p():b},fb:function(b,c,d){var k;c&&("object"===typeof b.classList?(k=b.classList[d?"add":"remove"],a.a.r(c.match(r),function(a){k.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},bb:function(b,c){var d=a.a.c(c);if(null===d||d===n)d="";var e=a.f.firstChild(b);!e||3!=e.nodeType||a.f.nextSibling(e)?a.f.fa(b,[b.ownerDocument.createTextNode(d)]):e.data=
d;a.a.Wc(b)},vc:function(a,b){a.name=b;if(7>=k)try{a.mergeAttributes(t.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},Wc:function(a){9<=k&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Sc:function(a){if(k){var b=a.style.width;a.style.width=0;a.style.width=b}},nd:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},W:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},bc:function(a){return g?Symbol(a):a},xd:6===k,
yd:7===k,C:k,ic:function(b,c){for(var d=a.a.W(b.getElementsByTagName("input")).concat(a.a.W(b.getElementsByTagName("textarea"))),e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},k=[],m=d.length-1;0<=m;m--)e(d[m])&&k.push(d[m]);return k},kd:function(b){return"string"==typeof b&&(b=a.a.cb(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},Gb:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.c(b),c,d)},ld:function(c,d,e){e=e||{};var k=e.params||{},m=e.includeFields||this.gc,f=c;if("object"==typeof c&&"form"===a.a.A(c))for(var f=c.action,l=m.length-1;0<=l;l--)for(var g=a.a.ic(c,m[l]),h=g.length-1;0<=h;h--)k[g[h].name]=g[h].value;d=a.a.c(d);var r=t.createElement("form");r.style.display="none";r.action=f;r.method="post";for(var n in d)c=t.createElement("input"),c.type="hidden",c.name=n,c.value=a.a.Gb(a.a.c(d[n])),r.appendChild(c);b(k,function(a,b){var c=t.createElement("input");
c.type="hidden";c.name=a;c.value=b;r.appendChild(c)});t.body.appendChild(r);e.submitter?e.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(r)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.r);a.b("utils.arrayFirst",a.a.Vb);a.b("utils.arrayFilter",a.a.Ma);a.b("utils.arrayGetDistinctValues",a.a.Wb);a.b("utils.arrayIndexOf",a.a.o);a.b("utils.arrayMap",a.a.ib);a.b("utils.arrayPushAll",a.a.ta);a.b("utils.arrayRemoveItem",a.a.Na);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.gc);a.b("utils.getFormFields",a.a.ic);a.b("utils.peekObservable",a.a.Bb);a.b("utils.postJson",a.a.ld);a.b("utils.parseJson",a.a.kd);a.b("utils.registerEventHandler",a.a.q);a.b("utils.stringifyJson",a.a.Gb);a.b("utils.range",a.a.nd);a.b("utils.toggleDomNodeCssClass",a.a.fb);a.b("utils.triggerEvent",a.a.Fa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.D);a.b("utils.addOrRemoveItem",a.a.ra);a.b("utils.setTextContent",a.a.bb);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=
function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.e=new function(){function a(b,g){var h=b[d];if(!h||"null"===h||!e[h]){if(!g)return n;h=b[d]="ko"+c++;e[h]={}}return e[h]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===n?n:e[d]},set:function(c,d,e){if(e!==n||a(c,!1)!==n)a(c,!0)[d]=
e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},J:function(){return c++ +d}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.G=new function(){function b(b,c){var e=a.a.e.get(b,d);e===n&&c&&(e=[],a.a.e.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](d);a.a.e.clear(d);a.a.G.cleanExternalData(d);if(f[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.e.J(),e={1:!0,8:!0,9:!0},
f={1:!0,9:!0};return{qa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},tc:function(c,e){var f=b(c,!1);f&&(a.a.Na(f,e),0==f.length&&a.a.e.set(c,d,n))},ba:function(b){if(e[b.nodeType]&&(c(b),f[b.nodeType])){var d=[];a.a.ta(d,b.getElementsByTagName("*"));for(var l=0,m=d.length;l<m;l++)c(d[l])}return b},removeNode:function(b){a.ba(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){u&&"function"==typeof u.cleanData&&u.cleanData([a])}}};
a.ba=a.a.G.ba;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.ba);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.qa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.tc);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},
g=8>=a.a.C;a.a.na=function(c,d){var e;if(u)if(u.parseHTML)e=u.parseHTML(c,d)||[];else{if((e=u.clean([c],d))&&e[0]){for(var k=e[0];k.parentNode&&11!==k.parentNode.nodeType;)k=k.parentNode;k.parentNode&&k.parentNode.removeChild(k)}}else{(e=d)||(e=t);var k=e.parentWindow||e.defaultView||x,r=a.a.cb(c).toLowerCase(),q=e.createElement("div"),p;p=(r=r.match(/^<([a-z]+)[ >]/))&&f[r[1]]||b;r=p[0];p="ignored<div>"+p[1]+c+p[2]+"</div>";"function"==typeof k.innerShiv?q.appendChild(k.innerShiv(p)):(g&&e.appendChild(q),
q.innerHTML=p,g&&q.parentNode.removeChild(q));for(;r--;)q=q.lastChild;e=a.a.W(q.lastChild.childNodes)}return e};a.a.Eb=function(b,c){a.a.rb(b);c=a.a.c(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),u)u(b).html(c);else for(var d=a.a.na(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.na);a.b("utils.setHtml",a.a.Eb);a.N=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.N.pc(c.nodeValue);null!=f&&e.push({Qc:c,hd:f})}else if(1==c.nodeType)for(var f=
0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],e)}var c={};return{yb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Bc:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),
!0}finally{delete c[a]}},Cc:function(c,e){var f=[];b(c,f);for(var g=0,h=f.length;g<h;g++){var l=f[g].Qc,m=[l];e&&a.a.ta(m,e);a.N.Bc(f[g].hd,m);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},pc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.N);a.b("memoization.memoize",a.N.yb);a.b("memoization.unmemoize",a.N.Bc);a.b("memoization.parseMemoText",a.N.pc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.N.Cc);a.Z=function(){function b(){if(e)for(var b=
e,c=0,m;g<e;)if(m=d[g++]){if(g>b){if(5E3<=++c){g=e;a.a.dc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=e}try{m()}catch(k){a.a.dc(k)}}}function c(){b();g=e=d.length=0}var d=[],e=0,f=1,g=0;return{scheduler:x.MutationObserver?function(a){var b=t.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):t&&"onreadystatechange"in t.createElement("script")?function(a){var b=t.createElement("script");b.onreadystatechange=
function(){b.onreadystatechange=null;t.documentElement.removeChild(b);b=null;a()};t.documentElement.appendChild(b)}:function(a){setTimeout(a,0)},Za:function(b){e||a.Z.scheduler(c);d[e++]=b;return f++},cancel:function(a){a-=f-e;a>=g&&a<e&&(d[a]=null)},resetForTesting:function(){var a=e-g;g=e=d.length=0;return a},rd:b}}();a.b("tasks",a.Z);a.b("tasks.schedule",a.Z.Za);a.b("tasks.runEarly",a.Z.rd);a.Aa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.B({read:b,write:function(e){clearTimeout(d);
d=a.a.setTimeout(function(){b(e)},c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.gb=!1;f="notifyWhenChangesStop"==e?T:S;a.Wa(function(a){return f(a,d)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.gb||(b.gb=!0,b.Wa(function(c){var e,f=!1;return function(){if(!f){a.Z.cancel(e);e=a.Z.Za(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:J}};var R={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Aa);a.zc=function(b,c,d){this.$=b;this.jb=c;this.Pc=d;this.T=!1;a.H(this,"dispose",this.k)};a.zc.prototype.k=function(){this.T=!0;this.Pc()};a.K=function(){a.a.ab(this,D);D.ub(this)};var E="change",D={ub:function(a){a.F={change:[]};a.Qb=1},Y:function(b,c,d){var e=this;d=d||E;var f=new a.zc(e,c?b.bind(c):b,function(){a.a.Na(e.F[d],f);e.Ka&&e.Ka(d)});e.ua&&e.ua(d);
e.F[d]||(e.F[d]=[]);e.F[d].push(f);return f},notifySubscribers:function(b,c){c=c||E;c===E&&this.Kb();if(this.Ra(c)){var d=c===E&&this.Fc||this.F[c].slice(0);try{a.l.Xb();for(var e=0,f;f=d[e];++e)f.T||f.jb(b)}finally{a.l.end()}}},Pa:function(){return this.Qb},Zc:function(a){return this.Pa()!==a},Kb:function(){++this.Qb},Wa:function(b){var c=this,d=a.I(c),e,f,g,h;c.Ja||(c.Ja=c.notifySubscribers,c.notifySubscribers=U);var l=b(function(){c.Ha=!1;d&&h===c&&(h=c.Mb?c.Mb():c());var a=f||c.Ua(g,h);f=e=!1;
a&&c.Ja(g=h)});c.Pb=function(a){c.Fc=c.F[E].slice(0);c.Ha=e=!0;h=a;l()};c.Ob=function(a){e||(g=a,c.Ja(a,"beforeChange"))};c.Hc=function(){c.Ua(g,c.p(!0))&&(f=!0)}},Ra:function(a){return this.F[a]&&this.F[a].length},Xc:function(b){if(b)return this.F[b]&&this.F[b].length||0;var c=0;a.a.D(this.F,function(a,b){"dirty"!==a&&(c+=b.length)});return c},Ua:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},extend:function(b){var c=this;b&&a.a.D(b,function(b,e){var f=a.Aa[b];"function"==
typeof f&&(c=f(c,e)||c)});return c}};a.H(D,"subscribe",D.Y);a.H(D,"extend",D.extend);a.H(D,"getSubscriptionsCount",D.Xc);a.a.la&&a.a.$a(D,Function.prototype);a.K.fn=D;a.lc=function(a){return null!=a&&"function"==typeof a.Y&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.K);a.b("isSubscribable",a.lc);a.xa=a.l=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{Xb:b,end:c,sc:function(b){if(e){if(!a.lc(b))throw Error("Only subscribable things can act as dependencies");
e.jb.call(e.Lc,b,b.Gc||(b.Gc=++f))}},w:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},Ca:function(){if(e)return e.m.Ca()},Va:function(){if(e)return e.Va}}}();a.b("computedContext",a.xa);a.b("computedContext.getDependenciesCount",a.xa.Ca);a.b("computedContext.isInitial",a.xa.Va);a.b("ignoreDependencies",a.wd=a.l.w);var F=a.a.bc("_latestValue");a.O=function(b){function c(){if(0<arguments.length)return c.Ua(c[F],arguments[0])&&(c.ia(),c[F]=arguments[0],c.ha()),this;a.l.sc(c);return c[F]}
c[F]=b;a.a.la||a.a.extend(c,a.K.fn);a.K.fn.ub(c);a.a.ab(c,B);a.options.deferUpdates&&a.Aa.deferred(c,!0);return c};var B={equalityComparer:J,p:function(){return this[F]},ha:function(){this.notifySubscribers(this[F])},ia:function(){this.notifySubscribers(this[F],"beforeChange")}};a.a.la&&a.a.$a(B,a.K.fn);var I=a.O.md="__ko_proto__";B[I]=a.O;a.Qa=function(b,c){return null===b||b===n||b[I]===n?!1:b[I]===c?!0:a.Qa(b[I],c)};a.I=function(b){return a.Qa(b,a.O)};a.Da=function(b){return"function"==typeof b&&
b[I]===a.O||"function"==typeof b&&b[I]===a.B&&b.$c?!0:!1};a.b("observable",a.O);a.b("isObservable",a.I);a.b("isWriteableObservable",a.Da);a.b("isWritableObservable",a.Da);a.b("observable.fn",B);a.H(B,"peek",B.p);a.H(B,"valueHasMutated",B.ha);a.H(B,"valueWillMutate",B.ia);a.ma=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.O(b);a.a.ab(b,a.ma.fn);return b.extend({trackArrayChanges:!0})};
a.ma.fn={remove:function(b){for(var c=this.p(),d=[],e="function"!=typeof b||a.I(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];e(g)&&(0===d.length&&this.ia(),d.push(g),c.splice(f,1),f--)}d.length&&this.ha();return d},removeAll:function(b){if(b===n){var c=this.p(),d=c.slice(0);this.ia();c.splice(0,c.length);this.ha();return d}return b?this.remove(function(c){return 0<=a.a.o(b,c)}):[]},destroy:function(b){var c=this.p(),d="function"!=typeof b||a.I(b)?function(a){return a===b}:b;this.ia();
for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.ha()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.o(b,c)}):[]},indexOf:function(b){var c=this();return a.a.o(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ia(),this.p()[d]=c,this.ha())}};a.a.la&&a.a.$a(a.ma.fn,a.O.fn);a.a.r("pop push reverse shift sort splice unshift".split(" "),function(b){a.ma.fn[b]=function(){var a=this.p();this.ia();this.Yb(a,b,arguments);
var d=a[b].apply(a,arguments);this.ha();return d===a?this:d}});a.a.r(["slice"],function(b){a.ma.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.ma);a.Aa.trackArrayChanges=function(b,c){function d(){if(!e){e=!0;l=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==E||++h;return l.apply(this,arguments)};var c=[].concat(b.p()||[]);f=null;g=b.Y(function(d){d=[].concat(d||[]);if(b.Ra("arrayChange")){var e;if(!f||1<h)f=a.a.lb(c,d,b.kb);e=f}c=d;f=null;h=0;
e&&e.length&&b.notifySubscribers(e,"arrayChange")})}}b.kb={};c&&"object"==typeof c&&a.a.extend(b.kb,c);b.kb.sparse=!0;if(!b.Yb){var e=!1,f=null,g,h=0,l,m=b.ua,k=b.Ka;b.ua=function(a){m&&m.call(b,a);"arrayChange"===a&&d()};b.Ka=function(a){k&&k.call(b,a);"arrayChange"!==a||b.Ra("arrayChange")||(l&&(b.notifySubscribers=l,l=n),g.k(),e=!1)};b.Yb=function(b,c,d){function k(a,b,c){return m[m.length]={status:a,value:b,index:c}}if(e&&!h){var m=[],l=b.length,g=d.length,G=0;switch(c){case "push":G=l;case "unshift":for(c=
0;c<g;c++)k("added",d[c],G+c);break;case "pop":G=l-1;case "shift":l&&k("deleted",b[G],G);break;case "splice":c=Math.min(Math.max(0,0>d[0]?l+d[0]:d[0]),l);for(var l=1===g?l:Math.min(c+(d[1]||0),l),g=c+g-2,G=Math.max(l,g),n=[],s=[],w=2;c<G;++c,++w)c<l&&s.push(k("deleted",b[c],c)),c<g&&n.push(k("added",d[w],c));a.a.hc(s,n);break;default:return}f=m}}}};var s=a.a.bc("_state");a.m=a.B=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.sb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}a.l.sc(e);(g.V||g.t&&e.Sa())&&e.U();return g.M}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={M:n,da:!0,V:!0,Ta:!1,Hb:!1,T:!1,Ya:!1,t:!1,od:d.read,sb:c||d.owner,i:d.disposeWhenNodeIsRemoved||d.i||null,ya:d.disposeWhen||d.ya,pb:null,s:{},L:0,fc:null};e[s]=g;e.$c="function"===typeof f;a.a.la||a.a.extend(e,a.K.fn);a.K.fn.ub(e);a.a.ab(e,z);d.pure?(g.Ya=!0,g.t=!0,a.a.extend(e,
Y)):d.deferEvaluation&&a.a.extend(e,Z);a.options.deferUpdates&&a.Aa.deferred(e,!0);g.i&&(g.Hb=!0,g.i.nodeType||(g.i=null));g.t||d.deferEvaluation||e.U();g.i&&e.ca()&&a.a.G.qa(g.i,g.pb=function(){e.k()});return e};var z={equalityComparer:J,Ca:function(){return this[s].L},Sb:function(a,c,d){if(this[s].Ya&&c===this)throw Error("A 'pure' computed must not be called recursively");this[s].s[a]=d;d.Ia=this[s].L++;d.pa=c.Pa()},Sa:function(){var a,c,d=this[s].s;for(a in d)if(d.hasOwnProperty(a)&&(c=d[a],this.oa&&
c.$.Ha||c.$.Zc(c.pa)))return!0},gd:function(){this.oa&&!this[s].Ta&&this.oa(!1)},ca:function(){var a=this[s];return a.V||0<a.L},qd:function(){this.Ha?this[s].V&&(this[s].da=!0):this.ec()},yc:function(a){if(a.gb&&!this[s].i){var c=a.Y(this.gd,this,"dirty"),d=a.Y(this.qd,this);return{$:a,k:function(){c.k();d.k()}}}return a.Y(this.ec,this)},ec:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[s].fc),this[s].fc=a.a.setTimeout(function(){b.U(!0)},c)):b.oa?b.oa(!0):b.U(!0)},U:function(b){var c=
this[s],d=c.ya,e=!1;if(!c.Ta&&!c.T){if(c.i&&!a.a.qb(c.i)||d&&d()){if(!c.Hb){this.k();return}}else c.Hb=!1;c.Ta=!0;try{e=this.Vc(b)}finally{c.Ta=!1}c.L||this.k();return e}},Vc:function(b){var c=this[s],d=!1,e=c.Ya?n:!c.L,f={Mc:this,Oa:c.s,ob:c.L};a.l.Xb({Lc:f,jb:W,m:this,Va:e});c.s={};c.L=0;f=this.Uc(c,f);this.Ua(c.M,f)&&(c.t||this.notifySubscribers(c.M,"beforeChange"),c.M=f,c.t?this.Kb():b&&this.notifySubscribers(c.M),d=!0);e&&this.notifySubscribers(c.M,"awake");return d},Uc:function(b,c){try{var d=
b.od;return b.sb?d.call(b.sb):d()}finally{a.l.end(),c.ob&&!b.t&&a.a.D(c.Oa,V),b.da=b.V=!1}},p:function(a){var c=this[s];(c.V&&(a||!c.L)||c.t&&this.Sa())&&this.U();return c.M},Wa:function(b){a.K.fn.Wa.call(this,b);this.Mb=function(){this[s].da?this.U():this[s].V=!1;return this[s].M};this.oa=function(a){this.Ob(this[s].M);this[s].V=!0;a&&(this[s].da=!0);this.Pb(this)}},k:function(){var b=this[s];!b.t&&b.s&&a.a.D(b.s,function(a,b){b.k&&b.k()});b.i&&b.pb&&a.a.G.tc(b.i,b.pb);b.s=null;b.L=0;b.T=!0;b.da=
!1;b.V=!1;b.t=!1;b.i=null}},Y={ua:function(b){var c=this,d=c[s];if(!d.T&&d.t&&"change"==b){d.t=!1;if(d.da||c.Sa())d.s=null,d.L=0,c.U()&&c.Kb();else{var e=[];a.a.D(d.s,function(a,b){e[b.Ia]=a});a.a.r(e,function(a,b){var e=d.s[a],l=c.yc(e.$);l.Ia=b;l.pa=e.pa;d.s[a]=l})}d.T||c.notifySubscribers(d.M,"awake")}},Ka:function(b){var c=this[s];c.T||"change"!=b||this.Ra("change")||(a.a.D(c.s,function(a,b){b.k&&(c.s[a]={$:b.$,Ia:b.Ia,pa:b.pa},b.k())}),c.t=!0,this.notifySubscribers(n,"asleep"))},Pa:function(){var b=
this[s];b.t&&(b.da||this.Sa())&&this.U();return a.K.fn.Pa.call(this)}},Z={ua:function(a){"change"!=a&&"beforeChange"!=a||this.p()}};a.a.la&&a.a.$a(z,a.K.fn);var P=a.O.md;a.m[P]=a.O;z[P]=a.m;a.bd=function(b){return a.Qa(b,a.m)};a.cd=function(b){return a.Qa(b,a.m)&&b[s]&&b[s].Ya};a.b("computed",a.m);a.b("dependentObservable",a.m);a.b("isComputed",a.bd);a.b("isPureComputed",a.cd);a.b("computed.fn",z);a.H(z,"peek",z.p);a.H(z,"dispose",z.k);a.H(z,"isActive",z.ca);a.H(z,"getDependenciesCount",z.Ca);a.rc=
function(b,c){if("function"===typeof b)return a.m(b,c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.m(b,c)};a.b("pureComputed",a.rc);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var k=
g.get(d);h[c]=k!==n?k:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.Lb=[]}a.Ac=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.I(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Ac(b);return a.a.Gb(b,c,d)};d.prototype={save:function(b,c){var d=a.a.o(this.keys,
b);0<=d?this.Lb[d]=c:(this.keys.push(b),this.Lb.push(c))},get:function(b){b=a.a.o(this.keys,b);return 0<=b?this.Lb[b]:n}}})();a.b("toJS",a.Ac);a.b("toJSON",a.toJSON);(function(){a.j={u:function(b){switch(a.a.A(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.zb):7>=a.a.C?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex]):n;default:return b.value}},ja:function(b,
c,d){switch(a.a.A(b)){case "option":switch(typeof c){case "string":a.a.e.set(b,a.d.options.zb,n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.e.set(b,a.d.options.zb,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof c?c:""}break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.j.u(b.options[f]),h==c||""==h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e;break;default:if(null===
c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.j);a.b("selectExtensions.readValue",a.j.u);a.b("selectExtensions.writeValue",a.j.ja);a.h=function(){function b(b){b=a.a.cb(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),r,h=[],p=0;if(d){d.push(",");for(var A=0,y;y=d[A];++A){var v=y.charCodeAt(0);if(44===v){if(0>=p){c.push(r&&h.length?{key:r,value:h.join("")}:{unknown:r||h.join("")});r=p=0;h=[];continue}}else if(58===v){if(!p&&!r&&1===h.length){r=h.pop();continue}}else 47===
v&&A&&1<y.length?(v=d[A-1].match(f))&&!g[v[0]]&&(b=b.substr(b.indexOf(y)+1),d=b.match(e),d.push(","),A=-1,y="/"):40===v||123===v||91===v?++p:41===v||125===v||93===v?--p:r||h.length||34!==v&&39!==v||(y=y.slice(1,-1));h.push(y)}}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,
g={"in":1,"return":1,"typeof":1},h={};return{va:[],ga:h,Ab:b,Xa:function(e,m){function k(b,e){var m;if(!A){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(e=l.preprocess(e,b,k)))return;if(l=h[b])m=e,0<=a.a.o(c,m)?m=!1:(l=m.match(d),m=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:m),l=m;l&&g.push("'"+b+"':function(_z){"+m+"=_z}")}p&&(e="function(){return "+e+" }");f.push("'"+b+"':"+e)}m=m||{};var f=[],g=[],p=m.valueAccessors,A=m.bindingParams,y="string"===typeof e?b(e):e;a.a.r(y,function(a){k(a.key||
a.unknown,a.value)});g.length&&k("_ko_property_writers","{"+g.join(",")+" }");return f.join(",")},fd:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},Ga:function(b,c,d,e,f){if(b&&a.I(b))!a.Da(b)||f&&b.p()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.va);a.b("expressionRewriting.parseObjectLiteral",a.h.Ab);a.b("expressionRewriting.preProcessBindings",a.h.Xa);a.b("expressionRewriting._twoWayBindings",
a.h.ga);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Xa);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(a,d){for(var e=a,f=1,l=[];e=e.nextSibling;){if(c(e)&&(f--,0===f))return l;l.push(e);b(e)&&f++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-
1].nextSibling:a.nextSibling:null}var f=t&&"\x3c!--test--\x3e"===t.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.f={aa:{},childNodes:function(a){return b(a)?d(a):a.childNodes},za:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.rb(c)},fa:function(c,d){if(b(c)){a.f.za(c);for(var e=c.nextSibling,f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],
e)}else a.a.fa(c,d)},qc:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},kc:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.f.qc(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Yc:b,vd:function(a){return(a=
(f?a.text:a.nodeValue).match(g))?a[1]:null},oc:function(d){if(l[a.a.A(d)]){var k=d.firstChild;if(k){do if(1===k.nodeType){var f;f=k.firstChild;var g=null;if(f){do if(g)g.push(f);else if(b(f)){var h=e(f,!0);h?f=h:g=[f]}else c(f)&&(g=[f]);while(f=f.nextSibling)}if(f=g)for(g=k.nextSibling,h=0;h<f.length;h++)g?d.insertBefore(f[h],g):d.appendChild(f[h])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.aa);a.b("virtualElements.emptyNode",a.f.za);a.b("virtualElements.insertAfter",
a.f.kc);a.b("virtualElements.prepend",a.f.qc);a.b("virtualElements.setDomNodeChildren",a.f.fa);(function(){a.S=function(){this.Kc={}};a.a.extend(a.S.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.Yc(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.g.Rb(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,
c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.g.Rb(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.f.vd(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var f=this.Kc,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var l,m="with($context){with($data||{}){return{"+a.h.Xa(b,e)+"}}}";l=new Function("$context","$element",m);h=f[g]=l}return h(c,d)}catch(k){throw k.message="Unable to parse bindings.\nBindings value: "+
b+"\nMessage: "+k.message,k;}}});a.S.instance=new a.S})();a.b("bindingProvider",a.S);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Ea(a.l.w(b),function(a,c){return function(){return b()[c]}})}function e(c,e,k){return"function"===typeof c?d(c.bind(null,e,k)):a.a.Ea(c,b)}function f(a,b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var e,k=a.f.firstChild(c),f=a.S.instance,m=f.preprocessNode;if(m){for(;e=k;)k=a.f.nextSibling(e),
m.call(f,e);k=a.f.firstChild(c)}for(;e=k;)k=a.f.nextSibling(e),h(b,e,d)}function h(b,c,d){var e=!0,k=1===c.nodeType;k&&a.f.oc(c);if(k&&d||a.S.instance.nodeHasBindings(c))e=m(c,null,b,d).shouldBindDescendants;e&&!r[a.a.A(c)]&&g(b,c,!k)}function l(b){var c=[],d={},e=[];a.a.D(b,function X(k){if(!d[k]){var f=a.getBindingHandler(k);f&&(f.after&&(e.push(k),a.a.r(f.after,function(c){if(b[c]){if(-1!==a.a.o(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
X(c)}}),e.length--),c.push({key:k,jc:f}));d[k]=!0}});return c}function m(b,d,e,k){var m=a.a.e.get(b,q);if(!d){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&k&&a.xc(b,e);var g;if(d&&"function"!==typeof d)g=d;else{var h=a.S.instance,r=h.getBindingAccessors||f,p=a.B(function(){(g=d?d(e,b):r.call(h,b,e))&&e.Q&&e.Q();return g},null,{i:b});g&&p.ca()||(p=null)}var s;if(g){var t=p?function(a){return function(){return c(p()[a])}}:function(a){return g[a]},
u=function(){return a.a.Ea(p?p():g,c)};u.get=function(a){return g[a]&&c(t(a))};u.has=function(a){return a in g};k=l(g);a.a.r(k,function(c){var d=c.jc.init,k=c.jc.update,f=c.key;if(8===b.nodeType&&!a.f.aa[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.l.w(function(){var a=d(b,t(f),u,e.$data,e);if(a&&a.controlsDescendantBindings){if(s!==n)throw Error("Multiple bindings ("+s+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
s=f}}),"function"==typeof k&&a.B(function(){k(b,t(f),u,e.$data,e)},null,{i:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:s===n}}function k(b){return b&&b instanceof a.R?b:new a.R(b)}a.d={};var r={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.d[b]};a.R=function(b,c,d,e,k){function f(){var k=g?b():b,m=a.a.c(k);c?(c.Q&&c.Q(),a.a.extend(l,c),l.Q=r):(l.$parents=[],l.$root=m,l.ko=a);l.$rawData=
k;l.$data=m;d&&(l[d]=m);e&&e(l,c,m);return l.$data}function m(){return h&&!a.a.Tb(h)}var l=this,g="function"==typeof b&&!a.I(b),h,r;k&&k.exportDependencies?f():(r=a.B(f,null,{ya:m,i:!0}),r.ca()&&(l.Q=r,r.equalityComparer=null,h=[],r.Dc=function(b){h.push(b);a.a.G.qa(b,function(b){a.a.Na(h,b);h.length||(r.k(),l.Q=r=n)})}))};a.R.prototype.createChildContext=function(b,c,d,e){return new a.R(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);
d&&d(a)},e)};a.R.prototype.extend=function(b){return new a.R(this.Q||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};a.R.prototype.ac=function(a,b){return this.createChildContext(a,b,null,{exportDependencies:!0})};var q=a.a.e.J(),p=a.a.e.J();a.xc=function(b,c){if(2==arguments.length)a.a.e.set(b,p,c),c.Q&&c.Q.Dc(b);else return a.a.e.get(b,p)};a.La=function(b,c,d){1===b.nodeType&&a.f.oc(b);return m(b,c,k(d),!0)};a.Ic=function(b,c,d){d=k(d);return a.La(b,
e(c,d,b),d)};a.hb=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(k(a),b,!0)};a.Ub=function(a,b){!u&&x.jQuery&&(u=x.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||x.document.body;h(k(a),b,!0)};a.nb=function(b){switch(b.nodeType){case 1:case 8:var c=a.xc(b);if(c)return c;if(b.parentNode)return a.nb(b.parentNode)}return n};a.Oc=function(b){return(b=a.nb(b))?b.$data:n};a.b("bindingHandlers",
a.d);a.b("applyBindings",a.Ub);a.b("applyBindingsToDescendants",a.hb);a.b("applyBindingAccessorsToNode",a.La);a.b("applyBindingsToNode",a.Ic);a.b("contextFor",a.nb);a.b("dataFor",a.Oc)})();(function(b){function c(c,e){var m=f.hasOwnProperty(c)?f[c]:b,k;m?m.Y(e):(m=f[c]=new a.K,m.Y(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,dd:e};delete f[c];k||e?m.notifySubscribers(b):a.Z.Za(function(){m.notifySubscribers(b)})}),k=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",
[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,f,k){k||(k=a.g.loaders.slice(0));var g=k.shift();if(g){var q=g[c];if(q){var p=!1;if(q.apply(g,d.concat(function(a){p?f(null):null!==a?f(a):e(c,d,f,k)}))!==b&&(p=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,k)}else f(null)}var f={},g={};a.g={get:function(d,e){var f=g.hasOwnProperty(d)?g[d]:b;f?f.dd?a.l.w(function(){e(f.definition)}):
a.Z.Za(function(){e(f.definition)}):c(d,e)},$b:function(a){delete g[a]},Nb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.$b)})();(function(){function b(b,c,d,e){function g(){0===--y&&e(h)}var h={},y=2,v=d.template;d=d.viewModel;v?f(c,v,function(c){a.g.Nb("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.g.Nb("loadViewModel",[b,c],function(a){h[l]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[l])d(b[l]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.A(b)){case "script":return a.a.na(b.text);case "textarea":return a.a.na(b.value);case "template":if(e(b.content))return a.a.wa(b.content.childNodes)}return a.a.wa(b.childNodes)}function e(a){return x.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
O||x.require?(O||x.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.wb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.g.wb=function(a){return h.hasOwnProperty(a)};a.g.ud=function(b){delete h[b];a.g.$b(b)};a.g.cc={getConfig:function(a,b){b(h.hasOwnProperty(a)?h[a]:null)},loadComponent:function(a,
c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.na(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.W(c.childNodes));else if(c.element)if(c=c.element,x.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var l=t.getElementById(c);l?f(d(l)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),
b,d)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.wb);a.b("components.unregister",a.g.ud);a.b("components.defaultLoader",a.g.cc);a.g.loaders.push(a.g.cc);a.g.Ec=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ea(f,function(c){return a.m(c,null,{i:b})}),g=a.a.Ea(f,function(c){var e=c.p();return c.ca()?a.m({read:function(){return a.a.c(c())},write:a.Da(e)&&
function(a){c()(a)},i:b}):e});g.hasOwnProperty("$raw")||(g.$raw=f);return g}return{$raw:{}}}a.g.getComponentNameForNode=function(b){var c=a.a.A(b);if(a.g.wb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.C&&b.tagName===c))return c};a.g.Rb=function(c,e,f,g){if(1===e.nodeType){var h=a.g.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var l={name:h,params:b(e,f)};c.component=g?function(){return l}:
l}}return c};var c=new a.S;9>a.a.C&&(a.g.register=function(a){return function(b){t.createElement(b);return a.apply(this,arguments)}}(a.g.register),t.createDocumentFragment=function(b){return function(){var c=b(),f=a.g.Ec,g;for(g in f)f.hasOwnProperty(g)&&c.createElement(g);return c}}(t.createDocumentFragment))})();(function(b){function c(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.wa(c);a.f.fa(d,b)}function d(a,b,c,d){var e=a.createViewModel;return e?e.call(a,
d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,g,h,l,m){function k(){var a=r&&r.dispose;"function"===typeof a&&a.call(r);q=r=null}var r,q,p=a.a.W(a.f.childNodes(f));a.a.G.qa(f,k);a.m(function(){var l=a.a.c(g()),h,v;"string"===typeof l?h=l:(h=a.a.c(l.name),v=a.a.c(l.params));if(!h)throw Error("No component name specified");var n=q=++e;a.g.get(h,function(e){if(q===n){k();if(!e)throw Error("Unknown component '"+h+"'");c(h,e,f);var l=d(e,f,p,v);e=m.createChildContext(l,b,function(a){a.$component=
l;a.$componentTemplateNodes=p});r=l;a.hb(e,f)}})},null,{i:f});return{controlsDescendantBindings:!0}}};a.f.aa.component=!0})();var Q={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.D(d,function(c,d){d=a.a.c(d);var g=!1===d||null===d||d===n;g&&b.removeAttribute(c);8>=a.a.C&&c in Q?(c=Q[c],g?b.removeAttribute(c):b[c]=d):g||b.setAttribute(c,d.toString());"name"===c&&a.a.vc(b,g?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,
c,d){function e(){var e=b.checked,f=p?g():e;if(!a.xa.Va()&&(!l||e)){var h=a.l.w(c);if(k){var m=r?h.p():h;q!==f?(e&&(a.a.ra(m,f,!0),a.a.ra(m,q,!1)),q=f):a.a.ra(m,f,e);r&&a.Da(h)&&h(m)}else a.h.Ga(h,d,"checked",f,!0)}}function f(){var d=a.a.c(c());b.checked=k?0<=a.a.o(d,g()):h?d:g()===d}var g=a.rc(function(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):d.has("value")?a.a.c(d.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var m=c(),k=h&&a.a.c(m)instanceof Array,
r=!(k&&m.push&&m.splice),q=k?g():n,p=l||k;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.m(e,null,{i:b});a.a.q(b,"click",e);a.m(f,null,{i:b});m=n}}};a.h.ga.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());null!==d&&"object"==typeof d?a.a.D(d,function(c,d){d=a.a.c(d);a.a.fb(b,c,d)}):(d=a.a.cb(String(d||"")),a.a.fb(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.fb(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());
d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,f){var g=c()||{};a.a.D(g,function(g){"string"==typeof g&&a.a.q(b,g,function(b){var m,k=c()[g];if(k){try{var r=a.a.W(arguments);e=f.$data;r.unshift(e);m=k.apply(e,r)}finally{!0!==m&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};
a.d.foreach={mc:function(b){return function(){var c=b(),d=a.a.Bb(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.X.vb};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.X.vb}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.mc(c))},update:function(b,c,d,e,f){return a.d.template.update(b,a.d.foreach.mc(c),
d,e,f)}};a.h.va.foreach=!1;a.f.aa.foreach=!0;a.d.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(k){g=f.body}e=g===b}f=c();a.h.Ga(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.q(b,"focus",f);a.a.q(b,"focusin",f);a.a.q(b,"blur",g);a.a.q(b,"focusout",g)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.l.w(a.a.Fa,null,[b,d?"focusin":"focusout"]))}};a.h.ga.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.ga.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Eb(b,c())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,c){return a.ac(c)});var L={};a.d.options={init:function(b){if("select"!==a.a.A(b))throw Error("options binding applies only to SELECT elements");for(;0<
b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.Ma(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,e){if(A&&k)a.j.ja(b,a.a.c(d.get("value")),!0);else if(p.length){var f=0<=a.a.o(p,a.j.u(e[0]));a.a.wc(e[0],f);A&&!f&&a.l.w(a.a.Fa,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,m=a.a.c(c()),k=d.get("valueAllowUnset")&&d.has("value"),r=
d.get("optionsIncludeDestroyed");c={};var q,p=[];k||(h?p=a.a.ib(e(),a.j.u):0<=b.selectedIndex&&p.push(a.j.u(b.options[b.selectedIndex])));m&&("undefined"==typeof m.length&&(m=[m]),q=a.a.Ma(m,function(b){return r||b===n||null===b||!a.a.c(b._destroy)}),d.has("optionsCaption")&&(m=a.a.c(d.get("optionsCaption")),null!==m&&m!==n&&q.unshift(L)));var A=!1;c.beforeRemove=function(a){b.removeChild(a)};m=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(m=function(b,c){g(0,c);
a.l.w(d.get("optionsAfterRender"),null,[c[0],b!==L?b:n])});a.a.Db(b,q,function(c,e,g){g.length&&(p=!k&&g[0].selected?[a.j.u(g[0])]:[],A=!0);e=b.ownerDocument.createElement("option");c===L?(a.a.bb(e,d.get("optionsCaption")),a.j.ja(e,n)):(g=f(c,d.get("optionsValue"),c),a.j.ja(e,a.a.c(g)),c=f(c,d.get("optionsText"),g),a.a.bb(e,c));return[e]},c,m);a.l.w(function(){k?a.j.ja(b,a.a.c(d.get("value")),!0):(h?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.j.u(b.options[b.selectedIndex])!==p[0]:
p.length||0<=b.selectedIndex)&&a.a.Fa(b,"change")});a.a.Sc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.zb=a.a.e.J();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.q(b,"change",function(){var e=c(),f=[];a.a.r(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.j.u(b))});a.h.Ga(e,d,"selectedOptions",f)})},update:function(b,c){if("select"!=a.a.A(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c()),e=b.scrollTop;
d&&"number"==typeof d.length&&a.a.r(b.getElementsByTagName("option"),function(b){var c=0<=a.a.o(d,a.j.u(b));b.selected!=c&&a.a.wc(b,c)});b.scrollTop=e}};a.h.ga.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.D(d,function(c,d){d=a.a.c(d);if(null===d||d===n||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.q(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,
b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.bb(b,c())}};a.f.aa.text=!0;(function(){if(x&&x.navigator)var b=function(a){if(a)return parseFloat(a[1])},c=x.opera&&x.opera.version&&parseInt(x.opera.version()),d=x.navigator.userAgent,e=b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(d.match(/Firefox\/([^ ]*)/));if(10>a.a.C)var g=a.a.e.J(),h=a.a.e.J(),l=function(b){var c=
this.activeElement;(c=c&&a.a.e.get(c,h))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,g)||(a.a.e.set(d,g,!0),a.a.q(d,"selectionchange",l));a.a.e.set(b,h,c)};a.d.textInput={init:function(b,d,g){function l(c,d){a.a.q(b,c,d)}function h(){var c=a.a.c(d());if(null===c||c===n)c="";u!==n&&c===u?a.a.setTimeout(h,4):b.value!==c&&(s=c,b.value=c)}function y(){t||(u=b.value,t=a.a.setTimeout(v,4))}function v(){clearTimeout(t);u=t=n;var c=b.value;s!==c&&(s=c,a.h.Ga(d(),g,"textInput",c))}var s=b.value,
t,u,x=9==a.a.C?y:v;10>a.a.C?(l("propertychange",function(a){"value"===a.propertyName&&x(a)}),8==a.a.C&&(l("keyup",v),l("keydown",v)),8<=a.a.C&&(m(b,x),l("dragend",y))):(l("input",v),5>e&&"textarea"===a.a.A(b)?(l("keydown",y),l("paste",y),l("cut",y)):11>c?l("keydown",y):4>f&&(l("DOMAutoComplete",v),l("dragdrop",v),l("drop",v)));l("change",v);a.m(h,null,{i:b})}};a.h.ga.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+
++a.d.uniqueName.Nc;a.a.vc(b,d)}}};a.d.uniqueName.Nc=0;a.d.value={after:["options","foreach"],init:function(b,c,d){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=d.get("valueUpdate"),g=!1,h=null;f&&("string"==typeof f&&(f=[f]),a.a.ta(e,f),e=a.a.Wb(e));var l=function(){h=null;g=!1;var e=c(),f=a.j.u(b);a.h.Ga(e,d,"value",f)};!a.a.C||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.o(e,"propertychange")||
(a.a.q(b,"propertychange",function(){g=!0}),a.a.q(b,"focus",function(){g=!1}),a.a.q(b,"blur",function(){g&&l()}));a.a.r(e,function(c){var d=l;a.a.sd(c,"after")&&(d=function(){h=a.j.u(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.q(b,c,d)});var m=function(){var e=a.a.c(c()),f=a.j.u(b);if(null!==h&&e===h)a.a.setTimeout(m,0);else if(e!==f)if("select"===a.a.A(b)){var g=d.get("valueAllowUnset"),f=function(){a.j.ja(b,e,g)};f();g||e===a.j.u(b)?a.a.setTimeout(f,0):a.l.w(a.a.Fa,null,[b,"change"])}else a.j.ja(b,
e)};a.m(m,null,{i:b})}else a.La(b,{checkedValue:c})},update:function(){}};a.h.ga.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,f,g){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");a.P=function(){};a.P.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.P.prototype.createJavaScriptEvaluatorBlock=
function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.P.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||t;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.v.n(d)}if(1==b.nodeType||8==b.nodeType)return new a.v.sa(b);throw Error("Unknown template type: "+b);};a.P.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.P.prototype.isTemplateRewritten=function(a,
c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.P.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.P);a.Ib=function(){function b(b,c,d,h){b=a.h.Ab(b);for(var l=a.h.va,m=0;m<b.length;m++){var k=b[m].key;if(l.hasOwnProperty(k)){var r=l[k];if("function"===typeof r){if(k=r(b[m].value))throw Error(k);}else if(!r)throw Error("This template engine does not support the '"+
k+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Xa(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Tc:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Ib.jd(b,
c)},d)},jd:function(a,f){return a.replace(c,function(a,c,d,e,k){return b(k,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},Jc:function(b,c){return a.N.yb(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.La(l,b,h)})}}}();a.b("__tr_ambtns",a.Ib.Jc);(function(){a.v={};a.v.n=function(b){if(this.n=b){var c=a.a.A(b);this.eb="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.v.n.prototype.text=function(){var b=1===
this.eb?"text":2===this.eb?"value":"innerHTML";if(0==arguments.length)return this.n[b];var c=arguments[0];"innerHTML"===b?a.a.Eb(this.n,c):this.n[b]=c};var b=a.a.e.J()+"_";a.v.n.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.n,b+c);a.a.e.set(this.n,b+c,arguments[1])};var c=a.a.e.J();a.v.n.prototype.nodes=function(){var b=this.n;if(0==arguments.length)return(a.a.e.get(b,c)||{}).mb||(3===this.eb?b.content:4===this.eb?b:n);a.a.e.set(b,c,{mb:arguments[0]})};a.v.sa=function(a){this.n=
a};a.v.sa.prototype=new a.v.n;a.v.sa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.n,c)||{};b.Jb===n&&b.mb&&(b.Jb=b.mb.innerHTML);return b.Jb}a.a.e.set(this.n,c,{Jb:arguments[0]})};a.b("templateSources",a.v);a.b("templateSources.domElement",a.v.n);a.b("templateSources.anonymousTemplate",a.v.sa)})();(function(){function b(b,c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=
a.S.instance,n=h.preprocessNode;if(n){b(e,f,function(a,b){var c=a.previousSibling,d=n.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.Ba(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.Ub(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.N.Cc(b,[d])});a.a.Ba(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,q){q=q||{};var p=(b&&d(b)||f||{}).ownerDocument,n=q.templateEngine||g;
a.Ib.Tc(f,n,p);f=n.renderTemplate(f,h,q,p);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");p=!1;switch(e){case "replaceChildren":a.f.fa(b,f);p=!0;break;case "replaceNode":a.a.uc(b,f);p=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}p&&(c(f,h),q.afterRender&&a.l.w(q.afterRender,null,[f,h.$data]));return f}function f(b,c,d){return a.I(b)?b():"function"===typeof b?b(c,d):b}
var g;a.Fb=function(b){if(b!=n&&!(b instanceof a.P))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Cb=function(b,c,k,h,q){k=k||{};if((k.templateEngine||g)==n)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(h){var p=d(h);return a.B(function(){var g=c&&c instanceof a.R?c:new a.R(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(h,q,n,g,k);"replaceNode"==q&&(h=g,p=d(h))},null,{ya:function(){return!p||!a.a.qb(p)},i:p&&
"replaceNode"==q?p.parentNode:p})}return a.N.yb(function(d){a.Cb(b,c,k,d,"replaceNode")})};a.pd=function(b,d,g,h,q){function p(a,b){c(b,t);g.afterRender&&g.afterRender(b,a);t=null}function s(a,c){t=q.createChildContext(a,g.as,function(a){a.$index=c});var d=f(b,a,t);return e(null,"ignoreTargetNode",d,t,g)}var t;return a.B(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.Ma(b,function(b){return g.includeDestroyed||b===n||null===b||!a.a.c(b._destroy)});a.l.w(a.a.Db,null,[h,b,
s,g,p])},null,{i:h})};var h=a.a.e.J();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.f.za(b);else{if("nodes"in d){if(d=d.nodes||[],a.I(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.f.childNodes(b);d=a.a.nc(d);(new a.v.sa(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.c(g);d=!0;e=null;"string"==typeof c?c={}:(g=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)));
"foreach"in c?e=a.pd(g||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.ac(c.data,c.as):f,e=a.Cb(g||b,f,c,b)):a.f.za(b);f=e;(c=a.a.e.get(b,h))&&"function"==typeof c.k&&c.k();a.a.e.set(b,h,f&&f.ca()?f:n)}};a.h.va.template=function(b){b=a.h.Ab(b);return 1==b.length&&b[0].unknown||a.h.fd(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.aa.template=!0})();a.b("setTemplateEngine",a.Fb);a.b("renderTemplate",a.Cb);a.a.hc=function(a,c,d){if(a.length&&
c.length){var e,f,g,h,l;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;l=c[g];++g)if(h.value===l.value){h.moved=l.index;l.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.lb=function(){function b(b,d,e,f,g){var h=Math.min,l=Math.max,m=[],k,n=b.length,q,p=d.length,s=p-n||1,t=n+p+1,v,u,x;for(k=0;k<=n;k++)for(u=v,m.push(v=[]),x=h(p,k+s),q=l(0,k-1);q<=x;q++)v[q]=q?k?b[k-1]===d[q-1]?u[q-1]:h(u[q]||t,v[q-1]||t)+1:q+1:k+1;h=[];l=[];s=[];k=n;for(q=p;k||q;)p=m[k][q]-1,q&&p===m[k][q-1]?l.push(h[h.length]={status:e,
value:d[--q],index:q}):k&&p===m[k-1][q]?s.push(h[h.length]={status:f,value:b[--k],index:k}):(--q,--k,g.sparse||h.push({status:"retained",value:d[q]}));a.a.hc(s,l,!g.dontLimitMoves&&10*n);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.lb);(function(){function b(b,c,d,h,l){var m=[],k=a.B(function(){var k=c(d,l,a.a.Ba(m,b))||[];0<
m.length&&(a.a.uc(m,k),h&&a.l.w(h,null,[d,k,l]));m.length=0;a.a.ta(m,k)},null,{i:b,ya:function(){return!a.a.Tb(m)}});return{ea:m,B:k.ca()?k:n}}var c=a.a.e.J(),d=a.a.e.J();a.a.Db=function(e,f,g,h,l){function m(b,c){w=q[c];u!==c&&(D[b]=w);w.tb(u++);a.a.Ba(w.ea,e);t.push(w);z.push(w)}function k(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.r(c[d].ea,function(a){b(a,d,c[d].ka)})}f=f||[];h=h||{};var r=a.a.e.get(e,c)===n,q=a.a.e.get(e,c)||[],p=a.a.ib(q,function(a){return a.ka}),s=a.a.lb(p,f,h.dontLimitMoves),
t=[],v=0,u=0,x=[],z=[];f=[];for(var D=[],p=[],w,C=0,B,E;B=s[C];C++)switch(E=B.moved,B.status){case "deleted":E===n&&(w=q[v],w.B&&(w.B.k(),w.B=n),a.a.Ba(w.ea,e).length&&(h.beforeRemove&&(t.push(w),z.push(w),w.ka===d?w=null:f[C]=w),w&&x.push.apply(x,w.ea)));v++;break;case "retained":m(C,v++);break;case "added":E!==n?m(C,E):(w={ka:B.value,tb:a.O(u++)},t.push(w),z.push(w),r||(p[C]=w))}a.a.e.set(e,c,t);k(h.beforeMove,D);a.a.r(x,h.beforeRemove?a.ba:a.removeNode);for(var C=0,r=a.f.firstChild(e),F;w=z[C];C++){w.ea||
a.a.extend(w,b(e,g,w.ka,l,w.tb));for(v=0;s=w.ea[v];r=s.nextSibling,F=s,v++)s!==r&&a.f.kc(e,s,F);!w.ad&&l&&(l(w.ka,w.ea,w.tb),w.ad=!0)}k(h.beforeRemove,f);for(C=0;C<f.length;++C)f[C]&&(f[C].ka=d);k(h.afterMove,D);k(h.afterAdd,p)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Db);a.X=function(){this.allowTemplateRewriting=!1};a.X.prototype=new a.P;a.X.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.C?0:b.nodes)?b.nodes():null)return a.a.W(c.cloneNode(!0).childNodes);b=b.text();
return a.a.na(b,e)};a.X.vb=new a.X;a.Fb(a.X.vb);a.b("nativeTemplateEngine",a.X);(function(){a.xb=function(){var a=this.ed=function(){if(!u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,f,g){g=g||t;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+
h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},f.templateOptions);e=u.tmpl(h,b,e);e.appendTo(g.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){t.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.xb.prototype=
new a.P;var b=new a.xb;0<b.ed&&a.Fb(b);a.b("jqueryTmplTemplateEngine",a.xb)})()})})();})();

},{}],2:[function(require,module,exports){
(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.18';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});

},{}],3:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],4:[function(require,module,exports){
const ko = require('../lib/knockout/knockout-3.4.2');
const gmaps = require('./maps');
const _ = require('underscore');

/*
Download the Knockout framework. Knockout must be used to handle the list, filter, and any other information on the page that is subject to changing state.
Things that should not be handled by Knockout:
 - anything the Maps API is used for,
 - creating markers,
 - tracking click events on markers,
 - making the map,
 - refreshing the map.

Note 1: Tracking click events on list items should be handled with Knockout.
Note 2: Creating your markers as a part of your ViewModel is allowed (and recommended). Creating them as Knockout observables is not.
*/

const menuIco = document.getElementById('menu-bar');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const title = document.getElementById('title');

function moveMenu() {
    gmaps.resize();
    menu.classList.toggle('hidden-menu');
    if (menuClose.classList.contains('fade-out')) {
        setTimeout(function() {
            menuClose.classList.toggle('fade-out');
            menuClose.classList.toggle('fade-in');
        }, 400);
    } else {
        menuClose.classList.toggle('fade-out');
        menuClose.classList.toggle('fade-in');
    }
    if (menuIco.classList.contains('fade-out')) {
        setTimeout(function() {
            menuIco.classList.toggle('fade-out');
            menuIco.classList.toggle('fade-in');
        }, 400);
        setTimeout(function() {
            title.classList.toggle('fade-out');
            title.classList.toggle('fade-in');
            title.classList.toggle('move-title');
        }, 600);
    } else {
        menuIco.classList.toggle('fade-out');
        menuIco.classList.toggle('fade-in');
        title.classList.toggle('fade-out');
        title.classList.toggle('fade-in');
        title.classList.toggle('move-title');
    }
}

menuIco.addEventListener('click', moveMenu);
menuClose.addEventListener('click', moveMenu);


/* knockout test here */
const Place = require('./models/Place');
const places = require('./data/places');

const ViewModel = function() {
    gmaps.initMaps();
    const placesList = [];
    places.forEach((place) => {
        const placeItem = new Place(place);
        gmaps.createMarker(placeItem);
        placesList.push(placeItem);
    });

    this.filterInput = ko.observable()
    this.previousList = [];
    this.markerList = ko.computed(() => {
        let filteredList = (this.filterInput() == null) ?
            placesList : placesList.filter((place) => {
                return place.title.toLowerCase()
                    .includes(this.filterInput().toLowerCase());
            });
        if (!_.isEqual(filteredList, this.previousList)) {
            gmaps.filterMarkers(filteredList);
            gmaps.centerMap();
            this.previousList = filteredList;
        }
        return filteredList;
    });

    this.clickPlace = (place) => {
        console.log(place.title());
    };
};


/*
Multiple viewmodels:
If they all need to be on the same page, one easy way to do this is to have a master view model containing an array (or property list)
of the other view models.

masterVM = {
    vmA : new VmA(),
    vmB : new VmB(),
    vmC : new VmC(),
}
*/
ko.applyBindings(new ViewModel());
},{"../lib/knockout/knockout-3.4.2":1,"./data/places":5,"./maps":6,"./models/Place":7,"underscore":3}],5:[function(require,module,exports){
const places = [
    {
        title: "Városmajor",
        position: {lat: 47.507904, lng: 19.017603}
    },
    {
        title: "CoolTour",
        position: {lat: 47.5098299, lng: 19.0244666}
    },
    {
        title: "Mátyás Templom",
        position: {lat: 47.5019537, lng: 19.0341617}
    },
    {
        title: "Margitszigeti szökőkút",
        position: {lat: 47.5187803, lng: 19.0447954}
    },
    {
        title: "Hold utcai Vásárcsarnok",
        position: {lat: 47.504828, lng: 19.0526494}
    },
    {
        title: "Pontoon",
        position: {lat: 47.4996289, lng: 19.046212}
    }
];

module.exports = places;

},{}],6:[function(require,module,exports){
const GoogleMapsLoader = require('google-maps');

const gmaps = {
    initMaps: function() {
        GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        const mapEl = document.getElementById('map-canvas');
        const options = {
            center: {lat: 47.509205473526436, lng: 19.035126200000036},
            zoom: 15,
            // styles: styles,
            mapTypeControl: false
        };
        GoogleMapsLoader.load(function(google) {
            window.map = new google.maps.Map(mapEl, options);
            window.markers = [];
            window.largeInfowindow = new google.maps.InfoWindow();
            // set up event listener to auto-zoom if bounds change
            google.maps.event.addListener(window.map, 'bounds_changed', function() {
                let zoom = window.map.getZoom();
                // set minimum zoom level
                if (zoom > 16) {
                    window.map.setZoom(16);
                } else {
                    window.map.setZoom(zoom);
                }
              });
        });
    },
    resize: function() {
        const map = window.map;
        const center = map.getCenter();
        GoogleMapsLoader.load(function(google) {
            const repeatResize = setInterval(function(){
                google.maps.event.trigger(map, "resize");
                map.panTo(center);
            }, 5);
            setTimeout(function(){
                clearTimeout(repeatResize);
            }, 300);
        });
    },
    createMarker: function(place) {
        GoogleMapsLoader.load(function(google) {
            const map = window.map;
            const largeInfowindow = window.largeInfowindow;
            // helper functions
            function makeMarkerIcon(color) {
                const markerImage = new google.maps.MarkerImage(
                    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' +
                    color +
                    '|40|_|%E2%80%A2',
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34),
                    new google.maps.Size(21,34));
                return markerImage;
            }
            function populateInfoWindow(selectedMarker, infowindow) {
                if (infowindow.marker !== selectedMarker) {
                    infowindow.setContent(selectedMarker.title);
                    infowindow.marker = selectedMarker;

                    infowindow.addListener('closeclick', function() {
                        infowindow.marker = null;
                    });
                    infowindow.open(map, selectedMarker);
                }
            }

            const defaultIcon = makeMarkerIcon('0091ff');
            const highlightedIcon = makeMarkerIcon('FFFF24');
            const marker = new google.maps.Marker({
                position: place.position,
                map: map,
                title: place.title,
                animation: google.maps.Animation.DROP,
                icon: defaultIcon
            });

            window.markers.push(marker);

            // add listeners
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfowindow);
            });
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });

        });
    },
    centerMap: function() {
        GoogleMapsLoader.load(function(google) {
            const map = window.map;
            const markers = window.markers;
            const bounds = new google.maps.LatLngBounds();
            let validCenter = false;
            markers.forEach((marker) => {
                if (marker.map) {
                    bounds.extend(marker.getPosition());
                    validCenter = true;
                }
            });
            //center the map to the geometric center of all markers
            if (validCenter) {
                map.panTo(bounds.getCenter());
                map.fitBounds(bounds);
            }
        });
    },
    filterMarkers: function(filteredMarkers) {
        const map = window.map;
        const markers = window.markers;
        const filteredTitles = filteredMarkers.map((place) => place.title);
        if (markers) {
            markers.forEach((marker) => {
                if (filteredTitles.includes(marker.title)) {
                    if (marker.map === null) marker.setMap(map);
                } else {
                    marker.setMap(null);
                };
            });
        }
    }
}


module.exports = gmaps;
},{"google-maps":2}],7:[function(require,module,exports){
const Place = function (data) {
    this.title = data.title;
    this.position = data.position;
};

module.exports = Place;
},{}]},{},[4]);
