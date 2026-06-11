```javascript
import { Client, Storage, Compression } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.storageCreateBucket({
    bucketId: '',
    name: '',
    allowedFileExtensions: [], // optional
    antivirus: null, // optional
    compression: Compression.None, // optional
    enabled: null, // optional
    encryption: null, // optional
    fileSecurity: null, // optional
    maximumFileSize: null, // optional
    permissions: [], // optional
    transformations: null // optional
});

console.log(result);
```
