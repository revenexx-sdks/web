```javascript
import { Client, ProductsAssets, AssetsSource } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsAssets = new ProductsAssets(client);

const result = await productsAssets.productsAssetsCreate({
    assetFamilyId: '',
    code: 'acme-4711-blk_packshot_1',
    attributeValues: {
        "common": {
            "copyright": "\u00a9 Acme Tools",
            "expires_on": "2028-12-31"
        },
        "locale_specific": {
            "de_DE": {
                "alt_text": "Akku-Bohrschrauber, freigestellt"
            }
        }
    }, // optional
    deliveryPath: 'packshots/acme-4711-blk_1.jpg', // optional
    externalId: 'DAM-88231', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    externalUrl: 'https://cdn.example.com/packshots/acme-4711-blk_1.jpg', // optional
    source: AssetsSource.Storage, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    storageAssetId: 'ast_01J8ZQ0000000000000000' // optional
});

console.log(result);
```
