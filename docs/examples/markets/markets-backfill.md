```javascript
import { Client, Markets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsBackfill({
    id: 'northwind',
    source: 'northwind',
    currencies: true, // optional
    locales: true, // optional
    taxClasses: true // optional
});

console.log(result);
```
