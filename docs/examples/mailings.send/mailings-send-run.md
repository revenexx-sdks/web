```javascript
import { Client, MailingsSend } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsSend = new MailingsSend(client);

const result = await mailingsSend.mailingsSendRun({
    data: {}
});

console.log(result);
```
