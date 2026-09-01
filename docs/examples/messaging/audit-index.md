```javascript
import { Client, Messaging, ResourceType } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.auditIndex({
    resourceType: ResourceType.Template, // optional
    resourceId: '', // optional
    subject: '', // optional
    limit: 1 // optional
});

console.log(result);
```
