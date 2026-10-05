```javascript
import { Client, Products, ProductsListKind } from "@revenexx/sdk";

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
    id: '', // optional
    sku: 'ACME-4711-BLK', // optional
    kind: ProductsListKind.Simple, // optional
    parentId: '', // optional
    familyId: '', // optional
    familyVariantId: '', // optional
    enabled: true, // optional
    taxClass: 'standard', // optional
    attributeValues: '{}', // optional
    label: 'Akku-Bohrschrauber 18V', // optional
    quantifiedAssociations: '{}', // optional
    completeness: '{}', // optional
    externalId: 'ART-4711', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    deletedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
