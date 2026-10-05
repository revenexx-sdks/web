```javascript
import { Client, ProductsDataModel } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsDataModel = new ProductsDataModel(client);

const result = await productsDataModel.productsAttributeOptionsCreate({
    attributeId: '',
    code: 'stainless_steel',
    externalId: 'EV000456', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    labels: {
        "de": "Edelstahl",
        "en": "Stainless steel"
    }, // optional
    metadata: {
        "do_not_export": true,
        "sync_owner": "erp-nightly"
    }, // optional
    position: 1, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    swatch: {
        "hex": "#c0c0c0"
    } // optional
});

console.log(result);
```
