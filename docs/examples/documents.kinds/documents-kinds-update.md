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
