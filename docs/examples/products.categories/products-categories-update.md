```javascript
import { Client, ProductsCategories, CategoriesRuleMatch } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsCategories = new ProductsCategories(client);

const result = await productsCategories.productsCategoriesUpdate({
    id: '',
    code: 'cordless_drills', // optional
    externalId: 'EG000024', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    labels: {
        "de": "Akku-Bohrschrauber",
        "en": "Cordless drills"
    }, // optional
    metadata: {
        "do_not_export": true,
        "sync_owner": "erp-nightly"
    }, // optional
    parentId: '', // optional
    path: 'tools/power_tools/cordless_drills', // optional
    position: 1, // optional
    ruleMatch: CategoriesRuleMatch.All, // optional
    rules: {
        "conditions": [
            {
                "field": "attribute:brand",
                "operator": "in",
                "value": [
                    "acme",
                    "globex"
                ]
            },
            {
                "field": "enabled",
                "operator": "eq",
                "value": true
            }
        ]
    }, // optional
    rulesComputedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    values: {
        "hero_asset": "packshots\/cordless_drills_hero",
        "seo_title": "Cordless drills"
    } // optional
});

console.log(result);
```
