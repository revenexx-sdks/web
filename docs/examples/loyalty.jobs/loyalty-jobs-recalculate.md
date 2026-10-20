```javascript
import { Client, LoyaltyJobs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyJobs = new LoyaltyJobs(client);

const result = await loyaltyJobs.loyaltyJobsRecalculate({
    data: {}
});

console.log(result);
```
