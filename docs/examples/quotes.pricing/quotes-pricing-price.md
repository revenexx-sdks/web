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
