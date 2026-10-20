```javascript
import { Client, MailingsRecipients } from "@revenexx/sdk";

const client = new Client()
    .setEndpoint('https://api.revenexx.com') // Your API Endpoint
    .setTenant('<TENANT_SLUG>') // Your tenant slug
    .setApiKeyAuth('<API_KEY>') // A gateway-managed scoped API key (rvxk_…).
;

const mailingsRecipients = new MailingsRecipients(client);

const result = await mailingsRecipients.mailingsRecipientsGet({
    id: ''
});

console.log(result);
```
