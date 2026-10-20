```javascript
import { Client, LoyaltyRewards, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    programId: '', // optional
    code: '', // optional
    description: '', // optional
    pointsCost: '', // optional
    promotionId: '', // optional
    voucherBatchId: '', // optional
    minTierId: '', // optional
    active: '', // optional
    redeemedCount: '', // optional
    externalId: '', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeBlockedReason: '' // optional
});

console.log(result);
```
