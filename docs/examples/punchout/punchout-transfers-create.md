```javascript
import { Client, Punchout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const punchout = new Punchout(client);

const result = await punchout.punchoutTransfersCreate({
    accountId: '',
    correlationKey: '',
    protocol: '',
    sessionId: '',
    cartId: '', // optional
    contactId: '', // optional
    currency: '', // optional
    externalId: '1474033675640.12345@ariba.example.com', // optional
    externalRefs: {
        "ariba": "DOC-8817264",
        "business-central": "SO-104882"
    }, // optional
    itemCount: 1, // optional
    matchedAt: '2026-01-01T12:00:00Z', // optional
    matchedOrderId: '', // optional
    organizationId: '', // optional
    payload: {}, // optional
    problems: [{"kind":"dropped","line":1,"reason":"not a GTIN-8, -12 or -13, and not a GTIN-14 with indicator 0","scope":"line","target":"EAN","value":"14012345678908"}], // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "status": "accepted"
        },
        "system": "ariba"
    }, // optional
    sourceSyncedAt: '2026-09-28T05:45:00.000Z', // optional
    targetUrl: '', // optional
    totalGross: 9.99, // optional
    totalNet: 9.99, // optional
    transferredAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
