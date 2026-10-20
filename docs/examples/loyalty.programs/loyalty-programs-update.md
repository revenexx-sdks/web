```javascript
import { Client, LoyaltyPrograms, Holder, LoyaltyProgramsCreateKind, Period } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsUpdate({
    id: '',
    active: true, // optional
    autoEnroll: true, // optional
    code: '', // optional
    currency: '', // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    holder: Holder.Contact, // optional
    kind: LoyaltyProgramsCreateKind.Points, // optional
    labels: null, // optional
    metadata: null, // optional
    period: Period.CalendarYear, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
