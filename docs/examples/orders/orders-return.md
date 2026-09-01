```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturn({
    id: '',
    metadata: {
        "rma_portal_case": "C-2026-0917"
    }, // optional
    positions: [], // optional
    reason: 'Damaged on arrival', // optional
    restock: true // optional
});

console.log(result);
```
