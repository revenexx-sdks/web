```javascript
import { Client, Messaging, Reason, Scope } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.suppressionStore({
    address: '',
    channel: '',
    reason: Reason.HardBounce,
    expiresAt: '2026-01-01T12:00:00Z', // optional
    note: '', // optional
    scope: Scope.All // optional
});

console.log(result);
```
