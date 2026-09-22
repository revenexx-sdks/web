```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesCreate({
    code: '',
    counter: 1, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    id: '', // optional
    padding: 1, // optional
    positionStep: 1, // optional
    prefix: '', // optional
    step: 1, // optional
    suffix: '', // optional
    tenantId: '', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
