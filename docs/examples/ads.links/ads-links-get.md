```javascript
import { Client, AdsLinks } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsLinks = new AdsLinks(client);

const result = await adsLinks.adsLinksGet({
    id: ''
});

console.log(result);
```
