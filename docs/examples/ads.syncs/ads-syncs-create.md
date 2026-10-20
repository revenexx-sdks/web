```javascript
import { Client, AdsSyncs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSyncs = new AdsSyncs(client);

const result = await adsSyncs.adsSyncsCreate({
    adAccountId: '',
    audienceId: '',
    subscriptionType: '',
    active: true, // optional
    audienceCode: '', // optional
    externalAudienceId: '', // optional
    metadata: null // optional
});

console.log(result);
```
