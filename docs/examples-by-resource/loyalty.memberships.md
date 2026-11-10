# loyalty.memberships

## loyalty-memberships-list

List members

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

## loyalty-memberships-create

Enrol a contact or a company

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

## loyalty-memberships-lookup

Read the tier, perks, balance and bonus agreement of a contact or company

```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsLookup({
    contactId: '', // optional
    organizationId: '' // optional
});

console.log(result);
```

## loyalty-memberships-delete

Delete a membership with no bookings

```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsDelete({
    id: ''
});

console.log(result);
```

## loyalty-memberships-get

Read one membership

```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsGet({
    id: ''
});

console.log(result);
```

## loyalty-memberships-update

Pause, resume or end a membership

```javascript
import { Client, LoyaltyMemberships, LoyaltyMembershipsCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsUpdate({
    id: '',
    contactId: '', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    market: '', // optional
    metadata: null, // optional
    organizationId: '', // optional
    programId: '', // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    status: LoyaltyMembershipsCreateStatus.Active // optional
});

console.log(result);
```

## loyalty-memberships-adjust

Correct a member balance by hand

```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsAdjust({
    id: '',
    points: 1,
    reason: '',
    key: '' // optional
});

console.log(result);
```

## loyalty-memberships-progress

Read the way of a member to the next tier

```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsProgress({
    id: ''
});

console.log(result);
```

## loyalty-memberships-referral-code

Read or make the referral code of a member

```javascript
import { Client, LoyaltyMemberships } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyMemberships = new LoyaltyMemberships(client);

const result = await loyaltyMemberships.loyaltyMembershipsReferralCode({
    id: '',
    contactId: '' // optional
});

console.log(result);
```
