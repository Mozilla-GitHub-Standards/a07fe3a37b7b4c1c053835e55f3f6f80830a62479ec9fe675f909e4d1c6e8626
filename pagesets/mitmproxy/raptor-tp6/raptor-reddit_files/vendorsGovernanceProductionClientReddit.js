(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Governance~ProductionClient~Reddit"],{"./node_modules/fbjs/lib/emptyFunction.js":function(e,o,s){"use strict";function n(e){return function(){return e}}var d=function(){};d.thatReturns=n,d.thatReturnsFalse=n(!1),d.thatReturnsTrue=n(!0),d.thatReturnsNull=n(null),d.thatReturnsThis=function(){return this},d.thatReturnsArgument=function(e){return e},e.exports=d},"./node_modules/fbjs/lib/invariant.js":function(e,o,s){"use strict";var n=function(e){};e.exports=function(e,o,s,d,r,t,u,a){if(n(o),!e){var l;if(void 0===o)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[s,d,r,t,u,a],f=0;(l=new Error(o.replace(/%s/g,function(){return i[f++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},"./node_modules/lodash/_asciiWords.js":function(e,o){var s=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(s)||[]}},"./node_modules/lodash/_assignMergeValue.js":function(e,o,s){var n=s("./node_modules/lodash/_baseAssignValue.js"),d=s("./node_modules/lodash/eq.js");e.exports=function(e,o,s){(void 0===s||d(e[o],s))&&(void 0!==s||o in e)||n(e,o,s)}},"./node_modules/lodash/_baseMerge.js":function(e,o,s){var n=s("./node_modules/lodash/_Stack.js"),d=s("./node_modules/lodash/_assignMergeValue.js"),r=s("./node_modules/lodash/_baseFor.js"),t=s("./node_modules/lodash/_baseMergeDeep.js"),u=s("./node_modules/lodash/isObject.js"),a=s("./node_modules/lodash/keysIn.js"),l=s("./node_modules/lodash/_safeGet.js");e.exports=function e(o,s,i,f,c){o!==s&&r(s,function(r,a){if(u(r))c||(c=new n),t(o,s,a,i,e,f,c);else{var _=f?f(l(o,a),r,a+"",o,s,c):void 0;void 0===_&&(_=r),d(o,a,_)}},a)}},"./node_modules/lodash/_baseMergeDeep.js":function(e,o,s){var n=s("./node_modules/lodash/_assignMergeValue.js"),d=s("./node_modules/lodash/_cloneBuffer.js"),r=s("./node_modules/lodash/_cloneTypedArray.js"),t=s("./node_modules/lodash/_copyArray.js"),u=s("./node_modules/lodash/_initCloneObject.js"),a=s("./node_modules/lodash/isArguments.js"),l=s("./node_modules/lodash/isArray.js"),i=s("./node_modules/lodash/isArrayLikeObject.js"),f=s("./node_modules/lodash/isBuffer.js"),c=s("./node_modules/lodash/isFunction.js"),_=s("./node_modules/lodash/isObject.js"),h=s("./node_modules/lodash/isPlainObject.js"),m=s("./node_modules/lodash/isTypedArray.js"),j=s("./node_modules/lodash/_safeGet.js"),p=s("./node_modules/lodash/toPlainObject.js");e.exports=function(e,o,s,v,b,x,g){var y=j(e,s),A=j(o,s),O=g.get(A);if(O)n(e,s,O);else{var w=x?x(y,A,s+"",e,o,g):void 0,S=void 0===w;if(S){var T=l(A),I=!T&&f(A),E=!T&&!I&&m(A);w=A,T||I||E?l(y)?w=y:i(y)?w=t(y):I?(S=!1,w=d(A,!0)):E?(S=!1,w=r(A,!0)):w=[]:h(A)||a(A)?(w=y,a(y)?w=p(y):(!_(y)||v&&c(y))&&(w=u(A))):S=!1}S&&(g.set(A,w),b(w,A,v,x,g),g.delete(A)),n(e,s,w)}}},"./node_modules/lodash/_basePropertyOf.js":function(e,o){e.exports=function(e){return function(o){return null==e?void 0:e[o]}}},"./node_modules/lodash/_baseSome.js":function(e,o,s){var n=s("./node_modules/lodash/_baseEach.js");e.exports=function(e,o){var s;return n(e,function(e,n,d){return!(s=o(e,n,d))}),!!s}},"./node_modules/lodash/_castFunction.js":function(e,o,s){var n=s("./node_modules/lodash/identity.js");e.exports=function(e){return"function"==typeof e?e:n}},"./node_modules/lodash/_castSlice.js":function(e,o,s){var n=s("./node_modules/lodash/_baseSlice.js");e.exports=function(e,o,s){var d=e.length;return s=void 0===s?d:s,!o&&s>=d?e:n(e,o,s)}},"./node_modules/lodash/_charsStartIndex.js":function(e,o,s){var n=s("./node_modules/lodash/_baseIndexOf.js");e.exports=function(e,o){for(var s=-1,d=e.length;++s<d&&n(o,e[s],0)>-1;);return s}},"./node_modules/lodash/_createAssigner.js":function(e,o,s){var n=s("./node_modules/lodash/_baseRest.js"),d=s("./node_modules/lodash/_isIterateeCall.js");e.exports=function(e){return n(function(o,s){var n=-1,r=s.length,t=r>1?s[r-1]:void 0,u=r>2?s[2]:void 0;for(t=e.length>3&&"function"==typeof t?(r--,t):void 0,u&&d(s[0],s[1],u)&&(t=r<3?void 0:t,r=1),o=Object(o);++n<r;){var a=s[n];a&&e(o,a,n,t)}return o})}},"./node_modules/lodash/_createCompounder.js":function(e,o,s){var n=s("./node_modules/lodash/_arrayReduce.js"),d=s("./node_modules/lodash/deburr.js"),r=s("./node_modules/lodash/words.js"),t=RegExp("['’]","g");e.exports=function(e){return function(o){return n(r(d(o).replace(t,"")),e,"")}}},"./node_modules/lodash/_deburrLetter.js":function(e,o,s){var n=s("./node_modules/lodash/_basePropertyOf.js")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},"./node_modules/lodash/_hasUnicodeWord.js":function(e,o){var s=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return s.test(e)}},"./node_modules/lodash/_safeGet.js":function(e,o){e.exports=function(e,o){return"__proto__"==o?void 0:e[o]}},"./node_modules/lodash/_unicodeWords.js":function(e,o){var s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+s+"]",d="\\d+",r="[\\u2700-\\u27bf]",t="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+s+d+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",i="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+t+"|"+u+")",c="(?:"+i+"|"+u+")",_="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+_+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",a,l].join("|")+")[\\ufe0e\\ufe0f]?"+_+")*"),m="(?:"+[r,a,l].join("|")+")"+h,j=RegExp([i+"?"+t+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,i,"$"].join("|")+")",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,i+f,"$"].join("|")+")",i+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",i+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",d,m].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},"./node_modules/lodash/cloneDeep.js":function(e,o,s){var n=s("./node_modules/lodash/_baseClone.js"),d=1,r=4;e.exports=function(e){return n(e,d|r)}},"./node_modules/lodash/deburr.js":function(e,o,s){var n=s("./node_modules/lodash/_deburrLetter.js"),d=s("./node_modules/lodash/toString.js"),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,t=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=d(e))&&e.replace(r,n).replace(t,"")}},"./node_modules/lodash/defaults.js":function(e,o,s){var n=s("./node_modules/lodash/_baseRest.js"),d=s("./node_modules/lodash/eq.js"),r=s("./node_modules/lodash/_isIterateeCall.js"),t=s("./node_modules/lodash/keysIn.js"),u=Object.prototype,a=u.hasOwnProperty,l=n(function(e,o){e=Object(e);var s=-1,n=o.length,l=n>2?o[2]:void 0;for(l&&r(o[0],o[1],l)&&(n=1);++s<n;)for(var i=o[s],f=t(i),c=-1,_=f.length;++c<_;){var h=f[c],m=e[h];(void 0===m||d(m,u[h])&&!a.call(e,h))&&(e[h]=i[h])}return e});e.exports=l},"./node_modules/lodash/forOwn.js":function(e,o,s){var n=s("./node_modules/lodash/_baseForOwn.js"),d=s("./node_modules/lodash/_castFunction.js");e.exports=function(e,o){return e&&n(e,d(o))}},"./node_modules/lodash/mapKeys.js":function(e,o,s){var n=s("./node_modules/lodash/_baseAssignValue.js"),d=s("./node_modules/lodash/_baseForOwn.js"),r=s("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,o){var s={};return o=r(o,3),d(e,function(e,d,r){n(s,o(e,d,r),e)}),s}},"./node_modules/lodash/mapValues.js":function(e,o,s){var n=s("./node_modules/lodash/_baseAssignValue.js"),d=s("./node_modules/lodash/_baseForOwn.js"),r=s("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,o){var s={};return o=r(o,3),d(e,function(e,d,r){n(s,d,o(e,d,r))}),s}},"./node_modules/lodash/merge.js":function(e,o,s){var n=s("./node_modules/lodash/_baseMerge.js"),d=s("./node_modules/lodash/_createAssigner.js")(function(e,o,s){n(e,o,s)});e.exports=d},"./node_modules/lodash/mergeWith.js":function(e,o,s){var n=s("./node_modules/lodash/_baseMerge.js"),d=s("./node_modules/lodash/_createAssigner.js")(function(e,o,s,d){n(e,o,s,d)});e.exports=d},"./node_modules/lodash/set.js":function(e,o,s){var n=s("./node_modules/lodash/_baseSet.js");e.exports=function(e,o,s){return null==e?e:n(e,o,s)}},"./node_modules/lodash/snakeCase.js":function(e,o,s){var n=s("./node_modules/lodash/_createCompounder.js")(function(e,o,s){return e+(s?"_":"")+o.toLowerCase()});e.exports=n},"./node_modules/lodash/some.js":function(e,o,s){var n=s("./node_modules/lodash/_arraySome.js"),d=s("./node_modules/lodash/_baseIteratee.js"),r=s("./node_modules/lodash/_baseSome.js"),t=s("./node_modules/lodash/isArray.js"),u=s("./node_modules/lodash/_isIterateeCall.js");e.exports=function(e,o,s){var a=t(e)?n:r;return s&&u(e,o,s)&&(o=void 0),a(e,d(o,3))}},"./node_modules/lodash/toPlainObject.js":function(e,o,s){var n=s("./node_modules/lodash/_copyObject.js"),d=s("./node_modules/lodash/keysIn.js");e.exports=function(e){return n(e,d(e))}},"./node_modules/lodash/trimStart.js":function(e,o,s){var n=s("./node_modules/lodash/_baseToString.js"),d=s("./node_modules/lodash/_castSlice.js"),r=s("./node_modules/lodash/_charsStartIndex.js"),t=s("./node_modules/lodash/_stringToArray.js"),u=s("./node_modules/lodash/toString.js"),a=/^\s+/;e.exports=function(e,o,s){if((e=u(e))&&(s||void 0===o))return e.replace(a,"");if(!e||!(o=n(o)))return e;var l=t(e),i=r(l,t(o));return d(l,i).join("")}},"./node_modules/lodash/words.js":function(e,o,s){var n=s("./node_modules/lodash/_asciiWords.js"),d=s("./node_modules/lodash/_hasUnicodeWord.js"),r=s("./node_modules/lodash/toString.js"),t=s("./node_modules/lodash/_unicodeWords.js");e.exports=function(e,o,s){return e=r(e),void 0===(o=s?void 0:o)?d(e)?t(e):n(e):e.match(o)||[]}},"./node_modules/path-browserify/index.js":function(e,o,s){(function(e){function s(e,o){for(var s=0,n=e.length-1;n>=0;n--){var d=e[n];"."===d?e.splice(n,1):".."===d?(e.splice(n,1),s++):s&&(e.splice(n,1),s--)}if(o)for(;s--;s)e.unshift("..");return e}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,d=function(e){return n.exec(e).slice(1)};function r(e,o){if(e.filter)return e.filter(o);for(var s=[],n=0;n<e.length;n++)o(e[n],n,e)&&s.push(e[n]);return s}o.resolve=function(){for(var o="",n=!1,d=arguments.length-1;d>=-1&&!n;d--){var t=d>=0?arguments[d]:e.cwd();if("string"!=typeof t)throw new TypeError("Arguments to path.resolve must be strings");t&&(o=t+"/"+o,n="/"===t.charAt(0))}return o=s(r(o.split("/"),function(e){return!!e}),!n).join("/"),(n?"/":"")+o||"."},o.normalize=function(e){var n=o.isAbsolute(e),d="/"===t(e,-1);return(e=s(r(e.split("/"),function(e){return!!e}),!n).join("/"))||n||(e="."),e&&d&&(e+="/"),(n?"/":"")+e},o.isAbsolute=function(e){return"/"===e.charAt(0)},o.join=function(){var e=Array.prototype.slice.call(arguments,0);return o.normalize(r(e,function(e,o){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},o.relative=function(e,s){function n(e){for(var o=0;o<e.length&&""===e[o];o++);for(var s=e.length-1;s>=0&&""===e[s];s--);return o>s?[]:e.slice(o,s-o+1)}e=o.resolve(e).substr(1),s=o.resolve(s).substr(1);for(var d=n(e.split("/")),r=n(s.split("/")),t=Math.min(d.length,r.length),u=t,a=0;a<t;a++)if(d[a]!==r[a]){u=a;break}var l=[];for(a=u;a<d.length;a++)l.push("..");return(l=l.concat(r.slice(u))).join("/")},o.sep="/",o.delimiter=":",o.dirname=function(e){var o=d(e),s=o[0],n=o[1];return s||n?(n&&(n=n.substr(0,n.length-1)),s+n):"."},o.basename=function(e,o){var s=d(e)[2];return o&&s.substr(-1*o.length)===o&&(s=s.substr(0,s.length-o.length)),s},o.extname=function(e){return d(e)[3]};var t="b"==="ab".substr(-1)?function(e,o,s){return e.substr(o,s)}:function(e,o,s){return o<0&&(o=e.length+o),e.substr(o,s)}}).call(this,s("./node_modules/process/browser.js"))},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,o,s){"use strict";var n=s("./node_modules/fbjs/lib/emptyFunction.js"),d=s("./node_modules/fbjs/lib/invariant.js");e.exports=function(){function e(){d(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function o(){return e}e.isRequired=e;var s={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o};return s.checkPropTypes=n,s.PropTypes=s,s}},"./node_modules/prop-types/index.js":function(e,o,s){e.exports=s("./node_modules/prop-types/factoryWithThrowingShims.js")()}}]);
//# sourceMappingURL=vendors~Governance~ProductionClient~Reddit.cb9fecf88678fcfcae25.js.map