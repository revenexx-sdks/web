```javascript
import { Client, Products, ProductsListTrashed, ProductsListKind, ProductsListStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const products = new Products(client);

const result = await products.productsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    trashed: ProductsListTrashed.Only, // optional
    id: '', // optional
    sku: 'ACME-4711-BLK', // optional
    kind: ProductsListKind.Simple, // optional
    parentId: '', // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    manufacturerId: '', // optional
    enabled: true, // optional
    status: ProductsListStatus.Draft, // optional
    statusChangedAt: '2026-01-01T12:00:00Z', // optional
    channelRelease: '{}', // optional
    channels: '{webshop-de,punchout}', // optional
    taxClass: 'standard', // optional
    baseValues: '{}', // optional
    attributeValues: '{}', // optional
    label: 'Akku-Bohrschrauber 18V', // optional
    quantifiedAssociations: '{}', // optional
    completeness: '{}', // optional
    manufacturerGpsrComplete: true, // optional
    externalId: 'ART-4711', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'merchant@example.com', // optional
    deletedById: '283746592837465012', // optional
    trashBatch: '', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: ''S1230020C1TI25' still has stock at 2 location(s)' // optional
});

console.log(result);
```
