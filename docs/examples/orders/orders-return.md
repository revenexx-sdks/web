```javascript
import { Client, Orders } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orders = new Orders(client);

const result = await orders.ordersReturn({
    id: '',
    externalId: 'RMA-000271', // optional
    externalRefs: {
        "rma_portal": "C-2026-0917"
    }, // optional
    metadata: {
        "rma_portal_case": "C-2026-0917"
    }, // optional
    positions: [], // optional
    reason: 'Two of the four arrived with a cracked housing', // optional
    reasonCode: 'damaged', // optional
    restock: true, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2MDAwMCI=\"",
        "raw": {
            "Credit_Memo_No": "GS-004411",
            "Return_Reason_Code": "TRANSPORT"
        },
        "system": "business-central"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
