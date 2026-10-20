```javascript
import { Client, ProductsCategories, ProductsListTrashed, RuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsCategories = new ProductsCategories(client);

const result = await productsCategories.productsCategoriesList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    trashed: ProductsListTrashed.Only, // optional
    id: '', // optional
    code: 'cordless_drills', // optional
    parentId: '', // optional
    path: 'tools/power_tools/cordless_drills', // optional
    position: 1, // optional
    labels: '{}', // optional
    values: '{}', // optional
    rules: '{}', // optional
    ruleMatch: RuleMatch.All, // optional
    rulesComputedAt: '2026-01-01T12:00:00Z', // optional
    pathLabel: 'Werkzeug › Elektrowerkzeug › Akku-Bohrschrauber', // optional
    membersDirect: 1, // optional
    membersTotal: 1, // optional
    countsComputedAt: '2026-01-01T12:00:00Z', // optional
    active: true, // optional
    externalId: 'EG000024', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
    metadata: '{}', // optional
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
