# tag-manager.tags

## tag-manager-registry-list

List the supported registry keys

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerRegistryList();

console.log(result);
```

## tag-manager-tags-list

List marketing tags

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    description: '', // optional
    kind: '', // optional
    registryKey: '', // optional
    scriptUrl: '', // optional
    vendorCode: '', // optional
    purposeCode: '', // optional
    load: '', // optional
    isActive: true, // optional
    createdAt: '', // optional
    updatedAt: '' // optional
});

console.log(result);
```

## tag-manager-tags-create

Create a marketing tag

```javascript
import { Client, TagManagerTags, TagManagerTagsCreateKind, Load } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsCreate({
    chainedVendorCodes: [], // optional
    code: '', // optional
    config: {}, // optional
    description: '', // optional
    eventMap: {}, // optional
    isActive: true, // optional
    kind: TagManagerTagsCreateKind.Registry, // optional
    load: Load.Immediate, // optional
    name: '', // optional
    purposeCode: '', // optional
    registryKey: '', // optional
    scriptUrl: '', // optional
    vendorCode: '' // optional
});

console.log(result);
```

## tag-manager-tags-delete

Delete a marketing tag

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsDelete({
    id: ''
});

console.log(result);
```

## tag-manager-tags-get

Read one marketing tag

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsGet({
    id: ''
});

console.log(result);
```

## tag-manager-tags-update

Edit a marketing tag

```javascript
import { Client, TagManagerTags, TagManagerTagsCreateKind, Load } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsUpdate({
    id: '',
    chainedVendorCodes: [], // optional
    code: '', // optional
    config: {}, // optional
    description: '', // optional
    eventMap: {}, // optional
    isActive: true, // optional
    kind: TagManagerTagsCreateKind.Registry, // optional
    load: Load.Immediate, // optional
    name: '', // optional
    purposeCode: '', // optional
    registryKey: '', // optional
    scriptUrl: '', // optional
    vendorCode: '' // optional
});

console.log(result);
```

## tag-manager-tags-triggers-list

List a marketing tag's triggers

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsTriggersList({
    id: ''
});

console.log(result);
```

## tag-manager-tags-triggers-attach

Attach a trigger to a marketing tag

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsTriggersAttach({
    id: '',
    triggerId: ''
});

console.log(result);
```

## tag-manager-tags-triggers-detach

Detach a trigger from a marketing tag

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsTriggersDetach({
    id: '',
    triggerId: ''
});

console.log(result);
```

## tag-manager-triggers-list

List triggers

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    kind: '', // optional
    eventName: '', // optional
    createdAt: '', // optional
    updatedAt: '' // optional
});

console.log(result);
```

## tag-manager-triggers-create

Create a trigger

```javascript
import { Client, TagManagerTags, TagManagerTriggersCreateKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersCreate({
    code: '', // optional
    conditions: {}, // optional
    eventName: '', // optional
    kind: TagManagerTriggersCreateKind.PageView, // optional
    name: '' // optional
});

console.log(result);
```

## tag-manager-triggers-delete

Delete a trigger

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersDelete({
    id: ''
});

console.log(result);
```

## tag-manager-triggers-get

Read one trigger

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersGet({
    id: ''
});

console.log(result);
```

## tag-manager-triggers-update

Edit a trigger

```javascript
import { Client, TagManagerTags, TagManagerTriggersCreateKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersUpdate({
    id: '',
    code: '', // optional
    conditions: {}, // optional
    eventName: '', // optional
    kind: TagManagerTriggersCreateKind.PageView, // optional
    name: '' // optional
});

console.log(result);
```

## tag-manager-variables-list

List variables

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVariablesList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    kind: '', // optional
    path: '', // optional
    createdAt: '', // optional
    updatedAt: '' // optional
});

console.log(result);
```

## tag-manager-variables-create

Create a variable

```javascript
import { Client, TagManagerTags, TagManagerVariablesCreateKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVariablesCreate({
    code: '', // optional
    constantValue: null, // optional
    kind: TagManagerVariablesCreateKind.EventField, // optional
    name: '', // optional
    path: '' // optional
});

console.log(result);
```

## tag-manager-variables-delete

Delete a variable

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVariablesDelete({
    id: ''
});

console.log(result);
```

## tag-manager-variables-get

Read one variable

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVariablesGet({
    id: ''
});

console.log(result);
```

## tag-manager-variables-update

Edit a variable

```javascript
import { Client, TagManagerTags, TagManagerVariablesCreateKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVariablesUpdate({
    id: '',
    code: '', // optional
    constantValue: null, // optional
    kind: TagManagerVariablesCreateKind.EventField, // optional
    name: '', // optional
    path: '' // optional
});

console.log(result);
```

## tag-manager-vocabularies-list

List the theme event vocabulary

```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVocabulariesList();

console.log(result);
```
