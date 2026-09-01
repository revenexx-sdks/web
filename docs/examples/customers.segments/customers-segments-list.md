```javascript
import { Client, CustomersSegments, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const customersSegments = new CustomersSegments(client);

const result = await customersSegments.customersSegmentsList({
    id: '', // optional
    code: 'key_accounts', // optional
    position: 1, // optional
    ruleMatch: RuleMatch.All, // optional
    rulesComputedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
