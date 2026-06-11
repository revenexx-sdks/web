```javascript
import { Client, Storage, Gravity, Output } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const storage = new Storage(client);

const result = await storage.storageGetFilePreview({
    bucketId: '',
    fileId: '',
    width: null, // optional
    height: null, // optional
    gravity: Gravity.Center, // optional
    quality: null, // optional
    borderWidth: null, // optional
    borderColor: '', // optional
    borderRadius: null, // optional
    opacity: null, // optional
    rotation: null, // optional
    background: '', // optional
    output: Output.Jpg, // optional
    token: '' // optional
});

console.log(result);
```
