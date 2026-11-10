# campaigns.assets

## campaigns-assets-list

List the assets campaigns hold

```javascript
import { Client, CampaignsAssets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsAssets = new CampaignsAssets(client);

const result = await campaignsAssets.campaignsAssetsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    campaignId: '', // optional
    assetApp: '', // optional
    assetEntity: '', // optional
    assetId: '', // optional
    label: '', // optional
    claim: '', // optional
    addedBy: '' // optional
});

console.log(result);
```

## campaigns-assets-get

Read one asset row

```javascript
import { Client, CampaignsAssets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsAssets = new CampaignsAssets(client);

const result = await campaignsAssets.campaignsAssetsGet({
    id: ''
});

console.log(result);
```

## campaigns-assets-detach

Release the asset an asset row names

```javascript
import { Client, CampaignsAssets } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const campaignsAssets = new CampaignsAssets(client);

const result = await campaignsAssets.campaignsAssetsDetach({
    id: '',
    data: {}
});

console.log(result);
```
