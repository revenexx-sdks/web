# ads.feeds

## ads-feeds-list

List the product feeds handed to ad platforms

```javascript
import { Client, AdsFeeds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    market: '', // optional
    destination: '', // optional
    feedId: '', // optional
    feedUrl: '', // optional
    label: '', // optional
    active: '' // optional
});

console.log(result);
```

## ads-feeds-create

Name the seo feed of a market for a destination

```javascript
import { Client, AdsFeeds, Destination } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsCreate({
    destination: Destination.GoogleMerchantCenter,
    market: '',
    active: true, // optional
    feedId: '', // optional
    feedUrl: '', // optional
    label: '', // optional
    metadata: null // optional
});

console.log(result);
```

## ads-feeds-delete

Remove a feed reference

```javascript
import { Client, AdsFeeds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsDelete({
    id: ''
});

console.log(result);
```

## ads-feeds-get

Read one feed reference

```javascript
import { Client, AdsFeeds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsGet({
    id: ''
});

console.log(result);
```

## ads-feeds-update

Change a feed reference

```javascript
import { Client, AdsFeeds, Destination } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const adsFeeds = new AdsFeeds(client);

const result = await adsFeeds.adsFeedsUpdate({
    id: '',
    active: true, // optional
    destination: Destination.GoogleMerchantCenter, // optional
    feedId: '', // optional
    feedUrl: '', // optional
    label: '', // optional
    market: '', // optional
    metadata: null // optional
});

console.log(result);
```
