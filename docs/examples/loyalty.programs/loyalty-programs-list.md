```javascript
import { Client, LoyaltyPrograms, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    code: '', // optional
    description: '', // optional
    kind: '', // optional
    holder: '', // optional
    currency: '', // optional
    period: '', // optional
    autoEnroll: '', // optional
    active: '', // optional
    memberCount: '', // optional
    externalId: '', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeBlockedReason: '' // optional
});

console.log(result);
```
