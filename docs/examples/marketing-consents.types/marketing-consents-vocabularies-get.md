```javascript
import { Client, MarketingConsentsTypes, MarketingConsentsVocabulariesGetName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const marketingConsentsTypes = new MarketingConsentsTypes(client);

const result = await marketingConsentsTypes.marketingConsentsVocabulariesGet({
    name: MarketingConsentsVocabulariesGetName.Channels
});

console.log(result);
```
