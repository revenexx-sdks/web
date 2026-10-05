```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersAcknowledge({
    id: '',
    externalId: 'SO-004711', // optional
    externalRef: 'ERP-4711', // optional
    externalRefs: {
        "legacy_shop": "88231",
        "procurement_platform": "PO-2026-0042"
    }, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Document_Type": "Order",
            "Payment_Terms_Code": "14 TAGE"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
