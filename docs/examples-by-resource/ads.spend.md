# ads.spend

## ads-spend-figures

Read the spend, clicks and conversions of an ad account per day

```javascript
import { Client, AdsSpend } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSpend = new AdsSpend(client);

const result = await adsSpend.adsSpendFigures({
    id: ''
});

console.log(result);
```

## ads-spend-roas

Read the return on ad spend of a campaign

```javascript
import { Client, AdsSpend, Model } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSpend = new AdsSpend(client);

const result = await adsSpend.adsSpendRoas({
    campaignId: '',
    model: Model.FirstTouch // optional
});

console.log(result);
```

## ads-spend-list

List imported daily ad spend

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

## ads-spend-import

Import daily ad spend per ad campaign

```javascript
import { Client, AdsSpend } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSpend = new AdsSpend(client);

const result = await adsSpend.adsSpendImport({
    rows: []
});

console.log(result);
```

## ads-spend-get

Read one day of ad spend

```javascript
import { Client, AdsSpend } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsSpend = new AdsSpend(client);

const result = await adsSpend.adsSpendGet({
    id: ''
});

console.log(result);
```
