# inventories.stock

## inventories-adjust

Correct stock levels in a batch

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAdjust({
    items: [], // optional
    locationCode: 'main', // optional
    productId: '', // optional
    quantity: -3, // optional
    reason: 'Stocktake 2026-03, two units damaged', // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```

## inventories-availability

Check item availability across locations

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailability({
    items: [], // optional
    locationCode: 'main', // optional
    productId: '', // optional
    quantity: 1, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```

## inventories-availability-states-list

List availability states

```javascript
import { Client, InventoriesStock, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailabilityStatesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    code: 'on_order', // optional
    title: 'On order', // optional
    description: 'Replenishment is on its way; the expected date says when.', // optional
    labels: '{}', // optional
    descriptions: '{}', // optional
    orderable: true, // optional
    isDefault: true, // optional
    active: true, // optional
    tone: Tone.Neutral, // optional
    position: 1, // optional
    isSystem: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## inventories-availability-states-create

Add an availability state

```javascript
import { Client, InventoriesStock, AvailabilityStateTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailabilityStatesCreate({
    code: 'on_order',
    title: 'On order',
    active: true, // optional
    description: 'Replenishment is on its way; the expected date says when.', // optional
    descriptions: {
        "de": "Nachschub ist unterwegs.",
        "en": "Replenishment is on its way."
    }, // optional
    isDefault: true, // optional
    isSystem: true, // optional
    labels: {
        "de": "Bestellt",
        "en": "On order"
    }, // optional
    orderable: true, // optional
    position: 1, // optional
    tone: AvailabilityStateTone.Info // optional
});

console.log(result);
```

## inventories-availability-states-delete

Remove an availability state

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailabilityStatesDelete({
    id: ''
});

console.log(result);
```

## inventories-availability-states-get

Read one availability state

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailabilityStatesGet({
    id: ''
});

console.log(result);
```

## inventories-availability-states-update

Rename or re-tone an availability state

```javascript
import { Client, InventoriesStock, AvailabilityStateTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesAvailabilityStatesUpdate({
    id: '',
    active: true, // optional
    code: 'on_order', // optional
    description: 'Replenishment is on its way; the expected date says when.', // optional
    descriptions: {
        "de": "Nachschub ist unterwegs.",
        "en": "Replenishment is on its way."
    }, // optional
    isDefault: true, // optional
    isSystem: true, // optional
    labels: {
        "de": "Bestellt",
        "en": "On order"
    }, // optional
    orderable: true, // optional
    position: 1, // optional
    title: 'On order', // optional
    tone: AvailabilityStateTone.Info // optional
});

console.log(result);
```

## inventories-movements-list

List stock movements

```javascript
import { Client, InventoriesStock, InventoriesMovementsListType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesMovementsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    locationId: '', // optional
    productId: '', // optional
    sku: 'ACME-4711-BLK', // optional
    type: InventoriesMovementsListType.Inbound, // optional
    quantity: 5, // optional
    orderRef: 'SO-2026-000123', // optional
    reason: 'Delivery note 4711', // optional
    metadata: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## inventories-movements-get

Read one movement

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesMovementsGet({
    id: ''
});

console.log(result);
```

## inventories-receive

Goods inbound: +on_hand with a ledger row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesReceive({
    items: [], // optional
    locationCode: 'main', // optional
    productId: '', // optional
    quantity: 12, // optional
    reason: 'Delivery note 4711', // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```

## inventories-reorder-alerts

List stock at or below the reorder point

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesReorderAlerts();

console.log(result);
```

## inventories-reorder-scan

Publish a stock_level.low event for each low row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesReorderScan({
    data: {}
});

console.log(result);
```

## inventories-restock

Returns back to stock: +on_hand with a ledger row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesRestock({
    items: [], // optional
    locationCode: 'main', // optional
    orderRef: 'SO-2026-000123', // optional
    productId: '', // optional
    quantity: 1, // optional
    reason: 'Return: wrong size', // optional
    restock: true, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```

## inventories-stock-list

List stock levels

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    locationId: '', // optional
    productId: '', // optional
    sku: 'ACME-4711-BLK', // optional
    onHand: 42, // optional
    reserved: 5, // optional
    available: 37, // optional
    belowReorder: true, // optional
    reorderPoint: 10, // optional
    expectedAt: '2026-11-14', // optional
    availabilityCode: 'available', // optional
    metadata: '{}', // optional
    externalId: 'LAGER-01', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## inventories-stock-create

Create a stock level row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockCreate({
    locationId: '',
    availabilityCode: 'available', // optional
    expectedAt: '2026-11-14', // optional
    metadata: {
        "backorder": true
    }, // optional
    productId: '', // optional
    reorderPoint: 10, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```

## inventories-stock-delete

Delete a stock level row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockDelete({
    id: ''
});

console.log(result);
```

## inventories-stock-get

Read one stock level

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockGet({
    id: ''
});

console.log(result);
```

## inventories-stock-update

Update a stock level row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockUpdate({
    id: '',
    availabilityCode: 'available', // optional
    expectedAt: '2026-11-14', // optional
    locationId: '', // optional
    metadata: {
        "backorder": true
    }, // optional
    productId: '', // optional
    reorderPoint: 10, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```

## inventories-stock-adjust

Correct one stock row

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesStockAdjust({
    id: '',
    quantity: -3,
    reason: 'Stocktake 2026-03, two units damaged' // optional
});

console.log(result);
```

## inventories-vocabularies-list

List vocabularies

```javascript
import { Client, InventoriesStock } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesVocabulariesList();

console.log(result);
```

## inventories-vocabularies-get

Read one vocabulary

```javascript
import { Client, InventoriesStock, InventoriesVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesStock = new InventoriesStock(client);

const result = await inventoriesStock.inventoriesVocabulariesGet({
    name: InventoriesVocabulariesGetName.Availabilitystates
});

console.log(result);
```
