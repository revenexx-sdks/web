```javascript
import { Client, JourneysWatches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysWatches = new JourneysWatches(client);

const result = await journeysWatches.journeysWatchesCreate({
    contactId: '', // optional
    email: '', // optional
    market: '', // optional
    productId: '', // optional
    sku: '', // optional
    source: '' // optional
});

console.log(result);
```
