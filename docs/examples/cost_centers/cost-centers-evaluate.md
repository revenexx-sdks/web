```javascript
import { Client, CostCenters, Conditions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersEvaluate({
    amount: 9.99,
    conditions: [Conditions.AvailableBudget], // optional
    contactId: '', // optional
    costCenterId: '', // optional
    currency: '', // optional
    punchoutAccountCode: '' // optional
});

console.log(result);
```
