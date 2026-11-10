# journeys.watches

## journeys-watches-list

List notification requests

```javascript
import { Client, JourneysWatches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysWatches = new JourneysWatches(client);

const result = await journeysWatches.journeysWatchesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    contactId: '', // optional
    email: '', // optional
    productId: '', // optional
    sku: '', // optional
    market: '', // optional
    state: '', // optional
    source: '' // optional
});

console.log(result);
```

## journeys-watches-create

Ask to be told when a product is back

```javascript
import { Client, JourneysWatches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysWatches = new JourneysWatches(client);

const result = await journeysWatches.journeysWatchesCreate({
    contactId: '', // optional
    email: '', // optional
    market: '', // optional
    productId: '', // optional
    sku: '', // optional
    source: '' // optional
});

console.log(result);
```

## journeys-watches-delete

Withdraw a notification request

```javascript
import { Client, JourneysWatches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysWatches = new JourneysWatches(client);

const result = await journeysWatches.journeysWatchesDelete({
    id: ''
});

console.log(result);
```

## journeys-watches-get

Read one notification request

```javascript
import { Client, JourneysWatches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysWatches = new JourneysWatches(client);

const result = await journeysWatches.journeysWatchesGet({
    id: ''
});

console.log(result);
```
