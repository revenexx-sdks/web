```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsPurge();

console.log(result);
```
