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
