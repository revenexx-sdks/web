# promotions.redemptions

## promotions-redemptions-commit

Commit a cart holds against the order it became

```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsCommit({
    orderId: '',
    cartId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    market: '', // optional
    orderNumber: '', // optional
    organizationId: '', // optional
    promotions: [], // optional
    redeemedBy: '', // optional
    terms: {} // optional
});

console.log(result);
```

## promotions-redemptions-sweep

Clear away holds that stopped counting

```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsSweep();

console.log(result);
```

## promotions-redemptions-list

List redemptions

```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    promotionId: '', // optional
    voucherId: '', // optional
    voucherCode: '', // optional
    batchId: '', // optional
    cartId: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    redeemedBy: '', // optional
    state: '' // optional
});

console.log(result);
```

## promotions-redemptions-get

Read one redemption

```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsGet({
    id: ''
});

console.log(result);
```

## promotions-redemptions-release

Give a cart or an order redemptions back

```javascript
import { Client, PromotionsRedemptions, PromotionsRedemptionsReleaseReason } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsRelease({
    cartId: '', // optional
    orderId: '', // optional
    reason: PromotionsRedemptionsReleaseReason.CartReleased // optional
});

console.log(result);
```

## promotions-redemptions-reserve

Hold a cart promotions so nobody else can spend them

```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsReserve({
    cartId: '',
    contactId: '', // optional
    currency: '', // optional
    fromCartId: '', // optional
    organizationId: '', // optional
    promotions: [], // optional
    redeemedBy: '' // optional
});

console.log(result);
```

## promotions-redemptions-returns

Credit back what a return took out of an order

```javascript
import { Client, PromotionsRedemptions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const promotionsRedemptions = new PromotionsRedemptions(client);

const result = await promotionsRedemptions.promotionsRedemptionsReturns({
    orderId: '',
    all: true, // optional
    lines: [], // optional
    remainingAmounts: {}, // optional
    remainingLines: [], // optional
    returnRef: '' // optional
});

console.log(result);
```
