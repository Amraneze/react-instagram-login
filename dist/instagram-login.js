!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InstagramLogin=t(require("react")):e.InstagramLogin=t(e.react)}(self,(function(e){return(()=>{var t={428:(e,t,r)=>{"use strict";var n=r(134);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,c){if(c!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},526:(e,t,r)=>{e.exports=r(428)()},134:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},230:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(297),o=r.n(n);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return e.location.search.substring(1).split("&").map((function(e){var r=e.split("=");return r[0]===t?r[1]:null})).filter((function(e){return!!e}))[0]}r(526);var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,r,n,i,c=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(n);if(i){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={hover:!1},t.onBtnClick=t.onBtnClick.bind(f(t)),t}return t=u,(r=[{key:"componentDidMount",value:function(){this.checkInstagramAuthentication(window)}},{key:"onBtnClick",value:function(){var e=this.props,t=e.clientId,r=e.scope,n=this.props.redirectUri||window.location.href,o=this.props.implicitAuth?"token":"code",i="https://api.instagram.com/oauth/authorize?client_id=".concat(t,"&redirect_uri=").concat(n,"&response_type=").concat(o,"&scope=").concat(r);this.props.useRedirect?window.location.href=i:this.oAuthSignIn({url:i})}},{key:"onCredentialsChanged",value:function(e,t,r){var n,o=this;if(!t)return new Promise((function(t,r){return o.onCredentialsChanged(e,t,r)}));try{n=this.checkInstagramAuthentication(e)}catch(e){}n?e.close():e.closed?this.props.onFailure({error:"closed",error_reason:"oauth_canceled",error_description:"User canceled the authentication"}):setTimeout((function(){return o.onCredentialsChanged(e,t,r)}),0)}},{key:"oAuthSignIn",value:function(e){var t=e.url,r=e.tab,n=void 0!==r&&r?"_blank":"instagram",o=this.props,i=function(e){var t=e.width,r=e.height,n=e.url,o=e.name;return window.open(n,o,"".concat("scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no",",").concat(function(e){var t=e.width,r=e.height,n=function(e){var t=e.width,r=e.height,n=window.screenLeft?window.screenLeft:window.screenX,o=window.screenTop?window.screenTop:window.screenY,i=n+window.innerWidth/2-t/2;return{top:o+window.innerHeight/2-r/2,left:i}}({width:t,height:r}),o=n.top,i=n.left;return"width=".concat(t,",height=").concat(r,",top=").concat(o,",left=").concat(i)}({width:t,height:r})))}({url:t,name:n,width:o.width,height:o.height});this.onCredentialsChanged(i)}},{key:"checkInstagramAuthentication",value:function(e){if(this.props.implicitAuth){var t=e.location.hash.match(/=(.*)/);if(t)return this.props.onSuccess(t[1]),!0}else{if(e.location.search.includes("code"))return this.props.onSuccess(d(e,"code")),!0;if(e.location.search.includes("error"))return this.props.onFailure({error:d(e,"error"),error_reason:d(e,"error_reason"),error_description:d(e,"error_description")}),!0}return!1}},{key:"render",value:function(){var e=this,t={display:"block",border:0,borderRadius:3,boxShadow:"rgba(0, 0, 0, 0.5) 0 1px 2px",color:"#ffffff",cursor:"pointer",fontSize:"19px",overflow:"hidden",padding:"10px",userSelect:"none",background:"linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)",hover:{background:"linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)"}},r=this.state.hover,n=this.props,i=n.cssClass,c=n.buttonText,u=n.children,s=n.tag,p=n.type,l=n.render;return l?l({onClick:this.onBtnClick}):o().createElement(s,{className:i,onClick:this.onBtnClick,onMouseEnter:function(){e.setState({hover:!0})},onMouseLeave:function(){e.setState({hover:!1})},style:i?{}:a(a({},t),r?t.hover:null),type:p},u||c)}}])&&s(t.prototype,r),u}(n.Component);y.defaultProps={buttonText:"Login with Instagram",scope:"instagram_graph_user_media",tag:"button",type:"button",implicitAuth:!1,useRedirect:!1,width:400,height:800};const b=y},297:t=>{"use strict";t.exports=e}},r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(230)})()}));