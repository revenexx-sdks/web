```javascript
import { Client, CampaignsCampaigns } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsRestore({
    id: ''
});

console.log(result);
```
