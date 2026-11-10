# journeys.stats

## journeys-stats-list

List step counters

```javascript
import { Client, JourneysStats } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysStats = new JourneysStats(client);

const result = await journeysStats.journeysStatsList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    journeyId: '', // optional
    version: '', // optional
    stepKey: '', // optional
    entered: '', // optional
    passed: '', // optional
    sent: '', // optional
    skipped: '', // optional
    failed: '', // optional
    exited: '', // optional
    clicked: '', // optional
    goalReached: '' // optional
});

console.log(result);
```

## journeys-stats-get

Read one step counter

```javascript
import { Client, JourneysStats } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysStats = new JourneysStats(client);

const result = await journeysStats.journeysStatsGet({
    id: ''
});

console.log(result);
```
