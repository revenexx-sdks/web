```javascript
import { Client, InventoriesLocations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsDelete({
    id: ''
});

console.log(result);
```
