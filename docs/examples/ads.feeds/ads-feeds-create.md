```javascript
import { Client, AdsFeeds, Destination } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsCreate({
    destination: Destination.GoogleMerchantCenter,
    market: '',
    active: true, // optional
    feedId: '', // optional
    feedUrl: '', // optional
    label: '', // optional
    metadata: null // optional
});

console.log(result);
```
