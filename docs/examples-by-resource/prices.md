# prices

## prices-check

Explain the price an item gets

```javascript
import { Client, Prices, Lang } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesCheck({
    at: '2026-10-18T12:00:00Z', // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    lang: Lang.De, // optional
    market: 'de', // optional
    organizationId: '', // optional
    productId: '', // optional
    quantity: 10, // optional
    segmentCodes: ["dealer"], // optional
    sku: 'ART-1001' // optional
});

console.log(result);
```

## prices-lists-list

List price lists

```javascript
import { Client, Prices, PriceListStatus, PriceListTaxBasis, PriceListTrashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsList({
    id: '', // optional
    code: 'standard', // optional
    name: 'Standard prices', // optional
    description: 'The list every buyer falls back to.', // optional
    currency: 'EUR', // optional
    status: PriceListStatus.Active, // optional
    priority: 1, // optional
    isDefault: true, // optional
    taxBasis: PriceListTaxBasis.Net, // optional
    taxIncluded: true, // optional
    requiresAuth: true, // optional
    contactId: '', // optional
    organizationId: '', // optional
    segmentCode: 'wholesale', // optional
    channelId: '', // optional
    validFrom: '2026-01-01T12:00:00Z', // optional
    validUntil: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    externalId: 'VKPL-2026', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    trashed: PriceListTrashed.Only, // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## prices-lists-create

Create a price list

```javascript
import { Client, Prices, PriceListStatus, PriceListTaxBasis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsCreate({
    code: 'dealer-de',
    name: 'Dealer prices',
    channelId: '', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    description: 'Contract prices for authorised dealers.', // optional
    isDefault: true, // optional
    labels: {
        "de": "H\u00e4ndlerpreise",
        "en": "Dealer prices"
    }, // optional
    metadata: {
        "erp_price_group": "A1",
        "source_system": "erp"
    }, // optional
    organizationId: '', // optional
    priority: 1, // optional
    requiresAuth: true, // optional
    segmentCode: 'wholesale', // optional
    status: PriceListStatus.Active, // optional
    taxBasis: PriceListTaxBasis.Net, // optional
    taxIncluded: true, // optional
    validFrom: '2026-01-01T00:00:00Z', // optional
    validUntil: '2026-12-31T23:59:59Z' // optional
});

console.log(result);
```

## prices-lists-defaults

Seed the standard price list

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsDefaults();

console.log(result);
```

## prices-lists-empty-trash

Delete every price list in the trash for good

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsEmptyTrash({
    data: {}
});

console.log(result);
```

## prices-lists-delete

Trash a price list, or delete it for good

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsDelete({
    id: ''
});

console.log(result);
```

## prices-lists-get

Read one price list

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsGet({
    id: ''
});

console.log(result);
```

## prices-lists-update

Update a price list

```javascript
import { Client, Prices, PriceListStatus, PriceListTaxBasis } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsUpdate({
    id: '',
    channelId: '', // optional
    code: 'dealer-de', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    description: 'Contract prices for authorised dealers.', // optional
    isDefault: true, // optional
    labels: {
        "de": "H\u00e4ndlerpreise",
        "en": "Dealer prices"
    }, // optional
    metadata: {
        "erp_price_group": "A1",
        "source_system": "erp"
    }, // optional
    name: 'Dealer prices', // optional
    organizationId: '', // optional
    priority: 1, // optional
    requiresAuth: true, // optional
    segmentCode: 'wholesale', // optional
    status: PriceListStatus.Active, // optional
    taxBasis: PriceListTaxBasis.Net, // optional
    taxIncluded: true, // optional
    validFrom: '2026-01-01T00:00:00Z', // optional
    validUntil: '2026-12-31T23:59:59Z' // optional
});

console.log(result);
```

## prices-lists-copy

Copy a price list under a new code

```javascript
import { Client, Prices, Parts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsCopy({
    id: '',
    code: 'dealer-de-2027',
    parts: [Parts.Prices] // optional
});

console.log(result);
```

## prices-lists-restore

Take a price list back out of the trash

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsRestore({
    id: '',
    data: {}
});

console.log(result);
```

## prices-entries-list

List price list entries

```javascript
import { Client, Prices, PriceEntryType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesList({
    listId: '',
    id: '', // optional
    productId: '', // optional
    sku: 'BOLT-M8-30', // optional
    priceType: PriceEntryType.Standard, // optional
    quantityMin: 9.99, // optional
    unitPrice: 9.99, // optional
    unit: 'pcs', // optional
    priceQuantity: 9.99, // optional
    priceQuantityUnit: 'm', // optional
    discountPercent: 9.99, // optional
    description: 'Cable, per 100 m, alloy surcharge included', // optional
    validFrom: '2026-01-01T12:00:00Z', // optional
    validUntil: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    externalId: 'VKPL-2026/10000', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## prices-entries-create

Add a price entry

```javascript
import { Client, Prices, PriceEntryType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesCreate({
    listId: '',
    description: 'Cable, per 100 m, alloy surcharge included', // optional
    discountPercent: 9.99, // optional
    metadata: {
        "imported_batch": "2026-02-14",
        "source_system": "erp"
    }, // optional
    priceQuantity: 9.99, // optional
    priceQuantityUnit: 'm', // optional
    priceType: PriceEntryType.Standard, // optional
    productId: '', // optional
    quantityMin: 9.99, // optional
    sku: 'BOLT-M8-30', // optional
    unit: 'pcs', // optional
    unitPrice: 9.99, // optional
    validFrom: '2026-03-01T00:00:00Z', // optional
    validUntil: '2026-03-31T23:59:59Z' // optional
});

console.log(result);
```

## prices-entries-replace

Replace all entries of a price list

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesReplace({
    listId: '',
    entries: []
});

console.log(result);
```

## prices-entries-adjust

Bulk-change the prices of a list

```javascript
import { Client, Prices, PriceEndingRule } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesAdjust({
    listId: '',
    amount: 9.99, // optional
    dryRun: true, // optional
    percent: 9.99, // optional
    rounding: PriceEndingRule.Exact, // optional
    skuPrefix: 'BOLT-' // optional
});

console.log(result);
```

## prices-entries-bulk

Bulk-upsert price entries

```javascript
import { Client, Prices, PriceEntriesBulkMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesBulk({
    listId: '',
    entries: [],
    mode: PriceEntriesBulkMode.Upsert // optional
});

console.log(result);
```

## prices-entries-ladder

Generate a quantity ladder for one item

```javascript
import { Client, Prices, PriceEndingRule } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesLadder({
    listId: '',
    basePrice: 9.99,
    discountPercent: 9.99, // optional
    productId: '', // optional
    quantities: [1,10,50], // optional
    replace: true, // optional
    rounding: PriceEndingRule.Exact, // optional
    sku: 'BOLT-M8-30', // optional
    unit: 'pcs' // optional
});

console.log(result);
```

## prices-entries-delete

Delete a price entry

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesDelete({
    listId: '',
    id: ''
});

console.log(result);
```

## prices-entries-get

Read one price entry

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesGet({
    listId: '',
    id: ''
});

console.log(result);
```

## prices-entries-update

Update a price entry

```javascript
import { Client, Prices, PriceEntryType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesEntriesUpdate({
    listId: '',
    id: '',
    description: 'Cable, per 100 m, alloy surcharge included', // optional
    discountPercent: 9.99, // optional
    metadata: {
        "imported_batch": "2026-02-14",
        "source_system": "erp"
    }, // optional
    priceQuantity: 9.99, // optional
    priceQuantityUnit: 'm', // optional
    priceType: PriceEntryType.Standard, // optional
    productId: '', // optional
    quantityMin: 9.99, // optional
    sku: 'BOLT-M8-30', // optional
    unit: 'pcs', // optional
    unitPrice: 9.99, // optional
    validFrom: '2026-03-01T00:00:00Z', // optional
    validUntil: '2026-03-31T23:59:59Z' // optional
});

console.log(result);
```

## prices-lists-make-default

Move the default flag to this price list

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesListsMakeDefault({
    listId: '',
    data: {}
});

console.log(result);
```

## prices-resolve

Resolve prices for a buyer context

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesResolve({
    items: [],
    at: '2026-03-15T09:00:00Z', // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    marketId: '', // optional
    organizationId: '', // optional
    segmentCodes: ["wholesale"] // optional
});

console.log(result);
```

## prices-vocabularies-list

List vocabularies

```javascript
import { Client, Prices } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesVocabulariesList();

console.log(result);
```

## prices-vocabularies-get

Read one vocabulary

```javascript
import { Client, Prices, PricesVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const prices = new Prices(client);

const result = await prices.pricesVocabulariesGet({
    name: PricesVocabulariesGetName.Liststatuses
});

console.log(result);
```
