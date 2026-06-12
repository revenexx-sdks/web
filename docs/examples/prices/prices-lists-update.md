```javascript
import { Client, Prices, PriceListStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsUpdate({
    id: '',
    channelId: '', // optional
    code: '', // optional
    contactId: '', // optional
    currency: '', // optional
    description: '', // optional
    isDefault: null, // optional
    labels: {}, // optional
    marketId: '', // optional
    metadata: {}, // optional
    name: '', // optional
    organizationId: '', // optional
    priority: null, // optional
    status: PriceListStatus.Active, // optional
    taxIncluded: null, // optional
    validFrom: '', // optional
    validUntil: '' // optional
});

console.log(result);
```
