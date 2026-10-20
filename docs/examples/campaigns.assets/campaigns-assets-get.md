```javascript
import { Client, CampaignsAssets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsAssets = new CampaignsAssets(client);

const result = await campaignsAssets.campaignsAssetsGet({
    id: ''
});

console.log(result);
```
