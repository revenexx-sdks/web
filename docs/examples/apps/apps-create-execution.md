```javascript
import { Client, Apps, Method } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsCreateExecution({
    functionId: '',
    async: null, // optional
    body: '', // optional
    headers: {}, // optional
    method: Method.GET, // optional
    path: '', // optional
    scheduledAt: '' // optional
});

console.log(result);
```
