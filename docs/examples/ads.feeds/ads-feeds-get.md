```javascript
import { Client, AdsFeeds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsGet({
    id: ''
});

console.log(result);
```
