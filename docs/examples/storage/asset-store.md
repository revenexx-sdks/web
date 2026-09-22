```javascript
import { Client, Storage, AssetStoreVisibility } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.assetStore({
    file: document.getElementById('uploader').files[0],
    altText: '', // optional
    description: '', // optional
    displayName: '', // optional
    folderId: '', // optional
    keepArchive: true, // optional
    tags: [], // optional
    unpack: true, // optional
    visibility: AssetStoreVisibility.Public // optional
});

console.log(result);
```
