"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["tmp_extension3701389611_SwagPayPal_src_Resources_app_storefront_src_swag-paypal_pui-polling_js"],{857:t=>{var e=function(t){var e;return!!t&&"object"==typeof t&&"[object RegExp]"!==(e=Object.prototype.toString.call(t))&&"[object Date]"!==e&&t.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a(Array.isArray(t)?[]:{},t,e):t}function i(t,e,r){return t.concat(e).map(function(t){return n(t,r)})}function s(t){return Object.keys(t).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[])}function o(t,e){try{return e in t}catch(t){return!1}}function a(t,r,l){(l=l||{}).arrayMerge=l.arrayMerge||i,l.isMergeableObject=l.isMergeableObject||e,l.cloneUnlessOtherwiseSpecified=n;var c,u,h=Array.isArray(r);return h!==Array.isArray(t)?n(r,l):h?l.arrayMerge(t,r,l):(u={},(c=l).isMergeableObject(t)&&s(t).forEach(function(e){u[e]=n(t[e],c)}),s(r).forEach(function(e){(!o(t,e)||Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))&&(o(t,e)&&c.isMergeableObject(r[e])?u[e]=(function(t,e){if(!e.customMerge)return a;var r=e.customMerge(t);return"function"==typeof r?r:a})(e,c)(t[e],r[e],c):u[e]=n(r[e],c))}),u)}a.all=function(t,e){if(!Array.isArray(t))throw Error("first argument should be an array");return t.reduce(function(t,r){return a(t,r,e)},{})},t.exports=a},49:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(140);class i{static isNode(t){return"object"==typeof t&&null!==t&&(t===document||t===window||t instanceof Node)}static hasAttribute(t,e){if(!i.isNode(t))throw Error("The element must be a valid HTML Node!");return"function"==typeof t.hasAttribute&&t.hasAttribute(e)}static getAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!1===i.hasAttribute(t,e))throw Error('The required property "'.concat(e,'" does not exist!'));if("function"!=typeof t.getAttribute){if(r)throw Error("This node doesn't support the getAttribute function!");return}return t.getAttribute(e)}static getDataAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=e.replace(/^data(|-)/,""),o=n.Z.toLowerCamelCase(s,"-");if(!i.isNode(t)){if(r)throw Error("The passed node is not a valid HTML Node!");return}if(void 0===t.dataset){if(r)throw Error("This node doesn't support the dataset attribute!");return}let a=t.dataset[o];if(void 0===a){if(r)throw Error('The required data attribute "'.concat(e,'" does not exist on ').concat(t,"!"));return a}return n.Z.parsePrimitive(a)}static querySelector(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!i.isNode(t))throw Error("The parent node is not a valid HTML Node!");let n=t.querySelector(e)||!1;if(r&&!1===n)throw Error('The required element "'.concat(e,'" does not exist in parent node!'));return n}static querySelectorAll(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!i.isNode(t))throw Error("The parent node is not a valid HTML Node!");let n=t.querySelectorAll(e);if(0===n.length&&(n=!1),r&&!1===n)throw Error('At least one item of "'.concat(e,'" must exist in parent node!'));return n}}},266:(t,e,r)=>{r.d(e,{Z:()=>n});class n{static iterate(t,e){if(t instanceof Map||Array.isArray(t))return t.forEach(e);if(t instanceof FormData){for(var r of t.entries())e(r[1],r[0]);return}if(t instanceof NodeList)return t.forEach(e);if(t instanceof HTMLCollection)return Array.from(t).forEach(e);if(t instanceof Object)return Object.keys(t).forEach(r=>{e(t[r],r)});throw Error("The element type ".concat(typeof t," is not iterable!"))}}},140:(t,e,r)=>{r.d(e,{Z:()=>n});class n{static ucFirst(t){return t.charAt(0).toUpperCase()+t.slice(1)}static lcFirst(t){return t.charAt(0).toLowerCase()+t.slice(1)}static toDashCase(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()}static toLowerCamelCase(t,e){let r=n.toUpperCamelCase(t,e);return n.lcFirst(r)}static toUpperCamelCase(t,e){return e?t.split(e).map(t=>n.ucFirst(t.toLowerCase())).join(""):n.ucFirst(t.toLowerCase())}static parsePrimitive(t){try{return/^\d+(.|,)\d+$/.test(t)&&(t=t.replace(",",".")),JSON.parse(t)}catch(e){return t.toString()}}}},293:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(857),i=r.n(n),s=r(49),o=r(140);class a{publish(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new CustomEvent(t,{detail:e,cancelable:r});return this.el.dispatchEvent(n),n}subscribe(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this,i=t.split("."),s=r.scope?e.bind(r.scope):e;if(r.once&&!0===r.once){let e=s;s=function(r){n.unsubscribe(t),e(r)}}return this.el.addEventListener(i[0],s),this.listeners.push({splitEventName:i,opts:r,cb:s}),!0}unsubscribe(t){let e=t.split(".");return this.listeners=this.listeners.reduce((t,r)=>([...r.splitEventName].sort().toString()===e.sort().toString()?this.el.removeEventListener(r.splitEventName[0],r.cb):t.push(r),t),[]),!0}reset(){return this.listeners.forEach(t=>{this.el.removeEventListener(t.splitEventName[0],t.cb)}),this.listeners=[],!0}get el(){return this._el}set el(t){this._el=t}get listeners(){return this._listeners}set listeners(t){this._listeners=t}constructor(t=document){this._el=t,t.$emitter=this,this._listeners=[]}}class l{init(){throw Error('The "init" method for the plugin "'.concat(this._pluginName,'" is not defined.'))}update(){}_init(){this._initialized||(this.init(),this._initialized=!0)}_update(){this._initialized&&this.update()}_mergeOptions(t){let e=o.Z.toDashCase(this._pluginName),r=s.Z.getDataAttribute(this.el,"data-".concat(e,"-config"),!1),n=s.Z.getAttribute(this.el,"data-".concat(e,"-options"),!1),a=[this.constructor.options,this.options,t];r&&a.push(window.PluginConfigManager.get(this._pluginName,r));try{n&&a.push(JSON.parse(n))}catch(t){throw console.error(this.el),Error('The data attribute "data-'.concat(e,'-options" could not be parsed to json: ').concat(t.message))}return i().all(a.filter(t=>t instanceof Object&&!(t instanceof Array)).map(t=>t||{}))}_registerInstance(){window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName,this),window.PluginManager.getPlugin(this._pluginName,!1).get("instances").push(this)}_getPluginName(t){return t||(t=this.constructor.name),t}constructor(t,e={},r=!1){if(!s.Z.isNode(t))throw Error("There is no valid element given.");this.el=t,this.$emitter=new a(this.el),this._pluginName=this._getPluginName(r),this.options=this._mergeOptions(e),this._initialized=!1,this._registerInstance(),this._init()}}},107:(t,e,r)=>{r.d(e,{Z:()=>n});class n{get(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",n=this._createPreparedRequest("GET",t,r);return this._sendRequest(n,null,e)}post(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(e,n);let i=this._createPreparedRequest("POST",t,n);return this._sendRequest(i,e,r)}delete(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(e,n);let i=this._createPreparedRequest("DELETE",t,n);return this._sendRequest(i,e,r)}patch(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(e,n);let i=this._createPreparedRequest("PATCH",t,n);return this._sendRequest(i,e,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(t){this._errorHandlingInternal=t}_registerOnLoaded(t,e){e&&(!0===this._errorHandlingInternal?(t.addEventListener("load",()=>{e(t.responseText,t)}),t.addEventListener("abort",()=>{console.warn("the request to ".concat(t.responseURL," was aborted"))}),t.addEventListener("error",()=>{console.warn("the request to ".concat(t.responseURL," failed with status ").concat(t.status))}),t.addEventListener("timeout",()=>{console.warn("the request to ".concat(t.responseURL," timed out"))})):t.addEventListener("loadend",()=>{e(t.responseText,t)}))}_sendRequest(t,e,r){return this._registerOnLoaded(t,r),t.send(e),t}_getContentType(t,e){return t instanceof FormData&&(e=!1),e}_createPreparedRequest(t,e,r){return this._request=new XMLHttpRequest,this._request.open(t,e),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},363:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(266);let i="loader",s={BEFORE:"before",INNER:"inner"};class o{create(){if(!this.exists()){if(this.position===s.INNER){this.parent.innerHTML=o.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),o.getTemplate())}}remove(){let t=this.parent.querySelectorAll(".".concat(i));n.Z.iterate(t,t=>t.remove())}exists(){return this.parent.querySelectorAll(".".concat(i)).length>0}_getPosition(){return this.position===s.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(i,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return i}constructor(t,e=s.BEFORE){this.parent=t instanceof Element?t:document.body.querySelector(t),this.position=e}}},831:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var n=r(293),i=r(107),s=r(363);class o extends n.Z{init(){new s.Z(this.el).create(),this._client=new i.Z,this.poll()}poll(){this._client.get(this.options.pollingUrl,this.onPollingResult.bind(this))}onPollingResult(t,e){if(417===e.status){this.retryPolling();return}if(e.status>=400){window.location=this.options.errorUrl;return}window.location=this.options.successUrl}retryPolling(){setTimeout(this.poll.bind(this),this.options.pollingInterval)}}o.options={pollingUrl:"",successUrl:"",errorUrl:"",paymentInstructions:null,pollingInterval:2e3}}}]);