```javascript
import { Client, Messaging } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const messaging = new Messaging(client);

const result = await messaging.messagingUpdateEmail({
    messageId: '',
    attachments: [], // optional
    bcc: [], // optional
    cc: [], // optional
    content: '', // optional
    draft: null, // optional
    html: null, // optional
    scheduledAt: '', // optional
    subject: '', // optional
    targets: [], // optional
    topics: [], // optional
    users: [] // optional
});

console.log(result);
```
