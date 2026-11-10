# inventories.locations

## inventories-locations-list

List stock locations

```javascript
import { Client, InventoriesLocations, InventoriesLocationsListType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    code: 'main', // optional
    name: 'Main warehouse', // optional
    labels: '{}', // optional
    type: InventoriesLocationsListType.Warehouse, // optional
    priority: 0, // optional
    enabled: true, // optional
    address: '{}', // optional
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

## inventories-locations-create

Create a location

```javascript
import { Client, InventoriesLocations, LocationType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsCreate({
    code: 'main',
    name: 'Main warehouse',
    address: {
        "address_line1": "Industriering 4",
        "country_code": "DE",
        "formatted": [
            "Industriering 4",
            "90402 Nuremberg"
        ],
        "locality": "Nuremberg",
        "postal_code": "90402"
    }, // optional
    enabled: true, // optional
    labels: {
        "de": "Hauptlager",
        "en": "Main warehouse"
    }, // optional
    metadata: {
        "erp_site": "1000"
    }, // optional
    priority: 0, // optional
    type: LocationType.Warehouse // optional
});

console.log(result);
```

## inventories-locations-defaults

Seed a new tenant

```javascript
import { Client, InventoriesLocations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsDefaults();

console.log(result);
```

## inventories-locations-delete

Delete a location

```javascript
import { Client, InventoriesLocations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsDelete({
    id: ''
});

console.log(result);
```

## inventories-locations-get

Read one location

```javascript
import { Client, InventoriesLocations } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsGet({
    id: ''
});

console.log(result);
```

## inventories-locations-update

Update a location

```javascript
import { Client, InventoriesLocations, LocationType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const inventoriesLocations = new InventoriesLocations(client);

const result = await inventoriesLocations.inventoriesLocationsUpdate({
    id: '',
    address: {
        "address_line1": "Industriering 4",
        "country_code": "DE",
        "formatted": [
            "Industriering 4",
            "90402 Nuremberg"
        ],
        "locality": "Nuremberg",
        "postal_code": "90402"
    }, // optional
    code: 'main', // optional
    enabled: true, // optional
    labels: {
        "de": "Hauptlager",
        "en": "Main warehouse"
    }, // optional
    metadata: {
        "erp_site": "1000"
    }, // optional
    name: 'Main warehouse', // optional
    priority: 0, // optional
    type: LocationType.Warehouse // optional
});

console.log(result);
```
