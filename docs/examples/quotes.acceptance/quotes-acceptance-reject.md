```javascript
import { Client, QuotesAcceptance } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesAcceptance = new QuotesAcceptance(client);

const result = await quotesAcceptance.quotesAcceptanceReject({
    id: '',
    reason: ''
});

console.log(result);
```
