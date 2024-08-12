import template from "./index.html.twig";

Shopware.Component.override("sw-order-line-items-grid-sales-channel", {
  template,

  inject: ["systemConfigApiService"],

  /**
   * Asynchronously initializes the component by fetching system configuration values
   * and applying custom CSS to the order number element.
   *
   * @return {void}
   */
  async created() {
    const config = await this.systemConfigApiService.getValues(
      "SineosOrderProductNumber.config"
    );
    const css = config["SineosOrderProductNumber.config.customCss"];
    const orderNumberStyle = document.createElement("style");
    orderNumberStyle.textContent = css;
    this.$el.appendChild(orderNumberStyle);
  },
});
