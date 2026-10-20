```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsUpdate({
    id: '',
    active: true, // optional
    adAccountId: '', // optional
    audienceCode: '', // optional
    audienceId: '', // optional
    externalAudienceId: '', // optional
    metadata: null, // optional
    subscriptionType: '' // optional
});

console.log(result);
```
