```javascript
import { Client, AdsFeeds, Destination } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsUpdate({
    id: '',
    active: true, // optional
    destination: Destination.GoogleMerchantCenter, // optional
    feedId: '', // optional
    feedUrl: '', // optional
    label: '', // optional
    market: '', // optional
    metadata: null // optional
});

console.log(result);
```
