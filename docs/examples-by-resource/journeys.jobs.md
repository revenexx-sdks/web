# journeys.jobs

## journeys-jobs-steps

Run the step job once

```javascript
import { Client, JourneysJobs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJobs = new JourneysJobs(client);

const result = await journeysJobs.journeysJobsSteps({
    budgetMs: 1 // optional
});

console.log(result);
```

## journeys-jobs-triggers

Run date triggers and the sweep once

```javascript
import { Client, JourneysJobs } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const journeysJobs = new JourneysJobs(client);

const result = await journeysJobs.journeysJobsTriggers({
    force: true // optional
});

console.log(result);
```
