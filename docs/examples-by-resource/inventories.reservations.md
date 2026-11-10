# inventories.reservations

## inventories-commit

Commit an order's reservations on shipment

```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesCommit({
    orderRef: 'SO-2026-000123'
});

console.log(result);
```

## inventories-release

Release an order's reservations

```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesRelease({
    orderRef: 'SO-2026-000123'
});

console.log(result);
```

## inventories-reservations-list

List reservations

```javascript
import { Client, InventoriesReservations, InventoriesReservationsListStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesReservationsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    locationId: '', // optional
    productId: '', // optional
    sku: 'ACME-4711-BLK', // optional
    quantity: 2, // optional
    orderRef: 'SO-2026-000123', // optional
    status: InventoriesReservationsListStatus.Active, // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    metadata: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## inventories-reservations-sweep

Release every reservation whose hold has run out

```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesReservationsSweep({
    data: {}
});

console.log(result);
```

## inventories-reservations-get

Read one reservation

```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesReservationsGet({
    id: ''
});

console.log(result);
```

## inventories-reserve

Reserve stock for an order

```javascript
import { Client, InventoriesReservations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesReservations = new InventoriesReservations(client);

const result = await inventoriesReservations.inventoriesReserve({
    orderRef: 'SO-2026-000123',
    expiresAt: '2026-01-01T12:00:00Z', // optional
    items: [], // optional
    locationCode: 'main', // optional
    productId: '', // optional
    quantity: 2, // optional
    shipTo: {}, // optional
    sku: 'ACME-4711-BLK' // optional
});

console.log(result);
```
