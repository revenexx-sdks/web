```javascript
import { Client, Orderlists } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const orderlists = new Orderlists(client);

const result = await orderlists.orderlistsItemsList({
    listId: '',
    id: '', // optional
    productId: '', // optional
    sku: 'ACME-4711-BLK', // optional
    name: 'Copy paper A4, 80 g/m², white', // optional
    image: 'https://cdn.example.com/catalog/acme-4711-blk.jpg', // optional
    quantity: 12, // optional
    unit: 'piece', // optional
    price: 3.49, // optional
    taxRate: 19, // optional
    costCenterId: 'CC-100', // optional
    positionTexts: '{}', // optional
    customSku: 'CUST-4711', // optional
    categorySlug: 'office-supplies', // optional
    subcategorySlug: 'paper', // optional
    position: 0, // optional
    metadata: '{}', // optional
    externalId: 'MERKZETTEL-20481/7', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
