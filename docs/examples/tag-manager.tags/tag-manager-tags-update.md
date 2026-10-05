```javascript
import { Client, TagManagerTags, TagManagerTagsCreateKind, Load } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTagsUpdate({
    id: '',
    chainedVendorCodes: [], // optional
    code: '', // optional
    config: {}, // optional
    description: '', // optional
    eventMap: {}, // optional
    isActive: true, // optional
    kind: TagManagerTagsCreateKind.Registry, // optional
    load: Load.Immediate, // optional
    name: '', // optional
    purposeCode: '', // optional
    registryKey: '', // optional
    scriptUrl: '', // optional
    vendorCode: '' // optional
});

console.log(result);
```
