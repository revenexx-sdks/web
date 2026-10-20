```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsAdjust({
    id: '',
    points: 1,
    reason: '',
    key: '' // optional
});

console.log(result);
```
