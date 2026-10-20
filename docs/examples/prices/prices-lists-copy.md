```javascript
import { Client, Prices, Parts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsCopy({
    id: '',
    code: 'dealer-de-2027',
    parts: [Parts.Prices] // optional
});

console.log(result);
```
