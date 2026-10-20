```javascript
import { Client, AdsVocabularies } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsVocabularies = new AdsVocabularies(client);

const result = await adsVocabularies.adsVocabulariesList();

console.log(result);
```
