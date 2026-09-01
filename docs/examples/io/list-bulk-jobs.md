```javascript
import { Client, Io } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const io = new Io(client);

const result = await io.listBulkJobs({
    type: null, // optional
    status: null, // optional
    vendor: '', // optional
    app: '', // optional
    entity: '', // optional
    limit: 1 // optional
});

console.log(result);
```
