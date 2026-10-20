```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsResult({
    id: '',
    error: '', // optional
    externalAudienceId: '', // optional
    matchedCount: 1, // optional
    memberCount: 1, // optional
    ok: true, // optional
    skippedCount: 1, // optional
    uploadedCount: 1 // optional
});

console.log(result);
```
