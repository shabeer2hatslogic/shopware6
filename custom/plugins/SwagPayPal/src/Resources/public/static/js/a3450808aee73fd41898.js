"use strict";(window["webpackJsonpPluginswag-pay-pal"]=window["webpackJsonpPluginswag-pay-pal"]||[]).push([[344],{7344:function(n,a,e){e.r(a),e.d(a,{default:function(){return t}});var o=e(6777),t=Shopware.Component.wrapComponentConfig({template:'{% block swag_paypal_overview_card %}\n<sw-sales-channel-config\n    v-model:value="config"\n    ref="swagPayPalConfigComponent"\n    domain="SwagPayPal.settings"\n>\n\n    {% block swag_paypal_overview_card_select %}\n    <template #select>\n        <div></div>\n    </template>\n    {% endblock %}\n\n    {% block swag_paypal_overview_card_content %}\n    <template #content="{ actualConfigData, allConfigs, selectedSalesChannelId }">\n        <div v-if="actualConfigData">\n\n            {% block swag_paypal_overview_card_checkout %}\n            <swag-paypal-checkout\n                ref="swagPayPalCheckoutComponent"\n                :pluginId="pluginId"\n                :allowShowCredentials="false"\n                :actualConfigData="actualConfigData"\n                :allConfigs="allConfigs"\n                :isLoading="isLoading"\n                showSettingsLink\n                @on-save-settings="save"\n                @on-deactivate-paypal-plus="save"\n                @on-change-loading="onChangeLoading"\n            />\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n\n</sw-sales-channel-config>\n{% endblock %}\n',mixins:[Shopware.Mixin.getByName("notification")],props:{paymentMethods:{type:Array,required:!0}},data(){return{isLoading:!1,salesChannels:[],config:null}},computed:{pluginId(){return 0===this.paymentMethods.length?"":this.paymentMethods[0].pluginId}},setup(){return{swagPayPalConfigComponent:(0,o.iH)(null),swagPayPalCheckoutComponent:(0,o.iH)(null)}},methods:{async save(){this.isLoading=!0;try{let n=await this.swagPayPalConfigComponent?.save();if(n?.payPalWebhookErrors){let a=this.$tc("swag-paypal.settingForm.messageWebhookError");n.payPalWebhookErrors.forEach(n=>{this.createNotificationError({message:`${a}<br><br><ul><li>${n}</li></ul>`})})}await this.swagPayPalCheckoutComponent?.getPaymentMethodsAndMerchantIntegrations()}finally{this.isLoading=!1}},onChangeLoading(n){this.isLoading=n}}})}}]);