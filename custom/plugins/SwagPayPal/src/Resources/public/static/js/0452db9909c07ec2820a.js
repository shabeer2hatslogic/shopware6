(this["webpackJsonpPluginswag-pay-pal"]=this["webpackJsonpPluginswag-pay-pal"]||[]).push([[14],{HSq6:function(n,e,a){},Ut1L:function(n,e,a){"use strict";a.r(e);a("ecEo"),e.default=Shopware.Component.wrapComponentConfig({template:'{# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n{% block swag_paypal_content_card_channel_config_plus %}\n<sw-card\n    position-identifier="swag-paypal-card-channel-config-plus"\n    :title="$tc(\'swag-paypal.settingForm.plus.cardTitle\')"\n>\n\n    {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n    {% block swag_paypal_content_card_channel_config_plus_settings %}\n    <div v-if="actualConfigData" class="swag-paypal-settings-plus-fields">\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_plus_settings_warning %}\n        <template v-if="isPayPalPLUSActive">\n            <sw-alert variant="warning">\n                <span v-html="$tc(\'swag-paypal.settingForm.plus.warning.active\')"/>\n            </sw-alert>\n        </template>\n\n        <template v-if="isPayPalPLUSInActive">\n            <sw-alert variant="info">\n                <span v-html="$tc(\'swag-paypal.settingForm.plus.warning.inactive\')"/>\n            </sw-alert>\n        </template>\n        {% endblock %}\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_plus_settings_onboarding %}\n        <p\n            v-bind:class="{ \'swag-paypal-payal-plus-disabled\': isPayPalPLUSInActive}"\n            v-html="$tc(\'swag-paypal.settingForm.plus.introduction\')"\n        />\n        {% endblock %}\n\n        {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n        {% block swag_paypal_content_card_channel_config_plus_settings_checkout_enabled %}\n        <sw-inherit-wrapper\n            {% if VUE3 %}\n            v-model:value="actualConfigData[\'SwagPayPal.settings.plusCheckoutEnabled\']"\n            {% else %}\n            v-model="actualConfigData[\'SwagPayPal.settings.plusCheckoutEnabled\']"\n            {% endif %}\n            :inheritedValue="selectedSalesChannelId == null ? null : allConfigs[\'null\'][\'SwagPayPal.settings.plusCheckoutEnabled\']"\n            :customInheritationCheckFunction="checkBoolFieldInheritance"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    name="SwagPayPal.settings.plusCheckoutEnabled"\n                    bordered\n                    :mapInheritance="props"\n                    :label="$tc(\'swag-paypal.settingForm.plus.plusCheckoutEnabled.label\')"\n                    :disabled="ifItWasNotActive() || props.isInherited || !acl.can(\'swag_paypal.editor\')"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                />\n\n                {# @deprecated tag:v10.0.0 - Will be removed without replacement #}\n                {% block swag_paypal_content_card_channel_config_behaviour_settings_intent_hint %}\n                <swag-paypal-settings-hint :hintText="$tc(\'swag-paypal.settingForm.plus.hint\')"/>\n                {% endblock %}\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{actualConfigData:{type:Object,required:!0,default:function(){return{}}},allConfigs:{type:Object,required:!0},selectedSalesChannelId:{type:String,required:!1,default:null}},computed:{isPayPalPLUSActive:function(){return this.actualConfigData["SwagPayPal.settings.plusCheckoutEnabled"]},isPayPalPLUSInActive:function(){return!this.isPayPalPLUSActive}},methods:{checkTextFieldInheritance:function(n){return"string"!=typeof n||n.length<=0},checkBoolFieldInheritance:function(n){return"boolean"!=typeof n},ifItWasNotActive:function(){return!this.actualConfigData["SwagPayPal.settings.plusCheckoutEnabled"]}}})},ecEo:function(n,e,a){var t=a("HSq6");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,a("P8hj").default)("39b6101c",t,!0,{})}}]);