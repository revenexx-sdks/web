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
