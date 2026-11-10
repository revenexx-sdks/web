# quotes.ranges

## quotes-ranges-list

List number ranges

```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    active: true // optional
});

console.log(result);
```

## quotes-ranges-create

Create a number range

```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesCreate({
    code: '',
    active: true, // optional
    counter: 1, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    id: '', // optional
    labels: {}, // optional
    padding: 1, // optional
    positionStep: 1, // optional
    prefix: '', // optional
    step: 1, // optional
    suffix: '', // optional
    tenantId: '', // optional
    title: '', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## quotes-ranges-defaults

Seed the standard number range

```javascript
import { Client, QuotesRanges, PagesSeedMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesDefaults({
    library: [], // optional
    menus: [], // optional
    mode: PagesSeedMode.Fill, // optional
    pages: [], // optional
    settings: {} // optional
});

console.log(result);
```

## quotes-ranges-delete

Remove a number range

```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesDelete({
    id: ''
});

console.log(result);
```

## quotes-ranges-get

Read one number range

```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesGet({
    id: ''
});

console.log(result);
```

## quotes-ranges-update

Change a number range

```javascript
import { Client, QuotesRanges } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesRanges = new QuotesRanges(client);

const result = await quotesRanges.quotesRangesUpdate({
    id: '',
    active: true, // optional
    code: '', // optional
    counter: 1, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    idBody: '', // optional
    labels: {}, // optional
    padding: 1, // optional
    positionStep: 1, // optional
    prefix: '', // optional
    step: 1, // optional
    suffix: '', // optional
    tenantId: '', // optional
    title: '', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
