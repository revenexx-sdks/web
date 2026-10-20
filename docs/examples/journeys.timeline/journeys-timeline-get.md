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
