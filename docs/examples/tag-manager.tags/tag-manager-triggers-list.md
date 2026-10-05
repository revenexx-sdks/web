```javascript
import { Client, TagManagerTags } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    code: '', // optional
    name: '', // optional
    kind: '', // optional
    eventName: '', // optional
    createdAt: '', // optional
    updatedAt: '' // optional
});

console.log(result);
```
