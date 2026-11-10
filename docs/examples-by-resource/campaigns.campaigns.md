# campaigns.campaigns

## campaigns-campaigns-list

List campaigns

```javascript
import { Client, CampaignsCampaigns, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    description: '', // optional
    status: '', // optional
    effectiveState: '', // optional
    ownerId: '', // optional
    utmCampaign: '', // optional
    goalMetric: '', // optional
    currency: '', // optional
    ordersCount: '', // optional
    externalId: '' // optional
});

console.log(result);
```

## campaigns-campaigns-create

Write a campaign down

```javascript
import { Client, CampaignsCampaigns, GoalMetric, CampaignsCampaignsCreateStatus } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsCreate({
    code: '',
    name: '',
    currency: '', // optional
    description: '', // optional
    endsAt: '2026-01-01T12:00:00Z', // optional
    externalId: '', // optional
    externalRefs: null, // optional
    goalMetric: GoalMetric.Revenue, // optional
    goalValue: 9.99, // optional
    metadata: null, // optional
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

## campaigns-campaigns-empty-trash

Empty the campaign trash, deleting each one for good

```javascript
import { Client, CampaignsCampaigns } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsEmptyTrash();

console.log(result);
```

## campaigns-campaigns-purge

Delete the campaigns that outlived the trash retention

```javascript
import { Client, CampaignsCampaigns } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsPurge();

console.log(result);
```

## campaigns-campaigns-delete

Move a campaign to the trash, or delete it for good from there

```javascript
import { Client, CampaignsCampaigns } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsDelete({
    id: ''
});

console.log(result);
```

## campaigns-campaigns-get

Read one campaign

```javascript
import { Client, CampaignsCampaigns } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsGet({
    id: ''
});

console.log(result);
```

## campaigns-campaigns-update

Correct a campaign

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

## campaigns-campaigns-attach

Attach an asset to a campaign

```javascript
import { Client, CampaignsCampaigns, AssetApp } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsAttach({
    id: '',
    adCampaignLinkId: '', // optional
    assetApp: AssetApp.Promotions, // optional
    assetEntity: '', // optional
    assetId: '', // optional
    formId: '', // optional
    journeyId: '', // optional
    label: '', // optional
    libraryItemId: '', // optional
    mailingId: '', // optional
    pageId: '', // optional
    promotionId: '' // optional
});

console.log(result);
```

## campaigns-campaigns-detach

Release an asset from a campaign

```javascript
import { Client, CampaignsCampaigns, AssetApp } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsDetach({
    id: '',
    adCampaignLinkId: '', // optional
    assetApp: AssetApp.Promotions, // optional
    assetEntity: '', // optional
    assetId: '', // optional
    formId: '', // optional
    journeyId: '', // optional
    label: '', // optional
    libraryItemId: '', // optional
    mailingId: '', // optional
    pageId: '', // optional
    promotionId: '' // optional
});

console.log(result);
```

## campaigns-campaigns-links

Build a URL tagged with the campaign UTM values

```javascript
import { Client, CampaignsCampaigns } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsLinks({
    id: '',
    medium: '',
    url: '',
    content: '', // optional
    source: '', // optional
    term: '' // optional
});

console.log(result);
```

## campaigns-campaigns-performance

Read what a campaign achieved against its goal

```javascript
import { Client, CampaignsCampaigns, Model } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsCampaigns = new CampaignsCampaigns(client);

const result = await campaignsCampaigns.campaignsCampaignsPerformance({
    id: '',
    model: Model.FirstTouch // optional
});

console.log(result);
```

## campaigns-campaigns-restore

Bring a campaign back out of the trash

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
