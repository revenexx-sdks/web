```javascript
import { Client, Markets, MarketStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsCreate({
    code: '',
    name: '',
    currency: '', // optional
    isDefault: null, // optional
    labels: {}, // optional
    position: null, // optional
    status: MarketStatus.Active // optional
});

console.log(result);
```
