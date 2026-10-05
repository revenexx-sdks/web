```javascript
import { Client, DocumentsKinds } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const documentsKinds = new DocumentsKinds(client);

const result = await documentsKinds.documentsKindsGet({
    id: ''
});

console.log(result);
```
