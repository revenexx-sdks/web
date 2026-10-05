```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockUpdate({
    id: '',
    availabilityCode: 'available', // optional
    expectedAt: '2026-11-14', // optional
    locationId: '', // optional
    metadata: {
        "backorder": true
    }, // optional
    productId: '', // optional
    reorderPoint: 10, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```
