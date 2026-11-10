# journeys.journeys

## journeys-journeys-list

List journeys

```javascript
import { Client, JourneysJourneys, Trashed } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysList({
    limit: 50, // optional
    offset: 0, // optional
    order: 'created_at.desc', // optional
    trashed: Trashed.Exclude, // optional
    id: '', // optional
    name: '', // optional
    description: '', // optional
    status: '', // optional
    triggerKind: '', // optional
    reenrol: '', // optional
    reenrolGapDays: '', // optional
    campaignRef: '', // optional
    templateCode: '', // optional
    currentVersion: '', // optional
    draftVersion: '', // optional
    triggerRanOn: '', // optional
    enrolledCount: '', // optional
    activeCount: '' // optional
});

console.log(result);
```

## journeys-journeys-create

Create a draft journey

```javascript
import { Client, JourneysJourneys, TriggerKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysCreate({
    name: '',
    campaignRef: '', // optional
    currency: '', // optional
    description: '', // optional
    entry: '', // optional
    goalConfig: null, // optional
    metadata: null, // optional
    reenrol: true, // optional
    reenrolGapDays: 1, // optional
    steps: [], // optional
    triggerConfig: null, // optional
    triggerKind: TriggerKind.Event // optional
});

console.log(result);
```

## journeys-journeys-empty-trash

Empty the journey trash, deleting each one for good

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysEmptyTrash();

console.log(result);
```

## journeys-journeys-purge

Delete the journeys that outlived the trash retention

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysPurge();

console.log(result);
```

## journeys-journeys-delete

Move a journey to the trash, or delete it for good from there

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysDelete({
    id: ''
});

console.log(result);
```

## journeys-journeys-get

Read one journey

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysGet({
    id: ''
});

console.log(result);
```

## journeys-journeys-update

Correct a journey

```javascript
import { Client, JourneysJourneys, TriggerKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysUpdate({
    id: '',
    campaignRef: '', // optional
    currency: '', // optional
    description: '', // optional
    goalConfig: null, // optional
    metadata: null, // optional
    name: '', // optional
    reenrol: true, // optional
    reenrolGapDays: 1, // optional
    triggerConfig: null, // optional
    triggerKind: TriggerKind.Event // optional
});

console.log(result);
```

## journeys-journeys-archive

Archive a journey

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysArchive({
    id: '',
    data: {}
});

console.log(result);
```

## journeys-journeys-enrol

Put one person into a live journey by hand

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysEnrol({
    id: '',
    contactId: '', // optional
    data: {}, // optional
    email: '', // optional
    key: '', // optional
    market: '' // optional
});

console.log(result);
```

## journeys-journeys-graph

Read the steps of a journey version

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysGraph({
    id: '',
    version: '' // optional
});

console.log(result);
```

## journeys-journeys-save-graph

Save the canvas as the draft

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysSaveGraph({
    id: '',
    steps: [],
    entry: '', // optional
    notes: '' // optional
});

console.log(result);
```

## journeys-journeys-pause

Pause a live journey

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysPause({
    id: '',
    data: {}
});

console.log(result);
```

## journeys-journeys-publish

Publish the draft

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysPublish({
    id: '',
    data: {}
});

console.log(result);
```

## journeys-journeys-report

Read per-step counts of a journey

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysReport({
    id: '',
    version: '' // optional
});

console.log(result);
```

## journeys-journeys-restore

Bring a journey back out of the trash

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysRestore({
    id: ''
});

console.log(result);
```

## journeys-journeys-resume

Resume a paused journey

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysResume({
    id: '',
    data: {}
});

console.log(result);
```

## journeys-journeys-run

Process the due steps of one journey now

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysRun({
    id: '',
    data: {}
});

console.log(result);
```

## journeys-journeys-timeline

Read entries and reached goals of a journey per day

```javascript
import { Client, JourneysJourneys } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJourneys = new JourneysJourneys(client);

const result = await journeysJourneys.journeysJourneysTimeline({
    id: ''
});

console.log(result);
```
