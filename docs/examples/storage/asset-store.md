```javascript
import { Client, Storage, Visibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetStore({
    file: '',
    altText: '', // optional
    description: '', // optional
    displayName: '', // optional
    folderId: '', // optional
    keepArchive: null, // optional
    tags: [], // optional
    unpack: null, // optional
    visibility: Visibility.Public // optional
});

console.log(result);
```
