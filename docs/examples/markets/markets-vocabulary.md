```javascript
import { Client, Markets, MarketsVocabularyName } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const markets = new Markets(client);

const result = await markets.marketsVocabulary({
    name: MarketsVocabularyName.Marketstatuses
});

console.log(result);
```
