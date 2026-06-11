```javascript
import { Client, Storage } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.storageGetFileDownload({
    bucketId: '',
    fileId: '',
    token: '' // optional
});

console.log(result);
```
