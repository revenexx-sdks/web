```javascript
import { Client, Markets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsTaxClassesUpdate({
    marketId: '',
    id: '',
    code: 'standard', // optional
    isDefault: true, // optional
    labels: {
        "de-DE": "Regelsatz",
        "en-GB": "Standard rate"
    }, // optional
    name: 'Standard rate', // optional
    position: 0, // optional
    rate: 20 // optional
});

console.log(result);
```
