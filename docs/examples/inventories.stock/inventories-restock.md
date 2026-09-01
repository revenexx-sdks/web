```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesRestock({
    items: [], // optional
    locationCode: 'main', // optional
    orderRef: 'SO-2026-000123', // optional
    productId: '', // optional
    quantity: 1, // optional
    reason: 'Return: wrong size', // optional
    restock: true, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```
