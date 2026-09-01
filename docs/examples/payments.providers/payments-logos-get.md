```javascript
import { Client, PaymentsProviders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsProviders = new PaymentsProviders(client);

const result = await paymentsProviders.paymentsLogosGet({
    slug: 'stripe'
});

console.log(result);
```
