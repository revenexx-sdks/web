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
    bundle: 'standard', // optional
    meta: {}, // optional
    slug: 'about-us', // optional
    status: PageStatus.Draft, // optional
    title: 'About us' // optional
});

console.log(result);
```
