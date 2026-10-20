```javascript
import { Client, CampaignsSpend } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsSpend = new CampaignsSpend(client);

const result = await campaignsSpend.campaignsSpendGet({
    id: ''
});

console.log(result);
```
