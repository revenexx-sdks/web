```javascript
import { Client, Messaging } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.messagingCreateTextmagicProvider({
    name: '',
    providerId: '',
    apiKey: '', // optional
    enabled: null, // optional
    from: '', // optional
    username: '' // optional
});

console.log(result);
```
