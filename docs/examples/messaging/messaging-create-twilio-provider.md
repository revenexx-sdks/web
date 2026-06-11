```javascript
import { Client, Messaging } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.messagingCreateTwilioProvider({
    name: '',
    providerId: '',
    accountSid: '', // optional
    authToken: '', // optional
    enabled: null, // optional
    from: '' // optional
});

console.log(result);
```
