```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAttributesUpdate({
    id: '',
    code: 'net_weight', // optional
    config: {
        "reference_entity": "brand"
    }, // optional
    entityRef: 'brand', // optional
    entityType: 'product', // optional
    externalId: 'EF000123', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    groupId: '', // optional
    isFilterable: true, // optional
    isUnique: true, // optional
    labels: {
        "de": "Nettogewicht",
        "en": "Net weight"
    }, // optional
    localizable: true, // optional
    metadata: {
        "do_not_export": true,
        "sync_owner": "erp-nightly"
    }, // optional
    position: 1, // optional
    scopable: true, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    type: 'select', // optional
    usableInGrid: true, // optional
    validation: {
        "max_length": 64,
        "min_length": 3
    } // optional
});

console.log(result);
```
