```javascript
import { Client, MarketingConsentsSubscriptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsSubscriptions = new MarketingConsentsSubscriptions(client);

const result = await marketingConsentsSubscriptions.marketingConsentsSubscriptionsConfirm({
    token: '',
    purchaseRequestId: '',
    allocations: [], // optional
    currency: '', // optional
    note: '', // optional
    orderId: '' // optional
});

console.log(result);
```
