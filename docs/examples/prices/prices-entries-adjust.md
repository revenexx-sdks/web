```javascript
import { Client, Prices, PriceEndingRule } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesAdjust({
    listId: '',
    amount: 9.99, // optional
    dryRun: true, // optional
    percent: 9.99, // optional
    rounding: PriceEndingRule.Exact, // optional
    skuPrefix: 'BOLT-' // optional
});

console.log(result);
```
