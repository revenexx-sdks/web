```javascript
import { Client, MarketingConsentsTypes, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsTypes = new MarketingConsentsTypes(client);

const result = await marketingConsentsTypes.marketingConsentsSubscriptionTypesList({
    id: '', // optional
    code: '', // optional
    requiresDoi: true, // optional
    allowsExistingCustomer: true, // optional
    position: 1, // optional
    archivedAt: '2026-01-01T12:00:00Z', // optional
    externalId: '', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: '', // optional
    trashed: Trashed.Exclude, // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
