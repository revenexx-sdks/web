```javascript
import { Client, ShippingMethods } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingMethods = new ShippingMethods(client);

const result = await shippingMethods.shippingTiersCreate({
    methodId: '',
    fromValue: 10, // optional
    position: 1, // optional
    price: 6.9 // optional
});

console.log(result);
```
