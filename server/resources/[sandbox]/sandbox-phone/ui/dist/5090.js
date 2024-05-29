"use strict";(self.webpackChunksandbox_phone=self.webpackChunksandbox_phone||[]).push([[5090,6051,6422],{86422:(e,t,n)=>{n.r(t),n.d(t,{DeleteEmail:()=>u,GPSRoute:()=>s,Hyperlink:()=>p,ReadEmail:()=>c});var r=n(69042);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){return function(t){r.Z.send("ReadEmail",e.id).then((function(n){t({type:"UPDATE_DATA",payload:{type:"emails",id:e.id,data:o(o({},e),{},{unread:!1})}})})).catch((function(e){}))}},u=function(e){return function(t){r.Z.send("DeleteEmail",e).then((function(){return t({type:"REMOVE_DATA",payload:{type:"emails",id:e}}),!0})).catch((function(e){return!1}))}},s=function(e,t){return function(n){r.Z.send("GPSRoute",{id:e,location:t}).then((function(e){n({type:"ALERT_SHOW",payload:{alert:"GPS Marked"}})})).catch((function(e){n({type:"ALERT_SHOW",payload:{alert:"Unable To Mark Location On GPS"}})}))}},p=function(e,t){return function(n){r.Z.send("Hyperlink",{id:e,hyperlink:t}).catch((function(e){n({type:"ALERT_SHOW",payload:{alert:"Unable To Open Hyperlink"}})}))}}},56051:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(67294),a=n(86706),i=n(89250),o=n(52141),l=(n(64680),n(15725),n(67109),n(94235)),c=n(94803),u=n.n(c),s=n(67814),p=n(86422),d=n(68174),f=(0,l.Z)((function(e){return{email:{display:"flex",flexDirection:"row",padding:"16px 8px",borderBottom:"1px solid ".concat(e.palette.border.divider),transition:"background ease-in 0.15s","&:hover":{background:e.palette.secondary.dark,cursor:"pointer"}},flags:{display:"flex",flexDirection:"column",padding:"8px 8px 8px 0px",gap:8},readIndicator:{fontSize:14,color:e.palette.text.alt,"&.unread":{color:function(e){return e.color}}},expireIndicator:{fontSize:12,color:e.palette.error.light},flagIndicator:{fontSize:14,color:e.palette.warning.main},details:{maxWidth:"calc(100% - 22px)",flexGrow:1},senderContainer:{display:"flex"},sender:{flexGrow:1,maxWidth:"70%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:18,color:function(e){return e.color}},timestamp:{textAlign:"right",fontSize:10,color:e.palette.text.alt,width:"30%",lineHeight:"26px"},subject:{fontSize:14,color:e.palette.text.main,width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}}));const m=(0,a.$j)(null,{DeleteEmail:p.DeleteEmail})((function(e){var t=e.email,n=e.DeleteEmail,a=(0,d.Ov)("email"),l=f(a),c=(0,i.s0)(),p=function(){c("/apps/email/view/".concat(t.id))};return(0,r.useEffect)((function(){var e=null;return Boolean(t.expires)&&(e=setInterval((function(){t.expires<Date.now()/1e3&&n(t.id)}),2500)),function(){clearInterval(e)}}),[]),r.createElement("div",{className:l.email,onClick:p},r.createElement("div",{className:l.flags},r.createElement(o.Z,{placement:"right",title:Boolean(t.unread)?"Email Is Unread":"Email Has Been Read"},r.createElement(s.G,{icon:["fas","circle"],className:"".concat(l.readIndicator," ").concat(Boolean(t.unread)?"unread":"")})),Boolean(null==t?void 0:t.expires)&&t.expires>Date.now()/1e3&&r.createElement(o.Z,{title:"Email Expires Soon",placement:"right"},r.createElement(s.G,{icon:["far","hexagon-exclamation"],className:l.expireIndicator})),Boolean(t.flags)&&r.createElement(o.Z,{title:"Email Has Additional Flags",placement:"right"},r.createElement(s.G,{icon:["far","flag"],className:l.flagIndicator}))),r.createElement("div",{className:l.details},r.createElement("div",{className:l.senderContainer},r.createElement("div",{className:l.sender},t.sender),r.createElement("div",{className:l.timestamp},r.createElement(u(),{unix:!0,interval:6e4,fromNow:!0,date:t.time}))),r.createElement("div",{className:l.subject},t.subject)))}))},15090:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),a=n(86706),i=n(94235),o=n(45525),l=n(56051),c=(0,i.Z)((function(e){return{emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const u=function(e){var t=c(),n=(0,a.v9)((function(e){return e.data.data.emails.filter((function(e){return!Boolean(e.expires)||e.expires>Date.now()/1e3}))}));return r.createElement(o.zj,{appId:"email"},n.length>0?n.sort((function(e,t){return t.time-e.time})).map((function(e,t){return r.createElement(l.default,{key:"email-".concat(t),email:e})})):r.createElement("div",{className:t.emptyMsg},"You Have No Emails"))}}}]);