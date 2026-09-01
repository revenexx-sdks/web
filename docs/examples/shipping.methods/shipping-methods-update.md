```javascript
import { Client, ShippingMethods, ShippingMethodMatrixBasis, ShippingMethodPricingType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsUpdate({
    id: '',
    carrier: 'acme-parcel', // optional
    carrierId: '8a4d1c7e-2b93-4f61-b0d2-6c5a9e3f1a44', // optional
    code: 'express', // optional
    countries: ["DE","AT","CH"], // optional
    currency: 'EUR', // optional
    description: 'Delivered by the next working day when ordered before the cut-off.', // optional
    enabled: true, // optional
    etaDaysMax: 1, // optional
    etaDaysMin: 1, // optional
    freeAbove: 100, // optional
    labels: {
        "de": "Expressversand",
        "en": "Express delivery"
    }, // optional
    matrixAttribute: 'volume_litres', // optional
    matrixBasis: ShippingMethodMatrixBasis.Weight, // optional
    metadata: {
        "erp_key": "SHIP-EXPRESS",
        "printer": "label-2"
    }, // optional
    name: 'Express delivery', // optional
    position: 1, // optional
    price: 9.9, // optional
    pricingType: ShippingMethodPricingType.Fixed, // optional
    quoteAbove: 31.5, // optional
    taxClass: 'reduced' // optional
});

console.log(result);
```
