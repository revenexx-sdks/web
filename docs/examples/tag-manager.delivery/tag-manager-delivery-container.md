```javascript
import { Client, TagManagerDelivery } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const tagManagerDelivery = new TagManagerDelivery(client);

const result = await tagManagerDelivery.tagManagerDeliveryContainer();

console.log(result);
```
