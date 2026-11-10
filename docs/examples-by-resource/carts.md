# carts

## carts-list

List carts

```javascript
import { Client, Carts, CartStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsList({
    id: '', // optional
    name: 'Weekly order', // optional
    status: CartStatus.Active, // optional
    contactId: '', // optional
    organizationId: '', // optional
    sessionKey: 'a1b2c3d4e5f6', // optional
    isGuest: true, // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    isCurrent: true, // optional
    itemCount: 100, // optional
    subtotal: 12, // optional
    discountTotal: 1.2, // optional
    shippingTotal: 4.9, // optional
    taxTotal: 2.983, // optional
    grandTotal: 18.683, // optional
    shippingMethod: 'Standard', // optional
    totalsComputedAt: '2026-10-15T09:30:00.000Z', // optional
    abandonedAt: '2026-01-01T12:00:00Z', // optional
    orderedAt: '2026-01-01T12:00:00Z', // optional
    orderRef: 'SO-10042', // optional
    mergedIntoCartId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## carts-create

Create a cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsCreate({
    attribution: {}, // optional
    channelId: '', // optional
    contactId: '', // optional
    currency: 'EUR', // optional
    isCurrent: true, // optional
    metadata: {
        "campaign": "spring-catalogue",
        "locale": "de-DE",
        "source": "storefront"
    }, // optional
    name: 'Weekly order', // optional
    organizationId: '', // optional
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-claim

Claim guest carts for a contact

```javascript
import { Client, Carts, CartMergeStrategy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsClaim({
    contactId: '',
    sessionKey: 'a1b2c3d4e5f6',
    organizationId: '', // optional
    strategy: CartMergeStrategy.Merge, // optional
    targetCartId: '' // optional
});

console.log(result);
```

## carts-held-codes

List the voucher codes open carts hold

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsHeldCodes({
    code: 'FRUEHJAHR25,B2B-10', // optional
    status: 'active,abandoned', // optional
    limit: 1, // optional
    offset: 1 // optional
});

console.log(result);
```

## carts-maintenance-run

Run the cart maintenance sweep

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsMaintenanceRun({
    dryRun: true // optional
});

console.log(result);
```

## carts-merge

Merge a source cart into a target cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsMerge({
    sourceCartId: '',
    targetCartId: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-on-behalf

Open a cart in a customer's name

```javascript
import { Client, Carts, CartOrderingChannel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsOnBehalf({
    contactId: '',
    channel: CartOrderingChannel.Phone, // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    name: 'Phone order', // optional
    note: 'Call back at 2 pm, deliver to plant north', // optional
    organizationId: '' // optional
});

console.log(result);
```

## carts-vocabularies-list

List vocabularies

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsVocabulariesList();

console.log(result);
```

## carts-vocabularies-get

Read one vocabulary

```javascript
import { Client, Carts, Name } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsVocabulariesGet({
    name: Name.Ioapplymodes
});

console.log(result);
```

## carts-delete

Delete a cart including its items

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsDelete({
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-get

Read one cart by id

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsGet({
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-update

Update a cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsUpdate({
    id: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    attribution: {}, // optional
    channelId: '', // optional
    currency: 'EUR', // optional
    discountLines: [{"amount":1.2,"detail":"Gutschein FRUEHJAHR25 · 10 %","label":"Frühjahrsaktion","voucher_code":"FRUEHJAHR25"}], // optional
    metadata: {
        "campaign": "spring-catalogue",
        "locale": "de-DE",
        "source": "storefront"
    }, // optional
    name: 'Weekly order', // optional
    organizationId: '', // optional
    shippingMethod: 'Standard', // optional
    shippingTotal: 4.9, // optional
    voucherCodes: ["FRUEHJAHR25","B2B-10"] // optional
});

console.log(result);
```

## carts-abandon

Abandon an active cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsAbandon({
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-activate

Make a cart the owner's current cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsActivate({
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-merge-into

Merge this cart into another cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsMergeInto({
    id: '',
    targetCartId: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```

## carts-order

Mark an active cart as ordered

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsOrder({
    id: '',
    sessionKey: 'a1b2c3d4e5f6', // optional
    orderRef: 'SO-10042' // optional
});

console.log(result);
```

## carts-reopen

Reopen an abandoned cart

```javascript
import { Client, Carts } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const carts = new Carts(client);

const result = await carts.cartsReopen({
    id: '',
    sessionKey: 'a1b2c3d4e5f6' // optional
});

console.log(result);
```
