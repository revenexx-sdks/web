```javascript
import { Client, ProductsReferences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsReferences = new ProductsReferences(client);

const result = await productsReferences.productsReferenceEntityRecordsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    referenceEntityId: '', // optional
    code: 'acme_tools', // optional
    labels: '{}', // optional
    attributeValues: '{}', // optional
    externalId: 'MFR-0815', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
