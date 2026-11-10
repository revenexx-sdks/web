# orderlists

## orderlists-list

List order lists

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsList({
    ownerId: '', // optional
    organizationId: '', // optional
    kind: 'shopping', // optional
    externalId: 'MERKZETTEL-20481', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orderlists-create

Create an order list

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsCreate({
    name: 'Weekly office supplies',
    ownerId: '',
    ownerName: 'Jamie Rivera',
    externalId: 'MERKZETTEL-20481', // optional
    externalRefs: {
        "business-central": "REQ-2026-0042",
        "legacy_shop": "MERKZETTEL-20481"
    }, // optional
    items: [], // optional
    kind: 'shopping', // optional
    metadata: {
        "department": "facility",
        "erp_reference": "REQ-2026-0042"
    }, // optional
    organizationId: '', // optional
    shared: true, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "merkzettel_id": 20481
        },
        "system": "legacy_shop"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## orderlists-defaults

Seed the tenant list kinds

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsDefaults();

console.log(result);
```

## orderlists-kinds-list

List order list kinds

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsKindsList({
    limit: 50, // optional
    offset: 0, // optional
    active: true // optional
});

console.log(result);
```

## orderlists-kinds-create

Add a list kind

```javascript
import { Client, Orderlists, OrderListKindTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsKindsCreate({
    code: 'reagents',
    title: 'Reagent list',
    active: true, // optional
    description: 'Chemicals ordered against a standing lab protocol.', // optional
    descriptions: {
        "de": "Chemikalien, die nach einem festen Laborprotokoll bestellt werden.",
        "en": "Chemicals ordered against a standing lab protocol."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Reagenzienliste",
        "en": "Reagent list"
    }, // optional
    position: 2, // optional
    tone: OrderListKindTone.Neutral // optional
});

console.log(result);
```

## orderlists-kinds-delete

Remove a list kind nothing uses

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsKindsDelete({
    id: ''
});

console.log(result);
```

## orderlists-kinds-get

Read one list kind

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsKindsGet({
    id: ''
});

console.log(result);
```

## orderlists-kinds-update

Rename a list kind or move it in the order

```javascript
import { Client, Orderlists, OrderListKindTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsKindsUpdate({
    id: '',
    active: true, // optional
    description: 'Chemicals ordered against a standing lab protocol.', // optional
    descriptions: {
        "de": "Chemikalien, die nach einem festen Laborprotokoll bestellt werden.",
        "en": "Chemicals ordered against a standing lab protocol."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Reagenzienliste",
        "en": "Reagent list"
    }, // optional
    position: 2, // optional
    title: 'Reagent list', // optional
    tone: OrderListKindTone.Neutral // optional
});

console.log(result);
```

## orderlists-kinds-make-default

Make this the default list kind

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsKindsMakeDefault({
    id: '',
    data: {}
});

console.log(result);
```

## orderlists-vocabularies-list

List vocabularies

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsVocabulariesList();

console.log(result);
```

## orderlists-vocabularies-get

Read one vocabulary

```javascript
import { Client, Orderlists, OrderlistsVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsVocabulariesGet({
    name: OrderlistsVocabulariesGetName.Kinds
});

console.log(result);
```

## orderlists-delete

Delete an order list including its positions

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsDelete({
    id: ''
});

console.log(result);
```

## orderlists-get

Read one order list with its positions

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsGet({
    id: ''
});

console.log(result);
```

## orderlists-update

Rename a list, change its visibility or kind

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsUpdate({
    id: '',
    externalId: 'MERKZETTEL-20481', // optional
    externalRefs: {
        "business-central": "REQ-2026-0042",
        "legacy_shop": "MERKZETTEL-20481"
    }, // optional
    kind: 'shopping', // optional
    metadata: {
        "department": "facility",
        "erp_reference": "REQ-2026-0042"
    }, // optional
    name: 'Weekly office supplies', // optional
    organizationId: '', // optional
    ownerId: '', // optional
    shared: true, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "merkzettel_id": 20481
        },
        "system": "legacy_shop"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## orderlists-to-cart

Add a list's positions to a cart

```javascript
import { Client, Orderlists, OrderListCartMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsToCart({
    id: '',
    cartId: '', // optional
    currency: '', // optional
    market: 'de', // optional
    mode: OrderListCartMode.Append // optional
});

console.log(result);
```

## orderlists-transfer-owner

Hand a list to another person of its organization

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsTransferOwner({
    id: '',
    ownerId: ''
});

console.log(result);
```

## orderlists-items-list

List the positions of an order list

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsList({
    listId: '',
    id: '', // optional
    productId: '', // optional
    sku: 'ACME-4711-BLK', // optional
    name: 'Copy paper A4, 80 g/m², white', // optional
    image: 'https://cdn.example.com/catalog/acme-4711-blk.jpg', // optional
    quantity: 12, // optional
    unit: 'piece', // optional
    price: 3.49, // optional
    currency: 'EUR', // optional
    taxRate: 19, // optional
    costCenterId: 'CC-100', // optional
    positionTexts: '{}', // optional
    customSku: 'CUST-4711', // optional
    categorySlug: 'office-supplies', // optional
    subcategorySlug: 'paper', // optional
    position: 0, // optional
    metadata: '{}', // optional
    externalId: 'MERKZETTEL-20481/7', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## orderlists-items-create

Add a position to an order list

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsCreate({
    listId: '',
    name: 'Copy paper A4, 80 g/m², white',
    categorySlug: 'office-supplies', // optional
    costCenterId: 'CC-100', // optional
    currency: 'EUR', // optional
    customSku: 'CUST-4711', // optional
    externalId: 'MERKZETTEL-20481/7', // optional
    externalRefs: {
        "legacy_shop": "MERKZETTEL-20481\/7"
    }, // optional
    image: 'https://cdn.example.com/catalog/acme-4711-blk.jpg', // optional
    metadata: {
        "erp_line_ref": "4711-01"
    }, // optional
    position: 0, // optional
    positionTexts: ["Deliver to bay 3","Engraving: Team A"], // optional
    price: 3.49, // optional
    productId: '', // optional
    quantity: 12, // optional
    sku: 'ACME-4711-BLK', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "merkzettel_id": 20481
        },
        "system": "legacy_shop"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    subcategorySlug: 'paper', // optional
    taxRate: 19, // optional
    unit: 'piece' // optional
});

console.log(result);
```

## orderlists-items-replace

Replace all positions of a list

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsReplace({
    listId: '',
    items: []
});

console.log(result);
```

## orderlists-items-delete

Remove a position from an order list

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsDelete({
    listId: '',
    id: ''
});

console.log(result);
```

## orderlists-items-get

Read one position

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsGet({
    listId: '',
    id: ''
});

console.log(result);
```

## orderlists-items-update

Update a position

```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsUpdate({
    listId: '',
    id: '',
    categorySlug: 'office-supplies', // optional
    costCenterId: 'CC-100', // optional
    currency: 'EUR', // optional
    customSku: 'CUST-4711', // optional
    externalId: 'MERKZETTEL-20481/7', // optional
    externalRefs: {
        "legacy_shop": "MERKZETTEL-20481\/7"
    }, // optional
    image: 'https://cdn.example.com/catalog/acme-4711-blk.jpg', // optional
    metadata: {
        "erp_line_ref": "4711-01"
    }, // optional
    name: 'Copy paper A4, 80 g/m², white', // optional
    position: 0, // optional
    positionTexts: ["Deliver to bay 3","Engraving: Team A"], // optional
    price: 3.49, // optional
    productId: '', // optional
    quantity: 12, // optional
    sku: 'ACME-4711-BLK', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "merkzettel_id": 20481
        },
        "system": "legacy_shop"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    subcategorySlug: 'paper', // optional
    taxRate: 19, // optional
    unit: 'piece' // optional
});

console.log(result);
```
