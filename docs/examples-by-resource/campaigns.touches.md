# campaigns.touches

## campaigns-touches-list

List recorded touches

```javascript
import { Client, CampaignsTouches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsTouches = new CampaignsTouches(client);

const result = await campaignsTouches.campaignsTouchesList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    touchKey: '', // optional
    campaignId: '', // optional
    kind: '', // optional
    ref: '', // optional
    contactId: '', // optional
    sessionKey: '', // optional
    orderId: '', // optional
    market: '' // optional
});

console.log(result);
```

## campaigns-touches-ingest

Record impressions and clicks from the storefront

```javascript
import { Client, CampaignsTouches } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsTouches = new CampaignsTouches(client);

const result = await campaignsTouches.campaignsTouchesIngest({
    touches: []
});

console.log(result);
```

## campaigns-touches-get

Read one touch

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
