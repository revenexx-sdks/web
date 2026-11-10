# documents.kinds

## documents-kinds-list

List the document kinds this merchant keeps

```javascript
import { Client, DocumentsKinds, Tone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsList({
    id: '', // optional
    code: 'invoice', // optional
    title: 'Invoice', // optional
    description: 'What the buyer owes for an order.', // optional
    isDefault: true, // optional
    active: true, // optional
    tone: Tone.Neutral, // optional
    position: 0, // optional
    isSystem: true, // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    updatedAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## documents-kinds-create

Add a document kind of your own

```javascript
import { Client, DocumentsKinds, DocumentKindTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsCreate({
    code: 'invoice',
    title: 'Invoice',
    active: true, // optional
    description: 'What the buyer owes for an order.', // optional
    descriptions: {
        "de": "Was der K\u00e4ufer f\u00fcr eine Bestellung schuldet.",
        "en": "What the buyer owes for an order."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    position: 0, // optional
    tone: DocumentKindTone.Info // optional
});

console.log(result);
```

## documents-kinds-defaults

Seed the four document kinds an order produces

```javascript
import { Client, DocumentsKinds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsDefaults({
    data: {}
});

console.log(result);
```

## documents-kinds-delete

Remove one document kind

```javascript
import { Client, DocumentsKinds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsDelete({
    id: ''
});

console.log(result);
```

## documents-kinds-get

Read one document kind

```javascript
import { Client, DocumentsKinds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsGet({
    id: ''
});

console.log(result);
```

## documents-kinds-update

Edit one document kind

```javascript
import { Client, DocumentsKinds, DocumentKindTone } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsUpdate({
    id: '',
    active: true, // optional
    code: 'invoice', // optional
    description: 'What the buyer owes for an order.', // optional
    descriptions: {
        "de": "Was der K\u00e4ufer f\u00fcr eine Bestellung schuldet.",
        "en": "What the buyer owes for an order."
    }, // optional
    isDefault: true, // optional
    labels: {
        "de": "Rechnung",
        "en": "Invoice"
    }, // optional
    position: 0, // optional
    title: 'Invoice', // optional
    tone: DocumentKindTone.Info // optional
});

console.log(result);
```

## documents-kinds-make-default

Make one document kind the default

```javascript
import { Client, DocumentsKinds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsMakeDefault({
    id: ''
});

console.log(result);
```

## documents-vocabularies-list

List the vocabularies this app owns

```javascript
import { Client, DocumentsKinds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsVocabulariesList();

console.log(result);
```

## documents-vocabularies-get

Read one vocabulary with its values

```javascript
import { Client, DocumentsKinds, DocumentVocabularyPathName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsVocabulariesGet({
    name: DocumentVocabularyPathName.Kinds
});

console.log(result);
```
