```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    programId: '', // optional
    holder: '', // optional
    holderKey: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    tierId: '', // optional
    tierCode: '', // optional
    status: '', // optional
    pointsBalance: '', // optional
    pointsPeriod: '', // optional
    pointsLifetime: '', // optional
    market: '', // optional
    externalId: '' // optional
});

console.log(result);
```
