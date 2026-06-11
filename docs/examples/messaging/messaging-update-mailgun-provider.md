```javascript
import { Client, Messaging } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.messagingUpdateMailgunProvider({
    providerId: '',
    apiKey: '', // optional
    domain: '', // optional
    enabled: null, // optional
    fromEmail: '', // optional
    fromName: '', // optional
    isEuRegion: null, // optional
    name: '', // optional
    replyToEmail: '', // optional
    replyToName: '' // optional
});

console.log(result);
```
