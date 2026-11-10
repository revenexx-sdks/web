# quotes.quotes

## quotes-quotes-open-items

List the open quote positions that name a product

```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesOpenItems({
    productId: '',
    status: 'requested,in_review,quoted,partially_accepted', // optional
    limit: 50, // optional
    offset: 0 // optional
});

console.log(result);
```

## quotes-quotes-list

List quotes

```javascript
import { Client, QuotesQuotes, Origin } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    status: '', // optional
    origin: Origin.Buyer, // optional
    organizationId: '', // optional
    contactId: '', // optional
    ownerId: '', // optional
    cartId: '', // optional
    number: '', // optional
    externalId: 'ANG-20481' // optional
});

console.log(result);
```

## quotes-quotes-create

Open a quote at a desk

```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesCreate({
    currency: 'EUR',
    items: [],
    billingAddress: {}, // optional
    buyer: {}, // optional
    contactId: '', // optional
    externalId: 'ANG-20481', // optional
    externalRefs: {
        "cpq": "Q-88120",
        "entitys": "4711"
    }, // optional
    metadata: {}, // optional
    organizationId: '', // optional
    ownerId: '', // optional
    reason: '', // optional
    sellerNote: '', // optional
    shippingAddress: {}, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK07"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## quotes-quotes-get

Read one quote

```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesGet({
    id: ''
});

console.log(result);
```

## quotes-quotes-copy

Copy a quote as a new one

```javascript
import { Client, QuotesQuotes, QuotesQuotesCopyParts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesCopy({
    id: '',
    parts: [QuotesQuotesCopyParts.Items] // optional
});

console.log(result);
```

## quotes-quotes-detail

Read a quote with everything on it

```javascript
import { Client, QuotesQuotes, Audience } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesDetail({
    id: '',
    audience: Audience.Customer // optional
});

console.log(result);
```

## quotes-quotes-items

List the positions of a quote

```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesItems({
    id: ''
});

console.log(result);
```

## quotes-quotes-request

Ask for a quote

```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesRequest({
    currency: 'EUR',
    items: [],
    billingAddress: {}, // optional
    buyer: {}, // optional
    buyerNote: '', // optional
    cartId: '', // optional
    contactId: '', // optional
    externalId: 'ANG-20481', // optional
    externalRefs: {
        "cpq": "Q-88120",
        "entitys": "4711"
    }, // optional
    metadata: {}, // optional
    organizationId: '', // optional
    reason: '', // optional
    shippingAddress: {}, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK07"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## quotes-quotes-vocabularies

Read the closed lists this app enforces

```javascript
import { Client, QuotesQuotes } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesVocabularies();

console.log(result);
```

## quotes-quotes-vocabulary

Read one list with the words and colours a screen shows

```javascript
import { Client, QuotesQuotes, QuotesQuotesVocabularyName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesQuotes = new QuotesQuotes(client);

const result = await quotesQuotes.quotesQuotesVocabulary({
    name: QuotesQuotesVocabularyName.Actor
});

console.log(result);
```
