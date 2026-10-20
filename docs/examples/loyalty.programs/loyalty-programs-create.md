```javascript
import { Client, LoyaltyPrograms, LoyaltyProgramsCreateKind, Holder, Period } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsCreate({
    code: '',
    kind: LoyaltyProgramsCreateKind.Points,
    labels: null,
    active: true, // optional
    autoEnroll: true, // optional
    currency: '', // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    holder: Holder.Contact, // optional
    metadata: null, // optional
    period: Period.CalendarYear, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
