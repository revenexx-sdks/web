```javascript
import { Client, CampaignsCampaigns, GoalMetric, CampaignsCampaignsCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsUpdate({
    id: '',
    code: '', // optional
    currency: '', // optional
    description: '', // optional
    endsAt: '2026-01-01T12:00:00Z', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    goalMetric: GoalMetric.Revenue, // optional
    goalValue: 9.99, // optional
    metadata: null, // optional
    name: '', // optional
    ownerId: '', // optional
    sourceData: null, // optional
    sourceSyncedAt: '2026-01-01T12:00:00Z', // optional
    startsAt: '2026-01-01T12:00:00Z', // optional
    status: CampaignsCampaignsCreateStatus.Draft, // optional
    tags: null, // optional
    utmCampaign: '' // optional
});

console.log(result);
```
