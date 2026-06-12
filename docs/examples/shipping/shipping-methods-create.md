```javascript
import { Client, Shipping, ShippingMethodMatrixBasis, ShippingMethodPricingType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shipping = new Shipping(client);

const result = await shipping.shippingMethodsCreate({
    code: '',
    name: '',
    carrier: '', // optional
    countries: [], // optional
    currency: '', // optional
    description: '', // optional
    enabled: null, // optional
    etaDaysMax: null, // optional
    etaDaysMin: null, // optional
    freeAbove: null, // optional
    labels: {}, // optional
    matrixAttribute: '', // optional
    matrixBasis: ShippingMethodMatrixBasis.Weight, // optional
    metadata: {}, // optional
    position: null, // optional
    price: null, // optional
    pricingType: ShippingMethodPricingType.Fixed // optional
});

console.log(result);
```
