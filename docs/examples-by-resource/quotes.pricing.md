# quotes.pricing

## quotes-pricing-expire

Expire what has run out

```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingExpire({
    data: {}
});

console.log(result);
```

## quotes-pricing-remove-item

Take a position off a quote being shaped

```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingRemoveItem({
    id: '',
    data: {}
});

console.log(result);
```

## quotes-pricing-follow-up

Set the day the desk looks at a quote again

```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingFollowUp({
    id: '',
    followUpAt: '2026-10-25' // optional
});

console.log(result);
```

## quotes-pricing-add-item

Add a position to a quote being shaped

```javascript
import { Client, QuotesPricing, PriceReason } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingAddItem({
    id: '',
    configuration: {}, // optional
    discountPercent: 5, // optional
    externalId: 'ANG-20481', // optional
    externalRefs: {
        "cpq": "Q-88120",
        "entitys": "4711"
    }, // optional
    leadTimeDays: 1, // optional
    listPrice: 1088, // optional
    metadata: {}, // optional
    name: '', // optional
    position: 1, // optional
    priceReason: PriceReason.Volume, // optional
    productId: '', // optional
    quantity: 10, // optional
    quotedPrice: 9.99, // optional
    sku: '', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK07"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    taxRate: 19, // optional
    unit: '' // optional
});

console.log(result);
```

## quotes-pricing-item

Price one position

```javascript
import { Client, QuotesPricing, PriceReason } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingItem({
    id: '',
    itemId: '',
    discountPercent: 8, // optional
    leadTimeDays: 1, // optional
    priceReason: PriceReason.Volume, // optional
    quantity: 12, // optional
    quotedPrice: 980 // optional
});

console.log(result);
```

## quotes-pricing-price

Put prices on a quote

```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingPrice({
    id: '',
    externalId: 'ANG-20481', // optional
    externalRefs: {
        "cpq": "Q-88120",
        "entitys": "4711"
    }, // optional
    items: [], // optional
    sellerNote: '', // optional
    senderCountry: 'DE', // optional
    shippingAmount: 9.99, // optional
    shippingTaxRate: 9.99, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Salesperson_Code": "VK07"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    validUntil: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## quotes-pricing-review

Take a request onto the desk

```javascript
import { Client, QuotesPricing, QuotesPricingReviewState } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingReview({
    id: '',
    contactId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    idBody: '', // optional
    issuedCount: 1, // optional
    items: null, // optional
    journeyRef: '', // optional
    locale: '', // optional
    market: '', // optional
    metadata: null, // optional
    orderId: '', // optional
    orderNumber: '', // optional
    organizationId: '', // optional
    productIds: null, // optional
    reviewedCount: 1, // optional
    state: QuotesPricingReviewState.Issued, // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    usedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```

## quotes-pricing-remind

Remind the buyer of a sent quote

```javascript
import { Client, QuotesPricing } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const quotesPricing = new QuotesPricing(client);

const result = await quotesPricing.quotesPricingRemind({
    id: '',
    data: {}
});

console.log(result);
```
