```javascript
import { Client, Search, Collection } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchSearchDocumentsGet({
    collection: Collection.Greetings,
    q: '', // optional
    queryBy: '', // optional
    filterBy: '', // optional
    sortBy: '', // optional
    page: null, // optional
    perPage: null // optional
});

console.log(result);
```
