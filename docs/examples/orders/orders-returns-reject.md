```javascript
import { Client, Orders, OrderReturnRefusal } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturnsReject({
    id: '',
    rid: '',
    reason: 'Returned outside the agreed window', // optional
    resolution: OrderReturnRefusal.WearAndTear // optional
});

console.log(result);
```
