```javascript
import { Client, Prices, PriceEntriesBulkMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesBulk({
    listId: '',
    entries: [],
    mode: PriceEntriesBulkMode.Upsert // optional
});

console.log(result);
```
