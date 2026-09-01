```javascript
import { Client, Markets, MarketStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsUpdate({
    id: '',
    code: 'northwind', // optional
    currency: 'EUR', // optional
    isDefault: false, // optional
    labels: {
        "de-DE": "Nordwind",
        "en-GB": "Northwind"
    }, // optional
    name: 'Northwind', // optional
    position: 0, // optional
    status: MarketStatus.Active // optional
});

console.log(result);
```
