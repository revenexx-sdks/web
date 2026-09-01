```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersShip({
    id: '',
    carrier: 'DHL', // optional
    metadata: {
        "warehouse": "HAM-1"
    }, // optional
    number: 'DEL-000123', // optional
    positions: [], // optional
    shippedAt: '2026-01-01T12:00:00Z', // optional
    trackingCode: '00340434161234567890', // optional
    trackingUrl: 'https://example.com/track/00340434161234567890' // optional
});

console.log(result);
```
