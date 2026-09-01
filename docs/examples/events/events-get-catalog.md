```javascript
import { Client, Events } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const events = new Events(client);

const result = await events.eventsGetCatalog({
    fields: 'topic,channel' // optional
});

console.log(result);
```
