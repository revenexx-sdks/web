```javascript
import { Client, AdsConversions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsConversions = new AdsConversions(client);

const result = await adsConversions.adsConversionsRetry({
    id: '',
    data: {}
});

console.log(result);
```
