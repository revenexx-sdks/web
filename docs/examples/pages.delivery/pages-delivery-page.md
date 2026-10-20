```javascript
import { Client, PagesDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pagesDelivery = new PagesDelivery(client);

const result = await pagesDelivery.pagesDeliveryPage({
    slug: 'about-us', // optional
    id: '', // optional
    langcode: 'de', // optional
    audiences: 'newsletter-de,stammkunden', // optional
    consents: 'marketing,analytics' // optional
});

console.log(result);
```
