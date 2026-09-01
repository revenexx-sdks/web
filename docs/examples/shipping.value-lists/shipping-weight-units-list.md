```javascript
import { Client, ShippingValueLists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shippingValueLists = new ShippingValueLists(client);

const result = await shippingValueLists.shippingWeightUnitsList({
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```
