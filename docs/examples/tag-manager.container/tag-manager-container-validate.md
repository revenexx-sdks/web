```javascript
import { Client, TagManagerContainer } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerContainer = new TagManagerContainer(client);

const result = await tagManagerContainer.tagManagerContainerValidate({
    data: {}
});

console.log(result);
```
