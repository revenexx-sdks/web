```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
