```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsWebhooksIngest({
    provider: 'stripe',
    id: null, // optional
    request: {}, // optional
    verified: null // optional
});

console.log(result);
```
