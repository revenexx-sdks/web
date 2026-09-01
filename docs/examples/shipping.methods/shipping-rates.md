```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingRates({
    at: '2026-01-01T12:00:00Z', // optional
    attributes: {
        "volume_litres": 48
    }, // optional
    country: 'DE', // optional
    currency: 'EUR', // optional
    marketId: '3f2b6d10-7c41-4c0a-9a35-2f5b8e0d9c11', // optional
    orderValue: 129.9, // optional
    orderValueGross: 129.9, // optional
    orderValueNet: 109.16, // optional
    quantity: 3, // optional
    weight: 12.5, // optional
    weightUnit: 'kg' // optional
});

console.log(result);
```
