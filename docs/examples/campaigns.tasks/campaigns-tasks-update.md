```javascript
import { Client, CampaignsTasks } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsTasks = new CampaignsTasks(client);

const result = await campaignsTasks.campaignsTasksUpdate({
    id: '',
    assignee: '', // optional
    campaignId: '', // optional
    doneAt: '2026-01-01T12:00:00Z', // optional
    dueAt: '2026-01-01T12:00:00Z', // optional
    notes: '', // optional
    title: '' // optional
});

console.log(result);
```
