```javascript
import { Client, CampaignsBudgets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsBudgets = new CampaignsBudgets(client);

const result = await campaignsBudgets.campaignsBudgetsDelete({
    id: ''
});

console.log(result);
```
