```javascript
import { Client, CampaignsTasks } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsTasks = new CampaignsTasks(client);

const result = await campaignsTasks.campaignsTasksList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    campaignId: '', // optional
    title: '', // optional
    notes: '', // optional
    assignee: '' // optional
});

console.log(result);
```
