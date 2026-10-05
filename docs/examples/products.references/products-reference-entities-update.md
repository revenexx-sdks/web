```javascript
import { Client, ProductsReferences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsReferences = new ProductsReferences(client);

const result = await productsReferences.productsReferenceEntitiesUpdate({
    id: '',
    code: 'brand', // optional
    externalId: 'REG-BRAND', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    image: 'reference-entities/brand.svg', // optional
    labels: {
        "de": "Marke",
        "en": "Brand"
    }, // optional
    metadata: {
        "do_not_export": true,
        "sync_owner": "erp-nightly"
    }, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z' // optional
});

console.log(result);
```
