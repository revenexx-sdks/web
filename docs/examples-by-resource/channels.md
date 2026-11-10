# channels

## channels-list

List channels

```javascript
import { Client, Channels, ChannelStatus, ChannelUnassignedVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsList({
    id: '', // optional
    code: 'shop', // optional
    name: 'Shop', // optional
    labels: '{"en":"Shop","de":"Shop"}', // optional
    type: 'storefront', // optional
    status: ChannelStatus.Active, // optional
    unassignedVisibility: ChannelUnassignedVisibility.Inherit, // optional
    isDefault: true, // optional
    position: 1, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## channels-create

Create a channel

```javascript
import { Client, Channels, ChannelStatus, ChannelUnassignedVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsCreate({
    code: 'shop',
    name: 'Shop',
    isDefault: true, // optional
    labels: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    position: 1, // optional
    status: ChannelStatus.Active, // optional
    type: 'storefront', // optional
    unassignedVisibility: ChannelUnassignedVisibility.Inherit // optional
});

console.log(result);
```

## channels-context

Resolve the active channel

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsContext({
    channel: 'shop' // optional
});

console.log(result);
```

## channels-defaults

Restore the shipped defaults

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsDefaults();

console.log(result);
```

## channels-types-list

The channel types this tenant keeps

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsTypesList({
    limit: 1, // optional
    offset: 1, // optional
    active: true // optional
});

console.log(result);
```

## channels-types-create

Add a channel type

```javascript
import { Client, Channels, ChannelTypeTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsTypesCreate({
    code: 'feed',
    title: 'Product feed',
    active: true, // optional
    description: 'A web shop a human browses.', // optional
    descriptions: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    position: 1, // optional
    tone: ChannelTypeTone.Neutral // optional
});

console.log(result);
```

## channels-types-delete

Remove a channel type nothing uses

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsTypesDelete({
    id: ''
});

console.log(result);
```

## channels-types-get

Read one channel type

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsTypesGet({
    id: ''
});

console.log(result);
```

## channels-types-update

Rename a channel type or move it in the order

```javascript
import { Client, Channels, ChannelTypeTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsTypesUpdate({
    id: '',
    active: false, // optional
    description: 'A web shop a human browses.', // optional
    descriptions: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    position: 1, // optional
    title: 'Product feed', // optional
    tone: ChannelTypeTone.Neutral // optional
});

console.log(result);
```

## channels-visibility

Decide which rows a channel may see

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsVisibility({
    items: [],
    channel: 'shop', // optional
    channelBody: 'shop' // optional
});

console.log(result);
```

## channels-vocabularies-list

List vocabularies

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsVocabulariesList();

console.log(result);
```

## channels-vocabularies-get

Read one vocabulary

```javascript
import { Client, Channels, ChannelsVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsVocabulariesGet({
    name: ChannelsVocabulariesGetName.Statuses
});

console.log(result);
```

## channels-delete

Delete a channel by id

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsDelete({
    id: ''
});

console.log(result);
```

## channels-get

Read one channel by id

```javascript
import { Client, Channels } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsGet({
    id: ''
});

console.log(result);
```

## channels-update

Update a channel by id

```javascript
import { Client, Channels, ChannelStatus, ChannelUnassignedVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const channels = new Channels(client);

const result = await channels.channelsUpdate({
    id: '',
    code: 'shop', // optional
    isDefault: true, // optional
    labels: {
        "de": "Shop",
        "en": "Shop"
    }, // optional
    name: 'Shop', // optional
    position: 1, // optional
    status: ChannelStatus.Active, // optional
    type: 'storefront', // optional
    unassignedVisibility: ChannelUnassignedVisibility.Inherit // optional
});

console.log(result);
```
