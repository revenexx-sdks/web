# consent-manager.policy

## consent-manager-banner-get

Read the banner draft for this market (or the shop's)

```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerBannerGet();

console.log(result);
```

## consent-manager-banner-update

Save the banner draft for this market

```javascript
import { Client, ConsentManagerPolicy, Layout } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerBannerUpdate({
    imprintUrl: '/impressum', // optional
    layout: Layout.Box, // optional
    privacyUrl: '/datenschutz', // optional
    texts: {} // optional
});

console.log(result);
```

## consent-manager-policy-versions-list

List the published versions

```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerPolicyVersionsList({
    id: '', // optional
    number: 7, // optional
    market: 'de', // optional
    material: true, // optional
    materialNumber: 7, // optional
    sha256: 'e903c6b98c176311018c0f737505ecd7cd992728f71b48ec65a2074c79572472', // optional
    note: 'Added HubSpot under marketing', // optional
    publishedAt: '2026-01-01T12:00:00Z', // optional
    publishedBy: 'usr_7c19f4a2e0', // optional
    createdAt: '2026-01-01T12:00:00Z', // optional
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc' // optional
});

console.log(result);
```

## consent-manager-policy-versions-get

Read one published version

```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerPolicyVersionsGet({
    id: ''
});

console.log(result);
```

## consent-manager-policy-preview

Render the draft and answer a preview token

```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerPolicyPreview({
    ttlHours: 72 // optional
});

console.log(result);
```

## consent-manager-policy-publish

Freeze the draft as the next policy version

```javascript
import { Client, ConsentManagerPolicy } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const consentManagerPolicy = new ConsentManagerPolicy(client);

const result = await consentManagerPolicy.consentManagerPolicyPublish({
    material: true, // optional
    note: 'Added HubSpot under marketing' // optional
});

console.log(result);
```
