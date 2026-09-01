```javascript
import { Client, ShippingMethods, PricingType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingMethodsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'position.asc', // optional
    code: 'express', // optional
    enabled: true, // optional
    pricingType: PricingType.Matrix, // optional
    carrierId: '8a4d1c7e-2b93-4f61-b0d2-6c5a9e3f1a44', // optional
    carrier: 'acme-parcel', // optional
    taxClass: 'reduced' // optional
});

console.log(result);
```
