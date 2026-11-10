# journeys.versions

## journeys-versions-list

List journey versions

```javascript
import { Client, JourneysVersions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysVersions = new JourneysVersions(client);

const result = await journeysVersions.journeysVersionsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    journeyId: '', // optional
    version: '', // optional
    state: '', // optional
    entryKey: '', // optional
    stepCount: '', // optional
    publishedBy: '', // optional
    notes: '' // optional
});

console.log(result);
```

## journeys-versions-get

Read one version

```javascript
import { Client, JourneysVersions } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysVersions = new JourneysVersions(client);

const result = await journeysVersions.journeysVersionsGet({
    id: ''
});

console.log(result);
```
