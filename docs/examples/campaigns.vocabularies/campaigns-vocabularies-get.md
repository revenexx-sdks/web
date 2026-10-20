```javascript
import { Client, CampaignsVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsVocabularies = new CampaignsVocabularies(client);

const result = await campaignsVocabularies.campaignsVocabulariesGet({
    name: ''
});

console.log(result);
```
