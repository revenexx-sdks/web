```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesReserve({
    orderRef: 'SO-2026-000123',
    expiresAt: '2026-01-01T12:00:00Z', // optional
    items: [], // optional
    locationCode: 'main', // optional
    productId: '', // optional
    quantity: 2, // optional
    shipTo: {}, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```
