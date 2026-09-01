```javascript
import { Client, Markets, MarketsListStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsList({
    id: '', // optional
    code: 'northwind', // optional
    name: 'Northwind', // optional
    labels: '{"de-DE":"Nordwind","en-GB":"Northwind"}', // optional
    currency: 'EUR', // optional
    status: MarketsListStatus.Active, // optional
    isDefault: false, // optional
    position: 0, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'position.asc' // optional
});

console.log(result);
```
