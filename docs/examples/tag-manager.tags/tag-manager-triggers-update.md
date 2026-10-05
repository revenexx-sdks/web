```javascript
import { Client, TagManagerTags, TagManagerTriggersCreateKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerTriggersUpdate({
    id: '',
    code: '', // optional
    conditions: {}, // optional
    eventName: '', // optional
    kind: TagManagerTriggersCreateKind.PageView, // optional
    name: '' // optional
});

console.log(result);
```
