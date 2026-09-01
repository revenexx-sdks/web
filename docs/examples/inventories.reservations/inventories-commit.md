```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesCommit({
    orderRef: 'SO-2026-000123'
});

console.log(result);
```
