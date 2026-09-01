```javascript
import { Client, Messaging } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.bindingUpdatePatch({
    id: '',
    channel: '', // optional
    enabled: true, // optional
    eventTopic: '', // optional
    fallbackOrder: 1, // optional
    locale: '', // optional
    recipient: '', // optional
    templateKey: '' // optional
});

console.log(result);
```
