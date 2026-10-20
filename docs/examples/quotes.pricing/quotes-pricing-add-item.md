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
