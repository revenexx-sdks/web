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
