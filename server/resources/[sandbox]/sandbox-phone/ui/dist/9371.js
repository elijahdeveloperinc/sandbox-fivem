"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[9371],{9371:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var n=r(67294),o=r(86706),a=r(89250),i=r(94659),c=r(67109),l=r(6867),u=r(67927),s=r(5305),f=r(64680),p=r(94235),d=r(61366),h=r(67814),m=r(74855),v=r(22004),y=r(94803),g=r.n(y),b=r(79655),x=r(96486),w=r(58533),E=r(60696),k=r(68174),C=r(69042),S=r(45525);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function d(){}function h(){}var m={};l(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,a)&&(m=y);var g=h.prototype=p.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function o(n,a,i,c){var l=s(e[n],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==O(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function E(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function T(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function D(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){T(a,n,o,i,c,"next",e)}function c(e){T(a,n,o,i,c,"throw",e)}i(void 0)}))}}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M=r(75934),R=(0,p.Z)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,overflow:"hidden"},header:{background:function(e){return Boolean(e.isContact)?e.isContact.color:e.color},fontSize:20,padding:15,lineHeight:"45px"},avatar:{color:"#fff",height:45,width:45,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto"},avatarFav:{color:"#fff",height:45,width:45,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",border:"2px solid gold"},messageAction:{textAlign:"center","&:hover":{color:e.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,flexGrow:1,overflow:"auto",display:"flex",flexDirection:"column-reverse","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},inputContainer:{display:"flex",padding:15},input:{flexGrow:1,"& .MuiInputBase-root":{borderRadius:30}},sendBtn:{height:56,width:56,marginLeft:15,transition:"color ease-in 0.15s","&:hover":{color:function(e){return Boolean(e.contact)?e.contact.color:e.color}}},submitBtnDisabled:{height:"100%",fontSize:30,textAlign:"center",borderBottom:"1px solid rgba(255, 255, 255, 0.7)",filter:"brightness(0.25)"},submitIcon:{display:"block",margin:"auto",height:"100%",width:"40%"},textWrap:{width:"100%",fontSize:16,margin:"20px 0px",padding:"0 10px",color:e.palette.text.light,"&:first-of-type":{marginTop:0}},myText:{marginLeft:"auto",width:"fit-content",maxWidth:"75%",padding:15,borderRadius:15,background:e.palette.secondary.dark,overflowWrap:"break-word",hyphens:"auto"},otherText:{marginRight:"auto",width:"fit-content",maxWidth:"75%",padding:15,borderRadius:15,background:function(e){return Boolean(e.contact)?e.contact.color:e.color},overflowWrap:"break-word",hyphens:"auto"},timestamp:{color:e.palette.text.main,fontSize:12,padding:"5px 5px 0px 5px"},messageImg:{display:"block",maxWidth:200},copyableText:{color:e.palette.primary.main,textDecoration:"underline","&:hover":{transition:"color ease-in 0.15s",color:e.palette.text.main,cursor:"pointer"}},avatarContainer:{width:60,position:"relative",marginRight:8},inner:{height:"100%",display:"flex",flexDirection:"column"}}})),B=(0,d.Z)((function(e){return{root:{"& label.Mui-focused":{color:function(e){var t=e.app,r=e.contact;return Boolean(r)?r.color:t.color}},"& .MuiInput-underline:after":{borderBottomColor:function(e){var t=e.app,r=e.contact;return Boolean(r)?r.color:t.color}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:function(e){var t=e.app,r=e.contact;return Boolean(r)?r.color:t.color}}}}}}))(i.Z);const G=(0,o.$j)(null,{SendMessage:E.SendMessage,DeleteConvo:E.DeleteConvo,ReadConvo:E.ReadConvo})((function(e){var t,r,i,p,d=(0,k.Ov)("messages"),y=(0,k.VY)(),E=(0,a.s0)(),O=(0,a.UO)(),T=(0,o.I0)(),N=O.number,P=null===(t=(0,o.v9)((function(e){return e.messages.threads})))||void 0===t?void 0:t.filter((function(e){return e.number==N}))[0],_=null===(r=(0,o.v9)((function(e){return e.data.data.contacts})))||void 0===r?void 0:r.filter((function(e){return e.number===N}))[0],I=R(Z(Z({},d),{},{contact:_})),G=((0,o.v9)((function(e){return e.data.data.messages})),(0,o.v9)((function(e){return e.data.data.player}))),F=(0,o.v9)((function(e){return e.call.call})),z=(0,n.useRef)(),W=A((0,n.useState)([]),2),U=W[0],$=W[1],H=(0,n.useMemo)((function(){return(0,x.throttle)(D(L().mark((function e(){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y){e.next=2;break}return e.abrupt("return");case 2:X(!0);try{C.Z.send("ReadConvo",N),T({type:"MESSAGES_CLEAR_UNREAD",payload:{number:N}})}catch(e){console.error(e)}X(!1);case 5:case"end":return e.stop()}}),e)}))),2e3)}),[]);(0,n.useEffect)((function(){H()}),[N]);var V=A((0,n.useState)(!1),2),Y=V[0],X=V[1],q=A((0,n.useState)(!1),2),J=q[0],K=q[1],Q=A((0,n.useState)({left:110,top:0}),2),ee=Q[0],te=Q[1],re=function(){K(!1)},ne=function(){var e=D(L().mark((function e(){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=F){e.next=14;break}return e.prev=1,e.next=4,C.Z.send("CreateCall",{number:N,isAnon:!1});case 4:return e.next=6,e.sent.json();case 6:e.sent?E("/apps/phone/call/".concat(N)):y("Unable To Start Call"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),y("Unable To Start Call");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=D(L().mark((function e(){var t;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Z.send("DeleteConvo",N);case 3:return e.next=5,e.sent.json();case 5:t=e.sent,Boolean(t)?(T({type:"REMOVE_THREAD",payload:{number:N}}),y("Conversation Deleted"),E("/apps/messages",{replace:!0})):y("Failed Deleting Conversation"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),y("Error Deleting Conversation");case 13:re();case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ae=(0,n.useMemo)((function(){return(0,x.throttle)(function(){var e=D(L().mark((function e(t,r,n){var o;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.Z.send("SendMessage",r);case 3:return e.next=5,e.sent.json();case 5:if(o=e.sent,!Boolean(o)){e.next=12;break}return $([].concat(j(U),[Z(Z({},r),{},{time:r.time})])),T(n?{type:"ADD_THREAD",payload:{thread:{id:o,owner:G.Phone,number:N,type:1,time:r.time,message:r.message,unread:0,count:1}}}:{type:"UPDATE_THREAD",payload:{thread:Z(Z({},P),{},{type:1,time:r.time,message:r.message})}}),e.abrupt("return",!0);case 12:return e.abrupt("return",!1);case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,r,n){return e.apply(this,arguments)}}(),1e3)}),[U]),ie=(0,x.throttle)((function(e){""!==e.target.text.value&&(ae(U,{owner:G.Phone,number:N,method:1,time:Date.now()/1e3,message:e.target.text.value},!Boolean(P)),z.current.reset())}),3e3),ce=[{regex:/^https?:\/\/(\w+\.)?imgur.com\/(\w*\d\w*)+(\.[a-zA-Z]{3})?$/gim,fn:function(e,t){return n.createElement(m.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return y("Link Copied To Clipboard")}},n.createElement("img",{key:e,className:I.messageImg,src:t[0]}))}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,fn:function(e,t){return n.createElement("div",null,n.createElement(v.Z,{key:e,volume:.25,width:"100%",controls:!0,url:"".concat(t[0])}))}},{regex:/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return n.createElement(m.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return y("Link Copied To Clipboard")}},n.createElement("a",{className:I.copyableText},t.input))}},{regex:/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,fn:function(e,t){return n.createElement(m.CopyToClipboard,{text:t[0],key:e,onCopy:function(){return y("Link Copied To Clipboard")}},n.createElement("a",{className:I.copyableText},t.input))}},{regex:/ircinvite=(\d)+/gim,fn:function(e,t){return n.createElement(b.rU,{key:e,className:I.copyableText,to:"/apps/irc/join/".concat(t[0].split("=")[1])},"IRC Invite: ",t[0].split("=")[1])}}],le=function(){var e=D(L().mark((function e(){var t,r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,C.Z.send("Messages:LoadTexts",{number:N,offset:null!==(t=null==U?void 0:U.length)&&void 0!==t?t:0});case 5:return e.next=7,e.sent.json();case 7:if(!(r=e.sent)){e.next=12;break}$([].concat(j(U),j(r))),e.next=13;break;case 12:throw r;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.error(e.t0);case 18:X(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){le()}),[N]),n.createElement(S.hX,{event:"RECEIVED_NEW_MESSAGE",onEvent:function(e){$([].concat(j(U),[Z(Z({},e),{},{time:e.time})])),H()},state:U},n.createElement(S.zj,{appId:"messages",colorOverride:!!Boolean(_)&&_.color,titleOverride:Boolean(_)?n.createElement("div",{style:{display:"flex"}},n.createElement("div",{className:I.avatarContainer},null!=_.avatar&&""!==_.avatar?n.createElement(c.Z,{className:_.favorite?I.avatarFav:I.avatar,src:_.avatar,alt:_.name.charAt(0)}):n.createElement(c.Z,{className:_.favorite?I.avatarFav:I.avatar,style:{background:_.color}},_.name.charAt(0))),_.name):N,actions:n.createElement(n.Fragment,null,n.createElement(l.Z,{onClick:ne},n.createElement(h.G,{icon:"phone"})),n.createElement(l.Z,{onClick:function(e){e.preventDefault(),te({left:e.clientX-2,top:e.clientY-4}),K(!0)}},n.createElement(h.G,{icon:"ellipsis-vertical"})))},n.createElement(u.Z,{anchorReference:"anchorPosition",anchorPosition:ee,keepMounted:!0,open:J,onClose:re},n.createElement(s.Z,{onClick:function(){E(null!=_?"/apps/contacts/view/".concat(_.id):"/apps/contacts/caller/".concat(N))}},null!=_?"View Contact":"Create Contact"),n.createElement(s.Z,{onClick:oe},"Delete Conversation")),n.createElement("div",{className:I.inner},n.createElement("div",{className:I.body,id:"scrollableDiv"},n.createElement(w.Z,{dataLength:U.length,next:le,style:{display:"flex",flexDirection:"column-reverse"},inverse:!0,hasMore:(null!==(i=null==U?void 0:U.length)&&void 0!==i?i:0)<(null!==(p=null==P?void 0:P.count)&&void 0!==p?p:0),loader:n.createElement("h4",null,"Loading..."),scrollableTarget:"scrollableDiv"},U.sort((function(e,t){return t.time-e.time})).map((function(e,t){return n.createElement("div",{key:t,className:I.textWrap},n.createElement(f.Z,{className:1===(null==e?void 0:e.method)?I.myText:I.otherText},M(ce)(e.message)),n.createElement("div",{className:I.timestamp,style:{textAlign:1===(null==e?void 0:e.method)?"right":"left"}},n.createElement(g(),{unix:!0,fromNow:!0,titleFormat:"L LT",withTitle:!0,date:e.time})))})))),n.createElement("form",{className:I.inputContainer,ref:z,onSubmit:function(e){e.preventDefault(),ie(e)}},n.createElement(B,{app:d,contact:_,label:"Send Message",name:"text",color:"primary",className:I.input,inputProps:{maxLength:256}}),n.createElement(l.Z,{type:"submit",className:I.sendBtn},n.createElement(h.G,{icon:"send"}))))))}))}}]);