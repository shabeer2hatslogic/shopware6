/*! For license information please see 32cdb1cc42382837ec1e.js.LICENSE.txt */
(this["webpackJsonpPluginswag-pay-pal"]=this["webpackJsonpPluginswag-pay-pal"]||[]).push([[3],{"2M4n":function(n,t,e){var r=e("ft3D");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e("P8hj").default)("1aae2e19",r,!0,{})},TgGd:function(n,t,e){"use strict";e.r(t);e("2M4n");function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(){a=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function d(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{d({},"")}catch(n){d=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),s=new L(r||[]);return i(o,"_invoke",{value:P(n,e,s)}),o}function f(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=u;var p={};function h(){}function g(){}function y(){}var w={};d(w,s,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(E([])));b&&b!==t&&e.call(b,s)&&(w=b);var _=y.prototype=h.prototype=Object.create(w);function m(n){["next","throw","return"].forEach((function(t){d(n,t,(function(n){return this._invoke(t,n)}))}))}function x(n,t){function a(i,o,s,c){var l=f(n[i],n,o);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==r(u)&&e.call(u,"__await")?t.resolve(u.__await).then((function(n){a("next",n,s,c)}),(function(n){a("throw",n,s,c)})):t.resolve(u).then((function(n){d.value=n,s(d)}),(function(n){return a("throw",n,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(n,e){function r(){return new t((function(t,r){a(n,e,t,r)}))}return o=o?o.then(r,r):r()}})}function P(n,t,e){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return z()}for(e.method=a,e.arg=i;;){var o=e.delegate;if(o){var s=S(o,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=f(n,t,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function S(n,t){var e=t.method,r=n.iterator[e];if(void 0===r)return t.delegate=null,"throw"===e&&n.iterator.return&&(t.method="return",t.arg=void 0,S(n,t),"throw"===t.method)||"return"!==e&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var a=f(r,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function C(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(k,this),this.reset(!0)}function E(n){if(n){var t=n[s];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,a=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:z}}function z(){return{value:void 0,done:!0}}return g.prototype=y,i(_,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=d(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,y):(n.__proto__=y,d(n,l,"GeneratorFunction")),n.prototype=Object.create(_),n},n.awrap=function(n){return{__await:n}},m(x.prototype),d(x.prototype,c,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,r,a,i){void 0===i&&(i=Promise);var o=new x(u(t,e,r,a),i);return n.isGeneratorFunction(e)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},m(_),d(_,l,"Generator"),d(_,s,(function(){return this})),d(_,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=E,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return o.type="throw",o.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=n,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),p},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),C(e),p}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var a=r.arg;C(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:E(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},n}function i(n,t,e,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function s(n){i(o,r,a,s,c,"next",n)}function c(n){i(o,r,a,s,c,"throw",n)}s(void 0)}))}}t.default=Shopware.Component.wrapComponentConfig({template:'{% block sw_first_run_wizard_paypal_credentials %}\n<div class="sw-first-run-wizard-paypal-credentials">\n\n    {% block sw_first_run_wizard_paypal_credentials_inner %}\n        <sw-loader v-if="isLoading" />\n\n        {% block sw_first_run_wizard_paypal_credentials_intro %}\n        <p class="sw-first-run-wizard-paypal-credentials__headerText">\n            {{ $tc(\'swag-paypal-frw-credentials.textIntroPayPal\') }}\n        </p>\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_sandbox %}\n        <sw-switch-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.sandbox\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.sandbox\']"\n            {% endif %}\n            :label="$tc(\'swag-paypal-frw-credentials.labelSandbox\')"\n            :helpText="$tc(\'swag-paypal-frw-credentials.tooltipSandbox\')"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_button_container %}\n        <div class="sw-first-run-wizard-paypal-credentials__button-container">\n\n            {% block sw_first_run_wizard_paypal_credentials_button %}\n            <a\n                class="sw-button sw-button--primary swag-paypal-frw__signup-button"\n                target="_blank"\n                :data-paypal-onboard-complete="onboardingCallback"\n                :href="`${onboardingUrl}`"\n                data-paypal-button="true"\n            >\n                {{ $tc(\'swag-paypal-frw-credentials.buttonGetCredentials\') }}\n            </a>\n            {% endblock %}\n\n            {% block sw_first_run_wizard_paypal_credentials_indicator %}\n            <div class="sw-first-run-wizard-paypal-credentials__indicator">\n                <template v-if="isGetCredentialsSuccessful">\n\n                    {% block sw_first_run_wizard_paypal_credentials_indicator_icon %}\n                    <sw-icon\n                        name="regular-checkmark-s"\n                        class="sw-first-run-wizard-paypal-credentials__icon-successful"\n                    />\n                    {% endblock %}\n\n                    {% block sw_first_run_wizard_paypal_credentials_indicator_text %}\n                    <span class="sw-first-run-wizard-paypal-credentials__text-indicator">\n                        {{ $tc(\'swag-paypal-frw-credentials.textFetchedSuccessful\') }}\n                    </span>\n                    {% endblock %}\n                </template>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_id %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.clientId\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.clientId\']"\n            {% endif %}\n            v-show="!sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientId\')"\n            @change="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_secret %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.clientSecret\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.clientSecret\']"\n            {% endif %}\n            v-show="!sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientSecret\')"\n            @change="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_merchant_id %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.merchantPayerId\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.merchantPayerId\']"\n            {% endif %}\n            v-show="!sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelMerchantPayerId\')"\n            @change="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_id_sandbox %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.clientIdSandbox\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.clientIdSandbox\']"\n            {% endif %}\n            v-show="sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientIdSandbox\')"\n            @change="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_client_secret_sandbox %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.clientSecretSandbox\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.clientSecretSandbox\']"\n            {% endif %}\n            v-show="sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelClientSecretSandbox\')"\n            @change="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_merchant_id_sandbox %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="config[\'SwagPayPal.settings.merchantPayerIdSandbox\']"\n            {% else %}\n            v-model="config[\'SwagPayPal.settings.merchantPayerIdSandbox\']"\n            {% endif %}\n            v-show="sandboxMode"\n            :label="$tc(\'swag-paypal-frw-credentials.labelMerchantPayerIdSandbox\')"\n            @change="onCredentialsChanged"\n        />\n        {% endblock %}\n\n        {% block sw_first_run_wizard_paypal_credentials_set_default %}\n        <sw-switch-field\n            {% if VUE3 %}\n            v-model:value="setDefault"\n            {% else %}\n            v-model="setDefault"\n            {% endif %}\n            :disabled="!credentialsProvided"\n            :label="$tc(\'swag-paypal-frw-credentials.labelSetDefault\')"\n            :helpText="$tc(\'swag-paypal-frw-credentials.tooltipSetDefault\')"\n        />\n        {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["systemConfigApiService","SwagPaypalPaymentMethodService"],mixins:[Shopware.Mixin.getByName("swag-paypal-notification"),Shopware.Mixin.getByName("swag-paypal-credentials-loader")],data:function(){return{config:{},isLoading:!1,setDefault:!1}},computed:{sandboxMode:function(){return this.config["SwagPayPal.settings.sandbox"]||!1},onboardingUrl:function(){return this.sandboxMode?this.onboardingUrlSandbox:this.onboardingUrlLive},onboardingCallback:function(){return this.sandboxMode?"onboardingCallbackSandbox":"onboardingCallbackLive"},buttonConfig:function(){var n=this;return this.$super("buttonConfig").map((function(t){return"next"===t.key&&(t.action=n.onClickNext.bind(n)),t}))},credentialsProvided:function(){return!this.sandboxMode&&this.credentialsProvidedLive||this.sandboxMode&&this.credentialsProvidedSandbox},credentialsProvidedLive:function(){return!!this.config["SwagPayPal.settings.clientId"]&&!!this.config["SwagPayPal.settings.clientSecret"]},credentialsProvidedSandbox:function(){return!!this.config["SwagPayPal.settings.clientIdSandbox"]&&!!this.config["SwagPayPal.settings.clientSecretSandbox"]}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.$super("createdComponent"),this.fetchPayPalConfig()},onPayPalCredentialsLoadSuccess:function(n,t,e,r){this.setConfig(n,t,e,r)},onPayPalCredentialsLoadFailed:function(n){this.setConfig("","","",n),this.createNotificationError({message:this.$tc("swag-paypal-frw-credentials.messageFetchedError"),duration:1e4})},setConfig:function(n,t,e,r){var a=r?"Sandbox":"";this.$set(this.config,"SwagPayPal.settings.clientId".concat(a),n),this.$set(this.config,"SwagPayPal.settings.clientSecret".concat(a),t),this.$set(this.config,"SwagPayPal.settings.merchantPayerId".concat(a),e)},onClickNext:function(){var n=this;return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.credentialsProvided){t.next=3;break}return n.createNotificationError({message:n.$tc("swag-paypal-frw-credentials.messageNoCredentials")}),t.abrupt("return",!0);case 3:if(t.prev=3,n.isGetCredentialsSuccessful){t.next=7;break}return t.next=7,n.testApiCredentials();case 7:return t.next=9,n.saveConfig();case 9:return n.$emit("frw-redirect","sw.first.run.wizard.index.plugins"),t.abrupt("return",!1);case 13:return t.prev=13,t.t0=t.catch(3),t.abrupt("return",!0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))()},fetchPayPalConfig:function(){var n=this;return this.isLoading=!0,this.systemConfigApiService.getValues("SwagPayPal.settings",null).then((function(t){n.config=t})).finally((function(){n.isLoading=!1}))},saveConfig:function(){var n=this;return o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.isLoading=!0,t.next=3,n.systemConfigApiService.saveValues(n.config,null);case 3:if(!n.setDefault){t.next=6;break}return t.next=6,n.SwagPaypalPaymentMethodService.setDefaultPaymentForSalesChannel();case 6:n.isLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},testApiCredentials:function(){var n=this;return o(a().mark((function t(){var e,r,i,o,s,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.isLoading=!0,r=null!==(e=n.config["SwagPayPal.settings.sandbox"])&&void 0!==e&&e,i=r?"Sandbox":"",o=n.config["SwagPayPal.settings.clientId".concat(i)],s=n.config["SwagPayPal.settings.clientSecret".concat(i)],t.next=7,n.SwagPayPalApiCredentialsService.validateApiCredentials(o,s,r).catch((function(t){return n.createNotificationFromError({errorResponse:t,title:"swag-paypal.settingForm.messageTestError"}),{credentialsValid:!1}}));case 7:return c=t.sent,n.isLoading=!1,t.abrupt("return",c.credentialsValid?Promise.resolve():Promise.reject());case 10:case"end":return t.stop()}}),t)})))()},onCredentialsChanged:function(){this.isGetCredentialsSuccessful=null}}})},ft3D:function(n,t,e){}}]);
//# sourceMappingURL=32cdb1cc42382837ec1e.js.map