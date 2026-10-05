```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersCommit({
    allocations: [],
    contactId: '', // optional
    currency: '', // optional
    dryRun: true, // optional
    note: '', // optional
    orderId: '' // optional
});

console.log(result);
```
