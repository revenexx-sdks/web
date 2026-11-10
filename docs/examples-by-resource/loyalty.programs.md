# loyalty.programs

## loyalty-programs-list

List loyalty programmes

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

## loyalty-programs-create

Create a loyalty programme

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

## loyalty-programs-empty-trash

Empty the programme trash, deleting each one for good

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsEmptyTrash();

console.log(result);
```

## loyalty-programs-purge

Delete the programmes that outlived the trash retention

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsPurge();

console.log(result);
```

## loyalty-programs-delete

Move a programme to the trash, or delete it for good from there

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsDelete({
    id: ''
});

console.log(result);
```

## loyalty-programs-get

Read one programme

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsGet({
    id: ''
});

console.log(result);
```

## loyalty-programs-update

Correct a programme

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

## loyalty-programs-figures

Read the active members of a programme per tier

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsFigures({
    id: ''
});

console.log(result);
```

## loyalty-programs-open-period

Open the yearly bonus agreements for every member of a turnover bonus programme

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsOpenPeriod({
    id: '',
    period: '' // optional
});

console.log(result);
```

## loyalty-programs-restore

Bring a programme back out of the trash

```javascript
import { Client, LoyaltyPrograms } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const loyaltyPrograms = new LoyaltyPrograms(client);

const result = await loyaltyPrograms.loyaltyProgramsRestore({
    id: ''
});

console.log(result);
```
