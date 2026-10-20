```javascript
import { Client, CostCenters, Discarded } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    discarded: Discarded.Include // optional
});

console.log(result);
```
