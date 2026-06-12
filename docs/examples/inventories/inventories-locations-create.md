```javascript
import { Client, Inventories, LocationType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventories = new Inventories(client);

const result = await inventories.inventoriesLocationsCreate({
    code: '',
    name: '',
    address: {}, // optional
    enabled: null, // optional
    labels: {}, // optional
    metadata: {}, // optional
    priority: null, // optional
    type: LocationType.Warehouse // optional
});

console.log(result);
```
