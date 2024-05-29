"use strict";(self.webpackChunksandbox_laptop=self.webpackChunksandbox_laptop||[]).push([[5666,1445,4095,6484,5171,2717,6848,2770,4856,6529,1474,3437],{43437:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(89526),a=n(23121),o=n(90897),l=n(55100),i=n(74484),u=n(72619),s=n(24963);n(92070);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,l,i=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,a=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=(0,i.Z)((function(e){return{editorField:{marginBottom:10}}})),v=[{value:"full",label:"Cash"},{value:"loan",label:"Loan"}];const g=function(e){var t=e.open,n=e.property,i=e.onSubmit,c=e.interest,m=void 0===c?15:c,b=(e.dealerData,e.onClose),g=y(),h={type:"loan",SID:"",weeks:8,downpayment:50},w=f((0,r.useState)(d({},h)),2),S=w[0],Z=w[1],E=function(e){Z(d(d({},S),{},p({},e.target.name,e.target.value)))},O=null==n?void 0:n.price,P=.05*O,j=O*(S.downpayment/100),L=(O-j)*(1+m/100),C=L/S.weeks;return r.createElement(s.u_,{open:t,maxWidth:"md",title:"Sell ".concat(null==n?void 0:n.label),submitLang:"Confirm Sale",onSubmit:function(e){e.preventDefault(),i(S),Z(d({},h))},onClose:b},r.createElement("p",null,"Property: ",null==n?void 0:n.label),"loan"==S.type?r.createElement(r.Fragment,null,r.createElement("p",null,"Loan Interest Rate: ",m,"%"),r.createElement("p",null,"Downpayment: ",u.A3.format(Math.ceil(j))," (",S.downpayment,"%)"),r.createElement("p",null,"Remaining Cost (Interest Applied): ",u.A3.format(Math.ceil(L))),r.createElement("p",null,"Loan Length in Weeks: ",S.weeks),r.createElement("p",null,"Weekly Payment: ",u.A3.format(Math.ceil(C))),r.createElement("p",null,"Your Earned Commission: ",u.A3.format(Math.ceil(P)))):r.createElement(r.Fragment,null,r.createElement("p",null,"Cost: ",u.A3.format(Math.ceil(O)))),r.createElement("br",null),r.createElement(a.Z,{required:!0,select:!0,fullWidth:!0,name:"type",label:"Type",className:g.editorField,value:S.type,onChange:E},v.map((function(e){return r.createElement(o.Z,{key:e.value,value:e.value},e.label)}))),"loan"==S.type&&r.createElement(r.Fragment,null,r.createElement("p",null,"Downpayment ",S.downpayment,"% (",u.A3.format(Math.ceil(j)),")"),r.createElement(l.ZP,{size:"small",value:S.downpayment,name:"downpayment",min:15,max:80,step:5,valueLabelDisplay:"auto",onChange:E}),r.createElement("p",null,"Loan Length (",S.weeks," Weeks)"),r.createElement(l.ZP,{size:"small",value:S.weeks,name:"weeks",min:8,max:24,step:1,valueLabelDisplay:"auto",onChange:E})),r.createElement(a.Z,{required:!0,fullWidth:!0,name:"SID",label:"Customer State ID",className:g.editorField,value:S.SID,onChange:E}))}},74534:(e,t,n)=>{n.d(t,{Z:()=>l,f:()=>o});var r=n(67402),a=n(59690);function o(e){return(0,a.Z)("MuiListItemIcon",e)}const l=(0,r.Z)("MuiListItemIcon",["root","alignItemsFlexStart"])},37148:(e,t,n)=>{n.d(t,{L:()=>o,Z:()=>l});var r=n(67402),a=n(59690);function o(e){return(0,a.Z)("MuiListItemText",e)}const l=(0,r.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},81445:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(71972),a=n(17692),o=n(89526),l=n(23060),i=n(13957),u=n(23318),s=n(90265),c=n(27511),m=n(67402),d=n(59690);function p(e){return(0,d.Z)("MuiList",e)}(0,m.Z)("MuiList",["root","padding","dense","subheader"]);var f=n(67557);const b=["children","className","component","dense","disablePadding","subheader"],y=(0,u.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((({ownerState:e})=>(0,a.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),v=o.forwardRef((function(e,t){const n=(0,s.Z)({props:e,name:"MuiList"}),{children:u,className:m,component:d="ul",dense:v=!1,disablePadding:g=!1,subheader:h}=n,w=(0,r.Z)(n,b),S=o.useMemo((()=>({dense:v})),[v]),Z=(0,a.Z)({},n,{component:d,dense:v,disablePadding:g}),E=(e=>{const{classes:t,disablePadding:n,dense:r,subheader:a}=e,o={root:["root",!n&&"padding",r&&"dense",a&&"subheader"]};return(0,i.Z)(o,p,t)})(Z);return(0,f.jsx)(c.Z.Provider,{value:S,children:(0,f.jsxs)(y,(0,a.Z)({as:d,className:(0,l.default)(E.root,m),ref:t,ownerState:Z},w,{children:[h,u]}))})}))},27511:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(89526).createContext({})},49572:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(89526);const a=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},63830:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(2785).Z}}]);