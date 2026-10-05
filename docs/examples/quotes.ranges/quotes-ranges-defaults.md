```javascript
import { Client, QuotesRanges, PagesSeedMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesDefaults({
    library: [], // optional
    menus: [], // optional
    mode: PagesSeedMode.Fill, // optional
    pages: [], // optional
    settings: {} // optional
});

console.log(result);
```
