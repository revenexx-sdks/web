```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsUpdate({
    id: '',
    externalId: 'MERKZETTEL-20481', // optional
    externalRefs: {
        "business-central": "REQ-2026-0042",
        "legacy_shop": "MERKZETTEL-20481"
    }, // optional
    kind: 'shopping', // optional
    metadata: {
        "department": "facility",
        "erp_reference": "REQ-2026-0042"
    }, // optional
    name: 'Weekly office supplies', // optional
    organizationId: '', // optional
    ownerId: '', // optional
    shared: true, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "merkzettel_id": 20481
        },
        "system": "legacy_shop"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
