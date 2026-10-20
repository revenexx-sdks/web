```javascript
import { Client, Pages } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const pages = new Pages(client);

const result = await pages.pagesPopupsUpdate({
    id: '',
    campaignRef: '', // optional
    label: 'Newsletter-Anmeldung Winter', // optional
    metadata: {}, // optional
    popup: {}, // optional
    tree: {} // optional
});

console.log(result);
```
