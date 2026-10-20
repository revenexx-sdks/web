```javascript
import { Client, ProductsAssets, ProductsListTrashed, DocumentsDocumentsListSource, License } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const productsAssets = new ProductsAssets(client);

const result = await productsAssets.productsAssetsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    trashed: ProductsListTrashed.Only, // optional
    id: '', // optional
    assetFamilyId: '', // optional
    code: 'acme-4711-blk_packshot_1', // optional
    source: DocumentsDocumentsListSource.Storage, // optional
    storageAssetId: 'ast_01J8ZQ0000000000000000', // optional
    deliveryPath: 'packshots/acme-4711-blk_1.jpg', // optional
    externalUrl: 'https://cdn.example.com/packshots/acme-4711-blk_1.jpg', // optional
    fileName: 'acme-4711-blk_1.jpg', // optional
    fileFormat: 'JPG', // optional
    fileSize: 1, // optional
    fileSizeLabel: '2,2 MB', // optional
    rightsHolder: 'Studio Weiss, Stuttgart', // optional
    license: License.Own, // optional
    usageRights: 'Online-Shop und Print-Katalog, nur DACH, keine Social-Media-Werbung.', // optional
    licenseValidFrom: '2026-01-01', // optional
    licenseValidUntil: '2026-01-01', // optional
    copyrightNotice: '© 2026 Studio Weiss', // optional
    rightsOrigin: 'Hersteller-Medienportal, Lizenzvertrag 2026-014', // optional
    attributeValues: '{}', // optional
    externalId: 'DAM-88231', // optional
    externalRefs: '{}', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    sourceData: '{}', // optional
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
