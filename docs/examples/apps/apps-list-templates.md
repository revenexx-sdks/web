```javascript
import { Client, Apps, Runtimes, UseCases } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const apps = new Apps(client);

const result = await apps.appsListTemplates({
    runtimes: [Runtimes.Node180], // optional
    useCases: [UseCases.Starter], // optional
    limit: null, // optional
    offset: null, // optional
    total: null // optional
});

console.log(result);
```
