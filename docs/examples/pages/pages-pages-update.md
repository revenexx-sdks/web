```javascript
import { Client, Pages, PageStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPagesUpdate({
    id: '',
    bundle: '', // optional
    meta: {}, // optional
    slug: '', // optional
    status: PageStatus.Draft, // optional
    title: '' // optional
});

console.log(result);
```
