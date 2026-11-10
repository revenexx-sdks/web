# ads.accounts

## ads-accounts-list

List ad accounts

```javascript
import { Client, AdsAccounts, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    platform: '', // optional
    externalAccountId: '', // optional
    name: '', // optional
    connectionRef: '', // optional
    status: '', // optional
    currency: '', // optional
    lastError: '', // optional
    clicksTotal: '', // optional
    conversionsTotal: '', // optional
    deletedBy: '', // optional
    deletedById: '', // optional
    trashBatch: '', // optional
    purgeBlockedReason: '' // optional
});

console.log(result);
```

## ads-accounts-create

Add an ad account

```javascript
import { Client, AdsAccounts, Platform } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsCreate({
    externalAccountId: '',
    name: '',
    platform: Platform.Meta,
    clicksTotal: 1, // optional
    connectionRef: '', // optional
    conversionValueTotal: 9.99, // optional
    conversionsTotal: 1, // optional
    currency: '', // optional
    externalRefs: null, // optional
    figuresAt: '2026-01-01T12:00:00Z', // optional
    metadata: null, // optional
    roas: 9.99, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    spendTotal: 9.99 // optional
});

console.log(result);
```

## ads-accounts-empty-trash

Empty the ad account trash, deleting each one for good

```javascript
import { Client, AdsAccounts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsEmptyTrash();

console.log(result);
```

## ads-accounts-purge

Delete the ad accounts that outlived the trash retention

```javascript
import { Client, AdsAccounts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsPurge();

console.log(result);
```

## ads-accounts-delete

Move a ad account to the trash, or delete it for good from there

```javascript
import { Client, AdsAccounts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsDelete({
    id: ''
});

console.log(result);
```

## ads-accounts-get

Read one ad account

```javascript
import { Client, AdsAccounts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsGet({
    id: ''
});

console.log(result);
```

## ads-accounts-update

Rename an ad account or change its connection

```javascript
import { Client, AdsAccounts, Platform } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsUpdate({
    id: '',
    clicksTotal: 1, // optional
    connectionRef: '', // optional
    conversionValueTotal: 9.99, // optional
    conversionsTotal: 1, // optional
    currency: '', // optional
    externalAccountId: '', // optional
    externalRefs: null, // optional
    figuresAt: '2026-01-01T12:00:00Z', // optional
    metadata: null, // optional
    name: '', // optional
    platform: Platform.Meta, // optional
    roas: 9.99, // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    spendTotal: 9.99 // optional
});

console.log(result);
```

## ads-accounts-restore

Bring a ad account back out of the trash

```javascript
import { Client, AdsAccounts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsRestore({
    id: ''
});

console.log(result);
```

## ads-accounts-status

Report the state of an ad account connection

```javascript
import { Client, AdsAccounts, Status } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsAccounts = new AdsAccounts(client);

const result = await adsAccounts.adsAccountsStatus({
    id: '',
    status: Status.Connected,
    error: '' // optional
});

console.log(result);
```
