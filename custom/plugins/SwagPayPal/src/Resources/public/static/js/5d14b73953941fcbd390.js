(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[858],{2518:function(){},8191:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}}),a(2772);let n="missing",s="invalid";var o=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_webhook %}\n<sw-card\n    :isLoading="isFetchingStatus"\n    :disabled="isLoading"\n    class="swag-paypal-webhook"\n    position-identifier="swag-paypal-webhook-card"\n>\n    <template #title>\n        {% block swag_paypal_webhook_card_title %}\n        <span class="swag-paypal-webhook__title">\n            {{ $tc(\'swag-paypal.webhook.cardTitle\') }}\n        </span>\n\n        <sw-label\n            class="swag-paypal-webhook__label"\n            appearance="pill"\n            size="medium"\n            :variant="webhookStatusVariant"\n        >\n            <sw-color-badge :rounded="true" :variant="webhookStatusVariant"  />\n            <span>{{ webhookStatusLabel }}</span>\n        </sw-label>\n        {% endblock %}\n    </template>\n\n\n    {% block swag_paypal_webhook_info_text %}\n    <span class="swag-paypal-webhook__info-text">\n        {{ $tc(\'swag-paypal.webhook.infoText\') }}\n    </span>\n    {% endblock %}\n\n    {% block swag_paypal_webhook_refresh_button %}\n    <sw-button\n        class="swag-paypal-webhook__refresh-button"\n        variant=""\n        :disabled="isLoading || isRefreshing || isFetchingStatus || !allowRefresh || !acl.can(\'swag_paypal.editor\')"\n        :isLoading="isRefreshing"\n        @click="onRefreshWebhook"\n    >\n        {{ $tc(\'swag-paypal.webhook.buttonRefresh\') }}\n    </sw-button>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl","SwagPayPalWebhookService"],mixins:[Shopware.Mixin.getByName("swag-paypal-notification")],props:{isLoading:{type:Boolean,required:!1,default:!1},selectedSalesChannelId:{type:String,required:!1,default:null}},data(){return{webhookStatus:null,isFetchingStatus:!1,isRefreshing:!1}},computed:{webhookStatusLabel(){return this.$tc(`swag-paypal.webhook.status.${this.webhookStatus||"unknown"}`)},webhookStatusVariant(){switch(this.webhookStatus){case n:return"danger";case s:return"warning";case"valid":return"success";default:return"neutral"}},allowRefresh(){return[s,n].includes(this.webhookStatus??"")}},created(){this.fetchWebhookStatus()},methods:{async fetchWebhookStatus(){this.isFetchingStatus=!0;let e=await this.SwagPayPalWebhookService.status(this.selectedSalesChannelId);this.webhookStatus=e.result??null,this.isFetchingStatus=!1},async onRefreshWebhook(){return this.isRefreshing=!0,await this.SwagPayPalWebhookService.register(this.selectedSalesChannelId).catch(e=>{this.createNotificationFromError({errorResponse:e,title:"swag-paypal.webhook.refreshFailed.title"})}),this.isRefreshing=!1,this.fetchWebhookStatus()}}})},2772:function(e,t,a){var n=a(2518);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(5346).Z("30ed9516",n,!0,{})},5346:function(e,t,a){"use strict";function n(e,t){for(var a=[],n={},s=0;s<t.length;s++){var o=t[s],r=o[0],i={id:e+":"+s,css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(i):a.push(n[r]={id:r,parts:[i]})}return a}a.d(t,{Z:function(){return f}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,l=0,u=!1,c=function(){},d=null,h="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,a,s){u=a,d=s||{};var r=n(e,t);return w(r),function(t){for(var a=[],s=0;s<r.length;s++){var i=o[r[s].id];i.refs--,a.push(i)}t?w(r=n(e,t)):r=[];for(var s=0;s<a.length;s++){var i=a[s];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete o[i.id]}}}}function w(e){for(var t=0;t<e.length;t++){var a=e[t],n=o[a.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(b(a.parts[s]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var r=[],s=0;s<a.parts.length;s++)r.push(b(a.parts[s]));o[a.id]={id:a.id,refs:1,parts:r}}}}function g(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function b(e){var t,a,n=document.querySelector("style["+h+'~="'+e.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(p){var s=l++;t=v.bind(null,n=i||(i=g()),s,!1),a=v.bind(null,n,s,!0)}else t=y.bind(null,n=g()),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap)&&t(e=n):a()}}var k=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}();function v(e,t,a,n){var s=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=k(t,s);else{var o=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function y(e,t){var a=t.css,n=t.media,s=t.sourceMap;if(n&&e.setAttribute("media",n),d.ssrId&&e.setAttribute(h,t.id),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}}]);