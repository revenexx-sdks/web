```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPreview({
    token: '',
    langcode: 'de' // optional
});

console.log(result);
```
