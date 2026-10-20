```javascript
import { Client, CampaignsBudgets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsBudgets = new CampaignsBudgets(client);

const result = await campaignsBudgets.campaignsBudgetsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    campaignId: '', // optional
    line: '', // optional
    currency: '', // optional
    source: '', // optional
    platform: '', // optional
    notes: '' // optional
});

console.log(result);
```
