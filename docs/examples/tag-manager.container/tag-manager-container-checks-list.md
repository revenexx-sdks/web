```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerChecksList({
    limit: 1, // optional
    offset: 1, // optional
    order: '', // optional
    id: '', // optional
    containerVersionId: '', // optional
    containerVersionNumber: 1, // optional
    policyVersionNumber: 1, // optional
    reason: '', // optional
    ok: true, // optional
    checkedAt: '' // optional
});

console.log(result);
```
