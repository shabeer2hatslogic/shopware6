"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["tmp_extension3701389611_SwagPayPal_src_Resources_app_storefront_src_checkout_swag-paypal_smar-e37190"],{857:t=>{var e=function(t){var e;return!!t&&"object"==typeof t&&"[object RegExp]"!==(e=Object.prototype.toString.call(t))&&"[object Date]"!==e&&t.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a(Array.isArray(t)?[]:{},t,e):t}function n(t,e,r){return t.concat(e).map(function(t){return i(t,r)})}function o(t){return Object.keys(t).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[])}function s(t,e){try{return e in t}catch(t){return!1}}function a(t,r,c){(c=c||{}).arrayMerge=c.arrayMerge||n,c.isMergeableObject=c.isMergeableObject||e,c.cloneUnlessOtherwiseSpecified=i;var l,d,u=Array.isArray(r);return u!==Array.isArray(t)?i(r,c):u?c.arrayMerge(t,r,c):(d={},(l=c).isMergeableObject(t)&&o(t).forEach(function(e){d[e]=i(t[e],l)}),o(r).forEach(function(e){(!s(t,e)||Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))&&(s(t,e)&&l.isMergeableObject(r[e])?d[e]=(function(t,e){if(!e.customMerge)return a;var r=e.customMerge(t);return"function"==typeof r?r:a})(e,l)(t[e],r[e],l):d[e]=i(r[e],l))}),d)}a.all=function(t,e){if(!Array.isArray(t))throw Error("first argument should be an array");return t.reduce(function(t,r){return a(t,r,e)},{})},t.exports=a},49:(t,e,r)=>{r.d(e,{Z:()=>n});var i=r(140);class n{static isNode(t){return"object"==typeof t&&null!==t&&(t===document||t===window||t instanceof Node)}static hasAttribute(t,e){if(!n.isNode(t))throw Error("The element must be a valid HTML Node!");return"function"==typeof t.hasAttribute&&t.hasAttribute(e)}static getAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!1===n.hasAttribute(t,e))throw Error('The required property "'.concat(e,'" does not exist!'));if("function"!=typeof t.getAttribute){if(r)throw Error("This node doesn't support the getAttribute function!");return}return t.getAttribute(e)}static getDataAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=e.replace(/^data(|-)/,""),s=i.Z.toLowerCamelCase(o,"-");if(!n.isNode(t)){if(r)throw Error("The passed node is not a valid HTML Node!");return}if(void 0===t.dataset){if(r)throw Error("This node doesn't support the dataset attribute!");return}let a=t.dataset[s];if(void 0===a){if(r)throw Error('The required data attribute "'.concat(e,'" does not exist on ').concat(t,"!"));return a}return i.Z.parsePrimitive(a)}static querySelector(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!n.isNode(t))throw Error("The parent node is not a valid HTML Node!");let i=t.querySelector(e)||!1;if(r&&!1===i)throw Error('The required element "'.concat(e,'" does not exist in parent node!'));return i}static querySelectorAll(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!n.isNode(t))throw Error("The parent node is not a valid HTML Node!");let i=t.querySelectorAll(e);if(0===i.length&&(i=!1),r&&!1===i)throw Error('At least one item of "'.concat(e,'" must exist in parent node!'));return i}}},266:(t,e,r)=>{r.d(e,{Z:()=>i});class i{static iterate(t,e){if(t instanceof Map||Array.isArray(t))return t.forEach(e);if(t instanceof FormData){for(var r of t.entries())e(r[1],r[0]);return}if(t instanceof NodeList)return t.forEach(e);if(t instanceof HTMLCollection)return Array.from(t).forEach(e);if(t instanceof Object)return Object.keys(t).forEach(r=>{e(t[r],r)});throw Error("The element type ".concat(typeof t," is not iterable!"))}}},140:(t,e,r)=>{r.d(e,{Z:()=>i});class i{static ucFirst(t){return t.charAt(0).toUpperCase()+t.slice(1)}static lcFirst(t){return t.charAt(0).toLowerCase()+t.slice(1)}static toDashCase(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()}static toLowerCamelCase(t,e){let r=i.toUpperCamelCase(t,e);return i.lcFirst(r)}static toUpperCamelCase(t,e){return e?t.split(e).map(t=>i.ucFirst(t.toLowerCase())).join(""):i.ucFirst(t.toLowerCase())}static parsePrimitive(t){try{return/^\d+(.|,)\d+$/.test(t)&&(t=t.replace(",",".")),JSON.parse(t)}catch(e){return t.toString()}}}},293:(t,e,r)=>{r.d(e,{Z:()=>c});var i=r(857),n=r.n(i),o=r(49),s=r(140);class a{publish(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new CustomEvent(t,{detail:e,cancelable:r});return this.el.dispatchEvent(i),i}subscribe(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this,n=t.split("."),o=r.scope?e.bind(r.scope):e;if(r.once&&!0===r.once){let e=o;o=function(r){i.unsubscribe(t),e(r)}}return this.el.addEventListener(n[0],o),this.listeners.push({splitEventName:n,opts:r,cb:o}),!0}unsubscribe(t){let e=t.split(".");return this.listeners=this.listeners.reduce((t,r)=>([...r.splitEventName].sort().toString()===e.sort().toString()?this.el.removeEventListener(r.splitEventName[0],r.cb):t.push(r),t),[]),!0}reset(){return this.listeners.forEach(t=>{this.el.removeEventListener(t.splitEventName[0],t.cb)}),this.listeners=[],!0}get el(){return this._el}set el(t){this._el=t}get listeners(){return this._listeners}set listeners(t){this._listeners=t}constructor(t=document){this._el=t,t.$emitter=this,this._listeners=[]}}class c{init(){throw Error('The "init" method for the plugin "'.concat(this._pluginName,'" is not defined.'))}update(){}_init(){this._initialized||(this.init(),this._initialized=!0)}_update(){this._initialized&&this.update()}_mergeOptions(t){let e=s.Z.toDashCase(this._pluginName),r=o.Z.getDataAttribute(this.el,"data-".concat(e,"-config"),!1),i=o.Z.getAttribute(this.el,"data-".concat(e,"-options"),!1),a=[this.constructor.options,this.options,t];r&&a.push(window.PluginConfigManager.get(this._pluginName,r));try{i&&a.push(JSON.parse(i))}catch(t){throw console.error(this.el),Error('The data attribute "data-'.concat(e,'-options" could not be parsed to json: ').concat(t.message))}return n().all(a.filter(t=>t instanceof Object&&!(t instanceof Array)).map(t=>t||{}))}_registerInstance(){window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName,this),window.PluginManager.getPlugin(this._pluginName,!1).get("instances").push(this)}_getPluginName(t){return t||(t=this.constructor.name),t}constructor(t,e={},r=!1){if(!o.Z.isNode(t))throw Error("There is no valid element given.");this.el=t,this.$emitter=new a(this.el),this._pluginName=this._getPluginName(r),this.options=this._mergeOptions(e),this._initialized=!1,this._registerInstance(),this._init()}}},107:(t,e,r)=>{r.d(e,{Z:()=>i});class i{get(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",i=this._createPreparedRequest("GET",t,r);return this._sendRequest(i,null,e)}post(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(e,i);let n=this._createPreparedRequest("POST",t,i);return this._sendRequest(n,e,r)}delete(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(e,i);let n=this._createPreparedRequest("DELETE",t,i);return this._sendRequest(n,e,r)}patch(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";i=this._getContentType(e,i);let n=this._createPreparedRequest("PATCH",t,i);return this._sendRequest(n,e,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(t){this._errorHandlingInternal=t}_registerOnLoaded(t,e){e&&(!0===this._errorHandlingInternal?(t.addEventListener("load",()=>{e(t.responseText,t)}),t.addEventListener("abort",()=>{console.warn("the request to ".concat(t.responseURL," was aborted"))}),t.addEventListener("error",()=>{console.warn("the request to ".concat(t.responseURL," failed with status ").concat(t.status))}),t.addEventListener("timeout",()=>{console.warn("the request to ".concat(t.responseURL," timed out"))})):t.addEventListener("loadend",()=>{e(t.responseText,t)}))}_sendRequest(t,e,r){return this._registerOnLoaded(t,r),t.send(e),t}_getContentType(t,e){return t instanceof FormData&&(e=!1),e}_createPreparedRequest(t,e,r){return this._request=new XMLHttpRequest,this._request.open(t,e),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},471:(t,e,r)=>{r.d(e,{Z:()=>n});var i=r(266);class n{static serialize(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if("FORM"!==t.nodeName){if(e)throw Error("The passed element is not a form!");return{}}return new FormData(t)}static serializeJson(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=n.serialize(t,e);if(0===Object.keys(r).length)return{};let o={};return i.Z.iterate(r,(t,e)=>o[e]=t),o}}},363:(t,e,r)=>{r.d(e,{Z:()=>s});var i=r(266);let n="loader",o={BEFORE:"before",INNER:"inner"};class s{create(){if(!this.exists()){if(this.position===o.INNER){this.parent.innerHTML=s.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),s.getTemplate())}}remove(){let t=this.parent.querySelectorAll(".".concat(n));i.Z.iterate(t,t=>t.remove())}exists(){return this.parent.querySelectorAll(".".concat(n)).length>0}_getPosition(){return this.position===o.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(n,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return n}constructor(t,e=o.BEFORE){this.parent=t instanceof Element?t:document.body.querySelector(t),this.position=e}}},551:(t,e,r)=>{r.d(e,{Z:()=>g});var i=r(363);class n{static isTouchDevice(){return"ontouchstart"in document.documentElement}static isIOSDevice(){return n.isIPhoneDevice()||n.isIPadDevice()}static isNativeWindowsBrowser(){return n.isIEBrowser()||n.isEdgeBrowser()}static isIPhoneDevice(){return!!navigator.userAgent.match(/iPhone/i)}static isIPadDevice(){return!!navigator.userAgent.match(/iPad/i)}static isIEBrowser(){return -1!==navigator.userAgent.toLowerCase().indexOf("msie")||!!navigator.userAgent.match(/Trident.*rv:\d+\./)}static isEdgeBrowser(){return!!navigator.userAgent.match(/Edge\/\d+/i)}static getList(){return{"is-touch":n.isTouchDevice(),"is-ios":n.isIOSDevice(),"is-native-windows":n.isNativeWindowsBrowser(),"is-iphone":n.isIPhoneDevice(),"is-ipad":n.isIPadDevice(),"is-ie":n.isIEBrowser(),"is-edge":n.isEdgeBrowser()}}}var o=r(266);let s="modal-backdrop",a="modal-backdrop-open",c="no-scroll",l={ON_CLICK:"backdrop/onclick"};class d{create(t){this._removeExistingBackdrops(),document.body.insertAdjacentHTML("beforeend",this._getTemplate());let e=document.body.lastChild;document.documentElement.classList.add(c),setTimeout(function(){e.classList.add(a),"function"==typeof t&&t()},75),this._dispatchEvents()}remove(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350,e=this._getBackdrops();o.Z.iterate(e,t=>t.classList.remove(a)),setTimeout(this._removeExistingBackdrops.bind(this),t),document.documentElement.classList.remove(c)}_dispatchEvents(){let t=n.isTouchDevice()?"touchstart":"click";document.addEventListener(t,function(t){t.target.classList.contains(s)&&document.dispatchEvent(new CustomEvent(l.ON_CLICK))})}_getBackdrops(){return document.querySelectorAll(".".concat(s))}_removeExistingBackdrops(){if(!1===this._exists())return;let t=this._getBackdrops();o.Z.iterate(t,t=>t.remove())}_exists(){return document.querySelectorAll(".".concat(s)).length>0}_getTemplate(){return'<div class="'.concat(s,'"></div>')}constructor(){return d.instance||(d.instance=this),d.instance}}let u=Object.freeze(new d);class h{static create(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;u.create(t)}static remove(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350;u.remove(t)}static SELECTOR_CLASS(){return s}}class p extends i.Z{create(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];!this.exists()&&t&&(h.create(),document.querySelector(".".concat(h.SELECTOR_CLASS())).insertAdjacentHTML("beforeend",i.Z.getTemplate()))}remove(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];super.remove(),t&&h.remove()}constructor(){super(document.body)}}let f=Object.freeze(new p);class g{static create(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];f.create(t)}static remove(){let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];f.remove(t)}}},382:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var i=r(49),n=r(471),o=r(107),s=r(551),a=r(361);function c(t,e,r){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(i){var n=Object.getOwnPropertyDescriptor(i,e);return n.get?n.get.call(r||t):n.value}})(t,e,r||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}class d extends a.Z{init(){this._client=new o.Z,this.createButton()}createButton(){this.createScript(t=>{this.renderButton(t)})}renderButton(t){return this.confirmOrderForm=i.Z.querySelector(document,this.options.confirmOrderFormSelector),i.Z.querySelector(this.confirmOrderForm,this.options.confirmOrderButtonSelector).classList.add("d-none"),t.Buttons(this.getButtonConfig()).render(this.el)}getButtonConfig(){return{style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,label:"pay"},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onClick:this.onClick.bind(this),onError:this.onError.bind(this)}}createOrder(){if(!this.confirmOrderForm.checkValidity())throw Error("Checkout form not valid");let t=n.Z.serialize(this.confirmOrderForm);t.set("product","spb");let e=this.options.orderId;return null!==e&&t.set("orderId",e),new Promise((e,r)=>{this._client.post(this.options.createOrderUrl,t,(t,i)=>{i.status>=400&&r(t);try{let r=JSON.parse(t);e(r.token)}catch(t){r(t)}})})}onApprove(t){s.Z.create();let e=document.createElement("input");e.setAttribute("type","hidden"),e.setAttribute("name","paypalOrderId"),e.setAttribute("value",t.orderID),this.confirmOrderForm.appendChild(e),this.confirmOrderForm.submit()}onClick(t,e){return this.confirmOrderForm.checkValidity()?e.resolve():e.reject()}}d.options={...c(l(d),"options",d),buttonColor:"gold",buttonShape:"rect",buttonSize:"small",useAlternativePaymentMethods:!0,disabledAlternativePaymentMethods:[],showPayLater:!0,createOrderUrl:"",orderId:null,accountOrderEditFailedUrl:"",accountOrderEditCancelledUrl:"",confirmOrderFormSelector:"#confirmOrderForm",confirmOrderButtonSelector:'button[type="submit"]',addErrorUrl:"",userIdToken:null}},361:(t,e,r)=>{r.d(e,{Z:()=>u});var i=r(293);function n(t,e){void 0===e&&(e={});var r=document.createElement("script");return r.src=t,Object.keys(e).forEach(function(t){r.setAttribute(t,e[t]),"data-csp-nonce"===t&&r.setAttribute("nonce",e["data-csp-nonce"])}),r}function o(t,e){if("object"!=typeof t||null===t)throw Error("Expected an options object.");if(void 0!==e&&"function"!=typeof e)throw Error("Expected PromisePonyfill to be a function.")}var s=r(819);let a=["card","bancontact","blik","eps","giropay","ideal","mybank","p24","sepa","sofort","venmo"];class c extends i.Z{_init(){this.options.partOfDomContentLoading||"complete"===document.readyState?super._init():window.addEventListener("load",()=>{super._init()})}get scriptOptionsHash(){return JSON.stringify(this.getScriptOptions())}async createScript(t){var e,r,i;(i=(e=c.scriptPromises)[r=this.scriptOptionsHash])!==null&&void 0!==i||(e[r]=this._loadScript());let n=async()=>{t(await c.scriptPromises[this.scriptOptionsHash])};this.options.scriptAwaitVisibility?await this._awaitVisibility(n):await n(),this._createScriptLegacy(t)}async _awaitVisibility(t){let e=new IntersectionObserver(r=>{let[i]=r;i.isIntersecting&&(e.disconnect(),t())},{rootMargin:"200px"});e.observe(this.el)}async _loadScript(){return await function(t,e){if(void 0===e&&(e=Promise),o(t,e),"undefined"==typeof document)return e.resolve(null);var r,i,s,a,c,l=(i="https://www.paypal.com/sdk/js",t.sdkBaseUrl&&(i=t.sdkBaseUrl,delete t.sdkBaseUrl),a=(s=Object.keys(t).filter(function(e){return void 0!==t[e]&&null!==t[e]&&""!==t[e]}).reduce(function(e,r){var i=t[r].toString();return"data"===(r=r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(t,e){return(e?"-":"")+t.toLowerCase()})).substring(0,4)||"crossorigin"===r?e.attributes[r]=i:e.queryParams[r]=i,e},{queryParams:{},attributes:{}})).queryParams,c=s.attributes,a["merchant-id"]&&-1!==a["merchant-id"].indexOf(",")&&(c["data-merchant-id"]=a["merchant-id"],a["merchant-id"]="*"),{url:"".concat(i,"?").concat((r="",Object.keys(a).forEach(function(t){0!==r.length&&(r+="&"),r+=t+"="+a[t]}),r)),attributes:c}),d=l.url,u=l.attributes,h=u["data-namespace"]||"paypal",p=window[h];return(u["data-js-sdk-library"]||(u["data-js-sdk-library"]="paypal-js"),/*!
 * paypal-js v8.0.5 (2024-04-16T22:14:11.318Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e){var r=document.querySelector('script[src="'.concat(t,'"]'));if(null===r)return null;var i=n(t,e),o=r.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(i.dataset).length)return null;var s=!0;return Object.keys(o.dataset).forEach(function(t){o.dataset[t]!==i.dataset[t]&&(s=!1)}),s?r:null}(d,u)&&p)?e.resolve(p):(function(t,e){void 0===e&&(e=Promise),o(t,e);var r=t.url,i=t.attributes;if("string"!=typeof r||0===r.length)throw Error("Invalid url.");if(void 0!==i&&"object"!=typeof i)throw Error("Expected attributes to be an object.");return new e(function(t,e){var o,s,a,c,l,d;if("undefined"==typeof document)return t();s=(o={url:r,attributes:i,onSuccess:function(){return t()},onError:function(){return e(Error('The script "'.concat(r,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.')))}}).url,a=o.attributes,c=o.onSuccess,l=o.onError,(d=n(s,a)).onerror=l,d.onload=c,document.head.insertBefore(d,document.head.firstElementChild)})})({url:d,attributes:u},e).then(function(){var t=window[h];if(t)return t;throw Error("The window.".concat(h," global variable is not available."))})}(this.getScriptOptions()),c.paypal[this.scriptOptionsHash]=window.paypal,delete window.paypal,c.paypal[this.scriptOptionsHash]}getScriptOptions(){let t={components:"buttons,messages,card-fields,funding-eligibility,applepay,googlepay","client-id":this.options.clientId,commit:!!this.options.commit,locale:this.options.languageIso,currency:this.options.currency,intent:this.options.intent,"enable-funding":"paylater,venmo"};return(this.options.disablePayLater||!1===this.options.showPayLater)&&(t["enable-funding"]="venmo"),!1===this.options.useAlternativePaymentMethods?t["disable-funding"]=a.join(","):Array.isArray(this.options.disabledAlternativePaymentMethods)&&(t["disable-funding"]=this.options.disabledAlternativePaymentMethods.join(",")),this.options.merchantPayerId&&(t["merchant-id"]=this.options.merchantPayerId),this.options.clientToken&&(t["data-client-token"]=this.options.clientToken),this.options.userIdToken&&(t["data-user-id-token"]=this.options.userIdToken),this.options.partnerAttributionId&&(t["data-partner-attribution-id"]=this.options.partnerAttributionId),t}callCallbacks(){this.constructor.scriptLoading.callbacks.forEach(t=>{c.scriptPromises[this.scriptOptionsHash].then(e=>t.call(this,e))})}_createScriptLegacy(t){this.constructor.scriptLoading.callbacks.push(t)}}function l(t,e,r){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(i){var n=Object.getOwnPropertyDescriptor(i,e);return n.get?n.get.call(r||t):n.value}})(t,e,r||t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}c.scriptLoading=new s.Z,c.options={clientId:"",merchantPayerId:"",partnerAttributionId:"",currency:"EUR",intent:"capture",commit:!0,languageIso:"en_GB",scriptAwaitVisibility:!1,partOfDomContentLoading:!0},c.scriptPromises={},c.paypal={};class u extends c{handleError(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;r&&"string"!=typeof r&&(r=String(r));let i=this._extractErrorCode(r);if(i&&(t=i),!this.options.handleErrorUrl){console.error("PayPal ".concat(e?"fatal ":"","error occurred: ").concat(t," - ").concat(String(null!=r?r:"")));return}this._client.post(this.options.handleErrorUrl,JSON.stringify({code:t,error:r,fatal:e}),()=>{this.onErrorHandled(t,e,r)})}onErrorHandled(t,e,r){window.scrollTo(0,0),window.location.reload()}onFatalError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.GENERIC_ERROR,!0,t)}onError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.GENERIC_ERROR,!1,t)}onCancel(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.USER_CANCELLED,!1,t)}createError(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=this.options.addErrorUrl;if(this.options.accountOrderEditCancelledUrl&&this.options.accountOrderEditFailedUrl){window.location="cancel"===t?this.options.accountOrderEditCancelledUrl:this.options.accountOrderEditFailedUrl;return}e&&"string"!=typeof e&&(e=String(e)),this._client.post(i,JSON.stringify({error:e,type:t}),()=>{if(r){window.location=r;return}window.onbeforeunload=()=>{window.scrollTo(0,0)},window.location.reload()})}_extractErrorCode(t){try{var e;let r=(e=JSON.parse(t))===null||void 0===e?void 0:e.errors;if(!Array.isArray(r))return null;for(let t of r)if("object"==typeof t&&"string"==typeof t.code)return t.code}catch(t){}return null}constructor(...t){super(...t),this.GENERIC_ERROR="SWAG_PAYPAL__GENERIC_ERROR",this.NOT_ELIGIBLE="SWAG_PAYPAL__NOT_ELIGIBLE",this.USER_CANCELLED="SWAG_PAYPAL__USER_CANCELLED",this.BROWSER_UNSUPPORTED="SWAG_PAYPAL__BROWSER_UNSUPPORTED"}}u.options={...l(d(u),"options",u),addErrorUrl:"",handleErrorUrl:""}},819:(t,e,r)=>{r.d(e,{Z:()=>i});class i{constructor(){this.loadingScript=!1,this.paypal=null,this.callbacks=[]}}}}]);