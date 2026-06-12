```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsCreate({
    channelId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    isCurrent: null, // optional
    marketId: '', // optional
    metadata: {}, // optional
    name: '', // optional
    sessionKey: '' // optional
});

console.log(result);
```
