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
