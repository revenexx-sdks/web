```javascript
import { Client, ConsentManagerRecords, Action, Surface } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsList({
    id: '', // optional
    consentId: '', // optional
    action: Action.AcceptAll, // optional
    surface: Surface.FirstLayer, // optional
    policyVersionId: '', // optional
    policyNumber: 7, // optional
    policySha256: 'e903c6b98c176311018c0f737505ecd7cd992728f71b48ec65a2074c79572472', // optional
    locale: 'de', // optional
    market: 'de', // optional
    recordedAt: '2026-01-01T12:00:00Z', // optional
    clientTs: '2026-01-01T12:00:00Z', // optional
    expiresAt: '2026-01-01T12:00:00Z', // optional
    userAgentClass: 'Firefox 131', // optional
    pagePath: '/produkte/schrauben', // optional
    contactId: '', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```
