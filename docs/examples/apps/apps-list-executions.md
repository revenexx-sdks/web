```javascript
import { Client, Apps } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListExecutions({
    functionId: '',
    queries: [], // optional
    total: null // optional
});

console.log(result);
```
