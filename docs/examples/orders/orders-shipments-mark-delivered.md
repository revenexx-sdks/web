```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersShipmentsMarkDelivered({
    id: '',
    deliveredAt: '2026-01-01T12:00:00Z', // optional
    note: 'Signed for by M. Weber at goods-in' // optional
});

console.log(result);
```
