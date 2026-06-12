```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersNumberRangesCreate({
    code: '',
    channelId: '', // optional
    counter: null, // optional
    metadata: {}, // optional
    padding: null, // optional
    positionStep: null, // optional
    prefix: '', // optional
    step: null, // optional
    suffix: '' // optional
});

console.log(result);
```
