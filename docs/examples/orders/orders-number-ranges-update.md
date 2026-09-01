```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesUpdate({
    id: '',
    channelId: '', // optional
    code: 'order', // optional
    counter: 123, // optional
    metadata: {
        "owner": "erp-sync"
    }, // optional
    padding: 6, // optional
    positionStep: 10, // optional
    prefix: 'ORD-', // optional
    step: 1, // optional
    suffix: '' // optional
});

console.log(result);
```
