```javascript
import { Client, Messaging, Scope, Reason } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.suppressionIndex({
    channel: '', // optional
    scope: Scope.All, // optional
    reason: Reason.HardBounce, // optional
    address: '', // optional
    limit: 1 // optional
});

console.log(result);
```
