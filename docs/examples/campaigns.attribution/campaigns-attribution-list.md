```javascript
import { Client, CampaignsAttribution } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsAttribution = new CampaignsAttribution(client);

const result = await campaignsAttribution.campaignsAttributionList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    factKey: '', // optional
    campaignId: '', // optional
    orderId: '', // optional
    orderNumber: '', // optional
    contactId: '', // optional
    organizationId: '', // optional
    currency: '', // optional
    market: '', // optional
    touchKind: '', // optional
    touchRef: '', // optional
    isFirstTouch: '' // optional
});

console.log(result);
```
