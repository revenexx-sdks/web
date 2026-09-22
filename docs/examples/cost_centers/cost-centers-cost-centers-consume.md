```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCostCentersConsume({
    id: '',
    amount: 9.99,
    actor: '', // optional
    currency: '', // optional
    note: '', // optional
    orderId: '', // optional
    purchaseRequestId: '' // optional
});

console.log(result);
```
