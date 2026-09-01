```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPages({
    limit: 1, // optional
    offset: 1, // optional
    order: 'created_at.desc', // optional
    bundle: 'standard' // optional
});

console.log(result);
```
