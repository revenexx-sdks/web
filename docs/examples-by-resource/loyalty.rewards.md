# loyalty.rewards

## loyalty-rewards-redemptions-list

List redeemed rewards

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsRedemptionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    membershipId: '', // optional
    rewardId: '', // optional
    points: '', // optional
    voucherCode: '', // optional
    ledgerEntryId: '', // optional
    requestKey: '', // optional
    state: '', // optional
    usedOrderId: '' // optional
});

console.log(result);
```

## loyalty-rewards-redemptions-get

Read one redeemed reward

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsRedemptionsGet({
    id: ''
});

console.log(result);
```

## loyalty-rewards-list

List rewards

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

## loyalty-rewards-create

Add a reward to a points programme

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsCreate({
    code: '',
    labels: null,
    pointsCost: 1,
    programId: '',
    promotionId: '',
    active: true, // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    metadata: null, // optional
    minTierId: '', // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    voucherBatchId: '' // optional
});

console.log(result);
```

## loyalty-rewards-empty-trash

Empty the reward trash, deleting each one for good

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsEmptyTrash();

console.log(result);
```

## loyalty-rewards-purge

Delete the rewards that outlived the trash retention

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsPurge();

console.log(result);
```

## loyalty-rewards-delete

Move a reward to the trash, or delete it for good from there

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsDelete({
    id: ''
});

console.log(result);
```

## loyalty-rewards-get

Read one reward

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsGet({
    id: ''
});

console.log(result);
```

## loyalty-rewards-update

Correct a reward

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsUpdate({
    id: '',
    active: true, // optional
    code: '', // optional
    description: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    labels: null, // optional
    metadata: null, // optional
    minTierId: '', // optional
    pointsCost: 1, // optional
    programId: '', // optional
    promotionId: '', // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    voucherBatchId: '' // optional
});

console.log(result);
```

## loyalty-rewards-redeem

Redeem points for a reward voucher

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsRedeem({
    id: '',
    contactId: '', // optional
    key: '', // optional
    membershipId: '', // optional
    organizationId: '' // optional
});

console.log(result);
```

## loyalty-rewards-restore

Bring a reward back out of the trash

```javascript
import { Client, LoyaltyRewards } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyRewards = new LoyaltyRewards(client);

const result = await loyaltyRewards.loyaltyRewardsRestore({
    id: ''
});

console.log(result);
```
