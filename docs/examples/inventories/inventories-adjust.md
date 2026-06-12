```javascript
import { Client, Inventories } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventories = new Inventories(client);

const result = await inventories.inventoriesAdjust({
    items: [],
    reason: '',
    locationCode: '' // optional
});

console.log(result);
```
