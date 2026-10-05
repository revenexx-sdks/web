```javascript
import { Client, ProductsReferences } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsReferences = new ProductsReferences(client);

const result = await productsReferences.productsReferenceEntityRecordsCreate({
    code: 'acme_tools',
    referenceEntityId: '',
    attributeValues: {
        "common": {
            "country": "DE",
            "founded": 1946
        },
        "locale_specific": {
            "de_DE": {
                "description": "Werkzeughersteller aus S\u00fcddeutschland."
            }
        }
    }, // optional
    externalId: 'MFR-0815', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    labels: {
        "de": "Acme Tools",
        "en": "Acme Tools"
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
