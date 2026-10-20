```javascript
import { Client, LoyaltyMemberships, LoyaltyMembershipsCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsCreate({
    programId: '',
    contactId: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    market: '', // optional
    metadata: null, // optional
    organizationId: '', // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    status: LoyaltyMembershipsCreateStatus.Active // optional
});

console.log(result);
```
