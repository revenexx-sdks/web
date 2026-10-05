```javascript
import { Client, ConsentManagerRegistry, ConsentManagerVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerRegistry = new ConsentManagerRegistry(client);

const result = await consentManagerRegistry.consentManagerVocabulariesGet({
    name: ConsentManagerVocabulariesGetName.Legalbases
});

console.log(result);
```
