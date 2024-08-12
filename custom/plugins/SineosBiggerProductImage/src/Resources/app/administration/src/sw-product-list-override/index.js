import template from './sw-product-list.html.twig';

// Import for your custom styles
import './sw-product-list-bigger-column.scss';
Shopware.Component.override('sw-product-list', {
    template
});