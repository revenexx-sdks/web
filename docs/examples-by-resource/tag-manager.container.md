# tag-manager.container

## tag-manager-container-checks-list

List container checks

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerChecksList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    containerVersionId: '', // optional
    containerVersionNumber: 1, // optional
    policyVersionNumber: 1, // optional
    reason: '', // optional
    ok: true, // optional
    checkedAt: '' // optional
});

console.log(result);
```

## tag-manager-container-checks-get

Read one container check

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerChecksGet({
    id: ''
});

console.log(result);
```

## tag-manager-container-versions-list

List container versions

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerVersionsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    number: 1, // optional
    market: '', // optional
    sha256: '', // optional
    policyVersionNumber: 1, // optional
    policySha256: '', // optional
    rolledBackFrom: 1, // optional
    note: '', // optional
    publishedBy: '', // optional
    publishedAt: '' // optional
});

console.log(result);
```

## tag-manager-container-versions-get

Read one container version

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerVersionsGet({
    id: ''
});

console.log(result);
```

## tag-manager-container-publish

Publish the container

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerPublish({
    note: '' // optional
});

console.log(result);
```

## tag-manager-container-recheck

Re-check the live containers

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerRecheck({
    data: {}
});

console.log(result);
```

## tag-manager-container-rollback

Publish an old version again

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerRollback({
    version: 1
});

console.log(result);
```

## tag-manager-container-status

Show the live containers and their latest check

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerStatus();

console.log(result);
```

## tag-manager-container-validate

Validate the draft container against the consent policy

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerValidate({
    data: {}
});

console.log(result);
```

## tag-manager-preview-create

Mint a preview token for the draft

```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerPreviewCreate({
    ttlMinutes: 1 // optional
});

console.log(result);
```
