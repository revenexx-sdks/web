```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    adAccountId: '', // optional
    audienceId: '', // optional
    audienceCode: '', // optional
    subscriptionType: '', // optional
    externalAudienceId: '', // optional
    state: '', // optional
    active: '', // optional
    stale: '', // optional
    memberCount: '', // optional
    matchedCount: '', // optional
    uploadedCount: '', // optional
    skippedCount: '', // optional
    lastError: '' // optional
});

console.log(result);
```
