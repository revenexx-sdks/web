```javascript
import { Client, Shipping } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const shipping = new Shipping(client);

const result = await shipping.shippingMethodsGet({
    id: ''
});

console.log(result);
```
