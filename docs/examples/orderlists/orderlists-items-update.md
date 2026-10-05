```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsUpdate({
    listId: '',
    id: '',
    categorySlug: 'office-supplies', // optional
    costCenterId: 'CC-100', // optional
    customSku: 'CUST-4711', // optional
    externalId: 'MERKZETTEL-20481/7', // optional
    externalRefs: {
        "legacy_shop": "MERKZETTEL-20481\/7"
    }, // optional
    image: 'https://cdn.example.com/catalog/acme-4711-blk.jpg', // optional
    metadata: {
        "erp_line_ref": "4711-01"
    }, // optional
    name: 'Copy paper A4, 80 g/m², white', // optional
    position: 0, // optional
    positionTexts: ["Deliver to bay 3","Engraving: Team A"], // optional
    price: 3.49, // optional
    productId: '', // optional
    quantity: 12, // optional
    sku: 'ACME-4711-BLK', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "merkzettel_id": 20481
        },
        "system": "legacy_shop"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    subcategorySlug: 'paper', // optional
    taxRate: 19, // optional
    unit: 'piece' // optional
});

console.log(result);
```
