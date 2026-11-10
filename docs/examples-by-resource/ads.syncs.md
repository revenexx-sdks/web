# ads.syncs

## ads-syncs-list

List audience syncs

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    adAccountId: '', // optional
    audienceId: '', // optional
    audienceCode: '', // optional
    subscriptionType: '', // optional
    externalAudienceId: '', // optional
    state: '', // optional
    active: '', // optional
    stale: '', // optional
    memberCount: '', // optional
    matchedCount: '', // optional
    uploadedCount: '', // optional
    skippedCount: '', // optional
    lastError: '' // optional
});

console.log(result);
```

## ads-syncs-create

Sync an audience to an ad account

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsCreate({
    adAccountId: '',
    audienceId: '',
    subscriptionType: '',
    active: true, // optional
    audienceCode: '', // optional
    externalAudienceId: '', // optional
    metadata: null // optional
});

console.log(result);
```

## ads-syncs-delete

Stop syncing an audience

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsDelete({
    id: ''
});

console.log(result);
```

## ads-syncs-get

Read one audience sync

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsGet({
    id: ''
});

console.log(result);
```

## ads-syncs-update

Switch a sync on or off or change its consent type

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsUpdate({
    id: '',
    active: true, // optional
    adAccountId: '', // optional
    audienceCode: '', // optional
    audienceId: '', // optional
    externalAudienceId: '', // optional
    metadata: null, // optional
    subscriptionType: '' // optional
});

console.log(result);
```

## ads-syncs-members

Read one page of hashed members for the upload

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsMembers({
    id: '',
    cursor: '', // optional
    limit: 1 // optional
});

console.log(result);
```

## ads-syncs-request

Request an upload of the audience now

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsRequest({
    id: '',
    data: {}
});

console.log(result);
```

## ads-syncs-result

Report what an upload achieved

```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsResult({
    id: '',
    error: '', // optional
    externalAudienceId: '', // optional
    matchedCount: 1, // optional
    memberCount: 1, // optional
    ok: true, // optional
    skippedCount: 1, // optional
    uploadedCount: 1 // optional
});

console.log(result);
```
