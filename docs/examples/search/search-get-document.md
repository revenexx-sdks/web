```javascript
import { Client, Search, Collection } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchGetDocument({
    collection: Collection.Greetings,
    documentId: ''
});

console.log(result);
```
