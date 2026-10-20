```javascript
import { Client, Search, SearchEventsType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const search = new Search(client);

const result = await search.searchEvents({
    collection: '',
    type: SearchEventsType.Click,
    docId: '', // optional
    position: 1, // optional
    q: '', // optional
    queryId: '', // optional
    userToken: '' // optional
});

console.log(result);
```
