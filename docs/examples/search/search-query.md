```javascript
import { Client, Search } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchQuery({
    collection: '',
    filters: {}, // optional
    page: 1, // optional
    perPage: 1, // optional
    q: '', // optional
    sort: '', // optional
    view: '' // optional
});

console.log(result);
```
