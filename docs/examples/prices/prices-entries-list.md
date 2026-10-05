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
