```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersList({
    status: '', // optional
    paymentStatus: '', // optional
    fulfillmentStatus: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    channelId: '', // optional
    marketId: '', // optional
    number: '', // optional
    limit: null, // optional
    offset: null, // optional
    order: '' // optional
});

console.log(result);
```
