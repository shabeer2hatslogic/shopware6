import template from "./index.html.twig";

Shopware.Component.override("sw-order-line-items-grid", {
  template,

  inject: ["systemConfigApiService"],

  /**
   * Asynchronously retrieves the system configuration values and
   * applies custom CSS to the order number style.
   *
   * @param {void}
   * @return {Promise<void>}
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
