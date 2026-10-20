```javascript
import { Client, LoyaltyPoints } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPoints = new LoyaltyPoints(client);

const result = await loyaltyPoints.loyaltyPointsAward({
    points: 1,
    contactId: '', // optional
    key: '', // optional
    membershipId: '', // optional
    organizationId: '', // optional
    programCode: '', // optional
    reason: '' // optional
});

console.log(result);
```
