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
