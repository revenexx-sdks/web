```javascript
import { Client, ProductsAssets, AssetsLicense, AssetsSource } from "@revenexx/sdk";

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
            "shot_type": "cutout"
        },
        "locale_specific": {
            "de": {
                "alt_text": "Akku-Bohrschrauber, freigestellt"
            }
        }
    }, // optional
    copyrightNotice: '© 2026 Studio Weiss', // optional
    deletedAt: '2026-01-01T12:00:00Z', // optional
    deletedBy: 'merchant@example.com', // optional
    deletedById: '283746592837465012', // optional
    deliveryPath: 'packshots/acme-4711-blk_1.jpg', // optional
    externalId: 'DAM-88231', // optional
    externalRefs: {
        "entitys": "4711",
        "gtin": "4012345000009"
    }, // optional
    externalUrl: 'https://cdn.example.com/packshots/acme-4711-blk_1.jpg', // optional
    fileFormat: 'JPG', // optional
    fileName: 'acme-4711-blk_1.jpg', // optional
    fileSize: 2306867, // optional
    license: AssetsLicense.Licensed, // optional
    licenseValidFrom: '2026-01-01', // optional
    licenseValidUntil: '2028-12-31', // optional
    purgeAt: '2026-01-01T12:00:00Z', // optional
    purgeBlockedReason: ''S1230020C1TI25' still has stock at 2 location(s)', // optional
    rightsHolder: 'Studio Weiss, Stuttgart', // optional
    rightsOrigin: 'Hersteller-Medienportal, Lizenzvertrag 2026-014', // optional
    source: AssetsSource.Storage, // optional
    sourceData: {
        "etag": "W\/\"JzQ0O0c2\"",
        "raw": {
            "BMECAT_GROUP": "EL-4711"
        },
        "system": "pim"
    }, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    storageAssetId: 'ast_01J8ZQ0000000000000000', // optional
    trashBatch: '', // optional
    usageRights: 'Online-Shop und Print-Katalog, nur DACH, keine Social-Media-Werbung.' // optional
});

console.log(result);
```
