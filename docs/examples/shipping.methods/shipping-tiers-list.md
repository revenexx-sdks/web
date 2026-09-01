```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersList({
    methodId: '',
    limit: 1, // optional
    offset: 1, // optional
    order: 'position.asc', // optional
    fromValue: 10 // optional
});

console.log(result);
```
