```javascript
import { Client, CostCenters } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const costCenters = new CostCenters(client);

const result = await costCenters.costCentersBudgetsUpdate({
    id: '',
    active: true, // optional
    costCenterId: '', // optional
    initialValue: 9.99, // optional
    metadata: {}, // optional
    name: '', // optional
    periodLength: 1, // optional
    periodStart: '2026-01-01', // optional
    recurring: true, // optional
    sequence: 1, // optional
    takeover: {} // optional
});

console.log(result);
```
