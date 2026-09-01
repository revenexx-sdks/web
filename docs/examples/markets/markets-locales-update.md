```javascript
import { Client, Markets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsLocalesUpdate({
    marketId: '',
    id: '',
    code: 'de-DE', // optional
    country: 'DE', // optional
    isDefault: true, // optional
    language: 'de', // optional
    position: 0 // optional
});

console.log(result);
```
