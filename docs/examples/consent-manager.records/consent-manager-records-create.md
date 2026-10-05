```javascript
import { Client, ConsentManagerRecords, Action, Surface } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRecords = new ConsentManagerRecords(client);

const result = await consentManagerRecords.consentManagerRecordsCreate({
    action: Action.AcceptAll,
    consentId: '',
    locale: 'de',
    policyVersionId: '',
    surface: Surface.FirstLayer,
    clientTs: '2026-01-01T12:00:00Z', // optional
    decisions: {}, // optional
    pagePath: '/produkte/schrauben', // optional
    userAgentClass: 'Firefox 131' // optional
});

console.log(result);
```
