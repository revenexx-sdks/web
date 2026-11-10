# carts.io

## carts-export-all

Export many carts through one profile

```javascript
import { Client, CartsIo, CartExportFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsExportAll({
    contactId: '', // optional
    createdFrom: '2026-09-01', // optional
    createdTo: '2026-09-30', // optional
    cursor: '', // optional
    format: CartExportFormat.Json, // optional
    limit: 1, // optional
    market: 'de', // optional
    profileId: '', // optional
    status: null // optional
});

console.log(result);
```

## carts-import

Import a cart from JSON, CSV or Excel

```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsImport({
    sessionKey: 'a1b2c3d4e5f6', // optional
    contactId: '', // optional
    csv: 'sku,name,quantity,unit_price
BOLT-M8-30,Hex bolt M8,100,0.12
NUT-M8,Hex nut M8,100,0.04
', // optional
    name: 'Weekly order', // optional
    organizationId: '', // optional
    payload: {
        "cart": {
            "currency": "EUR",
            "name": "Weekly order"
        },
        "items": [
            {
                "name": "Hex bolt M8",
                "quantity": 100,
                "sku": "BOLT-M8-30",
                "unit_price": 0.12
            }
        ]
    }, // optional
    profileId: '', // optional
    sessionKeyBody: 'a1b2c3d4e5f6', // optional
    targetCartId: '', // optional
    xlsx: 'UEsDBBQABgAIAAAAIQ…' // optional
});

console.log(result);
```

## carts-io-fields

List the fields a profile can map

```javascript
import { Client, CartsIo, CartIoFieldEntity, CartIoFieldRole } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoFields({
    entity: CartIoFieldEntity.CartItems, // optional
    role: CartIoFieldRole.Column // optional
});

console.log(result);
```

## carts-io-profiles-list

List import/export profiles

```javascript
import { Client, CartsIo, CartIoDirection, CartIoEntity, CartIoFormat, CartIoApplyMode } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesList({
    id: '', // optional
    name: 'cart-export-csv', // optional
    direction: CartIoDirection.Import, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    applyMode: CartIoApplyMode.Insert, // optional
    isTemplate: true, // optional
    active: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## carts-io-profiles-create

Create an import/export profile

```javascript
import { Client, CartsIo, CartIoDirection, CartIoApplyMode, CartIoEntity, CartIoFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesCreate({
    direction: CartIoDirection.Import,
    name: 'cart-export-csv',
    active: true, // optional
    applyMode: CartIoApplyMode.Insert, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    isTemplate: true, // optional
    mapping: {}, // optional
    options: {} // optional
});

console.log(result);
```

## carts-io-profiles-defaults

Seed the bundled profile templates

```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesDefaults();

console.log(result);
```

## carts-io-profiles-delete

Delete an import/export profile

```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesDelete({
    id: ''
});

console.log(result);
```

## carts-io-profiles-get

Read one import/export profile

```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesGet({
    id: ''
});

console.log(result);
```

## carts-io-profiles-update

Update an import/export profile

```javascript
import { Client, CartsIo, CartIoApplyMode, CartIoDirection, CartIoEntity, CartIoFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesUpdate({
    id: '',
    active: true, // optional
    applyMode: CartIoApplyMode.Insert, // optional
    direction: CartIoDirection.Import, // optional
    entity: CartIoEntity.Carts, // optional
    format: CartIoFormat.Json, // optional
    isTemplate: true, // optional
    mapping: {}, // optional
    name: 'cart-export-csv', // optional
    options: {} // optional
});

console.log(result);
```

## carts-io-profiles-copy

Copy an import/export profile

```javascript
import { Client, CartsIo } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsIoProfilesCopy({
    id: '',
    name: 'my-cart-import',
    parts: [] // optional
});

console.log(result);
```

## carts-export

Export a cart as JSON, CSV or Excel

```javascript
import { Client, CartsIo, CartExportFormat } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsIo = new CartsIo(client);

const result = await cartsIo.cartsExport({
    id: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    format: CartExportFormat.Json, // optional
    profileId: '' // optional
});

console.log(result);
```
