```javascript
import { Client, LoyaltyTiers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersGet({
    id: ''
});

console.log(result);
```
