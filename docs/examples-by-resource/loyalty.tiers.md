# loyalty.tiers

## loyalty-tiers-list

List tiers

```javascript
import { Client, LoyaltyTiers, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    programId: '', // optional
    code: '', // optional
    position: '', // optional
    thresholdKind: '', // optional
    active: '', // optional
    externalId: '', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeBlockedReason: '' // optional
});

console.log(result);
```

## loyalty-tiers-create

Add a tier to a programme

```javascript
import { Client, LoyaltyTiers, ThresholdKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersCreate({
    code: '',
    labels: null,
    programId: '',
    active: true, // optional
    bonusPercent: 9.99, // optional
    externalId: '', // optional
    externalRefs: null, // optional
    metadata: null, // optional
    perks: null, // optional
    pointsMultiplier: 9.99, // optional
    position: 1, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    thresholdKind: ThresholdKind.Absolute, // optional
    thresholdValue: 9.99 // optional
});

console.log(result);
```

## loyalty-tiers-empty-trash

Empty the tier trash, deleting each one for good

```javascript
import { Client, LoyaltyTiers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersEmptyTrash();

console.log(result);
```

## loyalty-tiers-purge

Delete the tiers that outlived the trash retention

```javascript
import { Client, LoyaltyTiers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersPurge();

console.log(result);
```

## loyalty-tiers-delete

Move a tier to the trash, or delete it for good from there

```javascript
import { Client, LoyaltyTiers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersDelete({
    id: ''
});

console.log(result);
```

## loyalty-tiers-get

Read one tier

```javascript
import { Client, LoyaltyTiers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersGet({
    id: ''
});

console.log(result);
```

## loyalty-tiers-update

Correct a tier

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

## loyalty-tiers-restore

Bring a tier back out of the trash

```javascript
import { Client, LoyaltyTiers } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyTiers = new LoyaltyTiers(client);

const result = await loyaltyTiers.loyaltyTiersRestore({
    id: ''
});

console.log(result);
```
