```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesRevisions({
    id: '',
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    label: 'Autumn campaign', // optional
    createdBy: '', // optional
    createdByName: '', // optional
    createdAt: '' // optional
});

console.log(result);
```
