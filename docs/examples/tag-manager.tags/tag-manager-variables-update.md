```javascript
import { Client, TagManagerTags, TagManagerVariablesCreateKind } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerTags = new TagManagerTags(client);

const result = await tagManagerTags.tagManagerVariablesUpdate({
    id: '',
    code: '', // optional
    constantValue: null, // optional
    kind: TagManagerVariablesCreateKind.EventField, // optional
    name: '', // optional
    path: '' // optional
});

console.log(result);
```
