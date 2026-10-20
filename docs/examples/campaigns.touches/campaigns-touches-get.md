```javascript
import { Client, CampaignsTouches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsTouches = new CampaignsTouches(client);

const result = await campaignsTouches.campaignsTouchesGet({
    id: ''
});

console.log(result);
```
