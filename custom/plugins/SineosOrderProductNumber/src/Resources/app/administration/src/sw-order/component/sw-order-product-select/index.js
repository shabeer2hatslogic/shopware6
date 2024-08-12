import template from "./index.html.twig";

Shopware.Component.override("sw-order-product-select", {
  template,

  inject: ["systemConfigApiService"],

  async created() {
    const res = await this.systemConfigApiService.getValues(
      "SineosOrderProductNumber.config"
    );
    const css = res["SineosOrderProductNumber.config.customCss"];
    const orderNumberStyle = document.createElement("style");
    orderNumberStyle.textContent = css;
    this.$el.appendChild(orderNumberStyle);
  },
});
