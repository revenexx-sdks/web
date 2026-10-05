```javascript
import { Client, PaymentsLedger } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const paymentsLedger = new PaymentsLedger(client);

const result = await paymentsLedger.paymentsCreate({
    amount: 49.9,
    methodCode: 'invoice',
    cartId: '', // optional
    contactId: '', // optional
    country: 'DE', // optional
    currency: 'EUR', // optional
    externalId: 'ZAHL-4711', // optional
    externalRefs: {
        "bank_statement": "AZ-88120",
        "erp_ledger": "BEL-2026-004417"
    }, // optional
    idempotencyKey: 'checkout-2f9c41', // optional
    metadata: {
        "order_source": "web"
    }, // optional
    orderId: '', // optional
    orderRef: 'ORD-10042', // optional
    returnUrl: 'https://shop.example.com/checkout/return', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "Journal_Batch_Name": "ZAHLUNG",
            "Payment_Method_Code": "RECHNUNG"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
