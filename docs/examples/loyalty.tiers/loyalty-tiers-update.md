```javascript
import { Client, LoyaltyTiers, ThresholdKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersUpdate({
    id: '',
    active: true, // optional
    bonusPercent: 9.99, // optional
    code: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    labels: null, // optional
    metadata: null, // optional
    perks: null, // optional
    pointsMultiplier: 9.99, // optional
    position: 1, // optional
    programId: '', // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    thresholdKind: ThresholdKind.Absolute, // optional
    thresholdValue: 9.99 // optional
});

console.log(result);
```
