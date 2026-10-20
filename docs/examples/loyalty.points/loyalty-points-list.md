```javascript
import { Client, LoyaltyPoints } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPoints = new LoyaltyPoints(client);

const result = await loyaltyPoints.loyaltyPointsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    membershipId: '', // optional
    entryKey: '', // optional
    kind: '', // optional
    points: '', // optional
    remaining: '', // optional
    orderId: '', // optional
    rewardId: '', // optional
    redemptionId: '', // optional
    reason: '' // optional
});

console.log(result);
```
