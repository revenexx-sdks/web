```javascript
import { Client, AdsSpend } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSpend = new AdsSpend(client);

const result = await adsSpend.adsSpendList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    adAccountId: '', // optional
    externalCampaignId: '', // optional
    linkId: '', // optional
    campaignId: '', // optional
    platform: '', // optional
    spendDate: '', // optional
    currency: '', // optional
    impressions: '', // optional
    clicks: '', // optional
    bookingState: '', // optional
    bookingError: '' // optional
});

console.log(result);
```
