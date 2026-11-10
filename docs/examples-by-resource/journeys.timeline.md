# journeys.timeline

## journeys-timeline-list

List enrollment events

```javascript
import { Client, JourneysTimeline } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysTimeline = new JourneysTimeline(client);

const result = await journeysTimeline.journeysTimelineList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    id: '', // optional
    enrollmentId: '', // optional
    journeyId: '', // optional
    version: '', // optional
    stepKey: '', // optional
    kind: '', // optional
    outcome: '', // optional
    eventKey: '' // optional
});

console.log(result);
```

## journeys-timeline-get

Read one enrollment event

```javascript
import { Client, JourneysTimeline } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysTimeline = new JourneysTimeline(client);

const result = await journeysTimeline.journeysTimelineGet({
    id: ''
});

console.log(result);
```
