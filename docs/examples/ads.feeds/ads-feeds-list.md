```javascript
import { Client, AdsFeeds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    market: '', // optional
    destination: '', // optional
    feedId: '', // optional
    feedUrl: '', // optional
    label: '', // optional
    active: '' // optional
});

console.log(result);
```
