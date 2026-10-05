```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesTemplateAssignmentsList({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    resourceType: 'product', // optional
    pageSlug: 'product-detail' // optional
});

console.log(result);
```
