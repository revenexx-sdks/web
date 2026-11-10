# carts.items

## carts-items-list

List the items of a cart

```javascript
import { Client, CartsItems, CartItemType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsList({
    cartId: '',
    id: '', // optional
    type: CartItemType.Product, // optional
    productId: '', // optional
    sku: 'BOLT-M8-30', // optional
    name: 'Hex bolt M8', // optional
    quantity: 100, // optional
    unit: 'pcs', // optional
    unitPrice: 0.12, // optional
    taxRate: 19, // optional
    lineTotal: 12, // optional
    position: 0, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-items-create

Add an item to a cart

```javascript
import { Client, CartsItems, CartItemType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsCreate({
    cartId: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    configuration: {
        "colour": "RAL 7016",
        "finish": "brushed",
        "length_mm": 2400,
        "mounting": "wall"
    }, // optional
    currency: 'EUR', // optional
    metadata: {
        "campaign": "spring-catalogue",
        "locale": "de-DE",
        "source": "storefront"
    }, // optional
    name: 'Hex bolt M8', // optional
    position: 1, // optional
    productId: '', // optional
    quantity: 9.99, // optional
    sku: 'BOLT-M8-30', // optional
    snapshot: {}, // optional
    taxRate: 19, // optional
    type: CartItemType.Product, // optional
    unit: 'pcs', // optional
    unitPrice: 9.99 // optional
});

console.log(result);
```

## carts-items-replace

Replace all items of a cart

```javascript
import { Client, CartsItems } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsReplace({
    cartId: '',
    items: [],
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-items-priced

Add a line priced for the cart's buyer

```javascript
import { Client, CartsItems } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsPriced({
    cartId: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    productId: '', // optional
    quantity: 9.99, // optional
    sku: 'BOLT-M8-30', // optional
    taxRate: 19, // optional
    unitPrice: 12.5 // optional
});

console.log(result);
```

## carts-items-delete

Remove an item from a cart

```javascript
import { Client, CartsItems } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsDelete({
    cartId: '',
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-items-get

Read one cart item

```javascript
import { Client, CartsItems } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsGet({
    cartId: '',
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-items-update

Update a cart item

```javascript
import { Client, CartsItems, CartItemType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const cartsItems = new CartsItems(client);

const result = await cartsItems.cartsItemsUpdate({
    cartId: '',
    id: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    configuration: {
        "colour": "RAL 7016",
        "finish": "brushed",
        "length_mm": 2400,
        "mounting": "wall"
    }, // optional
    currency: 'EUR', // optional
    metadata: {
        "campaign": "spring-catalogue",
        "locale": "de-DE",
        "source": "storefront"
    }, // optional
    name: 'Hex bolt M8', // optional
    position: 1, // optional
    productId: '', // optional
    quantity: 9.99, // optional
    sku: 'BOLT-M8-30', // optional
    snapshot: {}, // optional
    taxRate: 19, // optional
    type: CartItemType.Product, // optional
    unit: 'pcs', // optional
    unitPrice: 9.99 // optional
});

console.log(result);
```
