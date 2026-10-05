```javascript
import { Client, DocumentsRegister, DocumentsDocumentsListSource, Visibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsRegister = new DocumentsRegister(client);

const result = await documentsRegister.documentsDocumentsList({
    id: '', // optional
    entityType: 'order', // optional
    entityId: '', // optional
    kind: 'invoice', // optional
    number: 'RE-2026-004711', // optional
    source: DocumentsDocumentsListSource.Storage, // optional
    storageAssetId: 'ast_8f2b1c4d9e', // optional
    deliveryPath: 'documents/2026/09/RE-2026-004711.pdf', // optional
    externalUrl: 'https://files.example.test/ls/LS-2026-008812.pdf', // optional
    filename: 'RE-2026-004711.pdf', // optional
    contentType: 'application/pdf', // optional
    byteSize: 148213, // optional
    issuedAt: '2026-09-28', // optional
    dueDate: '2026-09-28', // optional
    totalAmount: 1284.5, // optional
    currency: 'EUR', // optional
    visibility: Visibility.Internal, // optional
    externalId: 'BC-INV-000412', // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
